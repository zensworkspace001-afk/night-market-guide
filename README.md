# 🏮 台灣夜市小吃圖鑑

一個用 **CLAUDE.md / AGENTS.md 規則驅動** 的靜態網站：每道台灣夜市小吃是一張圖鑑卡＋一個介紹頁。

- 網站：https://zensworkspace001-afk.github.io/night-market-guide/
- AI 規則：[CLAUDE.md](./CLAUDE.md)（[AGENTS.md](./AGENTS.md) 指向它）

## 新增一道小吃

對 AI 說：「依照 CLAUDE.md，新增一道小吃：大腸包小腸」。AI 會：

1. 複製 `snacks/_template.html` → `snacks/<slug>.html` 並填好六個固定區塊
2. 在 `data/snacks.js` 登記索引資料
3. 首頁卡片、搜尋、分類篩選自動更新

## 本機預覽

直接用瀏覽器打開 `index.html` 即可（不需要伺服器或安裝任何套件）。
