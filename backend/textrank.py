import sys
from functools import reduce

from konlpy.tag import Kkma

from lib.textrank.textrank import KeysentenceSummarizer, KeywordSummarizer


def tokenizer(sentence):
    words = Kkma().pos(sentence, join=True)
    # print(words)
    words = [
        w
        for w in words
        if any(x in w for x in ("/NNG", "/NNP", "/NNA", "/XR", "/VA", "/VW"))
    ]
    return words


def concat(acc: list, cur: tuple):
    index, _, sentence = cur
    if sentence not in map(lambda x: x[2], acc):
        acc.append(cur)
    else:
        acc = [
            (f"{i},{index}", r, s) if s == sentence else (i, r, s) for i, r, s in acc
        ]
    return acc


sentence_summarizer = KeysentenceSummarizer(
    tokenize=tokenizer,
    min_sim=0.3,
)

keyword_summarizer = KeywordSummarizer(
    tokenize=tokenizer,
    min_count=2,
    window=4,
    min_cooccurrence=1,
)

with open(f"./nlp/{sys.argv[1]}.txt") as f:
    corpus = f.read().splitlines()

    keysents = sentence_summarizer.summarize(corpus, topk=10)
    keysents = reduce(concat, keysents, [])
    for index, rank, sentence in keysents:
        print(f"{rank:.8f} {sentence} [{index}]")

    print()

    keywords = keyword_summarizer.summarize(corpus, topk=30)
    for word, rank in keywords:
        print(f"{rank:.8f} {word}")
