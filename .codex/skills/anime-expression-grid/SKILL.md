---
name: anime-expression-grid
description: Generate a consistent six-expression anime character sheet for this H5 Mota project. Use when explicitly requested or when routed by mota-avg-editor to turn one confirmed character reference into happy, angry, sad, surprised, panicked, and neutral tall full-body green-screen sprites in a 2-column by 3-row grid.
---

# Anime Expression Grid

Create one 2 × 3 chroma-key-green expression sheet. Own only the six-cell art contract; do not load or re-enter a parent project Skill.

## Inputs

- Require one confirmed character reference image.
- Use `assets/style.png` as the sole style reference. It is a successful Mapo 2×3 full-body sheet: use it only for line work, flat cel shading, silhouette proportion, layout, and chroma-key treatment; never copy its character identity, outfit, or poses into another character.
- Treat the character reference only as character-design evidence. Treat the style image only as rendering-style evidence.

## Outputs

- Produce one sheet with six equal cells ordered left-to-right, top-to-bottom: happy, angry, sad, surprised, panicked, neutral.
- Produce an inspection result covering identity consistency, grid order, crop, edges, background, and unwanted text.

## Dependencies

- External Skill: `imagegen` — default raster generation and editing path.
- External Skill: `game-character-art` — use only when the user explicitly requests a local GPU workflow, reproducible settings, or a larger same-character asset set.
- For a project-bound output, read [project-overview.md](../mota-avg-editor/references/project-overview.md), [character-art-style.md](../mota-avg-editor/references/character-art-style.md), and [images.md](../mota-avg-editor/references/images.md).
- Do not load `mota-avg-editor`; return or hand off the approved artifact without creating a dependency cycle.

## Blocking Conditions

- Stop when the character reference is missing, character identity is not confirmed, or the bundled style asset cannot be read.
- Do not substitute a similar character, override the standard style, or mix built-in and local generation backends without explicit user direction.

## Non-blocking Questions

- Record minor pose, gesture, or expression-readability uncertainty in the task question file and iterate without changing the confirmed character design.
- Treat a request to change the project-wide style as blocking for shared-style replacement, but allow generation with the existing style while the change remains undecided if that still satisfies the request.

## Handoff

1. Read the selected generation Skill.
2. Generate six equal full-body cells with a visibly tall adult/anime proportion: head through shoes, elongated legs and torso, and no chibi or squat silhouette. The shoe sole may meet or be narrowly cropped by the cell bottom, but the legs and shoes must remain readable.
3. Keep scale, camera distance, composition, and style consistent while varying only expression, hands, and small body-language changes.
4. Use solid chroma-key green, a clear thick black outline, opaque clean edges, and no text, labels, emblems, watermarks, extra characters, floating reaction icons, or decorative panels.
5. When called by a parent Skill, return the approved sheet and validation result to that caller.
6. When explicitly invoked as the task root for a project asset, continue through [images.md](../mota-avg-editor/references/images.md) for key removal, splitting, registration, and event hookup. Do not invoke the parent Skill.

The historical source workflow used `instant5.5`; treat it as a preference, not as an available model selector unless the generation tool exposes one.

## Validation

- Confirm all six emotions and the exact grid order.
- Confirm the same character, fixed style, tall full-body framing, clean opaque edges, green background, and absence of text, emblems, or watermarks.
- Regenerate or edit any materially failed cell before handoff.
- For project integration, also run the image validation required by [images.md](../mota-avg-editor/references/images.md).

