---
name: anime-expression-grid
description: Generate a consistent six-expression anime character sheet for this H5 Mota project. Use when asked to turn a character reference image into happy, angry, sad, surprised, panicked, and neutral half-body green-screen sprites arranged in a 2-column by 3-row grid, using the bundled fixed style reference.
---

# Anime Expression Grid

Create a single 2 × 3 chroma-key-green expression sheet from the supplied character reference. Preserve the character design while varying facial expression, pose, gesture, and body language for each emotion.

## Skill integration

- Always use this skill together with `imagegen` and `mota-avg-editor` for a project expression-sheet request. This skill owns the six-cell layout, fixed style anchor, expression semantics, and chroma-key constraints.
- Let `imagegen` own the built-in generation/editing path, structured prompt construction, output inspection, and saved-project-asset policy. Use its built-in tool by default.
- Let `mota-avg-editor` own the project image handoff: read its project overview and image reference before placing generated assets in `project/images`, removing the key, splitting cells, registering images, or wiring events.
- Invoke `game-character-art` only when the user explicitly requests a local GPU workflow, ComfyUI/SD WebUI, reproducible seeds/settings, or a larger same-character asset set. Its local-backend requirements replace the built-in generation path; do not silently mix the two generators.

## Required inputs

- Require one character reference image. Treat it only as the source of the character's hairstyle, clothing, palette, accessories, facial features, and overall design.
- Always use `assets/style.png` as the sole style reference. Treat it only as the source of line weight, colouring, proportions, image size, shading, and overall rendering style. Never copy its character, clothing, hairstyle, or palette.
- Do not replace or override the bundled style reference unless the user explicitly asks to change this project's standard style.

## Generation workflow

1. Read the `imagegen` skill before generating or editing any raster image.
2. Read `mota-avg-editor` and its image reference before handling a project-bound asset.
3. Use the image-generation tool with the supplied character reference and `assets/style.png`. Do not use the character reference as a pose template.
4. Generate one image containing six equal cells in exactly two columns and three rows, ordered left-to-right, top-to-bottom: happy, angry, sad, surprised, panicked, neutral.
5. Use a consistent half-body crop; do not show legs. Keep character scale, camera distance, composition, and style consistent between cells.
6. Inspect the result for all six emotions, the exact grid order, opaque clean edges, and unwanted text before delivering. Regenerate or edit if a requirement materially fails.
7. When the sheet is to be used in-game, pass the approved sheet to the `mota-avg-editor` image pipeline for chroma-key removal, six-cell splitting, image registration, and any requested event hookup. Do not substitute a different grid order.

## Prompt requirements

Include all of the following constraints in the generation prompt:

- Render each emotion with its own matching pose, hand gesture, and body language; do not reuse the source pose.
- Use a standard solid chroma-key green background in every cell.
- Draw a clear, even, thick black outline around the character, with an unambiguous separation from the background.
- Forbid text, labels, watermarks, green reflected light, green spill, colour-fringed edges, blurred edges, and semi-transparent edges.
- Do not introduce extra characters, panels, or decorative caption elements.

## Model note

The source workflow used `instant5.5`. Record that as the user's preferred reference workflow, but do not claim this Codex environment can select that model unless the available image-generation tool exposes a model selector. Use the available image-generation tool with the same visual specification.

