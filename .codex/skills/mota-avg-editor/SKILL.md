---
name: mota-avg-editor
description: Root coordinator for creating, converting, and editing AVG content in the H5 Mota project at D:\coding\mota-js. Use for project story, floor, event JSON, dialogue, image, BGM, state, Akiba, minigame, multi-asset ZIP, or integration tasks; route specialized expression-grid and action-CG work to child Skills.
---

# Mota AVG Editor

Coordinate H5 Mota AVG work from one root and hand atomic artifacts to canonical references or child Skills. Keep map mechanics minimal unless the user explicitly requests normal tower gameplay.

## Inputs

- Accept a project-scoped request plus any supplied scripts, ZIP files, images, audio, scene IDs, or commit range.
- Read [project-overview.md](references/project-overview.md) before editing or generating project content.
- Read Markdown and text as UTF-8. In PowerShell, always use `Get-Content <path> -Encoding UTF8`.

## Outputs

- Produce the requested story sources, floor/event changes, registered assets, state changes, or minigame integration.
- Produce validation results and the exact downstream handoffs used.
- When any doubt appears, create the timestamped task question file required by `AGENTS.md`; promote unresolved items to the appropriate long-term TODO.

## Dependencies

- Project Skill: `anime-expression-grid` — generate a project six-expression sheet.
- Project Skill: `mota-action-cg` — integrate a fixed 4:3 one-second action CG.
- Load only the canonical references required by the current branch; never copy their rules into another Skill.
- Never allow a child Skill to load this root again during the same task.

## Blocking Conditions

- Stop the affected branch when source authority, overwrite permission, deletion scope, required user authority, or a rule conflict is unresolved.
- Treat uncertain character identity as non-blocking for the batch but blocking for that character's expression generation, image integration, and scene/floor integration.
- Do not guess a missing character image, story owner, floor identity, or destructive target.

## Non-blocking Questions

- Record reversible naming choices, placeholder assets, optional presentation choices, and uncertain character identity in the task question file.
- Continue only the unaffected or explicitly reversible work. Never use non-blocking status to bypass a locally blocked character branch.

## Handoff

Route each task through the smallest applicable branch:

- Floor or scene structure: [floors.md](references/floors.md)
- Dialogue format: [dialogue.md](references/dialogue.md)
- Images, portraits, backgrounds, or registration: [images.md](references/images.md)
- Six-expression sheet: Project Skill `anime-expression-grid`, then [images.md](references/images.md)
- Fixed action CG: Project Skill `mota-action-cg`
- Flags and saved state: [flags.md](references/flags.md)
- Scene entry, transitions, or image cleanup: [scene-flow.md](references/scene-flow.md)
- BGM: [bgm.md](references/bgm.md)
- Sound or animation effects: [audio-effects.md](references/audio-effects.md)
- Plain script conversion: [text-to-event-json.md](references/text-to-event-json.md)
- Character-story ZIP: [archive-story-task-splitting.md](references/archive-story-task-splitting.md)
- TODO and unresolved content: [todo.md](references/todo.md)
- Standalone minigame: [minigame-integration.md](references/minigame-integration.md)
- Akiba map and locations: [akiba.md](references/akiba.md)
- Akiba event state and API: [akiba-event-manager.md](references/akiba-event-manager.md)
- Character art style: [character-art-style.md](references/character-art-style.md)

Keep `project/story/*.txt` as the character-story source of truth. Treat scene/floor files as derived game implementations.

## Validation

- Read [checklist.md](references/checklist.md) and the validation section of every branch actually used.
- Inspect the final diff scope, run syntax and data checks relevant to touched files, and report checks that could not run.
- After changing any project Skill, run its `quick_validate.py` check and `scripts/validate_agent_skill_routes.js`.
