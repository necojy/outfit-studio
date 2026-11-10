# Outfit Studio｜男生穿搭靈感資料庫

Outfit Studio 是一個以繁體中文呈現的男生穿搭 Lookbook，整理季節穿搭、風格靈感與搭配技巧。

## 功能
- 穿搭卡片與圖片展示
- 春夏、秋冬篩選
- 簡約、斯文、休閒風格篩選
- 點擊卡片查看單品、配色與搭配技巧
- 支援桌面與手機版

## 本機預覽
直接用瀏覽器開啟 `index.html`，或使用 VS Code Live Server。

## GitHub Pages 部署
1. 建立一個 Public GitHub Repository，例如 `outfit-studio`。
2. 將本專案所有檔案上傳到 Repository 根目錄。
3. 進入 Settings → Pages。
4. Source 選擇 Deploy from a branch。
5. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
6. 等待部署完成，網址格式為 `https://你的帳號.github.io/outfit-studio/`。

## 如何新增穿搭
1. 閱讀 `AGENTS.md`。
2. 在 `content/outfits/` 新增一篇 Markdown。
3. 依照 `AGENTS.md` 的欄位格式，在 `assets/app.js` 的 `outfits` 陣列新增資料。
4. 確認首頁卡片、篩選與詳細資訊正常。

## AI 開發規範
每次修改前先閱讀 [`AGENTS.md`](AGENTS.md)，並遵守其中的內容格式、視覺與檢查規則。
