---
name: mota-story-update
description: Update existing H5 Mota story transactions in D:\coding\mota-js, including baseline comparison, Story IR/floor regeneration, and line-addressed CG renaming after main-story line changes.
---

# Mota Story Update

Update checked-in story sources as one traceable source → Story IR → scene/floor transaction. Do not author or patch source text; source protection remains governed by `AGENTS.md`.

## Inputs

- A request to update main story, character story, Story IR, or derived scenes/floors.
- The recorded baseline commit in `AGENTS.md`, plus any confirmed complete source inputs.

## Workflow

1. Read `AGENTS.md` and identify the recorded baseline commit. Compare `project/mainStory/` and `project/story/` from that commit (exclusive) through the current source state; do not infer updates from derived IR, floor, asset, or TODO changes.
2. Read the affected complete authoritative source and the applicable canonical references: `mota-avg-editor/references/text-to-event-json.md`, `checklist.md`, and only the feature references required by the source directives.
3. For main-story changes, apply the line-addressed CG guard before `--refresh-ir`: `CH<N>_L<N>.png` names the first authoritative appearance of that CG. If physical source line numbers change, prove each affected old-to-new first appearance and rename its asset, registrations, and mappings first; every later identical CG directive must reuse that same first-appearance file. Stop the affected CG branch on any deleted, ambiguous, or unprovable match.
4. Update validated Story IR and its corresponding scenes/floors in the same transaction. Main story uses `node scripts/generate_main_story.js --refresh-ir`; character story uses `node scripts/manage_story_ir.js --emit-character` only after its IR is valid.
5. Run the applicable validation chain, inspect the diff, and verify every affected source, IR, asset, scene/floor, and trigger remains traceable.
6. When a commit is requested, create a content commit containing the full transaction, then create a second commit that only writes the content commit hash as the new baseline in `AGENTS.md`.

## Outputs

- Updated validated Story IR and matching scene/floor implementations, with any required runtime registrations and TODO/question evidence.
- For a requested commit, a content commit followed by the baseline-only commit required by `AGENTS.md`.

## Dependencies

- Canonical main/character update rules: `../mota-avg-editor/references/text-to-event-json.md`.
- Cross-branch acceptance criteria: `../mota-avg-editor/references/checklist.md`.
- Route action CG work to `mota-action-cg` when a changed CG needs the fixed one-second action-CG contract.

## Blocking Conditions

- Stop the affected branch when the baseline/source delta, source authority, CG old-to-new line mapping, required asset mapping, or matching scene/floor update cannot be proven.
- Never generate or commit IR-only, source-only, or line-stale CG changes.

## Non-blocking Questions

- Record reversible display choices or optional assets in the required task question file; do not let them bypass source, CG mapping, or source-to-floor atomicity.

## Handoff

- Hand off fixed action CG processing to `mota-action-cg`.
- Hand off portraits, backgrounds, BGM, Akiba, or minigames to the named canonical reference or child Skill in `mota-avg-editor`.

## Validation

- Run `node scripts/generate_main_story.js --check` for main-story changes and `node scripts/manage_story_ir.js` for story IR consistency.
- Run `python scripts/build_action_cgs.py --check` when action-CG assets are involved.
- Confirm every renamed line-addressed CG follows `project/images/ → project/data.js -> main.images → Story IR → floor`, points at its current first authoritative CG directive, and is reused by every later identical CG directive.
- Inspect `git diff --check`, then the staged commit boundary when committing.
