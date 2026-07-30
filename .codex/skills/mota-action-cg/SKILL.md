---
name: mota-action-cg
description: Integrate short action CG cut-ins for H5 Mota AVG scenes in D:\coding\mota-js. Use as a mota-avg-editor child Skill for 行為 CG、動作 CG、短暫 CG, or a centered 4:3 image shown for one unskippable second; use directly only when the user explicitly names this Skill.
---

# Mota Action CG

Integrate a non-interactive CG cut-in with one project-wide layout and timing contract. Own only the asset and event cut-in contract; do not load or re-enter the parent Skill.

## Inputs

- Require the scene/floor, the narrative beat that triggers the cut-in, and an existing or explicitly requested CG asset.
- Treat asset generation as out of scope unless the user also asks to generate the image.

## Outputs

- Produce or update one registered 4:3 CG asset and its exact `showImage` → `sleep` → `hideImage` event sequence.
- Return the touched floor, asset, registration, question/TODO, and validation results to the caller.

## Dependencies

- Read [project-overview.md](../mota-avg-editor/references/project-overview.md), [images.md](../mota-avg-editor/references/images.md), [scene-flow.md](../mota-avg-editor/references/scene-flow.md), and [checklist.md](../mota-avg-editor/references/checklist.md).
- External Skill: `imagegen` — load only when the user explicitly requests CG generation in addition to integration.
- Do not load `mota-avg-editor`; hand the completed event artifact back to the caller.

## Blocking Conditions

- Stop the affected CG branch when the scene beat, asset identity, crop authority, or permission to generate a missing image is unresolved.
- Do not silently generate a new CG, stretch a non-4:3 asset, or modify engine/plugin code.

## Non-blocking Questions

- Record reversible filename choices, placeholder-CG use, and optional crop/padding choices in the task question file.
- A project-approved placeholder may be integrated when the canonical reference permits it, but it must also be promoted to the appropriate long-term TODO.

## Fixed contract

- Use image code `30`. It is above color effects and normal portraits but below the dialogue UI.
- Treat the reference screenshot as a full-screen placement example, not as the CG source image. Identify only the bordered CG panel when measuring its position.
- Draw the 4:3 CG into `loc: [48, 50, 320, 240]`. This horizontally centers it on the 416 × 416 UI canvas, leaving 48 pixels on each side; `x: 48` and `y: 50` come from the CG panel's relative position in the reference screenshot.
- Show and hide instantly with `time: 0`; the one-second hold begins only after the image is fully visible.
- Hold with `{"type": "sleep", "time": 1000, "noSkip": true}`. Do not use `wait`; `wait` waits for player input.
- Clear code `30` explicitly after the hold, even though changing floors also clears `image*` canvases.
- Do not use `async: true` on this three-event sequence.
- Leave the current dialogue box and portraits intact unless the script separately requests that they be hidden. Code `30` keeps the dialogue UI readable as in the reference layout.

Normal replay mode intentionally shortens `sleep` events; the one-second guarantee applies to normal gameplay.

## Prepare the asset

1. Put the image in `project/images/`.
2. Use a descriptive filename such as `<scene>_<beat>_action_cg.png`.
3. Verify that the visible source area is exactly 4:3. Prefer a 320 × 240 source; larger 4:3 sources are allowed.
4. Do not stretch a non-4:3 source. Crop or pad it to 4:3 first. If the correct asset is missing, follow the project placeholder-CG and TODO rules.
5. Add a new filename to `project/data.js -> main.images`; do not duplicate an existing registration.

Use the whole source image as `sloc`. Read its actual dimensions rather than guessing them.

## Handoff

Use the native event sequence `showImage` → `sleep` → `hideImage`; do not add engine or plugin code for this behavior. Insert it immediately after the dialogue line or narration beat that triggers the visual, then return the event block and validation evidence to the caller.

For a 1280 × 960 source:

```js
[
    {
        "type": "showImage",
        "code": 30,
        "image": "scene_reaction_action_cg.png",
        "sloc": [0, 0, 1280, 960],
        "loc": [48, 50, 320, 240],
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

For an exact 320 × 240 source, still include both `sloc` and the four-value `loc` so the action-CG contract is explicit:

```js
{
    "type": "showImage",
    "code": 30,
    "image": "scene_reaction_action_cg.png",
    "sloc": [0, 0, 320, 240],
    "loc": [48, 50, 320, 240],
    "opacity": 1,
    "time": 0
}
```

Do not insert player-visible text such as `【行為CG：...】`.

## Validation

- Confirm the registered asset exists and its visible area is 4:3.
- Confirm the event order is exactly `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`.
- Confirm `loc` is `[48, 50, 320, 240]` and neither show nor hide uses a fade.
- Run `node --check` on each touched floor file.
- Inspect `git diff --name-only` and `git diff --stat`; do not stage unless the user explicitly asks.
