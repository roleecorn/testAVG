import argparse

import cv2
import numpy as np
from pathlib import Path


def remove_green_screen(
    input_path: str,
    output_path: str,
    hue_min: int = 35,
    hue_max: int = 90,
    saturation_min: int = 70,
    value_min: int = 40,
    edge_softness: int = 2,
    morph_size: int = 3,
    spill_strength: float = 0.7,
    preserve_original_alpha: bool = True,
):
    """
    移除單色綠幕背景，輸出透明 PNG。

    OpenCV HSV 範圍：
    - H: 0 ~ 179
    - S: 0 ~ 255
    - V: 0 ~ 255

    參數：
    - hue_min / hue_max:
        綠色 Hue 範圍。
        預設 35~90，可涵蓋一般黃綠、標準綠幕、藍綠色。

    - saturation_min:
        最低飽和度。
        數值越高，越不容易誤刪灰色、白色或低飽和綠色物件。

    - value_min:
        最低亮度。
        避免把非常暗的黑綠色區域誤判為背景。

    - edge_softness:
        Alpha 邊緣羽化程度。
        0 表示不羽化。

    - morph_size:
        Mask 修補 kernel 大小。
        建議 1、3 或 5。

    - spill_strength:
        綠色溢色抑制強度，範圍 0.0~1.0。
        0 表示不處理，1 表示較強地移除邊緣綠色。

    - preserve_original_alpha:
        若輸入圖片已有 Alpha channel，是否與新 Alpha 合併。
    """

    input_path = Path(input_path)
    output_path = Path(output_path)

    # 使用 IMREAD_UNCHANGED，保留可能存在的 Alpha channel
    img = cv2.imread(str(input_path), cv2.IMREAD_UNCHANGED)

    if img is None:
        raise FileNotFoundError(f"Cannot read image: {input_path}")

    # 分離原始 Alpha
    if img.ndim == 2:
        raise ValueError("Input image must be a color image.")

    if img.shape[2] == 4:
        bgr = img[:, :, :3]
        original_alpha = img[:, :, 3]
    elif img.shape[2] == 3:
        bgr = img
        original_alpha = np.full(
            bgr.shape[:2],
            255,
            dtype=np.uint8
        )
    else:
        raise ValueError(
            f"Unsupported channel count: {img.shape[2]}"
        )

    # 轉換到 HSV 色彩空間
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)

    lower_green = np.array(
        [hue_min, saturation_min, value_min],
        dtype=np.uint8
    )
    upper_green = np.array(
        [hue_max, 255, 255],
        dtype=np.uint8
    )

    # 綠色區域為 255，非綠色區域為 0
    green_mask = cv2.inRange(
        hsv,
        lower_green,
        upper_green
    )

    # 修補背景 Mask
    if morph_size > 1:
        kernel = np.ones(
            (morph_size, morph_size),
            dtype=np.uint8
        )

        # 填補綠幕中的小孔洞
        green_mask = cv2.morphologyEx(
            green_mask,
            cv2.MORPH_CLOSE,
            kernel
        )

        # 移除零星綠色雜點
        green_mask = cv2.morphologyEx(
            green_mask,
            cv2.MORPH_OPEN,
            kernel
        )

    # 綠色背景透明，其他區域不透明
    alpha = 255 - green_mask

    # 羽化 Alpha 邊緣
    if edge_softness > 0:
        kernel_size = edge_softness * 2 + 1

        alpha = cv2.GaussianBlur(
            alpha,
            (kernel_size, kernel_size),
            0
        )

    # 若原圖已有透明度，將兩者合併
    if preserve_original_alpha:
        alpha = cv2.multiply(
            alpha,
            original_alpha,
            scale=1 / 255.0
        )

    # 抑制主體邊緣的綠色溢色
    if spill_strength > 0:
        spill_strength = float(
            np.clip(spill_strength, 0.0, 1.0)
        )

        output_bgr = suppress_green_spill(
            bgr=bgr,
            alpha=alpha,
            strength=spill_strength
        )
    else:
        output_bgr = bgr.copy()

    output = cv2.dnn.blobFromImage(output_bgr)
    del output  # 僅避免某些環境下 OpenCV 延遲釋放，非必要

    # 合併 BGRA
    b, g, r = cv2.split(output_bgr)
    result = cv2.merge([b, g, r, alpha])

    output_path.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    success = cv2.imwrite(
        str(output_path),
        result
    )

    if not success:
        raise IOError(
            f"Failed to write image: {output_path}"
        )

    print(f"Saved: {output_path}")
    print(
        "Green HSV range: "
        f"H={hue_min}~{hue_max}, "
        f"S>={saturation_min}, "
        f"V>={value_min}"
    )


def suppress_green_spill(
    bgr: np.ndarray,
    alpha: np.ndarray,
    strength: float = 0.7,
) -> np.ndarray:
    """
    降低主體邊緣殘留的綠色。

    原理：
    當 G channel 明顯高於 R、B channel 時，
    將多餘的綠色壓低到接近 R/B 的平均值。

    主要處理半透明邊緣區域，避免破壞主體內部正常綠色。
    """

    result = bgr.astype(np.float32)

    b = result[:, :, 0]
    g = result[:, :, 1]
    r = result[:, :, 2]

    # R、B 平均值可視為非綠色基準
    non_green_reference = (r + b) / 2.0

    # 計算 G channel 多出的部分
    excess_green = np.maximum(
        g - non_green_reference,
        0
    )

    # 僅著重處理 Alpha 邊緣
    alpha_float = alpha.astype(np.float32) / 255.0

    # Alpha 越接近半透明，邊緣權重越高
    edge_weight = 1.0 - np.abs(
        alpha_float * 2.0 - 1.0
    )

    # 邊緣之外也保留少量處理能力
    spill_weight = (
        0.25 + 0.75 * edge_weight
    ) * strength

    g -= excess_green * spill_weight

    result[:, :, 1] = np.clip(
        g,
        0,
        255
    )

    return result.astype(np.uint8)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Remove green-screen background from a character image and output a transparent PNG."
    )
    parser.add_argument("input", help="Path to the source green-screen image.")
    parser.add_argument("output", help="Path to the transparent PNG output.")
    parser.add_argument("--hue-min", type=int, default=35)
    parser.add_argument("--hue-max", type=int, default=90)
    parser.add_argument("--saturation-min", type=int, default=70)
    parser.add_argument("--value-min", type=int, default=40)
    parser.add_argument("--edge-softness", type=int, default=2)
    parser.add_argument("--morph-size", type=int, default=3)
    parser.add_argument("--spill-strength", type=float, default=0.7)
    parser.add_argument(
        "--ignore-original-alpha",
        action="store_true",
        help="Do not merge the input alpha channel into the generated alpha.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    remove_green_screen(
        input_path=args.input,
        output_path=args.output,
        hue_min=args.hue_min,
        hue_max=args.hue_max,
        saturation_min=args.saturation_min,
        value_min=args.value_min,
        edge_softness=args.edge_softness,
        morph_size=args.morph_size,
        spill_strength=args.spill_strength,
        preserve_original_alpha=not args.ignore_original_alpha,
    )
