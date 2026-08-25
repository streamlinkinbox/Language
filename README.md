# حِكاية · Hikaya — Arabic Stories

Learn Arabic through simple illustrated stories (grade-3 level sentences for adult learners) with:

- 📖 One sentence + one illustration per page
- 🔊 Native-quality narration with **adjustable speed (0.5×–1×)**, two narrator voices
- 👆 Tap any word → meaning + transliteration + **hear the word alone**
- ❓ Comprehension & grammar quizzes after each story (English helper text can be hidden)
- 🌑 OLED-black night theme, sepia & light themes, 3 Arabic fonts, adjustable text size
- 📱 Works as a website, an installable PWA, and a native **Android APK**

## Read it now (web / PWA)

Enable **GitHub Pages** (Settings → Pages → deploy from branch → `/ (root)`) and open
`https://<user>.github.io/Language/` — on Android: Chrome → ⋮ → *Add to Home screen*.

## Android APK

Every push automatically builds a signed APK via GitHub Actions:

1. Go to the repo's **Releases** page
2. Download **`hikaya.apk`** from the "Hikaya APK (latest)" release
3. Open it on your phone (allow *install unknown apps* if prompted)

The APK bundles all stories, images and audio — fully offline.

## Stories

| # | Title | Focus |
|---|-------|-------|
| 1 | الكَلْبُ وَالقِطَّةُ · The Dog and the Cat | past, past-continuous, present |
| 2 | سامي في السُّوقِ · Sami at the Market | commands, ثُمَّ, لٰكِنَّ, future سَـ |
| 3 | يَوْمٌ مُمْطِرٌ · A Rainy Day | negation لا, feminine commands, dual, هَيّا |

## Dev

Static app — any web server works:

```bash
python3 serve.py   # serves on :8080 with no-cache headers
```

`tools/split_words.py` cuts per-word audio clips out of the spaced word tracks
(`assets/audio/<story>/wsrc/`) using ffmpeg silence detection.
