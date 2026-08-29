#!/usr/bin/env python3
"""Build deterministic runtime action-CG crops from authoritative CG masters."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "project" / "images"
MANIFEST_PATH = ROOT / "project" / "action-cg-manifest.json"
OUTPUT_SIZE = (416, 286)
ASSETS = (
    ("ms_ch1_mapo_shop_entrance_cg.png", "ms_ch1_mapo_shop_entrance_action_cg.png"),
    ("ms_ch1_keng_join_cg.png", "ms_ch1_keng_join_action_cg.png"),
    ("ms_ch1_keng_2_5_cg.png", "ms_ch1_keng_2_5_action_cg.png"),
    ("ms_ch1_thunder_crocodile_cg.png", "ms_ch1_thunder_crocodile_action_cg.png"),
    ("ms_ch2_keng_bicycle_cg.png", "ms_ch2_keng_bicycle_action_cg.png"),
    ("ms_ch2_eri_sunset_cg.png", "ms_ch2_eri_sunset_action_cg.png"),
    ("watanuki_shrine_cg1.jpg", "watanuki_shrine_cg1_action_cg.png"),
    ("kelukai_alley_dash_cg.png", "kelukai_alley_dash_action_cg.png"),
    ("kelukai_flashback_strike_cg.png", "kelukai_flashback_strike_action_cg.png"),
    ("kelukai_stalker_confrontation_cg.png", "kelukai_stalker_confrontation_action_cg.png"),
)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def centered_crop(size: tuple[int, int]) -> tuple[int, int, int, int]:
    width, height = size
    target_width, target_height = OUTPUT_SIZE
    if width * target_height > height * target_width:
        crop_height = height
        crop_width = height * target_width // target_height
    else:
        crop_width = width
        crop_height = width * target_height // target_width
    left = (width - crop_width) // 2
    top = (height - crop_height) // 2
    return left, top, left + crop_width, top + crop_height


def build_entry(master_name: str, output_name: str) -> dict[str, object]:
    master_path = IMAGE_DIR / master_name
    output_path = IMAGE_DIR / output_name
    if not master_path.is_file():
        raise FileNotFoundError(f"Missing authoritative action-CG master: {master_path}")

    with Image.open(master_path) as source:
        source.load()
        source_size = source.size
        crop = centered_crop(source_size)
        rendered = source.crop(crop)
        if rendered.size != OUTPUT_SIZE:
            rendered = rendered.resize(OUTPUT_SIZE, Image.Resampling.LANCZOS)
        rendered.save(output_path, format="PNG", optimize=False, compress_level=9)

    return {
        "master": master_name,
        "output": output_name,
        "masterSha256": sha256(master_path),
        "outputSha256": sha256(output_path),
        "sourceSize": list(source_size),
        "crop": list(crop),
        "outputSize": list(OUTPUT_SIZE),
    }


def expected_manifest() -> dict[str, object]:
    return {
        "version": 1,
        "authority": "*_cg.png is the master; *_action_cg.png is generated and must not be edited directly.",
        "targetRatio": "16:11",
        "outputSize": list(OUTPUT_SIZE),
        "assets": [build_entry(master, output) for master, output in ASSETS],
    }


def check_manifest() -> None:
    if not MANIFEST_PATH.is_file():
        raise FileNotFoundError(f"Missing action-CG manifest: {MANIFEST_PATH}")
    current = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    for entry in current.get("assets", []):
        master_path = IMAGE_DIR / entry["master"]
        output_path = IMAGE_DIR / entry["output"]
        if not master_path.is_file() or not output_path.is_file():
            raise FileNotFoundError(f"Missing action-CG pair: {entry['master']} -> {entry['output']}")
        with Image.open(output_path) as output:
            if output.size != OUTPUT_SIZE:
                raise ValueError(f"Wrong action-CG size for {entry['output']}: {output.size}")
        if sha256(master_path) != entry["masterSha256"]:
            raise ValueError(f"Action-CG master changed; rebuild required: {entry['master']}")
        if sha256(output_path) != entry["outputSha256"]:
            raise ValueError(f"Generated action CG changed; rebuild required: {entry['output']}")
    expected_pairs = {pair for pair in ASSETS}
    actual_pairs = {(entry["master"], entry["output"]) for entry in current.get("assets", [])}
    if actual_pairs != expected_pairs:
        raise ValueError("Action-CG manifest asset list is stale; rebuild required")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="verify outputs and manifest without writing")
    args = parser.parse_args()
    if args.check:
        check_manifest()
        print(f"Validated {len(ASSETS)} action-CG master/output pairs.")
        return

    manifest = expected_manifest()
    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
        newline="\n",
    )
    print(f"Built {len(ASSETS)} action CGs and updated {MANIFEST_PATH.relative_to(ROOT)}.")


if __name__ == "__main__":
    main()
