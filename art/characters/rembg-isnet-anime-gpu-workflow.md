# rembg + isnet-anime 去背與 GPU 流程

本文件記錄本專案目前正式立繪採用的去背方法。流程使用 `rembg` 的 `isnet-anime` ONNX 模型進行人物前景分割，並由 ONNX Runtime 的 CUDA Execution Provider 優先使用 GPU。

## 1. 流程目的與原則

舊流程以綠幕像素顏色、HSV 範圍、Connected Component、區域大小、是否接觸圖片邊界及 morphology 判斷背景。這些規則可能把人物身上的綠色內容、局部相連區域或邊緣誤判為背景，因此目前不再使用。

目前的原則是讓動漫人物分割模型判斷人物與背景的前景遮罩，而不是刪除所有「看起來像綠色」的像素：

```text
生成的綠幕角色表 → 保留綠幕進行表情切分 → isnet-anime 前景分割 → RGBA PNG → 視覺與技術驗證 → 素材接入
```

`remove_bk.py` 不使用寬泛的綠色 HSV threshold、Connected Component、區域大小判定或 morphology 補償。即使人物服裝或配件含有綠色，只要模型判定為人物內容，就應保留。

## 2. 實際處理順序

### 2.1 先切分綠幕表情表

`split_emotion_image.py` 需要依賴綠幕與表格間隔來定位六個表情，因此切分必須在去背前完成。這裡的綠色判定只用於找表格分隔與切分範圍，不參與最後的人物 alpha 判定。切分結果是中間產物，不作為正式 runtime 素材。

```powershell
python split_emotion_image.py `
  art/characters/huihui/huihui_expression_sheet.png `
  --keep-original
```

實際輸出會包含 `*_expression_sheet_<emotion>.png`。這些檔案仍帶有綠幕，僅供下一步去背使用，並由 `.gitignore` 排除。

### 2.2 使用 isnet-anime 去背

`remove_bk.py` 會：

1. 載入本機快取的 `isnet-anime.onnx`。
2. 建立 ONNX Runtime session，要求 `CUDAExecutionProvider` 可用。
3. 呼叫 `rembg.remove()` 取得人物 alpha mask。
4. 保留輸入圖既有 alpha（除非使用 `--ignore-original-alpha`），並與模型 alpha 合併。
5. 以 RGBA PNG 輸出，透明背景由 alpha channel 表示。

程式目前關閉 alpha matting 及 mask post-process，避免額外後處理掩蓋模型分割問題：

```text
alpha_matting=False
post_process_mask=False
```

### 2.3 接入正式素材

去背後的 RGBA PNG 才是正式成品。需要顯示的表情才輸出到 `project/images/`，並在 `project/data.js` 的 `main.images` 登錄；完整角色主檔與已生成但暫未使用的表情保留在 `art/characters/<character-id>/`。

## 3. GPU 環境

### 3.1 必要套件

在執行本專案所使用的 Python 環境安裝：

```powershell
python -m pip install "rembg[gpu]" pillow numpy
```

`rembg[gpu]` 會安裝 GPU 版 ONNX Runtime；真正的推論 provider 仍須由執行環境確認。若環境之前安裝過 `rembg[cpu]`，安裝完成後必須確認實際匯入的 `onnxruntime` 能列出 `CUDAExecutionProvider`，不可只依套件名稱判斷。

### 3.2 確認 CUDA provider

```powershell
python -c "import onnxruntime as ort; print('device=', ort.get_device()); print('providers=', ort.get_available_providers())"
```

成功的環境應至少包含：

```text
device= GPU
providers= [..., 'CUDAExecutionProvider', 'CPUExecutionProvider']
```

本專案已驗證可用的 CUDA DLL 來源目錄為：

```text
D:\coding\ai-models\ComfyUI\app\.venv\Lib\site-packages\torch\lib
```

這個目錄只作為 ONNX Runtime 載入 CUDA runtime DLL 的來源，不代表去背推論使用 ComfyUI，也不改變本專案的圖片生成流程。其他電腦應改成該電腦實際存在、且包含相容 CUDA DLL 的目錄。

### 3.3 模型快取

首次建立 `isnet-anime` session 時，`rembg` 會下載或使用模型快取。此次驗證使用的模型檔為：

```text
C:\Users\jeff7\.rembg\models\isnet-anime\isnet-anime.onnx
```

不同使用者的快取根目錄可能不同；重點是模型名稱必須是 `isnet-anime`，不可改回一般 `u2net` 或其他模型而未重新驗證效果。

## 4. 單張圖片 GPU 指令

PowerShell 範例：

```powershell
python remove_bk.py `
  art/characters/huihui/huihui_expression_sheet_normal.png `
  art/characters/huihui/huihui_normal.png `
  --cuda-dll-directory "D:\coding\ai-models\ComfyUI\app\.venv\Lib\site-packages\torch\lib"
```

也可以寫成單行：

```powershell
python remove_bk.py art/characters/huihui/huihui_expression_sheet_normal.png art/characters/huihui/huihui_normal.png --cuda-dll-directory "D:\coding\ai-models\ComfyUI\app\.venv\Lib\site-packages\torch\lib"
```

正常啟動時，輸出應包含：

```text
Model: isnet-anime
ONNX providers: ['CUDAExecutionProvider', 'CPUExecutionProvider']
```

其中 `CPUExecutionProvider` 是 provider fallback 順序的一部分；目前程式會先檢查 CUDA provider 是否存在，若 CUDA provider 無法取得會直接失敗，不會靜默退回純 CPU 批次處理。

## 5. 批次處理

批次處理應在同一個 Python process 中建立一次 session，讓模型只載入一次。下面範例會處理三個角色資料夾中所有切分後的中間圖，並輸出同名正式 PNG：

```powershell
python -u -c "from pathlib import Path; import remove_bk; root=Path('art/characters'); dll=r'D:\coding\ai-models\ComfyUI\app\.venv\Lib\site-packages\torch\lib'; jobs=[]; [jobs.append((p, p.with_name(p.name.replace('_expression_sheet_', '_')))) for character in ('huihui', 'laidao_cheng', 'liyan') for p in sorted((root / character).glob('*_expression_sheet_*.png'))]; print('jobs=', len(jobs)); [remove_bk.remove_green_screen(str(source), str(target), cuda_dll_directory=dll) for source, target in jobs]"
```

批次完成後，應逐張檢查輸出檔案是否為 RGBA，並目視檢查頭髮、衣服、手、配件與人物邊緣。`*_expression_sheet_<emotion>.png` 是綠幕中間產物，不應誤當成正式立繪提交。

## 6. GPU 啟動失敗時的檢查順序

1. 確認目前執行 `remove_bk.py` 的 Python，與安裝 `onnxruntime-gpu` 的 Python 是同一個環境。
2. 執行 `ort.get_available_providers()`，確認包含 `CUDAExecutionProvider`。
3. 使用 `--cuda-dll-directory` 指向實際存在的 CUDA DLL 目錄。
4. 確認 NVIDIA driver、CUDA runtime 與 `onnxruntime-gpu` 版本相容。
5. 確認啟動輸出同時顯示 `Model: isnet-anime` 與 `CUDAExecutionProvider`。

程式在載入 rembg 前設定 `NUMBA_DISABLE_JIT=1`，是為了避免 alpha matting 相關依賴在首次匯入時觸發不必要的 Numba JIT；這不會把 ONNX Runtime 推論切換成 CPU。alpha matting 本身目前保持關閉。

## 7. 成品驗證

### 技術驗證

```powershell
python -m py_compile remove_bk.py
git diff --check
```

每個正式輸出至少應符合：

- 圖片模式為 `RGBA`。
- alpha channel 存在，且人物不是整張透明。
- 輸出檔沒有把人物主體大塊刪除。
- 不再出現由寬泛綠色判定造成的綠光圈或人物內部鏤空。

### 專案接入驗證

```powershell
node scripts/validate_story_source.js
node scripts/generate_main_story.js --check
node scripts/validate_story.js
```

若只是更換圖片而沒有修改來源、Story IR 或 floor，仍應至少執行素材存在性檢查及 `git diff --check`；若同時調整角色語意表情或劇情接入，則必須通過完整主線驗證。

## 8. 不應恢復的舊補償機制

若結果仍有邊緣問題，應先檢查輸入圖、模型分割結果、圖片尺寸及 GPU／模型版本，不要直接重新加入下列規則來「修掉」結果：

- 以 `H=35~90` 或其他寬泛 HSV 範圍刪除綠色。
- 依圖片邊界接觸判定背景。
- 依 Connected Component、面積或連通性刪除區域。
- 以 morphology 膨脹／侵蝕補償錯誤遮罩。
- 未確認成因就以 color spill／綠光圈規則刪除人物邊緣。

這些方法會把「背景顏色判定錯誤」掩蓋成另一個素材損壞問題，與目前以 `isnet-anime` 進行人物分割的流程不一致。
