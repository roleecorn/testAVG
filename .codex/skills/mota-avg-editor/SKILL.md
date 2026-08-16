---
name: mota-avg-editor
description: Root coordinator for creating, converting, and editing AVG content in the H5 Mota project at D:\coding\mota-js. Use for project story, floor, event JSON, dialogue, image, BGM, state, Akiba, minigame, multi-asset ZIP, or integration tasks; route specialized expression-grid and action-CG work to child Skills.
---

# Mota AVG Editor

Coordinate H5 Mota AVG work from one root and hand atomic artifacts to canonical references or child Skills. Keep map mechanics minimal unless the user explicitly requests normal tower gameplay.

## Primary Decision Principle

Every create or update task is story-demand-driven, not only ZIP imports. Decide in this fixed direction: explicit user requirements and authoritative story source → Story IR/scene narrative, interaction, and presentation requirements → asset and implementation selection, generation, or traceable placeholder → runtime registration, integration, and validation. Existing assets, floors, filenames, registrations, tool convenience, ZIP contents, or prior implementations must never reverse-shape, omit, expand, or replace the story requirements. When no story source exists, derive the required behavior from the user's explicit request before choosing implementation or assets.

## Inputs

- Accept a project-scoped request plus any supplied scripts, ZIP files, images, audio, scene IDs, or commit range.
- Read [project-overview.md](references/project-overview.md) before editing or generating project content.
- Read Markdown and text as UTF-8. In PowerShell, always use `Get-Content <path> -Encoding UTF8`.

## Outputs

- Produce the requested story sources, floor/event changes, registered assets, state changes, or minigame integration.
- Produce validation results and the exact downstream handoffs used.
- When any doubt appears, create the timestamped task question file required by `AGENTS.md`; promote unresolved story items to `project/story/TODO.md` for character stories or `project/mainStory/TODO.md` for main stories.

## Story update transaction

For every main-story or character-story change, the deliverable is a playable story update, not a source-file import. The mandatory chain is authoritative source text → validated Story IR → corresponding scene/floor implementation → reachable trigger or event entry when the branch requires one.

- Source boundary: `project/mainStory/` and `project/story/` are authoritative inputs. The Agent must never author, partially edit, polish, correct, reformat, delete, move, rename, or reverse-generate their content. It may create a new source file or replace an existing source file in full only from a confirmed, traceable user/ZIP/external source whose text is preserved without Agent rewriting; such source files may be staged and committed only with their matching Story IR and scene/floor transaction.
- Story IR is never an independent deliverable or commit boundary. Any add, update, or deletion under `project/story-ir/` must be accompanied by the corresponding scene/floor add, update, or deletion in the same content commit.
- An IR-only commit is invalid. If the corresponding scene/floor cannot be updated or validated, stop the affected branch, leave the IR unchanged, and record the blocker in the required question/TODO files.
- For an existing story owner, compare the new source with the prior source and update the existing scenes/floors; do not create a parallel branch merely because the input arrived in a ZIP.
- For a character-story ZIP, process one character at a time in this fixed order: read the complete authoritative source → build a draft Story IR that marks every portrait/background/CG requirement → match ZIP images to those requirements by filename and story context → directly use or generate the required runtime assets → finalize the validated Story IR and corresponding scene/floor. Never bulk-copy ZIP images into `project/images/` before this mapping exists.
- Audit every character's source-image inventory after scene integration. A ZIP image is applied only when it is directly used by a scene or recorded as the source of a generated scene image. Copy any still-unmatched source image, unchanged, to repo-root `unknown/<character-id>/<original-relative-path>` and record it in `project/story/TODO.md`; `unknown/` is a pending-work marker, not a completion state or runtime asset directory. Never place such files in `project/images/` or register them in `project/data.js`.
- Enforce the runtime image chain: every file admitted to `project/images/` must be registered in `project/data.js -> main.images`, and every `main.images` registration must be used by at least one validated Story IR scene and corresponding floor. Registration alone is not usage.
- Completion requires a traceable mapping for every source chapter/scene and a verified in-game or isolated trigger path. Static IR validation alone is not completion.
- The ZIP orchestration and Story IR references define the exact staging and validation evidence for this transaction; use them before declaring the story updated.

## Dependencies

- Project Skill: `anime-expression-grid` — generate a project six-expression sheet.
- Project Skill: `mota-action-cg` — integrate a fixed 16:11 one-second action CG panel.
- Load only the canonical references required by the current branch; never copy their rules into another Skill.
- Never allow a child Skill to load this root again during the same task.

## Blocking Conditions

- Stop the affected branch when source authority, overwrite permission, deletion scope, required user authority, or a rule conflict is unresolved.
- Treat uncertain character identity as non-blocking for the batch but blocking for that character's expression generation, image integration, and scene/floor integration.
- Do not guess a missing character image, story owner, floor identity, or destructive target.
- When a draft Story IR requires an image but no formal asset is available, copy another suitable image as a clearly named temporary substitute, put it through `project/images/ → main.images → scene`, and record the temporary filename, copied source, intended replacement, affected scene, and done evidence in the applicable story TODO (`project/story/TODO.md` or `project/mainStory/TODO.md`). An extra ZIP image with no identified scene use is instead isolated under root `unknown/` and recorded in the same applicable TODO as unapplied.

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

Keep `project/mainStory/CH1`–`CH6` as the main-story source of truth and `project/story/*.txt` as the character-story source of truth. Checked-in Story IR lives under `project/story-ir/`; scene/floor files remain derived implementations. Main story and character stories share `scripts/story_ir.js` and the same conversion contract: natural-language source → structured Story IR → validation → engine events. Never let either branch generate engine events directly from unvalidated source text; only their trigger flow and source-file location may differ. Both branches also share one global AVG layout contract. The target spatial composition provides exactly one current-speaker portrait slot. Align the non-transparent portrait bbox horizontally to the viewport center, and align its visible bottom exactly to the dialogue-box top: `visibleCenterX = viewportWidth / 2` and `visibleBottom = dialogueY`; `portraitDialogueGap` is fixed at `0`. Each dialogue line clears every portrait image, then shows only the current speaker in that single slot; narration clears the slot. On the 544×416 canvas, the dialogue rectangle uses global side margins: `x=16`, `y=295`, `width=512`, `fixedLines=2`; it must not retain the old 352px narrowed width. Preserve aspect ratio and apply the same global `portraitScale` of `1.2` to every portrait so source-image height differences remain visible. The alpha bbox affects alignment only and must never produce a per-image fit scale. Do not use the old 128px visible-width cap, left/right slots, per-character coordinates, nonzero portrait/dialogue gaps, or per-character scale exceptions. Keep the portrait scale and dialogue rectangle in one global config. This contract is active for migrated scenes; un-migrated floors remain legacy until they are converted and validated.

For registered action CGs, `*_cg.png` is the authoritative master and `*_action_cg.png` is generated. Rebuild changed masters with `python scripts/build_action_cgs.py`, then require `node scripts/generate_main_story.js --check` to pass before writing main-story floors. Each named location also owns one unique background filename; generic `scene_*.png` files may seed placeholders but must never be overwritten to update a single location.

## Validation

- Read [checklist.md](references/checklist.md) and the validation section of every branch actually used.
- Verify every added or updated implementation and asset traces to an explicit user requirement or authoritative-source Story IR/scene need, and every such need is implemented or recorded through the required blocking/TODO path. Reject asset-led extra behavior and implementation-led omissions.
- For each ZIP character, classify every source image as directly used, generation source, or root-`unknown/` pending work; only the first two count as applied. Then verify `project/images/ → main.images → validated Story IR scene → floor` without orphan files, orphan registrations, or registration-only usage.
- Inspect the final diff scope, run `node scripts/generate_main_story.js --check` and `node scripts/manage_story_ir.js` for story changes, run other syntax and data checks relevant to touched files, and report checks that could not run.
- After changing any project Skill, run its `quick_validate.py` check and `scripts/validate_agent_skill_routes.js`.
