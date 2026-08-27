# 角色支線 ZIP 匯入實務閘門

這份文件整理角色支線 ZIP／DOCX 匯入中容易造成「素材已接入但劇情沒有真正更新」的失敗模式。它是 `archive-story-task-splitting.md` 的補充；遇到 ZIP 含有多份劇本、圖片或 DOCX 時，在開始素材配對前閱讀。

## 來源先落地，然後才做 IR

收到完整 ZIP／DOCX／TXT 新稿時，第一個內容步驟是把已驗收的完整權威來源新增或整檔覆蓋到 `project/story/`。不能先改素材、metadata、floor 或只建立新 IR，再回頭處理來源。既有角色也必須先完成完整來源覆蓋，再以新來源與舊來源比較章節、台詞、分歧與演出。

來源內容只能原樣落地。不能把 DOCX 和 TXT 的局部差異自行合併，不能潤稿、修錯字、重排段落或用既有 floor 反推來源。若完整版本、角色歸屬或覆蓋目標不明，停止該角色來源落地並建立 question／TODO。

## DOCX／TXT 提取與 encoding

DOCX 轉 TXT 必須直接解析 `word/document.xml` 的段落節點，保留 `w:p` 的段落邊界、空白段落、`w:br`／`w:cr` 換行與 `w:tab`。輸出固定為 UTF-8、無 BOM、LF-only；不可使用會把整個文件壓成單行的純文字抽取方式。

落地前後都要用明確 UTF-8 讀回驗收中文、標點、角色名、括號指令與段落順序。若來源實際是 CP950／Big5，必須記錄 fallback、轉成 UTF-8 後再計算落地 SHA-256；任何 replacement character、亂碼、文字型 `\\n` 或異常 BOM 都要讓來源驗收失敗，不能把亂碼內容送進 IR。

## 以檔名找候選，以劇情確認用途

圖片配對的第一個搜尋線索是原始檔名與相對路徑，因為檔名通常直接對應劇本中的 CG、背景、道具或角色名；但檔名不是單獨的證據。每張圖仍須和完整來源、`【CG】`／`【背景】`／動作描述、畫面內容、尺寸與同角色上下文交叉確認，並記錄目標 scene／事件。

在把圖片列為 `unknown` 前，必須重新掃描完整劇本的所有演出指令與圖片需求。`unknown/` 只代表確認沒有 scene 用途、也不是生成來源的額外圖；不能用它掩蓋尚未建立的 IR 圖片需求。劇本明確要求但 ZIP 沒有提供的 CG／背景，應在 IR／TODO 標記缺圖，不得自行創作接入。

## CG、立繪參考與背景的分流

- CG、背景、道具若本身就是完整畫面，確認用途後可直接使用，走 `project/images/ → main.images → Story IR → floor`。
- 立繪參考圖不是直接 runtime 立繪時，先以 `anime-expression-grid` 產生六表情表；只有實際被台詞情緒引用的表情才進入 `project/images/` 並登錄。生成來源、輸出與 scene 要保留血緣。
- 背景圖的專案預設是保留完整原圖，直接縮放到 AVG 畫布 `544×416`；不要默認中央裁切，也不要因比例不同自動改成 crop-to-fill。若需求改為等比例縮放加留白，必須明確記錄該場景的選擇，不可默默改變構圖。

## IR 是真正的劇情更新

新增或覆蓋來源後，必須完整閱讀來源並建立／更新 Story IR，將台詞、旁白、選項、分歧、流程、人物情緒、CG、背景、BGM、SE 與未解析指令寫成語意節點。只更新 `manifest.md`、`data.js`、素材或 floor 不算劇情更新。

每一個 IR 變更都必須在同一交易中由 validator／emitter 產生對應 scene／floor；不能直接手改 floor，也不能建立 IR-only commit。若目前只能完成骨架，必須把尚未轉換的來源範圍、缺少的演出素材與阻塞原因保留在 TODO，不能宣稱已完整轉換。

## 完成與提交檢查

交付前至少確認：

1. 來源檔為完整新增／整檔覆蓋版本，UTF-8／段落／SHA-256 已驗收。
2. 每張 ZIP 圖片都有 `direct`、`generated-source` 或 `unknown-todo` 分類，且用途、輸出與血緣可追溯。
3. 每個來源演出需求都有 IR 節點、正式素材或明確 TODO；未配對圖不是唯一的檢查方式。
4. Story IR、對應 floor、入口、圖片註冊與永久 manifest 同批更新。
5. 執行 `node scripts/validate_story.js`；成功才可宣稱交易驗證通過。

角色 ZIP 交易需要提交時，只有在劇情更新完成（本次更新邊界內所有 hash drift 均已解決）後，才可先提交包含來源／IR／floor／素材／入口／metadata 的內容 commit，再建立只更新 `AGENTS.md` 基準雜湊的 baseline commit；不要把基準更新混入內容 commit。內容 commit 不包含 validator-only、asset-only、TODO-only 或 task-question-only 修正；任何來源 SHA-256 mismatch、stale IR 或 hash drift（包括既有 drift）都表示劇情更新尚未完成，必須阻止內容與 baseline commit 推進。
