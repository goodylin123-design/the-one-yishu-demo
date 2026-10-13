const IMG = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
  dining: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  bowl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  tea: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  ceramic: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
  cup: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=80",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  sweet: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  fruit: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80",
  preserve: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
  lecture: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  travel: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  film: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80",
  venue: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=80",
  interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80",
  lamp: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
  book: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
  table: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1400&q=80",
  beer: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=1200&q=80"
};

function item(id, name, cat, sub, taste, price, spec, image, blurb, group) {
  return { id, name, cat, sub, taste, price, spec, image, blurb, group: group || "select" };
}

const PRODUCTS = [
  item("guang", "日光閒情", "大地佳釀・茶與咖啡", "咖啡豆", "知味", 680, "200g", "coffee", "白天的第一杯。甜感乾淨，像把窗邊的光留住一點。"),
  item("liuxu", "柳絮風輕", "大地佳釀・茶與咖啡", "咖啡豆", "知味", 620, "200g", "coffee", "花香輕、尾巴短，適合午後把窗戶打開。"),
  item("jiuxiang-bean", "酒香微醺", "大地佳釀・茶與咖啡", "咖啡豆", "玩味", 640, "200g", "coffee", "發酵感被留下來，一杯裡有一點酒的影子。"),
  item("niaoyu-bean", "鳥語花香", "大地佳釀・茶與咖啡", "咖啡豆", "滋味", 640, "200g", "coffee", "花果香走在前面，空氣感比苦韻更清楚。"),
  item("baicao-bean", "百草拾芳", "大地佳釀・茶與咖啡", "咖啡豆", "知味", 660, "200g", "coffee", "草本與烘焙交界，香氣比甜更站得住。"),
  item("meiying", "梅影尋香", "大地佳釀・茶與咖啡", "濾掛單包", "玩味", 65, "1 入", "coffee", "梅子的酸香，收成隨手可沖的一包。"),
  item("baicao-drip", "百草拾芳", "大地佳釀・茶與咖啡", "濾掛單包", "知味", 65, "1 入", "coffee", "同名咖啡豆的單包，把同一條風味帶回家。"),
  item("jiuxiang-drip", "酒香微醺", "大地佳釀・茶與咖啡", "濾掛單包", "玩味", 65, "1 入", "coffee", "同名咖啡豆的單包，發酵香還在。"),
  item("niaoyu-drip", "鳥語花香", "大地佳釀・茶與咖啡", "濾掛單包", "滋味", 65, "1 入", "coffee", "同名咖啡豆的單包，花果香來得快。"),
  item("shanyue", "山月夜", "大地佳釀・茶與咖啡", "野草茶", "之味", 380, "茶包", "tea", "夜裡喝的草葉。涼、清，不跟白天搶位置。"),
  item("nuanyang", "暖陽散側", "大地佳釀・茶與咖啡", "野草茶", "滋味", 360, "茶包", "tea", "暖而散，適合飯後把桌子慢慢收掉。"),
  item("wenmai", "溫脈飲", "大地佳釀・茶與咖啡", "野草茶", "之味", 360, "茶包", "tea", "溫潤走一圈，不做重口味的草茶。"),
  item("heidou", "黑豆水", "大地佳釀・茶與咖啡", "茗京萃", "之味", 280, "瓶", "tea", "黑豆的穀香被煮成日常可喝的一瓶。"),
  item("baicaogan", "百草甘", "大地佳釀・茶與咖啡", "茗京萃", "知味", 280, "瓶", "tea", "百草的回甘，甜是後面才來的。"),
  item("luoshen", "洛神飲", "大地佳釀・茶與咖啡", "茗京萃", "滋味", 260, "瓶", "tea", "洛神的酸紅，顏色先說話。"),
  item("wumeiyin", "烏梅飲", "大地佳釀・茶與咖啡", "茗京萃", "之味", 260, "瓶", "tea", "烏梅的酸，是陳過的，不是鮮果的。"),
  item("sangshen", "桑椹飲", "大地佳釀・茶與咖啡", "茗京萃", "滋味", 260, "瓶", "tea", "桑椹的紫與甜，收成可以冰、也可以溫。"),
  item("dongfang", "東方美人茶", "大地佳釀・茶與咖啡", "茶", "知味", 880, "50g", "tea", "蜜香與熟果，是認識臺灣茶的一扇門。"),
  item("chuncha", "春茶", "大地佳釀・茶與咖啡", "茶", "滋味", 720, "50g", "tea", "春天的葉子，鮮、直，不需太多形容。"),
  item("shiye", "柿葉茶", "大地佳釀・茶與咖啡", "茶", "玩味", 420, "茶包", "tea", "柿葉的清甜，和柿餅是同一個季節的兩種記憶。"),
  item("suangan", "酸柑茶", "大地佳釀・茶與咖啡", "茶", "玩味", 320, "瓶", "tea", "柑橘的酸煮進茶裡，冬天喝得到。"),
  item("xingren", "杏仁茶", "大地佳釀・茶與咖啡", "茶", "滋味", 320, "瓶", "tea", "杏仁的溫與細，是早點記憶裡的那一碗。"),

  item("jufeng", "巨峰葡萄陳加烈酒", "大地佳釀・酒", "葡萄與果釀", "之味", 1280, "瓶", "wine", "巨峰的甜被時間收住，加烈之後反而安靜。"),
  item("yidianhong", "一點紅", "大地佳釀・酒", "葡萄與果釀", "玩味", 980, "瓶", "wine", "名字只給一點顏色，味道自己會把話說完。"),
  item("yanzhi", "胭脂扣", "大地佳釀・酒", "葡萄與果釀", "玩味", 1080, "瓶", "wine", "顏色深，入口卻不必很重。"),
  item("yuanhao", "願好", "大地佳釀・酒", "葡萄與果釀", "滋味", 1180, "瓶", "wine", "一句祝福做成的酒，適合放上同席的桌子。"),
  item("quexing", "確幸", "大地佳釀・酒", "葡萄與果釀", "滋味", 1180, "瓶", "wine", "確定的甜與酸，不多話。"),
  item("luyi", "旅壹", "大地佳釀・酒", "葡萄與果釀", "知味", 1380, "瓶", "wine", "旅途的第一瓶，風味還帶著出發時的鮮。"),
  item("luer", "旅貳", "大地佳釀・酒", "葡萄與果釀", "之味", 1380, "瓶", "wine", "同一條路上的下一瓶，時間比較長。"),
  item("wuyou-grape", "無憂", "大地佳釀・酒", "葡萄與果釀", "滋味", 980, "瓶", "wine", "葡萄清單裡的無憂。輕，讓桌子不要太滿。"),
  item("tongchen", "桶陳地瓜酒", "大地佳釀・酒", "地瓜、米釀與啤酒", "之味", 880, "瓶", "wine", "地瓜進了木桶，甜變得比較沉。"),
  item("digua", "地瓜原酒", "大地佳釀・酒", "地瓜、米釀與啤酒", "知味", 680, "瓶", "wine", "還沒有桶味之前，地瓜自己的樣子。"),
  item("aminu", "阿米怒", "大地佳釀・酒", "地瓜、米釀與啤酒", "知味", 780, "瓶", "wine", "米釀的土地感，名字裡聽得見部落的聲音。"),
  item("weixun", "微醺", "大地佳釀・酒", "地瓜、米釀與啤酒", "玩味", 720, "瓶", "wine", "只要一點點醉意，適合飯吃到一半。"),
  item("wuyou-tuber", "無憂", "大地佳釀・酒", "地瓜、米釀與啤酒", "滋味", 760, "瓶", "wine", "地瓜與米釀清單裡的無憂，和葡萄那瓶不是同一味。"),
  item("baishuai", "白帥帥啤酒", "大地佳釀・酒", "地瓜、米釀與啤酒", "玩味", 180, "瓶", "beer", "合作的臺灣啤酒。氣泡把餐桌的嚴肅吹開一點。"),
  item("hongjia", "紅嫁妝", "大地佳釀・酒", "梅酒與花果", "玩味", 860, "瓶", "wine", "紅色與喜氣，收在梅與花的清單裡。"),
  item("jinxiang", "金香花穗", "大地佳釀・酒", "梅酒與花果", "知味", 860, "瓶", "wine", "花香比果甜更清楚的一瓶。"),
  item("luye", "鹿野紅烏龍梅酒", "大地佳釀・酒", "梅酒與花果", "知味", 920, "瓶", "wine", "鹿野的紅烏龍走進梅酒，茶香還在。"),
  item("shengeng", "深耕園葡萄酒", "大地佳釀・酒", "葡萄酒與蘭姆", "知味", 1480, "瓶", "wine", "以酒莊之名放進選一，喝的是一塊土地的工作。"),
  item("taoran", "陶然", "大地佳釀・酒", "葡萄酒與蘭姆", "滋味", 1280, "瓶", "wine", "名字是一種心情，酒體乾淨。"),
  item("taoran2", "醄然", "大地佳釀・酒", "葡萄酒與蘭姆", "之味", 1280, "瓶", "wine", "比陶然更往時間裡走一點。"),
  item("fanshu", "繁曙", "大地佳釀・酒", "葡萄酒與蘭姆", "知味", 1380, "瓶", "wine", "天剛亮時的複雜，層次多而慢。"),
  item("pingan", "平安 / 抗煞", "大地佳釀・酒", "葡萄酒與蘭姆", "玩味", 980, "瓶", "wine", "名字帶著祝願，是可以送禮的一瓶。"),
  item("rum", "丸紅甘蔗蘭姆酒", "大地佳釀・酒", "葡萄酒與蘭姆", "之味", 1680, "瓶", "wine", "甘蔗做成的蘭姆，甜的來源很清楚。"),

  item("luobo3", "三年老蘿蔔乾", "歲藏", "蘿蔔乾", "之味", 280, "包", "preserve", "三年的鹹香，已經進了餐桌，也進了早午餐的水潤餅。"),
  item("luobo10", "十年老蘿蔔乾", "歲藏", "蘿蔔乾", "之味", 420, "包", "preserve", "十年比三年更安靜。鹹還在，時間把尖銳磨掉了。"),
  item("mei3", "三年醃梅", "歲藏", "醃梅", "之味", 260, "罐", "fruit", "三年的酸，還聽得見新鮮梅子。"),
  item("mei10", "十年醃梅", "歲藏", "醃梅", "之味", 460, "罐", "fruit", "十年之後，酸變成一種很慢的回甘。"),
  item("zisu", "無籽紫蘇梅", "歲藏", "梅與梅漿", "滋味", 240, "罐", "fruit", "紫蘇的香包住梅，吃的時候不必找籽。"),
  item("meijiang", "梅子漿", "歲藏", "梅與梅漿", "玩味", 220, "瓶", "preserve", "把梅收成可以塗、可以調的一層。"),
  item("meicu", "梅漿醋", "歲藏", "梅與梅漿", "玩味", 260, "瓶", "preserve", "酸從梅來到醋，適合點在熱的菜上。"),
  item("guiyuan", "柴燒桂圓", "歲藏", "果乾與果露", "之味", 320, "包", "sweet", "柴火烘過的桂圓，甜變得比較深。"),
  item("huangmei", "陳釀黃梅露", "歲藏", "果乾與果露", "之味", 280, "瓶", "fruit", "黃梅的汁被放著，甜酸都沉下來。"),
  item("jinxi", "金喜酸桔", "歲藏", "果乾與果露", "玩味", 240, "罐", "fruit", "酸桔的亮，和年節的柑橘是同一種祝福。"),

  item("hesheng", "和生綠豆黃", "大人柑仔店", "綠豆黃", "滋味", 180, "盒", "sweet", "綠豆的細與甜，是柑仔店櫃上最熟的那一塊。"),
  item("ludou-mochi", "綠豆黃・麻糬", "大人柑仔店", "綠豆黃", "玩味", 90, "顆", "sweet", "綠豆黃裡包進麻糬，口感多一層黏。"),
  item("ludou-matcha", "綠豆黃・抹茶", "大人柑仔店", "綠豆黃", "知味", 90, "顆", "sweet", "抹茶把綠豆的甜壓得比較清。"),
  item("ludou-cran", "綠豆黃・蔓越莓", "大人柑仔店", "綠豆黃", "玩味", 90, "顆", "sweet", "蔓越莓的酸點在綠豆上。"),
  item("ludou-mei", "綠豆黃・梅縫", "大人柑仔店", "綠豆黃", "玩味", 90, "顆", "sweet", "梅的酸從縫裡出來，甜就沒那麼滿。"),
  item("bishi", "筆柿", "大人柑仔店", "柿", "之味", 160, "盒", "fruit", "筆柿的形與糖霜，是秋天可以寄給人的東西。"),
  item("bishi-yolk", "筆柿蛋黃酥", "大人柑仔店", "柿", "滋味", 130, "顆", "bread", "筆柿、豆沙與鹹蛋黃疊在一起，是這裡的經典甜點之一。"),
  item("cake-dragon", "蔬菜蛋糕・火龍果", "大人柑仔店", "蔬菜蛋糕", "玩味", 280, "片", "sweet", "火龍果的顏色進了蛋糕，甜度留得低。"),
  item("cake-taro", "蔬菜蛋糕・鹹蛋黃芋頭", "大人柑仔店", "蔬菜蛋糕", "滋味", 280, "片", "sweet", "芋頭的粉與鹹蛋黃，是鹹甜之間的一塊。"),
  item("cake-chestnut", "蔬菜蛋糕・蜂蜜檸檬栗子地瓜", "大人柑仔店", "蔬菜蛋糕", "知味", 280, "片", "sweet", "蜂蜜、檸檬、栗子與地瓜，甜來自這些本身。"),

  item("zhizhu", "知竹", "器皿", "器皿", "知味", 3200, "件", "ceramic", "竹子的節理被做成可以天天用的器物。", "original"),
  item("zhanfang", "綻放瓷盤", "器皿", "器皿", "玩味", 4800, "件", "ceramic", "盤子的邊緣像花打開，菜放上去就是一幅桌面。", "original"),
  item("heming", "和鳴托盤", "器皿", "器皿", "滋味", 3600, "件", "table", "托盤讓一套杯盤有了可以一起移動的秩序。", "original"),
  item("baihe", "古典百合系列", "杯具", "杯具", "知味", 2200, "件", "cup", "百合的弧度用在杯上，握得住，也放得穩。", "original"),
  item("yan", "顏系列", "杯具", "杯具", "玩味", 2600, "件", "cup", "以臉與神情為題的杯子，喝的時候會對上一個表情。", "original"),
  item("animal", "動物劇場", "杯具", "杯具", "玩味", 1800, "件", "cup", "動物走到杯身上，餐桌因此有了一點劇情。", "original"),
  item("shiyi", "食藝春秋 青銅紋刀叉匙組", "餐具", "餐具", "知味", 6800, "組", "table", "青銅紋放進刀叉匙，西式餐具裡有一層東方的時間。", "original"),
  item("ruyi-cutlery", "如意 刀叉匙組", "餐具", "餐具", "滋味", 2400, "組", "table", "如意的曲線收成一套可以天天擺上的刀叉匙。", "original"),
  item("ruyi-straw", "如意 吸管湯匙組", "餐具", "餐具", "玩味", 980, "組", "table", "同一條如意曲線，做成喝湯與啜飲的尺寸。", "original"),
  item("ronghe", "融合 叉子筷子", "餐具", "餐具", "玩味", 1600, "組", "table", "叉與筷放在一起，一桌人不必先決定用哪一種文明吃飯。", "original"),
  item("tonghua", "客家桐花杯", "不倒翁杯", "不倒翁杯", "知味", 1280, "件", "cup", "桐花的白落在不會倒的杯子上。", "original"),
  item("fengcha", "奉茶杯", "不倒翁杯", "不倒翁杯", "滋味", 1480, "件", "tea", "奉茶的手勢被做成器形，端起來就是一句請。", "original"),
  item("jian", "若有光 見山", "不倒翁杯", "不倒翁杯", "之味", 1680, "件", "cup", "杯身裡有光，也有一座可以被看見的山。", "original"),

  item("jingoo", "JINGOOs 鳥籠音響燈", "共好器物", "共好商品", "玩味", 5600, "件", "lamp", "鳥籠的形，同時是燈，也是聲音的房子。", "partner"),
  item("lumio", "LUMIO 書本燈", "共好器物", "共好商品", "知味", 4200, "件", "book", "打開像一本書，合上就暗了。光因此有了儀式。", "partner"),
  item("senyu", "森雨制陶", "共好器物", "共好商品", "之味", 3800, "件", "ceramic", "土與火留下的痕跡，不打算被磨成完全的光滑。", "partner")
];

const TASTE = {
  滋味: "入口那一層，直接、清楚。",
  知味: "先辨產地、製法與時節。",
  之味: "時間留下來的陳、釀、醃、藏。",
  玩味: "把風土帶進另一種日常用法。"
};

const LECTURES = [
  {
    id: "mei-time",
    title: "漬的靜好：梅與時間",
    category: "生活美學課",
    date: "2026.11.08",
    place: "異數生活",
    image: "lecture",
    state: "upcoming",
    demo: true,
    summary: "從三年醃梅到十年醃梅，看同一顆梅如何被時間改寫。",
    body: "這是一堂示意場次，用來示範講堂頁的版型。正式名稱、日期、照片與 Accupass 連結，由活動 CMS 填入後套用同一份版面。"
  },
  {
    id: "table-objects",
    title: "器物如何成為風景",
    category: "風格美學",
    date: "2026.11.22",
    place: "異數生活",
    image: "ceramic",
    state: "upcoming",
    demo: true,
    summary: "從知竹、瓷盤到不倒翁杯，看一件器物怎樣改變一桌飯。",
    body: "示意場次。風格美學講的是日常物件，不是展牆上的說明牌。"
  },
  {
    id: "island-table",
    title: "島嶼風土的餐桌",
    category: "旅遊與文化",
    date: "2026.12.06",
    place: "異數生活",
    image: "travel",
    state: "upcoming",
    demo: true,
    summary: "不必先出門。先從一瓶酒、一味茶、一碟老蘿蔔乾認識地方。",
    body: "示意場次。旅遊與文化在這裡，是把地方的味道先放到桌上。"
  },
  {
    id: "film-meal",
    title: "一場關於吃飯的放映",
    category: "電影",
    date: "2026.12.13",
    place: "異數生活",
    image: "film",
    state: "upcoming",
    demo: true,
    summary: "先看一部把吃飯當主角的電影，再坐下來吃一頓。",
    body: "示意場次。Sitemap 中的「電影」分類以此版型呈現，片單尚未定案。"
  },
  {
    id: "huigan",
    title: "回甘：當季的異數展覽",
    category: "異數展覽",
    date: "2026.10.20",
    place: "異數生活",
    image: "interior",
    state: "upcoming",
    demo: true,
    summary: "以回甘為題，把器物、食物與文字放在同一個空間裡看。",
    body: "示意展覽。正式檔期、藝術家與作品由後台新增後，沿用這個版面。"
  },
  {
    id: "venue-brief",
    title: "包場說明會",
    category: "包場說明會",
    date: "2026.10.25",
    place: "異數生活",
    image: "venue",
    state: "upcoming",
    demo: true,
    summary: "企業、媒體餐會與家庭聚會，三種桌子怎麼在這裡發生。",
    body: "示意場次。說明會報名走 Accupass；正式包場洽詢走包場頁的表單。"
  },
  {
    id: "longkui",
    title: "季旬台味｜年後三帖：龍葵、新蒜、春藻",
    category: "生活美學課",
    date: "2026.02.25",
    place: "The One",
    image: "dining",
    state: "archive",
    demo: false,
    summary: "龍葵的苦後回甘、雲林新蒜的清辛，與東海岸春藻的潮汐味。",
    body: "公開課程紀錄。田野間的龍葵、限時的新鮮濕蒜，與吸收了太平洋潮汐的春藻，是三個再日常不過的臺灣風味。"
  },
  {
    id: "bakery",
    title: "老味新選｜蛋捲 × 牛粒 × 菠蘿麵包",
    category: "生活美學課",
    date: "2026.02.25",
    place: "The One",
    image: "bread",
    state: "archive",
    demo: false,
    summary: "從蛋捲、牛粒到菠蘿麵包，看酥香如何變成信任。",
    body: "公開課程紀錄。三講涵蓋蛋捲的地域、牛粒的命名與傳播，以及菠蘿麵包從裂紋到選麵包的法則。"
  },
  {
    id: "seafood",
    title: "海味迎年｜暖食餐桌學",
    category: "生活美學課",
    date: "2026.01.08",
    place: "The One",
    image: "dining",
    state: "archive",
    demo: false,
    summary: "以四味學拆開年節海味：蝦、年糕與乾貨背後的水系和時效。",
    body: "公開課程紀錄。過年是味覺記憶最厚的時刻，課程邀請人以四味學看待東西岸不同水系的風味。"
  },
  {
    id: "concert",
    title: "愛樂晚宴｜聖誕樂賞：歌．舞．劇",
    category: "風格美學",
    date: "2025.12.13",
    place: "The One",
    image: "venue",
    state: "archive",
    demo: false,
    summary: "佳餚與燈影之間，聽一場音樂劇曲目的導聆。",
    body: "公開活動紀錄。節慶愛樂晚宴把餐桌與劇場旋律放在同一個晚上。"
  },
  {
    id: "cruise",
    title: "從靈感到啟航：歐洲河輪包船",
    category: "旅遊與文化",
    date: "2025.11.17",
    place: "The One",
    image: "travel",
    state: "archive",
    demo: false,
    summary: "十年前把生活帶上船，十年後為旅人描繪航海的藍圖。",
    body: "公開活動紀錄。一場關於包船策劃的幕後分享，屬旅遊與文化。"
  },
  {
    id: "mei-class",
    title: "梅好生活｜漬的靜好時光",
    category: "生活美學課",
    date: "2025.06.17",
    place: "The One",
    image: "fruit",
    state: "archive",
    demo: false,
    summary: "從果的脆甜到蜜餞的鹹酸甜，重拾醃漬裡的人情。",
    body: "公開課程紀錄。兩堂關於果的保存與記憶，是後來「歲藏」可以繼續長出來的內容。"
  }
];

const NEWS = [
  {
    id: "citrus",
    date: "2026.01.22",
    kind: "品牌活動",
    title: "好好吃頓飯｜異數饗宴之夜《柑香入席》",
    image: "dining",
    summary: "以臺灣各地柑橘為主角，把「大桔大利」做成一桌可以坐下來的祝福。",
    body: "公開活動。The One 食藝團隊重新詮釋柑橘的層次，讓節令的寓意出現在菜裡，而不只出現在吉祥話裡。"
  },
  {
    id: "newyear-gift",
    date: "2026.01.12",
    kind: "商品",
    title: "2026 The One 春節唯一禮",
    image: "preserve",
    summary: "把本土農作與在地職人收成一份可以送出去的年禮。",
    body: "公開訊息。年禮同時是選品：支持在地創作，也讓共好不只是一句話。"
  },
  {
    id: "mei-life",
    date: "2025.06.18",
    kind: "品牌活動",
    title: "梅好生活｜風土之韻",
    image: "fruit",
    summary: "以梅為題的餐酒會與茶餐會，酸從開胃走到主菜。",
    body: "公開活動。焙香梅醋、紫蘇梅醬與石斑，是同一季梅子的不同位置。"
  },
  {
    id: "huigan-news",
    date: "2021.10",
    kind: "其他更新",
    title: "回甘十月，遇見我的異數生活",
    image: "interior",
    summary: "十月以回甘為題，把品、餚、酌、趣放進同一段日子。",
    body: "公開活動紀錄。回甘是品牌一再使用的字：酸澀走過去，甜才出現。"
  }
];

window.IMG = IMG;
window.PRODUCTS = PRODUCTS;
window.TASTE = TASTE;
window.LECTURES = LECTURES;
window.NEWS = NEWS;

const STORE = {
  name: "異數生活",
  address: "台北市中山區中山北路二段 30 號",
  hours: "週四至週二 10:00–19:00",
  phone: "02-2536-3090",
  phoneHref: "tel:+886225363090",
  inline: "https://reurl.cc/gZRdlN",
  accupass: "https://www.accupass.com/",
  parent: "https://nanyuan.theonestyle.com/",
  theone: "https://www.theonestyle.com/"
};
window.STORE = STORE;
