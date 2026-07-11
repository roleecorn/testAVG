#!/usr/bin/env python3
"""Split a 2x3 emotion sheet into six image files.

The expected order is:

    smile / angry
    sad   / happy
    surprised / panic

Each grid cell is cropped inward by a small inset to avoid colored borders.
Output files are written next to the source image as:
<original_stem>_<emotion><original_suffix>

The source image is deleted only after every output file is saved.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


EMOTIONS = (
    ("smile", "angry"),
    ("sad", "happy"),
    ("surprised", "panic"),
)


def split_emotion_sheet(
    image_path: Path, keep_original: bool = False, inset: int = 10
) -> list[Path]:
    image_path = image_path.expanduser().resolve()
    if not image_path.is_file():
        raise FileNotFoundError(f"Image not found: {image_path}")

    with Image.open(image_path) as image:
        width, height = image.size
        if width % 2 != 0 or height % 3 != 0:
            raise ValueError(
                f"Image size must be divisible into a 2x3 grid, got {width}x{height}."
            )

        tile_width = width // 2
        tile_height = height // 3
        if inset < 0:
            raise ValueError(f"Inset must be greater than or equal to 0, got {inset}.")
        if inset * 2 >= tile_width or inset * 2 >= tile_height:
            raise ValueError(
                f"Inset {inset} is too large for tile size {tile_width}x{tile_height}."
            )

        outputs: list[Path] = []

        for row, emotion_row in enumerate(EMOTIONS):
            for col, emotion in enumerate(emotion_row):
                left = col * tile_width + inset
                upper = row * tile_height + inset
                right = (col + 1) * tile_width - inset
                lower = (row + 1) * tile_height - inset
                crop = image.crop((left, upper, right, lower))
                output_path = image_path.with_name(
                    f"{image_path.stem}_{emotion}{image_path.suffix}"
                )
                crop.save(output_path)
                outputs.append(output_path)

    if not keep_original:
        image_path.unlink()

    return outputs


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Split a 2x3 emotion sheet into smile/angry/sad/happy/surprised/panic images."
    )
    parser.add_argument("image", type=Path, help="Path to the source image.")
    parser.add_argument(
        "--keep-original",
        action="store_true",
        help="Keep the source image after splitting. By default it is deleted after success.",
    )
    parser.add_argument(
        "--inset",
        type=int,
        default=10,
        help="Pixels to crop inward from each side of every tile. Defaults to 10.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    outputs = split_emotion_sheet(
        args.image, keep_original=args.keep_original, inset=args.inset
    )
    for output in outputs:
        print(output)


if __name__ == "__main__":
    main()
