#!/usr/bin/env python3
"""Build and validate the runtime-sized CG assets referenced by Story IR.

The source files keep their existing names and formats so the runtime registry
and story references remain stable.  RGB JPEGs use high-quality JPEG encoding;
PNG files retain lossless PNG encoding, including alpha channels.  Every
runtime CG is center-cropped to 16:11 and resized to the AVG panel source size
of 416x286.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "project" / "images"
IR_DIRS = (ROOT / "project" / "story-ir" / "main", ROOT / "project" / "story-ir" / "character")
MANIFEST_PATH = ROOT / "project" / "cg-compression-manifest.json"
OUTPUT_SIZE = (416, 286)
TARGET_RATIO_WIDTH = 16
TARGET_RATIO_HEIGHT = 11
JPEG_QUALITY = 90


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def is_cg_node(node: object) -> bool:
    return (
        isinstance(node, dict)
        and node.get("kind") == "image.show"
        and (node.get("role") == "cg" or 25 <= node.get("code", -1) <= 40)
    )


def collect_cg_names() -> list[str]:
    names: set[str] = set()

    def walk(value: object) -> None:
        if isinstance(value, list):
            for item in value:
                walk(item)
        elif isinstance(value, dict):
            if is_cg_node(value) and isinstance(value.get("image"), str):
                image_name = value["image"]
                if "_action_cg" not in image_name:
                    names.add(image_name)
            for item in value.values():
                walk(item)

    for directory in IR_DIRS:
        for ir_path in sorted(directory.glob("*.json")):
            walk(json.loads(ir_path.read_text(encoding="utf-8")))
    return sorted(names)


def centered_crop(size: tuple[int, int]) -> tuple[int, int, int, int]:
    width, height = size
    if width * TARGET_RATIO_HEIGHT > height * TARGET_RATIO_WIDTH:
        crop_height = height
        crop_width = height * TARGET_RATIO_WIDTH // TARGET_RATIO_HEIGHT
    else:
        crop_width = width
        crop_height = width * TARGET_RATIO_HEIGHT // TARGET_RATIO_WIDTH
    left = (width - crop_width) // 2
    top = (height - crop_height) // 2
    return left, top, left + crop_width, top + crop_height


def encode_runtime(source: Image.Image, output_path: Path) -> None:
    rendered = source.crop(centered_crop(source.size)).resize(OUTPUT_SIZE, Image.Resampling.LANCZOS)
    suffix = output_path.suffix.lower()
    source_format = (source.format or "").upper()
    output_format = "JPEG" if source_format in {"JPEG", "JPG"} or suffix in {".jpg", ".jpeg"} else "PNG"
    with tempfile.NamedTemporaryFile(dir=output_path.parent, suffix=suffix, delete=False) as temporary:
        temporary_path = Path(temporary.name)
    try:
        if output_format == "JPEG":
            if rendered.mode not in {"RGB", "L"}:
                rendered = rendered.convert("RGB")
            rendered.save(
                temporary_path,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
                subsampling=0,
            )
        elif output_format == "PNG":
            rendered.save(temporary_path, format="PNG", optimize=True, compress_level=9)
        else:
            raise ValueError(f"Unsupported CG format for {output_path.name}: {suffix}")
        try:
            temporary_path.replace(output_path)
        except PermissionError:
            # Some Windows watchers deny replace/delete on a live asset while
            # still allowing a normal overwrite.  Keep the atomic path first,
            # then fall back to a byte copy for that narrow case.
            shutil.copyfile(temporary_path, output_path)
    finally:
        if temporary_path.exists():
            temporary_path.unlink()


def source_for_first_build(image_name: str, image_path: Path) -> tuple[Image.Image, str, int] | None:
    """Recover a pre-existing target-sized file's original Git source after a partial run."""
    try:
        result = subprocess.run(
            ["git", "show", f"HEAD:project/images/{image_name}"],
            cwd=ROOT,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
        )
    except (OSError, subprocess.CalledProcessError):
        return None
    source_bytes = result.stdout
    source = Image.open(io.BytesIO(source_bytes))
    source.load()
    return source, hashlib.sha256(source_bytes).hexdigest(), len(source_bytes)


def build_entry(image_name: str, previous: dict[str, object] | None) -> dict[str, object]:
    image_path = IMAGE_DIR / image_name
    if not image_path.is_file():
        raise FileNotFoundError(f"Missing CG image: {image_path}")

    current_sha = sha256(image_path)
    expected_format = "jpeg" if previous and previous.get("sourceFormat", "").upper() in {"JPEG", "JPG"} else image_path.suffix.lower().lstrip(".")
    if (
        previous
        and previous.get("outputSha256") == current_sha
        and previous.get("outputSize") == list(OUTPUT_SIZE)
        and "sourceBytesBeforeCompression" in previous
        and previous.get("outputFormat") == expected_format
    ):
        return previous

    needs_git_source = (
        previous is None
        or "sourceBytesBeforeCompression" not in previous
        or previous.get("outputFormat") != expected_format
    )
    recovered = source_for_first_build(image_name, image_path) if needs_git_source else None
    if recovered is None:
        source_context = Image.open(image_path)
        source_context.load()
        source_sha = current_sha
        source_bytes = image_path.stat().st_size
    else:
        source_context, source_sha, source_bytes = recovered
    with source_context as source:
        source_size = source.size
        source_format = source.format
        source_mode = source.mode
        crop = centered_crop(source_size)
        encode_runtime(source, image_path)

    return {
        "image": image_name,
        "sourceSha256BeforeCompression": source_sha,
        "sourceBytesBeforeCompression": source_bytes,
        "sourceSize": list(source_size),
        "sourceFormat": source_format,
        "sourceMode": source_mode,
        "crop": list(crop),
        "outputSize": list(OUTPUT_SIZE),
        "outputFormat": "jpeg" if source_format in {"JPEG", "JPG"} or image_path.suffix.lower() in {".jpg", ".jpeg"} else "png",
        "jpegQuality": JPEG_QUALITY if source_format in {"JPEG", "JPG"} or image_path.suffix.lower() in {".jpg", ".jpeg"} else None,
        "outputSha256": sha256(image_path),
        "outputBytes": image_path.stat().st_size,
    }


def load_previous() -> dict[str, dict[str, object]]:
    if not MANIFEST_PATH.is_file():
        return {}
    data = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    return {entry["image"]: entry for entry in data.get("assets", [])}


def build() -> None:
    names = collect_cg_names()
    previous = load_previous()
    assets = [build_entry(name, previous.get(name)) for name in names]
    manifest = {
        "version": 1,
        "authority": "Story IR CG references are the input inventory; this manifest records runtime compression provenance.",
        "targetRatio": "16:11",
        "outputSize": list(OUTPUT_SIZE),
        "jpegQuality": JPEG_QUALITY,
        "assets": assets,
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Compressed {len(assets)} runtime CG assets to {OUTPUT_SIZE[0]}x{OUTPUT_SIZE[1]}.")
    print(f"Updated {MANIFEST_PATH.relative_to(ROOT)}.")


def check() -> None:
    if not MANIFEST_PATH.is_file():
        raise FileNotFoundError(f"Missing CG compression manifest: {MANIFEST_PATH}")
    data = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    expected_names = collect_cg_names()
    entries = {entry["image"]: entry for entry in data.get("assets", [])}
    if sorted(entries) != expected_names:
        raise ValueError("CG compression manifest does not match current Story IR references")
    for image_name in expected_names:
        image_path = IMAGE_DIR / image_name
        entry = entries[image_name]
        if not image_path.is_file():
            raise FileNotFoundError(f"Missing compressed CG image: {image_path}")
        with Image.open(image_path) as image:
            if image.size != OUTPUT_SIZE:
                raise ValueError(f"Wrong CG output size for {image_name}: {image.size}")
        if sha256(image_path) != entry.get("outputSha256"):
            raise ValueError(f"Compressed CG changed; rebuild required: {image_name}")
    print(f"Validated {len(expected_names)} compressed runtime CG assets.")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="validate compressed CGs without writing")
    args = parser.parse_args()
    check() if args.check else build()


if __name__ == "__main__":
    main()
