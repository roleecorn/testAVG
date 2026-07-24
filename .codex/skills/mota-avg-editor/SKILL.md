---
name: mota-avg-editor
description: Create, convert, and edit AVG-style story content for this H5 Mota project. Use when working on project/floors scene files, H5 Mota event JSON, dialogue, character images, BGM, flags, scene flow, Akiba map events, or extensions/minigames integration in D:\coding\mota-js.
---

# Mota AVG Editor

Use this skill to produce H5 Mota-compatible AVG scenes, event JSON, and minigame integrations for this project. Keep map mechanics minimal unless the user explicitly asks for normal tower gameplay.

## Required First Read

Read `references/project-overview.md` before editing or generating project content. It defines file locations, output expectations, server URLs, and the AVG implementation model.

Always read Markdown and text files as UTF-8. In PowerShell, use:

```powershell
Get-Content <path> -Encoding UTF8
```

If Chinese text appears corrupted, re-read with explicit UTF-8 before trusting or editing the file.

## Task Routing

Load only the references needed for the current task:

- New floor, scene, chapter, or scene file: `references/floors.md`
- Dialogue writing or dialogue event format: `references/dialogue.md`
- Character sprites, standing images, CG, backgrounds, or image mapping: `references/images.md`
- Flags, temporary state, persistent state, or search patterns: `references/flags.md`
- Scene entry, transitions, show/hide logic, or flow control: `references/scene-flow.md`
- BGM playback, keep behavior, pause/resume, fades, speed, or cache: `references/bgm.md`
- Sound effects or animation effects: `references/audio-effects.md`
- Plain script to event JSON conversion: `references/text-to-event-json.md`
- TODO items, unresolved story gaps, uncertain characters, missing assets, or questions for the user: `references/todo.md`
- New or changed standalone minigame: `references/minigame-integration.md`
- Akiba map, Akiba place triggers, or location metadata: `references/akiba.md`
- Akiba event manager design or implementation planning: `references/akiba-event-manager-plan.md`
- Character art generation/style consistency: `references/character-art-style.md`
- Final self-check before delivery: `references/checklist.md`

## Core Rules

- Prefer output that can be pasted into the event JSON editor or directly saved as `project/floors/*.js`.
- Treat each AVG scene or chapter as a floor unless the user asks for a different structure.
- Put normal story playback in `eachArrive`; reserve `firstArrive` for explicitly one-time initialization.
- Use background images, dialogue, standing images, flags, BGM, and sound effects as the main AVG primitives.
- Keep `map` mostly `0` for AVG scenes, and keep the hero visually hidden unless the task requires gameplay.
- Register new images, BGMs, sounds, and aliases in `project/data.js` when needed.
- Put standalone minigame logic in `extensions/minigames/`; keep `project/plugins.js` as a thin integration layer.
- Use the project standard service (`启动服务.exe`) and `http://127.0.0.1:1055/` URLs for manual game/editor verification unless the user asks for server diagnostics.
- If TODOs, unresolved story gaps, missing assets, or uncertain characters arise, create or update a project TODO list file; do not leave them only in the chat.
- For uncertain characters, use the searchable placeholder `不知道是誰的<劇本中出現的名稱>` until the user confirms the character identity, then replace text, IDs, and images together.

## Delivery Check

Before finishing, read `references/checklist.md` and verify the touched content against it. Mention any checks or tests that could not be run.
