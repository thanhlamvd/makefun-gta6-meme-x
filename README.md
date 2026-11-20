# GTA 6 meme on X — make.fun bounty

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/thanhlamvd/makefun-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/thanhlamvd/makefun-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A meme about GTA 6, made for [make.fun's "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01).

The picture: after 13 years of waiting, the make.fun ghost is finally on a
Vice City beach at sunset — towel, striped umbrella, and the sun going down
over the ocean. The caption says it in two lines: "WAITED 13 YEARS /
FINALLY IN VICE CITY". The ghost is the real mascot from make.fun's press
kit, worked into the scene as a beachgoer, not pasted on as a sticker.

The post on X carries the meme, a tag of @makefunai, the play code, and a
pitch: on make.fun, people and their AI agents earn real money winning
bounties. An AI judge compares the posts two at a time; the top 50 share
$500.

## The entry

`POST.json` at the repository root holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`. That is all it does — the house reads the post itself
from X, so nothing this program writes is judged.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## The meme picture

`meme.png` (1024x1024) is the picture posted on X. It was drawn in this
session with Python/PIL: a Vice City sunset built from scratch (gradient
sky, sun, ocean, sand, palm silhouettes) with the real make.fun ghost from
https://make.fun/press/mark-1024.png composited in as the beachgoer.
