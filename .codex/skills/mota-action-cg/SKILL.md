---
name: mota-action-cg
description: Integrate short action CG cut-ins for H5 Mota AVG scenes in D:\coding\mota-js. Use as a mota-avg-editor child Skill for 行為 CG、動作 CG、短暫 CG, or a centered 16:11 panel shown for one unskippable second; use directly only when the user explicitly names this Skill.
---

# Mota Action CG

Integrate a non-interactive CG cut-in with one project-wide layout and timing contract. Own only the asset and event cut-in contract; do not load or re-enter the parent Skill.

## Inputs

- Require the scene/floor, the narrative beat that triggers the cut-in, and an existing or explicitly requested CG asset.
- Treat asset generation as out of scope unless the user also asks to generate the image.

## Outputs

- Produce or update one authoritative `*_cg.png` master, its generated 416×286 `*_action_cg.png` runtime asset, and the exact `showImage` → `sleep` → `hideImage` event sequence.
- Return the touched floor, asset, registration, question/TODO, and validation results to the caller.

## Dependencies

- Read [project-overview.md](../mota-avg-editor/references/project-overview.md), [images.md](../mota-avg-editor/references/images.md), [scene-flow.md](../mota-avg-editor/references/scene-flow.md), and [checklist.md](../mota-avg-editor/references/checklist.md).
- External Skill: `imagegen` — load only when the user explicitly requests CG generation in addition to integration.
- Do not load `mota-avg-editor`; hand the completed event artifact back to the caller.

## Blocking Conditions

- Stop the affected CG branch when the scene beat, master asset identity, crop authority, or permission to generate a missing image is unresolved.
- Do not silently generate a new CG, stretch an asset to the panel ratio, hand-edit `*_action_cg.png`, or modify engine/plugin code.

## Non-blocking Questions

- Record reversible filename choices, placeholder-CG use, and optional crop/padding choices in the task question file.
- A project-approved placeholder may be integrated when the canonical reference permits it, but it must also be promoted to the appropriate long-term TODO.

## Fixed contract

- Use image code `30`. It is above color effects and normal portraits but below the dialogue UI.
- Treat the reference screenshot as a full-screen placement example, not as the CG source image. Identify only the bordered CG panel when measuring its position.
- Draw the visible CG crop into `loc: [112, 50, 320, 220]`. This matches the measured panel in the 544 × 416 reference screenshot: `x: 112` horizontally centers the 320-pixel panel, while `y: 50` and height `220` preserve its vertical range.
- Show and hide instantly with `time: 0`; the one-second hold begins only after the image is fully visible.
- Hold with `{"type": "sleep", "time": 1000, "noSkip": true}`. Do not use `wait`; `wait` waits for player input.
- Clear code `30` explicitly after the hold, even though changing floors also clears `image*` canvases.
- Do not use `async: true` on this three-event sequence.
- Leave the current dialogue box and portraits intact unless the script separately requests that they be hidden. Code `30` keeps the dialogue UI readable as in the reference layout.

Normal replay mode intentionally shortens `sleep` events; the one-second guarantee applies to normal gameplay.

## Prepare the asset

1. Put the authoritative master in `project/images/` and name it `<scene>_<beat>_cg.png`.
2. Add the master/output pair to `scripts/build_action_cgs.py`; the runtime filename is `<scene>_<beat>_action_cg.png`.
3. Run `python scripts/build_action_cgs.py`. The script centrally crops the master to 16:11, resizes the result to exactly 416×286, and updates `project/action-cg-manifest.json` with both hashes. Do not edit the output or manifest by hand.
4. Register both filenames in `project/data.js -> main.images`; do not duplicate an existing registration. If the correct master is missing, follow the project placeholder-CG and TODO rules on the master filename.
5. Runtime always displays the full generated output with `sloc: [0, 0, 416, 286]`; source crop coordinates belong only to the preprocessing manifest, not the floor event.

## Handoff

Use the native event sequence `showImage` → `sleep` → `hideImage`; do not add engine or plugin code for this behavior. Insert it immediately after the dialogue line or narration beat that triggers the visual, then return the event block and validation evidence to the caller.

The runtime event always consumes the full generated 416×286 image:

```js
[
    {
        "type": "showImage",
        "code": 30,
        "image": "scene_reaction_action_cg.png",
        "sloc": [0, 0, 416, 286],
        "loc": [112, 50, 320, 220],
        "opacity": 1,
        "time": 0
    },
    {
        "type": "sleep",
        "time": 1000,
        "noSkip": true
    },
    {
        "type": "hideImage",
        "code": 30,
        "time": 0
    }
]
```

Do not insert player-visible text such as `【行為CG：...】`.

## Validation

- Run `python scripts/build_action_cgs.py --check` and confirm the master/output hashes, pair list, and 416×286 output size are synchronized.
- Confirm the registered runtime asset exists and uses `sloc: [0, 0, 416, 286]`.
- Confirm the event order is exactly `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`.
- Confirm `loc` is `[112, 50, 320, 220]` and neither show nor hide uses a fade.
- For main-story assets, run `node scripts/generate_main_story.js --check`; it must independently reject a changed master, changed output, or stale manifest.
- Run `node --check` on each touched floor file.
- Inspect `git diff --name-only` and `git diff --stat`; do not stage unless the user explicitly asks.
