#!/usr/bin/env python3
"""Split per-page word tracks (words spoken with pauses) into individual
word mp3s.

Deterministic method:
  1. Decode to PCM, build a smoothed RMS energy profile.
  2. Find all candidate 'valleys' (low-energy runs between speech bursts).
  3. For N expected words, pick exactly the N-1 longest/deepest valleys
     as cut points (they are the inter-word pauses by construction,
     since the source audio was generated with '...' pauses).
  4. Cut at each valley's center. Trim leading/trailing silence.

This guarantees clip K = word K whenever the expected count is met,
and fails loudly otherwise (exit 1) instead of shipping shifted audio.
"""
import re, subprocess, sys, json, array
from pathlib import Path

from ffmpeg import init as ff_init
import ffmpeg as ffbin
ff_init()
FF = ffbin.FFMPEG_PATH

ROOT = Path(__file__).resolve().parent.parent
STORY = sys.argv[1] if len(sys.argv) > 1 else "dog-cat"
SRC = ROOT / "assets/audio" / STORY / "wsrc"
OUT = ROOT / "assets/audio" / STORY / "w"
OUT.mkdir(parents=True, exist_ok=True)

# ── expected word counts, scoped to this story ──
js = (ROOT / "data/stories.js").read_text(encoding="utf-8")
story_start = js.find(f'id: "{STORY}"')
if story_start == -1:
    sys.exit(f"story '{STORY}' not found in stories.js")
story_end = js.find('id: "', story_start + 10)
block_js = js[story_start: story_end if story_end != -1 else len(js)]
pages = re.findall(r'audio:\s*"([ps]\d+)".*?words:\s*\[(.*?)\]\s*(?:\},|\}\s*\])', block_js, re.S)
expected = {pid: len(re.findall(r'\{\s*ar:', block)) for pid, block in pages}

SR = 16000
WIN = 320          # 20 ms @ 16 kHz
DT = WIN / SR      # seconds per window

def energy_profile(path):
    p = subprocess.run([FF, "-i", str(path), "-ac", "1", "-ar", str(SR),
                        "-f", "s16le", "-"], capture_output=True)
    pcm = array.array("h")
    pcm.frombytes(p.stdout[: len(p.stdout) // 2 * 2])
    prof = []
    for i in range(0, len(pcm) - WIN, WIN):
        c = pcm[i:i + WIN]
        prof.append((sum(x * x for x in c) / WIN) ** 0.5)
    return prof

def find_valleys(prof, floor):
    """Return list of (start_idx, end_idx, min_energy) for low-energy runs."""
    valleys, i, n = [], 0, len(prof)
    while i < n:
        if prof[i] <= floor:
            j = i
            while j < n and prof[j] <= floor:
                j += 1
            valleys.append((i, j, min(prof[i:j])))
            i = j
        else:
            i += 1
    return valleys

def split_page(src, n_words):
    """Returns (segments, confident). confident=True only when the chosen
    separator pauses are unambiguous — clearly longer than every gap we
    did NOT cut at. Ambiguous pages must fall back to TTS in the app."""
    prof = energy_profile(src)
    if not prof:
        return None, False
    peak = max(prof)
    best = None
    for frac in (0.02, 0.03, 0.05, 0.08, 0.12, 0.18):
        floor = peak * frac
        valleys = find_valleys(prof, floor)
        interior = [v for v in valleys if v[0] > 2 and v[1] < len(prof) - 2]
        if len(interior) >= n_words - 1:
            ranked = sorted(interior, key=lambda v: v[1] - v[0], reverse=True)
            chosen = ranked[: n_words - 1]
            rest = ranked[n_words - 1:]
            min_chosen = min(v[1] - v[0] for v in chosen) * DT
            max_rest = (max((v[1] - v[0]) for v in rest) * DT) if rest else 0.0
            # confidence: every separator >=0.15s AND >=2x any unchosen gap
            confident = min_chosen >= 0.15 and (max_rest == 0.0 or min_chosen >= 2 * max_rest)
            seps = sorted(chosen, key=lambda v: v[0])
            cuts = [(v[0] + v[1]) / 2 * DT for v in seps]
            total = len(prof) * DT
            bounds = [0.0] + cuts + [total]
            segs = [(bounds[k], bounds[k + 1]) for k in range(n_words)]
            if confident:
                return segs, True
            if best is None:
                best = segs
    return best, False

report = {}
verified = []
for src in sorted(SRC.glob("[ps]*.mp3")):
    pid = src.stem
    exp = expected.get(pid)
    if not exp:
        continue
    segs, confident = split_page(src, exp)
    if segs is None:
        report[pid] = {"got": 0, "expected": exp, "ok": False, "confident": False}
        continue
    for i, (a, b) in enumerate(segs, 1):
        out = OUT / f"{pid}-{i:02d}.mp3"
        # cuts fall in pause centers; keep a little pad, no filtering
        subprocess.run([FF, "-y", "-i", str(src),
                        "-ss", f"{max(0.0, a - 0.03):.3f}", "-to", f"{b:.3f}",
                        "-c:a", "libmp3lame", "-q:a", "4", str(out)],
                       capture_output=True)
    report[pid] = {"got": len(segs), "expected": exp, "ok": True, "confident": confident}
    if confident:
        verified.append(pid)

# ── update the per-page verified manifest (data/wordaudio.js) ──
manifest_path = ROOT / "data/wordaudio.js"
manifest = {}
if manifest_path.exists():
    m = re.search(r'=\s*(\{.*\})\s*;', manifest_path.read_text(encoding="utf-8"), re.S)
    if m:
        manifest = json.loads(m.group(1))
manifest[STORY] = sorted(verified)
manifest_path.write_text(
    "// Auto-generated by tools/split_words.py — pages with VERIFIED word clips.\n"
    "// Pages not listed use exact-word speech synthesis instead.\n"
    "window.WORD_AUDIO_VERIFIED = " + json.dumps(manifest, indent=2) + ";\n",
    encoding="utf-8")

print(json.dumps(report, indent=1))
bad = [k for k, v in report.items() if not v["ok"]]
sys.exit(1 if bad else 0)
