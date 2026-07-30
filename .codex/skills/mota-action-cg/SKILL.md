---
name: mota-action-cg
description: Add and integrate short action CG cut-ins for H5 Mota AVG scenes in D:\coding\mota-js. Use when a script or request mentions 行為 CG、行為CG、動作 CG、短暫 CG, a fixed 4:3 cut-in, or an image that must remain visible for one second and then disappear automatically.
---

# Mota Action CG

Create a non-interactive CG cut-in with one project-wide layout and timing contract. Use the native event sequence `showImage` → `sleep` → `hideImage`; do not add engine or plugin code for this behavior.

## Required reads

Before editing project content, read these UTF-8 files:

- `.codex/skills/mota-avg-editor/references/project-overview.md`
- `.codex/skills/mota-avg-editor/references/images.md`
- `.codex/skills/mota-avg-editor/references/scene-flow.md`
- `.codex/skills/mota-avg-editor/references/checklist.md`

## Fixed contract

- Use image code `30`. It is above color effects and normal portraits but below the dialogue UI.
- Draw into `loc: [0, 50, 320, 240]`. This is the fixed 4:3 frame on the 416 × 416 game canvas.
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

## Insert the event

For a 1280 × 960 source:

```js
[
    {
        "type": "showImage",
        "code": 30,
        "image": "scene_reaction_action_cg.png",
        "sloc": [0, 0, 1280, 960],
        "loc": [0, 50, 320, 240],
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
    "loc": [0, 50, 320, 240],
    "opacity": 1,
    "time": 0
}
```

Insert the sequence immediately after the dialogue line or narration beat that triggers the visual. Do not insert player-visible text such as `【行為CG：...】`.

## Validate

- Confirm the registered asset exists and its visible area is 4:3.
- Confirm the event order is exactly `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`.
- Confirm `loc` is `[0, 50, 320, 240]` and neither show nor hide uses a fade.
- Run `node --check` on each touched floor file.
- Inspect `git diff --name-only` and `git diff --stat`; do not stage unless the user explicitly asks.
