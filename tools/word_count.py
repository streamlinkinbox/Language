#!/usr/bin/env python3
"""Hikaya canonical unique-base-word counter (lemma approximation).

Counts unique lemmas over all Arabic SENTENCE fields (ar: "..." with spaces)
in data/stories.js, data/dialogues.js, data/grammar.js.

Normalization: strip tashkeel, alef-wasla -> alef, wa-/fa- prefix, al-,
sa- future prefix, pronoun suffixes, verb/plural endings, present-tense
verb prefixes (y/t/n/a).

Calibration: gave 921 at commit 7fc3df5~1 (reported ~923 pre-drills-31/32).

Usage:
  python3 tools/word_count.py            # count
  python3 tools/word_count.py --new FILE # lemmas in FILE not yet in corpus
"""
import re, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES = ["data/stories.js", "data/dialogues.js", "data/grammar.js"]
TASH = re.compile(r"[\u064B-\u0652\u0670\u0640]")
ARTOK = re.compile(r"[\u0621-\u064A\u0671-\u06D3\u064B-\u0652\u0670]+")

def lemma(w):
    w = TASH.sub("", w).replace("\u0671", "\u0627")
    if len(w) > 3 and w[0] in "وف":
        w = w[1:]
    if w.startswith("ال") and len(w) > 4:
        w = w[2:]
    if len(w) > 3 and w.startswith("س") and w[1] in "يتنأ":
        w = w[1:]
    for suf in ("هما", "كما", "ها", "هم", "هن", "كم", "نا", "ه", "ك", "ي"):
        if w.endswith(suf) and len(w) - len(suf) >= 2:
            w = w[: -len(suf)]
            break
    for suf in ("ون", "ين", "ات", "ان", "وا", "ت", "ن", "ا"):
        if w.endswith(suf) and len(w) - len(suf) >= 2:
            w = w[: -len(suf)]
            break
    if len(w) >= 4 and w[0] in "يتنأ":
        w = w[1:]
    return w

def sentence_tokens(src):
    toks = []
    for val in re.findall(r"\bar\s*:\s*\"([^\"]*)\"", src):
        if " " in val.strip():
            toks += ARTOK.findall(val)
    return toks

def corpus_lemmas():
    s = set()
    for f in FILES:
        src = open(os.path.join(ROOT, f), encoding="utf-8").read()
        for t in sentence_tokens(src):
            if len(TASH.sub("", t)) >= 2:
                s.add(lemma(t))
    return s

if __name__ == "__main__":
    lem = corpus_lemmas()
    if len(sys.argv) > 2 and sys.argv[1] == "--new":
        text = open(sys.argv[2], encoding="utf-8").read()
        cand = {lemma(t) for t in ARTOK.findall(text) if len(TASH.sub("", t)) >= 2}
        fresh = sorted(cand - lem)
        print(f"corpus: {len(lem)} | candidate file adds {len(fresh)} new lemmas:")
        print(" ".join(fresh))
    else:
        print(f"{len(lem)} unique base words (lemma approximation)")
