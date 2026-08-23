#!/usr/bin/env python3
"""Normalize an authoritative story text file to UTF-8 without BOM.

The ZIP intake may contain UTF-8 (with or without BOM) or legacy Taiwan
Big5/CP950 text. Decode the bytes first, then normalize only the transport
encoding and line endings; never rewrite wording or punctuation.
"""

from __future__ import annotations

import argparse
import unicodedata
from pathlib import Path


def decode_source(data: bytes) -> tuple[str, str]:
    if data.startswith(b"\xef\xbb\xbf"):
        return data.decode("utf-8-sig"), "utf-8-sig"
    try:
        return data.decode("utf-8"), "utf-8"
    except UnicodeDecodeError:
        return data.decode("cp950"), "cp950"


def normalize_story_text(path: Path) -> tuple[str, str]:
    text, encoding = decode_source(path.read_bytes())
    text = unicodedata.normalize("NFC", text)
    text = text.replace("\r\n", "\n").replace("\r", "\n").lstrip("\ufeff")
    return text, encoding


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    text, encoding = normalize_story_text(args.input)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(text, encoding="utf-8", newline="\n")
    data = args.output.read_bytes()
    if data.startswith(b"\xef\xbb\xbf") or b"\r" in data:
        raise RuntimeError("normalized output is not UTF-8 without BOM/LF-only")
    # Keep the intake log printable even when the host console is CP950 and
    # the path contains characters outside that console's code page.
    message = f"normalized {args.input} ({encoding}) -> {args.output}"
    print(message.encode("ascii", "backslashreplace").decode("ascii"))


if __name__ == "__main__":
    main()
