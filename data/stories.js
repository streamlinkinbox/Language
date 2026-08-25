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
  }
];
