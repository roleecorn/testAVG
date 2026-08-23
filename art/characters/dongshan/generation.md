# Dongshan expression sheet generation

- Generated: `2026-08-23` (`Asia/Taipei`)
- Backend: Codex built-in `imagegen` (no local GPU)
- Character identity reference: `project/images/dongshan_normal.png` before this replacement
- Style/layout reference: `.codex/skills/anime-expression-grid/assets/style.png`
- Composition reference: user-provided screenshot; used only to define the runtime crop (centered large portrait, head near the upper edge, body behind the dialogue UI and clipped at the viewport bottom). Its character identity and text were not used.
- Master: `dongshan_expression_sheet.png`
- Cell order: `smile`, `angry`, `sad`, `surprised`, `panic`, `normal`

## Final generation constraints

Preserve Dongshan's silver-white bob, two narrow side braids, pink top bow and hair clip, blue eyes, teal jacket with navy trim, dark short skirt, bare legs, and pink bow flats. Render six consistent full-body Japanese anime AVG sprites on chroma-key green in an equal 2×3 sheet. Keep each complete figure inside its own cell with safe green separator gutters; no text, watermark, extra character, crossed grid boundary, cropped limb, or neighboring-row foot.

The runtime composition is not baked into the master. `split_emotion_image.py` detects green separator gutters, the six outputs are keyed to true-alpha PNGs, and the shared AVG layout applies `portraitScale: 0.92` with `portraitBottomY: 440`.
