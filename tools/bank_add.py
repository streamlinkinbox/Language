#!/usr/bin/env python3
"""Register new word-bank clips: normalize loudness, add to data/wordbank.js,
print coverage. Usage:
  python3 tools/bank_add.py b029=يا b030=السُّوقِ ...
Words are given in voweled form; keys are stored with tashkeel stripped.
"""
import sys, re, json, subprocess, glob, os, shutil
from pathlib import Path

from ffmpeg import init as ff_init
import ffmpeg as ffbin
ff_init()
FF = ffbin.FFMPEG_PATH

ROOT = Path(__file__).resolve().parent.parent
BANK_JS = ROOT / "data/wordbank.js"
strip = lambda s: re.sub(r'[\u064B-\u0652\u0670\u0640]', '', s)

def normalize(f):
    p = subprocess.run([FF, '-i', str(f), '-af', 'volumedetect', '-f', 'null', '-'],
                       capture_output=True, text=True)
    m = re.search(r'mean_volume: ([-\d.]+) dB', p.stderr)
    x = re.search(r'max_volume: ([-\d.]+) dB', p.stderr)
    if not m:
        return
    mean, mx = float(m.group(1)), float(x.group(1))
    gain = min(-16.0 - mean, -1.0 - mx)
    if abs(gain) < 1.5:
        return
    tmp = str(f) + '.tmp.mp3'
    subprocess.run([FF, '-y', '-i', str(f), '-af', f'volume={gain:.1f}dB',
                    '-c:a', 'libmp3lame', '-q:a', '4', tmp], capture_output=True)
    if os.path.getsize(tmp) > 500:
        shutil.move(tmp, str(f))
    else:
        os.remove(tmp)

def main():
    m = re.search(r'=\s*(\{.*\})\s*;', BANK_JS.read_text(encoding='utf-8'), re.S)
    bank = json.loads(m.group(1)) if m else {}
    for arg in sys.argv[1:]:
        clip, word = arg.split('=', 1)
        f = ROOT / f"assets/audio/bank/{clip}.mp3"
        if not f.exists():
            print(f"!! missing {f}")
            continue
        normalize(f)
        bank[strip(word)] = clip
    BANK_JS.write_text(
        "// Auto-built bank of VERIFIED single-word clips (narrator voice).\n"
        "// Key = Arabic word with diacritics stripped.\n"
        "window.WORD_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n",
        encoding='utf-8')

    # coverage report
    src = (ROOT / "data/stories.js").read_text(encoding='utf-8')
    words = re.findall(r'\{ ar: "([^"]+)", tr:', src)
    total = hit = 0
    missing = {}
    for w in words:
        b = strip(w); total += 1
        if b in bank or (b[:1] in 'وف' and b[1:] in bank):
            hit += 1
        else:
            missing[b] = missing.get(b, 0) + 1
    print(f"bank: {len(bank)} words | coverage: {hit}/{total} = {hit/total*100:.0f}%")
    nxt = sorted(missing.items(), key=lambda kv: -kv[1])[:12]
    print("next batch:", json.dumps([k for k, _ in nxt], ensure_ascii=False))

if __name__ == "__main__":
    main()
