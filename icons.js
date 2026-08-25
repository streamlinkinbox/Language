/* Hikaya icons — name → codepoint shim.
   The icon font is subset by codepoint (tiny, loads instantly);
   this maps ligature names like "volume_up" to the private-use glyph,
   so <span class="msr">volume_up</span> keeps working and can NEVER
   flash as raw text. Also watches for dynamically inserted icons. */
(() => {
  "use strict";
  const MAP = {
    arrow_back: 0xe5c4, arrow_forward: 0xe5c8, auto_stories: 0xe666,
    bookmark: 0xe8e7, cancel: 0xe888, celebration: 0xea65,
    check_circle: 0xf0be, chevron_left: 0xe5cb, chevron_right: 0xe5cc,
    close: 0xe5cd, dark_mode: 0xe51c, graphic_eq: 0xe1b8,
    light_mode: 0xe518, menu_book: 0xea19, quiz: 0xf04c,
    radio_button_unchecked: 0xe836, record_voice_over: 0xe91f,
    replay: 0xe042, schedule: 0xefd6, settings: 0xe8b8,
    shelves: 0xf86e, signal_cellular_alt: 0xe202, thumb_up: 0xf577,
    translate: 0xe8e2, visibility: 0xe8f4, visibility_off: 0xe8f5,
    voice_selection: 0xf58a, volume_up: 0xe050, workspace_premium: 0xe7af
  };

  function fix(el) {
    const name = el.textContent.trim();
    if (MAP[name]) {
      el.textContent = String.fromCodePoint(MAP[name]);
      el.dataset.icon = name;
    }
  }

  function scan(root) {
    (root.querySelectorAll ? root.querySelectorAll(".msr") : []).forEach(fix);
    if (root.classList && root.classList.contains("msr")) fix(root);
  }

  // initial pass
  document.addEventListener("DOMContentLoaded", () => scan(document));
  if (document.readyState !== "loading") scan(document);

  // dynamic passes (quiz screens, library cards, icon swaps)
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === "characterData") {
        const el = m.target.parentElement;
        if (el && el.classList && el.classList.contains("msr")) fix(el);
      }
      m.addedNodes && m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) scan(n);
        else if (n.nodeType === 3 && n.parentElement &&
                 n.parentElement.classList.contains("msr")) fix(n.parentElement);
      });
    }
  });
  mo.observe(document.documentElement, { childList: true, characterData: true, subtree: true });
})();
