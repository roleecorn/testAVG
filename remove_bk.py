"""Remove character-image backgrounds with rembg's isnet-anime model.

The background is inferred by the segmentation model. This intentionally does
not classify pixels by green hue, connected components, edge contact, or region
size, because those rules can remove green details from the character.
"""

import argparse
import os
from io import BytesIO
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image

# rembg imports pymatting, whose optional numba kernels can spend several
# minutes compiling on a fresh environment. Alpha matting is intentionally
# disabled below, so disable that unused JIT path for predictable batch runs.
os.environ.setdefault("NUMBA_DISABLE_JIT", "1")

from rembg import new_session, remove


MODEL_NAME = "isnet-anime"
_SESSION = None
_SESSION_PROVIDERS: list[str] = []
_DLL_DIRECTORY_HANDLES = []


def get_session(cuda_dll_directory: str | None = None) -> tuple[object, list[str]]:
    """Create one local isnet-anime session and prefer CUDA execution."""

    global _SESSION, _SESSION_PROVIDERS

    if _SESSION is not None:
        return _SESSION, _SESSION_PROVIDERS

    available = ort.get_available_providers()
    if "CUDAExecutionProvider" not in available:
        raise RuntimeError(
            "CUDAExecutionProvider is not available. "
            f"Available providers: {available}"
        )

    if cuda_dll_directory:
        dll_directory = Path(cuda_dll_directory).resolve()
        if not dll_directory.is_dir():
            raise FileNotFoundError(f"CUDA DLL directory does not exist: {dll_directory}")
        if hasattr(os, "add_dll_directory"):
            _DLL_DIRECTORY_HANDLES.append(os.add_dll_directory(str(dll_directory)))
        if hasattr(ort, "preload_dlls"):
            ort.preload_dlls(directory=str(dll_directory))

    sess_opts = ort.SessionOptions()
    # The model is already exported for inference. Disabling graph rewriting
    # avoids a long CPU-only optimization pass before the first CUDA run.
    sess_opts.graph_optimization_level = ort.GraphOptimizationLevel.ORT_DISABLE_ALL
    sess_opts.intra_op_num_threads = 4
    sess_opts.inter_op_num_threads = 1
    # Do not silently place unsupported model nodes on the CPU provider.
    # The provider list may still display ORT's built-in CPU provider, but CPU
    # execution must be disabled for this GPU-only asset pipeline.
    sess_opts.add_session_config_entry("session.disable_cpu_ep_fallback", "1")

    # This host has a working GPU path. CPU fallback is forbidden for portrait
    # background removal because it can silently produce a CPU result after a
    # CUDA DLL/provider initialization problem.
    requested = ["CUDAExecutionProvider"]
    _SESSION = new_session(
        MODEL_NAME,
        sess_opts=sess_opts,
        providers=requested,
    )
    _SESSION_PROVIDERS = list(_SESSION.inner_session.get_providers())

    if not _SESSION_PROVIDERS or _SESSION_PROVIDERS[0] != "CUDAExecutionProvider":
        raise RuntimeError(
            "isnet-anime session did not initialize CUDA as the primary provider. "
            f"Session providers: {_SESSION_PROVIDERS}"
        )

    return _SESSION, _SESSION_PROVIDERS


def merge_original_alpha(source: Image.Image, result: Image.Image) -> Image.Image:
    """Keep any existing source alpha while applying the model alpha mask."""

    source_rgba = source.convert("RGBA")
    result_rgba = result.convert("RGBA")
    source_alpha = np.asarray(source_rgba.getchannel("A"), dtype=np.uint16)
    model_alpha = np.asarray(result_rgba.getchannel("A"), dtype=np.uint16)
    merged_alpha = ((source_alpha * model_alpha + 127) // 255).astype(np.uint8)
    result_rgba.putalpha(Image.fromarray(merged_alpha, mode="L"))
    return result_rgba


def remove_green_screen(
    input_path: str,
    output_path: str,
    preserve_original_alpha: bool = True,
    cuda_dll_directory: str | None = None,
) -> None:
    """Generate a transparent PNG using local GPU-backed isnet-anime."""

    input_file = Path(input_path)
    output_file = Path(output_path)
    if not input_file.is_file():
        raise FileNotFoundError(f"Cannot read image: {input_file}")

    session, providers = get_session(cuda_dll_directory=cuda_dll_directory)
    source = Image.open(input_file).convert("RGBA")
    result_bytes = remove(
        input_file.read_bytes(),
        session=session,
        alpha_matting=False,
        post_process_mask=False,
        only_mask=False,
    )
    result = Image.open(BytesIO(result_bytes)).convert("RGBA")

    if preserve_original_alpha:
        result = merge_original_alpha(source, result)

    output_file.parent.mkdir(parents=True, exist_ok=True)
    result.save(output_file, format="PNG")

    print(f"Saved: {output_file}")
    print(f"Model: {MODEL_NAME}")
    print(f"ONNX providers: {providers}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Remove a character-image background with rembg isnet-anime."
    )
    parser.add_argument("input", help="Path to the source image.")
    parser.add_argument("output", help="Path to the transparent PNG output.")
    parser.add_argument(
        "--ignore-original-alpha",
        action="store_true",
        help="Do not merge the input alpha channel into the model alpha.",
    )
    parser.add_argument(
        "--cuda-dll-directory",
        default=None,
        help="Optional directory containing CUDA DLLs used by onnxruntime-gpu.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    remove_green_screen(
        input_path=args.input,
        output_path=args.output,
        preserve_original_alpha=not args.ignore_original_alpha,
        cuda_dll_directory=args.cuda_dll_directory,
    )
