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

1. Read `AGENTS.md` and identify the recorded baseline commit. First verify that the recorded baseline is a valid synchronized boundary; any source SHA-256 mismatch, stale IR, hash drift, or other synchronization blocker invalidates it. Do not treat an invalid historical baseline as permission to ignore earlier changes; repair from the latest provable valid boundary before continuing. Only then compare `project/mainStory/` and `project/story/` from that commit (exclusive) through the current source state; do not infer updates from derived IR, floor, asset, or TODO changes.
   When the current transaction includes a complete user-provided source file, create a repo-local verification manifest shaped as `{"version":1,"sources":[{"path":"project/...","sha256":"<current complete-file hash>"}]}` and pass it to the unified validator with `--source-import-manifest <path>`. This marker proves byte identity; it does not authorize Agent-written source content.
2. Read the affected complete authoritative source and the applicable canonical references: `mota-avg-editor/references/text-to-event-json.md`, `checklist.md`, and only the feature references required by the source directives.
3. For main-story changes, apply the line-addressed CG guard before editing Story IR: `CH<N>_L<N>.png` names the first authoritative appearance of that CG. If physical source line numbers change, prove each affected old-to-new first appearance and rename its asset, registrations, and IR references first; every later identical CG directive must reuse that same first-appearance file. Stop the affected CG branch on any deleted, ambiguous, or unprovable match.
4. After the Agent updates Story IR, run `node scripts/validate_story_source.js`, then emit its corresponding scenes/floors in the same transaction. Main story uses `node scripts/generate_main_story.js`; character story uses `node scripts/manage_story_ir.js --emit-character`. Neither emitter reads or interprets authoritative source.
5. Run the applicable validation chain, inspect the diff, and verify every affected source, IR, asset, scene/floor, and trigger remains traceable. Story update completion means every authoritative source in the update boundary is synchronized and all source SHA-256 mismatch, stale IR, hash drift, and other synchronization blockers are resolved; partial synchronization is not completion.
6. Treat a content commit as the atomic record of that completed playable story transaction: source changes (when present), semantic Story IR, matching scene/floor, required entry points, assets, and traceability metadata must be committed together. Validator-only, test-only, asset-only, TODO-only, or task-question-only changes are not content commits. If any hash drift remains, the story update is incomplete and no content commit may be treated as the completed update.
7. When a commit is requested, first require `node scripts/validate_story.js` to pass with no source SHA-256 mismatch, stale IR, hash drift, or other synchronization blocker. If any such blocker exists, leave the recorded baseline unchanged and do not create a completed content commit or baseline-only commit. Only after that gate passes, create the content commit and then a second commit that only writes the full content commit hash as the new baseline in `AGENTS.md`.

## Outputs

- Updated validated Story IR and matching scene/floor implementations, with any required runtime registrations and TODO/question evidence.
- For a requested commit, a content commit followed by the baseline-only commit required by `AGENTS.md`.

## Dependencies

- Canonical main/character update rules: `../mota-avg-editor/references/text-to-event-json.md`.
- Cross-branch acceptance criteria: `../mota-avg-editor/references/checklist.md`.
- Route action CG work to `mota-action-cg` when a changed CG needs the fixed one-second action-CG contract.

## Blocking Conditions

- Stop the affected branch when the baseline/source delta, source authority, CG old-to-new line mapping, required asset mapping, or matching scene/floor update cannot be proven.
- Treat any existing source-to-IR SHA-256 mismatch, stale IR, or other hash-drift blocker as a baseline-wide blocker; do not dismiss it because it predates the current task or belongs to another story owner.
- Never generate or commit IR-only, source-only, or line-stale CG changes.

## Non-blocking Questions

- Record reversible display choices or optional assets in the required task question file; do not let them bypass source, CG mapping, or source-to-floor atomicity.

## Handoff

- Hand off fixed action CG processing to `mota-action-cg`.
- Hand off portraits, backgrounds, BGM, Akiba, or minigames to the named canonical reference or child Skill in `mota-avg-editor`.

## Validation

- Run the unified `node scripts/validate_story.js` command, adding `--source-import-manifest <path>` only for a traceable complete-source import. It validates source hashes, line-addressed assets, IR schema and references, deterministic floor output, action-CG sync, runtime reachability, ownership boundaries, and the IR/floor transaction.
- A baseline-only commit is permitted only when the unified validator succeeds with no source hash mismatch, stale IR, hash drift, or synchronization blocker anywhere in the authoritative story set; otherwise keep the previous baseline and record the blocker.
- Run `python scripts/build_action_cgs.py --check` when action-CG assets are involved.
- Confirm every renamed line-addressed CG follows `project/images/ → project/data.js -> main.images → Story IR → floor`, points at its current first authoritative CG directive, and is reused by every later identical CG directive.
- Inspect `git diff --check`, then the staged commit boundary when committing.
