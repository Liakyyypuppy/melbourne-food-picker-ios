const restaurants = [
  {
    "name": "Campus Canteen",
    "category": "校内快吃",
    "area": "University of Melbourne Parkville · 201 Grattan St",
    "special": "当日热餐、学生价主食、米饭类套餐",
    "reason": "不想走远，这是低决策成本选项。适合赶课、赶作业。",
    "order": "看当天 rotating meals，优先选带主菜和米饭的热餐。",
    "tags": [
      "campus",
      "quick",
      "budget"
    ],
    "vibe": "近、实用、学生友好"
  },
  {
    "name": "Alleyway Kitchen UOM",
    "category": "校内中餐/亚洲菜",
    "area": "Eastern Resource Centre, University of Melbourne Parkville",
    "special": "饺子、馄饨、点心、面食、炒菜/盖饭类",
    "reason": "墨大校内，适合想吃中餐但不想出校的一天。",
    "order": "饺子、馄饨或一份主食类中餐。",
    "tags": [
      "campus",
      "quick",
      "chinese",
      "budget"
    ],
    "vibe": "校内、中餐、方便"
  },
  {
    "name": "Cafe 723",
    "category": "校内轻食/饺子",
    "area": "Melbourne Dental Clinic, 723 Swanston St, Carlton",
    "special": "饺子、冷饮、甜食、素食选择",
    "reason": "校内餐饮点，适合上课日快速解决。",
    "order": "饺子 + 冷饮，或者当天甜食。",
    "tags": [
      "campus",
      "quick",
      "budget",
      "dessert"
    ],
    "vibe": "简单、近、课间可用"
  },
  {
    "name": "Axil Coffee Roasters",
    "category": "咖啡/轻食",
    "area": "University of Melbourne Parkville",
    "special": "咖啡、pastry、toastie/jaffle 类轻食",
    "reason": "适合早八、赶论文、只想喝咖啡续命的时候。",
    "order": "咖啡 + pastry 或 toastie。",
    "tags": [
      "campus",
      "quick",
      "brunch",
      "dessert"
    ],
    "vibe": "咖啡、轻食、学习续命"
  },
  {
    "name": "Professor’s Walk Café",
    "category": "校内意式咖啡",
    "area": "Baillieu Library, University of Melbourne Parkville",
    "special": "意式咖啡、三明治、轻食",
    "reason": "在图书馆附近，适合学习间隙买咖啡或轻食。",
    "order": "Latte / flat white + sandwich。",
    "tags": [
      "campus",
      "quick",
      "brunch"
    ],
    "vibe": "图书馆附近、安静补给"
  },
  {
    "name": "Scholar & Co",
    "category": "咖啡/贝果",
    "area": "757 Swanston St, University of Melbourne",
    "special": "咖啡、bagel、轻食",
    "reason": "适合早午餐或课前带走。",
    "order": "Bagel + coffee。",
    "tags": [
      "campus",
      "quick",
      "brunch",
      "budget"
    ],
    "vibe": "轻快、适合带走"
  },
  {
    "name": "Brunetti Classico",
    "category": "甜品/咖啡/意式糕点",
    "area": "380 Lygon St, Carlton",
    "special": "Cannoli、tiramisu、小蛋糕、gelato、咖啡",
    "reason": "甜品选择多，适合饭后、下午茶、拍照和甜咸收尾。",
    "order": "Cannoli 或 tiramisu + coffee。",
    "tags": [
      "dessert",
      "italian",
      "date"
    ],
    "vibe": "甜品丰富、经典、适合拍照"
  },
  {
    "name": "Tiamo",
    "category": "Lygon Street 经典意餐",
    "area": "303 Lygon St, Carlton",
    "special": "意面、lasagna、risotto、arancini",
    "reason": "Carlton 老牌意餐，适合不想踩雷的一顿 Lygon Street 晚饭。",
    "order": "Lasagna 或一份 pasta，适合聚会。",
    "tags": [
      "italian",
      "date",
      "budget"
    ],
    "vibe": "经典、热闹、Carlton 感"
  },
  {
    "name": "University Cafe",
    "category": "Lygon Street 意餐/咖啡",
    "area": "257 Lygon St, Carlton",
    "special": "Pizza、pasta、咖啡、甜点",
    "reason": "传统 Lygon Street 氛围，适合 casual dinner 或逛完街坐下吃。",
    "order": "Pizza 或 pasta。",
    "tags": [
      "italian",
      "date",
      "budget"
    ],
    "vibe": "老派、轻松、适合聊天"
  },
  {
    "name": "D.O.C Pizza & Mozzarella Bar",
    "category": "意式披萨",
    "area": "295 Drummond St, Carlton",
    "special": "Napoli 风格披萨、mozzarella、意式前菜",
    "reason": "想吃更讲究一点的披萨时选它，适合周末或拍照约饭。",
    "order": "Margherita 或 mushroom/porcini 方向的 pizza。",
    "tags": [
      "italian",
      "date"
    ],
    "vibe": "意式、精致、适合分享"
  },
  {
    "name": "Da Guido La Pasta",
    "category": "手工意面",
    "area": "130 Lygon St, Carlton",
    "special": "手工 pasta、gnocchi、tiramisu",
    "reason": "想认真吃一顿 pasta，又不想太冒险时选。",
    "order": "Gnocchi 或 handmade pasta + tiramisu。",
    "tags": [
      "italian",
      "date"
    ],
    "vibe": "正式一点、意面主场"
  },
  {
    "name": "Lagoon Dining",
    "category": "现代中式/亚洲融合",
    "area": "263 Lygon St, Carlton",
    "special": "Kimchi fried rice、炒牛肉、Feed Me menu",
    "reason": "想吃中式灵感但又不想太日常时选它，比较适合 dinner。",
    "order": "Kimchi fried rice 或 Feed Me menu。",
    "tags": [
      "spicy",
      "chinese",
      "date"
    ],
    "vibe": "有氛围、现代亚洲菜、适合拍照"
  },
  {
    "name": "HWATU",
    "category": "韩式辣味",
    "area": "Lygon St, Carlton",
    "special": "Army hotpot、spicy chicken feet、韩式下酒菜",
    "reason": "这家适合想吃热闹、重口、韩式辣味的一晚。",
    "order": "Army hotpot 或 spicy chicken feet。",
    "tags": [
      "spicy",
      "chinese",
      "date"
    ],
    "vibe": "韩式、热闹、重口"
  },
  {
    "name": "Ying Thai 2",
    "category": "泰餐",
    "area": "110 Lygon St, Carlton",
    "special": "Pad Thai、泰式咖喱、stir-fry、酸辣汤类",
    "reason": "酸辣甜咸都能覆盖，适合想吃有味道但又不想太正式的一餐。",
    "order": "Pad Thai、green curry 或辣味 stir-fry。",
    "tags": [
      "spicy",
      "chinese",
      "budget"
    ],
    "vibe": "泰式、下饭、学生友好"
  },
  {
    "name": "Kazuki's",
    "category": "日式现代餐厅",
    "area": "121 Lygon St, Carlton",
    "special": "Tasting menu、日式现代料理、精致甜点",
    "reason": "更适合特别一点的晚餐，不是日常随便吃，但适合庆祝或精致约饭。",
    "order": "Tasting menu / set menu。",
    "tags": [
      "date"
    ],
    "vibe": "精致、安静、正式"
  },
  {
    "name": "Lambs on Lygon Street",
    "category": "希腊 Souvlaki",
    "area": "98–100 Lygon St, Carlton",
    "special": "Souvlaki、烤肉卷、炭烤肉类",
    "reason": "想吃扎实、快、不会太贵的肉类主食时选它。",
    "order": "Lamb souvlaki 或 chicken souvlaki。",
    "tags": [
      "quick",
      "budget"
    ],
    "vibe": "扎实、快、夜宵感"
  },
  {
    "name": "GLO Gelato",
    "category": "Gelato",
    "area": "131 Lygon St, Carlton",
    "special": "Gelato、sorbet、季节口味",
    "reason": "适合饭后补一个甜品，也适合不想正经吃饭、只想快乐一下。",
    "order": "选当天口味，坚果、巧克力或水果 sorbet 都适合。",
    "tags": [
      "dessert",
      "date"
    ],
    "vibe": "轻松、可爱、饭后散步"
  },
  {
    "name": "Yo-Chi",
    "category": "Frozen Yogurt",
    "area": "194 Faraday St, Carlton",
    "special": "Frozen yogurt、自选水果、巧克力、坚果、饼干 topping",
    "reason": "自选 topping 很适合甜咸搭配，也很适合拍照。",
    "order": "酸奶基底 + 水果 + 脆脆 topping。",
    "tags": [
      "dessert",
      "date"
    ],
    "vibe": "可爱、可拍、轻互动"
  },
  {
    "name": "The Borek Shop",
    "category": "Queen Vic Market 小吃",
    "area": "Queen Victoria Market",
    "special": "Spicy lamb borek、cheese & spinach borek",
    "reason": "从 Scape Peel 去 Queen Vic Market 很顺路，适合快、热乎的小吃。",
    "order": "Spicy lamb borek。",
    "tags": [
      "qvm",
      "quick",
      "budget",
      "spicy"
    ],
    "vibe": "市场小吃、热乎"
  },
  {
    "name": "The Bratwurst Shop & Co",
    "category": "Queen Vic Market 德式热狗",
    "area": "Queen Victoria Market Dairy Produce Hall",
    "special": "Bratwurst、German sausage、hot dog",
    "reason": "市场日很适合边逛边吃，想吃咸口肉类时选它。",
    "order": "Classic bratwurst with mustard。",
    "tags": [
      "qvm",
      "quick",
      "budget"
    ],
    "vibe": "市场感、咸口、边走边吃"
  },
  {
    "name": "Koya Teppan & Ramen",
    "category": "Queen's Food Hall 日式",
    "area": "Queen Victoria Market · Queen's Food Hall",
    "special": "Ramen、teppan、日式热食",
    "reason": "想在 QVM Food Hall 坐下吃热食时可以选。",
    "order": "Ramen 或 teppan rice。",
    "tags": [
      "qvm",
      "quick",
      "chinese"
    ],
    "vibe": "热食、方便、市场内"
  },
  {
    "name": "Canton Malay",
    "category": "Queen's Food Hall 亚洲菜",
    "area": "Queen Victoria Market · Queen's Food Hall",
    "special": "马来/粤式风味热食、米饭类、面食类",
    "reason": "想吃亚洲口味，又在 QVM 附近时可以放进候选。",
    "order": "咖喱/米饭类或炒面类热食。",
    "tags": [
      "qvm",
      "quick",
      "chinese",
      "spicy"
    ],
    "vibe": "亚洲菜、热食、方便"
  },
  {
    "name": "El Rincon Tapas Bar",
    "category": "Queen's Food Hall 西班牙小食",
    "area": "Queen Victoria Market · Queen's Food Hall",
    "special": "Tapas、Spanish small plates",
    "reason": "适合想在市场里吃点不一样的，尤其适合轻松约饭。",
    "order": "Tapas sharing plates。",
    "tags": [
      "qvm",
      "date"
    ],
    "vibe": "西班牙小食、适合分享"
  },
  {
    "name": "Operator25",
    "category": "Brunch / Cafe",
    "area": "25 Wills St, Melbourne",
    "special": "Brunch、coffee、Asian-inspired cafe dishes",
    "reason": "从 Scape Peel 往 CBD 北侧走可达，适合 brunch、拍照和不想吃太重的一天。",
    "order": "Brunch dish + coffee。",
    "tags": [
      "brunch",
      "date"
    ],
    "vibe": "早午餐、拍照、城市感"
  },
  {
    "name": "Market Lane Coffee",
    "category": "咖啡",
    "area": "Queen Victoria Market / Therry St 一带",
    "special": "Specialty coffee、filter coffee、espresso",
    "reason": "逛 Queen Vic Market 或去学校前想喝咖啡，可以把它作为轻量选项。",
    "order": "Flat white 或 filter coffee。",
    "tags": [
      "qvm",
      "quick",
      "brunch"
    ],
    "vibe": "精品咖啡、轻量补给"
  },
  {
    "name": "Shujinko Russell St",
    "category": "日式拉面",
    "area": "225 Russell St, Melbourne",
    "special": "豚骨拉面、黑蒜油拉面、煎饺",
    "reason": "想吃热汤面时很合适。",
    "order": "Tonkotsu ramen 或 black ramen + gyoza。",
    "tags": [
      "quick",
      "chinese",
      "budget"
    ],
    "vibe": "热汤、快、适合冷天"
  }
];

let currentFilter = "all";

const resultCard = document.getElementById("resultCard");
const grid = document.getElementById("restaurantGrid");
const chips = document.querySelectorAll(".chip");
const dogLine = document.getElementById("dogLine");

// const dogLines = [
//   "旺仔闻了闻地图，决定这家可以~",
//   "旺仔说：这家听起来比较香，嘻嘻",
//   "旺仔表示：不要纠结，就吃这个！！！",
//   "旺仔今日推荐已生成，尾巴正在摇摇摇",
//   "旺仔认为：这顿饭可以进入候选清单。"
// ];
const dogLines = [
  "于是有人喊了一句「觉得小狗可爱的请举手」，然后世界变成了一个刺猬。",
  "我是饺子型人格，吃点醋怎么了≧∇≦！",
  "任何人来干扰我做事，我都会停下和他玩一会。",
  "如果你看扁我，我就扁扁地走开。",
  "如果你小瞧我，我就小小地走开。",
  "如果你惹毛我，我就毛茸茸地走开。",
  "如果你惹急我，我就急急地走开。",
  "如果你惹火了我，我就变得火辣辣。",
  "如果你打倒了我，我就躺下来睡大觉。",
  "装可爱好难，但幸好，我是真的爱装๑> <๑",
  "我这一生如绿豆冰。",
  "我常常毫无原因的犒劳自己。",
  "好汉不提当年勇，但提拉米苏。",
  "《你要吃出什么样的人生》",
  "我真是披萨心肠的一个人。",
  "很内向，吃饱了也不说，一直吃。",
  "一年四季：春肥、夏胖、秋膘、冬圆。",
  "人生得意须尽吃，不然空腹站不直。",
  "半夜肚子痛赶紧去医院，急诊医生诊断出「我饿了」。",
  "我也不懂啊，腿累进来坐坐，一坐下来就给我上菜了。",
  "没有人会一直喜欢你，除非你是意大利经典香浓芝士肉酱千层面。",
  "眼泪要是能变成泡芙就好了，每掉一颗眼泪就变成一个泡芙，这样就算一直流眼泪，后知后觉就会发现自己被泡芙包围了。",
  "命运就算冰糖雪梨，命运就算黄油曲奇，命运就算教会你我做人要美味。白天吃汉堡，晚上吃炸鸡，我愿我一生相伴土豆泥。",
  "做生活的嚼嚼者。",
  "我的嘴巴一直在下雨，我处理不好。",
  "我不能为你上天揽月，但可以为你下海底捞夹肥牛、毛肚、虾滑、黄喉、鸭掌。",
  "宝宝吃菌菇的时候一定要小心，尤其是十年后，因为菌子报仇十年不晚。",
  "鱿鱼总会败北。",
  "小腹三层，非一日之馋。"
];

function pickRestaurant(byDog = false) {
  const pool = currentFilter === "all"
    ? restaurants
    : restaurants.filter(item => item.tags.includes(currentFilter));

  const finalPool = pool.length ? pool : restaurants;
  const item = finalPool[Math.floor(Math.random() * finalPool.length)];

  if (byDog) {
    dogLine.innerText = dogLines[Math.floor(Math.random() * dogLines.length)];
  }

  resultCard.innerHTML = `
    <div>
      <div class="pick-category">${item.category}</div>
      <h2 class="pick-name">${item.name}</h2>
      <p class="pick-desc">${item.reason}</p>
      <div class="info-list">
        <div class="info-row"><strong>位置：</strong>${item.area}</div>
        <div class="info-row"><strong>特色菜品：</strong>${item.special}</div>
        <div class="info-row"><strong>建议点：</strong>${item.order}</div>
        <div class="info-row"><strong>适合氛围：</strong>${item.vibe}</div>
      </div>
      <button class="primary-btn" onclick="pickRestaurant()">不行，换一个</button>
    </div>
  `;
}

function renderGrid() {
  grid.innerHTML = restaurants.map(item => `
    <div class="restaurant-card">
      <h3>${item.name}</h3>
      <p>${item.category}</p>
      <p>${item.area}</p>
      <p class="dish-line"><strong>特色菜品：</strong>${item.special}</p>
      <div class="tags">
        ${item.tags.map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function tagLabel(tag) {
  const map = {
    spicy: "辣",
    sweet: "甜/甜咸",
    dessert: "甜品",
    quick: "快吃",
    campus: "校内",
    qvm: "QVM",
    date: "拍照/约饭",
    budget: "学生友好",
    chinese: "中餐/亚洲菜",
    italian: "意餐",
    brunch: "早午餐"
  };
  return map[tag] || tag;
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
  });
});

document.getElementById("mainPickBtn").addEventListener("click", () => pickRestaurant(false));
document.getElementById("dogPickBtn").addEventListener("click", () => pickRestaurant(true));

document.getElementById("resetBtn").addEventListener("click", () => {
  currentFilter = "all";
  chips.forEach(c => c.classList.remove("active"));
  document.querySelector('[data-filter="all"]').classList.add("active");
  dogLine.innerText = "没满意的？重新选叭";
  resultCard.innerHTML = `
    <div class="placeholder">
      <p class="mini-title">今日推荐还没生成</p>
      <h2>点一下，替你决定。</h2>
      <p>tips：先挑选想吃的类型，再点击「随机推荐」就好啦～</p>
    </div>
  `;
});

renderGrid();
