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
  const screens = { library: $("screen-library"), reader: $("screen-reader"), quiz: $("screen-quiz"), dialogue: $("screen-dialogue"), grammar: $("screen-grammar") };

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

  // ═══════ library tabs carousel ═══════
  const TABS = ["stories", "dialogues", "grammar"];
  let curTab = "stories";
  function setTab(name, animate = true) {
    curTab = name;
    document.querySelectorAll("#lib-tabs .tab").forEach(t => t.classList.toggle("on", t.dataset.tab === name));
    const track = $("tab-track");
    const idx = TABS.indexOf(name);
    if (!animate) track.style.transition = "none";
    track.style.transform = `translateX(-${idx * (100 / TABS.length)}%)`;
    if (!animate) requestAnimationFrame(() => { track.style.transition = ""; });
  }
  $("lib-tabs").addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (t) setTab(t.dataset.tab);
  });
  // swipe left/right on the carousel
  let tcX = null, tcY = null;
  $("tab-carousel").addEventListener("touchstart", (e) => {
    tcX = e.touches[0].clientX; tcY = e.touches[0].clientY;
  }, { passive: true });
  $("tab-carousel").addEventListener("touchend", (e) => {
    if (tcX == null) return;
    const dx = e.changedTouches[0].clientX - tcX;
    const dy = e.changedTouches[0].clientY - tcY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const i = TABS.indexOf(curTab);
      if (dx < 0 && i < TABS.length - 1) setTab(TABS[i + 1]);
      else if (dx > 0 && i > 0) setTab(TABS[i - 1]);
    }
    tcX = tcY = null;
  }, { passive: true });

  // ═══════ dialogues ═══════
  let dlg = null;
  let dlgIdx = -1;          // index of last revealed line
  let dlgAudio = null;

  function renderDialogueLibrary() {
    const list = $("dialogue-list");
    if (!list || typeof DIALOGUES === "undefined") return;
    list.innerHTML = "";
    DIALOGUES.forEach(d => {
      const pr = progress.get("dlg-" + d.id);
      const card = document.createElement("button");
      card.className = "story-card";
      card.innerHTML = `
        <img class="story-thumb" src="${d.cover}" alt="">
        <div class="story-meta">
          <div class="t-ar">${d.title_ar}</div>
          <div class="t-en">${d.title_en}</div>
          <div class="story-badges">
            <span class="badge"><span class="msr">signal_cellular_alt</span>${d.level}</span>
            <span class="badge"><span class="msr">forum</span>${d.lines.length} lines</span>
            ${pr.line != null ? `<span class="badge"><span class="msr">bookmark</span>Line ${pr.line + 1}</span>` : ""}
          </div>
        </div>
        <span class="msr go">arrow_forward</span>`;
      card.addEventListener("click", () => openDialogue(d));
      list.appendChild(card);
    });
  }

  function openDialogue(d) {
    dlg = d;
    dlgIdx = -1;
    $("dlg-title").textContent = d.title_ar;
    $("dlg-chat").innerHTML = "";
    $("dlg-scene-img").src = d.scenes[0];
    show("dialogue");
    updateDlgHud();
    // reveal first line automatically
    nextDlgLine();
  }

  function updateDlgHud() {
    const total = dlg.lines.length;
    const done = dlgIdx + 1;
    $("dlg-progress-label").textContent = done >= total
      ? "Scene complete"
      : `Line ${Math.max(done, 0)} of ${total}`;
    $("dlg-progress-fill").style.width = (done / total * 100) + "%";
    $("dlg-next-icon").textContent = done >= total ? "replay" : "chevron_right";
    $("dlg-speed-label").textContent = (S.speed / 100).toFixed(2).replace(/0$/, "") + "×";
  }

  function bubbleFor(line, idx) {
    const sp = dlg.speakers[line.s];
    const el = document.createElement("div");
    el.className = "bubble " + (line.s === "a" ? "left" : "right");
    el.innerHTML = `
      <div class="b-name">${line.s === "a" ? `<span class="msr" style="font-size:14px">record_voice_over</span>` : ""}${sp.name_ar} · ${sp.name_en}${line.s === "b" ? `<span class="msr" style="font-size:14px">voice_selection</span>` : ""}</div>
      <div class="b-ar" lang="ar">${line.ar}</div>
      <div class="b-tr">${line.tr}</div>
      <div class="b-en">${line.en}</div>`;
    el.addEventListener("click", () => playDlgLine(idx));
    return el;
  }

  function nextDlgLine() {
    const total = dlg.lines.length;
    if (dlgIdx + 1 >= total) {
      // replay from start
      dlgIdx = -1;
      $("dlg-chat").innerHTML = "";
      $("dlg-scene-img").src = dlg.scenes[0];
    }
    dlgIdx++;
    const line = dlg.lines[dlgIdx];
    const chat = $("dlg-chat");
    chat.appendChild(bubbleFor(line, dlgIdx));
    chat.scrollTop = chat.scrollHeight;
    if (dlg.scenes[line.scene] && $("dlg-scene-img").getAttribute("src") !== dlg.scenes[line.scene]) {
      const img = $("dlg-scene-img");
      img.style.opacity = 0;
      setTimeout(() => { img.src = dlg.scenes[line.scene]; img.style.opacity = 1; }, 250);
    }
    progress.set("dlg-" + dlg.id, { line: dlgIdx });
    updateDlgHud();
    playDlgLine(dlgIdx);
  }

  function prevDlgLine() {
    if (dlgIdx <= 0) return;
    const chat = $("dlg-chat");
    chat.removeChild(chat.lastElementChild);
    dlgIdx--;
    const line = dlg.lines[dlgIdx];
    if (dlg.scenes[line.scene]) $("dlg-scene-img").src = dlg.scenes[line.scene];
    progress.set("dlg-" + dlg.id, { line: dlgIdx });
    updateDlgHud();
    playDlgLine(dlgIdx);
  }

  function playDlgLine(idx) {
    stopAudio();
    if (dlgAudio) { dlgAudio.pause(); dlgAudio = null; }
    document.querySelectorAll(".bubble.speaking").forEach(b => b.classList.remove("speaking"));
    const bubbles = $("dlg-chat").children;
    const el = bubbles[idx];
    if (el) el.classList.add("speaking");
    const line = dlg.lines[idx];
    const done = () => { if (el) el.classList.remove("speaking"); };
    if (line.audio) {
      dlgAudio = new Audio(`assets/audio/dialogues/${dlg.id}/${line.audio}.mp3`);
      dlgAudio.playbackRate = S.speed / 100;
      if ("preservesPitch" in dlgAudio) dlgAudio.preservesPitch = true;
      dlgAudio.addEventListener("ended", done);
      dlgAudio.play().catch(() => { speakFallback(line.ar); setTimeout(done, 4000); });
    } else {
      speakFallback(line.ar);
      setTimeout(done, 4000);
    }
  }

  $("btn-dlg-back").addEventListener("click", () => {
    if (dlgAudio) { dlgAudio.pause(); dlgAudio = null; }
    renderDialogueLibrary(); show("library"); setTab("dialogues", false);
  });
  $("btn-dlg-next").addEventListener("click", nextDlgLine);
  $("btn-dlg-prev").addEventListener("click", prevDlgLine);
  $("btn-dlg-replay").addEventListener("click", () => { if (dlgIdx >= 0) playDlgLine(dlgIdx); });
  $("btn-dlg-speed").addEventListener("click", () => { cycleSpeed(); updateDlgHud(); });
  $("btn-dlg-en").addEventListener("click", () => {
    document.body.classList.toggle("dlg-no-en");
    $("dlg-en-icon").textContent = document.body.classList.contains("dlg-no-en") ? "visibility_off" : "translate";
  });
  $("btn-settings-3").addEventListener("click", openSettings);

  // ═══════ grammar drills ═══════
  let gr = null, grIdx = 0, grRevealed = false, grAudio = null;
  const GR_TOTAL = (g) => g.forms.length + 1; // + roles card

  function renderGrammarLibrary() {
    const list = $("grammar-list");
    if (!list || typeof GRAMMAR === "undefined") return;
    list.innerHTML = "";
    GRAMMAR.forEach(g => {
      const pr = progress.get("gr-" + g.id);
      const card = document.createElement("button");
      card.className = "story-card";
      card.innerHTML = `
        <img class="story-thumb" src="${g.img}" alt="">
        <div class="story-meta">
          <div class="t-ar">${g.title_ar}</div>
          <div class="t-en">${g.title_en}</div>
          <div class="story-badges">
            <span class="badge"><span class="msr">school</span>${g.forms.length} forms</span>
            ${pr.done ? `<span class="badge done"><span class="msr">check_circle</span>Done</span>` : ""}
          </div>
        </div>
        <span class="msr go">arrow_forward</span>`;
      card.addEventListener("click", () => openGrammar(g));
      list.appendChild(card);
    });
  }

  function openGrammar(g) {
    gr = g; grIdx = 0; grRevealed = false;
    $("gr-title").textContent = g.title_ar;
    $("gr-img").src = g.img;
    show("grammar");
    renderGrForm();
  }

  function renderGrForm() {
    const total = GR_TOTAL(gr);
    $("gr-progress-label").textContent = `Card ${grIdx + 1} of ${total}`;
    $("gr-progress-fill").style.width = ((grIdx + 1) / total * 100) + "%";
    $("gr-reveal-icon").textContent = grRevealed ? "visibility_off" : "visibility";
    const card = $("gr-card");
    if (grIdx < gr.forms.length) {
      const f = gr.forms[grIdx];
      card.innerHTML = `
        <span class="gr-tag"><span class="msr" style="font-size:15px">school</span>${f.tag}</span>
        <div class="gr-q">${f.q_en}</div>
        <div class="gr-try">Say it in Arabic, then tap the eye to check…</div>
        ${grRevealed ? `
        <div class="gr-answer">
          <div class="gr-ar">${f.ar}</div>
          <div class="gr-tr">${f.tr}</div>
          <div class="gr-note">${f.note}</div>
        </div>` : ""}`;
      if (grRevealed) playGrAudio();
    } else {
      const r = gr.roles;
      card.innerHTML = `
        <span class="gr-tag"><span class="msr" style="font-size:15px">school</span>${r.title}</span>
        <div class="gr-roles">
          ${r.sentence.map((w, i) => `
            <div class="gr-role">
              <span class="r-ar">${w}</span>
              <span class="r-label">${r.labels[i]}</span>
            </div>`).join("")}
        </div>
        <div class="gr-note">${r.explain}</div>`;
      progress.set("gr-" + gr.id, { done: true });
    }
  }

  function playGrAudio() {
    stopAudio();
    if (grAudio) { grAudio.pause(); grAudio = null; }
    if (grIdx >= gr.forms.length) return;
    const f = gr.forms[grIdx];
    if (f.audio) {
      grAudio = new Audio(`assets/audio/grammar/${f.audio}.mp3`);
      grAudio.playbackRate = S.speed / 100;
      if ("preservesPitch" in grAudio) grAudio.preservesPitch = true;
      grAudio.play().catch(() => speakFallback(f.ar));
    } else speakFallback(f.ar);
  }

  $("btn-gr-back").addEventListener("click", () => {
    if (grAudio) { grAudio.pause(); grAudio = null; }
    renderGrammarLibrary(); show("library"); setTab("grammar", false);
  });
  $("btn-gr-reveal").addEventListener("click", () => { grRevealed = !grRevealed; renderGrForm(); });
  $("btn-gr-audio").addEventListener("click", () => { grRevealed = true; renderGrForm(); });
  $("btn-gr-next").addEventListener("click", () => {
    if (grIdx < GR_TOTAL(gr) - 1) { grIdx++; grRevealed = false; renderGrForm(); }
    else { renderGrammarLibrary(); show("library"); setTab("grammar", false); }
  });
  $("btn-gr-prev").addEventListener("click", () => {
    if (grIdx > 0) { grIdx--; grRevealed = false; renderGrForm(); }
  });
  $("btn-settings-4").addEventListener("click", openSettings);

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
  // Only pages listed in data/wordaudio.js (auto-verified by the splitter)
  // use narrator clips. Everything else speaks the EXACT tapped word via
  // the device's Arabic voice — the right word every time, never shifted.
  const VERIFIED = (typeof window !== "undefined" && window.WORD_AUDIO_VERIFIED) || {};
  const BANK = (typeof window !== "undefined" && window.WORD_BANK) || {};
  const stripTashkeel = (s) => s.replace(/[\u064B-\u0652\u0670\u0640]/g, "");
  let lastPeek = null;
  let wordAudio = null;
  function playWord(wordIdx, w) {
    stopAudio();
    if (wordAudio) { wordAudio.pause(); wordAudio = null; }
    const p = story.pages[pageIdx];
    const pageVerified = (VERIFIED[story.id] || []).includes(p.audio);
    if (pageVerified) {
      const n = String(wordIdx + 1).padStart(2, "0");
      playClip(`assets/audio/${story.id}/w/${p.audio}-${n}.mp3`, w.ar);
      return;
    }
    // word bank: verified single-word clips shared across stories
    const bare = stripTashkeel(w.ar);
    const noWaw = bare.startsWith("و") ? bare.slice(1) : null;
    const noFa = bare.startsWith("ف") ? bare.slice(1) : null;
    const id = BANK[bare] || (noWaw && BANK[noWaw]) || (noFa && BANK[noFa]);
    if (id) { playClip(`assets/audio/bank/${id}.mp3`, w.ar); return; }
    speakFallback(w.ar);
  }
  function playClip(src, fallbackText) {
    wordAudio = new Audio(src);
    wordAudio.playbackRate = S.speed / 100;
    if ("preservesPitch" in wordAudio) wordAudio.preservesPitch = true;
    wordAudio.play().catch(() => speakFallback(fallbackText));
  }
  // ── speech synthesis (kept alive against Chrome's quirks) ──
  let arVoice = null, currentUtterance = null, ttsTimer = null;
  function pickArabicVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    // prefer higher-quality voices when several Arabic ones exist
    arVoice = vs.find(v => /^ar/i.test(v.lang) && /natural|neural|online/i.test(v.name))
           || vs.find(v => /^ar/i.test(v.lang))
           || null;
  }
  if ("speechSynthesis" in window) {
    pickArabicVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.addEventListener("voiceschanged", pickArabicVoice);
    }
  }
  function speakFallback(text) {
    if (!("speechSynthesis" in window)) { toast("No Arabic voice on this device"); return; }
    if (!arVoice) pickArabicVoice();
    clearTimeout(ttsTimer);
    speechSynthesis.cancel();
    // Chrome bug: speak() right after cancel() is silently dropped.
    // A short delay makes it reliable.
    ttsTimer = setTimeout(() => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = arVoice ? arVoice.lang : "ar-SA";
      if (arVoice) u.voice = arVoice;
      u.rate = Math.max(0.5, 0.85 * (S.speed / 100));
      u.onerror = () => toast("Speech failed — check device Arabic voice");
      currentUtterance = u;             // hold reference (Chrome GC bug)
      speechSynthesis.speak(u);
      // Chrome sometimes starts paused
      if (speechSynthesis.paused) speechSynthesis.resume();
    }, 80);
  }
  // small non-blocking notice
  let toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
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
      audio.play().catch(() => {
        // last resort: browser TTS reads the sentence
        $("audio-icon").textContent = "volume_up";
        speakFallback(story.pages[pageIdx].ar);
      });
    });
  }
  function stopAudio() {
    if (audio) { audio.pause(); audio = null; }
    if (typeof wordAudio !== "undefined" && wordAudio) { wordAudio.pause(); wordAudio = null; }
    if (typeof dlgAudio !== "undefined" && dlgAudio) { dlgAudio.pause(); dlgAudio = null; }
    if (typeof grAudio !== "undefined" && grAudio) { grAudio.pause(); grAudio = null; }
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
  const APP_VERSION = "v68";
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
  renderDialogueLibrary();
  renderGrammarLibrary();
})();
