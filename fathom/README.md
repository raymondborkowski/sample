# Fathom — unlimited rarity dives

A Krillion-style rarity trivia game: 7 prompts, 25 seconds each, rare answers sink you deeper (10 m per point, 7,000 m max). Prompts are generated and validated by Claude; rarity is scored against real corpus-frequency data (`freq.txt`, from the open [wordfreq](https://github.com/rspeer/wordfreq) dataset — Wikipedia, subtitles, news, books, Reddit, Twitter).

## Hosting on GitHub Pages
1. Push `index.html`, `freq.txt` to the repo root (or `/docs`).
2. Settings → Pages → Deploy from branch → pick the branch/folder.
3. Open the page, paste an Anthropic API key on the home screen (stored only in your browser).

The same `index.html` also runs as a claude.ai artifact, where it uses the built-in Claude access instead of an API key.
