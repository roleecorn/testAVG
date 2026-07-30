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

## Reuse and Composition

- Before creating or changing a project Skill or workflow, inventory the existing task routes, references, scripts, and assets. Reuse an existing capability whenever it already owns the required work; do not create a parallel Skill or duplicate its rules.
- Modify an existing Skill only when its own reusable capability, trigger, or shared contract changes. For a special input format or one-off orchestration need, add a small routing/reference layer and compose existing Skills instead of inserting the whole workflow into a generic Skill.
- Decompose orchestration into atomic stages. Give every stage one responsibility, explicit prerequisites, input, output, acceptance criteria, and downstream receiver, and route it to the existing Skill or reference that owns the implementation.
- After a Skill change, validate the Skill and verify the complete route from the triggering request through every downstream text, image, scene, and delivery capability.

## Task Routing

Load only the references needed for the current task:

- New floor, scene, chapter, or scene file: `references/floors.md`
- Dialogue writing or dialogue event format: `references/dialogue.md`
- Character sprites, standing images, CG, backgrounds, or image mapping: `references/images.md`; for a new six-expression 2 × 3 character sheet, also use `anime-expression-grid` as the required generation coordinator; for a fixed 4:3 one-second 行為 CG, also use `mota-action-cg`.
- Flags, temporary state, persistent state, or search patterns: `references/flags.md`
- Scene entry, transitions, show/hide logic, or flow control: `references/scene-flow.md`
- BGM playback, keep behavior, pause/resume, fades, speed, or cache: `references/bgm.md`
- Sound effects or animation effects: `references/audio-effects.md`
- Plain script to event JSON conversion: `references/text-to-event-json.md`
- A single Google Drive ZIP that may contain character scripts and reference art: `references/archive-story-task-splitting.md`; use its atomic A–G ownership map to route each accepted artifact into the existing text, image, scene, and validation capabilities. Do not implement those downstream capabilities inside the ZIP orchestration layer.
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
- Route every new project character sheet with six emotions (喜、怒、哀、驚訝、慌亂、無表情) through `anime-expression-grid` before the image processing rules in `references/images.md`. That skill supplies the fixed style reference and exact grid contract; this skill then owns project integration.
- Put standalone minigame logic in `extensions/minigames/`; keep `project/plugins.js` as a thin integration layer.
- Use the project standard service (`启动服务.exe`) and `http://127.0.0.1:1055/` URLs for manual game/editor verification unless the user asks for server diagnostics.
- If TODOs, unresolved story gaps, missing assets, or uncertain characters arise, create or update a project TODO list file; do not leave them only in the chat.
- For uncertain characters, use the searchable placeholder `不知道是誰的<劇本中出現的名稱>` until the user confirms the character identity, then replace text, IDs, and images together.
- If a required CG, GIF, or BGM asset is missing, copy any existing same-type asset to the required new filename, register and reference that new filename, then record in the TODO list that it is a temporary copied asset that must be replaced later. Do not use this rule for character portraits.

## Delivery Check

Before finishing, read `references/checklist.md` and verify the touched content against it. Mention any checks or tests that could not be run.
