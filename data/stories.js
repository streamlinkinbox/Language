// ─────────────────────────────────────────────────────────────
// Hikaya — Story data
// Each page: one simple sentence (grade-3 level), tokenised
// word-by-word with transliteration + meaning for "quick peek".
// ─────────────────────────────────────────────────────────────
const STORIES = [
  {
    id: "dog-cat",
    title_ar: "الكَلْبُ وَالقِطَّةُ",
    title_en: "The Dog and the Cat",
    level: "Beginner · A1",
    cover: "assets/img/dog-cat/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/dog-cat/p01.jpg",
        audio: "p01",
        ar: "كانَ الكَلْبُ نائِمًا في الحَديقَةِ.",
        tr: "kāna l-kalbu nāʾiman fī l-ḥadīqati.",
        en: "The dog was sleeping in the garden.",
        tense: "Past continuous — كانَ + active participle",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "نائِمًا", tr: "nāʾiman", en: "sleeping" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" }
        ]
      },
      {
        img: "assets/img/dog-cat/p02.jpg",
        audio: "p02",
        ar: "شَمَّ الكَلْبُ رائِحَةً غَريبَةً.",
        tr: "shamma l-kalbu rāʾiḥatan gharībatan.",
        en: "The dog smelled a strange smell.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "شَمَّ", tr: "shamma", en: "smelled" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "رائِحَةً", tr: "rāʾiḥatan", en: "a smell / scent" },
          { ar: "غَريبَةً", tr: "gharībatan", en: "strange" }
        ]
      },
      {
        img: "assets/img/dog-cat/p03.jpg",
        audio: "p03",
        ar: "كانَتِ القِطَّةُ تَأْكُلُ طَعامَ الكَلْبِ.",
        tr: "kānati l-qiṭṭatu taʾkulu ṭaʿāma l-kalbi.",
        en: "The cat was eating the dog's food.",
        tense: "Past continuous — كانَ + present verb",
        words: [
          { ar: "كانَتِ", tr: "kānati", en: "was (she)" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "تَأْكُلُ", tr: "taʾkulu", en: "eating / eats" },
          { ar: "طَعامَ", tr: "ṭaʿāma", en: "food (of)" },
          { ar: "الكَلْبِ", tr: "al-kalbi", en: "the dog ('s)" }
        ]
      },
      {
        img: "assets/img/dog-cat/p04.jpg",
        audio: "p04",
        ar: "نَبَحَ الكَلْبُ بِصَوْتٍ عالٍ.",
        tr: "nabaḥa l-kalbu bi-ṣawtin ʿālin.",
        en: "The dog barked with a loud voice.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "نَبَحَ", tr: "nabaḥa", en: "barked" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "بِصَوْتٍ", tr: "bi-ṣawtin", en: "with a voice" },
          { ar: "عالٍ", tr: "ʿālin", en: "loud / high" }
        ]
      },
      {
        img: "assets/img/dog-cat/p05.jpg",
        audio: "p05",
        ar: "خافَتِ القِطَّةُ وَرَكَضَتْ بِسُرْعَةٍ.",
        tr: "khāfati l-qiṭṭatu wa-rakaḍat bi-surʿatin.",
        en: "The cat was scared and ran quickly.",
        tense: "Simple past — two verbs joined with وَ",
        words: [
          { ar: "خافَتِ", tr: "khāfati", en: "was scared (she)" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "وَرَكَضَتْ", tr: "wa-rakaḍat", en: "and (she) ran" },
          { ar: "بِسُرْعَةٍ", tr: "bi-surʿatin", en: "quickly / with speed" }
        ]
      },
      {
        img: "assets/img/dog-cat/p06.jpg",
        audio: "p06",
        ar: "طارَدَ الكَلْبُ القِطَّةَ في الحَديقَةِ.",
        tr: "ṭārada l-kalbu l-qiṭṭata fī l-ḥadīqati.",
        en: "The dog chased the cat in the garden.",
        tense: "Simple past — verb + subject + object",
        words: [
          { ar: "طارَدَ", tr: "ṭārada", en: "chased" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "القِطَّةَ", tr: "al-qiṭṭata", en: "the cat" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" }
        ]
      },
      {
        img: "assets/img/dog-cat/p07.jpg",
        audio: "p07",
        ar: "صَعِدَتِ القِطَّةُ إِلى الشَّجَرَةِ الكَبيرَةِ.",
        tr: "ṣaʿidati l-qiṭṭatu ilā sh-shajarati l-kabīrati.",
        en: "The cat climbed up the big tree.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "صَعِدَتِ", tr: "ṣaʿidati", en: "climbed (she)" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "إِلى", tr: "ilā", en: "to / up to" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" },
          { ar: "الكَبيرَةِ", tr: "al-kabīrati", en: "the big" }
        ]
      },
      {
        img: "assets/img/dog-cat/p08.jpg",
        audio: "p08",
        ar: "جَلَسَ الكَلْبُ تَحْتَ الشَّجَرَةِ وَانْتَظَرَ.",
        tr: "jalasa l-kalbu taḥta sh-shajarati wa-ntaẓara.",
        en: "The dog sat under the tree and waited.",
        tense: "Simple past — two actions",
        words: [
          { ar: "جَلَسَ", tr: "jalasa", en: "sat" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" },
          { ar: "وَانْتَظَرَ", tr: "wa-ntaẓara", en: "and waited" }
        ]
      },
      {
        img: "assets/img/dog-cat/p09.jpg",
        audio: "p09",
        ar: "جاءَ الوَلَدُ وَأَعْطى الكَلْبَ طَعامًا جَديدًا.",
        tr: "jāʾa l-waladu wa-aʿṭā l-kalba ṭaʿāman jadīdan.",
        en: "The boy came and gave the dog new food.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "جاءَ", tr: "jāʾa", en: "came" },
          { ar: "الوَلَدُ", tr: "al-waladu", en: "the boy" },
          { ar: "وَأَعْطى", tr: "wa-aʿṭā", en: "and gave" },
          { ar: "الكَلْبَ", tr: "al-kalba", en: "the dog" },
          { ar: "طَعامًا", tr: "ṭaʿāman", en: "food" },
          { ar: "جَديدًا", tr: "jadīdan", en: "new" }
        ]
      },
      {
        img: "assets/img/dog-cat/p10.jpg",
        audio: "p10",
        ar: "الآنَ الكَلْبُ يَأْكُلُ، وَالقِطَّةُ تَنْظُرُ مِنَ الشَّجَرَةِ.",
        tr: "al-āna l-kalbu yaʾkulu, wa-l-qiṭṭatu tanẓuru mina sh-shajarati.",
        en: "Now the dog is eating, and the cat is watching from the tree.",
        tense: "Present — المضارع",
        words: [
          { ar: "الآنَ", tr: "al-āna", en: "now" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "يَأْكُلُ", tr: "yaʾkulu", en: "eats / is eating" },
          { ar: "وَالقِطَّةُ", tr: "wa-l-qiṭṭatu", en: "and the cat" },
          { ar: "تَنْظُرُ", tr: "tanẓuru", en: "looks / is watching" },
          { ar: "مِنَ", tr: "mina", en: "from" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "أَيْنَ كانَ الكَلْبُ في بِدايَةِ القِصَّةِ؟",
        q_en: "Where was the dog at the start of the story?",
        options: [
          { ar: "في الحَديقَةِ", en: "In the garden" },
          { ar: "في السُّوقِ", en: "At the market" },
          { ar: "فَوْقَ الشَّجَرَةِ", en: "Up the tree" }
        ],
        correct: 0,
        why: "كانَ الكَلْبُ نائِمًا في الحَديقَةِ — the dog was sleeping in the garden."
      },
      {
        q_ar: "ماذا كانَ يَفْعَلُ الكَلْبُ في البِدايَةِ؟",
        q_en: "What was the dog doing at the beginning?",
        options: [
          { ar: "كانَ يَأْكُلُ", en: "He was eating" },
          { ar: "كانَ نائِمًا", en: "He was sleeping" },
          { ar: "كانَ يَرْكُضُ", en: "He was running" }
        ],
        correct: 1,
        why: "كانَ نائِمًا — he was sleeping (kāna + active participle = past continuous state)."
      },
      {
        q_ar: "ماذا شَمَّ الكَلْبُ؟",
        q_en: "What did the dog smell?",
        options: [
          { ar: "طَعامًا جَديدًا", en: "New food" },
          { ar: "زَهْرَةً جَميلَةً", en: "A beautiful flower" },
          { ar: "رائِحَةً غَريبَةً", en: "A strange smell" }
        ],
        correct: 2,
        why: "شَمَّ الكَلْبُ رائِحَةً غَريبَةً — he smelled a strange smell."
      },
      {
        q_ar: "لِماذا نَبَحَ الكَلْبُ؟",
        q_en: "Why did the dog bark?",
        options: [
          { ar: "لِأَنَّ القِطَّةَ كانَتْ تَأْكُلُ طَعامَهُ", en: "Because the cat was eating his food" },
          { ar: "لِأَنَّهُ كانَ سَعيدًا", en: "Because he was happy" },
          { ar: "لِأَنَّ الوَلَدَ جاءَ", en: "Because the boy came" }
        ],
        correct: 0,
        why: "The cat was eating the dog's food — كانَتِ القِطَّةُ تَأْكُلُ طَعامَ الكَلْبِ."
      },
      {
        q_ar: "ماذا كانَتِ القِطَّةُ تَأْكُلُ؟",
        q_en: "What was the cat eating?",
        options: [
          { ar: "سَمَكَةً", en: "A fish" },
          { ar: "طَعامَ الكَلْبِ", en: "The dog's food" },
          { ar: "خُبْزًا", en: "Bread" }
        ],
        correct: 1,
        why: "She was eating the dog's food — طَعامَ الكَلْبِ."
      },
      {
        q_ar: "كَيْفَ نَبَحَ الكَلْبُ؟",
        q_en: "How did the dog bark?",
        options: [
          { ar: "بِصَوْتٍ عالٍ", en: "With a loud voice" },
          { ar: "بِصَوْتٍ هادِئٍ", en: "With a quiet voice" },
          { ar: "لَمْ يَنْبَحْ", en: "He didn't bark" }
        ],
        correct: 0,
        why: "نَبَحَ الكَلْبُ بِصَوْتٍ عالٍ — with a loud (high) voice."
      },
      {
        q_ar: "ماذا فَعَلَتِ القِطَّةُ عِنْدَما سَمِعَتِ النُّباحَ؟",
        q_en: "What did the cat do when she heard the barking?",
        options: [
          { ar: "أَكَلَتْ أَكْثَرَ", en: "She ate more" },
          { ar: "نامَتْ", en: "She slept" },
          { ar: "خافَتْ وَرَكَضَتْ", en: "She got scared and ran" }
        ],
        correct: 2,
        why: "خافَتِ القِطَّةُ وَرَكَضَتْ بِسُرْعَةٍ — she was scared and ran quickly."
      },
      {
        q_ar: "مَنْ خافَ في القِصَّةِ؟",
        q_en: "Who was scared in the story?",
        options: [
          { ar: "الكَلْبُ", en: "The dog" },
          { ar: "القِطَّةُ", en: "The cat" },
          { ar: "الوَلَدُ", en: "The boy" }
        ],
        correct: 1,
        why: "خافَتِ القِطَّةُ — the cat (feminine verb ending ـَتْ tells you it's she)."
      },
      {
        q_ar: "كَيْفَ رَكَضَتِ القِطَّةُ؟",
        q_en: "How did the cat run?",
        options: [
          { ar: "بِبُطْءٍ", en: "Slowly" },
          { ar: "بِسُرْعَةٍ", en: "Quickly" },
          { ar: "بِهُدوءٍ", en: "Quietly" }
        ],
        correct: 1,
        why: "رَكَضَتْ بِسُرْعَةٍ — bi-surʿatin = with speed, quickly."
      },
      {
        q_ar: "مَنْ طارَدَ مَنْ؟",
        q_en: "Who chased whom?",
        options: [
          { ar: "الكَلْبُ طارَدَ القِطَّةَ", en: "The dog chased the cat" },
          { ar: "القِطَّةُ طارَدَتِ الكَلْبَ", en: "The cat chased the dog" },
          { ar: "الوَلَدُ طارَدَ الكَلْبَ", en: "The boy chased the dog" }
        ],
        correct: 0,
        why: "طارَدَ الكَلْبُ القِطَّةَ — subject الكَلْبُ (u-ending), object القِطَّةَ (a-ending)."
      },
      {
        q_ar: "أَيْنَ طارَدَ الكَلْبُ القِطَّةَ؟",
        q_en: "Where did the dog chase the cat?",
        options: [
          { ar: "في الشّارِعِ", en: "In the street" },
          { ar: "في البَيْتِ", en: "In the house" },
          { ar: "في الحَديقَةِ", en: "In the garden" }
        ],
        correct: 2,
        why: "طارَدَ الكَلْبُ القِطَّةَ في الحَديقَةِ — in the garden."
      },
      {
        q_ar: "أَيْنَ كانَ الكَلْبُ نائِمًا؟",
        q_en: "Where was the dog sleeping?",
        options: [
          { ar: "في البَيْتِ", en: "In the house" },
          { ar: "تَحْتَ السَّيّارَةِ", en: "Under the car" },
          { ar: "في الحَديقَةِ", en: "In the garden" }
        ],
        correct: 2,
        why: "The story starts: كانَ الكَلْبُ نائِمًا في الحَديقَةِ."
      },
      {
        q_ar: "إِلى أَيْنَ صَعِدَتِ القِطَّةُ؟",
        q_en: "Where did the cat climb?",
        options: [
          { ar: "إِلى الشَّجَرَةِ الكَبيرَةِ", en: "Up the big tree" },
          { ar: "إِلى السَّطْحِ", en: "Onto the roof" },
          { ar: "إِلى الجِدارِ", en: "Onto the wall" }
        ],
        correct: 0,
        why: "She climbed the big tree — صَعِدَتِ القِطَّةُ إِلى الشَّجَرَةِ الكَبيرَةِ."
      },
      {
        q_ar: "كَيْفَ كانَتِ الشَّجَرَةُ؟",
        q_en: "What was the tree like?",
        options: [
          { ar: "صَغيرَةً", en: "Small" },
          { ar: "كَبيرَةً", en: "Big" },
          { ar: "قَصيرَةً", en: "Short" }
        ],
        correct: 1,
        why: "الشَّجَرَةِ الكَبيرَةِ — adjectives follow the noun and agree with it."
      },
      {
        q_ar: "ماذا فَعَلَ الكَلْبُ تَحْتَ الشَّجَرَةِ؟",
        q_en: "What did the dog do under the tree?",
        options: [
          { ar: "جَلَسَ وَانْتَظَرَ", en: "He sat and waited" },
          { ar: "نامَ", en: "He slept" },
          { ar: "حَفَرَ حُفْرَةً", en: "He dug a hole" }
        ],
        correct: 0,
        why: "جَلَسَ الكَلْبُ تَحْتَ الشَّجَرَةِ وَانْتَظَرَ — he sat and waited."
      },
      {
        q_ar: "هَلْ صَعِدَ الكَلْبُ الشَّجَرَةَ؟",
        q_en: "Did the dog climb the tree?",
        options: [
          { ar: "نَعَمْ، صَعِدَ", en: "Yes, he climbed" },
          { ar: "لا، جَلَسَ تَحْتَها", en: "No, he sat under it" },
          { ar: "نَعَمْ، مَعَ القِطَّةِ", en: "Yes, with the cat" }
        ],
        correct: 1,
        why: "Dogs can't climb! جَلَسَ تَحْتَ الشَّجَرَةِ — he sat under it."
      },
      {
        q_ar: "مَنْ أَعْطى الكَلْبَ طَعامًا جَديدًا؟",
        q_en: "Who gave the dog new food?",
        options: [
          { ar: "الأُمُّ", en: "The mother" },
          { ar: "الوَلَدُ", en: "The boy" },
          { ar: "القِطَّةُ", en: "The cat" }
        ],
        correct: 1,
        why: "The boy came and gave the dog new food — جاءَ الوَلَدُ وَأَعْطى الكَلْبَ طَعامًا جَديدًا."
      },
      {
        q_ar: "ماذا أَعْطى الوَلَدُ لِلْكَلْبِ؟",
        q_en: "What did the boy give the dog?",
        options: [
          { ar: "ماءً بارِدًا", en: "Cold water" },
          { ar: "لُعْبَةً", en: "A toy" },
          { ar: "طَعامًا جَديدًا", en: "New food" }
        ],
        correct: 2,
        why: "أَعْطى الكَلْبَ طَعامًا جَديدًا — new food."
      },
      {
        q_ar: "أَيْنَ القِطَّةُ في نِهايَةِ القِصَّةِ؟",
        q_en: "Where is the cat at the end of the story?",
        options: [
          { ar: "في الشَّجَرَةِ", en: "In the tree" },
          { ar: "في البَيْتِ", en: "In the house" },
          { ar: "بِجانِبِ الكَلْبِ", en: "Next to the dog" }
        ],
        correct: 0,
        why: "القِطَّةُ تَنْظُرُ مِنَ الشَّجَرَةِ — she is watching from the tree."
      },
      {
        q_ar: "ماذا تَفْعَلُ القِطَّةُ الآنَ؟",
        q_en: "What is the cat doing now?",
        options: [
          { ar: "تَنامُ في البَيْتِ", en: "Sleeping in the house" },
          { ar: "تَأْكُلُ مَعَ الكَلْبِ", en: "Eating with the dog" },
          { ar: "تَنْظُرُ مِنَ الشَّجَرَةِ", en: "Watching from the tree" }
        ],
        correct: 2,
        why: "Present tense at the end — القِطَّةُ تَنْظُرُ مِنَ الشَّجَرَةِ."
      },
      {
        q_ar: "ماذا يَفْعَلُ الكَلْبُ الآنَ؟",
        q_en: "What is the dog doing now?",
        options: [
          { ar: "يَأْكُلُ", en: "He is eating" },
          { ar: "يَنامُ", en: "He is sleeping" },
          { ar: "يَنْبَحُ", en: "He is barking" }
        ],
        correct: 0,
        why: "الآنَ الكَلْبُ يَأْكُلُ — present tense يَأْكُلُ (ya- prefix = he)."
      },
      {
        q_ar: "«نَبَحَ» — ما زَمَنُ هٰذا الفِعْلِ؟",
        q_en: "\"nabaḥa\" (barked) — what tense is this verb?",
        options: [
          { ar: "الماضي", en: "Past" },
          { ar: "المُضارِع", en: "Present" },
          { ar: "الأَمْر", en: "Command" }
        ],
        correct: 0,
        why: "نَبَحَ is past tense (al-māḍī). Present would be يَنْبَحُ."
      },
      {
        q_ar: "«تَنْظُرُ» — ما زَمَنُ هٰذا الفِعْلِ؟",
        q_en: "\"tanẓuru\" (she watches) — what tense is this verb?",
        options: [
          { ar: "الماضي", en: "Past" },
          { ar: "المُضارِع", en: "Present" },
          { ar: "المُسْتَقْبَل", en: "Future" }
        ],
        correct: 1,
        why: "تَنْظُرُ is present tense (al-muḍāriʿ) — ta- prefix for 'she'. Past would be نَظَرَتْ."
      },
      {
        q_ar: "ما مَعْنى «بِسُرْعَةٍ»؟",
        q_en: "What does \"bi-surʿatin\" mean?",
        options: [
          { ar: "بِبُطْءٍ — slowly", en: "Slowly" },
          { ar: "بِسُرْعَةٍ — quickly", en: "Quickly" },
          { ar: "بِحُزْنٍ — sadly", en: "Sadly" }
        ],
        correct: 1,
        why: "بِ + سُرْعَة = with speed → quickly. The بِ prefix makes adverbs."
      },
      {
        q_ar: "ما عَكْسُ «تَحْتَ»؟",
        q_en: "What is the opposite of \"taḥta\" (under)?",
        options: [
          { ar: "فَوْقَ", en: "Above / on top" },
          { ar: "بِجانِبِ", en: "Beside" },
          { ar: "أَمامَ", en: "In front of" }
        ],
        correct: 0,
        why: "تَحْتَ (under) ↔ فَوْقَ (above). The dog sat taḥta the tree; the cat was fawqa."
      }
    ]
  },

  /* ═══════════ STORY 2 — The Market ═══════════ */
  {
    id: "market",
    title_ar: "سامي في السُّوقِ",
    title_en: "Sami at the Market",
    level: "Beginner · A1",
    cover: "assets/img/market/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/market/p01.jpg",
        audio: "p01",
        ar: "اِسْتَيْقَظَ سامي في الصَّباحِ الباكِرِ.",
        tr: "istayqaẓa sāmī fī ṣ-ṣabāḥi l-bākiri.",
        en: "Sami woke up early in the morning.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "اِسْتَيْقَظَ", tr: "istayqaẓa", en: "woke up" },
          { ar: "سامي", tr: "sāmī", en: "Sami (name)" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" },
          { ar: "الباكِرِ", tr: "al-bākiri", en: "early" }
        ]
      },
      {
        img: "assets/img/market/p02.jpg",
        audio: "p02",
        ar: "قالَتِ الأُمُّ: اِذْهَبْ إِلى السُّوقِ يا سامي.",
        tr: "qālati l-ummu: idhhab ilā s-sūqi yā sāmī.",
        en: "The mother said: Go to the market, Sami.",
        tense: "Past + command — الماضي وَالأَمْر",
        words: [
          { ar: "قالَتِ", tr: "qālati", en: "said (she)" },
          { ar: "الأُمُّ", tr: "al-ummu", en: "the mother" },
          { ar: "اِذْهَبْ", tr: "idhhab", en: "go! (command)" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "السُّوقِ", tr: "as-sūqi", en: "the market" },
          { ar: "يا", tr: "yā", en: "O / hey (calling)" },
          { ar: "سامي", tr: "sāmī", en: "Sami" }
        ]
      },
      {
        img: "assets/img/market/p03.jpg",
        audio: "p03",
        ar: "أَخَذَ سامي السَّلَّةَ وَمَشى إِلى السُّوقِ.",
        tr: "akhadha sāmī s-sallata wa-mashā ilā s-sūqi.",
        en: "Sami took the basket and walked to the market.",
        tense: "Simple past — two actions",
        words: [
          { ar: "أَخَذَ", tr: "akhadha", en: "took" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "السَّلَّةَ", tr: "as-sallata", en: "the basket" },
          { ar: "وَمَشى", tr: "wa-mashā", en: "and walked" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "السُّوقِ", tr: "as-sūqi", en: "the market" }
        ]
      },
      {
        img: "assets/img/market/p04.jpg",
        audio: "p04",
        ar: "كانَ السُّوقُ كَبيرًا وَمُزْدَحِمًا.",
        tr: "kāna s-sūqu kabīran wa-muzdaḥiman.",
        en: "The market was big and crowded.",
        tense: "Past description — كانَ + adjectives",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "السُّوقُ", tr: "as-sūqu", en: "the market" },
          { ar: "كَبيرًا", tr: "kabīran", en: "big" },
          { ar: "وَمُزْدَحِمًا", tr: "wa-muzdaḥiman", en: "and crowded" }
        ]
      },
      {
        img: "assets/img/market/p05.jpg",
        audio: "p05",
        ar: "اِشْتَرى سامي تُفّاحًا أَحْمَرَ مِنَ البائِعِ.",
        tr: "ishtarā sāmī tuffāḥan aḥmara mina l-bāʾiʿi.",
        en: "Sami bought red apples from the seller.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "اِشْتَرى", tr: "ishtarā", en: "bought" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "تُفّاحًا", tr: "tuffāḥan", en: "apples" },
          { ar: "أَحْمَرَ", tr: "aḥmara", en: "red" },
          { ar: "مِنَ", tr: "mina", en: "from" },
          { ar: "البائِعِ", tr: "al-bāʾiʿi", en: "the seller" }
        ]
      },
      {
        img: "assets/img/market/p06.jpg",
        audio: "p06",
        ar: "ثُمَّ اِشْتَرى خُبْزًا طازَجًا مِنَ الخَبّازَةِ.",
        tr: "thumma shtarā khubzan ṭāzajan mina l-khabbāzati.",
        en: "Then he bought fresh bread from the baker (woman).",
        tense: "Simple past — ثُمَّ = then",
        words: [
          { ar: "ثُمَّ", tr: "thumma", en: "then / after that" },
          { ar: "اِشْتَرى", tr: "ishtarā", en: "he bought" },
          { ar: "خُبْزًا", tr: "khubzan", en: "bread" },
          { ar: "طازَجًا", tr: "ṭāzajan", en: "fresh" },
          { ar: "مِنَ", tr: "mina", en: "from" },
          { ar: "الخَبّازَةِ", tr: "al-khabbāzati", en: "the baker (f.)" }
        ]
      },
      {
        img: "assets/img/market/p07.jpg",
        audio: "p07",
        ar: "أَرادَ حَليبًا، لٰكِنَّ النُّقودَ اِنْتَهَتْ.",
        tr: "arāda ḥalīban, lākinna n-nuqūda intahat.",
        en: "He wanted milk, but the money ran out.",
        tense: "Past — لٰكِنَّ = but",
        words: [
          { ar: "أَرادَ", tr: "arāda", en: "he wanted" },
          { ar: "حَليبًا", tr: "ḥalīban", en: "milk" },
          { ar: "لٰكِنَّ", tr: "lākinna", en: "but" },
          { ar: "النُّقودَ", tr: "an-nuqūda", en: "the money" },
          { ar: "اِنْتَهَتْ", tr: "intahat", en: "ran out / finished" }
        ]
      },
      {
        img: "assets/img/market/p08.jpg",
        audio: "p08",
        ar: "أَعْطاهُ البائِعُ الطَّيِّبُ زُجاجَةَ حَليبٍ هَدِيَّةً.",
        tr: "aʿṭāhu l-bāʾiʿu ṭ-ṭayyibu zujājata ḥalībin hadiyyatan.",
        en: "The kind seller gave him a bottle of milk as a gift.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "أَعْطاهُ", tr: "aʿṭāhu", en: "gave him" },
          { ar: "البائِعُ", tr: "al-bāʾiʿu", en: "the seller" },
          { ar: "الطَّيِّبُ", tr: "aṭ-ṭayyibu", en: "the kind" },
          { ar: "زُجاجَةَ", tr: "zujājata", en: "a bottle (of)" },
          { ar: "حَليبٍ", tr: "ḥalībin", en: "milk" },
          { ar: "هَدِيَّةً", tr: "hadiyyatan", en: "as a gift" }
        ]
      },
      {
        img: "assets/img/market/p09.jpg",
        audio: "p09",
        ar: "شَكَرَهُ سامي وَرَجَعَ إِلى البَيْتِ سَعيدًا.",
        tr: "shakarahu sāmī wa-rajaʿa ilā l-bayti saʿīdan.",
        en: "Sami thanked him and returned home happy.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "شَكَرَهُ", tr: "shakarahu", en: "thanked him" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "وَرَجَعَ", tr: "wa-rajaʿa", en: "and returned" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "البَيْتِ", tr: "al-bayti", en: "the house / home" },
          { ar: "سَعيدًا", tr: "saʿīdan", en: "happy" }
        ]
      },
      {
        img: "assets/img/market/p10.jpg",
        audio: "p10",
        ar: "غَدًا سَيَذْهَبُ سامي إِلى السُّوقِ مَرَّةً أُخْرى.",
        tr: "ghadan sa-yadhhabu sāmī ilā s-sūqi marratan ukhrā.",
        en: "Tomorrow Sami will go to the market again.",
        tense: "Future — سَـ + المضارع",
        words: [
          { ar: "غَدًا", tr: "ghadan", en: "tomorrow" },
          { ar: "سَيَذْهَبُ", tr: "sa-yadhhabu", en: "will go" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "السُّوقِ", tr: "as-sūqi", en: "the market" },
          { ar: "مَرَّةً", tr: "marratan", en: "a time / once" },
          { ar: "أُخْرى", tr: "ukhrā", en: "another / again" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "مَتى اِسْتَيْقَظَ سامي؟",
        q_en: "When did Sami wake up?",
        options: [
          { ar: "في اللَّيْلِ", en: "At night" },
          { ar: "في الصَّباحِ الباكِرِ", en: "Early in the morning" },
          { ar: "في الظُّهْرِ", en: "At noon" }
        ],
        correct: 1,
        why: "اِسْتَيْقَظَ سامي في الصَّباحِ الباكِرِ — early in the morning."
      },
      {
        q_ar: "مَنْ قالَ لِسامي أَنْ يَذْهَبَ إِلى السُّوقِ؟",
        q_en: "Who told Sami to go to the market?",
        options: [
          { ar: "أَبوهُ", en: "His father" },
          { ar: "البائِعُ", en: "The seller" },
          { ar: "أُمُّهُ", en: "His mother" }
        ],
        correct: 2,
        why: "قالَتِ الأُمُّ: اِذْهَبْ إِلى السُّوقِ — the mother said: go!"
      },
      {
        q_ar: "«اِذْهَبْ» — ما نَوْعُ هٰذا الفِعْلِ؟",
        q_en: "\"idhhab\" (go!) — what kind of verb is this?",
        options: [
          { ar: "الأَمْر — command", en: "Command" },
          { ar: "الماضي — past", en: "Past" },
          { ar: "المُضارِع — present", en: "Present" }
        ],
        correct: 0,
        why: "اِذْهَبْ is the command form (al-amr) of ذَهَبَ — 'Go!'"
      },
      {
        q_ar: "ماذا أَخَذَ سامي مَعَهُ؟",
        q_en: "What did Sami take with him?",
        options: [
          { ar: "السَّلَّةَ", en: "The basket" },
          { ar: "الكَلْبَ", en: "The dog" },
          { ar: "الكِتابَ", en: "The book" }
        ],
        correct: 0,
        why: "أَخَذَ سامي السَّلَّةَ — he took the basket."
      },
      {
        q_ar: "كَيْفَ كانَ السُّوقُ؟",
        q_en: "What was the market like?",
        options: [
          { ar: "صَغيرًا وَهادِئًا", en: "Small and quiet" },
          { ar: "كَبيرًا وَمُزْدَحِمًا", en: "Big and crowded" },
          { ar: "مُغْلَقًا", en: "Closed" }
        ],
        correct: 1,
        why: "كانَ السُّوقُ كَبيرًا وَمُزْدَحِمًا — big and crowded."
      },
      {
        q_ar: "ماذا اِشْتَرى سامي أَوَّلًا؟",
        q_en: "What did Sami buy first?",
        options: [
          { ar: "خُبْزًا", en: "Bread" },
          { ar: "حَليبًا", en: "Milk" },
          { ar: "تُفّاحًا أَحْمَرَ", en: "Red apples" }
        ],
        correct: 2,
        why: "First he bought red apples — اِشْتَرى تُفّاحًا أَحْمَرَ — then bread (ثُمَّ = then)."
      },
      {
        q_ar: "مِمَّنْ اِشْتَرى الخُبْزَ؟",
        q_en: "From whom did he buy the bread?",
        options: [
          { ar: "مِنَ الخَبّازَةِ", en: "From the baker (woman)" },
          { ar: "مِنَ البائِعِ", en: "From the fruit seller" },
          { ar: "مِنْ أُمِّهِ", en: "From his mother" }
        ],
        correct: 0,
        why: "اِشْتَرى خُبْزًا طازَجًا مِنَ الخَبّازَةِ — from the woman baker (ـة = feminine)."
      },
      {
        q_ar: "لِماذا لَمْ يَشْتَرِ سامي الحَليبَ؟",
        q_en: "Why didn't Sami buy the milk?",
        options: [
          { ar: "لَمْ يَجِدْ حَليبًا", en: "He didn't find milk" },
          { ar: "لِأَنَّ النُّقودَ اِنْتَهَتْ", en: "Because the money ran out" },
          { ar: "لا يُحِبُّ الحَليبَ", en: "He doesn't like milk" }
        ],
        correct: 1,
        why: "أَرادَ حَليبًا لٰكِنَّ النُّقودَ اِنْتَهَتْ — he wanted milk but the money ran out."
      },
      {
        q_ar: "ماذا فَعَلَ البائِعُ الطَّيِّبُ؟",
        q_en: "What did the kind seller do?",
        options: [
          { ar: "أَعْطاهُ حَليبًا هَدِيَّةً", en: "Gave him milk as a gift" },
          { ar: "طَلَبَ نُقودًا أَكْثَرَ", en: "Asked for more money" },
          { ar: "أَغْلَقَ الدُّكّانَ", en: "Closed the shop" }
        ],
        correct: 0,
        why: "أَعْطاهُ زُجاجَةَ حَليبٍ هَدِيَّةً — a bottle of milk as a gift."
      },
      {
        q_ar: "كَيْفَ رَجَعَ سامي إِلى البَيْتِ؟",
        q_en: "How did Sami return home?",
        options: [
          { ar: "حَزينًا", en: "Sad" },
          { ar: "غاضِبًا", en: "Angry" },
          { ar: "سَعيدًا", en: "Happy" }
        ],
        correct: 2,
        why: "رَجَعَ إِلى البَيْتِ سَعيدًا — he returned home happy."
      },
      {
        q_ar: "«سَيَذْهَبُ» — ما زَمَنُ هٰذا الفِعْلِ؟",
        q_en: "\"sa-yadhhabu\" (will go) — what tense is this?",
        options: [
          { ar: "المُسْتَقْبَل", en: "Future" },
          { ar: "الماضي", en: "Past" },
          { ar: "الأَمْر", en: "Command" }
        ],
        correct: 0,
        why: "سَـ + يَذْهَبُ = future. The سَـ prefix means 'will'."
      },
      {
        q_ar: "مَتى سَيَذْهَبُ سامي إِلى السُّوقِ مَرَّةً أُخْرى؟",
        q_en: "When will Sami go to the market again?",
        options: [
          { ar: "اليَوْمَ", en: "Today" },
          { ar: "غَدًا", en: "Tomorrow" },
          { ar: "الأُسْبوعَ القادِمَ", en: "Next week" }
        ],
        correct: 1,
        why: "غَدًا سَيَذْهَبُ — tomorrow (ghadan) he will go."
      },
      {
        q_ar: "ما مَعْنى «مُزْدَحِم»؟",
        q_en: "What does \"muzdaḥim\" mean?",
        options: [
          { ar: "فارِغ — empty", en: "Empty" },
          { ar: "مُزْدَحِم — crowded", en: "Crowded" },
          { ar: "جَميل — beautiful", en: "Beautiful" }
        ],
        correct: 1,
        why: "مُزْدَحِم = crowded, full of people — the opposite of فارِغ (empty)."
      },
      {
        q_ar: "ما عَكْسُ «اِشْتَرى»؟",
        q_en: "What is the opposite of \"ishtarā\" (bought)?",
        options: [
          { ar: "باعَ — sold", en: "Sold" },
          { ar: "أَخَذَ — took", en: "Took" },
          { ar: "وَجَدَ — found", en: "Found" }
        ],
        correct: 0,
        why: "اِشْتَرى (bought) ↔ باعَ (sold). That's why a seller is بائِع."
      },
      {
        q_ar: "ماذا كانَ في سَلَّةِ سامي في النِّهايَةِ؟",
        q_en: "What was in Sami's basket at the end?",
        options: [
          { ar: "تُفّاحٌ وَخُبْزٌ وَحَليبٌ", en: "Apples, bread and milk" },
          { ar: "تُفّاحٌ فَقَطْ", en: "Only apples" },
          { ar: "سَمَكٌ وَأُرْزٌ", en: "Fish and rice" }
        ],
        correct: 0,
        why: "He bought apples and bread, and got milk as a gift — all three!"
      }
    ]
  },

  /* ═══════════ STORY 3 — A Rainy Day ═══════════ */
  {
    id: "rainy-day",
    title_ar: "يَوْمٌ مُمْطِرٌ",
    title_en: "A Rainy Day",
    level: "Beginner · A1",
    cover: "assets/img/rainy-day/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/rainy-day/p01.jpg",
        audio: "p01",
        ar: "نَظَرَتْ لَيْلى مِنَ النّافِذَةِ في الصَّباحِ.",
        tr: "naẓarat laylā mina n-nāfidhati fī ṣ-ṣabāḥi.",
        en: "Layla looked out of the window in the morning.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "نَظَرَتْ", tr: "naẓarat", en: "looked (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla (name)" },
          { ar: "مِنَ", tr: "mina", en: "from / out of" },
          { ar: "النّافِذَةِ", tr: "an-nāfidhati", en: "the window" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" }
        ]
      },
      {
        img: "assets/img/rainy-day/p02.jpg",
        audio: "p02",
        ar: "كانَتِ السَّماءُ رَمادِيَّةً وَالمَطَرُ يَنْزِلُ.",
        tr: "kānati s-samāʾu ramādiyyatan wa-l-maṭaru yanzilu.",
        en: "The sky was grey and the rain was falling.",
        tense: "Past description + present verb",
        words: [
          { ar: "كانَتِ", tr: "kānati", en: "was (she/it f.)" },
          { ar: "السَّماءُ", tr: "as-samāʾu", en: "the sky" },
          { ar: "رَمادِيَّةً", tr: "ramādiyyatan", en: "grey" },
          { ar: "وَالمَطَرُ", tr: "wa-l-maṭaru", en: "and the rain" },
          { ar: "يَنْزِلُ", tr: "yanzilu", en: "falls / is falling" }
        ]
      },
      {
        img: "assets/img/rainy-day/p03.jpg",
        audio: "p03",
        ar: "حَزِنَتْ لَيْلى لِأَنَّها لا تَسْتَطيعُ اللَّعِبَ في الخارِجِ.",
        tr: "ḥazinat laylā li-annahā lā tastaṭīʿu l-laʿiba fī l-khāriji.",
        en: "Layla was sad because she cannot play outside.",
        tense: "Negation — لا + present",
        words: [
          { ar: "حَزِنَتْ", tr: "ḥazinat", en: "became sad (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "لِأَنَّها", tr: "li-annahā", en: "because she" },
          { ar: "لا", tr: "lā", en: "not / cannot" },
          { ar: "تَسْتَطيعُ", tr: "tastaṭīʿu", en: "is able to" },
          { ar: "اللَّعِبَ", tr: "al-laʿiba", en: "playing / to play" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الخارِجِ", tr: "al-khāriji", en: "outside" }
        ]
      },
      {
        img: "assets/img/rainy-day/p04.jpg",
        audio: "p04",
        ar: "قالَتِ الجَدَّةُ: تَعالَيْ يا لَيْلى، عِنْدي فِكْرَةٌ.",
        tr: "qālati l-jaddatu: taʿālay yā laylā, ʿindī fikratun.",
        en: "The grandmother said: Come, Layla, I have an idea.",
        tense: "Command (feminine) — الأَمْر",
        words: [
          { ar: "قالَتِ", tr: "qālati", en: "said (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "تَعالَيْ", tr: "taʿālay", en: "come! (to a girl)" },
          { ar: "يا", tr: "yā", en: "O / hey (calling)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "عِنْدي", tr: "ʿindī", en: "I have" },
          { ar: "فِكْرَةٌ", tr: "fikratun", en: "an idea" }
        ]
      },
      {
        img: "assets/img/rainy-day/p05.jpg",
        audio: "p05",
        ar: "فَتَحَتِ الجَدَّةُ صُنْدوقًا قَديمًا مَليئًا بِالأَوْراقِ المُلَوَّنَةِ.",
        tr: "fataḥati l-jaddatu ṣundūqan qadīman malīʾan bi-l-awrāqi l-mulawwanati.",
        en: "The grandmother opened an old box full of colored papers.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "فَتَحَتِ", tr: "fataḥati", en: "opened (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "صُنْدوقًا", tr: "ṣundūqan", en: "a box" },
          { ar: "قَديمًا", tr: "qadīman", en: "old" },
          { ar: "مَليئًا", tr: "malīʾan", en: "full" },
          { ar: "بِالأَوْراقِ", tr: "bi-l-awrāqi", en: "of papers" },
          { ar: "المُلَوَّنَةِ", tr: "al-mulawwanati", en: "colored" }
        ]
      },
      {
        img: "assets/img/rainy-day/p06.jpg",
        audio: "p06",
        ar: "صَنَعَتا مَعًا طائِرَةً وَرَقِيَّةً جَميلَةً.",
        tr: "ṣanaʿatā maʿan ṭāʾiratan waraqiyyatan jamīlatan.",
        en: "They (both) made a beautiful kite together.",
        tense: "Past — dual (two people)",
        words: [
          { ar: "صَنَعَتا", tr: "ṣanaʿatā", en: "they two made (f.)" },
          { ar: "مَعًا", tr: "maʿan", en: "together" },
          { ar: "طائِرَةً", tr: "ṭāʾiratan", en: "a kite (lit. plane)" },
          { ar: "وَرَقِيَّةً", tr: "waraqiyyatan", en: "paper (adj.)" },
          { ar: "جَميلَةً", tr: "jamīlatan", en: "beautiful" }
        ]
      },
      {
        img: "assets/img/rainy-day/p07.jpg",
        audio: "p07",
        ar: "شَرِبَتا الشّايَ وَأَكَلَتا كَعْكًا بِالتَّمْرِ.",
        tr: "sharibatā sh-shāya wa-akalatā kaʿkan bi-t-tamri.",
        en: "They drank tea and ate date cookies.",
        tense: "Past — dual verbs",
        words: [
          { ar: "شَرِبَتا", tr: "sharibatā", en: "they two drank (f.)" },
          { ar: "الشّايَ", tr: "ash-shāya", en: "the tea" },
          { ar: "وَأَكَلَتا", tr: "wa-akalatā", en: "and they two ate" },
          { ar: "كَعْكًا", tr: "kaʿkan", en: "cookies / cake" },
          { ar: "بِالتَّمْرِ", tr: "bi-t-tamri", en: "with dates" }
        ]
      },
      {
        img: "assets/img/rainy-day/p08.jpg",
        audio: "p08",
        ar: "بَعْدَ ساعَةٍ، تَوَقَّفَ المَطَرُ وَظَهَرَتِ الشَّمْسُ.",
        tr: "baʿda sāʿatin, tawaqqafa l-maṭaru wa-ẓaharati sh-shamsu.",
        en: "After an hour, the rain stopped and the sun appeared.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "بَعْدَ", tr: "baʿda", en: "after" },
          { ar: "ساعَةٍ", tr: "sāʿatin", en: "an hour" },
          { ar: "تَوَقَّفَ", tr: "tawaqqafa", en: "stopped" },
          { ar: "المَطَرُ", tr: "al-maṭaru", en: "the rain" },
          { ar: "وَظَهَرَتِ", tr: "wa-ẓaharati", en: "and appeared" },
          { ar: "الشَّمْسُ", tr: "ash-shamsu", en: "the sun" }
        ]
      },
      {
        img: "assets/img/rainy-day/p09.jpg",
        audio: "p09",
        ar: "قالَتْ لَيْلى: هَيّا نُطَيِّرُ الطّائِرَةَ الوَرَقِيَّةَ!",
        tr: "qālat laylā: hayyā nuṭayyiru ṭ-ṭāʾirata l-waraqiyyata!",
        en: "Layla said: Let's fly the kite!",
        tense: "هَيّا + present = let's…",
        words: [
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "هَيّا", tr: "hayyā", en: "come on / let's" },
          { ar: "نُطَيِّرُ", tr: "nuṭayyiru", en: "we fly (it)" },
          { ar: "الطّائِرَةَ", tr: "aṭ-ṭāʾirata", en: "the kite" },
          { ar: "الوَرَقِيَّةَ", tr: "al-waraqiyyata", en: "paper (adj.)" }
        ]
      },
      {
        img: "assets/img/rainy-day/p10.jpg",
        audio: "p10",
        ar: "في اللَّيْلِ، نامَتْ لَيْلى وَالطّائِرَةُ فَوْقَ سَريرِها.",
        tr: "fī l-layli, nāmat laylā wa-ṭ-ṭāʾiratu fawqa sarīrihā.",
        en: "At night, Layla slept with the kite above her bed.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in / at" },
          { ar: "اللَّيْلِ", tr: "al-layli", en: "the night" },
          { ar: "نامَتْ", tr: "nāmat", en: "slept (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "وَالطّائِرَةُ", tr: "wa-ṭ-ṭāʾiratu", en: "and the kite" },
          { ar: "فَوْقَ", tr: "fawqa", en: "above" },
          { ar: "سَريرِها", tr: "sarīrihā", en: "her bed" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "كَيْفَ كانَتِ السَّماءُ في الصَّباحِ؟",
        q_en: "What was the sky like in the morning?",
        options: [
          { ar: "زَرْقاءَ وَصافِيَةً", en: "Blue and clear" },
          { ar: "رَمادِيَّةً", en: "Grey" },
          { ar: "حَمْراءَ", en: "Red" }
        ],
        correct: 1,
        why: "كانَتِ السَّماءُ رَمادِيَّةً — the sky was grey."
      },
      {
        q_ar: "لِماذا حَزِنَتْ لَيْلى؟",
        q_en: "Why was Layla sad?",
        options: [
          { ar: "لِأَنَّها لا تَسْتَطيعُ اللَّعِبَ في الخارِجِ", en: "Because she can't play outside" },
          { ar: "لِأَنَّها جائِعَةٌ", en: "Because she is hungry" },
          { ar: "لِأَنَّ القِطَّةَ هَرَبَتْ", en: "Because the cat ran away" }
        ],
        correct: 0,
        why: "حَزِنَتْ لِأَنَّها لا تَسْتَطيعُ اللَّعِبَ في الخارِجِ — the rain kept her inside."
      },
      {
        q_ar: "مَنْ كانَ عِنْدَهُ فِكْرَةٌ؟",
        q_en: "Who had an idea?",
        options: [
          { ar: "لَيْلى", en: "Layla" },
          { ar: "الأُمُّ", en: "The mother" },
          { ar: "الجَدَّةُ", en: "The grandmother" }
        ],
        correct: 2,
        why: "قالَتِ الجَدَّةُ: عِنْدي فِكْرَةٌ — grandma said: I have an idea."
      },
      {
        q_ar: "«تَعالَيْ» — ما نَوْعُ هٰذِهِ الكَلِمَةِ؟",
        q_en: "\"taʿālay\" (come!) — what kind of word is this?",
        options: [
          { ar: "أَمْرٌ لِبِنْتٍ", en: "A command to a girl" },
          { ar: "فِعْلٌ ماضٍ", en: "A past verb" },
          { ar: "اِسْمٌ", en: "A noun" }
        ],
        correct: 0,
        why: "تَعالَيْ is the feminine command 'come!'. To a boy you'd say تَعالَ."
      },
      {
        q_ar: "ماذا كانَ في الصُّنْدوقِ القَديمِ؟",
        q_en: "What was in the old box?",
        options: [
          { ar: "نُقودٌ", en: "Money" },
          { ar: "أَوْراقٌ مُلَوَّنَةٌ", en: "Colored papers" },
          { ar: "كُتُبٌ", en: "Books" }
        ],
        correct: 1,
        why: "صُنْدوقًا مَليئًا بِالأَوْراقِ المُلَوَّنَةِ — full of colored papers."
      },
      {
        q_ar: "ماذا صَنَعَتا مَعًا؟",
        q_en: "What did they make together?",
        options: [
          { ar: "كَعْكًا", en: "A cake" },
          { ar: "بَيْتًا صَغيرًا", en: "A small house" },
          { ar: "طائِرَةً وَرَقِيَّةً", en: "A paper kite" }
        ],
        correct: 2,
        why: "صَنَعَتا مَعًا طائِرَةً وَرَقِيَّةً — they made a paper kite together."
      },
      {
        q_ar: "«صَنَعَتا» — لِماذا تَنْتَهي بِـ «تا»؟",
        q_en: "\"ṣanaʿatā\" — why does it end with \"-tā\"?",
        options: [
          { ar: "لِأَنَّهُما اِثْنَتانِ", en: "Because they are two (dual)" },
          { ar: "لِأَنَّهُ جَمْعٌ", en: "Because it's plural" },
          { ar: "لِأَنَّهُ مُسْتَقْبَلٌ", en: "Because it's future" }
        ],
        correct: 0,
        why: "Arabic has a special dual form: صَنَعَتا = they TWO (feminine) made. Layla + grandma."
      },
      {
        q_ar: "ماذا شَرِبَتا مَعَ الكَعْكِ؟",
        q_en: "What did they drink with the cookies?",
        options: [
          { ar: "الشّايَ", en: "Tea" },
          { ar: "الحَليبَ", en: "Milk" },
          { ar: "العَصيرَ", en: "Juice" }
        ],
        correct: 0,
        why: "شَرِبَتا الشّايَ — they drank tea, with date cookies (كَعْك بِالتَّمْر)."
      },
      {
        q_ar: "ماذا حَدَثَ بَعْدَ ساعَةٍ؟",
        q_en: "What happened after an hour?",
        options: [
          { ar: "نَزَلَ ثَلْجٌ", en: "It snowed" },
          { ar: "تَوَقَّفَ المَطَرُ وَظَهَرَتِ الشَّمْسُ", en: "The rain stopped and the sun appeared" },
          { ar: "جاءَ الأَبُ", en: "The father came" }
        ],
        correct: 1,
        why: "تَوَقَّفَ المَطَرُ وَظَهَرَتِ الشَّمْسُ — rain stopped, sun appeared."
      },
      {
        q_ar: "«هَيّا نُطَيِّرُ» — ماذا تَعْني؟",
        q_en: "\"hayyā nuṭayyiru\" — what does it mean?",
        options: [
          { ar: "لا تُطَيِّرْ — don't fly", en: "Don't fly" },
          { ar: "طارَتْ — it flew", en: "It flew" },
          { ar: "هَيّا نُطَيِّرُ — let's fly", en: "Let's fly" }
        ],
        correct: 2,
        why: "هَيّا + we-verb = let's! هَيّا نُطَيِّرُ = come on, let's fly (it)!"
      },
      {
        q_ar: "أَيْنَ طَيَّرَتا الطّائِرَةَ الوَرَقِيَّةَ؟",
        q_en: "Where did they fly the kite?",
        options: [
          { ar: "فَوْقَ التَّلِّ", en: "On the hilltop" },
          { ar: "في البَيْتِ", en: "In the house" },
          { ar: "في السّوقِ", en: "At the market" }
        ],
        correct: 0,
        why: "They flew it outside on the grassy hill above the town after the rain stopped."
      },
      {
        q_ar: "أَيْنَ كانَتِ الطّائِرَةُ في اللَّيْلِ؟",
        q_en: "Where was the kite at night?",
        options: [
          { ar: "في الحَديقَةِ", en: "In the garden" },
          { ar: "فَوْقَ سَريرِ لَيْلى", en: "Above Layla's bed" },
          { ar: "عِنْدَ الجَدَّةِ", en: "With grandma" }
        ],
        correct: 1,
        why: "نامَتْ لَيْلى وَالطّائِرَةُ فَوْقَ سَريرِها — the kite hung above her bed."
      },
      {
        q_ar: "ما مَعْنى «مُمْطِر»؟",
        q_en: "What does \"mumṭir\" mean?",
        options: [
          { ar: "مُشْمِس — sunny", en: "Sunny" },
          { ar: "مُمْطِر — rainy", en: "Rainy" },
          { ar: "بارِد — cold", en: "Cold" }
        ],
        correct: 1,
        why: "مُمْطِر = rainy (from مَطَر = rain). The title: يَوْمٌ مُمْطِرٌ = a rainy day."
      },
      {
        q_ar: "ما عَكْسُ «الخارِج»؟",
        q_en: "What is the opposite of \"al-khārij\" (outside)?",
        options: [
          { ar: "الدّاخِل", en: "Inside" },
          { ar: "الفَوْق", en: "Above" },
          { ar: "البَعيد", en: "Far" }
        ],
        correct: 0,
        why: "الخارِج (outside) ↔ الدّاخِل (inside)."
      },
      {
        q_ar: "«لا تَسْتَطيعُ» — ماذا تَفْعَلُ «لا» هُنا؟",
        q_en: "\"lā tastaṭīʿu\" — what does \"lā\" do here?",
        options: [
          { ar: "تَنْفي الفِعْلَ — makes it negative", en: "Makes the verb negative" },
          { ar: "تَجْعَلُهُ سُؤالًا", en: "Makes it a question" },
          { ar: "تَجْعَلُهُ ماضِيًا", en: "Makes it past" }
        ],
        correct: 0,
        why: "لا + present verb = negation: تَسْتَطيعُ (she can) → لا تَسْتَطيعُ (she cannot)."
      }
    ]
  },

  /* ═══════════ STORY 4 — The Lost Key ═══════════ */
  {
    id: "lost-key",
    title_ar: "المِفْتاحُ الضّائِعُ",
    title_en: "The Lost Key",
    level: "Beginner · A1",
    cover: "assets/img/lost-key/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/lost-key/p01.jpg",
        audio: "p01",
        ar: "فَقَدَ الجَدُّ مِفْتاحَ البَيْتِ.",
        tr: "faqada l-jaddu miftāḥa l-bayti.",
        en: "The grandfather lost the house key.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "فَقَدَ", tr: "faqada", en: "lost" },
          { ar: "الجَدُّ", tr: "al-jaddu", en: "the grandfather" },
          { ar: "مِفْتاحَ", tr: "miftāḥa", en: "key (of)" },
          { ar: "البَيْتِ", tr: "al-bayti", en: "the house" }
        ]
      },
      {
        img: "assets/img/lost-key/p02.jpg",
        audio: "p02",
        ar: "بَحَثَ تَحْتَ الكُرْسِيِّ، فَلَمْ يَجِدْهُ.",
        tr: "baḥatha taḥta l-kursiyyi, fa-lam yajidhu.",
        en: "He searched under the chair, but did not find it.",
        tense: "Past + negation — لَمْ",
        words: [
          { ar: "بَحَثَ", tr: "baḥatha", en: "searched" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "الكُرْسِيِّ", tr: "al-kursiyyi", en: "the chair" },
          { ar: "فَلَمْ", tr: "fa-lam", en: "but… did not" },
          { ar: "يَجِدْهُ", tr: "yajidhu", en: "find it" }
        ]
      },
      {
        img: "assets/img/lost-key/p03.jpg",
        audio: "p03",
        ar: "سَأَلَ الجَدَّةَ: هَلْ رَأَيْتِ مِفْتاحي؟",
        tr: "saʾala l-jaddata: hal raʾayti miftāḥī?",
        en: "He asked the grandmother: Did you see my key?",
        tense: "Question — هَلْ",
        words: [
          { ar: "سَأَلَ", tr: "saʾala", en: "asked" },
          { ar: "الجَدَّةَ", tr: "al-jaddata", en: "the grandmother" },
          { ar: "هَلْ", tr: "hal", en: "did…? (question word)" },
          { ar: "رَأَيْتِ", tr: "raʾayti", en: "you saw (to a woman)" },
          { ar: "مِفْتاحي", tr: "miftāḥī", en: "my key" }
        ]
      },
      {
        img: "assets/img/lost-key/p04.jpg",
        audio: "p04",
        ar: "قالَتِ الجَدَّةُ: لا، ما رَأَيْتُهُ اليَوْمَ.",
        tr: "qālati l-jaddatu: lā, mā raʾaytuhu l-yawma.",
        en: "The grandmother said: No, I haven't seen it today.",
        tense: "Past negation — ما",
        words: [
          { ar: "قالَتِ", tr: "qālati", en: "said (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "لا", tr: "lā", en: "no" },
          { ar: "ما", tr: "mā", en: "not (past)" },
          { ar: "رَأَيْتُهُ", tr: "raʾaytuhu", en: "I saw it" },
          { ar: "اليَوْمَ", tr: "al-yawma", en: "today" }
        ]
      },
      {
        img: "assets/img/lost-key/p05.jpg",
        audio: "p05",
        ar: "بَحَثَ الجَدُّ في المَطْبَخِ وَفي الحَديقَةِ.",
        tr: "baḥatha l-jaddu fī l-maṭbakhi wa-fī l-ḥadīqati.",
        en: "The grandfather searched in the kitchen and in the garden.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "بَحَثَ", tr: "baḥatha", en: "searched" },
          { ar: "الجَدُّ", tr: "al-jaddu", en: "the grandfather" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَطْبَخِ", tr: "al-maṭbakhi", en: "the kitchen" },
          { ar: "وَفي", tr: "wa-fī", en: "and in" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" }
        ]
      },
      {
        img: "assets/img/lost-key/p06.jpg",
        audio: "p06",
        ar: "جاءَتْ حَفيدَتُهُ الصَّغيرَةُ وَضَحِكَتْ.",
        tr: "jāʾat ḥafīdatuhu ṣ-ṣaghīratu wa-ḍaḥikat.",
        en: "His little granddaughter came and laughed.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "جاءَتْ", tr: "jāʾat", en: "came (she)" },
          { ar: "حَفيدَتُهُ", tr: "ḥafīdatuhu", en: "his granddaughter" },
          { ar: "الصَّغيرَةُ", tr: "aṣ-ṣaghīratu", en: "the little" },
          { ar: "وَضَحِكَتْ", tr: "wa-ḍaḥikat", en: "and laughed" }
        ]
      },
      {
        img: "assets/img/lost-key/p07.jpg",
        audio: "p07",
        ar: "قالَتْ: يا جَدّي، اُنْظُرْ فَوْقَ رَأْسِكَ!",
        tr: "qālat: yā jaddī, unẓur fawqa raʾsika!",
        en: "She said: Grandpa, look above your head!",
        tense: "Command — الأَمْر",
        words: [
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "جَدّي", tr: "jaddī", en: "my grandpa" },
          { ar: "اُنْظُرْ", tr: "unẓur", en: "look! (command)" },
          { ar: "فَوْقَ", tr: "fawqa", en: "above" },
          { ar: "رَأْسِكَ", tr: "raʾsika", en: "your head" }
        ]
      },
      {
        img: "assets/img/lost-key/p08.jpg",
        audio: "p08",
        ar: "كانَ المِفْتاحُ في قُبَّعَتِهِ!",
        tr: "kāna l-miftāḥu fī qubbaʿatihi!",
        en: "The key was in his hat!",
        tense: "Past — كانَ",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "المِفْتاحُ", tr: "al-miftāḥu", en: "the key" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "قُبَّعَتِهِ", tr: "qubbaʿatihi", en: "his hat" }
        ]
      },
      {
        img: "assets/img/lost-key/p09.jpg",
        audio: "p09",
        ar: "ضَحِكَ الجَميعُ في البَيْتِ.",
        tr: "ḍaḥika l-jamīʿu fī l-bayti.",
        en: "Everyone in the house laughed.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "ضَحِكَ", tr: "ḍaḥika", en: "laughed" },
          { ar: "الجَميعُ", tr: "al-jamīʿu", en: "everyone" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "البَيْتِ", tr: "al-bayti", en: "the house" }
        ]
      },
      {
        img: "assets/img/lost-key/p10.jpg",
        audio: "p10",
        ar: "الآنَ يَضَعُ الجَدُّ المِفْتاحَ دائِمًا بِجانِبِ البابِ.",
        tr: "al-āna yaḍaʿu l-jaddu l-miftāḥa dāʾiman bi-jānibi l-bābi.",
        en: "Now the grandfather always puts the key next to the door.",
        tense: "Present habit — المضارع + دائِمًا",
        words: [
          { ar: "الآنَ", tr: "al-āna", en: "now" },
          { ar: "يَضَعُ", tr: "yaḍaʿu", en: "puts" },
          { ar: "الجَدُّ", tr: "al-jaddu", en: "the grandfather" },
          { ar: "المِفْتاحَ", tr: "al-miftāḥa", en: "the key" },
          { ar: "دائِمًا", tr: "dāʾiman", en: "always" },
          { ar: "بِجانِبِ", tr: "bi-jānibi", en: "next to" },
          { ar: "البابِ", tr: "al-bābi", en: "the door" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا فَقَدَ الجَدُّ؟",
        q_en: "What did the grandfather lose?",
        options: [
          { ar: "نَظّارَتَهُ", en: "His glasses" },
          { ar: "مِفْتاحَ البَيْتِ", en: "The house key" },
          { ar: "قُبَّعَتَهُ", en: "His hat" }
        ],
        correct: 1,
        why: "فَقَدَ الجَدُّ مِفْتاحَ البَيْتِ — he lost the house key."
      },
      {
        q_ar: "أَيْنَ بَحَثَ الجَدُّ أَوَّلًا؟",
        q_en: "Where did the grandfather search first?",
        options: [
          { ar: "تَحْتَ الكُرْسِيِّ", en: "Under the chair" },
          { ar: "في السَّيّارَةِ", en: "In the car" },
          { ar: "في قُبَّعَتِهِ", en: "In his hat" }
        ],
        correct: 0,
        why: "بَحَثَ تَحْتَ الكُرْسِيِّ — he searched under the chair (but didn't find it)."
      },
      {
        q_ar: "«فَلَمْ يَجِدْهُ» — ماذا تَعْني؟",
        q_en: "\"fa-lam yajidhu\" — what does it mean?",
        options: [
          { ar: "فَوَجَدَهُ — so he found it", en: "So he found it" },
          { ar: "فَلَمْ يَجِدْهُ — he didn't find it", en: "He did not find it" },
          { ar: "سَيَجِدُهُ — he will find it", en: "He will find it" }
        ],
        correct: 1,
        why: "لَمْ + present verb = past negation: lam yajid = he did not find."
      },
      {
        q_ar: "ماذا سَأَلَ الجَدُّ الجَدَّةَ؟",
        q_en: "What did the grandfather ask the grandmother?",
        options: [
          { ar: "هَلْ رَأَيْتِ مِفْتاحي؟", en: "Did you see my key?" },
          { ar: "أَيْنَ الشّايُ؟", en: "Where is the tea?" },
          { ar: "ما الوَقْتُ؟", en: "What time is it?" }
        ],
        correct: 0,
        why: "سَأَلَ: هَلْ رَأَيْتِ مِفْتاحي؟ — hal turns a sentence into a yes/no question."
      },
      {
        q_ar: "هَلْ رَأَتِ الجَدَّةُ المِفْتاحَ؟",
        q_en: "Did the grandmother see the key?",
        options: [
          { ar: "نَعَمْ، رَأَتْهُ", en: "Yes, she saw it" },
          { ar: "لا، ما رَأَتْهُ", en: "No, she didn't see it" },
          { ar: "كانَ مَعَها", en: "She had it" }
        ],
        correct: 1,
        why: "قالَتْ: لا، ما رَأَيْتُهُ اليَوْمَ — mā + past = didn't."
      },
      {
        q_ar: "أَيْنَ بَحَثَ الجَدُّ بَعْدَ ذٰلِكَ؟",
        q_en: "Where did the grandfather search after that?",
        options: [
          { ar: "في المَطْبَخِ وَالحَديقَةِ", en: "In the kitchen and the garden" },
          { ar: "في السُّوقِ", en: "At the market" },
          { ar: "عِنْدَ الجيرانِ", en: "At the neighbors'" }
        ],
        correct: 0,
        why: "بَحَثَ في المَطْبَخِ وَفي الحَديقَةِ — kitchen and garden."
      },
      {
        q_ar: "مَنْ عَرَفَ أَيْنَ المِفْتاحُ؟",
        q_en: "Who knew where the key was?",
        options: [
          { ar: "الجَدَّةُ", en: "The grandmother" },
          { ar: "الجارُ", en: "The neighbor" },
          { ar: "الحَفيدَةُ الصَّغيرَةُ", en: "The little granddaughter" }
        ],
        correct: 2,
        why: "The little granddaughter saw it and laughed — جاءَتْ حَفيدَتُهُ وَضَحِكَتْ."
      },
      {
        q_ar: "«اُنْظُرْ» — ما نَوْعُ هٰذا الفِعْلِ؟",
        q_en: "\"unẓur\" (look!) — what kind of verb is this?",
        options: [
          { ar: "الأَمْر — command", en: "Command" },
          { ar: "الماضي — past", en: "Past" },
          { ar: "المُسْتَقْبَل — future", en: "Future" }
        ],
        correct: 0,
        why: "اُنْظُرْ is the command form of نَظَرَ (to look) — Look!"
      },
      {
        q_ar: "أَيْنَ كانَ المِفْتاحُ؟",
        q_en: "Where was the key?",
        options: [
          { ar: "تَحْتَ الكُرْسِيِّ", en: "Under the chair" },
          { ar: "في قُبَّعَةِ الجَدِّ", en: "In the grandfather's hat" },
          { ar: "في المَطْبَخِ", en: "In the kitchen" }
        ],
        correct: 1,
        why: "كانَ المِفْتاحُ في قُبَّعَتِهِ — in his hat, on his own head the whole time!"
      },
      {
        q_ar: "ماذا فَعَلَ الجَميعُ عِنْدَما وَجَدَ الجَدُّ المِفْتاحَ؟",
        q_en: "What did everyone do when the grandfather found the key?",
        options: [
          { ar: "ضَحِكوا", en: "They laughed" },
          { ar: "غَضِبوا", en: "They got angry" },
          { ar: "ناموا", en: "They slept" }
        ],
        correct: 0,
        why: "ضَحِكَ الجَميعُ — everyone laughed."
      },
      {
        q_ar: "أَيْنَ يَضَعُ الجَدُّ المِفْتاحَ الآنَ؟",
        q_en: "Where does the grandfather put the key now?",
        options: [
          { ar: "في قُبَّعَتِهِ", en: "In his hat" },
          { ar: "تَحْتَ الكُرْسِيِّ", en: "Under the chair" },
          { ar: "بِجانِبِ البابِ", en: "Next to the door" }
        ],
        correct: 2,
        why: "يَضَعُ المِفْتاحَ دائِمًا بِجانِبِ البابِ — always next to the door. Lesson learned!"
      },
      {
        q_ar: "«دائِمًا» — ما مَعْناها؟",
        q_en: "\"dāʾiman\" — what does it mean?",
        options: [
          { ar: "أَحْيانًا — sometimes", en: "Sometimes" },
          { ar: "دائِمًا — always", en: "Always" },
          { ar: "أَبَدًا — never", en: "Never" }
        ],
        correct: 1,
        why: "دائِمًا = always. أَحْيانًا = sometimes, أَبَدًا = never."
      },
      {
        q_ar: "ما عَكْسُ «فَقَدَ»؟",
        q_en: "What is the opposite of \"faqada\" (lost)?",
        options: [
          { ar: "وَجَدَ — found", en: "Found" },
          { ar: "بَحَثَ — searched", en: "Searched" },
          { ar: "أَخَذَ — took", en: "Took" }
        ],
        correct: 0,
        why: "فَقَدَ (lost) ↔ وَجَدَ (found)."
      }
    ]
  },

  /* ═══════════ STORY 5 — The Little Bird ═══════════ */
  {
    id: "little-bird",
    title_ar: "العُصْفورُ الصَّغيرُ",
    title_en: "The Little Bird",
    level: "Beginner · A1",
    cover: "assets/img/little-bird/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/little-bird/s1.jpg",
        audio: "s1",
        ar: "في يَوْمٍ جَميلٍ، سَمِعَ سامي صَوْتًا ضَعيفًا في الحَديقَةِ. وَجَدَ عُصْفورًا صَغيرًا تَحْتَ الشَّجَرَةِ.",
        tr: "fī yawmin jamīlin, samiʿa sāmī ṣawtan ḍaʿīfan fī l-ḥadīqati. wajada ʿuṣfūran ṣaghīran taḥta sh-shajarati.",
        en: "On a beautiful day, Sami heard a weak sound in the garden. He found a little bird under the tree.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in / on" },
          { ar: "يَوْمٍ", tr: "yawmin", en: "a day" },
          { ar: "جَميلٍ", tr: "jamīlin", en: "beautiful" },
          { ar: "سَمِعَ", tr: "samiʿa", en: "heard" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "صَوْتًا", tr: "ṣawtan", en: "a sound / voice" },
          { ar: "ضَعيفًا", tr: "ḍaʿīfan", en: "weak" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" },
          { ar: "وَجَدَ", tr: "wajada", en: "found" },
          { ar: "عُصْفورًا", tr: "ʿuṣfūran", en: "a bird / sparrow" },
          { ar: "صَغيرًا", tr: "ṣaghīran", en: "little" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" }
        ]
      },
      {
        img: "assets/img/little-bird/s2.jpg",
        audio: "s2",
        ar: "كانَ جَناحُ العُصْفورِ مَكْسورًا، وَلا يَسْتَطيعُ الطَّيَرانَ. حَمَلَهُ سامي بِيَدَيْهِ بِرِفْقٍ.",
        tr: "kāna janāḥu l-ʿuṣfūri maksūran, wa-lā yastaṭīʿu ṭ-ṭayarāna. ḥamalahu sāmī bi-yadayhi bi-rifqin.",
        en: "The bird's wing was broken, and it could not fly. Sami carried it gently with his two hands.",
        tense: "كانَ + negation لا",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "جَناحُ", tr: "janāḥu", en: "wing (of)" },
          { ar: "العُصْفورِ", tr: "al-ʿuṣfūri", en: "the bird" },
          { ar: "مَكْسورًا", tr: "maksūran", en: "broken" },
          { ar: "وَلا", tr: "wa-lā", en: "and not" },
          { ar: "يَسْتَطيعُ", tr: "yastaṭīʿu", en: "is able to" },
          { ar: "الطَّيَرانَ", tr: "aṭ-ṭayarāna", en: "flying" },
          { ar: "حَمَلَهُ", tr: "ḥamalahu", en: "carried it" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "بِيَدَيْهِ", tr: "bi-yadayhi", en: "with his two hands" },
          { ar: "بِرِفْقٍ", tr: "bi-rifqin", en: "gently" }
        ]
      },
      {
        img: "assets/img/little-bird/s3.jpg",
        audio: "s3",
        ar: "وَضَعَهُ في صُنْدوقٍ صَغيرٍ وَدافِئٍ. كُلَّ يَوْمٍ، أَعْطاهُ الخُبْزَ وَالماءَ.",
        tr: "waḍaʿahu fī ṣundūqin ṣaghīrin wa-dāfiʾin. kulla yawmin, aʿṭāhu l-khubza wa-l-māʾa.",
        en: "He put it in a small, warm box. Every day, he gave it bread and water.",
        tense: "Past + كُلَّ يَوْمٍ (every day)",
        words: [
          { ar: "وَضَعَهُ", tr: "waḍaʿahu", en: "put it" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "صُنْدوقٍ", tr: "ṣundūqin", en: "a box" },
          { ar: "صَغيرٍ", tr: "ṣaghīrin", en: "small" },
          { ar: "وَدافِئٍ", tr: "wa-dāfiʾin", en: "and warm" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "يَوْمٍ", tr: "yawmin", en: "day" },
          { ar: "أَعْطاهُ", tr: "aʿṭāhu", en: "gave it" },
          { ar: "الخُبْزَ", tr: "al-khubza", en: "the bread" },
          { ar: "وَالماءَ", tr: "wa-l-māʾa", en: "and the water" }
        ]
      },
      {
        img: "assets/img/little-bird/s4.jpg",
        audio: "s4",
        ar: "بَعْدَ أُسْبوعٍ، صارَ العُصْفورُ قَوِيًّا. وَقَفَ عَلى إِصْبَعِ سامي وَرَفْرَفَ بِجَناحَيْهِ.",
        tr: "baʿda usbūʿin, ṣāra l-ʿuṣfūru qawiyyan. waqafa ʿalā iṣbaʿi sāmī wa-rafrafa bi-janāḥayhi.",
        en: "After a week, the bird became strong. It stood on Sami's finger and flapped its wings.",
        tense: "صارَ = became",
        words: [
          { ar: "بَعْدَ", tr: "baʿda", en: "after" },
          { ar: "أُسْبوعٍ", tr: "usbūʿin", en: "a week" },
          { ar: "صارَ", tr: "ṣāra", en: "became" },
          { ar: "العُصْفورُ", tr: "al-ʿuṣfūru", en: "the bird" },
          { ar: "قَوِيًّا", tr: "qawiyyan", en: "strong" },
          { ar: "وَقَفَ", tr: "waqafa", en: "stood" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "إِصْبَعِ", tr: "iṣbaʿi", en: "finger (of)" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "وَرَفْرَفَ", tr: "wa-rafrafa", en: "and flapped" },
          { ar: "بِجَناحَيْهِ", tr: "bi-janāḥayhi", en: "its two wings" }
        ]
      },
      {
        img: "assets/img/little-bird/s5.jpg",
        audio: "s5",
        ar: "فَتَحَ سامي يَدَهُ، فَطارَ العُصْفورُ إِلى السَّماءِ. وَالآنَ يَرْجِعُ كُلَّ صَباحٍ وَيُغَنّي عِنْدَ النّافِذَةِ.",
        tr: "fataḥa sāmī yadahu, fa-ṭāra l-ʿuṣfūru ilā s-samāʾi. wa-l-āna yarjiʿu kulla ṣabāḥin wa-yughannī ʿinda n-nāfidhati.",
        en: "Sami opened his hand, and the bird flew to the sky. And now it returns every morning and sings at the window.",
        tense: "Past → present habit",
        words: [
          { ar: "فَتَحَ", tr: "fataḥa", en: "opened" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "يَدَهُ", tr: "yadahu", en: "his hand" },
          { ar: "فَطارَ", tr: "fa-ṭāra", en: "so (it) flew" },
          { ar: "العُصْفورُ", tr: "al-ʿuṣfūru", en: "the bird" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "السَّماءِ", tr: "as-samāʾi", en: "the sky" },
          { ar: "وَالآنَ", tr: "wa-l-āna", en: "and now" },
          { ar: "يَرْجِعُ", tr: "yarjiʿu", en: "returns" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "صَباحٍ", tr: "ṣabāḥin", en: "morning" },
          { ar: "وَيُغَنّي", tr: "wa-yughannī", en: "and sings" },
          { ar: "عِنْدَ", tr: "ʿinda", en: "at / by" },
          { ar: "النّافِذَةِ", tr: "an-nāfidhati", en: "the window" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا سَمِعَ سامي في الحَديقَةِ؟",
        q_en: "What did Sami hear in the garden?",
        options: [
          { ar: "صَوْتًا ضَعيفًا", en: "A weak sound" },
          { ar: "موسيقى", en: "Music" },
          { ar: "نُباحَ كَلْبٍ", en: "A dog barking" }
        ],
        correct: 0,
        why: "سَمِعَ صَوْتًا ضَعيفًا — a weak little sound."
      },
      {
        q_ar: "لِماذا لا يَسْتَطيعُ العُصْفورُ الطَّيَرانَ؟",
        q_en: "Why couldn't the bird fly?",
        options: [
          { ar: "لِأَنَّهُ صَغيرٌ جِدًّا", en: "Because it was too young" },
          { ar: "لِأَنَّ جَناحَهُ مَكْسورٌ", en: "Because its wing was broken" },
          { ar: "لِأَنَّهُ نائِمٌ", en: "Because it was asleep" }
        ],
        correct: 1,
        why: "كانَ جَناحُ العُصْفورِ مَكْسورًا — its wing was broken."
      },
      {
        q_ar: "كَيْفَ حَمَلَ سامي العُصْفورَ؟",
        q_en: "How did Sami carry the bird?",
        options: [
          { ar: "بِسُرْعَةٍ", en: "Quickly" },
          { ar: "في السَّلَّةِ", en: "In the basket" },
          { ar: "بِرِفْقٍ", en: "Gently" }
        ],
        correct: 2,
        why: "حَمَلَهُ بِيَدَيْهِ بِرِفْقٍ — gently, with both hands."
      },
      {
        q_ar: "ماذا أَعْطى سامي العُصْفورَ كُلَّ يَوْمٍ؟",
        q_en: "What did Sami give the bird every day?",
        options: [
          { ar: "الخُبْزَ وَالماءَ", en: "Bread and water" },
          { ar: "التُّفّاحَ", en: "Apples" },
          { ar: "الحَليبَ", en: "Milk" }
        ],
        correct: 0,
        why: "أَعْطاهُ الخُبْزَ وَالماءَ — bread and water, every day."
      },
      {
        q_ar: "«صارَ قَوِيًّا» — ماذا تَعْني؟",
        q_en: "\"ṣāra qawiyyan\" — what does it mean?",
        options: [
          { ar: "كانَ ضَعيفًا", en: "It was weak" },
          { ar: "أَصْبَحَ قَوِيًّا", en: "It became strong" },
          { ar: "بَقِيَ مَريضًا", en: "It stayed sick" }
        ],
        correct: 1,
        why: "صارَ = became. The bird changed from weak to strong."
      },
      {
        q_ar: "مَتى صارَ العُصْفورُ قَوِيًّا؟",
        q_en: "When did the bird become strong?",
        options: [
          { ar: "بَعْدَ يَوْمٍ", en: "After one day" },
          { ar: "بَعْدَ شَهْرٍ", en: "After a month" },
          { ar: "بَعْدَ أُسْبوعٍ", en: "After a week" }
        ],
        correct: 2,
        why: "بَعْدَ أُسْبوعٍ — after a week."
      },
      {
        q_ar: "ماذا فَعَلَ العُصْفورُ عِنْدَما فَتَحَ سامي يَدَهُ؟",
        q_en: "What did the bird do when Sami opened his hand?",
        options: [
          { ar: "طارَ إِلى السَّماءِ", en: "It flew to the sky" },
          { ar: "نامَ في الصُّنْدوقِ", en: "It slept in the box" },
          { ar: "أَكَلَ الخُبْزَ", en: "It ate the bread" }
        ],
        correct: 0,
        why: "فَطارَ العُصْفورُ إِلى السَّماءِ — it flew up to the sky."
      },
      {
        q_ar: "ماذا يَفْعَلُ العُصْفورُ الآنَ كُلَّ صَباحٍ؟",
        q_en: "What does the bird do now every morning?",
        options: [
          { ar: "يَنامُ في الصُّنْدوقِ", en: "Sleeps in the box" },
          { ar: "يَرْجِعُ وَيُغَنّي عِنْدَ النّافِذَةِ", en: "Returns and sings at the window" },
          { ar: "يَأْكُلُ مَعَ الكَلْبِ", en: "Eats with the dog" }
        ],
        correct: 1,
        why: "يَرْجِعُ كُلَّ صَباحٍ وَيُغَنّي — present tense: a daily habit now."
      },
      {
        q_ar: "ما عَكْسُ «ضَعيف»؟",
        q_en: "What is the opposite of \"ḍaʿīf\" (weak)?",
        options: [
          { ar: "قَوِيّ — strong", en: "Strong" },
          { ar: "صَغير — small", en: "Small" },
          { ar: "سَريع — fast", en: "Fast" }
        ],
        correct: 0,
        why: "ضَعيف (weak) ↔ قَوِيّ (strong)."
      },
      {
        q_ar: "«بِجَناحَيْهِ» — لِماذا «جَناحَيْـ»؟",
        q_en: "\"bi-janāḥayhi\" — why the form \"janāḥay-\"?",
        options: [
          { ar: "لِأَنَّها مُثَنّى — two wings", en: "Because it's dual — two wings" },
          { ar: "لِأَنَّها جَمْعٌ", en: "Because it's plural" },
          { ar: "لِأَنَّهُ اسْمُ عَلَمٍ", en: "Because it's a name" }
        ],
        correct: 0,
        why: "جَناحَيْنِ = two wings (dual form) — birds have exactly two!"
      }
    ]
  },

  /* ═══════════ STORY 6 — A Trip to the Sea ═══════════ */
  {
    id: "sea-trip",
    title_ar: "رِحْلَةٌ إِلى البَحْرِ",
    title_en: "A Trip to the Sea",
    level: "Beginner · A1",
    cover: "assets/img/sea-trip/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/sea-trip/s1.jpg",
        audio: "s1",
        ar: "في الصَّيْفِ، سافَرَتْ لَيْلى مَعَ عائِلَتِها إِلى البَحْرِ. كانَتِ السَّيّارَةُ مَليئَةً بِالطَّعامِ وَالمِظَلَّةِ.",
        tr: "fī ṣ-ṣayfi, sāfarat laylā maʿa ʿāʾilatihā ilā l-baḥri. kānati s-sayyāratu malīʾatan bi-ṭ-ṭaʿāmi wa-l-miẓallati.",
        en: "In the summer, Layla traveled with her family to the sea. The car was full of food and the umbrella.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّيْفِ", tr: "aṣ-ṣayfi", en: "the summer" },
          { ar: "سافَرَتْ", tr: "sāfarat", en: "traveled (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "مَعَ", tr: "maʿa", en: "with" },
          { ar: "عائِلَتِها", tr: "ʿāʾilatihā", en: "her family" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "البَحْرِ", tr: "al-baḥri", en: "the sea" },
          { ar: "كانَتِ", tr: "kānati", en: "was" },
          { ar: "السَّيّارَةُ", tr: "as-sayyāratu", en: "the car" },
          { ar: "مَليئَةً", tr: "malīʾatan", en: "full" },
          { ar: "بِالطَّعامِ", tr: "bi-ṭ-ṭaʿāmi", en: "of food" },
          { ar: "وَالمِظَلَّةِ", tr: "wa-l-miẓallati", en: "and the umbrella" }
        ]
      },
      {
        img: "assets/img/sea-trip/s2.jpg",
        audio: "s2",
        ar: "وَصَلوا إِلى الشّاطِئِ في الصَّباحِ. رَكَضَتْ لَيْلى إِلى الماءِ وَهِيَ تَضْحَكُ.",
        tr: "waṣalū ilā sh-shāṭiʾi fī ṣ-ṣabāḥi. rakaḍat laylā ilā l-māʾi wa-hiya taḍḥaku.",
        en: "They arrived at the beach in the morning. Layla ran to the water, laughing.",
        tense: "Past + حال (while laughing)",
        words: [
          { ar: "وَصَلوا", tr: "waṣalū", en: "they arrived" },
          { ar: "إِلى", tr: "ilā", en: "at / to" },
          { ar: "الشّاطِئِ", tr: "ash-shāṭiʾi", en: "the beach" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" },
          { ar: "رَكَضَتْ", tr: "rakaḍat", en: "ran (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "الماءِ", tr: "al-māʾi", en: "the water" },
          { ar: "وَهِيَ", tr: "wa-hiya", en: "while she" },
          { ar: "تَضْحَكُ", tr: "taḍḥaku", en: "laughs / laughing" }
        ]
      },
      {
        img: "assets/img/sea-trip/s3.jpg",
        audio: "s3",
        ar: "لَعِبَتْ في الماءِ، وَجَمَعَتْ أَصْدافًا جَميلَةً. رَأَتْ سَرَطانًا صَغيرًا يَمْشي عَلى الرَّمْلِ.",
        tr: "laʿibat fī l-māʾi, wa-jamaʿat aṣdāfan jamīlatan. raʾat saraṭānan ṣaghīran yamshī ʿalā r-ramli.",
        en: "She played in the water and collected beautiful seashells. She saw a small crab walking on the sand.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "لَعِبَتْ", tr: "laʿibat", en: "played (she)" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الماءِ", tr: "al-māʾi", en: "the water" },
          { ar: "وَجَمَعَتْ", tr: "wa-jamaʿat", en: "and collected" },
          { ar: "أَصْدافًا", tr: "aṣdāfan", en: "seashells" },
          { ar: "جَميلَةً", tr: "jamīlatan", en: "beautiful" },
          { ar: "رَأَتْ", tr: "raʾat", en: "saw (she)" },
          { ar: "سَرَطانًا", tr: "saraṭānan", en: "a crab" },
          { ar: "صَغيرًا", tr: "ṣaghīran", en: "small" },
          { ar: "يَمْشي", tr: "yamshī", en: "walking" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "الرَّمْلِ", tr: "ar-ramli", en: "the sand" }
        ]
      },
      {
        img: "assets/img/sea-trip/s4.jpg",
        audio: "s4",
        ar: "في الظُّهْرِ، أَكَلَتِ العائِلَةُ تَحْتَ المِظَلَّةِ. كانَ البِطّيخُ بارِدًا وَلَذيذًا.",
        tr: "fī ẓ-ẓuhri, akalati l-ʿāʾilatu taḥta l-miẓallati. kāna l-biṭṭīkhu bāridan wa-ladhīdhan.",
        en: "At noon, the family ate under the umbrella. The watermelon was cold and delicious.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "at" },
          { ar: "الظُّهْرِ", tr: "aẓ-ẓuhri", en: "noon" },
          { ar: "أَكَلَتِ", tr: "akalati", en: "ate" },
          { ar: "العائِلَةُ", tr: "al-ʿāʾilatu", en: "the family" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "المِظَلَّةِ", tr: "al-miẓallati", en: "the umbrella" },
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "البِطّيخُ", tr: "al-biṭṭīkhu", en: "the watermelon" },
          { ar: "بارِدًا", tr: "bāridan", en: "cold" },
          { ar: "وَلَذيذًا", tr: "wa-ladhīdhan", en: "and delicious" }
        ]
      },
      {
        img: "assets/img/sea-trip/s5.jpg",
        audio: "s5",
        ar: "عِنْدَ الغُروبِ، مَشَوْا عَلى الشّاطِئِ. قالَتْ لَيْلى: هٰذا أَجْمَلُ يَوْمٍ في حَياتي!",
        tr: "ʿinda l-ghurūbi, mashaw ʿalā sh-shāṭiʾi. qālat laylā: hādhā ajmalu yawmin fī ḥayātī!",
        en: "At sunset, they walked on the beach. Layla said: This is the most beautiful day of my life!",
        tense: "Past + superlative أَجْمَلُ",
        words: [
          { ar: "عِنْدَ", tr: "ʿinda", en: "at" },
          { ar: "الغُروبِ", tr: "al-ghurūbi", en: "the sunset" },
          { ar: "مَشَوْا", tr: "mashaw", en: "they walked" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "الشّاطِئِ", tr: "ash-shāṭiʾi", en: "the beach" },
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "هٰذا", tr: "hādhā", en: "this (is)" },
          { ar: "أَجْمَلُ", tr: "ajmalu", en: "the most beautiful" },
          { ar: "يَوْمٍ", tr: "yawmin", en: "day" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "حَياتي", tr: "ḥayātī", en: "my life" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "مَتى سافَرَتْ لَيْلى إِلى البَحْرِ؟",
        q_en: "When did Layla travel to the sea?",
        options: [
          { ar: "في الشِّتاءِ", en: "In the winter" },
          { ar: "في الصَّيْفِ", en: "In the summer" },
          { ar: "في الرَّبيعِ", en: "In the spring" }
        ],
        correct: 1,
        why: "في الصَّيْفِ سافَرَتْ — in the summer."
      },
      {
        q_ar: "مَعَ مَنْ سافَرَتْ لَيْلى؟",
        q_en: "With whom did Layla travel?",
        options: [
          { ar: "مَعَ عائِلَتِها", en: "With her family" },
          { ar: "مَعَ جَدَّتِها فَقَطْ", en: "Only with her grandmother" },
          { ar: "وَحْدَها", en: "Alone" }
        ],
        correct: 0,
        why: "سافَرَتْ مَعَ عائِلَتِها — with her family."
      },
      {
        q_ar: "بِماذا كانَتِ السَّيّارَةُ مَليئَةً؟",
        q_en: "What was the car full of?",
        options: [
          { ar: "بِالكُتُبِ", en: "Books" },
          { ar: "بِالأَلْعابِ", en: "Toys" },
          { ar: "بِالطَّعامِ وَالمِظَلَّةِ", en: "Food and the umbrella" }
        ],
        correct: 2,
        why: "مَليئَةً بِالطَّعامِ وَالمِظَلَّةِ — food and the beach umbrella."
      },
      {
        q_ar: "«وَهِيَ تَضْحَكُ» — ماذا تَصِفُ هٰذِهِ الجُمْلَةُ؟",
        q_en: "\"wa-hiya taḍḥaku\" — what does this phrase describe?",
        options: [
          { ar: "ماذا فَعَلَتْ بَعْدَ الرَّكْضِ", en: "What she did after running" },
          { ar: "حالَها وَهِيَ تَرْكُضُ — she ran WHILE laughing", en: "Her state while running — laughing" },
          { ar: "سَبَبَ الرَّكْضِ", en: "Why she ran" }
        ],
        correct: 1,
        why: "وَ + هِيَ + present verb describes the state: she ran *while* laughing."
      },
      {
        q_ar: "ماذا جَمَعَتْ لَيْلى؟",
        q_en: "What did Layla collect?",
        options: [
          { ar: "أَصْدافًا جَميلَةً", en: "Beautiful seashells" },
          { ar: "حِجارَةً", en: "Stones" },
          { ar: "سَرَطاناتٍ", en: "Crabs" }
        ],
        correct: 0,
        why: "جَمَعَتْ أَصْدافًا جَميلَةً — she collected beautiful shells."
      },
      {
        q_ar: "ماذا رَأَتْ يَمْشي عَلى الرَّمْلِ؟",
        q_en: "What did she see walking on the sand?",
        options: [
          { ar: "سُلَحْفاةً", en: "A turtle" },
          { ar: "سَرَطانًا صَغيرًا", en: "A small crab" },
          { ar: "عُصْفورًا", en: "A bird" }
        ],
        correct: 1,
        why: "رَأَتْ سَرَطانًا صَغيرًا يَمْشي عَلى الرَّمْلِ."
      },
      {
        q_ar: "أَيْنَ أَكَلَتِ العائِلَةُ؟",
        q_en: "Where did the family eat?",
        options: [
          { ar: "في مَطْعَمٍ", en: "In a restaurant" },
          { ar: "في السَّيّارَةِ", en: "In the car" },
          { ar: "تَحْتَ المِظَلَّةِ", en: "Under the umbrella" }
        ],
        correct: 2,
        why: "أَكَلَتِ العائِلَةُ تَحْتَ المِظَلَّةِ — under the beach umbrella."
      },
      {
        q_ar: "كَيْفَ كانَ البِطّيخُ؟",
        q_en: "How was the watermelon?",
        options: [
          { ar: "بارِدًا وَلَذيذًا", en: "Cold and delicious" },
          { ar: "ساخِنًا", en: "Hot" },
          { ar: "حامِضًا", en: "Sour" }
        ],
        correct: 0,
        why: "كانَ البِطّيخُ بارِدًا وَلَذيذًا — cold and delicious."
      },
      {
        q_ar: "ماذا فَعَلوا عِنْدَ الغُروبِ؟",
        q_en: "What did they do at sunset?",
        options: [
          { ar: "سَبَحوا في البَحْرِ", en: "They swam in the sea" },
          { ar: "مَشَوْا عَلى الشّاطِئِ", en: "They walked on the beach" },
          { ar: "رَجَعوا إِلى البَيْتِ", en: "They went straight home" }
        ],
        correct: 1,
        why: "عِنْدَ الغُروبِ مَشَوْا عَلى الشّاطِئِ — a sunset walk."
      },
      {
        q_ar: "«أَجْمَلُ يَوْمٍ» — ماذا تَعْني؟",
        q_en: "\"ajmalu yawmin\" — what does it mean?",
        options: [
          { ar: "يَوْمٌ جَميلٌ — a beautiful day", en: "A beautiful day" },
          { ar: "أَجْمَلُ يَوْمٍ — THE most beautiful day", en: "The MOST beautiful day" },
          { ar: "يَوْمٌ طَويلٌ — a long day", en: "A long day" }
        ],
        correct: 1,
        why: "أَفْعَل pattern (أَجْمَل from جَميل) = superlative: the most beautiful."
      },
      {
        q_ar: "ما عَكْسُ «بارِد»؟",
        q_en: "What is the opposite of \"bārid\" (cold)?",
        options: [
          { ar: "ساخِن — hot", en: "Hot" },
          { ar: "لَذيذ — delicious", en: "Delicious" },
          { ar: "جافّ — dry", en: "Dry" }
        ],
        correct: 0,
        why: "بارِد (cold) ↔ ساخِن (hot)."
      },
      {
        q_ar: "«مَشَوْا» — مَنِ الَّذي مَشى؟",
        q_en: "\"mashaw\" — who walked?",
        options: [
          { ar: "لَيْلى فَقَطْ", en: "Only Layla" },
          { ar: "هُمْ جَميعًا — العائِلَةُ", en: "They all — the family" },
          { ar: "الأَبُ فَقَطْ", en: "Only the father" }
        ],
        correct: 1,
        why: "The ـوْا ending = they (plural). The whole family walked."
      }
    ]
  },

  /* ═══════════ STORY 7 — A Day at School ═══════════ */
  {
    id: "school-day",
    title_ar: "يَوْمٌ في المَدْرَسَةِ",
    title_en: "A Day at School",
    level: "Beginner · A1",
    cover: "assets/img/school-day/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/school-day/s1.jpg",
        audio: "s1",
        ar: "في الصَّباحِ، ذَهَبَ عُمَرُ إِلى المَدْرَسَةِ. كانَتْ حَقيبَتُهُ الحَمْراءُ عَلى ظَهْرِهِ.",
        tr: "fī ṣ-ṣabāḥi, dhahaba ʿumaru ilā l-madrasati. kānat ḥaqībatuhu l-ḥamrāʾu ʿalā ẓahrihi.",
        en: "In the morning, Omar went to school. His red bag was on his back.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" },
          { ar: "ذَهَبَ", tr: "dhahaba", en: "went" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar (name)" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "المَدْرَسَةِ", tr: "al-madrasati", en: "the school" },
          { ar: "كانَتْ", tr: "kānat", en: "was" },
          { ar: "حَقيبَتُهُ", tr: "ḥaqībatuhu", en: "his bag" },
          { ar: "الحَمْراءُ", tr: "al-ḥamrāʾu", en: "the red (f.)" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "ظَهْرِهِ", tr: "ẓahrihi", en: "his back" }
        ]
      },
      {
        img: "assets/img/school-day/s2.jpg",
        audio: "s2",
        ar: "في الصَّفِّ، كَتَبَتِ المُعَلِّمَةُ دَرْسًا جَديدًا. اِسْتَمَعَ عُمَرُ جَيِّدًا.",
        tr: "fī ṣ-ṣaffi, katabati l-muʿallimatu darsan jadīdan. istamaʿa ʿumaru jayyidan.",
        en: "In the classroom, the teacher wrote a new lesson. Omar listened well.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّفِّ", tr: "aṣ-ṣaffi", en: "the classroom" },
          { ar: "كَتَبَتِ", tr: "katabati", en: "wrote (she)" },
          { ar: "المُعَلِّمَةُ", tr: "al-muʿallimatu", en: "the teacher (f.)" },
          { ar: "دَرْسًا", tr: "darsan", en: "a lesson" },
          { ar: "جَديدًا", tr: "jadīdan", en: "new" },
          { ar: "اِسْتَمَعَ", tr: "istamaʿa", en: "listened" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "جَيِّدًا", tr: "jayyidan", en: "well" }
        ]
      },
      {
        img: "assets/img/school-day/s3.jpg",
        audio: "s3",
        ar: "في الاِسْتِراحَةِ، رَأى عُمَرُ وَلَدًا يَجْلِسُ وَحيدًا. أَعْطاهُ نِصْفَ سَنْدَويشَتِهِ.",
        tr: "fī l-istirāḥati, raʾā ʿumaru waladan yajlisu waḥīdan. aʿṭāhu niṣfa sandawīshatihi.",
        en: "At break time, Omar saw a boy sitting alone. He gave him half of his sandwich.",
        tense: "Past + description",
        words: [
          { ar: "في", tr: "fī", en: "at / in" },
          { ar: "الاِسْتِراحَةِ", tr: "al-istirāḥati", en: "the break" },
          { ar: "رَأى", tr: "raʾā", en: "saw" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "وَلَدًا", tr: "waladan", en: "a boy" },
          { ar: "يَجْلِسُ", tr: "yajlisu", en: "sitting" },
          { ar: "وَحيدًا", tr: "waḥīdan", en: "alone" },
          { ar: "أَعْطاهُ", tr: "aʿṭāhu", en: "gave him" },
          { ar: "نِصْفَ", tr: "niṣfa", en: "half (of)" },
          { ar: "سَنْدَويشَتِهِ", tr: "sandawīshatihi", en: "his sandwich" }
        ]
      },
      {
        img: "assets/img/school-day/s4.jpg",
        audio: "s4",
        ar: "بَعْدَ الاِسْتِراحَةِ، جَلَسا مَعًا في الصَّفِّ. حَلّا التَّمارينَ بِسُهولَةٍ.",
        tr: "baʿda l-istirāḥati, jalasā maʿan fī ṣ-ṣaffi. ḥallā t-tamārīna bi-suhūlatin.",
        en: "After the break, they (both) sat together in class. They solved the exercises easily.",
        tense: "Dual past — جَلَسا / حَلّا",
        words: [
          { ar: "بَعْدَ", tr: "baʿda", en: "after" },
          { ar: "الاِسْتِراحَةِ", tr: "al-istirāḥati", en: "the break" },
          { ar: "جَلَسا", tr: "jalasā", en: "they two sat" },
          { ar: "مَعًا", tr: "maʿan", en: "together" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّفِّ", tr: "aṣ-ṣaffi", en: "the classroom" },
          { ar: "حَلّا", tr: "ḥallā", en: "they two solved" },
          { ar: "التَّمارينَ", tr: "at-tamārīna", en: "the exercises" },
          { ar: "بِسُهولَةٍ", tr: "bi-suhūlatin", en: "easily" }
        ]
      },
      {
        img: "assets/img/school-day/s5.jpg",
        audio: "s5",
        ar: "في المَساءِ، رَجَعا إِلى البَيْتِ مَعًا. قالَ عُمَرُ: اليَوْمَ وَجَدْتُ صَديقًا جَديدًا!",
        tr: "fī l-masāʾi, rajaʿā ilā l-bayti maʿan. qāla ʿumaru: al-yawma wajadtu ṣadīqan jadīdan!",
        en: "In the evening, they returned home together. Omar said: Today I found a new friend!",
        tense: "Dual past + I-form وَجَدْتُ",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَساءِ", tr: "al-masāʾi", en: "the evening" },
          { ar: "رَجَعا", tr: "rajaʿā", en: "they two returned" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "البَيْتِ", tr: "al-bayti", en: "the house" },
          { ar: "مَعًا", tr: "maʿan", en: "together" },
          { ar: "قالَ", tr: "qāla", en: "said (he)" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "اليَوْمَ", tr: "al-yawma", en: "today" },
          { ar: "وَجَدْتُ", tr: "wajadtu", en: "I found" },
          { ar: "صَديقًا", tr: "ṣadīqan", en: "a friend" },
          { ar: "جَديدًا", tr: "jadīdan", en: "new" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "إِلى أَيْنَ ذَهَبَ عُمَرُ في الصَّباحِ؟",
        q_en: "Where did Omar go in the morning?",
        options: [
          { ar: "إِلى السُّوقِ", en: "To the market" },
          { ar: "إِلى المَدْرَسَةِ", en: "To school" },
          { ar: "إِلى البَحْرِ", en: "To the sea" }
        ],
        correct: 1,
        why: "ذَهَبَ عُمَرُ إِلى المَدْرَسَةِ — he went to school."
      },
      {
        q_ar: "ما لَوْنُ حَقيبَةِ عُمَرَ؟",
        q_en: "What color is Omar's bag?",
        options: [
          { ar: "زَرْقاءُ", en: "Blue" },
          { ar: "خَضْراءُ", en: "Green" },
          { ar: "حَمْراءُ", en: "Red" }
        ],
        correct: 2,
        why: "حَقيبَتُهُ الحَمْراءُ — his red bag. (Note: ḥamrāʾ is the feminine of aḥmar.)"
      },
      {
        q_ar: "ماذا فَعَلَتِ المُعَلِّمَةُ في الصَّفِّ؟",
        q_en: "What did the teacher do in class?",
        options: [
          { ar: "كَتَبَتْ دَرْسًا جَديدًا", en: "She wrote a new lesson" },
          { ar: "قَرَأَتْ قِصَّةً", en: "She read a story" },
          { ar: "غَنَّتْ أُغْنِيَةً", en: "She sang a song" }
        ],
        correct: 0,
        why: "كَتَبَتِ المُعَلِّمَةُ دَرْسًا جَديدًا — she wrote a new lesson."
      },
      {
        q_ar: "كَيْفَ اِسْتَمَعَ عُمَرُ لِلدَّرْسِ؟",
        q_en: "How did Omar listen to the lesson?",
        options: [
          { ar: "جَيِّدًا", en: "Well / attentively" },
          { ar: "وَهُوَ نائِمٌ", en: "While sleeping" },
          { ar: "لَمْ يَسْتَمِعْ", en: "He didn't listen" }
        ],
        correct: 0,
        why: "اِسْتَمَعَ جَيِّدًا — he listened well."
      },
      {
        q_ar: "مَنْ رَأى عُمَرُ في الاِسْتِراحَةِ؟",
        q_en: "Who did Omar see at break time?",
        options: [
          { ar: "مُعَلِّمًا جَديدًا", en: "A new teacher" },
          { ar: "وَلَدًا يَجْلِسُ وَحيدًا", en: "A boy sitting alone" },
          { ar: "أُمَّهُ", en: "His mother" }
        ],
        correct: 1,
        why: "رَأى وَلَدًا يَجْلِسُ وَحيدًا — a boy sitting alone."
      },
      {
        q_ar: "ماذا أَعْطى عُمَرُ لِلْوَلَدِ؟",
        q_en: "What did Omar give the boy?",
        options: [
          { ar: "نِصْفَ سَنْدَويشَتِهِ", en: "Half of his sandwich" },
          { ar: "تُفّاحَةً", en: "An apple" },
          { ar: "كِتابًا", en: "A book" }
        ],
        correct: 0,
        why: "أَعْطاهُ نِصْفَ سَنْدَويشَتِهِ — he shared half his sandwich. نِصْف = half."
      },
      {
        q_ar: "«جَلَسا» — كَمْ شَخْصًا جَلَسَ؟",
        q_en: "\"jalasā\" — how many people sat?",
        options: [
          { ar: "واحِدٌ", en: "One" },
          { ar: "اِثْنانِ", en: "Two" },
          { ar: "ثَلاثَةٌ", en: "Three" }
        ],
        correct: 1,
        why: "The ـا ending on جَلَسا = dual: exactly two people sat. Arabic counts two specially!"
      },
      {
        q_ar: "كَيْفَ حَلّا التَّمارينَ؟",
        q_en: "How did they solve the exercises?",
        options: [
          { ar: "بِصُعوبَةٍ", en: "With difficulty" },
          { ar: "لَمْ يَحُلّاها", en: "They didn't solve them" },
          { ar: "بِسُهولَةٍ", en: "Easily" }
        ],
        correct: 2,
        why: "حَلّا التَّمارينَ بِسُهولَةٍ — easily. Friends work better together!"
      },
      {
        q_ar: "ماذا قالَ عُمَرُ في المَساءِ؟",
        q_en: "What did Omar say in the evening?",
        options: [
          { ar: "اليَوْمَ وَجَدْتُ صَديقًا جَديدًا", en: "Today I found a new friend" },
          { ar: "أَنا جائِعٌ", en: "I am hungry" },
          { ar: "المَدْرَسَةُ صَعْبَةٌ", en: "School is hard" }
        ],
        correct: 0,
        why: "قالَ: اليَوْمَ وَجَدْتُ صَديقًا جَديدًا! — I found a new friend."
      },
      {
        q_ar: "«وَجَدْتُ» — مَنِ الَّذي وَجَدَ؟",
        q_en: "\"wajadtu\" — who found?",
        options: [
          { ar: "أَنا — I", en: "I (the speaker)" },
          { ar: "هُوَ — he", en: "He" },
          { ar: "هُمْ — they", en: "They" }
        ],
        correct: 0,
        why: "The ـتُ ending = I: wajadtu = I found. (wajada = he found)."
      },
      {
        q_ar: "ما عَكْسُ «وَحيد»؟",
        q_en: "What is the opposite of \"waḥīd\" (alone)?",
        options: [
          { ar: "مَعًا — together", en: "Together" },
          { ar: "سَعيد — happy", en: "Happy" },
          { ar: "جَديد — new", en: "New" }
        ],
        correct: 0,
        why: "وَحيد (alone) ↔ مَعًا (together). The story moves from alone to together!"
      },
      {
        q_ar: "ما مَعْنى «بِسُهولَةٍ»؟",
        q_en: "What does \"bi-suhūlatin\" mean?",
        options: [
          { ar: "بِصُعوبَةٍ — with difficulty", en: "With difficulty" },
          { ar: "بِسُهولَةٍ — easily", en: "Easily" },
          { ar: "بِسُرْعَةٍ — quickly", en: "Quickly" }
        ],
        correct: 1,
        why: "بِ + سُهولَة (ease) = easily. Same pattern as بِسُرْعَةٍ (quickly)."
      }
    ]
  },

  /* ═══════════ STORY 8 — The Loyal Friend ═══════════ */
  {
    id: "loyal-friend",
    title_ar: "الصَّديقُ الوَفِيُّ",
    title_en: "The Loyal Friend",
    level: "Beginner · A1",
    cover: "assets/img/loyal-friend/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/loyal-friend/s1.jpg",
        audio: "s1",
        ar: "في الشِّتاءِ، نَزَلَ المَطَرُ عَلى الحَديقَةِ. كانَتِ القِطَّةُ مُبَلَّلَةً وَبَرْدانَةً.",
        tr: "fī sh-shitāʾi, nazala l-maṭaru ʿalā l-ḥadīqati. kānati l-qiṭṭatu muballalatan wa-bardānatan.",
        en: "In the winter, rain fell on the garden. The cat was wet and cold.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الشِّتاءِ", tr: "ash-shitāʾi", en: "the winter" },
          { ar: "نَزَلَ", tr: "nazala", en: "fell / came down" },
          { ar: "المَطَرُ", tr: "al-maṭaru", en: "the rain" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" },
          { ar: "كانَتِ", tr: "kānati", en: "was" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "مُبَلَّلَةً", tr: "muballalatan", en: "wet" },
          { ar: "وَبَرْدانَةً", tr: "wa-bardānatan", en: "and cold (feeling)" }
        ]
      },
      {
        img: "assets/img/loyal-friend/s2.jpg",
        audio: "s2",
        ar: "قالَ الكَلْبُ: تَعالَيْ يا صَديقَتي، بَيْتي دافِئٌ. دَخَلَتِ القِطَّةُ بَيْتَ الكَلْبِ.",
        tr: "qāla l-kalbu: taʿālay yā ṣadīqatī, baytī dāfiʾun. dakhalati l-qiṭṭatu bayta l-kalbi.",
        en: "The dog said: Come, my friend, my house is warm. The cat entered the dog's house.",
        tense: "Command + past",
        words: [
          { ar: "قالَ", tr: "qāla", en: "said (he)" },
          { ar: "الكَلْبُ", tr: "al-kalbu", en: "the dog" },
          { ar: "تَعالَيْ", tr: "taʿālay", en: "come! (to a female)" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "صَديقَتي", tr: "ṣadīqatī", en: "my friend (f.)" },
          { ar: "بَيْتي", tr: "baytī", en: "my house" },
          { ar: "دافِئٌ", tr: "dāfiʾun", en: "warm" },
          { ar: "دَخَلَتِ", tr: "dakhalati", en: "entered (she)" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "بَيْتَ", tr: "bayta", en: "house (of)" },
          { ar: "الكَلْبِ", tr: "al-kalbi", en: "the dog" }
        ]
      },
      {
        img: "assets/img/loyal-friend/s3.jpg",
        audio: "s3",
        ar: "ناما جَنْبًا إِلى جَنْبٍ طولَ اللَّيْلِ. كانَ المَطَرُ يَنْزِلُ في الخارِجِ.",
        tr: "nāmā janban ilā janbin ṭūla l-layli. kāna l-maṭaru yanzilu fī l-khāriji.",
        en: "They (both) slept side by side all night. The rain was falling outside.",
        tense: "Dual past + past continuous",
        words: [
          { ar: "ناما", tr: "nāmā", en: "they two slept" },
          { ar: "جَنْبًا", tr: "janban", en: "side" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "جَنْبٍ", tr: "janbin", en: "side" },
          { ar: "طولَ", tr: "ṭūla", en: "throughout" },
          { ar: "اللَّيْلِ", tr: "al-layli", en: "the night" },
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "المَطَرُ", tr: "al-maṭaru", en: "the rain" },
          { ar: "يَنْزِلُ", tr: "yanzilu", en: "falling" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الخارِجِ", tr: "al-khāriji", en: "the outside" }
        ]
      },
      {
        img: "assets/img/loyal-friend/s4.jpg",
        audio: "s4",
        ar: "في الصَّباحِ، ظَهَرَتِ الشَّمْسُ. أَحْضَرَتِ القِطَّةُ سَمَكَةً لِلْكَلْبِ وَقالَتْ: شُكْرًا يا صَديقي.",
        tr: "fī ṣ-ṣabāḥi, ẓaharati sh-shamsu. aḥḍarati l-qiṭṭatu samakatan li-l-kalbi wa-qālat: shukran yā ṣadīqī.",
        en: "In the morning, the sun appeared. The cat brought a fish for the dog and said: Thank you, my friend.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" },
          { ar: "ظَهَرَتِ", tr: "ẓaharati", en: "appeared" },
          { ar: "الشَّمْسُ", tr: "ash-shamsu", en: "the sun" },
          { ar: "أَحْضَرَتِ", tr: "aḥḍarati", en: "brought (she)" },
          { ar: "القِطَّةُ", tr: "al-qiṭṭatu", en: "the cat" },
          { ar: "سَمَكَةً", tr: "samakatan", en: "a fish" },
          { ar: "لِلْكَلْبِ", tr: "li-l-kalbi", en: "for the dog" },
          { ar: "وَقالَتْ", tr: "wa-qālat", en: "and said (she)" },
          { ar: "شُكْرًا", tr: "shukran", en: "thank you" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "صَديقي", tr: "ṣadīqī", en: "my friend (m.)" }
        ]
      },
      {
        img: "assets/img/loyal-friend/s5.jpg",
        audio: "s5",
        ar: "مِنْ ذٰلِكَ اليَوْمِ، يَأْكُلانِ مَعًا كُلَّ مَساءٍ. الصَّديقُ وَقْتَ الضّيقِ.",
        tr: "min dhālika l-yawmi, yaʾkulāni maʿan kulla masāʾin. aṣ-ṣadīqu waqta ḍ-ḍīqi.",
        en: "From that day, they (both) eat together every evening. A friend in need (is a friend indeed).",
        tense: "Present dual — يَأْكُلانِ",
        words: [
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "ذٰلِكَ", tr: "dhālika", en: "that" },
          { ar: "اليَوْمِ", tr: "al-yawmi", en: "the day" },
          { ar: "يَأْكُلانِ", tr: "yaʾkulāni", en: "they two eat" },
          { ar: "مَعًا", tr: "maʿan", en: "together" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "مَساءٍ", tr: "masāʾin", en: "evening" },
          { ar: "الصَّديقُ", tr: "aṣ-ṣadīqu", en: "the (true) friend" },
          { ar: "وَقْتَ", tr: "waqta", en: "at the time (of)" },
          { ar: "الضّيقِ", tr: "aḍ-ḍīqi", en: "hardship" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "في أَيِّ فَصْلٍ تَحْدُثُ القِصَّةُ؟",
        q_en: "In which season does the story happen?",
        options: [
          { ar: "في الصَّيْفِ", en: "In the summer" },
          { ar: "في الشِّتاءِ", en: "In the winter" },
          { ar: "في الرَّبيعِ", en: "In the spring" }
        ],
        correct: 1,
        why: "في الشِّتاءِ نَزَلَ المَطَرُ — winter, with rain."
      },
      {
        q_ar: "كَيْفَ كانَتِ القِطَّةُ في المَطَرِ؟",
        q_en: "How was the cat in the rain?",
        options: [
          { ar: "مُبَلَّلَةً وَبَرْدانَةً", en: "Wet and cold" },
          { ar: "سَعيدَةً", en: "Happy" },
          { ar: "نائِمَةً", en: "Asleep" }
        ],
        correct: 0,
        why: "كانَتِ القِطَّةُ مُبَلَّلَةً وَبَرْدانَةً — wet and freezing."
      },
      {
        q_ar: "ماذا قالَ الكَلْبُ لِلْقِطَّةِ؟",
        q_en: "What did the dog say to the cat?",
        options: [
          { ar: "اِذْهَبي مِنْ هُنا", en: "Go away from here" },
          { ar: "تَعالَيْ، بَيْتي دافِئٌ", en: "Come, my house is warm" },
          { ar: "أَيْنَ سَمَكَتي؟", en: "Where is my fish?" }
        ],
        correct: 1,
        why: "قالَ: تَعالَيْ يا صَديقَتي، بَيْتي دافِئٌ — he invited her in."
      },
      {
        q_ar: "لِماذا هٰذا مُدْهِشٌ مِنَ الكَلْبِ؟",
        q_en: "Why is this surprising from the dog?",
        options: [
          { ar: "في القِصَّةِ الأولى طارَدَ القِطَّةَ", en: "In story one he chased the cat!" },
          { ar: "الكَلْبُ لا يُحِبُّ بَيْتَهُ", en: "The dog doesn't like his house" },
          { ar: "الكَلْبُ يَخافُ مِنَ المَطَرِ", en: "The dog fears rain" }
        ],
        correct: 0,
        why: "Remember story 1? The same dog chased this cat — now they're friends. Kindness wins!"
      },
      {
        q_ar: "كَيْفَ ناما في اللَّيْلِ؟",
        q_en: "How did they sleep at night?",
        options: [
          { ar: "جَنْبًا إِلى جَنْبٍ", en: "Side by side" },
          { ar: "في غُرْفَتَيْنِ", en: "In two rooms" },
          { ar: "خارِجَ البَيْتِ", en: "Outside the house" }
        ],
        correct: 0,
        why: "ناما جَنْبًا إِلى جَنْبٍ — side by side, all night."
      },
      {
        q_ar: "ماذا أَحْضَرَتِ القِطَّةُ في الصَّباحِ؟",
        q_en: "What did the cat bring in the morning?",
        options: [
          { ar: "عَظْمَةً", en: "A bone" },
          { ar: "سَمَكَةً", en: "A fish" },
          { ar: "خُبْزًا", en: "Bread" }
        ],
        correct: 1,
        why: "أَحْضَرَتِ القِطَّةُ سَمَكَةً لِلْكَلْبِ — a thank-you fish."
      },
      {
        q_ar: "«صَديقَتي» وَ«صَديقي» — ما الفَرْقُ؟",
        q_en: "\"ṣadīqatī\" vs \"ṣadīqī\" — what's the difference?",
        options: [
          { ar: "مُؤَنَّث وَمُذَكَّر — female / male friend", en: "Female friend / male friend" },
          { ar: "كَبير وَصَغير", en: "Big / small" },
          { ar: "قَديم وَجَديد", en: "Old / new" }
        ],
        correct: 0,
        why: "صَديقَة (with ة) = female friend; صَديق = male friend. The dog calls the cat ṣadīqatī."
      },
      {
        q_ar: "«يَأْكُلانِ» — مَنْ يَأْكُلُ؟",
        q_en: "\"yaʾkulāni\" — who eats?",
        options: [
          { ar: "واحِدٌ فَقَطْ", en: "Just one" },
          { ar: "اِثْنانِ مَعًا", en: "The two of them together" },
          { ar: "ثَلاثَةٌ", en: "Three" }
        ],
        correct: 1,
        why: "The ـانِ ending = dual present: they two eat. Dog + cat together."
      },
      {
        q_ar: "«الصَّديقُ وَقْتَ الضّيقِ» — ما مَعْناها؟",
        q_en: "\"aṣ-ṣadīqu waqta ḍ-ḍīqi\" — what does this proverb mean?",
        options: [
          { ar: "الصَّديقُ الحَقيقِيُّ يُساعِدُ في المَشاكِلِ", en: "A true friend helps in hard times" },
          { ar: "الأَصْدِقاءُ يَلْعَبونَ مَعًا", en: "Friends play together" },
          { ar: "الوَقْتُ ضَيِّقٌ", en: "Time is short" }
        ],
        correct: 0,
        why: "A famous Arabic proverb: the (true) friend is (known) in time of hardship — a friend in need is a friend indeed."
      },
      {
        q_ar: "ما عَكْسُ «دافِئ»؟",
        q_en: "What is the opposite of \"dāfiʾ\" (warm)?",
        options: [
          { ar: "بارِد — cold", en: "Cold" },
          { ar: "ساخِن — hot", en: "Hot" },
          { ar: "مُبَلَّل — wet", en: "Wet" }
        ],
        correct: 0,
        why: "دافِئ (warm) ↔ بارِد (cold). The warm doghouse vs the cold rain."
      },
      {
        q_ar: "مَتى يَأْكُلانِ مَعًا الآنَ؟",
        q_en: "When do they eat together now?",
        options: [
          { ar: "كُلَّ صَباحٍ", en: "Every morning" },
          { ar: "كُلَّ مَساءٍ", en: "Every evening" },
          { ar: "مَرَّةً في الأُسْبوعِ", en: "Once a week" }
        ],
        correct: 1,
        why: "يَأْكُلانِ مَعًا كُلَّ مَساءٍ — every evening, from that day on."
      }
    ]
  },

  /* ═══════════ STORY 9 — Grandma's Soup ═══════════ */
  {
    id: "grandma-soup",
    title_ar: "شورَبَةُ الجَدَّةِ",
    title_en: "Grandma's Soup",
    level: "Beginner · A1",
    cover: "assets/img/grandma-soup/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/grandma-soup/s1.jpg",
        audio: "s1",
        ar: "في يَوْمٍ بارِدٍ، مَرِضَتْ لَيْلى. بَقِيَتْ في السَّريرِ طولَ اليَوْمِ.",
        tr: "fī yawmin bāridin, mariḍat laylā. baqiyat fī s-sarīri ṭūla l-yawmi.",
        en: "On a cold day, Layla got sick. She stayed in bed all day.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "on / in" },
          { ar: "يَوْمٍ", tr: "yawmin", en: "a day" },
          { ar: "بارِدٍ", tr: "bāridin", en: "cold" },
          { ar: "مَرِضَتْ", tr: "mariḍat", en: "got sick (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "بَقِيَتْ", tr: "baqiyat", en: "stayed (she)" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "السَّريرِ", tr: "as-sarīri", en: "the bed" },
          { ar: "طولَ", tr: "ṭūla", en: "throughout" },
          { ar: "اليَوْمِ", tr: "al-yawmi", en: "the day" }
        ]
      },
      {
        img: "assets/img/grandma-soup/s2.jpg",
        audio: "s2",
        ar: "ذَهَبَتِ الجَدَّةُ إِلى المَطْبَخِ. قَطَّعَتِ الجَزَرَ وَالبَصَلَ.",
        tr: "dhahabati l-jaddatu ilā l-maṭbakhi. qaṭṭaʿati l-jazara wa-l-baṣala.",
        en: "The grandmother went to the kitchen. She chopped the carrots and the onions.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "ذَهَبَتِ", tr: "dhahabati", en: "went (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "المَطْبَخِ", tr: "al-maṭbakhi", en: "the kitchen" },
          { ar: "قَطَّعَتِ", tr: "qaṭṭaʿati", en: "chopped (she)" },
          { ar: "الجَزَرَ", tr: "al-jazara", en: "the carrots" },
          { ar: "وَالبَصَلَ", tr: "wa-l-baṣala", en: "and the onions" }
        ]
      },
      {
        img: "assets/img/grandma-soup/s3.jpg",
        audio: "s3",
        ar: "طَبَخَتِ الجَدَّةُ شورَبَةً ساخِنَةً. كانَتْ رائِحَتُها جَميلَةً جِدًّا.",
        tr: "ṭabakhati l-jaddatu shūrabatan sākhinatan. kānat rāʾiḥatuhā jamīlatan jiddan.",
        en: "The grandmother cooked a hot soup. Its smell was very beautiful.",
        tense: "Past + description",
        words: [
          { ar: "طَبَخَتِ", tr: "ṭabakhati", en: "cooked (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "شورَبَةً", tr: "shūrabatan", en: "a soup" },
          { ar: "ساخِنَةً", tr: "sākhinatan", en: "hot" },
          { ar: "كانَتْ", tr: "kānat", en: "was" },
          { ar: "رائِحَتُها", tr: "rāʾiḥatuhā", en: "its smell" },
          { ar: "جَميلَةً", tr: "jamīlatan", en: "beautiful" },
          { ar: "جِدًّا", tr: "jiddan", en: "very" }
        ]
      },
      {
        img: "assets/img/grandma-soup/s4.jpg",
        audio: "s4",
        ar: "شَرِبَتْ لَيْلى الشّورَبَةَ كُلَّها. قالَتْ: شُكْرًا يا جَدَّتي، أَنا أَحْسَنُ الآنَ.",
        tr: "sharibat laylā sh-shūrabata kullahā. qālat: shukran yā jaddatī, anā aḥsanu l-āna.",
        en: "Layla drank all the soup. She said: Thank you, grandma, I am better now.",
        tense: "Past + أَنا (I am…)",
        words: [
          { ar: "شَرِبَتْ", tr: "sharibat", en: "drank (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "الشّورَبَةَ", tr: "ash-shūrabata", en: "the soup" },
          { ar: "كُلَّها", tr: "kullahā", en: "all of it" },
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "شُكْرًا", tr: "shukran", en: "thank you" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "جَدَّتي", tr: "jaddatī", en: "my grandma" },
          { ar: "أَنا", tr: "anā", en: "I" },
          { ar: "أَحْسَنُ", tr: "aḥsanu", en: "better" },
          { ar: "الآنَ", tr: "al-āna", en: "now" }
        ]
      },
      {
        img: "assets/img/grandma-soup/s5.jpg",
        audio: "s5",
        ar: "في اليَوْمِ التّالي، شُفِيَتْ لَيْلى. ساعَدَتْ جَدَّتَها في المَطْبَخِ بِفَرَحٍ.",
        tr: "fī l-yawmi t-tālī, shufiyat laylā. sāʿadat jaddatahā fī l-maṭbakhi bi-faraḥin.",
        en: "The next day, Layla was healed. She helped her grandma in the kitchen with joy.",
        tense: "Past — التّالي = next",
        words: [
          { ar: "في", tr: "fī", en: "on / in" },
          { ar: "اليَوْمِ", tr: "al-yawmi", en: "the day" },
          { ar: "التّالي", tr: "at-tālī", en: "the next / following" },
          { ar: "شُفِيَتْ", tr: "shufiyat", en: "was healed (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "ساعَدَتْ", tr: "sāʿadat", en: "helped (she)" },
          { ar: "جَدَّتَها", tr: "jaddatahā", en: "her grandma" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَطْبَخِ", tr: "al-maṭbakhi", en: "the kitchen" },
          { ar: "بِفَرَحٍ", tr: "bi-faraḥin", en: "with joy" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا حَدَثَ لِلَيْلى في اليَوْمِ البارِدِ؟",
        q_en: "What happened to Layla on the cold day?",
        options: [
          { ar: "مَرِضَتْ", en: "She got sick" },
          { ar: "سافَرَتْ", en: "She traveled" },
          { ar: "لَعِبَتْ في الثَّلْجِ", en: "She played in the snow" }
        ],
        correct: 0,
        why: "مَرِضَتْ لَيْلى — she got sick and stayed in bed all day."
      },
      {
        q_ar: "أَيْنَ بَقِيَتْ لَيْلى طولَ اليَوْمِ؟",
        q_en: "Where did Layla stay all day?",
        options: [
          { ar: "في المَدْرَسَةِ", en: "At school" },
          { ar: "في السَّريرِ", en: "In bed" },
          { ar: "في الحَديقَةِ", en: "In the garden" }
        ],
        correct: 1,
        why: "بَقِيَتْ في السَّريرِ طولَ اليَوْمِ — in bed, the whole day."
      },
      {
        q_ar: "ماذا قَطَّعَتِ الجَدَّةُ؟",
        q_en: "What did the grandmother chop?",
        options: [
          { ar: "التُّفّاحَ وَالمَوْزَ", en: "Apples and bananas" },
          { ar: "الخُبْزَ", en: "Bread" },
          { ar: "الجَزَرَ وَالبَصَلَ", en: "Carrots and onions" }
        ],
        correct: 2,
        why: "قَطَّعَتِ الجَزَرَ وَالبَصَلَ — carrots and onions for the soup."
      },
      {
        q_ar: "كَيْفَ كانَتِ الشّورَبَةُ؟",
        q_en: "What was the soup like?",
        options: [
          { ar: "بارِدَةً", en: "Cold" },
          { ar: "ساخِنَةً وَرائِحَتُها جَميلَةٌ", en: "Hot with a beautiful smell" },
          { ar: "مالِحَةً جِدًّا", en: "Too salty" }
        ],
        correct: 1,
        why: "شورَبَةً ساخِنَةً... رائِحَتُها جَميلَةً جِدًّا — hot, smelling wonderful."
      },
      {
        q_ar: "كَمْ شَرِبَتْ لَيْلى مِنَ الشّورَبَةِ؟",
        q_en: "How much of the soup did Layla drink?",
        options: [
          { ar: "كُلَّها", en: "All of it" },
          { ar: "نِصْفَها", en: "Half of it" },
          { ar: "قَليلًا فَقَطْ", en: "Only a little" }
        ],
        correct: 0,
        why: "شَرِبَتِ الشّورَبَةَ كُلَّها — all of it! (كُلَّها = all of it)"
      },
      {
        q_ar: "ماذا قالَتْ لَيْلى لِجَدَّتِها؟",
        q_en: "What did Layla say to her grandma?",
        options: [
          { ar: "أَنا جَوْعانَةُ", en: "I am hungry" },
          { ar: "شُكْرًا، أَنا أَحْسَنُ الآنَ", en: "Thank you, I am better now" },
          { ar: "لا أُحِبُّ الشّورَبَةَ", en: "I don't like soup" }
        ],
        correct: 1,
        why: "شُكْرًا يا جَدَّتي، أَنا أَحْسَنُ الآنَ — thanks grandma, I'm better now."
      },
      {
        q_ar: "«جَدَّتي» — ماذا تَعْني الياءُ في الآخِرِ؟",
        q_en: "\"jaddatī\" — what does the final -ī mean?",
        options: [
          { ar: "«my» — جَدَّتي = my grandma", en: "My — jaddatī = my grandma" },
          { ar: "«your» — جَدَّتُكَ", en: "Your" },
          { ar: "«her» — جَدَّتُها", en: "Her" }
        ],
        correct: 0,
        why: "The ending ـي = my: بَيْتي my house, جَدَّتي my grandma, صَديقي my friend."
      },
      {
        q_ar: "ماذا حَدَثَ في اليَوْمِ التّالي؟",
        q_en: "What happened the next day?",
        options: [
          { ar: "بَقِيَتْ مَريضَةً", en: "She stayed sick" },
          { ar: "نَزَلَ الثَّلْجُ", en: "It snowed" },
          { ar: "شُفِيَتْ لَيْلى", en: "Layla was healed" }
        ],
        correct: 2,
        why: "شُفِيَتْ لَيْلى — she recovered, thanks to grandma's soup."
      },
      {
        q_ar: "ماذا فَعَلَتْ لَيْلى بَعْدَ أَنْ شُفِيَتْ؟",
        q_en: "What did Layla do after she was healed?",
        options: [
          { ar: "ساعَدَتْ جَدَّتَها في المَطْبَخِ", en: "She helped her grandma in the kitchen" },
          { ar: "ذَهَبَتْ إِلى البَحْرِ", en: "She went to the sea" },
          { ar: "نامَتْ مَرَّةً أُخْرى", en: "She slept again" }
        ],
        correct: 0,
        why: "ساعَدَتْ جَدَّتَها في المَطْبَخِ بِفَرَحٍ — kindness returned with joy!"
      },
      {
        q_ar: "ما عَكْسُ «مَريض»؟",
        q_en: "What is the opposite of \"marīḍ\" (sick)?",
        options: [
          { ar: "سَعيد — happy", en: "Happy" },
          { ar: "صَحيح / مُعافى — healthy", en: "Healthy" },
          { ar: "بارِد — cold", en: "Cold" }
        ],
        correct: 1,
        why: "مَريض (sick) ↔ صَحيح/مُعافى (healthy). شُفِيَ = he was healed."
      },
      {
        q_ar: "ما مَعْنى «جِدًّا»؟",
        q_en: "What does \"jiddan\" mean?",
        options: [
          { ar: "قَليلًا — a little", en: "A little" },
          { ar: "جِدًّا — very", en: "Very" },
          { ar: "أَبَدًا — never", en: "Never" }
        ],
        correct: 1,
        why: "جِدًّا = very: جَميلَةٌ جِدًّا = very beautiful. (Don't confuse with جَدّ grandpa!)"
      }
    ]
  },

  /* ═══════════ STORY 10 — The Night Visitor ═══════════ */
  {
    id: "night-visitor",
    title_ar: "الزّائِرُ اللَّيْلِيُّ",
    title_en: "The Night Visitor",
    level: "Beginner · A1",
    cover: "assets/img/night-visitor/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/night-visitor/s1.jpg",
        audio: "s1",
        ar: "في اللَّيْلِ، سَمِعَ عُمَرُ صَوْتًا غَريبًا في المَطْبَخِ. جَلَسَ في سَريرِهِ وَأَصْغى جَيِّدًا.",
        tr: "fī l-layli, samiʿa ʿumaru ṣawtan gharīban fī l-maṭbakhi. jalasa fī sarīrihi wa-aṣghā jayyidan.",
        en: "At night, Omar heard a strange sound in the kitchen. He sat up in his bed and listened carefully.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "في", tr: "fī", en: "at / in" },
          { ar: "اللَّيْلِ", tr: "al-layli", en: "the night" },
          { ar: "سَمِعَ", tr: "samiʿa", en: "heard" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "صَوْتًا", tr: "ṣawtan", en: "a sound" },
          { ar: "غَريبًا", tr: "gharīban", en: "strange" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَطْبَخِ", tr: "al-maṭbakhi", en: "the kitchen" },
          { ar: "جَلَسَ", tr: "jalasa", en: "sat (up)" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "سَريرِهِ", tr: "sarīrihi", en: "his bed" },
          { ar: "وَأَصْغى", tr: "wa-aṣghā", en: "and listened" },
          { ar: "جَيِّدًا", tr: "jayyidan", en: "carefully / well" }
        ]
      },
      {
        img: "assets/img/night-visitor/s2.jpg",
        audio: "s2",
        ar: "أَخَذَ عُمَرُ مِصْباحَهُ الصَّغيرَ. مَشى بِهُدوءٍ إِلى المَطْبَخِ.",
        tr: "akhadha ʿumaru miṣbāḥahu ṣ-ṣaghīra. mashā bi-hudūʾin ilā l-maṭbakhi.",
        en: "Omar took his small flashlight. He walked quietly to the kitchen.",
        tense: "Simple past — الماضي",
        words: [
          { ar: "أَخَذَ", tr: "akhadha", en: "took" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "مِصْباحَهُ", tr: "miṣbāḥahu", en: "his lamp / flashlight" },
          { ar: "الصَّغيرَ", tr: "aṣ-ṣaghīra", en: "the small" },
          { ar: "مَشى", tr: "mashā", en: "walked" },
          { ar: "بِهُدوءٍ", tr: "bi-hudūʾin", en: "quietly" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "المَطْبَخِ", tr: "al-maṭbakhi", en: "the kitchen" }
        ]
      },
      {
        img: "assets/img/night-visitor/s3.jpg",
        audio: "s3",
        ar: "فَتَحَ البابَ بِبُطْءٍ. رَأى قُنْفُذًا صَغيرًا يَأْكُلُ مِنْ صَحْنِ القِطَّةِ!",
        tr: "fataḥa l-bāba bi-buṭʾin. raʾā qunfudhan ṣaghīran yaʾkulu min ṣaḥni l-qiṭṭati!",
        en: "He opened the door slowly. He saw a little hedgehog eating from the cat's dish!",
        tense: "Past + surprise",
        words: [
          { ar: "فَتَحَ", tr: "fataḥa", en: "opened" },
          { ar: "البابَ", tr: "al-bāba", en: "the door" },
          { ar: "بِبُطْءٍ", tr: "bi-buṭʾin", en: "slowly" },
          { ar: "رَأى", tr: "raʾā", en: "saw" },
          { ar: "قُنْفُذًا", tr: "qunfudhan", en: "a hedgehog" },
          { ar: "صَغيرًا", tr: "ṣaghīran", en: "little" },
          { ar: "يَأْكُلُ", tr: "yaʾkulu", en: "eating" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "صَحْنِ", tr: "ṣaḥni", en: "dish (of)" },
          { ar: "القِطَّةِ", tr: "al-qiṭṭati", en: "the cat" }
        ]
      },
      {
        img: "assets/img/night-visitor/s4.jpg",
        audio: "s4",
        ar: "ضَحِكَ عُمَرُ وَقالَ: لا تَخَفْ يا صَغيري. أَعْطاهُ قِطْعَةَ تُفّاحٍ.",
        tr: "ḍaḥika ʿumaru wa-qāla: lā takhaf yā ṣaghīrī. aʿṭāhu qiṭʿata tuffāḥin.",
        en: "Omar laughed and said: Don't be afraid, my little one. He gave it a piece of apple.",
        tense: "Negative command — لا تَخَفْ",
        words: [
          { ar: "ضَحِكَ", tr: "ḍaḥika", en: "laughed" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "وَقالَ", tr: "wa-qāla", en: "and said" },
          { ar: "لا", tr: "lā", en: "don't" },
          { ar: "تَخَفْ", tr: "takhaf", en: "be afraid" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "صَغيري", tr: "ṣaghīrī", en: "my little one" },
          { ar: "أَعْطاهُ", tr: "aʿṭāhu", en: "gave it" },
          { ar: "قِطْعَةَ", tr: "qiṭʿata", en: "a piece (of)" },
          { ar: "تُفّاحٍ", tr: "tuffāḥin", en: "apple" }
        ]
      },
      {
        img: "assets/img/night-visitor/s5.jpg",
        audio: "s5",
        ar: "الآنَ يَأْتي القُنْفُذُ كُلَّ لَيْلَةٍ. صارَ صَديقَ الحَديقَةِ الصَّغيرَ.",
        tr: "al-āna yaʾtī l-qunfudhu kulla laylatin. ṣāra ṣadīqa l-ḥadīqati ṣ-ṣaghīra.",
        en: "Now the hedgehog comes every night. It became the garden's little friend.",
        tense: "Present habit + صارَ",
        words: [
          { ar: "الآنَ", tr: "al-āna", en: "now" },
          { ar: "يَأْتي", tr: "yaʾtī", en: "comes" },
          { ar: "القُنْفُذُ", tr: "al-qunfudhu", en: "the hedgehog" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "لَيْلَةٍ", tr: "laylatin", en: "night" },
          { ar: "صارَ", tr: "ṣāra", en: "became" },
          { ar: "صَديقَ", tr: "ṣadīqa", en: "friend (of)" },
          { ar: "الحَديقَةِ", tr: "al-ḥadīqati", en: "the garden" },
          { ar: "الصَّغيرَ", tr: "aṣ-ṣaghīra", en: "the little" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا سَمِعَ عُمَرُ في اللَّيْلِ؟",
        q_en: "What did Omar hear at night?",
        options: [
          { ar: "صَوْتًا غَريبًا في المَطْبَخِ", en: "A strange sound in the kitchen" },
          { ar: "المَطَرَ", en: "The rain" },
          { ar: "أُغْنِيَةً", en: "A song" }
        ],
        correct: 0,
        why: "سَمِعَ صَوْتًا غَريبًا في المَطْبَخِ — a strange sound from the kitchen."
      },
      {
        q_ar: "ماذا أَخَذَ عُمَرُ مَعَهُ؟",
        q_en: "What did Omar take with him?",
        options: [
          { ar: "كِتابًا", en: "A book" },
          { ar: "مِصْباحَهُ الصَّغيرَ", en: "His small flashlight" },
          { ar: "حَقيبَتَهُ", en: "His bag" }
        ],
        correct: 1,
        why: "أَخَذَ مِصْباحَهُ الصَّغيرَ — his little flashlight."
      },
      {
        q_ar: "كَيْفَ مَشى عُمَرُ إِلى المَطْبَخِ؟",
        q_en: "How did Omar walk to the kitchen?",
        options: [
          { ar: "بِسُرْعَةٍ", en: "Quickly" },
          { ar: "وَهُوَ يَغَنّي", en: "While singing" },
          { ar: "بِهُدوءٍ", en: "Quietly" }
        ],
        correct: 2,
        why: "مَشى بِهُدوءٍ — quietly. بِ + هُدوء (quiet) = quietly, same pattern as بِسُرْعَة."
      },
      {
        q_ar: "مَنْ كانَ الزّائِرُ اللَّيْلِيُّ؟",
        q_en: "Who was the night visitor?",
        options: [
          { ar: "قِطَّةُ الجيرانِ", en: "The neighbors' cat" },
          { ar: "قُنْفُذٌ صَغيرٌ", en: "A little hedgehog" },
          { ar: "عُصْفورٌ", en: "A bird" }
        ],
        correct: 1,
        why: "رَأى قُنْفُذًا صَغيرًا — a little hedgehog eating from the cat's dish!"
      },
      {
        q_ar: "مِنْ أَيْنَ كانَ القُنْفُذُ يَأْكُلُ؟",
        q_en: "Where was the hedgehog eating from?",
        options: [
          { ar: "مِنْ صَحْنِ القِطَّةِ", en: "From the cat's dish" },
          { ar: "مِنَ الثَّلّاجَةِ", en: "From the fridge" },
          { ar: "مِنَ الحَديقَةِ", en: "From the garden" }
        ],
        correct: 0,
        why: "يَأْكُلُ مِنْ صَحْنِ القِطَّةِ — from the cat's dish. Cheeky visitor!"
      },
      {
        q_ar: "«لا تَخَفْ» — ماذا تَعْني؟",
        q_en: "\"lā takhaf\" — what does it mean?",
        options: [
          { ar: "اِخْرُجْ — get out", en: "Get out" },
          { ar: "لا تَخَفْ — don't be afraid", en: "Don't be afraid" },
          { ar: "تَعالَ — come", en: "Come" }
        ],
        correct: 1,
        why: "لا + present verb = negative command: lā takhaf = don't fear! Compare خافَ (he feared)."
      },
      {
        q_ar: "ماذا أَعْطى عُمَرُ لِلْقُنْفُذِ؟",
        q_en: "What did Omar give the hedgehog?",
        options: [
          { ar: "حَليبًا", en: "Milk" },
          { ar: "خُبْزًا", en: "Bread" },
          { ar: "قِطْعَةَ تُفّاحٍ", en: "A piece of apple" }
        ],
        correct: 2,
        why: "أَعْطاهُ قِطْعَةَ تُفّاحٍ — a piece of apple. قِطْعَة = piece."
      },
      {
        q_ar: "مَتى يَأْتي القُنْفُذُ الآنَ؟",
        q_en: "When does the hedgehog come now?",
        options: [
          { ar: "كُلَّ لَيْلَةٍ", en: "Every night" },
          { ar: "كُلَّ صَباحٍ", en: "Every morning" },
          { ar: "في الشِّتاءِ فَقَطْ", en: "Only in winter" }
        ],
        correct: 0,
        why: "يَأْتي كُلَّ لَيْلَةٍ — every night, present tense = habit."
      },
      {
        q_ar: "«اللَّيْل» وَ«لَيْلَة» — ما الفَرْقُ؟",
        q_en: "\"al-layl\" vs \"layla\" — what's the difference?",
        options: [
          { ar: "اللَّيْل = the night (time), لَيْلَة = one night", en: "Night-time vs a single night" },
          { ar: "هُما نَفْسُ الشَّيْءِ", en: "They're the same" },
          { ar: "لَيْلَة = الصَّباح", en: "Layla = morning" }
        ],
        correct: 0,
        why: "اللَّيْل is night as a time; لَيْلَة is one countable night — كُلَّ لَيْلَةٍ every (single) night. And yes, the name لَيْلى comes from the same root!"
      },
      {
        q_ar: "ما عَكْسُ «بِبُطْءٍ»؟",
        q_en: "What is the opposite of \"bi-buṭʾin\" (slowly)?",
        options: [
          { ar: "بِهُدوءٍ — quietly", en: "Quietly" },
          { ar: "بِسُرْعَةٍ — quickly", en: "Quickly" },
          { ar: "بِفَرَحٍ — joyfully", en: "Joyfully" }
        ],
        correct: 1,
        why: "بِبُطْءٍ (slowly) ↔ بِسُرْعَةٍ (quickly). You've now seen the whole بِ+noun adverb family!"
      }
    ]
  },

  /* ═══════════ STORY 11 — The Two Stubborn Goats ═══════════ */
  {
    id: "two-goats",
    title_ar: "العَنْزَتانِ العَنيدَتانِ",
    title_en: "The Two Stubborn Goats",
    level: "Beginner · A1",
    cover: "assets/img/two-goats/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/two-goats/s1.jpg",
        audio: "s1",
        ar: "كانَ هُناكَ جِسْرٌ ضَيِّقٌ فَوْقَ النَّهْرِ. جاءَتْ عَنْزَةٌ بَيْضاءُ مِنْ هُنا، وَعَنْزَةٌ بُنِّيَّةٌ مِنْ هُناكَ.",
        tr: "kāna hunāka jisrun ḍayyiqun fawqa n-nahri. jāʾat ʿanzatun bayḍāʾu min hunā, wa-ʿanzatun bunniyyatun min hunāka.",
        en: "There was a narrow bridge over the river. A white goat came from here, and a brown goat from there.",
        tense: "كانَ هُناكَ = there was",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "هُناكَ", tr: "hunāka", en: "there / there was" },
          { ar: "جِسْرٌ", tr: "jisrun", en: "a bridge" },
          { ar: "ضَيِّقٌ", tr: "ḍayyiqun", en: "narrow" },
          { ar: "فَوْقَ", tr: "fawqa", en: "over / above" },
          { ar: "النَّهْرِ", tr: "an-nahri", en: "the river" },
          { ar: "جاءَتْ", tr: "jāʾat", en: "came (she)" },
          { ar: "عَنْزَةٌ", tr: "ʿanzatun", en: "a goat" },
          { ar: "بَيْضاءُ", tr: "bayḍāʾu", en: "white (f.)" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "هُنا", tr: "hunā", en: "here" },
          { ar: "وَعَنْزَةٌ", tr: "wa-ʿanzatun", en: "and a goat" },
          { ar: "بُنِّيَّةٌ", tr: "bunniyyatun", en: "brown (f.)" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "هُناكَ", tr: "hunāka", en: "there" }
        ]
      },
      {
        img: "assets/img/two-goats/s2.jpg",
        audio: "s2",
        ar: "اِلْتَقَتا في وَسَطِ الجِسْرِ. قالَتِ البَيْضاءُ: اِرْجِعي أَنْتِ! قالَتِ البُنِّيَّةُ: لا، اِرْجِعي أَنْتِ!",
        tr: "iltaqatā fī wasaṭi l-jisri. qālati l-bayḍāʾu: irjiʿī anti! qālati l-bunniyyatu: lā, irjiʿī anti!",
        en: "They met in the middle of the bridge. The white one said: You go back! The brown one said: No, YOU go back!",
        tense: "Dual past + feminine command",
        words: [
          { ar: "اِلْتَقَتا", tr: "iltaqatā", en: "they two met" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "وَسَطِ", tr: "wasaṭi", en: "middle (of)" },
          { ar: "الجِسْرِ", tr: "al-jisri", en: "the bridge" },
          { ar: "قالَتِ", tr: "qālati", en: "said (she)" },
          { ar: "البَيْضاءُ", tr: "al-bayḍāʾu", en: "the white one" },
          { ar: "اِرْجِعي", tr: "irjiʿī", en: "go back! (to a female)" },
          { ar: "أَنْتِ", tr: "anti", en: "you (f.)" },
          { ar: "البُنِّيَّةُ", tr: "al-bunniyyatu", en: "the brown one" },
          { ar: "لا", tr: "lā", en: "no" }
        ]
      },
      {
        img: "assets/img/two-goats/s3.jpg",
        audio: "s3",
        ar: "وَقَفَتا طَويلًا وَلَمْ تَتَحَرَّكا. جاءَ المَساءُ وَهُما غاضِبَتانِ وَجائِعَتانِ.",
        tr: "waqafatā ṭawīlan wa-lam tataḥarrakā. jāʾa l-masāʾu wa-humā ghāḍibatāni wa-jāʾiʿatāni.",
        en: "They stood for a long time and did not move. Evening came while they were both angry and hungry.",
        tense: "Dual + لَمْ negation",
        words: [
          { ar: "وَقَفَتا", tr: "waqafatā", en: "they two stood" },
          { ar: "طَويلًا", tr: "ṭawīlan", en: "for a long time" },
          { ar: "وَلَمْ", tr: "wa-lam", en: "and did not" },
          { ar: "تَتَحَرَّكا", tr: "tataḥarrakā", en: "move (they two)" },
          { ar: "جاءَ", tr: "jāʾa", en: "came" },
          { ar: "المَساءُ", tr: "al-masāʾu", en: "the evening" },
          { ar: "وَهُما", tr: "wa-humā", en: "while they two" },
          { ar: "غاضِبَتانِ", tr: "ghāḍibatāni", en: "angry (both, f.)" },
          { ar: "وَجائِعَتانِ", tr: "wa-jāʾiʿatāni", en: "and hungry (both, f.)" }
        ]
      },
      {
        img: "assets/img/two-goats/s4.jpg",
        audio: "s4",
        ar: "أَخيرًا قالَتِ البَيْضاءُ: عِنْدي فِكْرَةٌ. سَأَجْلِسُ، وَتَمُرّينَ أَنْتِ مِنْ فَوْقي.",
        tr: "akhīran qālati l-bayḍāʾu: ʿindī fikratun. sa-ajlisu, wa-tamurrīna anti min fawqī.",
        en: "Finally the white one said: I have an idea. I will sit down, and you pass over me.",
        tense: "Future سَـ + present",
        words: [
          { ar: "أَخيرًا", tr: "akhīran", en: "finally" },
          { ar: "قالَتِ", tr: "qālati", en: "said (she)" },
          { ar: "البَيْضاءُ", tr: "al-bayḍāʾu", en: "the white one" },
          { ar: "عِنْدي", tr: "ʿindī", en: "I have" },
          { ar: "فِكْرَةٌ", tr: "fikratun", en: "an idea" },
          { ar: "سَأَجْلِسُ", tr: "sa-ajlisu", en: "I will sit" },
          { ar: "وَتَمُرّينَ", tr: "wa-tamurrīna", en: "and you pass (f.)" },
          { ar: "أَنْتِ", tr: "anti", en: "you (f.)" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "فَوْقي", tr: "fawqī", en: "over me" }
        ]
      },
      {
        img: "assets/img/two-goats/s5.jpg",
        audio: "s5",
        ar: "مَرَّتِ البُنِّيَّةُ بِحَذَرٍ، وَعَبَرَتِ الاِثْنَتانِ الجِسْرَ. التَّعاوُنُ خَيْرٌ مِنَ العِنادِ.",
        tr: "marrati l-bunniyyatu bi-ḥadharin, wa-ʿabarati l-ithnatāni l-jisra. at-taʿāwunu khayrun mina l-ʿinādi.",
        en: "The brown one passed carefully, and both crossed the bridge. Cooperation is better than stubbornness.",
        tense: "Past + proverb (خَيْرٌ مِنْ = better than)",
        words: [
          { ar: "مَرَّتِ", tr: "marrati", en: "passed (she)" },
          { ar: "البُنِّيَّةُ", tr: "al-bunniyyatu", en: "the brown one" },
          { ar: "بِحَذَرٍ", tr: "bi-ḥadharin", en: "carefully" },
          { ar: "وَعَبَرَتِ", tr: "wa-ʿabarati", en: "and crossed" },
          { ar: "الاِثْنَتانِ", tr: "al-ithnatāni", en: "the two (f.)" },
          { ar: "الجِسْرَ", tr: "al-jisra", en: "the bridge" },
          { ar: "التَّعاوُنُ", tr: "at-taʿāwunu", en: "cooperation" },
          { ar: "خَيْرٌ", tr: "khayrun", en: "better / good" },
          { ar: "مِنَ", tr: "mina", en: "than" },
          { ar: "العِنادِ", tr: "al-ʿinādi", en: "stubbornness" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "كَيْفَ كانَ الجِسْرُ؟",
        q_en: "What was the bridge like?",
        options: [
          { ar: "واسِعًا وَكَبيرًا", en: "Wide and big" },
          { ar: "ضَيِّقًا", en: "Narrow" },
          { ar: "مَكْسورًا", en: "Broken" }
        ],
        correct: 1,
        why: "جِسْرٌ ضَيِّقٌ — a narrow bridge. That's the whole problem!"
      },
      {
        q_ar: "أَيْنَ اِلْتَقَتِ العَنْزَتانِ؟",
        q_en: "Where did the two goats meet?",
        options: [
          { ar: "في وَسَطِ الجِسْرِ", en: "In the middle of the bridge" },
          { ar: "عِنْدَ النَّهْرِ", en: "By the river" },
          { ar: "عَلى الجَبَلِ", en: "On the mountain" }
        ],
        correct: 0,
        why: "اِلْتَقَتا في وَسَطِ الجِسْرِ — right in the middle, face to face."
      },
      {
        q_ar: "«اِرْجِعي» — لِمَنْ يُقالُ هٰذا الأَمْرُ؟",
        q_en: "\"irjiʿī\" (go back!) — to whom is this command said?",
        options: [
          { ar: "لِوَلَدٍ", en: "To a boy" },
          { ar: "لِبِنْتٍ / أُنْثى", en: "To a girl / female" },
          { ar: "لِجَماعَةٍ", en: "To a group" }
        ],
        correct: 1,
        why: "The ـي ending makes it feminine: irjiʿī (to a female) vs irjiʿ (to a male)."
      },
      {
        q_ar: "ماذا فَعَلَتا طولَ النَّهارِ؟",
        q_en: "What did they both do all day?",
        options: [
          { ar: "وَقَفَتا وَلَمْ تَتَحَرَّكا", en: "They stood and didn't move" },
          { ar: "أَكَلَتا العُشْبَ", en: "They ate grass" },
          { ar: "سَبَحَتا في النَّهْرِ", en: "They swam in the river" }
        ],
        correct: 0,
        why: "وَقَفَتا طَويلًا وَلَمْ تَتَحَرَّكا — stubborn standoff till evening."
      },
      {
        q_ar: "كَيْفَ كانَتا عِنْدَما جاءَ المَساءُ؟",
        q_en: "How were they when evening came?",
        options: [
          { ar: "سَعيدَتَيْنِ", en: "Happy" },
          { ar: "نائِمَتَيْنِ", en: "Asleep" },
          { ar: "غاضِبَتَيْنِ وَجائِعَتَيْنِ", en: "Angry and hungry" }
        ],
        correct: 2,
        why: "غاضِبَتانِ وَجائِعَتانِ — angry and hungry. Stubbornness has a price!"
      },
      {
        q_ar: "ما كانَتْ فِكْرَةُ العَنْزَةِ البَيْضاءِ؟",
        q_en: "What was the white goat's idea?",
        options: [
          { ar: "أَنْ تَقْفِزَ في النَّهْرِ", en: "To jump into the river" },
          { ar: "أَنْ تَجْلِسَ وَتَمُرَّ الأُخْرى مِنْ فَوْقِها", en: "To sit down so the other passes over her" },
          { ar: "أَنْ تَرْجِعَ إِلى البَيْتِ", en: "To go back home" }
        ],
        correct: 1,
        why: "سَأَجْلِسُ وَتَمُرّينَ أَنْتِ مِنْ فَوْقي — humble and clever."
      },
      {
        q_ar: "«سَأَجْلِسُ» — ما زَمَنُ هٰذا الفِعْلِ؟",
        q_en: "\"sa-ajlisu\" — what tense is this verb?",
        options: [
          { ar: "المُسْتَقْبَل — future", en: "Future" },
          { ar: "الماضي — past", en: "Past" },
          { ar: "الأَمْر — command", en: "Command" }
        ],
        correct: 0,
        why: "سَـ + أَجْلِسُ = I will sit. And the أ prefix means 'I' — sa-ajlisu = I will sit."
      },
      {
        q_ar: "كَيْفَ مَرَّتِ العَنْزَةُ البُنِّيَّةُ؟",
        q_en: "How did the brown goat pass?",
        options: [
          { ar: "بِسُرْعَةٍ", en: "Quickly" },
          { ar: "بِحَذَرٍ", en: "Carefully" },
          { ar: "بِغَضَبٍ", en: "Angrily" }
        ],
        correct: 1,
        why: "مَرَّتْ بِحَذَرٍ — with caution. Another بِ+noun adverb for your collection!"
      },
      {
        q_ar: "«التَّعاوُنُ خَيْرٌ مِنَ العِنادِ» — ماذا تَعْني؟",
        q_en: "\"at-taʿāwunu khayrun mina l-ʿinādi\" — what does it mean?",
        options: [
          { ar: "العِنادُ يَرْبَحُ دائِمًا", en: "Stubbornness always wins" },
          { ar: "التَّعاوُنُ أَفْضَلُ مِنَ العِنادِ", en: "Cooperation is better than stubbornness" },
          { ar: "الجِسْرُ خَطيرٌ", en: "The bridge is dangerous" }
        ],
        correct: 1,
        why: "خَيْرٌ مِنْ = better than. The story's moral in one line."
      },
      {
        q_ar: "«هُنا» وَ«هُناكَ» — ما الفَرْقُ؟",
        q_en: "\"hunā\" vs \"hunāka\" — what's the difference?",
        options: [
          { ar: "هُنا = here، هُناكَ = there", en: "Here vs there" },
          { ar: "هُما نَفْسُ الشَّيْءِ", en: "They're the same" },
          { ar: "هُنا = there، هُناكَ = here", en: "There vs here" }
        ],
        correct: 0,
        why: "هُنا here, هُناكَ there. And كانَ هُناكَ = 'there was' — how Arabic starts fables!"
      }
    ]
  },

  /* ═══════════ STORY 12 — The Old Man and the Tree ═══════════ */
  {
    id: "old-man-tree",
    title_ar: "العَجوزُ وَالشَّجَرَةُ",
    title_en: "The Old Man and the Tree",
    level: "Beginner · A1",
    cover: "assets/img/old-man-tree/cover.jpg",
    minutes: 4,
    pages: [
      {
        img: "assets/img/old-man-tree/s1.jpg",
        audio: "s1",
        ar: "كانَ رَجُلٌ عَجوزٌ يَزْرَعُ شَجَرَةَ تينٍ صَغيرَةً في الحَقْلِ.",
        tr: "kāna rajulun ʿajūzun yazraʿu shajarata tīnin ṣaghīratan fī l-ḥaqli.",
        en: "An old man was planting a small fig tree in the field.",
        tense: "Past continuous — كانَ + يَفْعَلُ",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "رَجُلٌ", tr: "rajulun", en: "a man" },
          { ar: "عَجوزٌ", tr: "ʿajūzun", en: "old (person)" },
          { ar: "يَزْرَعُ", tr: "yazraʿu", en: "planting / plants" },
          { ar: "شَجَرَةَ", tr: "shajarata", en: "tree (of)" },
          { ar: "تينٍ", tr: "tīnin", en: "fig" },
          { ar: "صَغيرَةً", tr: "ṣaghīratan", en: "small" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الحَقْلِ", tr: "al-ḥaqli", en: "the field" }
        ]
      },
      {
        img: "assets/img/old-man-tree/s2.jpg",
        audio: "s2",
        ar: "مَرَّ شابٌّ وَضَحِكَ: يا جَدّي، أَنْتَ عَجوزٌ. لَنْ تَأْكُلَ مِنْ هٰذِهِ الشَّجَرَةِ أَبَدًا!",
        tr: "marra shābbun wa-ḍaḥika: yā jaddī, anta ʿajūzun. lan taʾkula min hādhihi sh-shajarati abadan!",
        en: "A young man passed by and laughed: Grandpa, you are old. You will never eat from this tree!",
        tense: "Future negation — لَنْ",
        words: [
          { ar: "مَرَّ", tr: "marra", en: "passed by" },
          { ar: "شابٌّ", tr: "shābbun", en: "a young man" },
          { ar: "وَضَحِكَ", tr: "wa-ḍaḥika", en: "and laughed" },
          { ar: "يا", tr: "yā", en: "O / hey" },
          { ar: "جَدّي", tr: "jaddī", en: "my grandpa" },
          { ar: "أَنْتَ", tr: "anta", en: "you (m.)" },
          { ar: "عَجوزٌ", tr: "ʿajūzun", en: "old" },
          { ar: "لَنْ", tr: "lan", en: "will never / won't" },
          { ar: "تَأْكُلَ", tr: "taʾkula", en: "eat (you)" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "هٰذِهِ", tr: "hādhihi", en: "this (f.)" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" },
          { ar: "أَبَدًا", tr: "abadan", en: "ever / never" }
        ]
      },
      {
        img: "assets/img/old-man-tree/s3.jpg",
        audio: "s3",
        ar: "اِبْتَسَمَ العَجوزُ وَقالَ: زَرَعَ النّاسُ قَبْلَنا، فَأَكَلْنا. وَنَزْرَعُ نَحْنُ، فَيَأْكُلُ مَنْ بَعْدَنا.",
        tr: "ibtasama l-ʿajūzu wa-qāla: zaraʿa n-nāsu qablanā, fa-akalnā. wa-nazraʿu naḥnu, fa-yaʾkulu man baʿdanā.",
        en: "The old man smiled and said: People planted before us, so we ate. And we plant, so those after us will eat.",
        tense: "Past + present — wisdom saying",
        words: [
          { ar: "اِبْتَسَمَ", tr: "ibtasama", en: "smiled" },
          { ar: "العَجوزُ", tr: "al-ʿajūzu", en: "the old man" },
          { ar: "وَقالَ", tr: "wa-qāla", en: "and said" },
          { ar: "زَرَعَ", tr: "zaraʿa", en: "planted" },
          { ar: "النّاسُ", tr: "an-nāsu", en: "the people" },
          { ar: "قَبْلَنا", tr: "qablanā", en: "before us" },
          { ar: "فَأَكَلْنا", tr: "fa-akalnā", en: "so we ate" },
          { ar: "وَنَزْرَعُ", tr: "wa-nazraʿu", en: "and we plant" },
          { ar: "نَحْنُ", tr: "naḥnu", en: "we" },
          { ar: "فَيَأْكُلُ", tr: "fa-yaʾkulu", en: "so eats" },
          { ar: "مَنْ", tr: "man", en: "who(ever)" },
          { ar: "بَعْدَنا", tr: "baʿdanā", en: "after us" }
        ]
      },
      {
        img: "assets/img/old-man-tree/s4.jpg",
        audio: "s4",
        ar: "مَرَّتِ السَّنَواتُ، وَكَبُرَتِ الشَّجَرَةُ. صارَتْ كَبيرَةً وَمَليئَةً بِالتّينِ الحُلْوِ.",
        tr: "marrati s-sanawātu, wa-kaburati sh-shajaratu. ṣārat kabīratan wa-malīʾatan bi-t-tīni l-ḥulwi.",
        en: "The years passed, and the tree grew. It became big and full of sweet figs.",
        tense: "Past + صارَتْ (became)",
        words: [
          { ar: "مَرَّتِ", tr: "marrati", en: "passed" },
          { ar: "السَّنَواتُ", tr: "as-sanawātu", en: "the years" },
          { ar: "وَكَبُرَتِ", tr: "wa-kaburati", en: "and grew" },
          { ar: "الشَّجَرَةُ", tr: "ash-shajaratu", en: "the tree" },
          { ar: "صارَتْ", tr: "ṣārat", en: "became (she/it)" },
          { ar: "كَبيرَةً", tr: "kabīratan", en: "big" },
          { ar: "وَمَليئَةً", tr: "wa-malīʾatan", en: "and full" },
          { ar: "بِالتّينِ", tr: "bi-t-tīni", en: "of figs" },
          { ar: "الحُلْوِ", tr: "al-ḥulwi", en: "sweet" }
        ]
      },
      {
        img: "assets/img/old-man-tree/s5.jpg",
        audio: "s5",
        ar: "جَلَسَ الشّابُّ مَعَ أَوْلادِهِ تَحْتَ الشَّجَرَةِ. أَكَلوا التّينَ وَتَذَكَّرَ كَلامَ العَجوزِ الحَكيمِ.",
        tr: "jalasa sh-shābbu maʿa awlādihi taḥta sh-shajarati. akalū t-tīna wa-tadhakkara kalāma l-ʿajūzi l-ḥakīmi.",
        en: "The (once) young man sat with his children under the tree. They ate the figs, and he remembered the wise old man's words.",
        tense: "Past — plural أَكَلوا",
        words: [
          { ar: "جَلَسَ", tr: "jalasa", en: "sat" },
          { ar: "الشّابُّ", tr: "ash-shābbu", en: "the young man" },
          { ar: "مَعَ", tr: "maʿa", en: "with" },
          { ar: "أَوْلادِهِ", tr: "awlādihi", en: "his children" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "الشَّجَرَةِ", tr: "ash-shajarati", en: "the tree" },
          { ar: "أَكَلوا", tr: "akalū", en: "they ate" },
          { ar: "التّينَ", tr: "at-tīna", en: "the figs" },
          { ar: "وَتَذَكَّرَ", tr: "wa-tadhakkara", en: "and he remembered" },
          { ar: "كَلامَ", tr: "kalāma", en: "words (of)" },
          { ar: "العَجوزِ", tr: "al-ʿajūzi", en: "the old man" },
          { ar: "الحَكيمِ", tr: "al-ḥakīmi", en: "the wise" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا كانَ يَزْرَعُ العَجوزُ؟",
        q_en: "What was the old man planting?",
        options: [
          { ar: "شَجَرَةَ تينٍ", en: "A fig tree" },
          { ar: "شَجَرَةَ زَيْتونٍ", en: "An olive tree" },
          { ar: "وَرْدًا", en: "Roses" }
        ],
        correct: 0,
        why: "كانَ يَزْرَعُ شَجَرَةَ تينٍ صَغيرَةً — a small fig tree."
      },
      {
        q_ar: "لِماذا ضَحِكَ الشّابُّ؟",
        q_en: "Why did the young man laugh?",
        options: [
          { ar: "لِأَنَّ الشَّجَرَةَ جَميلَةٌ", en: "Because the tree was beautiful" },
          { ar: "لِأَنَّهُ ظَنَّ أَنَّ العَجوزَ لَنْ يَأْكُلَ مِنْها", en: "Because he thought the old man would never eat from it" },
          { ar: "لِأَنَّهُ سَمِعَ نُكْتَةً", en: "Because he heard a joke" }
        ],
        correct: 1,
        why: "He mocked: لَنْ تَأْكُلَ مِنْ هٰذِهِ الشَّجَرَةِ أَبَدًا — you'll never eat from it!"
      },
      {
        q_ar: "«لَنْ تَأْكُلَ» — ما زَمَنُ هٰذِهِ الجُمْلَةِ؟",
        q_en: "\"lan taʾkula\" — what tense is this?",
        options: [
          { ar: "نَفْيُ الماضي", en: "Negated past" },
          { ar: "نَفْيُ المُسْتَقْبَلِ — will never", en: "Negated future — will never" },
          { ar: "أَمْرٌ", en: "Command" }
        ],
        correct: 1,
        why: "لَنْ + present verb = will never. Your third negation: ما (past), لا (present), لَنْ (future)!"
      },
      {
        q_ar: "ماذا أَجابَ العَجوزُ؟",
        q_en: "What did the old man reply?",
        options: [
          { ar: "زَرَعوا قَبْلَنا فَأَكَلْنا، وَنَزْرَعُ فَيَأْكُلُ مَنْ بَعْدَنا", en: "They planted before us so we ate; we plant so those after us eat" },
          { ar: "أَنا سَآكُلُ مِنْها غَدًا", en: "I will eat from it tomorrow" },
          { ar: "اُتْرُكْني وَحْدي", en: "Leave me alone" }
        ],
        correct: 0,
        why: "The famous wisdom: we plant for the next generation, as others planted for us."
      },
      {
        q_ar: "ماذا حَدَثَ بَعْدَ سَنَواتٍ؟",
        q_en: "What happened after years?",
        options: [
          { ar: "ماتَتِ الشَّجَرَةُ", en: "The tree died" },
          { ar: "كَبُرَتِ الشَّجَرَةُ وَامْتَلَأَتْ بِالتّينِ", en: "The tree grew and filled with figs" },
          { ar: "قَطَعوا الشَّجَرَةَ", en: "They cut the tree down" }
        ],
        correct: 1,
        why: "كَبُرَتِ الشَّجَرَةُ... مَليئَةً بِالتّينِ الحُلْوِ — big and full of sweet figs."
      },
      {
        q_ar: "مَنْ أَكَلَ مِنَ الشَّجَرَةِ في النِّهايَةِ؟",
        q_en: "Who ate from the tree in the end?",
        options: [
          { ar: "العَجوزُ نَفْسُهُ", en: "The old man himself" },
          { ar: "لا أَحَدَ", en: "Nobody" },
          { ar: "الشّابُّ وَأَوْلادُهُ", en: "The (once) young man and his children" }
        ],
        correct: 2,
        why: "جَلَسَ الشّابُّ مَعَ أَوْلادِهِ... أَكَلوا التّينَ — exactly as the old man foretold."
      },
      {
        q_ar: "«أَكَلوا» — مَنِ الَّذي أَكَلَ؟",
        q_en: "\"akalū\" — who ate?",
        options: [
          { ar: "واحِدٌ", en: "One person" },
          { ar: "اِثْنانِ", en: "Two people" },
          { ar: "جَماعَةٌ — ثَلاثَةٌ أَوْ أَكْثَرُ", en: "A group — three or more" }
        ],
        correct: 2,
        why: "The ـوا ending = they (3+). One أَكَلَ, two أَكَلا, group أَكَلوا."
      },
      {
        q_ar: "«الحَكيم» — ما مَعْناها؟",
        q_en: "\"al-ḥakīm\" — what does it mean?",
        options: [
          { ar: "الغَنِيّ — rich", en: "Rich" },
          { ar: "الحَكيم — wise", en: "Wise" },
          { ar: "القَوِيّ — strong", en: "Strong" }
        ],
        correct: 1,
        why: "حَكيم = wise. From the same root as حِكْمَة (wisdom)."
      },
      {
        q_ar: "ما عَكْسُ «عَجوز»؟",
        q_en: "What is the opposite of \"ʿajūz\" (old person)?",
        options: [
          { ar: "شابّ — young", en: "Young (person)" },
          { ar: "طَويل — tall", en: "Tall" },
          { ar: "حَكيم — wise", en: "Wise" }
        ],
        correct: 0,
        why: "عَجوز (old) ↔ شابّ (young). Both key characters of this story!"
      },
      {
        q_ar: "ما هِيَ رِسالَةُ القِصَّةِ؟",
        q_en: "What is the story's message?",
        options: [
          { ar: "اِعْمَلْ لِمَنْ يَأْتي بَعْدَكَ", en: "Work for those who come after you" },
          { ar: "لا تَزْرَعْ وَأَنْتَ عَجوزٌ", en: "Don't plant when you're old" },
          { ar: "التّينُ أَحْلى الفَواكِهِ", en: "Figs are the sweetest fruit" }
        ],
        correct: 0,
        why: "Plant seeds whose shade you may never sit in — generosity across generations."
      }
    ]
  },

  /* ═══════════ STORY 13 — The Clever Crow ═══════════ */
  {
    id: "clever-crow",
    title_ar: "الغُرابُ الذَّكِيُّ",
    title_en: "The Clever Crow",
    level: "Beginner · A1",
    cover: "assets/img/clever-crow/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/clever-crow/s1.jpg",
        audio: "s1",
        ar: "كانَ الجَوُّ حارًّا جِدًّا. طارَ غُرابٌ عَطْشانُ يَبْحَثُ عَنِ الماءِ.",
        tr: "kāna l-jawwu ḥārran jiddan. ṭāra ghurābun ʿaṭshānu yabḥathu ʿani l-māʾi.",
        en: "The weather was very hot. A thirsty crow flew, searching for water.",
        tense: "Past + يَبْحَثُ عَنْ (searching for)",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "الجَوُّ", tr: "al-jawwu", en: "the weather" },
          { ar: "حارًّا", tr: "ḥārran", en: "hot" },
          { ar: "جِدًّا", tr: "jiddan", en: "very" },
          { ar: "طارَ", tr: "ṭāra", en: "flew" },
          { ar: "غُرابٌ", tr: "ghurābun", en: "a crow" },
          { ar: "عَطْشانُ", tr: "ʿaṭshānu", en: "thirsty" },
          { ar: "يَبْحَثُ", tr: "yabḥathu", en: "searching" },
          { ar: "عَنِ", tr: "ʿani", en: "for / about" },
          { ar: "الماءِ", tr: "al-māʾi", en: "the water" }
        ]
      },
      {
        img: "assets/img/clever-crow/s2.jpg",
        audio: "s2",
        ar: "وَجَدَ جَرَّةً فيها قَليلٌ مِنَ الماءِ، لٰكِنَّ مِنْقارَهُ لا يَصِلُ إِلَيْهِ. فَكَّرَ الغُرابُ، ثُمَّ حَمَلَ الحَصى وَرَماها في الجَرَّةِ.",
        tr: "wajada jarratan fīhā qalīlun mina l-māʾi, lākinna minqārahu lā yaṣilu ilayhi. fakkara l-ghurābu, thumma ḥamala l-ḥaṣā wa-ramāhā fī l-jarrati.",
        en: "He found a jug with a little water in it, but his beak could not reach it. The crow thought, then carried pebbles and threw them into the jug.",
        tense: "Past + لٰكِنَّ + لا",
        words: [
          { ar: "وَجَدَ", tr: "wajada", en: "found" },
          { ar: "جَرَّةً", tr: "jarratan", en: "a jug" },
          { ar: "فيها", tr: "fīhā", en: "in it" },
          { ar: "قَليلٌ", tr: "qalīlun", en: "a little" },
          { ar: "مِنَ", tr: "mina", en: "of" },
          { ar: "الماءِ", tr: "al-māʾi", en: "the water" },
          { ar: "لٰكِنَّ", tr: "lākinna", en: "but" },
          { ar: "مِنْقارَهُ", tr: "minqārahu", en: "his beak" },
          { ar: "لا", tr: "lā", en: "not" },
          { ar: "يَصِلُ", tr: "yaṣilu", en: "reaches" },
          { ar: "إِلَيْهِ", tr: "ilayhi", en: "to it" },
          { ar: "فَكَّرَ", tr: "fakkara", en: "thought" },
          { ar: "الغُرابُ", tr: "al-ghurābu", en: "the crow" },
          { ar: "ثُمَّ", tr: "thumma", en: "then" },
          { ar: "حَمَلَ", tr: "ḥamala", en: "carried" },
          { ar: "الحَصى", tr: "al-ḥaṣā", en: "the pebbles" },
          { ar: "وَرَماها", tr: "wa-ramāhā", en: "and threw them" },
          { ar: "في", tr: "fī", en: "into" },
          { ar: "الجَرَّةِ", tr: "al-jarrati", en: "the jug" }
        ]
      },
      {
        img: "assets/img/clever-crow/s3.jpg",
        audio: "s3",
        ar: "اِرْتَفَعَ الماءُ قَليلًا قَليلًا. شَرِبَ الغُرابُ وَطارَ سَعيدًا. مَنْ فَكَّرَ، وَجَدَ الحَلَّ.",
        tr: "irtafaʿa l-māʾu qalīlan qalīlan. shariba l-ghurābu wa-ṭāra saʿīdan. man fakkara, wajada l-ḥalla.",
        en: "The water rose little by little. The crow drank and flew away happy. Whoever thinks, finds the solution.",
        tense: "Past + proverb (مَنْ = whoever)",
        words: [
          { ar: "اِرْتَفَعَ", tr: "irtafaʿa", en: "rose" },
          { ar: "الماءُ", tr: "al-māʾu", en: "the water" },
          { ar: "قَليلًا", tr: "qalīlan", en: "little" },
          { ar: "قَليلًا", tr: "qalīlan", en: "by little" },
          { ar: "شَرِبَ", tr: "shariba", en: "drank" },
          { ar: "الغُرابُ", tr: "al-ghurābu", en: "the crow" },
          { ar: "وَطارَ", tr: "wa-ṭāra", en: "and flew" },
          { ar: "سَعيدًا", tr: "saʿīdan", en: "happy" },
          { ar: "مَنْ", tr: "man", en: "whoever" },
          { ar: "فَكَّرَ", tr: "fakkara", en: "thinks / thought" },
          { ar: "وَجَدَ", tr: "wajada", en: "finds / found" },
          { ar: "الحَلَّ", tr: "al-ḥalla", en: "the solution" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "لِماذا كانَ الغُرابُ يَبْحَثُ عَنِ الماءِ؟",
        q_en: "Why was the crow searching for water?",
        options: [
          { ar: "لِأَنَّهُ كانَ عَطْشانَ وَالجَوُّ حارٌّ", en: "Because it was thirsty and the weather was hot" },
          { ar: "لِيَسْبَحَ", en: "To swim" },
          { ar: "لِيَغْسِلَ ريشَهُ", en: "To wash its feathers" }
        ],
        correct: 0,
        why: "الجَوُّ حارٌّ جِدًّا + غُرابٌ عَطْشانُ — very hot day, thirsty crow."
      },
      {
        q_ar: "ما كانَتِ المُشْكِلَةُ مَعَ الجَرَّةِ؟",
        q_en: "What was the problem with the jug?",
        options: [
          { ar: "كانَتْ فارِغَةً", en: "It was empty" },
          { ar: "مِنْقارُهُ لا يَصِلُ إِلى الماءِ", en: "His beak couldn't reach the water" },
          { ar: "كانَتْ مَكْسورَةً", en: "It was broken" }
        ],
        correct: 1,
        why: "The water was too low — مِنْقارُهُ لا يَصِلُ إِلَيْهِ."
      },
      {
        q_ar: "ماذا فَعَلَ الغُرابُ لِيَشْرَبَ؟",
        q_en: "What did the crow do to drink?",
        options: [
          { ar: "كَسَرَ الجَرَّةَ", en: "It broke the jug" },
          { ar: "اِنْتَظَرَ المَطَرَ", en: "It waited for rain" },
          { ar: "رَمى الحَصى في الجَرَّةِ", en: "It threw pebbles into the jug" }
        ],
        correct: 2,
        why: "حَمَلَ الحَصى وَرَماها في الجَرَّةِ — the pebbles pushed the water up."
      },
      {
        q_ar: "كَيْفَ اِرْتَفَعَ الماءُ؟",
        q_en: "How did the water rise?",
        options: [
          { ar: "قَليلًا قَليلًا", en: "Little by little" },
          { ar: "بِسُرْعَةٍ", en: "Quickly" },
          { ar: "لَمْ يَرْتَفِعْ", en: "It didn't rise" }
        ],
        correct: 0,
        why: "قَليلًا قَليلًا — repeating a word = 'bit by bit'. A handy pattern!"
      },
      {
        q_ar: "«مَنْ فَكَّرَ وَجَدَ الحَلَّ» — ماذا تَعْني؟",
        q_en: "\"man fakkara wajada l-ḥall\" — what does it mean?",
        options: [
          { ar: "القُوَّةُ تَحُلُّ كُلَّ شَيْءٍ", en: "Strength solves everything" },
          { ar: "مَنْ يُفَكِّرْ يَجِدِ الحَلَّ", en: "Whoever thinks, finds the solution" },
          { ar: "الماءُ أَهَمُّ شَيْءٍ", en: "Water is the most important thing" }
        ],
        correct: 1,
        why: "مَنْ + verb = whoever does… — thinking beats strength."
      },
      {
        q_ar: "ما عَكْسُ «عَطْشان»؟",
        q_en: "What is the opposite of \"ʿaṭshān\" (thirsty)?",
        options: [
          { ar: "جَوْعان — hungry", en: "Hungry" },
          { ar: "رَيّان — quenched", en: "Quenched (not thirsty)" },
          { ar: "تَعْبان — tired", en: "Tired" }
        ],
        correct: 1,
        why: "عَطْشان ↔ رَيّان. Note the ـان pattern: عطشان، جوعان، تعبان — states you feel!"
      }
    ]
  },

  /* ═══════════ STORY 14 — The Kind Neighbor ═══════════ */
  {
    id: "kind-neighbor",
    title_ar: "الجارَةُ الكَريمَةُ",
    title_en: "The Kind Neighbor",
    level: "Beginner · A1",
    cover: "assets/img/kind-neighbor/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/kind-neighbor/s1.jpg",
        audio: "s1",
        ar: "اِنْتَقَلَتْ عائِلَةٌ جَديدَةٌ إِلى الحَيِّ. لَمْ يَعْرِفوا أَحَدًا هُناكَ.",
        tr: "intaqalat ʿāʾilatun jadīdatun ilā l-ḥayyi. lam yaʿrifū aḥadan hunāka.",
        en: "A new family moved to the neighborhood. They didn't know anyone there.",
        tense: "Past + لَمْ negation",
        words: [
          { ar: "اِنْتَقَلَتْ", tr: "intaqalat", en: "moved (she/it)" },
          { ar: "عائِلَةٌ", tr: "ʿāʾilatun", en: "a family" },
          { ar: "جَديدَةٌ", tr: "jadīdatun", en: "new" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "الحَيِّ", tr: "al-ḥayyi", en: "the neighborhood" },
          { ar: "لَمْ", tr: "lam", en: "did not" },
          { ar: "يَعْرِفوا", tr: "yaʿrifū", en: "know (they)" },
          { ar: "أَحَدًا", tr: "aḥadan", en: "anyone" },
          { ar: "هُناكَ", tr: "hunāka", en: "there" }
        ]
      },
      {
        img: "assets/img/kind-neighbor/s2.jpg",
        audio: "s2",
        ar: "طَرَقَتِ الجارَةُ البابَ وَمَعَها طَبَقٌ مِنَ الطَّعامِ. قالَتْ: أَهْلًا وَسَهْلًا في حَيِّنا!",
        tr: "ṭaraqati l-jāratu l-bāba wa-maʿahā ṭabaqun mina ṭ-ṭaʿāmi. qālat: ahlan wa-sahlan fī ḥayyinā!",
        en: "The neighbor knocked on the door with a dish of food. She said: Welcome to our neighborhood!",
        tense: "Past + greeting",
        words: [
          { ar: "طَرَقَتِ", tr: "ṭaraqati", en: "knocked (she)" },
          { ar: "الجارَةُ", tr: "al-jāratu", en: "the neighbor (f.)" },
          { ar: "البابَ", tr: "al-bāba", en: "the door" },
          { ar: "وَمَعَها", tr: "wa-maʿahā", en: "and with her" },
          { ar: "طَبَقٌ", tr: "ṭabaqun", en: "a dish" },
          { ar: "مِنَ", tr: "mina", en: "of" },
          { ar: "الطَّعامِ", tr: "aṭ-ṭaʿāmi", en: "the food" },
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "أَهْلًا", tr: "ahlan", en: "welcome" },
          { ar: "وَسَهْلًا", tr: "wa-sahlan", en: "(part of welcome)" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "حَيِّنا", tr: "ḥayyinā", en: "our neighborhood" }
        ]
      },
      {
        img: "assets/img/kind-neighbor/s3.jpg",
        audio: "s3",
        ar: "فَرِحَتِ العائِلَةُ كَثيرًا. وَبَعْدَ أُسْبوعٍ، أَعادوا الطَّبَقَ مَليئًا بِالحَلْوى. الجارُ قَبْلَ الدّارِ.",
        tr: "fariḥati l-ʿāʾilatu kathīran. wa-baʿda usbūʿin, aʿādū ṭ-ṭabaqa malīʾan bi-l-ḥalwā. al-jāru qabla d-dāri.",
        en: "The family was very happy. And after a week, they returned the dish full of sweets. (Choose) the neighbor before the house.",
        tense: "Past + famous proverb",
        words: [
          { ar: "فَرِحَتِ", tr: "fariḥati", en: "was happy (she/it)" },
          { ar: "العائِلَةُ", tr: "al-ʿāʾilatu", en: "the family" },
          { ar: "كَثيرًا", tr: "kathīran", en: "a lot / very much" },
          { ar: "وَبَعْدَ", tr: "wa-baʿda", en: "and after" },
          { ar: "أُسْبوعٍ", tr: "usbūʿin", en: "a week" },
          { ar: "أَعادوا", tr: "aʿādū", en: "they returned (something)" },
          { ar: "الطَّبَقَ", tr: "aṭ-ṭabaqa", en: "the dish" },
          { ar: "مَليئًا", tr: "malīʾan", en: "full" },
          { ar: "بِالحَلْوى", tr: "bi-l-ḥalwā", en: "of sweets" },
          { ar: "الجارُ", tr: "al-jāru", en: "the neighbor" },
          { ar: "قَبْلَ", tr: "qabla", en: "before" },
          { ar: "الدّارِ", tr: "ad-dāri", en: "the house" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "مَنِ اِنْتَقَلَ إِلى الحَيِّ؟",
        q_en: "Who moved to the neighborhood?",
        options: [
          { ar: "عائِلَةٌ جَديدَةٌ", en: "A new family" },
          { ar: "جارَةٌ عَجوزٌ", en: "An old neighbor" },
          { ar: "مُعَلِّمَةٌ", en: "A teacher" }
        ],
        correct: 0,
        why: "اِنْتَقَلَتْ عائِلَةٌ جَديدَةٌ إِلى الحَيِّ — a new family."
      },
      {
        q_ar: "ماذا أَحْضَرَتِ الجارَةُ؟",
        q_en: "What did the neighbor bring?",
        options: [
          { ar: "زُهورًا", en: "Flowers" },
          { ar: "طَبَقًا مِنَ الطَّعامِ", en: "A dish of food" },
          { ar: "هَدِيَّةً كَبيرَةً", en: "A big gift" }
        ],
        correct: 1,
        why: "مَعَها طَبَقٌ مِنَ الطَّعامِ — the classic welcome dish."
      },
      {
        q_ar: "«أَهْلًا وَسَهْلًا» — مَتى نَقولُها؟",
        q_en: "\"ahlan wa-sahlan\" — when do we say it?",
        options: [
          { ar: "عِنْدَ الوَداعِ", en: "When saying goodbye" },
          { ar: "لِلتَّرْحيبِ بِالضُّيوفِ", en: "To welcome guests" },
          { ar: "قَبْلَ النَّوْمِ", en: "Before sleeping" }
        ],
        correct: 1,
        why: "It's THE Arabic welcome — literally 'you've come to family and easy ground'."
      },
      {
        q_ar: "كَيْفَ أَعادَتِ العائِلَةُ الطَّبَقَ؟",
        q_en: "How did the family return the dish?",
        options: [
          { ar: "فارِغًا", en: "Empty" },
          { ar: "مَكْسورًا", en: "Broken" },
          { ar: "مَليئًا بِالحَلْوى", en: "Full of sweets" }
        ],
        correct: 2,
        why: "أَعادوا الطَّبَقَ مَليئًا بِالحَلْوى — never return a dish empty; a real custom!"
      },
      {
        q_ar: "«الجارُ قَبْلَ الدّارِ» — ماذا يَعْني هٰذا المَثَلُ؟",
        q_en: "\"al-jāru qabla d-dāri\" — what does this proverb mean?",
        options: [
          { ar: "اِخْتَرْ جارًا طَيِّبًا قَبْلَ أَنْ تَخْتارَ البَيْتَ", en: "Choose a good neighbor before choosing the house" },
          { ar: "اِبْنِ الدّارَ أَوَّلًا", en: "Build the house first" },
          { ar: "الجارُ يَسْكُنُ قَريبًا", en: "The neighbor lives nearby" }
        ],
        correct: 0,
        why: "Famous proverb: good neighbors matter more than the house itself."
      },
      {
        q_ar: "«حَيِّنا» — ماذا تَعْني «نا» في الآخِرِ؟",
        q_en: "\"ḥayyinā\" — what does the ending \"-nā\" mean?",
        options: [
          { ar: "«our» — حَيُّنا = our neighborhood", en: "Our — ḥayyunā = our neighborhood" },
          { ar: "«my» — حَيّي", en: "My" },
          { ar: "«their» — حَيُّهُمْ", en: "Their" }
        ],
        correct: 0,
        why: "ـنا = our: حَيُّنا our neighborhood, بَيْتُنا our house, قَبْلَنا before us."
      }
    ]
  },

  /* ═══════════ STORY 15 — A Gift for Mother ═══════════ */
  {
    id: "mothers-gift",
    title_ar: "هَدِيَّةٌ لِأُمّي",
    title_en: "A Gift for Mother",
    level: "Beginner · A1",
    cover: "assets/img/mothers-gift/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/mothers-gift/s1.jpg",
        audio: "s1",
        ar: "أَرادَ سامي هَدِيَّةً لِعيدِ ميلادِ أُمِّهِ، لٰكِنَّهُ لا يَمْلِكُ نُقودًا كَثيرَةً.",
        tr: "arāda sāmī hadiyyatan li-ʿīdi mīlādi ummihi, lākinnahu lā yamliku nuqūdan kathīratan.",
        en: "Sami wanted a gift for his mother's birthday, but he didn't have much money.",
        tense: "Past + لا يَمْلِكُ (doesn't own)",
        words: [
          { ar: "أَرادَ", tr: "arāda", en: "wanted" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "هَدِيَّةً", tr: "hadiyyatan", en: "a gift" },
          { ar: "لِعيدِ", tr: "li-ʿīdi", en: "for the celebration (of)" },
          { ar: "ميلادِ", tr: "mīlādi", en: "birth (of)" },
          { ar: "أُمِّهِ", tr: "ummihi", en: "his mother" },
          { ar: "لٰكِنَّهُ", tr: "lākinnahu", en: "but he" },
          { ar: "لا", tr: "lā", en: "not" },
          { ar: "يَمْلِكُ", tr: "yamliku", en: "owns / has" },
          { ar: "نُقودًا", tr: "nuqūdan", en: "money" },
          { ar: "كَثيرَةً", tr: "kathīratan", en: "much / many" }
        ]
      },
      {
        img: "assets/img/mothers-gift/s2.jpg",
        audio: "s2",
        ar: "عَمِلَ سامي في حَديقَةِ الجيرانِ ثَلاثَةَ أَيّامٍ. جَمَعَ النُّقودَ وَاشْتَرى وَرْدَةً جَميلَةً.",
        tr: "ʿamila sāmī fī ḥadīqati l-jīrāni thalāthata ayyāmin. jamaʿa n-nuqūda wa-shtarā wardatan jamīlatan.",
        en: "Sami worked in the neighbors' garden for three days. He collected the money and bought a beautiful rose.",
        tense: "Past + number (ثَلاثَة)",
        words: [
          { ar: "عَمِلَ", tr: "ʿamila", en: "worked" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "حَديقَةِ", tr: "ḥadīqati", en: "garden (of)" },
          { ar: "الجيرانِ", tr: "al-jīrāni", en: "the neighbors" },
          { ar: "ثَلاثَةَ", tr: "thalāthata", en: "three" },
          { ar: "أَيّامٍ", tr: "ayyāmin", en: "days" },
          { ar: "جَمَعَ", tr: "jamaʿa", en: "collected" },
          { ar: "النُّقودَ", tr: "an-nuqūda", en: "the money" },
          { ar: "وَاشْتَرى", tr: "wa-shtarā", en: "and bought" },
          { ar: "وَرْدَةً", tr: "wardatan", en: "a rose" },
          { ar: "جَميلَةً", tr: "jamīlatan", en: "beautiful" }
        ]
      },
      {
        img: "assets/img/mothers-gift/s3.jpg",
        audio: "s3",
        ar: "كَتَبَ بِطاقَةً صَغيرَةً: أُحِبُّكِ يا أُمّي. بَكَتِ الأُمُّ مِنَ الفَرَحِ وَعانَقَتْ سامي.",
        tr: "kataba biṭāqatan ṣaghīratan: uḥibbuki yā ummī. bakati l-ummu mina l-faraḥi wa-ʿānaqat sāmī.",
        en: "He wrote a small card: I love you, mom. The mother cried from joy and hugged Sami.",
        tense: "Past + أُحِبُّكِ (I love you)",
        words: [
          { ar: "كَتَبَ", tr: "kataba", en: "wrote" },
          { ar: "بِطاقَةً", tr: "biṭāqatan", en: "a card" },
          { ar: "صَغيرَةً", tr: "ṣaghīratan", en: "small" },
          { ar: "أُحِبُّكِ", tr: "uḥibbuki", en: "I love you (to a female)" },
          { ar: "يا", tr: "yā", en: "O" },
          { ar: "أُمّي", tr: "ummī", en: "my mother" },
          { ar: "بَكَتِ", tr: "bakati", en: "cried (she)" },
          { ar: "الأُمُّ", tr: "al-ummu", en: "the mother" },
          { ar: "مِنَ", tr: "mina", en: "from" },
          { ar: "الفَرَحِ", tr: "al-faraḥi", en: "the joy" },
          { ar: "وَعانَقَتْ", tr: "wa-ʿānaqat", en: "and hugged (she)" },
          { ar: "سامي", tr: "sāmī", en: "Sami" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا أَرادَ سامي؟",
        q_en: "What did Sami want?",
        options: [
          { ar: "هَدِيَّةً لِعيدِ ميلادِ أُمِّهِ", en: "A gift for his mother's birthday" },
          { ar: "لُعْبَةً جَديدَةً", en: "A new toy" },
          { ar: "دَرّاجَةً", en: "A bicycle" }
        ],
        correct: 0,
        why: "أَرادَ هَدِيَّةً لِعيدِ ميلادِ أُمِّهِ — a birthday gift for mom."
      },
      {
        q_ar: "ما كانَتْ مُشْكِلَةُ سامي؟",
        q_en: "What was Sami's problem?",
        options: [
          { ar: "لا يَعْرِفُ ماذا يَشْتَري", en: "He didn't know what to buy" },
          { ar: "لا يَمْلِكُ نُقودًا كَثيرَةً", en: "He didn't have much money" },
          { ar: "نَسِيَ العيدَ", en: "He forgot the birthday" }
        ],
        correct: 1,
        why: "لٰكِنَّهُ لا يَمْلِكُ نُقودًا كَثيرَةً — not enough money."
      },
      {
        q_ar: "كَيْفَ جَمَعَ سامي النُّقودَ؟",
        q_en: "How did Sami collect the money?",
        options: [
          { ar: "طَلَبَها مِنْ أَبيهِ", en: "He asked his father" },
          { ar: "وَجَدَها في الشّارِعِ", en: "He found it in the street" },
          { ar: "عَمِلَ في حَديقَةِ الجيرانِ", en: "He worked in the neighbors' garden" }
        ],
        correct: 2,
        why: "عَمِلَ ثَلاثَةَ أَيّامٍ — he earned it with honest work. That's the heart of the story!"
      },
      {
        q_ar: "كَمْ يَوْمًا عَمِلَ سامي؟",
        q_en: "How many days did Sami work?",
        options: [
          { ar: "يَوْمًا واحِدًا", en: "One day" },
          { ar: "ثَلاثَةَ أَيّامٍ", en: "Three days" },
          { ar: "أُسْبوعًا", en: "A week" }
        ],
        correct: 1,
        why: "ثَلاثَةَ أَيّامٍ — three days. واحِد ١، اِثْنانِ ٢، ثَلاثَة ٣!"
      },
      {
        q_ar: "ماذا كَتَبَ سامي في البِطاقَةِ؟",
        q_en: "What did Sami write on the card?",
        options: [
          { ar: "عيدُ ميلادٍ سَعيدٌ", en: "Happy birthday" },
          { ar: "أُحِبُّكِ يا أُمّي", en: "I love you, mom" },
          { ar: "شُكْرًا يا أُمّي", en: "Thank you, mom" }
        ],
        correct: 1,
        why: "أُحِبُّكِ يا أُمّي — I love you, mom. (To a male it would be أُحِبُّكَ.)"
      },
      {
        q_ar: "لِماذا بَكَتِ الأُمُّ؟",
        q_en: "Why did the mother cry?",
        options: [
          { ar: "مِنَ الفَرَحِ", en: "From joy" },
          { ar: "مِنَ الحُزْنِ", en: "From sadness" },
          { ar: "لِأَنَّ الوَرْدَةَ غالِيَةٌ", en: "Because the rose was expensive" }
        ],
        correct: 0,
        why: "بَكَتْ مِنَ الفَرَحِ — tears of joy. Sometimes we cry when we're happiest."
      },
      {
        q_ar: "ما الدَّرْسُ مِنَ القِصَّةِ؟",
        q_en: "What is the lesson of the story?",
        options: [
          { ar: "الهَدايا الغالِيَةُ أَفْضَلُ", en: "Expensive gifts are better" },
          { ar: "الهَدِيَّةُ مِنَ القَلْبِ وَالعَمَلِ أَغْلى هَدِيَّةٍ", en: "A gift from the heart and hard work is the most precious" },
          { ar: "لا تَشْتَرِ الوُرودَ", en: "Don't buy roses" }
        ],
        correct: 1,
        why: "One rose earned by three days of work meant more than anything money could buy."
      }
    ]
  },

  /* ═══════════ STORY 16 — The Night Train (Set 3) ═══════════ */
  {
    id: "night-train",
    title_ar: "القِطارُ اللَّيْلِيُّ",
    title_en: "The Night Train",
    level: "Beginner+ · A2",
    cover: "assets/img/night-train/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/night-train/s1.jpg",
        audio: "s1",
        ar: "في المَساءِ، ذَهَبَ عُمَرُ وَأَبوهُ إِلى مَحَطَّةِ القِطارِ. اِشْتَرى الأَبُ تَذْكَرَتَيْنِ لِلْقِطارِ اللَّيْلِيِّ.",
        tr: "fī l-masāʾi, dhahaba ʿumaru wa-abūhu ilā maḥaṭṭati l-qiṭāri. ishtarā l-abu tadhkaratayni li-l-qiṭāri l-layliyyi.",
        en: "In the evening, Omar and his father went to the train station. The father bought two tickets for the night train.",
        tense: "Past + dual object (تَذْكَرَتَيْنِ)",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَساءِ", tr: "al-masāʾi", en: "the evening" },
          { ar: "ذَهَبَ", tr: "dhahaba", en: "went" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "وَأَبوهُ", tr: "wa-abūhu", en: "and his father" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "مَحَطَّةِ", tr: "maḥaṭṭati", en: "station (of)" },
          { ar: "القِطارِ", tr: "al-qiṭāri", en: "the train" },
          { ar: "اِشْتَرى", tr: "ishtarā", en: "bought" },
          { ar: "الأَبُ", tr: "al-abu", en: "the father" },
          { ar: "تَذْكَرَتَيْنِ", tr: "tadhkaratayni", en: "two tickets" },
          { ar: "لِلْقِطارِ", tr: "li-l-qiṭāri", en: "for the train" },
          { ar: "اللَّيْلِيِّ", tr: "al-layliyyi", en: "the night (adj.)" }
        ]
      },
      {
        img: "assets/img/night-train/s2.jpg",
        audio: "s2",
        ar: "جَلَسَ عُمَرُ بِجانِبِ النّافِذَةِ وَنَظَرَ إِلى النُّجومِ. كانَ صَوْتُ القِطارِ كَأُغْنِيَةٍ هادِئَةٍ.",
        tr: "jalasa ʿumaru bi-jānibi n-nāfidhati wa-naẓara ilā n-nujūmi. kāna ṣawtu l-qiṭāri ka-ughniyatin hādiʾatin.",
        en: "Omar sat next to the window and looked at the stars. The sound of the train was like a quiet song.",
        tense: "Past + كَـ (like) — simile!",
        words: [
          { ar: "جَلَسَ", tr: "jalasa", en: "sat" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "بِجانِبِ", tr: "bi-jānibi", en: "next to" },
          { ar: "النّافِذَةِ", tr: "an-nāfidhati", en: "the window" },
          { ar: "وَنَظَرَ", tr: "wa-naẓara", en: "and looked" },
          { ar: "إِلى", tr: "ilā", en: "at" },
          { ar: "النُّجومِ", tr: "an-nujūmi", en: "the stars" },
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "صَوْتُ", tr: "ṣawtu", en: "sound (of)" },
          { ar: "القِطارِ", tr: "al-qiṭāri", en: "the train" },
          { ar: "كَأُغْنِيَةٍ", tr: "ka-ughniyatin", en: "like a song" },
          { ar: "هادِئَةٍ", tr: "hādiʾatin", en: "quiet" }
        ]
      },
      {
        img: "assets/img/night-train/s3.jpg",
        audio: "s3",
        ar: "نامَ عُمَرُ، وَفي الصَّباحِ وَصَلَ القِطارُ إِلى المَدينَةِ. كانَتِ الجَدَّةُ تَنْتَظِرُهُما في المَحَطَّةِ بِابْتِسامَةٍ كَبيرَةٍ.",
        tr: "nāma ʿumaru, wa-fī ṣ-ṣabāḥi waṣala l-qiṭāru ilā l-madīnati. kānati l-jaddatu tantaẓiruhumā fī l-maḥaṭṭati bi-btisāmatin kabīratin.",
        en: "Omar slept, and in the morning the train arrived at the city. The grandmother was waiting for them at the station with a big smile.",
        tense: "Past continuous + هُما (them-two)",
        words: [
          { ar: "نامَ", tr: "nāma", en: "slept" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "وَفي", tr: "wa-fī", en: "and in" },
          { ar: "الصَّباحِ", tr: "aṣ-ṣabāḥi", en: "the morning" },
          { ar: "وَصَلَ", tr: "waṣala", en: "arrived" },
          { ar: "القِطارُ", tr: "al-qiṭāru", en: "the train" },
          { ar: "إِلى", tr: "ilā", en: "at/to" },
          { ar: "المَدينَةِ", tr: "al-madīnati", en: "the city" },
          { ar: "كانَتِ", tr: "kānati", en: "was" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "تَنْتَظِرُهُما", tr: "tantaẓiruhumā", en: "waiting for them-two" },
          { ar: "في", tr: "fī", en: "at" },
          { ar: "المَحَطَّةِ", tr: "al-maḥaṭṭati", en: "the station" },
          { ar: "بِابْتِسامَةٍ", tr: "bi-btisāmatin", en: "with a smile" },
          { ar: "كَبيرَةٍ", tr: "kabīratin", en: "big" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "إِلى أَيْنَ ذَهَبَ عُمَرُ وَأَبوهُ؟",
        q_en: "Where did Omar and his father go?",
        options: [
          { ar: "إِلى المَطارِ", en: "To the airport" },
          { ar: "إِلى مَحَطَّةِ القِطارِ", en: "To the train station" },
          { ar: "إِلى المَيْناءِ", en: "To the port" }
        ],
        correct: 1,
        why: "ذَهَبا إِلى مَحَطَّةِ القِطارِ — the station from your transport & city drills!"
      },
      {
        q_ar: "كَمْ تَذْكَرَةً اِشْتَرى الأَبُ؟",
        q_en: "How many tickets did the father buy?",
        options: [
          { ar: "تَذْكَرَةً واحِدَةً", en: "One ticket" },
          { ar: "تَذْكَرَتَيْنِ", en: "Two tickets" },
          { ar: "ثَلاثَ تَذاكِرَ", en: "Three tickets" }
        ],
        correct: 1,
        why: "تَذْكَرَتَيْنِ — the dual -ayni ending. Two people, two tickets!"
      },
      {
        q_ar: "«كَأُغْنِيَةٍ هادِئَةٍ» — ماذا تَفْعَلُ الكافُ هُنا؟",
        q_en: "\"ka-ughniya hādiʾa\" — what does the كَـ do?",
        options: [
          { ar: "تَعْني «مِثْل» — like", en: "It means 'like' — a comparison" },
          { ar: "تَعْني «لِأَنَّ»", en: "It means 'because'" },
          { ar: "لا مَعْنى لَها", en: "It has no meaning" }
        ],
        correct: 0,
        why: "كَـ + noun = like/as: the train's sound was LIKE a quiet song. Your first simile!"
      },
      {
        q_ar: "مَنْ كانَ يَنْتَظِرُهُما في المَحَطَّةِ؟",
        q_en: "Who was waiting for them at the station?",
        options: [
          { ar: "الجَدَّةُ", en: "The grandmother" },
          { ar: "الأُمُّ", en: "The mother" },
          { ar: "صَديقُ عُمَرَ", en: "Omar's friend" }
        ],
        correct: 0,
        why: "كانَتِ الجَدَّةُ تَنْتَظِرُهُما — with a big smile (بِابْتِسامَةٍ كَبيرَةٍ)."
      },
      {
        q_ar: "«تَنْتَظِرُهُما» — ماذا يَعْني «هُما»؟",
        q_en: "\"tantaẓiru-humā\" — what does the ending -humā mean?",
        options: [
          { ar: "هُما = them TWO", en: "Them two (dual!)" },
          { ar: "هُمْ = them all", en: "Them all" },
          { ar: "هُوَ = him", en: "Him" }
        ],
        correct: 0,
        why: "ـهُما = the dual 'them': waiting for the two of them — Omar AND his father."
      }
    ]
  },

  /* ═══════════ STORY 17 — Trip to the Mountains (Set 3) ═══════════ */
  {
    id: "mountain-trip",
    title_ar: "رِحْلَةٌ إِلى الجَبَلِ",
    title_en: "Trip to the Mountain",
    level: "Beginner+ · A2",
    cover: "assets/img/mountain-trip/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/mountain-trip/s1.jpg",
        audio: "s1",
        ar: "في الرَّبيعِ، صَعِدَتْ لَيْلى وَأَبوها الجَبَلَ. حَمَلا حَقيبَةَ الظَّهْرِ وَالماءَ وَالخُبْزَ.",
        tr: "fī r-rabīʿi, ṣaʿidat laylā wa-abūhā l-jabala. ḥamalā ḥaqībata ẓ-ẓahri wa-l-māʾa wa-l-khubza.",
        en: "In the spring, Layla and her father climbed the mountain. They carried the backpack, the water and the bread.",
        tense: "Past + dual حَمَلا",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الرَّبيعِ", tr: "ar-rabīʿi", en: "the spring" },
          { ar: "صَعِدَتْ", tr: "ṣaʿidat", en: "climbed (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "وَأَبوها", tr: "wa-abūhā", en: "and her father" },
          { ar: "الجَبَلَ", tr: "al-jabala", en: "the mountain" },
          { ar: "حَمَلا", tr: "ḥamalā", en: "they two carried" },
          { ar: "حَقيبَةَ", tr: "ḥaqībata", en: "bag (of)" },
          { ar: "الظَّهْرِ", tr: "aẓ-ẓahri", en: "the back" },
          { ar: "وَالماءَ", tr: "wa-l-māʾa", en: "and the water" },
          { ar: "وَالخُبْزَ", tr: "wa-l-khubza", en: "and the bread" }
        ]
      },
      {
        img: "assets/img/mountain-trip/s2.jpg",
        audio: "s2",
        ar: "كانَ الطَّريقُ طَويلًا، لٰكِنَّهُما وَجَدا نَبْعَ ماءٍ بارِدٍ. شَرِبا وَاسْتَراحا تَحْتَ صَخْرَةٍ كَبيرَةٍ.",
        tr: "kāna ṭ-ṭarīqu ṭawīlan, lākinnahumā wajadā nabʿa māʾin bāridin. sharibā wa-starāḥā taḥta ṣakhratin kabīratin.",
        en: "The road was long, but they found a spring of cold water. They drank and rested under a big rock.",
        tense: "Dual past ×3 — وَجَدا، شَرِبا، اِسْتَراحا",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "الطَّريقُ", tr: "aṭ-ṭarīqu", en: "the road" },
          { ar: "طَويلًا", tr: "ṭawīlan", en: "long" },
          { ar: "لٰكِنَّهُما", tr: "lākinnahumā", en: "but they two" },
          { ar: "وَجَدا", tr: "wajadā", en: "they two found" },
          { ar: "نَبْعَ", tr: "nabʿa", en: "spring (of)" },
          { ar: "ماءٍ", tr: "māʾin", en: "water" },
          { ar: "بارِدٍ", tr: "bāridin", en: "cold" },
          { ar: "شَرِبا", tr: "sharibā", en: "they two drank" },
          { ar: "وَاسْتَراحا", tr: "wa-starāḥā", en: "and they two rested" },
          { ar: "تَحْتَ", tr: "taḥta", en: "under" },
          { ar: "صَخْرَةٍ", tr: "ṣakhratin", en: "a rock" },
          { ar: "كَبيرَةٍ", tr: "kabīratin", en: "big" }
        ]
      },
      {
        img: "assets/img/mountain-trip/s3.jpg",
        audio: "s3",
        ar: "وَصَلا إِلى القِمَّةِ عِنْدَ الظُّهْرِ. قالَتْ لَيْلى: مِنْ هُنا أَرى العالَمَ كُلَّهُ!",
        tr: "waṣalā ilā l-qimmati ʿinda ẓ-ẓuhri. qālat laylā: min hunā arā l-ʿālama kullahu!",
        en: "They reached the summit at noon. Layla said: From here I see the whole world!",
        tense: "Dual past + أَرى (I see)",
        words: [
          { ar: "وَصَلا", tr: "waṣalā", en: "they two arrived" },
          { ar: "إِلى", tr: "ilā", en: "at/to" },
          { ar: "القِمَّةِ", tr: "al-qimmati", en: "the summit" },
          { ar: "عِنْدَ", tr: "ʿinda", en: "at" },
          { ar: "الظُّهْرِ", tr: "aẓ-ẓuhri", en: "noon" },
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "هُنا", tr: "hunā", en: "here" },
          { ar: "أَرى", tr: "arā", en: "I see" },
          { ar: "العالَمَ", tr: "al-ʿālama", en: "the world" },
          { ar: "كُلَّهُ", tr: "kullahu", en: "all of it" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "في أَيِّ فَصْلٍ صَعِدا الجَبَلَ؟",
        q_en: "In which season did they climb the mountain?",
        options: [
          { ar: "في الرَّبيعِ", en: "In the spring" },
          { ar: "في الشِّتاءِ", en: "In the winter" },
          { ar: "في الخَريفِ", en: "In the autumn" }
        ],
        correct: 0,
        why: "في الرَّبيعِ — spring, from your seasons drill!"
      },
      {
        q_ar: "ماذا حَمَلا مَعَهُما؟",
        q_en: "What did they carry with them?",
        options: [
          { ar: "حَقيبَةَ الظَّهْرِ وَالماءَ وَالخُبْزَ", en: "The backpack, water and bread" },
          { ar: "الكُتُبَ وَالأَقْلامَ", en: "Books and pens" },
          { ar: "المِظَلَّةَ وَالكُرَةَ", en: "The umbrella and the ball" }
        ],
        correct: 0,
        why: "حَقيبَة الظَّهْر = bag-of-the-back = backpack — the إضافة pattern again!"
      },
      {
        q_ar: "ماذا وَجَدا في الطَّريقِ؟",
        q_en: "What did they find on the way?",
        options: [
          { ar: "كَنْزًا", en: "A treasure" },
          { ar: "نَبْعَ ماءٍ بارِدٍ", en: "A spring of cold water" },
          { ar: "قُنْفُذًا", en: "A hedgehog" }
        ],
        correct: 1,
        why: "وَجَدا نَبْعَ ماءٍ بارِدٍ — نَبْع = a natural spring."
      },
      {
        q_ar: "مَتى وَصَلا إِلى القِمَّةِ؟",
        q_en: "When did they reach the summit?",
        options: [
          { ar: "عِنْدَ الغُروبِ", en: "At sunset" },
          { ar: "في اللَّيْلِ", en: "At night" },
          { ar: "عِنْدَ الظُّهْرِ", en: "At noon" }
        ],
        correct: 2,
        why: "وَصَلا إِلى القِمَّةِ عِنْدَ الظُّهْرِ — القِمَّة = the peak/summit."
      },
      {
        q_ar: "ماذا قالَتْ لَيْلى عَلى القِمَّةِ؟",
        q_en: "What did Layla say on the summit?",
        options: [
          { ar: "أَنا تَعْبانَةُ", en: "I am tired" },
          { ar: "مِنْ هُنا أَرى العالَمَ كُلَّهُ", en: "From here I see the whole world" },
          { ar: "أُريدُ أَنْ أَرْجِعَ", en: "I want to go back" }
        ],
        correct: 1,
        why: "أَرى = I see (the weak verb رأى in I-form!). العالَم كُلَّه = the whole world."
      }
    ]
  },

  /* ═══════════ STORY 18 — The Street Library (Set 3) ═══════════ */
  {
    id: "street-library",
    title_ar: "مَكْتَبَةُ الشّارِعِ",
    title_en: "The Street Library",
    level: "Beginner+ · A2",
    cover: "assets/img/street-library/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/street-library/s1.jpg",
        audio: "s1",
        ar: "فَتَحَ سامي مَكْتَبَةً صَغيرَةً أَمامَ بَيْتِهِ. وَضَعَ فيها كُتُبَهُ القَديمَةَ وَكَتَبَ: خُذْ كِتابًا، وَاتْرُكْ كِتابًا.",
        tr: "fataḥa sāmī maktabatan ṣaghīratan amāma baytihi. waḍaʿa fīhā kutubahu l-qadīmata wa-kataba: khudh kitāban, wa-truk kitāban.",
        en: "Sami opened a little library in front of his house. He put his old books in it and wrote: Take a book, and leave a book.",
        tense: "Past + paired commands خُذْ / اُتْرُكْ",
        words: [
          { ar: "فَتَحَ", tr: "fataḥa", en: "opened" },
          { ar: "سامي", tr: "sāmī", en: "Sami" },
          { ar: "مَكْتَبَةً", tr: "maktabatan", en: "a library" },
          { ar: "صَغيرَةً", tr: "ṣaghīratan", en: "little" },
          { ar: "أَمامَ", tr: "amāma", en: "in front of" },
          { ar: "بَيْتِهِ", tr: "baytihi", en: "his house" },
          { ar: "وَضَعَ", tr: "waḍaʿa", en: "put" },
          { ar: "فيها", tr: "fīhā", en: "in it" },
          { ar: "كُتُبَهُ", tr: "kutubahu", en: "his books" },
          { ar: "القَديمَةَ", tr: "al-qadīmata", en: "the old" },
          { ar: "وَكَتَبَ", tr: "wa-kataba", en: "and wrote" },
          { ar: "خُذْ", tr: "khudh", en: "take!" },
          { ar: "كِتابًا", tr: "kitāban", en: "a book" },
          { ar: "وَاتْرُكْ", tr: "wa-truk", en: "and leave!" }
        ]
      },
      {
        img: "assets/img/street-library/s2.jpg",
        audio: "s2",
        ar: "في البِدايَةِ، لَمْ يَأْتِ أَحَدٌ. ثُمَّ أَخَذَتْ بِنْتٌ قِصَّةً، وَتَرَكَتْ كِتابًا عَنِ النُّجومِ.",
        tr: "fī l-bidāyati, lam yaʾti aḥadun. thumma akhadhat bintun qiṣṣatan, wa-tarakat kitāban ʿani n-nujūmi.",
        en: "At the beginning, nobody came. Then a girl took a story, and left a book about the stars.",
        tense: "لَمْ negation + past",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "البِدايَةِ", tr: "al-bidāyati", en: "the beginning" },
          { ar: "لَمْ", tr: "lam", en: "did not" },
          { ar: "يَأْتِ", tr: "yaʾti", en: "come" },
          { ar: "أَحَدٌ", tr: "aḥadun", en: "anyone" },
          { ar: "ثُمَّ", tr: "thumma", en: "then" },
          { ar: "أَخَذَتْ", tr: "akhadhat", en: "took (she)" },
          { ar: "بِنْتٌ", tr: "bintun", en: "a girl" },
          { ar: "قِصَّةً", tr: "qiṣṣatan", en: "a story" },
          { ar: "وَتَرَكَتْ", tr: "wa-tarakat", en: "and left (she)" },
          { ar: "كِتابًا", tr: "kitāban", en: "a book" },
          { ar: "عَنِ", tr: "ʿani", en: "about" },
          { ar: "النُّجومِ", tr: "an-nujūmi", en: "the stars" }
        ]
      },
      {
        img: "assets/img/street-library/s3.jpg",
        audio: "s3",
        ar: "بَعْدَ شَهْرٍ، صارَتِ المَكْتَبَةُ مَلِيئَةً، وَصارَ الجيرانُ أَصْدِقاءَ. الكِتابُ بابٌ صَغيرٌ إِلى عالَمٍ كَبيرٍ.",
        tr: "baʿda shahrin, ṣārati l-maktabatu malīʾatan, wa-ṣāra l-jīrānu aṣdiqāʾa. al-kitābu bābun ṣaghīrun ilā ʿālamin kabīrin.",
        en: "After a month, the library became full, and the neighbors became friends. A book is a small door to a big world.",
        tense: "صارَ ×2 + closing wisdom",
        words: [
          { ar: "بَعْدَ", tr: "baʿda", en: "after" },
          { ar: "شَهْرٍ", tr: "shahrin", en: "a month" },
          { ar: "صارَتِ", tr: "ṣārati", en: "became" },
          { ar: "المَكْتَبَةُ", tr: "al-maktabatu", en: "the library" },
          { ar: "مَلِيئَةً", tr: "malīʾatan", en: "full" },
          { ar: "وَصارَ", tr: "wa-ṣāra", en: "and became" },
          { ar: "الجيرانُ", tr: "al-jīrānu", en: "the neighbors" },
          { ar: "أَصْدِقاءَ", tr: "aṣdiqāʾa", en: "friends" },
          { ar: "الكِتابُ", tr: "al-kitābu", en: "the book" },
          { ar: "بابٌ", tr: "bābun", en: "a door" },
          { ar: "صَغيرٌ", tr: "ṣaghīrun", en: "small" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "عالَمٍ", tr: "ʿālamin", en: "a world" },
          { ar: "كَبيرٍ", tr: "kabīrin", en: "big" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا فَتَحَ سامي أَمامَ بَيْتِهِ؟",
        q_en: "What did Sami open in front of his house?",
        options: [
          { ar: "دُكّانًا", en: "A shop" },
          { ar: "مَكْتَبَةً صَغيرَةً", en: "A little library" },
          { ar: "مَقْهًى", en: "A café" }
        ],
        correct: 1,
        why: "مَكْتَبَة — place-of-books, the مَفْعَل pattern from your city drill!"
      },
      {
        q_ar: "ماذا كَتَبَ سامي عَلى المَكْتَبَةِ؟",
        q_en: "What did Sami write on the library?",
        options: [
          { ar: "خُذْ كِتابًا وَاتْرُكْ كِتابًا", en: "Take a book and leave a book" },
          { ar: "لِلْبَيْعِ", en: "For sale" },
          { ar: "مَمْنوعُ اللَّمْسِ", en: "Do not touch" }
        ],
        correct: 0,
        why: "Two commands: خُذْ take! + اُتْرُكْ leave! — the real street-library motto."
      },
      {
        q_ar: "ماذا تَرَكَتِ البِنْتُ؟",
        q_en: "What did the girl leave?",
        options: [
          { ar: "كِتابًا عَنِ النُّجومِ", en: "A book about the stars" },
          { ar: "قِصَّةً", en: "A story" },
          { ar: "رِسالَةً", en: "A letter" }
        ],
        correct: 0,
        why: "She TOOK a story and LEFT a book about the stars — the exchange worked!"
      },
      {
        q_ar: "ماذا صارَ الجيرانُ بَعْدَ شَهْرٍ؟",
        q_en: "What did the neighbors become after a month?",
        options: [
          { ar: "أَصْدِقاءَ", en: "Friends" },
          { ar: "قُرّاءً غاضِبينَ", en: "Angry readers" },
          { ar: "مُعَلِّمينَ", en: "Teachers" }
        ],
        correct: 0,
        why: "صارَ الجيرانُ أَصْدِقاءَ — أَصْدِقاء = plural of صَديق!"
      },
      {
        q_ar: "«الكِتابُ بابٌ صَغيرٌ إِلى عالَمٍ كَبيرٍ» — ماذا تَعْني؟",
        q_en: "\"A book is a small door to a big world\" — what does it mean?",
        options: [
          { ar: "الكُتُبُ تَفْتَحُ لَنا عَوالِمَ جَديدَةً", en: "Books open new worlds for us" },
          { ar: "الكُتُبُ صَغيرَةُ الحَجْمِ", en: "Books are small in size" },
          { ar: "البُيوتُ تَحْتاجُ أَبْوابًا", en: "Houses need doors" }
        ],
        correct: 0,
        why: "A metaphor — exactly what this app hopes to be for your Arabic 🙂"
      }
    ]
  },

  /* ═══════════ STORY 19 — The Old Coin (Set 3) ═══════════ */
  {
    id: "old-coin",
    title_ar: "القِرْشُ القَديمُ",
    title_en: "The Old Coin",
    level: "Beginner+ · A2",
    cover: "assets/img/old-coin/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/old-coin/s1.jpg",
        audio: "s1",
        ar: "وَجَدَتْ لَيْلى قِرْشًا قَديمًا في دُرْجِ جَدَّتِها. قالَتِ الجَدَّةُ: هٰذا مِنْ زَمَنٍ بَعيدٍ، مِنْ أَيّامِ طُفولَتي.",
        tr: "wajadat laylā qirshan qadīman fī durji jaddatihā. qālati l-jaddatu: hādhā min zamanin baʿīdin, min ayyāmi ṭufūlatī.",
        en: "Layla found an old coin in her grandmother's drawer. The grandmother said: This is from a faraway time, from the days of my childhood.",
        tense: "Past + مِنْ زَمَنٍ بَعيدٍ",
        words: [
          { ar: "وَجَدَتْ", tr: "wajadat", en: "found (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "قِرْشًا", tr: "qirshan", en: "a coin" },
          { ar: "قَديمًا", tr: "qadīman", en: "old" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "دُرْجِ", tr: "durji", en: "drawer (of)" },
          { ar: "جَدَّتِها", tr: "jaddatihā", en: "her grandmother" },
          { ar: "قالَتِ", tr: "qālati", en: "said" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "هٰذا", tr: "hādhā", en: "this" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "زَمَنٍ", tr: "zamanin", en: "a time" },
          { ar: "بَعيدٍ", tr: "baʿīdin", en: "faraway" },
          { ar: "أَيّامِ", tr: "ayyāmi", en: "days (of)" },
          { ar: "طُفولَتي", tr: "ṭufūlatī", en: "my childhood" }
        ]
      },
      {
        img: "assets/img/old-coin/s2.jpg",
        audio: "s2",
        ar: "حَكَتِ الجَدَّةُ عَنِ السّوقِ القَديمِ، وَعَنْ بائِعِ الحَلْوى الَّذي كانَ يُغَنّي. ضَحِكَتا مَعًا طَويلًا.",
        tr: "ḥakati l-jaddatu ʿani s-sūqi l-qadīmi, wa-ʿan bāʾiʿi l-ḥalwā lladhī kāna yughannī. ḍaḥikatā maʿan ṭawīlan.",
        en: "The grandmother told about the old market, and about the candy seller who used to sing. They laughed together for a long time.",
        tense: "الَّذي + كانَ يَفْعَلُ (used to)",
        words: [
          { ar: "حَكَتِ", tr: "ḥakati", en: "told/narrated (she)" },
          { ar: "الجَدَّةُ", tr: "al-jaddatu", en: "the grandmother" },
          { ar: "عَنِ", tr: "ʿani", en: "about" },
          { ar: "السّوقِ", tr: "as-sūqi", en: "the market" },
          { ar: "القَديمِ", tr: "al-qadīmi", en: "the old" },
          { ar: "بائِعِ", tr: "bāʾiʿi", en: "seller (of)" },
          { ar: "الحَلْوى", tr: "al-ḥalwā", en: "the sweets" },
          { ar: "الَّذي", tr: "alladhī", en: "who/which" },
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "يُغَنّي", tr: "yughannī", en: "singing / used to sing" },
          { ar: "ضَحِكَتا", tr: "ḍaḥikatā", en: "they two laughed (f.)" },
          { ar: "مَعًا", tr: "maʿan", en: "together" },
          { ar: "طَويلًا", tr: "ṭawīlan", en: "for a long time" }
        ]
      },
      {
        img: "assets/img/old-coin/s3.jpg",
        audio: "s3",
        ar: "وَضَعَتْ لَيْلى القِرْشَ في عُلْبَةٍ جَميلَةٍ. قالَتْ: سَأَحْكي لِأَوْلادي عَنْهُ يَوْمًا ما.",
        tr: "waḍaʿat laylā l-qirsha fī ʿulbatin jamīlatin. qālat: sa-aḥkī li-awlādī ʿanhu yawman mā.",
        en: "Layla put the coin in a beautiful box. She said: I will tell my children about it someday.",
        tense: "Future سَأَحْكي + يَوْمًا ما",
        words: [
          { ar: "وَضَعَتْ", tr: "waḍaʿat", en: "put (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "القِرْشَ", tr: "al-qirsha", en: "the coin" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "عُلْبَةٍ", tr: "ʿulbatin", en: "a box/case" },
          { ar: "جَميلَةٍ", tr: "jamīlatin", en: "beautiful" },
          { ar: "قالَتْ", tr: "qālat", en: "said (she)" },
          { ar: "سَأَحْكي", tr: "sa-aḥkī", en: "I will tell" },
          { ar: "لِأَوْلادي", tr: "li-awlādī", en: "to my children" },
          { ar: "عَنْهُ", tr: "ʿanhu", en: "about it" },
          { ar: "يَوْمًا", tr: "yawman", en: "a day" },
          { ar: "ما", tr: "mā", en: "some(day)" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "أَيْنَ وَجَدَتْ لَيْلى القِرْشَ؟",
        q_en: "Where did Layla find the coin?",
        options: [
          { ar: "في دُرْجِ جَدَّتِها", en: "In her grandmother's drawer" },
          { ar: "في الشّارِعِ", en: "In the street" },
          { ar: "في الحَديقَةِ", en: "In the garden" }
        ],
        correct: 0,
        why: "في دُرْجِ جَدَّتِها — دُرْج = drawer, a new furniture word!"
      },
      {
        q_ar: "مِنْ أَيِّ زَمَنٍ كانَ القِرْشُ؟",
        q_en: "From what time was the coin?",
        options: [
          { ar: "مِنَ السَّنَةِ الماضِيَةِ", en: "From last year" },
          { ar: "مِنْ أَيّامِ طُفولَةِ الجَدَّةِ", en: "From the grandmother's childhood days" },
          { ar: "مِنَ المُسْتَقْبَلِ", en: "From the future" }
        ],
        correct: 1,
        why: "مِنْ أَيّامِ طُفولَتي — ṭufūla = childhood, from ṭifl (child)."
      },
      {
        q_ar: "«الَّذي كانَ يُغَنّي» — ماذا تَعْني «كانَ يُغَنّي»؟",
        q_en: "\"alladhī kāna yughannī\" — what does kāna yughannī mean?",
        options: [
          { ar: "غَنّى مَرَّةً واحِدَةً", en: "He sang once" },
          { ar: "كانَ يُغَنّي دائِمًا — used to sing", en: "He USED TO sing (habit in the past)" },
          { ar: "سَيُغَنّي غَدًا", en: "He will sing tomorrow" }
        ],
        correct: 1,
        why: "كانَ + present = 'used to' — the past-habit pattern. And الَّذي = who/which (relative pronoun!)."
      },
      {
        q_ar: "أَيْنَ وَضَعَتْ لَيْلى القِرْشَ؟",
        q_en: "Where did Layla put the coin?",
        options: [
          { ar: "في جَيْبِها", en: "In her pocket" },
          { ar: "في عُلْبَةٍ جَميلَةٍ", en: "In a beautiful box" },
          { ar: "في الدُّرْجِ مَرَّةً أُخْرى", en: "Back in the drawer" }
        ],
        correct: 1,
        why: "في عُلْبَةٍ جَميلَةٍ — a keepsake box, to treasure the memory."
      },
      {
        q_ar: "ماذا سَتَفْعَلُ لَيْلى يَوْمًا ما؟",
        q_en: "What will Layla do someday?",
        options: [
          { ar: "سَتَبيعُ القِرْشَ", en: "She will sell the coin" },
          { ar: "سَتَحْكي لِأَوْلادِها عَنْهُ", en: "She will tell her children about it" },
          { ar: "سَتُعيدُهُ لِلْجَدَّةِ", en: "She will return it to grandma" }
        ],
        correct: 1,
        why: "سَأَحْكي لِأَوْلادي — memories pass down generations, like the fig tree!"
      }
    ]
  },

  /* ═══════════ STORY 20 — The Power Cut (Set 3) ═══════════ */
  {
    id: "power-cut",
    title_ar: "لَيْلَةُ اِنْقِطاعِ الكَهْرَباءِ",
    title_en: "The Power Cut",
    level: "Beginner+ · A2",
    cover: "assets/img/power-cut/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/power-cut/s1.jpg",
        audio: "s1",
        ar: "في لَيْلَةٍ عاصِفَةٍ، اِنْقَطَعَتِ الكَهْرَباءُ عَنِ الحَيِّ كُلِّهِ. أَشْعَلَتِ الأُمُّ الشُّموعَ، وَجَلَسَتِ العائِلَةُ حَوْلَ الطّاوِلَةِ.",
        tr: "fī laylatin ʿāṣifatin, inqaṭaʿati l-kahrabāʾu ʿani l-ḥayyi kullihi. ashʿalati l-ummu sh-shumūʿa, wa-jalasati l-ʿāʾilatu ḥawla ṭ-ṭāwilati.",
        en: "On a stormy night, the electricity cut off from the whole neighborhood. The mother lit the candles, and the family sat around the table.",
        tense: "Past + حَوْلَ (around)",
        words: [
          { ar: "في", tr: "fī", en: "on/in" },
          { ar: "لَيْلَةٍ", tr: "laylatin", en: "a night" },
          { ar: "عاصِفَةٍ", tr: "ʿāṣifatin", en: "stormy" },
          { ar: "اِنْقَطَعَتِ", tr: "inqaṭaʿati", en: "was cut off" },
          { ar: "الكَهْرَباءُ", tr: "al-kahrabāʾu", en: "the electricity" },
          { ar: "عَنِ", tr: "ʿani", en: "from" },
          { ar: "الحَيِّ", tr: "al-ḥayyi", en: "the neighborhood" },
          { ar: "كُلِّهِ", tr: "kullihi", en: "all of it" },
          { ar: "أَشْعَلَتِ", tr: "ashʿalati", en: "lit (she)" },
          { ar: "الأُمُّ", tr: "al-ummu", en: "the mother" },
          { ar: "الشُّموعَ", tr: "ash-shumūʿa", en: "the candles" },
          { ar: "وَجَلَسَتِ", tr: "wa-jalasati", en: "and sat" },
          { ar: "العائِلَةُ", tr: "al-ʿāʾilatu", en: "the family" },
          { ar: "حَوْلَ", tr: "ḥawla", en: "around" },
          { ar: "الطّاوِلَةِ", tr: "aṭ-ṭāwilati", en: "the table" }
        ]
      },
      {
        img: "assets/img/power-cut/s2.jpg",
        audio: "s2",
        ar: "بِدونِ تِلْفازٍ وَلا هَواتِفَ، بَدَأَ الأَبُ يَحْكي قِصَصًا مُضْحِكَةً عَنْ شَبابِهِ. ضَحِكَ الجَميعُ حَتّى دَمَعَتْ عُيونُهُمْ.",
        tr: "bidūni tilfāzin wa-lā hawātifa, badaʾa l-abu yaḥkī qiṣaṣan muḍḥikatan ʿan shabābihi. ḍaḥika l-jamīʿu ḥattā damaʿat ʿuyūnuhum.",
        en: "Without TV or phones, the father began telling funny stories about his youth. Everyone laughed until their eyes watered.",
        tense: "بِدونِ (without) + بَدَأَ يَفْعَلُ + حَتّى",
        words: [
          { ar: "بِدونِ", tr: "bidūni", en: "without" },
          { ar: "تِلْفازٍ", tr: "tilfāzin", en: "TV" },
          { ar: "وَلا", tr: "wa-lā", en: "nor" },
          { ar: "هَواتِفَ", tr: "hawātifa", en: "phones (pl.)" },
          { ar: "بَدَأَ", tr: "badaʾa", en: "began" },
          { ar: "الأَبُ", tr: "al-abu", en: "the father" },
          { ar: "يَحْكي", tr: "yaḥkī", en: "telling" },
          { ar: "قِصَصًا", tr: "qiṣaṣan", en: "stories" },
          { ar: "مُضْحِكَةً", tr: "muḍḥikatan", en: "funny" },
          { ar: "عَنْ", tr: "ʿan", en: "about" },
          { ar: "شَبابِهِ", tr: "shabābihi", en: "his youth" },
          { ar: "ضَحِكَ", tr: "ḍaḥika", en: "laughed" },
          { ar: "الجَميعُ", tr: "al-jamīʿu", en: "everyone" },
          { ar: "حَتّى", tr: "ḥattā", en: "until" },
          { ar: "دَمَعَتْ", tr: "damaʿat", en: "watered/teared" },
          { ar: "عُيونُهُمْ", tr: "ʿuyūnuhum", en: "their eyes" }
        ]
      },
      {
        img: "assets/img/power-cut/s3.jpg",
        audio: "s3",
        ar: "عادَتِ الكَهْرَباءُ بَعْدَ ساعَتَيْنِ، لٰكِنَّ أَحَدًا لَمْ يُشَغِّلِ التِّلْفازَ. قالَ عُمَرُ: هٰذِهِ أَجْمَلُ لَيْلَةٍ، فَلْنُطْفِئِ النّورَ كُلَّ أُسْبوعٍ!",
        tr: "ʿādati l-kahrabāʾu baʿda sāʿatayni, lākinna aḥadan lam yushaghghili t-tilfāza. qāla ʿumaru: hādhihi ajmalu laylatin, fa-l-nuṭfiʾi n-nūra kulla usbūʿin!",
        en: "The electricity returned after two hours, but nobody turned on the TV. Omar said: This is the most beautiful night — let's turn off the lights every week!",
        tense: "ساعَتَيْنِ dual + فَلْـ (let's!)",
        words: [
          { ar: "عادَتِ", tr: "ʿādati", en: "returned" },
          { ar: "الكَهْرَباءُ", tr: "al-kahrabāʾu", en: "the electricity" },
          { ar: "بَعْدَ", tr: "baʿda", en: "after" },
          { ar: "ساعَتَيْنِ", tr: "sāʿatayni", en: "two hours" },
          { ar: "لٰكِنَّ", tr: "lākinna", en: "but" },
          { ar: "أَحَدًا", tr: "aḥadan", en: "anyone" },
          { ar: "لَمْ", tr: "lam", en: "did not" },
          { ar: "يُشَغِّلِ", tr: "yushaghghili", en: "turn on" },
          { ar: "التِّلْفازَ", tr: "at-tilfāza", en: "the TV" },
          { ar: "قالَ", tr: "qāla", en: "said" },
          { ar: "عُمَرُ", tr: "ʿumaru", en: "Omar" },
          { ar: "هٰذِهِ", tr: "hādhihi", en: "this (f.)" },
          { ar: "أَجْمَلُ", tr: "ajmalu", en: "most beautiful" },
          { ar: "لَيْلَةٍ", tr: "laylatin", en: "night" },
          { ar: "فَلْنُطْفِئِ", tr: "fa-l-nuṭfiʾi", en: "so let's turn off" },
          { ar: "النّورَ", tr: "an-nūra", en: "the light" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "أُسْبوعٍ", tr: "usbūʿin", en: "week" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا حَدَثَ في اللَّيْلَةِ العاصِفَةِ؟",
        q_en: "What happened on the stormy night?",
        options: [
          { ar: "اِنْقَطَعَتِ الكَهْرَباءُ", en: "The electricity cut off" },
          { ar: "اِنْكَسَرَتِ النّافِذَةُ", en: "The window broke" },
          { ar: "ضاعَ الهاتِفُ", en: "The phone got lost" }
        ],
        correct: 0,
        why: "اِنْقَطَعَتِ الكَهْرَباءُ — power cut. A word every South African needs 😄"
      },
      {
        q_ar: "ماذا أَشْعَلَتِ الأُمُّ؟",
        q_en: "What did the mother light?",
        options: [
          { ar: "النّارَ", en: "A fire" },
          { ar: "الشُّموعَ", en: "The candles" },
          { ar: "المِصْباحَ", en: "The flashlight" }
        ],
        correct: 1,
        why: "أَشْعَلَتِ الشُّموعَ — شُموع plural of شَمْعَة candle."
      },
      {
        q_ar: "ماذا فَعَلَ الأَبُ بِدونِ تِلْفازٍ؟",
        q_en: "What did the father do without TV?",
        options: [
          { ar: "نامَ مُبَكِّرًا", en: "Slept early" },
          { ar: "حَكى قِصَصًا مُضْحِكَةً عَنْ شَبابِهِ", en: "Told funny stories about his youth" },
          { ar: "قَرَأَ كِتابًا", en: "Read a book" }
        ],
        correct: 1,
        why: "بَدَأَ يَحْكي قِصَصًا مُضْحِكَةً — بَدَأَ + present = began doing."
      },
      {
        q_ar: "«ضَحِكوا حَتّى دَمَعَتْ عُيونُهُمْ» — ماذا تَعْني؟",
        q_en: "\"They laughed until their eyes watered\" — what does حَتّى mean?",
        options: [
          { ar: "حَتّى = until / to the point that", en: "Until / to the point that" },
          { ar: "حَتّى = لِأَنَّ", en: "Because" },
          { ar: "حَتّى = قَبْلَ", en: "Before" }
        ],
        correct: 0,
        why: "حَتّى = until: laughed UNTIL tears. A tiny word you'll meet everywhere."
      },
      {
        q_ar: "ماذا اِقْتَرَحَ عُمَرُ في النِّهايَةِ؟",
        q_en: "What did Omar suggest at the end?",
        options: [
          { ar: "شِراءَ تِلْفازٍ جَديدٍ", en: "Buying a new TV" },
          { ar: "أَنْ يُطْفِئوا النّورَ كُلَّ أُسْبوعٍ", en: "Turning off the lights every week" },
          { ar: "النَّوْمَ مُبَكِّرًا", en: "Sleeping early" }
        ],
        correct: 1,
        why: "فَلْنُطْفِئِ النّورَ — fa-l-nuṭfiʾ = 'so let's turn off!' — the let's-form فَلْـ + نَفْعَل."
      }
    ]
  },

  /* ═══════════ STORY 21 — The School Garden (Set 3) ═══════════ */
  {
    id: "school-garden",
    title_ar: "حَديقَةُ المَدْرَسَةِ",
    title_en: "The School Garden",
    level: "Beginner+ · A2",
    cover: "assets/img/school-garden/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/school-garden/s1.jpg",
        audio: "s1",
        ar: "زَرَعَتْ لَيْلى بُذورًا في حَديقَةِ المَدْرَسَةِ. سَقَتْها كُلَّ صَباحٍ، وَانْتَظَرَتْ بِصَبْرٍ.",
        tr: "zaraʿat laylā budhūran fī ḥadīqati l-madrasati. saqathā kulla ṣabāḥin, wa-ntaẓarat bi-ṣabrin.",
        en: "Layla planted seeds in the school garden. She watered them every morning, and waited with patience.",
        tense: "Past + بِصَبْرٍ (with patience)",
        words: [
          { ar: "زَرَعَتْ", tr: "zaraʿat", en: "planted (she)" },
          { ar: "لَيْلى", tr: "laylā", en: "Layla" },
          { ar: "بُذورًا", tr: "budhūran", en: "seeds" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "حَديقَةِ", tr: "ḥadīqati", en: "garden (of)" },
          { ar: "المَدْرَسَةِ", tr: "al-madrasati", en: "the school" },
          { ar: "سَقَتْها", tr: "saqathā", en: "watered them" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "صَباحٍ", tr: "ṣabāḥin", en: "morning" },
          { ar: "وَانْتَظَرَتْ", tr: "wa-ntaẓarat", en: "and waited" },
          { ar: "بِصَبْرٍ", tr: "bi-ṣabrin", en: "with patience" }
        ]
      },
      {
        img: "assets/img/school-garden/s2.jpg",
        audio: "s2",
        ar: "جاءَ الأَصْدِقاءُ لِيُساعِدوها. حَفَروا وَزَرَعوا وَسَقَوْا، وَصارَتِ الحَديقَةُ أَجْمَلَ مَكانٍ في المَدْرَسَةِ.",
        tr: "jāʾa l-aṣdiqāʾu li-yusāʿidūhā. ḥafarū wa-zaraʿū wa-saqaw, wa-ṣārati l-ḥadīqatu ajmala makānin fī l-madrasati.",
        en: "The friends came to help her. They dug and planted and watered, and the garden became the most beautiful place in the school.",
        tense: "لِـ + verb (in order to) + plural past ×3",
        words: [
          { ar: "جاءَ", tr: "jāʾa", en: "came" },
          { ar: "الأَصْدِقاءُ", tr: "al-aṣdiqāʾu", en: "the friends" },
          { ar: "لِيُساعِدوها", tr: "li-yusāʿidūhā", en: "to help her" },
          { ar: "حَفَروا", tr: "ḥafarū", en: "they dug" },
          { ar: "وَزَرَعوا", tr: "wa-zaraʿū", en: "and planted" },
          { ar: "وَسَقَوْا", tr: "wa-saqaw", en: "and watered" },
          { ar: "وَصارَتِ", tr: "wa-ṣārati", en: "and became" },
          { ar: "الحَديقَةُ", tr: "al-ḥadīqatu", en: "the garden" },
          { ar: "أَجْمَلَ", tr: "ajmala", en: "most beautiful" },
          { ar: "مَكانٍ", tr: "makānin", en: "place" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "المَدْرَسَةِ", tr: "al-madrasati", en: "the school" }
        ]
      },
      {
        img: "assets/img/school-garden/s3.jpg",
        audio: "s3",
        ar: "في الصَّيْفِ، أَكَلَ التَّلاميذُ طَماطِمَ وَخِيارًا مِنْ حَديقَتِهِمْ. قالَتِ المُعَلِّمَةُ: مَنْ يَزْرَعْ خَيْرًا، يَحْصُدْ خَيْرًا.",
        tr: "fī ṣ-ṣayfi, akala t-talāmīdhu ṭamāṭima wa-khiyāran min ḥadīqatihim. qālati l-muʿallimatu: man yazraʿ khayran, yaḥṣud khayran.",
        en: "In the summer, the students ate tomatoes and cucumber from their garden. The teacher said: Whoever plants good, harvests good.",
        tense: "Past + مَنْ يَفْعَلْ proverb",
        words: [
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّيْفِ", tr: "aṣ-ṣayfi", en: "the summer" },
          { ar: "أَكَلَ", tr: "akala", en: "ate" },
          { ar: "التَّلاميذُ", tr: "at-talāmīdhu", en: "the students" },
          { ar: "طَماطِمَ", tr: "ṭamāṭima", en: "tomatoes" },
          { ar: "وَخِيارًا", tr: "wa-khiyāran", en: "and cucumber" },
          { ar: "مِنْ", tr: "min", en: "from" },
          { ar: "حَديقَتِهِمْ", tr: "ḥadīqatihim", en: "their garden" },
          { ar: "قالَتِ", tr: "qālati", en: "said" },
          { ar: "المُعَلِّمَةُ", tr: "al-muʿallimatu", en: "the teacher" },
          { ar: "مَنْ", tr: "man", en: "whoever" },
          { ar: "يَزْرَعْ", tr: "yazraʿ", en: "plants" },
          { ar: "خَيْرًا", tr: "khayran", en: "good" },
          { ar: "يَحْصُدْ", tr: "yaḥṣud", en: "harvests" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا زَرَعَتْ لَيْلى؟",
        q_en: "What did Layla plant?",
        options: [
          { ar: "بُذورًا", en: "Seeds" },
          { ar: "شَجَرَةً", en: "A tree" },
          { ar: "وَرْدَةً", en: "A rose" }
        ],
        correct: 0,
        why: "زَرَعَتْ بُذورًا — بُذور seeds, plural of بَذْرَة."
      },
      {
        q_ar: "لِماذا جاءَ الأَصْدِقاءُ؟",
        q_en: "Why did the friends come?",
        options: [
          { ar: "لِيَلْعَبوا", en: "To play" },
          { ar: "لِيُساعِدوها", en: "To help her" },
          { ar: "لِيَأْكُلوا", en: "To eat" }
        ],
        correct: 1,
        why: "لِـ + verb = in order to: li-yusāʿidūhā = TO help her. Purpose in one letter!"
      },
      {
        q_ar: "ماذا أَكَلَ التَّلاميذُ في الصَّيْفِ؟",
        q_en: "What did the students eat in the summer?",
        options: [
          { ar: "طَماطِمَ وَخِيارًا", en: "Tomatoes and cucumber" },
          { ar: "تُفّاحًا وَمَوْزًا", en: "Apples and bananas" },
          { ar: "خُبْزًا وَجُبْنًا", en: "Bread and cheese" }
        ],
        correct: 0,
        why: "From the food drill straight into the story — from THEIR own garden!"
      },
      {
        q_ar: "«مَنْ يَزْرَعْ خَيْرًا يَحْصُدْ خَيْرًا» — ماذا يَعْني؟",
        q_en: "\"Whoever plants good, harvests good\" — what does it mean?",
        options: [
          { ar: "أَعْمالُكَ الطَّيِّبَةُ تَرْجِعُ إِلَيْكَ", en: "Your good deeds come back to you" },
          { ar: "الزِّراعَةُ صَعْبَةٌ", en: "Farming is hard" },
          { ar: "الخَيْرُ في الصَّيْفِ فَقَطْ", en: "Good comes only in summer" }
        ],
        correct: 0,
        why: "You reap what you sow — the app's 6th proverb! مَنْ يَفْعَلْ..يَفْعَلْ = whoever-does pattern."
      },
      {
        q_ar: "«التَّلاميذ» — ما مُفْرَدُها؟",
        q_en: "\"at-talāmīdh\" (students) — what is the singular?",
        options: [
          { ar: "تِلْميذ", en: "tilmīdh — one student" },
          { ar: "مُعَلِّم", en: "muʿallim — teacher" },
          { ar: "وَلَد", en: "walad — boy" }
        ],
        correct: 0,
        why: "تِلْميذ student → تَلاميذ students, another broken plural for your collection."
      }
    ]
  },

  /* ═══════════ STORY 22 — The Falcon of the Desert (Set 3) ═══════════ */
  {
    id: "desert-falcon",
    title_ar: "صَقْرُ الصَّحْراءِ",
    title_en: "The Falcon of the Desert",
    level: "Beginner+ · A2",
    cover: "assets/img/desert-falcon/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/desert-falcon/s1.jpg",
        audio: "s1",
        ar: "عاشَ في الصَّحْراءِ صَقْرٌ صَغيرٌ يَخافُ مِنَ الطَّيَرانِ العالي. كانَ يَنْظُرُ إِلى النُّسورِ فَوْقَ الجِبالِ وَيَتَمَنّى.",
        tr: "ʿāsha fī ṣ-ṣaḥrāʾi ṣaqrun ṣaghīrun yakhāfu mina ṭ-ṭayarāni l-ʿālī. kāna yanẓuru ilā n-nusūri fawqa l-jibāli wa-yatamannā.",
        en: "There lived in the desert a small falcon who was afraid of flying high. He would watch the eagles above the mountains and wish.",
        tense: "عاشَ (lived) + كانَ يَفْعَلُ",
        words: [
          { ar: "عاشَ", tr: "ʿāsha", en: "lived" },
          { ar: "في", tr: "fī", en: "in" },
          { ar: "الصَّحْراءِ", tr: "aṣ-ṣaḥrāʾi", en: "the desert" },
          { ar: "صَقْرٌ", tr: "ṣaqrun", en: "a falcon" },
          { ar: "صَغيرٌ", tr: "ṣaghīrun", en: "small" },
          { ar: "يَخافُ", tr: "yakhāfu", en: "fears" },
          { ar: "مِنَ", tr: "mina", en: "of" },
          { ar: "الطَّيَرانِ", tr: "aṭ-ṭayarāni", en: "flying" },
          { ar: "العالي", tr: "al-ʿālī", en: "the high" },
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "يَنْظُرُ", tr: "yanẓuru", en: "watching" },
          { ar: "إِلى", tr: "ilā", en: "at" },
          { ar: "النُّسورِ", tr: "an-nusūri", en: "the eagles" },
          { ar: "فَوْقَ", tr: "fawqa", en: "above" },
          { ar: "الجِبالِ", tr: "al-jibāli", en: "the mountains" },
          { ar: "وَيَتَمَنّى", tr: "wa-yatamannā", en: "and wishing" }
        ]
      },
      {
        img: "assets/img/desert-falcon/s2.jpg",
        audio: "s2",
        ar: "قالَ لَهُ أَبوهُ: الرّيحُ لا تَحْمِلُ مَنْ يَبْقى عَلى الأَرْضِ. اِفْتَحْ جَناحَيْكَ وَثِقْ بِهِما.",
        tr: "qāla lahu abūhu: ar-rīḥu lā taḥmilu man yabqā ʿalā l-arḍi. iftaḥ janāḥayka wa-thiq bihimā.",
        en: "His father said to him: The wind does not carry those who stay on the ground. Open your wings and trust them.",
        tense: "Wisdom + commands اِفْتَحْ / ثِقْ",
        words: [
          { ar: "قالَ", tr: "qāla", en: "said" },
          { ar: "لَهُ", tr: "lahu", en: "to him" },
          { ar: "أَبوهُ", tr: "abūhu", en: "his father" },
          { ar: "الرّيحُ", tr: "ar-rīḥu", en: "the wind" },
          { ar: "لا", tr: "lā", en: "not" },
          { ar: "تَحْمِلُ", tr: "taḥmilu", en: "carries" },
          { ar: "مَنْ", tr: "man", en: "who(ever)" },
          { ar: "يَبْقى", tr: "yabqā", en: "stays" },
          { ar: "عَلى", tr: "ʿalā", en: "on" },
          { ar: "الأَرْضِ", tr: "al-arḍi", en: "the ground" },
          { ar: "اِفْتَحْ", tr: "iftaḥ", en: "open!" },
          { ar: "جَناحَيْكَ", tr: "janāḥayka", en: "your two wings" },
          { ar: "وَثِقْ", tr: "wa-thiq", en: "and trust!" },
          { ar: "بِهِما", tr: "bihimā", en: "in them-two" }
        ]
      },
      {
        img: "assets/img/desert-falcon/s3.jpg",
        audio: "s3",
        ar: "في يَوْمٍ عاصِفٍ، قَفَزَ الصَّقْرُ الصَّغيرُ مِنَ الصَّخْرَةِ. حَمَلَتْهُ الرّيحُ عالِيًا فَوْقَ الرِّمالِ الذَّهَبِيَّةِ، وَصارَ أَسْرَعَ صَقْرٍ في الصَّحْراءِ.",
        tr: "fī yawmin ʿāṣifin, qafaza ṣ-ṣaqru ṣ-ṣaghīru mina ṣ-ṣakhrati. ḥamalathu r-rīḥu ʿāliyan fawqa r-rimāli dh-dhahabiyyati, wa-ṣāra asraʿa ṣaqrin fī ṣ-ṣaḥrāʾi.",
        en: "On a stormy day, the little falcon jumped from the rock. The wind carried him high above the golden sands, and he became the fastest falcon in the desert.",
        tense: "Past + superlative أَسْرَع",
        words: [
          { ar: "في", tr: "fī", en: "on" },
          { ar: "يَوْمٍ", tr: "yawmin", en: "a day" },
          { ar: "عاصِفٍ", tr: "ʿāṣifin", en: "stormy" },
          { ar: "قَفَزَ", tr: "qafaza", en: "jumped" },
          { ar: "الصَّقْرُ", tr: "aṣ-ṣaqru", en: "the falcon" },
          { ar: "الصَّغيرُ", tr: "aṣ-ṣaghīru", en: "the little" },
          { ar: "مِنَ", tr: "mina", en: "from" },
          { ar: "الصَّخْرَةِ", tr: "aṣ-ṣakhrati", en: "the rock" },
          { ar: "حَمَلَتْهُ", tr: "ḥamalathu", en: "carried him" },
          { ar: "الرّيحُ", tr: "ar-rīḥu", en: "the wind" },
          { ar: "عالِيًا", tr: "ʿāliyan", en: "high" },
          { ar: "فَوْقَ", tr: "fawqa", en: "above" },
          { ar: "الرِّمالِ", tr: "ar-rimāli", en: "the sands" },
          { ar: "الذَّهَبِيَّةِ", tr: "adh-dhahabiyyati", en: "the golden" },
          { ar: "وَصارَ", tr: "wa-ṣāra", en: "and became" },
          { ar: "أَسْرَعَ", tr: "asraʿa", en: "fastest" },
          { ar: "صَقْرٍ", tr: "ṣaqrin", en: "falcon" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "مِمَّ كانَ يَخافُ الصَّقْرُ الصَّغيرُ؟",
        q_en: "What was the little falcon afraid of?",
        options: [
          { ar: "مِنَ الطَّيَرانِ العالي", en: "Of flying high" },
          { ar: "مِنَ الماءِ", en: "Of water" },
          { ar: "مِنَ النُّسورِ", en: "Of the eagles" }
        ],
        correct: 0,
        why: "يَخافُ مِنَ الطَّيَرانِ العالي — خافَ مِنْ = to be afraid OF."
      },
      {
        q_ar: "ماذا قالَ الأَبُ عَنِ الرّيحِ؟",
        q_en: "What did the father say about the wind?",
        options: [
          { ar: "الرّيحُ خَطيرَةٌ", en: "The wind is dangerous" },
          { ar: "لا تَحْمِلُ مَنْ يَبْقى عَلى الأَرْضِ", en: "It doesn't carry those who stay on the ground" },
          { ar: "الرّيحُ بارِدَةٌ", en: "The wind is cold" }
        ],
        correct: 1,
        why: "The story's wisdom line — you can't soar without leaving the ground."
      },
      {
        q_ar: "«ثِقْ بِهِما» — ماذا تَعْني؟",
        q_en: "\"thiq bihimā\" — what does it mean?",
        options: [
          { ar: "اِخَفْ مِنْهُما", en: "Fear them" },
          { ar: "ثِقْ بِجَناحَيْكَ — trust your two wings", en: "Trust your two wings" },
          { ar: "اِنْظُرْ إِلَيْهِما", en: "Look at them" }
        ],
        correct: 1,
        why: "ثِقْ = trust! (command of وَثِقَ — another و-verb!). بِهِما = in them-two."
      },
      {
        q_ar: "ماذا صارَ الصَّقْرُ في النِّهايَةِ؟",
        q_en: "What did the falcon become in the end?",
        options: [
          { ar: "أَسْرَعَ صَقْرٍ في الصَّحْراءِ", en: "The fastest falcon in the desert" },
          { ar: "أَكْبَرَ نَسْرٍ", en: "The biggest eagle" },
          { ar: "طائِرًا خائِفًا", en: "A scared bird" }
        ],
        correct: 0,
        why: "صارَ أَسْرَعَ صَقْرٍ — the superlative أَسْرَع from your transport drill!"
      }
    ]
  },

  /* ═══════════ STORY 23 — The Fisherman's Lantern (Set 3) ═══════════ */
  {
    id: "fisherman-lantern",
    title_ar: "فانوسُ الصَّيّادِ",
    title_en: "The Fisherman's Lantern",
    level: "Beginner+ · A2",
    cover: "assets/img/fisherman-lantern/cover.jpg",
    minutes: 3,
    pages: [
      {
        img: "assets/img/fisherman-lantern/s1.jpg",
        audio: "s1",
        ar: "كانَ صَيّادٌ عَجوزٌ يَخْرُجُ كُلَّ لَيْلَةٍ بِقارِبِهِ وَفانوسِهِ القَديمِ. قالَ النّاسُ: البَحْرُ فارِغٌ هُنا، لا سَمَكَ فيهِ.",
        tr: "kāna ṣayyādun ʿajūzun yakhruju kulla laylatin bi-qāribihi wa-fānūsihi l-qadīmi. qāla n-nāsu: al-baḥru fārighun hunā, lā samaka fīhi.",
        en: "An old fisherman used to go out every night with his boat and his old lantern. People said: The sea is empty here, there are no fish in it.",
        tense: "كانَ يَفْعَلُ + لا of absolute negation",
        words: [
          { ar: "كانَ", tr: "kāna", en: "was" },
          { ar: "صَيّادٌ", tr: "ṣayyādun", en: "a fisherman" },
          { ar: "عَجوزٌ", tr: "ʿajūzun", en: "old" },
          { ar: "يَخْرُجُ", tr: "yakhruju", en: "goes out" },
          { ar: "كُلَّ", tr: "kulla", en: "every" },
          { ar: "لَيْلَةٍ", tr: "laylatin", en: "night" },
          { ar: "بِقارِبِهِ", tr: "bi-qāribihi", en: "with his boat" },
          { ar: "وَفانوسِهِ", tr: "wa-fānūsihi", en: "and his lantern" },
          { ar: "القَديمِ", tr: "al-qadīmi", en: "the old" },
          { ar: "قالَ", tr: "qāla", en: "said" },
          { ar: "النّاسُ", tr: "an-nāsu", en: "the people" },
          { ar: "البَحْرُ", tr: "al-baḥru", en: "the sea" },
          { ar: "فارِغٌ", tr: "fārighun", en: "empty" },
          { ar: "هُنا", tr: "hunā", en: "here" },
          { ar: "لا", tr: "lā", en: "no" },
          { ar: "سَمَكَ", tr: "samaka", en: "fish" },
          { ar: "فيهِ", tr: "fīhi", en: "in it" }
        ]
      },
      {
        img: "assets/img/fisherman-lantern/s2.jpg",
        audio: "s2",
        ar: "لٰكِنَّ الصَّيّادَ عَرَفَ سِرًّا: السَّمَكُ يُحِبُّ الضَّوْءَ. رَفَعَ فانوسَهُ فَوْقَ الماءِ وَانْتَظَرَ بِهُدوءٍ.",
        tr: "lākinna ṣ-ṣayyāda ʿarafa sirran: as-samaku yuḥibbu ḍ-ḍawʾa. rafaʿa fānūsahu fawqa l-māʾi wa-ntaẓara bi-hudūʾin.",
        en: "But the fisherman knew a secret: fish love the light. He raised his lantern over the water and waited quietly.",
        tense: "عَرَفَ (knew) + habit present",
        words: [
          { ar: "لٰكِنَّ", tr: "lākinna", en: "but" },
          { ar: "الصَّيّادَ", tr: "aṣ-ṣayyāda", en: "the fisherman" },
          { ar: "عَرَفَ", tr: "ʿarafa", en: "knew" },
          { ar: "سِرًّا", tr: "sirran", en: "a secret" },
          { ar: "السَّمَكُ", tr: "as-samaku", en: "the fish" },
          { ar: "يُحِبُّ", tr: "yuḥibbu", en: "loves" },
          { ar: "الضَّوْءَ", tr: "aḍ-ḍawʾa", en: "the light" },
          { ar: "رَفَعَ", tr: "rafaʿa", en: "raised" },
          { ar: "فانوسَهُ", tr: "fānūsahu", en: "his lantern" },
          { ar: "فَوْقَ", tr: "fawqa", en: "over" },
          { ar: "الماءِ", tr: "al-māʾi", en: "the water" },
          { ar: "وَانْتَظَرَ", tr: "wa-ntaẓara", en: "and waited" },
          { ar: "بِهُدوءٍ", tr: "bi-hudūʾin", en: "quietly" }
        ]
      },
      {
        img: "assets/img/fisherman-lantern/s3.jpg",
        audio: "s3",
        ar: "قَبْلَ الفَجْرِ، عادَ إِلى المَيْناءِ وَقارِبُهُ مَليءٌ بِالسَّمَكِ. اِبْتَسَمَ وَقالَ: الصَّبْرُ مِفْتاحُ الرِّزْقِ.",
        tr: "qabla l-fajri, ʿāda ilā l-mīnāʾi wa-qāribuhu malīʾun bi-s-samaki. ibtasama wa-qāla: aṣ-ṣabru miftāḥu r-rizqi.",
        en: "Before dawn, he returned to the harbor with his boat full of fish. He smiled and said: Patience is the key to provision.",
        tense: "Past + حال + proverb",
        words: [
          { ar: "قَبْلَ", tr: "qabla", en: "before" },
          { ar: "الفَجْرِ", tr: "al-fajri", en: "the dawn" },
          { ar: "عادَ", tr: "ʿāda", en: "returned" },
          { ar: "إِلى", tr: "ilā", en: "to" },
          { ar: "المَيْناءِ", tr: "al-mīnāʾi", en: "the harbor" },
          { ar: "وَقارِبُهُ", tr: "wa-qāribuhu", en: "while his boat" },
          { ar: "مَليءٌ", tr: "malīʾun", en: "full" },
          { ar: "بِالسَّمَكِ", tr: "bi-s-samaki", en: "of fish" },
          { ar: "اِبْتَسَمَ", tr: "ibtasama", en: "smiled" },
          { ar: "وَقالَ", tr: "wa-qāla", en: "and said" },
          { ar: "الصَّبْرُ", tr: "aṣ-ṣabru", en: "patience" },
          { ar: "مِفْتاحُ", tr: "miftāḥu", en: "key (of)" },
          { ar: "الرِّزْقِ", tr: "ar-rizqi", en: "provision/livelihood" }
        ]
      }
    ],
    quiz: [
      {
        q_ar: "ماذا قالَ النّاسُ عَنِ البَحْرِ؟",
        q_en: "What did people say about the sea?",
        options: [
          { ar: "إِنَّهُ فارِغٌ، لا سَمَكَ فيهِ", en: "That it's empty, no fish in it" },
          { ar: "إِنَّهُ خَطيرٌ", en: "That it's dangerous" },
          { ar: "إِنَّهُ بارِدٌ", en: "That it's cold" }
        ],
        correct: 0,
        why: "لا سَمَكَ فيهِ — the 'no X at all' construction (لا النافية للجنس)!"
      },
      {
        q_ar: "ما السِّرُّ الَّذي عَرَفَهُ الصَّيّادُ؟",
        q_en: "What secret did the fisherman know?",
        options: [
          { ar: "السَّمَكُ يُحِبُّ الضَّوْءَ", en: "Fish love the light" },
          { ar: "السَّمَكُ يَنامُ لَيْلًا", en: "Fish sleep at night" },
          { ar: "السَّمَكُ يَخافُ مِنَ القارِبِ", en: "Fish fear the boat" }
        ],
        correct: 0,
        why: "عَرَفَ سِرًّا: السَّمَكُ يُحِبُّ الضَّوْءَ — and it's true, night fishing with lanterns is ancient!"
      },
      {
        q_ar: "مَتى عادَ إِلى المَيْناءِ؟",
        q_en: "When did he return to the harbor?",
        options: [
          { ar: "عِنْدَ الظُّهْرِ", en: "At noon" },
          { ar: "قَبْلَ الفَجْرِ", en: "Before dawn" },
          { ar: "بَعْدَ الغُروبِ", en: "After sunset" }
        ],
        correct: 1,
        why: "قَبْلَ الفَجْرِ — الفَجْر dawn, a new time-of-day word!"
      },
      {
        q_ar: "«الصَّبْرُ مِفْتاحُ الرِّزْقِ» — ماذا يَعْني هٰذا المَثَلُ؟",
        q_en: "\"Patience is the key to provision\" — what does it mean?",
        options: [
          { ar: "مَنْ يَصْبِرْ يَنَلْ ما يُريدُ", en: "Who is patient gets what they seek" },
          { ar: "المَفاتيحُ مُهِمَّةٌ", en: "Keys are important" },
          { ar: "الصَّيْدُ سَهْلٌ", en: "Fishing is easy" }
        ],
        correct: 0,
        why: "Proverb #7! Variant of the famous الصَّبْرُ مِفْتاحُ الفَرَجِ — patience unlocks relief."
      },
      {
        q_ar: "«وَقارِبُهُ مَليءٌ بِالسَّمَكِ» — ماذا تُفيدُ الواوُ هُنا؟",
        q_en: "\"wa-qāribuhu malīʾun...\" — what does the wa- express here?",
        options: [
          { ar: "الحال — WHILE his boat was full", en: "State: WHILE his boat was full" },
          { ar: "العطف فقط — just 'and'", en: "Just 'and'" },
          { ar: "السؤال", en: "A question" }
        ],
        correct: 0,
        why: "The حال-wāw again: he returned WHILE his boat was full — same pattern as وَهِيَ تَضْحَكُ!"
      }
    ]
  }
];
