#!/usr/bin/env python3
"""Deterministically extract Word document body text to UTF-8 text.

Contract for character-story intake:
- read only word/document.xml from the supplied DOCX;
- preserve w:p paragraph order and empty paragraphs;
- preserve w:br/w:cr as in-paragraph newlines and w:tab as tabs;
- emit UTF-8 without BOM and Unix newlines;
- never serialize the escape sequence ``\\n`` for a paragraph break.
"""

from __future__ import annotations

import argparse
import unicodedata
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
W = f"{{{W_NS}}}"


def extract_docx(path: Path) -> str:
    with zipfile.ZipFile(path) as archive:
        try:
            xml = archive.read("word/document.xml")
        except KeyError as exc:
            raise ValueError(f"missing word/document.xml: {path}") from exc

    root = ET.fromstring(xml)
    paragraphs: list[str] = []
    body = root.find(f"{W}body")
    if body is None:
        raise ValueError(f"missing document body: {path}")

    for paragraph in body.iter(f"{W}p"):
        parts: list[str] = []
        for node in paragraph.iter():
            if node.tag == f"{W}t":
                parts.append(node.text or "")
            elif node.tag in (f"{W}br", f"{W}cr"):
                parts.append("\n")
            elif node.tag == f"{W}tab":
                parts.append("\t")
        paragraphs.append("".join(parts))

    # XML parsing gives us Unicode; NFC avoids visually identical but byte-
    # different Chinese punctuation/diacritics without changing wording.
    text = unicodedata.normalize("NFC", "\n".join(paragraphs))
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.lstrip("\ufeff")
    # A broken earlier extractor emitted literal backslash-n separators. This
    # is intentionally handled only at paragraph boundaries by this extractor;
    # content from the DOCX is never post-processed with a global replacement.
    return text


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    text = extract_docx(args.input)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(text, encoding="utf-8", newline="\n")
    data = args.output.read_bytes()
    if data.startswith(b"\xef\xbb\xbf"):
        raise RuntimeError("extractor emitted UTF-8 BOM")
    if b"\r" in data:
        raise RuntimeError("extractor emitted CR characters")
    print(f"extracted {args.input} -> {args.output} ({len(data)} bytes, {text.count(chr(10))} newlines)")


if __name__ == "__main__":
    main()
