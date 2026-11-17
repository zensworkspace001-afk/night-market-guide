# AGENTS.md

本專案的完整 AI 開發規則寫在 **[CLAUDE.md](./CLAUDE.md)**，所有 AI agent（Codex、Cursor、Claude Code…）都請先閱讀並遵守該文件。

快速摘要：
- 純靜態 HTML/CSS/JS，不使用框架。
- 新增小吃 = 複製 `snacks/_template.html` → 填內容 → 在 `data/snacks.js` 登記。
- 顏色只能用 `assets/style.css` 的 CSS 變數；語言為繁體中文。
