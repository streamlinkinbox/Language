#!/usr/bin/env python3
"""Split per-page word tracks (words spoken with pauses) into individual
word mp3s using ffmpeg silencedetect. Output: assets/audio/<story>/w/pNN-MM.mp3"""
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

# expected word counts per page, parsed from data/stories.js
# scope to THIS story's block only (page ids repeat across stories!)
js = (ROOT / "data/stories.js").read_text(encoding="utf-8")
story_start = js.find(f'id: "{STORY}"')
if story_start == -1:
    sys.exit(f"story '{STORY}' not found in stories.js")
story_end = js.find('id: "', story_start + 10)
block_js = js[story_start: story_end if story_end != -1 else len(js)]
pages = re.findall(r'audio:\s*"([ps]\d+)".*?words:\s*\[(.*?)\]\s*(?:\},|\}\s*\])', block_js, re.S)
expected = {pid: len(re.findall(r'\{\s*ar:', block)) for pid, block in pages}

def silences(path, noise=-35, d=0.28):
    p = subprocess.run(
        [FF, "-i", str(path), "-af", f"silencedetect=noise={noise}dB:d={d}", "-f", "null", "-"],
        capture_output=True, text=True)
    log = p.stderr
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
    dur = re.search(r"Duration: (\d+):(\d+):([\d.]+)", log)
    h, m, s = dur.groups()
    total = int(h) * 3600 + int(m) * 60 + float(s)
    return starts, ends, total

PARAMS = [(-35, 0.28), (-35, 0.2), (-30, 0.2), (-30, 0.15), (-27, 0.12),
          (-25, 0.1), (-22, 0.09), (-20, 0.08), (-18, 0.07)]

def segments(src, noise, d):
    starts, ends, total = silences(src, noise, d)
    cuts = [0.0]
    for s, e in zip(starts, ends):
        cuts.append((s + e) / 2)  # cut midway through each silence
    cuts.append(total)
    segs = [(cuts[i], cuts[i + 1]) for i in range(len(cuts) - 1)]
    return [(a, b) for a, b in segs if b - a > 0.12]

def rms_profile(src):
    """Decode to mono 8kHz s16 and return per-20ms-window RMS list."""
    p = subprocess.run([FF, "-i", str(src), "-ac", "1", "-ar", "8000",
                        "-f", "s16le", "-"], capture_output=True)
    pcm = array.array("h")
    pcm.frombytes(p.stdout[: len(p.stdout) // 2 * 2])
    win = 160  # 20ms @ 8kHz
    prof = []
    for i in range(0, len(pcm) - win, win):
        chunk = pcm[i:i + win]
        prof.append((sum(x * x for x in chunk) / win) ** 0.5)
    return prof, 0.02  # seconds per window

def force_split(seg, prof, dt):
    """Split segment at its quietest interior window."""
    a, b = seg
    i0, i1 = int(a / dt), int(b / dt)
    span = i1 - i0
    lo = i0 + max(2, span // 5)
    hi = i1 - max(2, span // 5)
    if hi <= lo:
        return None
    qi = min(range(lo, hi), key=lambda i: prof[i])
    t = qi * dt
    return [(a, t), (t, b)]

report = {}
for src in sorted(SRC.glob("p*.mp3")):
    pid = src.stem
    exp = expected.get(pid)
    segs, used = [], None
    for noise, d in PARAMS:
        cand = segments(src, noise, d)
        if exp is not None and len(cand) == exp:
            segs, used = cand, (noise, d)
            break
        if not segs or (exp and abs(len(cand) - exp) < abs(len(segs) - exp)):
            segs, used = cand, (noise, d)
    # if still short of expected count, force-split longest segments
    if exp and len(segs) < exp:
        prof, dt = rms_profile(src)
        while len(segs) < exp:
            longest = max(range(len(segs)), key=lambda i: segs[i][1] - segs[i][0])
            parts = force_split(segs[longest], prof, dt)
            if not parts:
                break
            segs[longest:longest + 1] = parts
    for i, (a, b) in enumerate(segs, 1):
        out = OUT / f"{pid}-{i:02d}.mp3"
        pad_a = max(0.0, a - 0.05)
        subprocess.run([FF, "-y", "-i", str(src), "-ss", f"{pad_a:.3f}", "-to", f"{b:.3f}",
                        "-c:a", "libmp3lame", "-q:a", "4", str(out)],
                       capture_output=True)
    report[pid] = {"got": len(segs), "expected": exp, "ok": exp == len(segs)}

print(json.dumps(report, indent=1))
bad = [k for k, v in report.items() if not v["ok"]]
sys.exit(1 if bad else 0)
