/* ═══════════════════════════════════════════════
   Hikaya — app logic
   ═══════════════════════════════════════════════ */
(() => {
  "use strict";

  // ── settings (persisted) ──
  const DEFAULTS = {
    theme: "dark",
    font: "naskh",
    scale: 100,
    speed: 100,       // percent
    voice: "m",       // m | f
    translit: true,
    autoplay: false,
    quizEn: true   // show English helper text in quizzes
  };
  const store = {
    load() {
      try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem("hikaya-settings") || "{}") }; }
      catch { return { ...DEFAULTS }; }
    },
    save(s) { localStorage.setItem("hikaya-settings", JSON.stringify(s)); }
  };
  let S = store.load();

  const progress = {
    get(id) {
      try { return JSON.parse(localStorage.getItem("hikaya-progress") || "{}")[id] || {}; }
      catch { return {}; }
    },
    set(id, patch) {
      let all = {};
      try { all = JSON.parse(localStorage.getItem("hikaya-progress") || "{}"); } catch {}
      all[id] = { ...(all[id] || {}), ...patch };
      localStorage.setItem("hikaya-progress", JSON.stringify(all));
    }
  };

  const FONTS = {
    naskh: "'Noto Naskh Arabic', serif",
    amiri: "'Amiri', serif",
    kufi: "'Noto Kufi Arabic', sans-serif"
  };

  const $ = (id) => document.getElementById(id);
  const screens = { library: $("screen-library"), reader: $("screen-reader"), quiz: $("screen-quiz") };

  let story = null;
  let pageIdx = 0;
  let quizIdx = 0;
  let quizScore = 0;
  let audio = null;

  // ═══════ apply settings ═══════
  function applySettings() {
    document.body.dataset.theme = S.theme;
    document.documentElement.style.setProperty("--font-ar", FONTS[S.font]);
    document.documentElement.style.setProperty("--scale", S.scale / 100);
    document.body.classList.toggle("no-translit", !S.translit);
    $("scale-val").textContent = S.scale + "%";
    $("speed-val").textContent = (S.speed / 100).toFixed(1) + "×";
    $("speed-label").textContent = (S.speed / 100).toFixed(2).replace(/0$/, "") + "×";
    $("rng-scale").value = S.scale;
    $("rng-speed").value = S.speed;
    $("chk-translit").checked = S.translit;
    $("chk-autoplay").checked = S.autoplay;
    document.body.classList.toggle("quiz-no-en", !S.quizEn);
    const qi = $("quiz-en-icon");
    if (qi) qi.textContent = S.quizEn ? "visibility" : "visibility_off";
    segSet("seg-theme", S.theme);
    segSet("seg-font", S.font);
    segSet("seg-voice", S.voice);
    if (audio) audio.playbackRate = S.speed / 100;
    const meta = document.querySelector('meta[name="theme-color"]');
    meta.content = getComputedStyle(document.body).getPropertyValue("--bg").trim();
    store.save(S);
  }
  function segSet(segId, val) {
    document.querySelectorAll(`#${segId} button`).forEach(b => b.classList.toggle("on", b.dataset.v === val));
  }
  function segWire(segId, key, after) {
    $(segId).addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      S[key] = b.dataset.v;
      applySettings();
      if (after) after();
    });
  }

  // ═══════ navigation ═══════
  function show(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
    stopAudio();
    window.scrollTo(0, 0);
  }

  // ═══════ library ═══════
  function renderLibrary() {
    const list = $("story-list");
    list.innerHTML = "";
    STORIES.forEach(st => {
      const pr = progress.get(st.id);
      const done = pr.quizBest != null;
      const card = document.createElement("button");
      card.className = "story-card";
      card.innerHTML = `
        <img class="story-thumb" src="${st.cover}" alt="">
        <div class="story-meta">
          <div class="t-ar">${st.title_ar}</div>
          <div class="t-en">${st.title_en}</div>
          <div class="story-badges">
            <span class="badge"><span class="msr">signal_cellular_alt</span>${st.level}</span>
            <span class="badge"><span class="msr">schedule</span>${st.minutes} min</span>
            ${done ? `<span class="badge done"><span class="msr">check_circle</span>Quiz ${pr.quizBest}/${st.quiz.length}</span>`
                   : pr.page ? `<span class="badge"><span class="msr">bookmark</span>Page ${pr.page + 1}</span>` : ""}
          </div>
        </div>
        <span class="msr go">arrow_forward</span>`;
      card.addEventListener("click", () => openStory(st));
      list.appendChild(card);
    });
  }

  function openStory(st) {
    story = st;
    pageIdx = progress.get(st.id).page || 0;
    if (pageIdx >= st.pages.length) pageIdx = 0;
    $("reader-story-title").textContent = st.title_ar;
    show("reader");
    renderPage();
  }

  // ═══════ reader ═══════
  function renderPage() {
    const p = story.pages[pageIdx];
    $("page-img").src = p.img;
    $("reader-progress-label").textContent = `Page ${pageIdx + 1} of ${story.pages.length}`;
    $("progress-fill").style.width = ((pageIdx + 1) / story.pages.length * 100) + "%";
    $("page-tr").textContent = p.tr;

    // tokenised sentence for tap-to-peek
    const sent = $("page-ar");
    sent.innerHTML = "";
    p.words.forEach((w, i) => {
      const span = document.createElement("span");
      span.className = "w";
      span.textContent = w.ar;
      span.addEventListener("click", () => peek(w, span, i));
      sent.appendChild(span);
      if (i < p.words.length - 1) sent.appendChild(document.createTextNode(" "));
    });
    // trailing punctuation
    const m = p.ar.match(/[.!؟،]+$/);
    if (m) sent.appendChild(document.createTextNode(m[0]));

    hidePeek();
    $("translation-box").hidden = true;
    $("btn-translate").classList.remove("on");
    stopAudio();
    progress.set(story.id, { page: pageIdx });

    if (S.autoplay) playAudio();
  }

  function peek(w, span, wordIdx) {
    document.querySelectorAll(".ar-sentence .w.hl").forEach(x => x.classList.remove("hl"));
    span.classList.add("hl");
    $("peek-word").textContent = w.ar;
    $("peek-tr").textContent = w.tr;
    $("peek-en").textContent = w.en;
    $("peek-box").hidden = false;
    lastPeek = { w, wordIdx };
    playWord(wordIdx, w);
  }

  // ── per-word audio ──
  let lastPeek = null;
  let wordAudio = null;
  function playWord(wordIdx, w) {
    stopAudio();
    if (wordAudio) { wordAudio.pause(); wordAudio = null; }
    const p = story.pages[pageIdx];
    const n = String(wordIdx + 1).padStart(2, "0");
    wordAudio = new Audio(`assets/audio/${story.id}/w/${p.audio}-${n}.mp3`);
    wordAudio.playbackRate = S.speed / 100;
    if ("preservesPitch" in wordAudio) wordAudio.preservesPitch = true;
    wordAudio.play().catch(() => speakFallback(w.ar));
  }
  function speakFallback(text) {
    // browser TTS fallback if a word clip is missing
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ar-SA";
    u.rate = 0.8 * (S.speed / 100);
    speechSynthesis.speak(u);
  }
  function hidePeek() {
    $("peek-box").hidden = true;
    document.querySelectorAll(".ar-sentence .w.hl").forEach(x => x.classList.remove("hl"));
  }

  // ── audio ──
  function audioSrc() {
    const p = story.pages[pageIdx];
    return `assets/audio/${story.id}/${S.voice}/${p.audio}.mp3`;
  }
  function playAudio() {
    stopAudio();
    audio = new Audio(audioSrc());
    audio.playbackRate = S.speed / 100;
    // keep pitch natural when slowed
    if ("preservesPitch" in audio) audio.preservesPitch = true;
    $("audio-icon").textContent = "graphic_eq";
    audio.addEventListener("ended", () => { $("audio-icon").textContent = "volume_up"; });
    audio.play().catch(() => {
      // fall back to the other voice folder if this one is missing
      const alt = S.voice === "m" ? "f" : "m";
      audio = new Audio(`assets/audio/${story.id}/${alt}/${story.pages[pageIdx].audio}.mp3`);
      audio.playbackRate = S.speed / 100;
      if ("preservesPitch" in audio) audio.preservesPitch = true;
      audio.addEventListener("ended", () => { $("audio-icon").textContent = "volume_up"; });
      audio.play().catch(() => { $("audio-icon").textContent = "volume_up"; });
    });
  }
  function stopAudio() {
    if (audio) { audio.pause(); audio = null; }
    if (typeof wordAudio !== "undefined" && wordAudio) { wordAudio.pause(); wordAudio = null; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const ic = $("audio-icon");
    if (ic) ic.textContent = "volume_up";
  }

  const SPEED_STEPS = [100, 80, 65, 50];
  function cycleSpeed() {
    const i = SPEED_STEPS.indexOf(S.speed);
    S.speed = SPEED_STEPS[(i + 1) % SPEED_STEPS.length] ?? 100;
    applySettings();
  }

  // ── paging ──
  function nextPage() {
    if (pageIdx < story.pages.length - 1) { pageIdx++; renderPage(); }
    else showStoryEnd();
  }
  function prevPage() {
    if (pageIdx > 0) { pageIdx--; renderPage(); }
  }

  function showStoryEnd() {
    quizIdx = 0; quizScore = 0;
    show("quiz");
    $("quiz-progress-fill").style.width = "0%";
    $("quiz-progress-label").textContent = "Story finished";
    $("quiz-body").innerHTML = `
      <div class="story-end">
        <span class="msr">celebration</span>
        <h2>أَحْسَنْتَ!</h2>
        <p>You finished the story. Ready for a quick quiz?</p>
        <div class="quiz-next-row" style="margin-top:28px; gap:12px; display:flex; justify-content:center; flex-wrap:wrap;">
          <button class="btn-pill" id="btn-start-quiz"><span class="msr">quiz</span> Start quiz</button>
          <button class="btn-pill quiet" id="btn-reread"><span class="msr">replay</span> Read again</button>
        </div>
      </div>`;
    $("btn-start-quiz").addEventListener("click", renderQuiz);
    $("btn-reread").addEventListener("click", () => { pageIdx = 0; show("reader"); renderPage(); });
  }

  // ═══════ quiz ═══════
  function renderQuiz() {
    const total = story.quiz.length;
    if (quizIdx >= total) return renderQuizResult();
    const q = story.quiz[quizIdx];
    $("quiz-progress-label").textContent = `Question ${quizIdx + 1} of ${total}`;
    $("quiz-progress-fill").style.width = (quizIdx / total * 100) + "%";

    const body = $("quiz-body");
    body.innerHTML = `
      <p class="quiz-q-ar" dir="rtl" lang="ar">${q.q_ar}</p>
      <p class="quiz-q-en">${q.q_en}</p>
      <div class="quiz-opts"></div>
      <div class="quiz-explain"></div>`;
    const opts = body.querySelector(".quiz-opts");

    q.options.forEach((o, i) => {
      const b = document.createElement("button");
      b.className = "quiz-opt";
      b.innerHTML = `
        <div>
          <div class="o-ar">${o.ar}</div>
          <div class="o-en">${o.en}</div>
        </div>
        <span class="msr o-mark">radio_button_unchecked</span>`;
      b.addEventListener("click", () => answer(i, b, q, opts));
      opts.appendChild(b);
    });
  }

  function answer(i, btn, q, opts) {
    const buttons = [...opts.querySelectorAll(".quiz-opt")];
    buttons.forEach(b => b.disabled = true);
    const right = i === q.correct;
    if (right) quizScore++;
    btn.classList.add(right ? "correct" : "wrong");
    btn.querySelector(".o-mark").textContent = right ? "check_circle" : "cancel";
    if (!right) {
      const c = buttons[q.correct];
      c.classList.add("correct");
      c.querySelector(".o-mark").textContent = "check_circle";
    }
    const ex = document.querySelector(".quiz-explain");
    ex.innerHTML = `
      <div class="quiz-why"><strong>${right ? "Correct — " : "Not quite — "}</strong>${q.why}</div>
      <div class="quiz-next-row">
        <button class="btn-pill" id="btn-q-next">${quizIdx + 1 < story.quiz.length ? "Next question" : "See result"} <span class="msr">arrow_forward</span></button>
      </div>`;
    $("btn-q-next").addEventListener("click", () => { quizIdx++; renderQuiz(); });
  }

  function renderQuizResult() {
    const total = story.quiz.length;
    $("quiz-progress-fill").style.width = "100%";
    $("quiz-progress-label").textContent = "Result";
    const prev = progress.get(story.id).quizBest || 0;
    progress.set(story.id, { quizBest: Math.max(prev, quizScore) });
    const great = quizScore === total;
    $("quiz-body").innerHTML = `
      <div class="quiz-result">
        <span class="msr">${great ? "workspace_premium" : quizScore >= total / 2 ? "thumb_up" : "menu_book"}</span>
        <h2>${great ? "ممتاز — Excellent!" : quizScore >= total / 2 ? "جيد جدًا — Well done!" : "Keep reading!"}</h2>
        <div class="score">${quizScore} / ${total}</div>
        <p class="note">${great ? "You understood everything." : "Re-read the story and tap words you don't know."}</p>
        <div class="quiz-next-row">
          <button class="btn-pill quiet" id="btn-res-reread"><span class="msr">replay</span> Read again</button>
          <button class="btn-pill" id="btn-res-lib"><span class="msr">shelves</span> Library</button>
        </div>
      </div>`;
    $("btn-res-reread").addEventListener("click", () => { pageIdx = 0; show("reader"); renderPage(); });
    $("btn-res-lib").addEventListener("click", () => { renderLibrary(); show("library"); });
  }

  // ═══════ settings sheet ═══════
  const overlay = $("settings-overlay");
  function openSettings() { overlay.hidden = false; }
  function closeSettings() { overlay.hidden = true; }
  $("btn-settings").addEventListener("click", openSettings);
  $("btn-settings-2").addEventListener("click", openSettings);
  $("settings-close").addEventListener("click", closeSettings);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSettings(); });

  segWire("seg-theme", "theme");
  segWire("seg-font", "font");
  segWire("seg-voice", "voice", () => stopAudio());
  $("rng-scale").addEventListener("input", (e) => { S.scale = +e.target.value; applySettings(); });
  $("rng-speed").addEventListener("input", (e) => { S.speed = +e.target.value; applySettings(); });
  $("chk-translit").addEventListener("change", (e) => { S.translit = e.target.checked; applySettings(); });
  $("chk-autoplay").addEventListener("change", (e) => { S.autoplay = e.target.checked; applySettings(); });

  // ═══════ reader buttons ═══════
  $("btn-back").addEventListener("click", () => { renderLibrary(); show("library"); });
  $("btn-quiz-back").addEventListener("click", () => { show("reader"); renderPage(); });
  $("btn-quiz-en").addEventListener("click", () => {
    S.quizEn = !S.quizEn;
    applySettings();
  });
  $("btn-next").addEventListener("click", nextPage);
  $("btn-prev").addEventListener("click", prevPage);
  $("btn-audio").addEventListener("click", () => {
    if (audio && !audio.paused) stopAudio(); else playAudio();
  });
  $("btn-speed").addEventListener("click", cycleSpeed);
  $("btn-translate").addEventListener("click", () => {
    const box = $("translation-box");
    const p = story.pages[pageIdx];
    box.hidden = !box.hidden;
    $("btn-translate").classList.toggle("on", !box.hidden);
    if (!box.hidden) {
      $("page-en").textContent = p.en;
      $("page-tense").textContent = p.tense;
    }
  });
  $("peek-close").addEventListener("click", hidePeek);
  $("peek-say").addEventListener("click", () => {
    if (lastPeek) playWord(lastPeek.wordIdx, lastPeek.w);
  });

  // keyboard nav (desktop)
  document.addEventListener("keydown", (e) => {
    if (!screens.reader.classList.contains("active")) return;
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
    if (e.key === " ") { e.preventDefault(); if (audio && !audio.paused) stopAudio(); else playAudio(); }
  });

  // swipe nav (mobile)
  let touchX = null;
  $("reader-body").addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  $("reader-body").addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) (dx < 0 ? nextPage() : prevPage());
    touchX = null;
  }, { passive: true });

  // PWA service worker — with a self-healing version check:
  // if an outdated worker/caches are found, wipe them and reload once.
  const APP_VERSION = "v2";
  if ("serviceWorker" in navigator) {
    if (localStorage.getItem("hikaya-app-version") !== APP_VERSION) {
      // nuke any stale workers + caches from older versions
      navigator.serviceWorker.getRegistrations()
        .then(regs => Promise.all(regs.map(r => r.unregister())))
        .then(() => ("caches" in window) ? caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k)))) : null)
        .then(() => {
          const first = !sessionStorage.getItem("hikaya-reloaded");
          localStorage.setItem("hikaya-app-version", APP_VERSION);
          if (first) { sessionStorage.setItem("hikaya-reloaded", "1"); location.reload(); }
        })
        .catch(() => {});
    } else {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  // ═══════ boot ═══════
  applySettings();
  renderLibrary();
})();
