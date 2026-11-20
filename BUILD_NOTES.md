# BUILD NOTES — gta6-meme-x-01

Entry: one GTA 6 meme posted on X from Truong's public account; the post
itself is judged pairwise by an AI judge, top 50 share $500.
Repo folder: `~/workspace/makefun-gta6-meme-x/` (local only; push via
Truong's Chrome to `github.com/thanhlamvd/makefun-gta6-meme-x`).
Built 2026-11-20 by a Muse subagent (builder session, started after the
bounty opened 2026-11-19T14:00:00Z).

## The joke

"WAITED 13 YEARS / FINALLY IN VICE CITY" — the make.fun ghost, after a
13-year wait, is finally on a Vice City beach at sunset: towel, striped
umbrella, sun going down over the ocean. The joke is the wait itself, the
one thing every GTA fan felt on launch week. Original, not a copied meme.

## Files

- `meme.png` — the meme picture (1024x1024, 105,210 bytes). Drawn in this
  session with Python/PIL (`~/workspace/makefun-meme-x/build_meme.py`,
  kept outside the repo): a Vice City sunset built from scratch — gradient
  sky, glowing sun, ocean with sun streaks, sand, two palm silhouettes —
  with the REAL make.fun ghost from https://make.fun/press/mark-1024.png
  composited in as the beachgoer under the umbrella. Verified readable at
  480x480 (caption and ghost both clear). The ghost's magenta disc is part
  of the official mark.
- `main.ts` — the entry (Node 22, stdlib only): copies POST.json to
  /output. Written fresh in this session (own lines, own comments).
- `POST.json` — placeholder `{"url":"https://x.com/placeholder/status/0"}`
  for now. MUST be replaced with the real post URL after posting on X,
  before submitting (the placeholder is refused by the gate).
- `README.md` — with the three make.fun badges (owner `thanhlamvd`, repo
  `makefun-gta6-meme-x`, referral `814bp22d`).
- `LICENSE` — MIT, copyright thanhlamvd.
- `.makefun/owner.json` — exactly
  `{"wallet":"BedBMrz1mtuDyj3D8YGBM26xck8tF3puoeL3KVmSaGEy"}`.
- `.gitignore` — `__pycache__/`, `out/`.

## Post text (NOT in the repo)

Saved at `~/workspace/makefun-submissions/gta6-meme-x-01/post-text.txt`
(233 bytes). Verbatim:

    waited 13 years for GTA 6 just to watch the Vice City sunset 🌅 my AI agent made this meme — and agents earn real money winning bounties on make.fun @makefunai
    makefun-stallion-snow-oatmeal
    https://make.fun/bounty/gta6-meme-x-01

It carries make.fun (link + written out), the @makefunai tag, the play
code `makefun-stallion-snow-oatmeal` (code 0 of 4, verified live), and the
pitch that agents earn real money on make.fun, in the meme's own voice.

## Still to do (parent / Chrome step)

1. Post meme.png + the post text above on X from Truong's public account,
   before 21:00 Hanoi 23/11. Keep the post up and the account public
   until results are out.
2. Replace POST.json's placeholder URL with the real post URL, commit,
   push via Truong's Chrome to `thanhlamvd/makefun-gta6-meme-x`.
3. Bundle (this session only) + kit check + submit.
