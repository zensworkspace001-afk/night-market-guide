// 首頁：依 data/snacks.js 產生卡片、搜尋與分類篩選
(function () {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const chips = document.getElementById("chips");
  if (!grid) return;

  let current = "全部";

  ["全部", ...CATEGORIES].forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip" + (cat === current ? " active" : "");
    b.textContent = cat;
    b.addEventListener("click", () => {
      current = cat;
      chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
      render();
    });
    chips.appendChild(b);
  });

  search.addEventListener("input", render);

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = SNACKS.filter((s) =>
      (current === "全部" || s.category === current) &&
      (!q || [s.name, s.en, s.tagline].join(" ").toLowerCase().includes(q))
    );
    grid.innerHTML = list.length
      ? list.map(card).join("")
      : '<p class="empty">找不到這道小吃，換個關鍵字試試 🏮</p>';
  }

  function card(s) {
    return `<a class="card" href="snacks/${s.slug}.html">
      <div class="emoji">${s.emoji}</div>
      <h3>${s.name}</h3>
      <div class="en">${s.en}</div>
      <p>${s.tagline}</p>
      <div class="meta"><span>${s.category}・${s.price}</span><span>${"🌶".repeat(s.spicy)}</span></div>
    </a>`;
  }

  render();
})();
