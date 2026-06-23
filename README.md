# 橘時｜資金總覽（內部示範版）

這是一個可直接部署到 GitHub Pages 的靜態網頁，不連接銀行、付款或登入系統。

## 檔案

- `index.html`：網頁主畫面
- `style.css`：版面與 RWD 樣式
- `app.js`：按鈕、重新整理時間、隱藏金額與手機選單互動
- `favicon.svg`：頁籤圖示

## 上傳到 GitHub Pages

1. 開啟剛剛建立的 GitHub repository。
2. 點選 `uploading an existing file`。
3. 將本資料夾內的 4 個檔案全部拖進去並按 `Commit changes`。
4. 在 repository 上方點 `Settings` → 左側 `Pages`。
5. `Build and deployment` 選擇 `Deploy from a branch`。
6. Branch 選 `main`，資料夾選 `/ (root)`，按 `Save`。
7. 等待約 1–3 分鐘，GitHub Pages 會顯示公開網址。

## 修改資料

- 主要金額：在 `index.html` 搜尋 `22,257,251.00`
- 公司名稱：搜尋 `良呈橘時有限公司`
- 左側功能名稱、近期收支：可直接修改 `index.html` 的中文文字
