// 唯一資料來源：新增小吃時在 SNACKS 陣列末尾加一筆（規則見 CLAUDE.md §4）
const CATEGORIES = ["鹹食", "甜品", "飲料", "炸物"];

const SNACKS = [
  {
    slug: "oyster-omelette",
    name: "蚵仔煎",
    en: "Oyster Omelette",
    emoji: "🦪",
    category: "鹹食",
    price: "NT$70–90",
    spicy: 0,
    tagline: "外酥內Q，淋上甜辣醬的夜市代表",
    added: "2026-11-17"
  },
  {
    slug: "bubble-tea",
    name: "珍珠奶茶",
    en: "Bubble Milk Tea",
    emoji: "🧋",
    category: "飲料",
    price: "NT$50–75",
    spicy: 0,
    tagline: "一口茶香一口Q彈，台灣之光",
    added: "2026-11-17"
  },
  {
    slug: "fried-chicken-cutlet",
    name: "雞排",
    en: "Fried Chicken Cutlet",
    emoji: "🍗",
    category: "炸物",
    price: "NT$80–100",
    spicy: 1,
    tagline: "比臉還大，撒上胡椒粉的邪惡美味",
    added: "2026-11-17"
  },
  {
    slug: "taro-balls",
    name: "芋圓",
    en: "Taro Balls",
    emoji: "🍡",
    category: "甜品",
    price: "NT$50–70",
    spicy: 0,
    tagline: "彩色 Q 彈小圓子，冷熱都好吃",
    added: "2026-11-17"
  }
];
