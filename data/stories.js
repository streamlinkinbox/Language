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
  }
];
