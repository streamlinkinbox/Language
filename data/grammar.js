// ─────────────────────────────────────────────────────────────
// Hikaya — Grammar drills (Set 3)
// One image + one base action. The learner tries to say each
// transformation, then taps to reveal + hear it.
// audio: clip under assets/audio/grammar/ (null = TTS fallback)
// ─────────────────────────────────────────────────────────────
const GRAMMAR = [
  {
    id: "eat",
    title_ar: "يَأْكُلُ",
    title_en: "To eat — أَكَلَ",
    img: "assets/img/grammar/eat.jpg",
    base_en: "The boy eats the apple.",
    hint: "Root: أ-ك-ل. Watch the verb prefix/suffix change with tense, gender and number.",
    forms: [
      { tag: "Present · المضارع", q_en: "The boy eats the apple. (now)",
        ar: "يَأْكُلُ الوَلَدُ التُّفّاحَةَ.",
        tr: "yaʾkulu l-waladu t-tuffāḥata.",
        note: "يَـ prefix = he/it (masculine present).",
        audio: "eat-pres" },
      { tag: "Past · الماضي", q_en: "The boy ate the apple.",
        ar: "أَكَلَ الوَلَدُ التُّفّاحَةَ.",
        tr: "akala l-waladu t-tuffāḥata.",
        note: "Bare past stem أَكَلَ — no prefix.",
        audio: "eat-past" },
      { tag: "Future · المستقبل", q_en: "The boy will eat the apple.",
        ar: "سَيَأْكُلُ الوَلَدُ التُّفّاحَةَ.",
        tr: "sa-yaʾkulu l-waladu t-tuffāḥata.",
        note: "سَـ + present = will.",
        audio: "eat-fut" },
      { tag: "Command · الأمر", q_en: "Eat the apple! (to a boy)",
        ar: "كُلِ التُّفّاحَةَ!",
        tr: "kuli t-tuffāḥata!",
        note: "Irregular short command of أَكَلَ: كُلْ.",
        audio: "eat-cmd" },
      { tag: "Question · السؤال", q_en: "Does the boy eat the apple?",
        ar: "هَلْ يَأْكُلُ الوَلَدُ التُّفّاحَةَ؟",
        tr: "hal yaʾkulu l-waladu t-tuffāḥata?",
        note: "هَلْ turns any statement into a yes/no question.",
        audio: "eat-q" },
      { tag: "She · هي", q_en: "The girl eats the apple.",
        ar: "تَأْكُلُ البِنْتُ التُّفّاحَةَ.",
        tr: "taʾkulu l-bintu t-tuffāḥata.",
        note: "تَـ prefix = she (feminine present).",
        audio: "eat-she" },
      { tag: "Dual · المثنى", q_en: "The two boys eat the apples.",
        ar: "يَأْكُلُ الوَلَدانِ التُّفّاحَ.",
        tr: "yaʾkulu l-waladāni t-tuffāḥa.",
        note: "ـانِ ending on the noun = exactly two.",
        audio: "eat-dual" },
      { tag: "Plural · الجمع", q_en: "The boys eat the apples.",
        ar: "يَأْكُلُ الأَوْلادُ التُّفّاحَ.",
        tr: "yaʾkulu l-awlādu t-tuffāḥa.",
        note: "أَوْلاد = broken plural of وَلَد.",
        audio: "eat-pl" },
      { tag: "Negation · النفي", q_en: "The boy does not eat the apple.",
        ar: "لا يَأْكُلُ الوَلَدُ التُّفّاحَةَ.",
        tr: "lā yaʾkulu l-waladu t-tuffāḥata.",
        note: "لا + present = doesn't. (ما + past, لَنْ + future.)",
        audio: "eat-neg" },
      { tag: "Place · المكان", q_en: "The boy eats the apple in the kitchen.",
        ar: "يَأْكُلُ الوَلَدُ التُّفّاحَةَ في المَطْبَخِ.",
        tr: "yaʾkulu l-waladu t-tuffāḥata fī l-maṭbakhi.",
        note: "في + place at the end — where it happens.",
        audio: "eat-place" }
    ],
    roles: {
      title: "Who does what, to what, where?",
      sentence: ["يَأْكُلُ", "الوَلَدُ", "التُّفّاحَةَ", "في المَطْبَخِ"],
      labels: ["الفِعْل · verb", "الفاعِل · doer (u-ending)", "المَفْعول · object (a-ending)", "المَكان · place"],
      explain: "The DOER takes -u (al-waladU), the OBJECT takes -a (at-tuffāḥatA). The endings — not the order — tell you who does what!"
    }
  }
];
