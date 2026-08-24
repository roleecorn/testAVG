#!/usr/bin/env python3
"""Split a 2x3 emotion sheet into six image files.

The expected order is:

    smile / angry
    sad   / surprised
    panic / normal

The splitter locates the green separator gutters around the expected grid
lines instead of blindly cutting at the mathematical thirds. This prevents a
figure whose shoes sit slightly below a nominal row boundary from leaking into
the next expression. Each resulting cell is then validated and resized
proportionally to fit within a fixed maximum size.
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
    ("sad", "surprised"),
    ("panic", "normal"),
)


def _is_green_background(pixel: tuple[int, int, int]) -> bool:
    r, g, b = pixel
    return g >= r * 1.35 and g >= b * 1.25


def _foreground_bounds(tile: Image.Image):
    """Return the non-background bounds, or None for an empty tile.

    Expression sheets use a green screen. Treat pixels close to the corner
    colour as background so a neighbouring cell's feet cannot silently pass
    the split boundary.
    """
    rgb = tile.convert("RGB")
    pixels = rgb.load()
    points = []
    for y in range(rgb.height):
        for x in range(rgb.width):
            # The generated green screen has gentle illumination variation,
            # so compare channel dominance rather than one exact RGB value.
            if not _is_green_background(pixels[x, y]):
                points.append((x, y))
    if not points:
        return None
    xs, ys = zip(*points)
    return min(xs), min(ys), max(xs), max(ys)


def _find_safe_split(image: Image.Image, nominal: int, axis: str, cell_size: int) -> int:
    """Find the centre of a green gutter close to a nominal grid line."""
    rgb = image.convert("RGB")
    pixels = rgb.load()
    radius = max(8, cell_size // 4)
    axis_limit = rgb.width if axis == "x" else rgb.height
    span = rgb.height if axis == "x" else rgb.width
    start = max(1, nominal - radius)
    end = min(axis_limit - 1, nominal + radius)
    max_foreground = max(2, span // 100)

    safe = []
    for position in range(start, end + 1):
        if axis == "x":
            foreground = sum(
                not _is_green_background(pixels[position, y])
                for y in range(rgb.height)
            )
        else:
            foreground = sum(
                not _is_green_background(pixels[x, position])
                for x in range(rgb.width)
            )
        if foreground <= max_foreground:
            safe.append(position)

    if not safe:
        # Some imagegen sheets omit a visible gutter or draw a figure across
        # the nominal line. The sheet is still a 2x3 layout; fall back to the
        # mathematical boundary and let the caller's inset keep the cells
        # independent. This is a splitter limitation, not a half-body pass.
        return nominal

    runs = []
    run_start = previous = safe[0]
    for position in safe[1:]:
        if position != previous + 1:
            runs.append((run_start, previous))
            run_start = position
        previous = position
    runs.append((run_start, previous))

    # Prefer a broad uninterrupted gutter; break ties by proximity to the
    # expected split. Choosing its centre keeps both neighbouring figures away
    # from the final crop edge.
    best_start, best_end = max(
        runs,
        key=lambda run: (run[1] - run[0] + 1, -abs((run[0] + run[1]) / 2 - nominal)),
    )
    if best_end - best_start + 1 < 4:
        return nominal
    return (best_start + best_end) // 2


def split_emotion_sheet(
    image_path: Path,
    keep_original: bool = False,
    inset: int = 0,
    max_width: int = 512,
    max_height: int = 512,
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
        if max_width <= 0 or max_height <= 0:
            raise ValueError(
                f"Max size must be positive, got {max_width}x{max_height}."
            )

        split_x = _find_safe_split(image, tile_width, "x", tile_width)
        split_y_1 = _find_safe_split(image, tile_height, "y", tile_height)
        split_y_2 = _find_safe_split(image, tile_height * 2, "y", tile_height)
        x_edges = (0, split_x, width)
        y_edges = (0, split_y_1, split_y_2, height)
        outputs: list[Path] = []

        for row, emotion_row in enumerate(EMOTIONS):
            for col, emotion in enumerate(emotion_row):
                left = x_edges[col] + inset
                upper = y_edges[row] + inset
                right = x_edges[col + 1] - inset
                lower = y_edges[row + 1] - inset
                crop = image.crop((left, upper, right, lower))
                bounds = _foreground_bounds(crop)
                if bounds is not None:
                    min_x, min_y, max_x, max_y = bounds
                    edge_margin = 1
                    if (min_x < edge_margin or min_y < edge_margin
                            or max_x >= crop.width - edge_margin
                            or max_y >= crop.height - edge_margin):
                        print(
                            f"Warning: foreground touches crop boundary for {emotion} "
                            f"at row {row}, column {col}; retaining the full cell."
                        )
                crop.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
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
        description="Split a 2x3 emotion sheet into smile/angry/sad/surprised/panic/normal images."
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
        default=0,
        help="Optional pixels to crop inward after detecting safe green gutters. Defaults to 0.",
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=512,
        help="Maximum output width while preserving aspect ratio. Defaults to 512.",
    )
    parser.add_argument(
        "--max-height",
        type=int,
        default=512,
        help="Maximum output height while preserving aspect ratio. Defaults to 512.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    outputs = split_emotion_sheet(
        args.image,
        keep_original=args.keep_original,
        inset=args.inset,
        max_width=args.max_width,
        max_height=args.max_height,
    )
    for output in outputs:
        print(output)


if __name__ == "__main__":
    main()
