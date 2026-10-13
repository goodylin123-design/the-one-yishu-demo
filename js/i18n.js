(function () {
  const LANGS = [
    ["zh-Hant", "繁體中文", "繁體"],
    ["zh-Hans", "简体中文", "简体"],
    ["en", "English", "EN"],
    ["ja", "日本語", "日本"],
    ["ko", "한국어", "한국"]
  ];
  let saved = null;
  try { saved = localStorage.getItem("yishu-lang"); } catch (error) { saved = null; }
  const lang = LANGS.some(([id]) => id === saved) ? saved : "zh-Hant";
  document.documentElement.lang = lang;

  const HANS = [
    "異异", "數数", "選选", "閒闲", "乾干", "淨净", "後后", "裡里", "臺台", "灣湾",
    "麵面", "飯饭", "雞鸡", "飲饮", "東东", "風风", "氣气", "點点", "線线", "開开",
    "關关", "門门", "長长", "時时", "間间", "來来", "從从", "這这", "還还", "為为",
    "與与", "無无", "會会", "說\u8bf4", "話话", "語语", "講讲", "課课", "學学", "藝艺",
    "術术", "師师", "個个", "們们", "邊边", "對对", "應应", "該该", "請请", "謝\u8c22",
    "歡欢", "樂乐", "親\u4eb2", "愛爱", "禮礼", "節节", "歲岁", "歷历", "傳传", "統统",
    "處处", "備备", "難难", "雖虽", "離离", "訊讯", "電电", "視视", "覺觉", "聽\u542c",
    "見见", "觀观", "識识", "記记", "許许", "談\u8c08", "論论", "讀读", "寫写", "習习",
    "經经", "過过", "進进", "運运", "動动", "發发", "現现", "實实", "際际", "確确",
    "認认", "買买", "賣卖", "購购", "價价", "錢钱", "質质", "務务", "辦办", "單\u5355",
    "訂订", "預预", "約约", "貨货", "廠厂", "網网", "頁页", "題题", "標标", "體体",
    "驗验", "頭头", "條条", "塊块", "顆颗", "雙双", "組组", "張张", "筆笔", "書书",
    "畫\u753b", "圖图", "盤盘", "壺壶", "鍋锅", "爐炉", "魚鱼", "蝦虾", "豬猪", "麥麦",
    "鮮鲜", "醃腌", "漬渍", "釀酿", "陳陈", "鹹咸", "鹽盐", "醬酱", "濃浓", "燒烧",
    "燉炖", "滷卤", "燻熏", "煙烟", "葉叶", "種\u79cd", "殼壳", "漿浆", "餅饼", "園园",
    "樹树", "車车", "飛飞", "橋桥", "層层", "階阶", "牆墙", "燈灯", "鏡镜", "鐘钟",
    "銅铜", "鐵铁", "鋼钢", "綠绿", "藍蓝", "紅红", "黃黄", "顏颜", "陽阳", "溫温",
    "熱热", "涼凉", "環环", "藥药", "莊庄", "鎮镇", "鄉乡", "縣县", "內内", "國国",
    "際际", "區区", "場场", "館馆", "廳厅", "廚厨", "衛卫", "醫医", "療疗", "雲云",
    "腦脑", "複复", "雜杂", "詳详", "細细", "總总", "計计", "據据", "資资", "檔档",
    "擇择", "決决", "義义", "權权", "責责", "簡简", "問\u95ee", "錯错", "誤误", "顯显",
    "軟软", "鬆松", "濾滤", "掛挂", "蘿萝", "蔔卜", "薑姜", "蔥葱", "週周", "於于",
    "並并", "卻却", "僅仅", "較较", "極极", "別别", "樣样", "沒没", "麼么", "幾几",
    "廣广", "興兴", "舊旧", "達达", "緯纬", "給给", "結结", "織织", "續续", "繼继",
    "斷断", "腳脚", "檢检", "測测", "試\u8bd5", "證证", "準准", "戶户", "夾夹", "幣币",
    "財财", "錫锡", "鋁铝", "鎖锁", "鑰钥", "鴨鸭", "鵝鹅", "餃饺", "湯汤", "隻只",
    "餚肴", "號号", "讓让", "專专", "誠诚", "農农", "將将", "輕轻", "適适", "隨随",
    "沖冲", "韻韵", "穀谷", "潤润", "烏乌", "靜静", "憂忧", "變变", "聲声", "嚴严",
    "肅肃", "龍龙", "願愿", "蘭兰", "銳锐", "蘇苏", "塗涂", "調调", "圓圆", "櫃柜",
    "壓压", "縫缝", "疊叠", "緣缘", "穩稳", "臉脸", "劇剧", "擺摆", "勢势", "鳥鸟",
    "籠笼", "儀仪", "跡迹", "筍笋", "膠胶", "銀银", "鱸鲈", "婦妇", "羅罗", "檸柠", "領领",
    "頓\u987f", "轉\u8f6c", "憶\u5fc6", "機\u673a", "當\u5f53", "職\u804c", "產\u4ea7", "製\u5236",
    "佈\u5e03", "議\u8bae", "類\u7c7b", "詢\u8be2", "濕\u6e7f", "捲\u5377", "則\u5219", "聖\u5723",
    "誕\u8bde", "靈\u7075", "啟\u542f", "歐\u6b27", "輪\u8f6e", "繪\u7ed8", "劃\u5212", "屬\u5c5e",
    "遊\u6e38", "餞\u996f", "饗\u98e8", "團\u56e2", "詮\u8be0", "釋\u91ca", "創\u521b", "澀\u6da9"
  ];
  const hansMap = {};
  HANS.forEach((pair) => { hansMap[pair[0]] = pair[1]; });
  function hans(text) {
    return String(text).replace(/[\u4e00-\u9fff]/g, (ch) => hansMap[ch] || ch);
  }

  const UI = {
    "zh-Hant": {
      "lang.switch": "切換語言",
      "nav.about": "探索異數生活",
      "nav.dining": "好好吃頓飯",
      "nav.lifestyle": "品味生活",
      "nav.select": "選一",
      "nav.lectures": "異數講堂",
      "nav.venue": "包場",
      "nav.news": "最新消息",
      "nav.shop": "異數臻選",
      "brand": "異數生活",
      "brandShop": "異數臻選",
      "menu.open": "開啟選單",
      "menu.label": "主選單",
      "side.book": "線上預訂",
      "side.lecture": "講堂報名",
      "side.venue": "洽詢包場",
      "footer.brand": "異數生活",
      "footer.go": "前往",
      "footer.theone": "The One",
      "footer.contact": "聯絡",
      "footer.inline": "線上預訂 inline",
      "footer.accupass": "Accupass 報名",
      "footer.nanyuan": "異數悅遊・南園",
      "footer.store": "The One 生活概念店",
      "footer.spirit": "品牌精神",
      "footer.map": "網站架構",
      "footer.handbook": "開發手冊",
      "footer.copy": "架構 Demo｜版面、字級與色彩參考南園官網。<br>飲食地景菜價摘自公開頁面；商品價格、部分講堂場次與商品故事為示意，正式內容由 CMS 維護。",
      "notes.show": "顯示區塊註記",
      "notes.hide": "隱藏區塊註記",
      "more": "探索更多",
      "all": "全部",
      "cart.title": "購物車",
      "cart.empty": "尚未加入商品。",
      "cart.total": "示意合計 ",
      "cart.checkout": "結帳示意",
      "cart.done": "此為購買流程示意，不會成立訂單，也不會扣款。",
      "cart.close": "關閉",
      "cart.label": "購物車",
      "upcoming": "近日活動",
      "archive": "公開課程紀錄",
      "demo": "示意",
      "date": "日期",
      "place": "地點",
      "signup": "報名",
      "ended": "課程已結束",
      "accupassGo": "前往 Accupass 報名",
      "courseList": "查看 The One 課程列表",
      "backLectures": "回到講堂列表",
      "backNews": "回到最新消息",
      "backSelect": "回到選一",
      "missLecture": "找不到這一堂",
      "missProduct": "找不到這件商品",
      "priceSample": "示意價格",
      "spec": "規格",
      "taste": "四味",
      "makerLine": "製作者／品牌：{maker}。這一頁談它為什麼被選進來。完整規格、庫存與結帳，留在異數臻選。",
      "buy": "前往異數臻選購買",
      "extend": "延伸",
      "extendShop": "延伸推薦",
      "shopKicker": "線上商店",
      "shopLead": "這裡完成瀏覽與購買。品牌故事留在異數生活。價格為示意。",
      "sample": "示意",
      "stock": "庫存",
      "inStock": "供應中",
      "idea": "理念",
      "maker": "製作者",
      "origin": "產地",
      "taiwan": "臺灣",
      "contents": "內容",
      "contentsNote": "完整成分見包裝。此欄為示意。",
      "keep": "保存",
      "keepNote": "請依包裝標示。此欄為示意。",
      "addCart": "加入購物車",
      "buyNow": "立即購買",
      "ship": "配送／取貨：宅配或門市取貨。運費於正式結帳顯示。此為流程示意。",
      "orderDemo": "已建立示意訂單，不會扣款。",
      "backStory": "返回品牌介紹",
      "daily": "日常選品",
      "tasteBridge": "",
      "taste.wei": "在四味學裡，它靠近「滋味」。入口那一層，直接、清楚。",
      "taste.zhi": "在四味學裡，它靠近「知味」。先辨產地、製法與時節。",
      "taste.zhi2": "在四味學裡，它靠近「之味」。時間留下來的陳、釀、醃、藏。",
      "taste.wan": "在四味學裡，它靠近「玩味」。把風土帶進另一種日常。",
      "maker.ming": "茗京萃",
      "maker.baishuai": "白帥帥",
      "maker.shengeng": "深耕園",
      "maker.luye": "鹿野",
      "maker.original": "The One 原創",
      "maker.senyu": "森雨制陶",
      "maker.coop": "合作職人、品牌或地方產業",
      "place.yishu": "異數生活",
      "place.theone": "The One",
      "news.kicker": "品牌活動／商品／其他更新",
      "news.lead": "會持續更新的內容，正式站由 CMS 新增一筆，就套用這個版面。",
      "title.home": "首頁｜異數生活",
      "title.about": "探索異數生活｜異數生活",
      "title.dining": "好好吃頓飯｜異數生活",
      "title.lifestyle": "品味生活｜異數生活",
      "title.select": "選一｜異數生活",
      "title.lectures": "異數講堂｜異數生活",
      "title.venue": "包場｜異數生活",
      "title.news": "最新消息｜異數生活",
      "title.map": "網站架構｜異數生活",
      "title.shop": "異數臻選｜異數生活",
      "title.product": "商品｜異數生活",
      "title.lecture": "講堂｜異數生活",
      "store.address": "台北市中山區中山北路二段 30 號",
      "store.hours": "週四至週二 10:00–19:00",
      "demoSession": "示意場次",
      "publicRecord": "公開紀錄"
    },
    en: {
      "lang.switch": "Language",
      "nav.about": "Explore",
      "nav.dining": "Dining",
      "nav.lifestyle": "Objects",
      "nav.select": "Select",
      "nav.lectures": "Lectures",
      "nav.venue": "Private",
      "nav.news": "News",
      "nav.shop": "Shop",
      "brand": "Yishu Living",
      "brandShop": "Yishu Select",
      "menu.open": "Open menu",
      "menu.label": "Menu",
      "side.book": "Reserve",
      "side.lecture": "Classes",
      "side.venue": "Private",
      "footer.brand": "Yishu Living",
      "footer.go": "Go to",
      "footer.theone": "The One",
      "footer.contact": "Visit",
      "footer.inline": "Reserve on inline",
      "footer.accupass": "Accupass",
      "footer.nanyuan": "Nanyuan",
      "footer.store": "The One Living Store",
      "footer.spirit": "The spirit",
      "footer.map": "Sitemap",
      "footer.handbook": "Handbook",
      "footer.copy": "Architecture demo. Layout and type follow the Nanyuan site.<br>Menu prices are from the public page. Other prices, some classes, and product stories are samples.",
      "notes.show": "Show structure notes",
      "notes.hide": "Hide structure notes",
      "more": "Explore",
      "all": "All",
      "cart.title": "Bag",
      "cart.empty": "Nothing here yet.",
      "cart.total": "Sample total ",
      "cart.checkout": "Sample checkout",
      "cart.done": "This checkout is a sample. No order is placed and nothing is charged.",
      "cart.close": "Close",
      "cart.label": "Bag",
      "upcoming": "Coming up",
      "archive": "Past classes",
      "demo": "Sample",
      "date": "Date",
      "place": "Place",
      "signup": "Booking",
      "ended": "This class has ended",
      "accupassGo": "Book on Accupass",
      "courseList": "See The One class list",
      "backLectures": "Back to lectures",
      "backNews": "Back to news",
      "backSelect": "Back to Select",
      "missLecture": "This class cannot be found",
      "missProduct": "This piece cannot be found",
      "priceSample": "Sample price",
      "spec": "Spec",
      "taste": "Taste",
      "makerLine": "Maker / brand: {maker}. This page is why it was chosen. Specs, stock, and checkout live at Yishu Select.",
      "buy": "Buy at Yishu Select",
      "extend": "Also",
      "extendShop": "You may also like",
      "shopKicker": "Online shop",
      "shopLead": "Browse and buy here. The brand story stays on Yishu Living. Prices are samples.",
      "sample": "sample",
      "stock": "Stock",
      "inStock": "In stock",
      "idea": "Idea",
      "maker": "Maker",
      "origin": "Origin",
      "taiwan": "Taiwan",
      "contents": "Contents",
      "contentsNote": "Full ingredients are on the pack. This line is a sample.",
      "keep": "Keep",
      "keepNote": "Follow the pack. This line is a sample.",
      "addCart": "Add to bag",
      "buyNow": "Buy now",
      "ship": "Delivery or pickup at the store. Shipping appears at real checkout. This flow is a sample.",
      "orderDemo": "A sample order was created. Nothing is charged.",
      "backStory": "Back to the story",
      "daily": "Everyday pick",
      "tasteBridge": " ",
      "taste.wei": "Among the four tastes it sits with Flavor: the first layer, direct and clear.",
      "taste.zhi": "Among the four tastes it sits with Knowing: origin, method, and season.",
      "taste.zhi2": "Among the four tastes it sits with Time: what aging, brewing, and cellaring leave behind.",
      "taste.wan": "Among the four tastes it sits with Play: terroir carried into another daily use.",
      "maker.ming": "Ming Jing Cui",
      "maker.baishuai": "Baishuai",
      "maker.shengeng": "Shengeng Garden",
      "maker.luye": "Luye",
      "maker.original": "The One Original",
      "maker.senyu": "Senyu Ceramics",
      "maker.coop": "Chosen with makers, brands, and local producers",
      "place.yishu": "Yishu Living",
      "place.theone": "The One",
      "news.kicker": "Events / goods / other news",
      "news.lead": "What keeps changing. On the live site, one new CMS entry fills this template.",
      "title.home": "Home | Yishu Living",
      "title.about": "Explore | Yishu Living",
      "title.dining": "Dining | Yishu Living",
      "title.lifestyle": "Objects | Yishu Living",
      "title.select": "Select | Yishu Living",
      "title.lectures": "Lectures | Yishu Living",
      "title.venue": "Private dining | Yishu Living",
      "title.news": "News | Yishu Living",
      "title.map": "Sitemap | Yishu Living",
      "title.shop": "Shop | Yishu Living",
      "title.product": "Piece | Yishu Living",
      "title.lecture": "Class | Yishu Living",
      "store.address": "No. 30, Sec. 2, Zhongshan N. Rd., Zhongshan Dist., Taipei",
      "store.hours": "Thu–Tue 10:00–19:00",
      "demoSession": "Sample date",
      "publicRecord": "Published"
    },
    ja: {
      "lang.switch": "言語",
      "nav.about": "探索",
      "nav.dining": "食事",
      "nav.lifestyle": "器物",
      "nav.select": "選一",
      "nav.lectures": "講堂",
      "nav.venue": "貸切",
      "nav.news": "知らせ",
      "nav.shop": "店",
      "brand": "異数生活",
      "brandShop": "異数臻選",
      "menu.open": "メニューを開く",
      "menu.label": "メニュー",
      "side.book": "予約",
      "side.lecture": "講座",
      "side.venue": "貸切",
      "footer.brand": "異数生活",
      "footer.go": "向かう",
      "footer.theone": "The One",
      "footer.contact": "連絡",
      "footer.inline": "inline で予約",
      "footer.accupass": "Accupass",
      "footer.nanyuan": "南園",
      "footer.store": "The One 生活概念店",
      "footer.spirit": "ブランド",
      "footer.map": "サイトマップ",
      "footer.handbook": "開発手冊",
      "footer.copy": "構成デモ。字と余白は南園に合わせています。<br>食事の価格は公開ページより。その他の価格、一部の講座、商品物語は見本です。",
      "notes.show": "構成メモを表示",
      "notes.hide": "構成メモを隠す",
      "more": "もっと見る",
      "all": "すべて",
      "cart.title": "カート",
      "cart.empty": "まだ入っていません。",
      "cart.total": "見本合計 ",
      "cart.checkout": "見本の会計",
      "cart.done": "これは見本です。注文も決済も行われません。",
      "cart.close": "閉じる",
      "cart.label": "カート",
      "upcoming": "近日の会",
      "archive": "これまでの講座",
      "demo": "見本",
      "date": "日付",
      "place": "場所",
      "signup": "申込",
      "ended": "この講座は終了しました",
      "accupassGo": "Accupass で申し込む",
      "courseList": "The One の講座一覧",
      "backLectures": "講堂一覧へ",
      "backNews": "お知らせへ",
      "backSelect": "選一へ戻る",
      "missLecture": "この講座は見つかりません",
      "missProduct": "この品は見つかりません",
      "priceSample": "見本価格",
      "spec": "仕様",
      "taste": "四味",
      "makerLine": "作り手／ブランド：{maker}。この頁は、なぜ選んだかを話します。規格と在庫と購入は異数臻選へ。",
      "buy": "異数臻選で購入",
      "extend": "あわせて",
      "extendShop": "あわせて",
      "shopKicker": "オンライン店",
      "shopLead": "ここで見て、買う。物語は異数生活に残します。価格は見本です。",
      "sample": "見本",
      "stock": "在庫",
      "inStock": "販売中",
      "idea": "考え",
      "maker": "作り手",
      "origin": "産地",
      "taiwan": "台湾",
      "contents": "内容",
      "contentsNote": "成分は包装を見てください。この欄は見本です。",
      "keep": "保存",
      "keepNote": "包装の表示に従ってください。この欄は見本です。",
      "addCart": "カートに入れる",
      "buyNow": "今すぐ購入",
      "ship": "宅配または店舗受取。送料は本番の会計で表示します。これは見本です。",
      "orderDemo": "見本の注文を作りました。決済はありません。",
      "backStory": "物語へ戻る",
      "daily": "日常の一品",
      "tasteBridge": "",
      "taste.wei": "四味では「滋味」。口に入る最初の層で、まっすぐです。",
      "taste.zhi": "四味では「知味」。産地と製法と季節を先に聞き分けます。",
      "taste.zhi2": "四味では「之味」。時間の残したもの。陳、醸、漬、蔵。",
      "taste.wan": "四味では「玩味」。風土を、もう一つの日常へ連れていきます。",
      "maker.ming": "茗京萃",
      "maker.baishuai": "白帥帥",
      "maker.shengeng": "深耕園",
      "maker.luye": "鹿野",
      "maker.original": "The One オリジナル",
      "maker.senyu": "森雨制陶",
      "maker.coop": "作り手、ブランド、土地の産物と一緒に選んだもの",
      "place.yishu": "異数生活",
      "place.theone": "The One",
      "news.kicker": "催し／品物／その他",
      "news.lead": "更新され続ける内容。本番では CMS に一件足すと、この紙面が埋まります。",
      "title.home": "ホーム｜異数生活",
      "title.about": "探索｜異数生活",
      "title.dining": "食事｜異数生活",
      "title.lifestyle": "器物｜異数生活",
      "title.select": "選一｜異数生活",
      "title.lectures": "講堂｜異数生活",
      "title.venue": "貸切｜異数生活",
      "title.news": "お知らせ｜異数生活",
      "title.map": "サイトマップ｜異数生活",
      "title.shop": "店｜異数生活",
      "title.product": "品｜異数生活",
      "title.lecture": "講座｜異数生活",
      "store.address": "台北市中山区中山北路二段30号",
      "store.hours": "木曜から火曜 10:00–19:00",
      "demoSession": "見本",
      "publicRecord": "公開記録"
    },
    ko: {
      "lang.switch": "언어",
      "nav.about": "소개",
      "nav.dining": "식사",
      "nav.lifestyle": "기물",
      "nav.select": "셀렉트",
      "nav.lectures": "강좌",
      "nav.venue": "대관",
      "nav.news": "소식",
      "nav.shop": "숍",
      "brand": "이슈 생활",
      "brandShop": "이슈 셀렉트",
      "menu.open": "메뉴 열기",
      "menu.label": "메뉴",
      "side.book": "예약",
      "side.lecture": "강좌",
      "side.venue": "대관",
      "footer.brand": "이슈 생활",
      "footer.go": "바로가기",
      "footer.theone": "The One",
      "footer.contact": "연락",
      "footer.inline": "inline 예약",
      "footer.accupass": "Accupass",
      "footer.nanyuan": "난위안",
      "footer.store": "The One 생활 개념점",
      "footer.spirit": "브랜드",
      "footer.map": "사이트맵",
      "footer.handbook": "개발 안내",
      "footer.copy": "구성 데모. 글자와 여백은 난위안 사이트를 따릅니다.<br>식사 가격은 공개 페이지에서 가져왔습니다. 그 밖의 가격, 일부 강좌, 상품 이야기는 예시입니다.",
      "notes.show": "구조 메모 보기",
      "notes.hide": "구조 메모 숨기기",
      "more": "더 보기",
      "all": "전체",
      "cart.title": "장바구니",
      "cart.empty": "아직 담긴 것이 없습니다.",
      "cart.total": "예시 합계 ",
      "cart.checkout": "예시 결제",
      "cart.done": "이것은 예시입니다. 주문이 만들어지거나 결제되지 않습니다.",
      "cart.close": "닫기",
      "cart.label": "장바구니",
      "upcoming": "다가오는 모임",
      "archive": "지난 강좌",
      "demo": "예시",
      "date": "날짜",
      "place": "장소",
      "signup": "신청",
      "ended": "끝난 강좌입니다",
      "accupassGo": "Accupass에서 신청",
      "courseList": "The One 강좌 목록",
      "backLectures": "강좌 목록으로",
      "backNews": "소식으로",
      "backSelect": "셀렉트로",
      "missLecture": "이 강좌를 찾을 수 없습니다",
      "missProduct": "이 물건을 찾을 수 없습니다",
      "priceSample": "예시 가격",
      "spec": "규격",
      "taste": "네 가지 맛",
      "makerLine": "만든 이 / 브랜드: {maker}. 이 페이지는 고른 이유를 말합니다. 규격, 재고, 결제는 이슈 셀렉트에 있습니다.",
      "buy": "이슈 셀렉트에서 구매",
      "extend": "함께",
      "extendShop": "함께 보면 좋은 것",
      "shopKicker": "온라인 숍",
      "shopLead": "여기서 보고 삽니다. 브랜드 이야기는 이슈 생활에 둡니다. 가격은 예시입니다.",
      "sample": "예시",
      "stock": "재고",
      "inStock": "판매 중",
      "idea": "생각",
      "maker": "만든 이",
      "origin": "산지",
      "taiwan": "타이완",
      "contents": "내용",
      "contentsNote": "전성분은 포장을 보세요. 이 칸은 예시입니다.",
      "keep": "보관",
      "keepNote": "포장 표시를 따르세요. 이 칸은 예시입니다.",
      "addCart": "장바구니에 담기",
      "buyNow": "바로 구매",
      "ship": "택배 또는 매장 수령. 배송비는 실제 결제에서 보입니다. 이것은 예시입니다.",
      "orderDemo": "예시 주문을 만들었습니다. 결제되지 않습니다.",
      "backStory": "이야기로 돌아가기",
      "daily": "일상의 선택",
      "tasteBridge": " ",
      "taste.wei": "네 가지 맛 가운데 「자미」. 입에 닿는 첫 층, 곧고 분명합니다.",
      "taste.zhi": "네 가지 맛 가운데 「지미」. 산지와 제법과 철을 먼저 가립니다.",
      "taste.zhi2": "네 가지 맛 가운데 「지미(之味)」. 시간이 남긴 숙성, 양조, 절임, 저장.",
      "taste.wan": "네 가지 맛 가운데 「완미」. 풍토를 또 다른 일상으로 데려갑니다.",
      "maker.ming": "밍징추이",
      "maker.baishuai": "바이슈아이",
      "maker.shengeng": "선겅위안",
      "maker.luye": "루예",
      "maker.original": "The One 오리지널",
      "maker.senyu": "선위 도예",
      "maker.coop": "장인, 브랜드, 지역 생산과 함께 고른 것",
      "place.yishu": "이슈 생활",
      "place.theone": "The One",
      "news.kicker": "행사 / 상품 / 그 밖의 소식",
      "news.lead": "계속 바뀌는 내용. 정식 사이트에서는 CMS에 한 건을 더하면 이 판형이 채워집니다.",
      "title.home": "홈 | 이슈 생활",
      "title.about": "소개 | 이슈 생활",
      "title.dining": "식사 | 이슈 생활",
      "title.lifestyle": "기물 | 이슈 생활",
      "title.select": "셀렉트 | 이슈 생활",
      "title.lectures": "강좌 | 이슈 생활",
      "title.venue": "대관 | 이슈 생활",
      "title.news": "소식 | 이슈 생활",
      "title.map": "사이트맵 | 이슈 생활",
      "title.shop": "숍 | 이슈 생활",
      "title.product": "상품 | 이슈 생활",
      "title.lecture": "강좌 | 이슈 생활",
      "store.address": "타이베이시 중산구 중산북로 2단 30호",
      "store.hours": "목–화 10:00–19:00",
      "demoSession": "예시",
      "publicRecord": "공개 기록"
    }
  };

  const PHRASES = {
    "引領生活美好想望": { en: "Leading a finer longing for life", ja: "暮らしの美しい想いを導く", ko: "더 나은 삶을 향한 마음을 이끌다" },
    "品、餚、酌、趣。一件器物、一頓飯、一味風土、一堂課，都是把異數生活收回日常的方法。": { en: "Object, table, cellar, and class. A vessel, a meal, a taste of place, a lesson: each is a way to bring Yishu Living back into the day.", ja: "品、餚、酌、趣。一つの器、一食、土地の一味、一講座。どれも異数生活を日常へ戻す方法です。", ko: "기물, 상, 술, 배움. 그릇 하나, 식사 한 끼, 땅의 맛 하나, 강좌 하나가 이슈 생활을 일상으로 되돌리는 방법입니다." },
    "向風土山海致敬｜好好吃頓飯": { en: "A table for the land and sea | Dining", ja: "土地と海へ｜ちゃんと食べる", ko: "산과 바다를 향한 상 | 식사" },
    "主食、品飲、自然甜。坐下來，把手機放在桌外。": { en: "Mains, drinks, and a quiet sweet. Sit down, and leave the phone off the table.", ja: "主食、飲み物、自然な甘さ。座って、電話は卓の外へ。", ko: "주식, 음료, 자연스러운 단맛. 앉아서 전화는 상 밖에 둡니다." },
    "探索更多": { en: "Explore", ja: "もっと見る", ko: "더 보기" },
    "日日使用的器物｜品味生活": { en: "Vessels for every day | Objects", ja: "毎日使う器｜器物", ko: "날마다 쓰는 기물 | 기물" },
    "The One 原創，讓器皿成為餐桌的風景。": { en: "The One originals: let the vessel become the view on the table.", ja: "The One のオリジナル。器を、食卓の景色にします。", ko: "The One 오리지널. 그릇이 식탁의 풍경이 되게 합니다." },
    "飲食地景、四味學｜選一": { en: "A landscape of taste | Select", ja: "食の風景、四味｜選一", ko: "맛의 풍경, 네 가지 맛 | 셀렉트" },
    "茶、咖啡、酒、歲藏與柑仔店。把味道帶回家。": { en: "Tea, coffee, wine, the cellar, and the old shop. Take a taste home.", ja: "茶、コーヒー、酒、歳の蔵、昔の店。味を家へ。", ko: "차, 커피, 술, 저장, 문방구 과자. 맛을 집으로 가져갑니다." },
    "打開五感六覺｜異數講堂": { en: "Open the senses | Lectures", ja: "五感を開く｜講堂", ko: "감각을 열다 | 강좌" },
    "風格學堂。生活美學、旅遊文化、電影與展覽。": { en: "A school of style: living, travel, film, and exhibition.", ja: "風格の学堂。暮らし、旅、映画、展示。", ko: "스타일의 학교. 생활, 여행, 영화, 전시." },
    "最新消息": { en: "News", ja: "お知らせ", ko: "소식" },
    "近日活動": { en: "Coming up", ja: "近日の会", ko: "다가오는 모임" },
    "異數講堂報名": { en: "Book a class", ja: "講座に申し込む", ko: "강좌 신청" },
    "共好商品": { en: "Chosen together", ja: "共に選んだ品", ko: "함께 고른 것" },
    "與職人、品牌、地方產業共同選擇。": { en: "Chosen with makers, brands, and local producers.", ja: "作り手、ブランド、土地の産物と一緒に選んでいます。", ko: "장인, 브랜드, 지역 생산과 함께 고릅니다." },
    "The One 原創": { en: "The One Original", ja: "The One オリジナル", ko: "The One 오리지널" },
    "自己開發、設計或製作的器物。": { en: "Vessels developed, designed, or made by The One.", ja: "自分たちで開発し、設計し、作った器。", ko: "직접 개발하고 디자인하고 만든 기물." },
    "讓一場聚會，發生在異數生活": { en: "Let a gathering happen here", ja: "集まりを、異数生活で", ko: "모임이 여기서 일어나게" },
    "企業包場、記者會與媒體餐會、家庭聚會。桌子可以只屬於你們。": { en: "A company table, a press lunch, a family meal. The table can belong only to you.", ja: "企業の貸切、記者会見、家族の食卓。卓はあなたたちだけのものにできます。", ko: "기업 대관, 기자 간담회, 가족 모임. 상을 여러분만의 것으로 둘 수 있습니다." },
    "洽詢包場": { en: "Ask about a private table", ja: "貸切を相談する", ko: "대관 문의" },
    "下一步": { en: "Next", ja: "次の一歩", ko: "다음" },
    "訂一張桌子，報名一堂課，或把聚會留給這裡。": { en: "Reserve a table, book a class, or leave the gathering to this room.", ja: "席を予約する。講座に申し込む。集まりをここへ預ける。", ko: "상을 예약하거나, 강좌를 신청하거나, 모임을 이곳에 맡깁니다." },
    "線上預訂": { en: "Reserve", ja: "オンライン予約", ko: "온라인 예약" },
    "探索 The One": { en: "Explore The One", ja: "The One を探す", ko: "The One 을 만나다" },
    "異數生活": { en: "Yishu Living", ja: "異数生活", ko: "이슈 생활" },
    "The One 以「引領生活美好想望」為品牌精神。在品味生活的主張上，發展出品、餚、酌、趣：專注食器變成的餐桌風景，品酌每一杯，虔誠對待每一口，向這片土地上的農人、職人與匠人致意。": { en: "The One’s spirit is “leading a finer longing for life.” From that come four paths: the object, the table, the cellar, and the class. Watch the vessel become the landscape of the meal, taste each cup, treat each bite with care, and bow to the farmers and makers of this island.", ja: "The One の精神は「暮らしの美しい想いを導く」こと。そこから品、餚、酌、趣が生まれます。器が食卓の景色になり、一杯を味わい、一口を丁寧に扱い、この土地の農と作り手に手を合わせます。", ko: "The One의 정신은 “더 나은 삶을 향한 마음을 이끄는 것”입니다. 거기서 기물, 상, 술, 배움이 나옵니다. 그릇이 식탁의 풍경이 되고, 한 잔을 맛보고, 한 입을 정성껏 대하며, 이 땅의 농부와 장인에게 예를 표합니다." },
    "這個網站把四件事分開，又讓它們在同一張桌子上相遇。吃飯在好好吃頓飯，器物在品味生活，帶回家的味道在選一，分享與課程在異數講堂。": { en: "This site keeps the four apart, then lets them meet on one table. Eating is Dining. Vessels are Objects. What you carry home is Select. Sharing and classes are Lectures.", ja: "このサイトは四つを分け、同じ卓で会わせます。食事はちゃんと食べる。器は器物。家へ持ち帰る味は選一。分かち合いと講座は講堂。", ko: "이 사이트는 넷을 나누었다가 한 상에서 만나게 합니다. 식사는 식사 페이지에, 기물은 기물에, 집으로 가져갈 맛은 셀렉트에, 나눔과 강좌는 강좌에 있습니다." },
    "品": { en: "Object", ja: "品", ko: "기물" },
    "餚": { en: "Table", ja: "食", ko: "상" },
    "酌": { en: "Cellar", ja: "酌", ko: "잔" },
    "趣": { en: "Class", ja: "講", ko: "배움" },
    "品味生活。一件好的食器，是盛裝食藝的靈魂，也是日常的風景。": { en: "Objects. A good vessel is the soul of the meal, and the view of an ordinary day.", ja: "器物。良い器は食の魂であり、日常の景色です。", ko: "기물. 좋은 그릇은 음식의 혼이고, 일상의 풍경입니다." },
    "好好吃頓飯。向風土致敬，翻轉味蕾裡的舊記憶。": { en: "Dining. A bow to the land, and a turn of an old memory on the tongue.", ja: "食事。風土に手を合わせ、味の記憶を裏返す。", ko: "식사. 풍토에 예를 표하고, 미각 속의 옛 기억을 뒤집습니다." },
    "選一。飲與藏不只是佐餐，是生活裡的主角。": { en: "Select. A drink or a jar is not a side note. It is a lead in the day.", ja: "選一。飲みものと蔵は添え物ではなく、暮らしの主役です。", ko: "셀렉트. 마실 것과 저장은 곁들이가 아니라 삶의 주인공입니다." },
    "異數講堂。因為分享，所以相聚。": { en: "Lectures. We gather because something is worth sharing.", ja: "講堂。分けるから、集まる。", ko: "강좌. 나누니까 모입니다." },
    "使用情境": { en: "How you might come", ja: "使い方", ko: "오는 이유" },
    "自己坐下來吃飯。帶重要的人一起吃飯。把一味風土帶回家。來上一堂課。或把整張桌子留給一場聚會。": { en: "Sit down alone. Bring someone who matters. Carry a taste of place home. Take a class. Or keep the whole table for one gathering.", ja: "ひとりで座る。大切な人と食べる。土地の味を家へ持ち帰る。講座に出る。卓を一つの集まりに預ける。", ko: "혼자 앉습니다. 중요한 사람과 먹습니다. 땅의 맛을 집으로 가져갑니다. 강좌에 옵니다. 또는 상 전체를 한 모임에 맡깁니다." },
    "前往南園": { en: "Visit Nanyuan", ja: "南園へ", ko: "난위안으로" },
    "好好吃頓飯": { en: "Dining", ja: "ちゃんと食べる", ko: "제대로 먹는 밥" },
    "您有多久，沒有坐下來好好吃頓飯了？沒有手機，沒有工作，只專心看著盤裡的色香味。": { en: "How long has it been since you sat down to a real meal? No phone, no work, only the color, scent, and taste on the plate.", ja: "座って、ちゃんと食べたのはいつですか。電話も仕事もなく、皿の色と香りと味だけを見る。", ko: "앉아서 제대로 먹은 것이 얼마만입니까. 전화도 일도 없이, 접시의 색과 향과 맛만 봅니다." },
    "主食": { en: "Mains", ja: "主食", ko: "주식" },
    "品飲": { en: "Drinks", ja: "飲み物", ko: "음료" },
    "自然甜": { en: "A quiet sweet", ja: "自然な甘さ", ko: "자연스러운 단맛" },
    "飲食地景摘錄": { en: "From the public table", ja: "公開の食卓より", ko: "공개된 상에서" },
    "餐桌上的飲，到選一慢慢看": { en: "The drinks on the table live in Select", ja: "卓の飲みものは選一でゆっくり", ko: "상의 마실 것은 셀렉트에서" },
    "少糖，用當季本身的甜": { en: "Less sugar. The sweetness of the season.", ja: "糖は少なめ。季節そのものの甘さ。", ko: "당은 적게. 제철 자체의 단맛." },
    "菜色與價格摘自 The One 飲食地景公開頁，實際供應以 inline 為準。": { en: "Dishes and prices are taken from The One’s public menu. What is served follows inline.", ja: "品と価格は The One の公開頁より。実際の提供は inline に合わせてください。", ko: "음식과 가격은 The One 공개 페이지에서 가져왔습니다. 실제 제공은 inline을 따릅니다." },
    "座位不在這個網站裡完成。請前往 inline，看即時的位子與當日菜單。": { en: "Seats are not booked on this site. Go to inline for the table and the day’s menu.", ja: "席はこのサイトでは取りません。inline で空席と当日の献立を見てください。", ko: "자리는 이 사이트에서 잡지 않습니다. inline에서 빈 자리와 그날의 메뉴를 보세요." },
    "前往 inline 訂位": { en: "Reserve on inline", ja: "inline で予約", ko: "inline에서 예약" },
    "咖啡": { en: "Coffee", ja: "コーヒー", ko: "커피" },
    "野草茶": { en: "Herb tea", ja: "野草茶", ko: "들풀차" },
    "茶": { en: "Tea", ja: "茶", ko: "차" },
    "酒": { en: "Wine", ja: "酒", ko: "술" },
    "梅酒": { en: "Plum wine", ja: "梅酒", ko: "매실주" },
    "大地佳釀全部": { en: "All drinks", ja: "飲みものすべて", ko: "마실 것 전체" },
    "選一": { en: "Select", ja: "選一", ko: "셀렉트" },
    "向風土山海致敬。茶與咖啡、酒、歲藏、大人柑仔店，是和職人、品牌、地方一起選的共好商品。": { en: "A bow to mountain and sea. Tea, coffee, wine, the cellar, and the old shop are chosen with makers, brands, and places.", ja: "山と海へ。茶とコーヒー、酒、歳の蔵、昔の店は、作り手とブランドと土地と一緒に選んだ品です。", ko: "산과 바다를 향해. 차와 커피, 술, 저장, 문방구 과자는 장인, 브랜드, 지역과 함께 고른 것입니다." },
    "滋味": { en: "Flavor", ja: "滋味", ko: "자미" },
    "知味": { en: "Knowing", ja: "知味", ko: "지미" },
    "之味": { en: "Time", ja: "之味", ko: "시간의 맛" },
    "玩味": { en: "Play", ja: "玩味", ko: "완미" },
    "入口的第一層。": { en: "The first layer on the tongue.", ja: "口に入る最初の層。", ko: "입에 닿는 첫 층." },
    "辨產地與製法。": { en: "Read the origin and the method.", ja: "産地と製法を聞き分ける。", ko: "산지와 제법을 가립니다." },
    "時間留下來的。": { en: "What time leaves behind.", ja: "時間が残したもの。", ko: "시간이 남긴 것." },
    "帶進另一種日常。": { en: "Carried into another day.", ja: "もう一つの日常へ。", ko: "또 다른 일상으로." },
    "品味生活": { en: "Objects", ja: "器物", ko: "기물" },
    "讓日日使用的器物，成為日常的風景。這裡放 The One 自己開發、設計或製作的杯盤與餐具，也放共同選擇的共好器物。食藝與音樂，是這張桌子的另外兩個感官。": { en: "Let the vessel you use every day become the view. Here are cups and plates The One developed, designed, or made, and objects chosen with others. Food and music are the table’s other two senses.", ja: "毎日使う器を、日常の景色に。ここには The One が開発し、設計し、作った杯と皿、一緒に選んだ器を置きます。食と音楽は、この卓のもう二つの感覚です。", ko: "날마다 쓰는 기물이 일상의 풍경이 되게 합니다. 여기에는 The One이 개발하고 디자인하고 만든 잔과 접시, 함께 고른 기물이 있습니다. 음식과 음악은 이 상의 다른 두 감각입니다." },
    "異數講堂": { en: "Lectures", ja: "講堂", ko: "강좌" },
    "風格學堂，也期許成為都市裡的藝文所在。打開五感六覺，把美學內化成日常的課。近日場次為版型示意；下方公開紀錄來自 The One 已發布的課程。": { en: "A school of style, and a wish to be a room for art in the city. Open the senses and let beauty become an ordinary class. Coming dates are sample layouts. The archive below is from classes The One has already published.", ja: "風格の学堂であり、都市の芸文の場所でありたい。五感を開き、美を日常の課にします。近日の回は見本。下の記録は The One がすでに公開した講座です。", ko: "스타일의 학교이고, 도시 안의 예술 자리가 되고자 합니다. 감각을 열고 아름다움을 일상의 수업으로 만듭니다. 다가오는 회차는 예시입니다. 아래 기록은 The One이 이미 공개한 강좌입니다." },
    "讓一場聚會，發生在異數生活": { en: "Let a gathering happen here", ja: "集まりを、異数生活で", ko: "모임이 여기서 일어나게" },
    "企業、媒體、家人。同一張桌子，不同的理由。把空間留給一群人，飯還是那一頓認真的飯。": { en: "A company, the press, a family. One table, different reasons. Leave the room to a group of people. The meal is still a meal taken seriously.", ja: "企業、メディア、家族。同じ卓、違う理由。空間を一団に預けても、食事は丁寧な一食のままです。", ko: "기업, 언론, 가족. 같은 상, 다른 이유. 공간을 한 무리에게 맡겨도 밥은 여전히 진지한 한 끼입니다." },
    "企業包場": { en: "A company table", ja: "企業の貸切", ko: "기업 대관" },
    "會議結束以後的那一餐，或一年一次、需要被記住的晚上。": { en: "The meal after the meeting, or the one evening a year that should be remembered.", ja: "会議のあとの一食。または年に一度、覚えていてほしい夜。", ko: "회의가 끝난 뒤의 한 끼, 또는 일 년에 한 번 기억되어야 할 밤." },
    "記者會／媒體餐會": { en: "Press and media", ja: "記者会見・メディア会食", ko: "기자회견 / 미디어 식사" },
    "發表需要一個不會搶走內容的空間。菜與器物先把氣氛放好。": { en: "A launch needs a room that does not steal the story. The dishes and the vessels set the air first.", ja: "発表には、中身を奪わない空間が要ります。料理と器が、先に空気を整えます。", ko: "발표에는 내용을 빼앗지 않는 공간이 필요합니다. 음식과 기물이 먼저 공기를 맞춥니다." },
    "家庭聚會": { en: "A family table", ja: "家族の集まり", ko: "가족 모임" },
    "生日、回門、久沒見的一桌。人比流程重要。": { en: "A birthday, a return, a table of people who have not met in a long time. People matter more than the running order.", ja: "誕生日、帰省、久しぶりに会う卓。人のほうが手順より大事です。", ko: "생일, 귀성, 오래 못 본 사람들의 상. 사람이 진행보다 중요합니다." },
    "留下日子與人數。這張表只在這台電腦上記一下，不會真的送出。": { en: "Leave a date and a number of guests. This form only notes it on this computer. It is not sent.", ja: "日と人数を残してください。この表はこのパソコンにメモするだけで、送信されません。", ko: "날짜와 인원을 남겨 주세요. 이 표는 이 컴퓨터에만 적히고, 실제로 보내지지 않습니다." },
    "姓名": { en: "Name", ja: "氏名", ko: "이름" },
    "電話": { en: "Phone", ja: "電話", ko: "전화" },
    "類型": { en: "Kind", ja: "種類", ko: "유형" },
    "希望日期": { en: "Date", ja: "希望日", ko: "원하는 날짜" },
    "人數": { en: "Guests", ja: "人数", ko: "인원" },
    "想說的話": { en: "A note", ja: "伝えたいこと", ko: "하고 싶은 말" },
    "送出洽詢": { en: "Send", ja: "送信する", ko: "보내기" },
    "已收到這筆示意洽詢。正式網站會把內容送到包場窗口，此 Demo 不會寄出。": { en: "This sample note is kept here. The live site will send it to the private-dining desk. This demo does not.", ja: "見本の相談を受け取りました。本番では貸切の窓口へ届きます。このデモは送りません。", ko: "예시 문의를 받았습니다. 정식 사이트는 대관 창구로 보냅니다. 이 데모는 보내지 않습니다." },
    "已收到這筆示意洽詢。": { en: "This sample note is kept here.", ja: "見本の相談を受け取りました。", ko: "예시 문의를 받았습니다." },
    "正式網站會把內容送到包場窗口，此 Demo 不會寄出。": { en: "The live site will send it to the private-dining desk. This demo does not.", ja: "本番では貸切の窓口へ届きます。このデモは送りません。", ko: "정식 사이트는 대관 창구로 보냅니다. 이 데모는 보내지 않습니다." },
    "2026.10.13 Sitemap": { en: "Sitemap, 13 Oct 2026", ja: "2026.10.13 サイトマップ", ko: "2026.10.13 사이트맵" },
    "網站架構": { en: "Sitemap", ja: "サイトマップ", ko: "사이트맵" },
    "這一頁把簡報裡的層級做成可以點的路。視覺跟隨南園：米色、明體、字距、置中標題，右側直書是訂位、報名與包場。": { en: "This page turns the deck into paths you can click. The look follows Nanyuan: cream, serif, open tracking, centered titles, and vertical links on the right for reserve, class, and private dining.", ja: "この頁は資料の階層を、押せる道にしたものです。見た目は南園に従います。生成り、明朝、字間、中央の見出し。右の縦書きは予約、申込、貸切です。", ko: "이 페이지는 자료의 층을 누를 수 있는 길로 만들었습니다. 모습은 난위안을 따릅니다. 미색, 명조, 자간, 가운데 제목. 오른쪽 세로글은 예약, 신청, 대관입니다." },
    "首頁　引領生活美好想望／品餚酌趣": { en: "Home — the longing, and the four paths", ja: "ホーム　想い／品餚酌趣", ko: "홈 — 마음 / 네 갈래" },
    "探索異數生活　介紹與核心理念": { en: "Explore — introduction and the core idea", ja: "探索　紹介と核", ko: "소개 — 이야기와 핵심" },
    "好好吃頓飯　主食・品飲・自然甜 → inline 訂位": { en: "Dining — mains, drinks, sweet → inline", ja: "食事　主食・飲・甘さ → inline", ko: "식사 — 주식·음료·단맛 → inline" },
    "品味生活　The One 原創與共好器物": { en: "Objects — The One originals and chosen pieces", ja: "器物　オリジナルと共選", ko: "기물 — 오리지널과 함께 고른 것" },
    "選一　茶咖啡・酒・歲藏・大人柑仔店": { en: "Select — tea, coffee, wine, cellar, old shop", ja: "選一　茶・酒・蔵・昔の店", ko: "셀렉트 — 차·커피·술·저장·옛 가게" },
    "商品詳細　故事、理念、職人 → 底部前往購買": { en: "A piece — story and maker, then a link to buy", ja: "品の詳細　物語と作り手 → 購入へ", ko: "상품 — 이야기와 만든 이, 아래로 구매" },
    "異數臻選　規格、價格、數量、購物車": { en: "Shop — spec, price, quantity, bag", ja: "店　仕様、価格、数、カート", ko: "숍 — 규격, 가격, 수량, 장바구니" },
    "異數講堂　分類列表 → 各堂詳細 → Accupass": { en: "Lectures — list, detail, Accupass", ja: "講堂　一覧 → 詳細 → Accupass", ko: "강좌 — 목록 → 상세 → Accupass" },
    "包場　企業／媒體餐會／家庭聚會 → 洽詢": { en: "Private — company, press, family → inquiry", ja: "貸切　企業／メディア／家族 → 相談", ko: "대관 — 기업 / 미디어 / 가족 → 문의" },
    "最新消息　品牌活動／商品／其他更新": { en: "News — events, goods, other updates", ja: "お知らせ　催し／品／その他", ko: "소식 — 행사 / 상품 / 그 밖" },
    "活動 CMS": { en: "Event fields", ja: "講座の欄", ko: "행사 필드" },
    "活動名稱": { en: "Name", ja: "名称", ko: "이름" },
    "活動日期": { en: "Date", ja: "日付", ko: "날짜" },
    "活動照片": { en: "Photo", ja: "写真", ko: "사진" },
    "報名連結": { en: "Booking link", ja: "申込リンク", ko: "신청 링크" },
    "商品 CMS": { en: "Product fields", ja: "商品の欄", ko: "상품 필드" },
    "商品名稱": { en: "Name", ja: "名称", ko: "이름" },
    "商品分類": { en: "Category", ja: "分類", ko: "분류" },
    "商品圖片": { en: "Image", ja: "画像", ko: "이미지" },
    "價格": { en: "Price", ja: "価格", ko: "가격" },
    "購買連結・異數臻選": { en: "Buy link · Yishu Select", ja: "購入リンク・店", ko: "구매 링크 · 이슈 셀렉트" },
    "商品頁的分工在 Sitemap 標為未定案：異數生活談為什麼選它，異數臻選才放完整規格、庫存與結帳。品牌站因此不會變成目錄商場。": { en: "The sitemap still marks this split as open: Yishu Living says why a piece was chosen. Yishu Select holds spec, stock, and checkout. The brand site does not become a catalog mall.", ja: "この分担は資料では未定です。異数生活は選んだ理由を話し、店が規格と在庫と会計を持ちます。ブランドの站は目録の商場にはなりません。", ko: "이 나눔은 자료에서 아직 확정이 아닙니다. 이슈 생활은 고른 이유를 말하고, 숍이 규격과 재고와 결제를 갖습니다. 브랜드 사이트는 카탈로그 상가가 되지 않습니다." },
    "新增一筆活動或商品時，沿用既有版面即可，不必為每一筆重做一頁。": { en: "When a class or a piece is added, the existing template fills itself. No new page is built for each one.", ja: "講座や品を一件足すときは、すでにある紙面を使います。一件ごとに頁を作り直しません。", ko: "강좌나 상품을 하나 더할 때는 이미 있는 판형을 씁니다. 건마다 페이지를 다시 만들지 않습니다." },
    "老蘿蔔乾奶油水潤餅": { en: "Aged radish cream runbing", ja: "三年蘿蔔乾のクリーム潤餅", ko: "묵은 무말랭이 크림 룬빙" },
    "梅干菜軟麵包": { en: "Preserved-mustard soft bread", ja: "梅干菜のやわらかパン", ko: "매간채 소프트 브레드" },
    "鹹蛋苦瓜軟麵包": { en: "Salted-egg bitter-melon bread", ja: "鹹蛋と苦瓜のやわらかパン", ko: "짠 달걀 여주 브레드" },
    "十穀米煙燻豬肉披薩": { en: "Ten-grain pizza, smoked pork", ja: "十穀米と燻製豚のピッツァ", ko: "십곡미 훈제 돼지고기 피자" },
    "金目鱸魚天婦羅": { en: "Red seabream tempura", ja: "金目鯛の天ぷら", ko: "도미 튀김" },
    "烏甜仔香菇鮮筍粥": { en: "Wutianzi porridge, mushroom and bamboo", ja: "烏甜仔ときのこと筍の粥", ko: "우톈쯔 버섯 죽순죽" },
    "火燒蝦膏泔濃湯飯": { en: "Scorched shrimp-roe rice", ja: "火焼蝦膏のご飯", ko: "불맛 새우알 밥" },
    "黃金土雞南瓜燉飯": { en: "Native chicken and pumpkin rice", ja: "土鶏とかぼちゃのリゾット", ko: "토종닭 호박 리소토" },
    "麻油酸桔松阪豬燉飯": { en: "Sesame-oil sour-citrus pork rice", ja: "麻油と酸桔の豚リゾット", ko: "참기름 산귤 돼지고기 리소토" },
    "石狗公魚": { en: "Grouper", ja: "石狗公", ko: "우럭" },
    "桂圓桃膠銀耳羹": { en: "Longan, peach gum, and snow fungus", ja: "竜眼と桃膠と白きくらげ", ko: "용안 도교 흰목이 탕" },
    "自然甜蔬果蛋糕": { en: "Seasonal vegetable cake", ja: "季節の野菜ケーキ", ko: "제철 채소 케이크" },
    "仙草茉莉花釀": { en: "Grass jelly and jasmine", ja: "仙草と茉莉の醸", ko: "선초와 재스민" },
    "窗花綠豆黃": { en: "Window-pattern mung cake", ja: "窓花の緑豆黄", ko: "창꽃 녹두황" },
    "柿餅蛋黃酥": { en: "Persimmon and salted-yolk pastry", ja: "干し柿の蛋黄酥", ko: "곶감 계란노른자 페이스트리" },
    "餐桌": { en: "A table", ja: "食卓", ko: "식탁" },
    "餐食": { en: "A meal", ja: "食事", ko: "식사" },
    "器物": { en: "Vessels", ja: "器", ko: "기물" },
    "酒與茶": { en: "Wine and tea", ja: "酒と茶", ko: "술과 차" },
    "講堂": { en: "A class", ja: "講堂", ko: "강좌" },
    "聚會的長桌": { en: "A long table", ja: "長い卓", ko: "긴 상" },
    "安靜的室內": { en: "A quiet room", ja: "静かな室内", ko: "조용한 실내" }
  };

  const TERMS = {
    "大地佳釀・茶與咖啡": { en: "Tea & coffee", ja: "茶とコーヒー", ko: "차와 커피" },
    "大地佳釀・酒": { en: "Wine & spirits", ja: "酒", ko: "술" },
    "歲藏": { en: "The cellar", ja: "歳の蔵", ko: "저장" },
    "大人柑仔店": { en: "The old shop", ja: "昔の店", ko: "옛 가게" },
    "器皿": { en: "Vessels", ja: "器皿", ko: "기명" },
    "杯具": { en: "Cups", ja: "杯", ko: "잔" },
    "餐具": { en: "Tableware", ja: "カトラリー", ko: "식기" },
    "不倒翁杯": { en: "Roly-poly cups", ja: "起き上がり杯", ko: "오뚝이 잔" },
    "共好器物": { en: "Chosen objects", ja: "共選の器", ko: "함께 고른 기물" },
    "共好商品": { en: "Chosen goods", ja: "共選の品", ko: "함께 고른 상품" },
    "咖啡豆": { en: "Beans", ja: "コーヒー豆", ko: "원두" },
    "濾掛單包": { en: "Drip bags", ja: "ドリップ", ko: "드립백" },
    "野草茶": { en: "Herb tea", ja: "野草茶", ko: "들풀차" },
    "茗京萃": { en: "Ming Jing Cui", ja: "茗京萃", ko: "밍징추이" },
    "茶": { en: "Tea", ja: "茶", ko: "차" },
    "葡萄與果釀": { en: "Grape and fruit", ja: "葡萄と果", ko: "포도와 과실" },
    "地瓜、米釀與啤酒": { en: "Sweet potato, rice, beer", ja: "薩摩芋、米、ビール", ko: "고구마, 쌀, 맥주" },
    "梅酒與花果": { en: "Plum and flowers", ja: "梅酒と花", ko: "매실과 꽃" },
    "葡萄酒與蘭姆": { en: "Wine and rum", ja: "葡萄酒とラム", ko: "와인과 럼" },
    "蘿蔔乾": { en: "Dried radish", ja: "切り干し大根", ko: "무말랭이" },
    "醃梅": { en: "Salted plum", ja: "梅漬け", ko: "절인 매실" },
    "梅與梅漿": { en: "Plum and paste", ja: "梅と梅漿", ko: "매실과 페이스트" },
    "果乾與果露": { en: "Dried fruit and syrup", ja: "ドライフルーツと露", ko: "건과와 시럽" },
    "綠豆黃": { en: "Mung cake", ja: "緑豆黄", ko: "녹두황" },
    "柿": { en: "Persimmon", ja: "柿", ko: "감" },
    "蔬菜蛋糕": { en: "Vegetable cake", ja: "野菜ケーキ", ko: "채소 케이크" },
    "生活美學課": { en: "Living", ja: "生活の課", ko: "생활 미학" },
    "風格美學": { en: "Style", ja: "風格", ko: "스타일" },
    "旅遊與文化": { en: "Travel & culture", ja: "旅と文化", ko: "여행과 문화" },
    "電影": { en: "Film", ja: "映画", ko: "영화" },
    "異數展覽": { en: "Exhibition", ja: "展示", ko: "전시" },
    "包場說明會": { en: "Private-dining briefing", ja: "貸切説明会", ko: "대관 설명회" },
    "品牌活動": { en: "Event", ja: "催し", ko: "행사" },
    "商品": { en: "Goods", ja: "品物", ko: "상품" },
    "其他更新": { en: "Other", ja: "その他", ko: "그 밖" },
    "瓶": { en: "bottle", ja: "瓶", ko: "병" },
    "件": { en: "piece", ja: "点", ko: "점" },
    "包": { en: "pack", ja: "袋", ko: "봉지" },
    "盒": { en: "box", ja: "箱", ko: "상자" },
    "顆": { en: "piece", ja: "個", ko: "개" },
    "茶包": { en: "sachets", ja: "ティーバッグ", ko: "티백" },
    "1 入": { en: "1 bag", ja: "1袋", ko: "1포" },
    "組": { en: "set", ja: "組", ko: "세트" },
    "片": { en: "slice", ja: "切", ko: "조각" },
    "罐": { en: "jar", ja: "瓶詰", ko: "병조림" },
    "異數生活": { en: "Yishu Living", ja: "異数生活", ko: "이슈 생활" },
    "The One": { en: "The One", ja: "The One", ko: "The One" }
  };

  const TASTE_KEY = { "滋味": "wei", "知味": "zhi", "之味": "zhi2", "玩味": "wan" };

  const LECTURE_I18N = {
    "mei-time": {
      en: ["Time and the plum", "From a three-year plum to a ten-year plum: how one fruit is rewritten by time.", "A sample date, to show the class template. Name, date, photo, and Accupass link are filled by the event fields.", "Yishu Living"],
      ja: ["梅と時間", "三年梅から十年梅へ。一つの梅が時間にどう書き換わるか。", "見本の回です。名称、日付、写真、申込リンクは講座の欄から入ります。", "異数生活"],
      ko: ["매실과 시간", "삼 년 매실에서 십 년 매실로. 열매 하나가 시간에 어떻게 다시 쓰이는지.", "예시 회차입니다. 이름, 날짜, 사진, 신청 링크는 행사 필드에서 채워집니다.", "이슈 생활"]
    },
    "table-objects": {
      en: ["How an object becomes a view", "From bamboo to porcelain to the roly-poly cup: how one vessel changes a meal.", "A sample. Style here means the things of a day, not a label on a wall.", "Yishu Living"],
      ja: ["器が景色になるまで", "竹、瓷の皿、起き上がり杯。一つの器が食事をどう変えるか。", "見本です。風格は壁の説明ではなく、日常の物です。", "異数生活"],
      ko: ["기물이 풍경이 되는 법", "대나무, 접시, 오뚝이 잔. 그릇 하나가 식사를 어떻게 바꾸는지.", "예시입니다. 스타일은 벽의 설명이 아니라 일상의 물건입니다.", "이슈 생활"]
    },
    "island-table": {
      en: ["An island on the table", "Before a trip: a bottle, a tea, a dish of aged radish.", "A sample. Travel here begins on the table.", "Yishu Living"],
      ja: ["卓の上の島", "旅の前に。一瓶、一杯の茶、一切干し大根。", "見本です。ここの旅は食卓から始まります。", "異数生活"],
      ko: ["상 위의 섬", "떠나기 전에. 한 병, 한 잔의 차, 묵은 무말랭이 한 접시.", "예시입니다. 여기서 여행은 상에서 시작합니다.", "이슈 생활"]
    },
    "film-meal": {
      en: ["A screening about eating", "Watch a film in which the meal is the lead, then sit down to eat.", "A sample. The film list is not set.", "Yishu Living"],
      ja: ["食事についての上映", "食事が主役の映画を見てから、座って食べる。", "見本です。上映作は未定です。", "異数生活"],
      ko: ["밥에 관한 상영", "식사가 주인공인 영화를 보고, 앉아서 먹습니다.", "예시입니다. 상영작은 정해지지 않았습니다.", "이슈 생활"]
    },
    huigan: {
      en: ["Huigan: the season’s exhibition", "Under the word huigan, objects, food, and writing share one room.", "A sample exhibition. Dates and works will use this template.", "Yishu Living"],
      ja: ["回甘：今季の展示", "回甘を題に、器と食と文字を一つの部屋で見る。", "見本の展示です。日程と作品はこの紙面を使います。", "異数生活"],
      ko: ["회감: 이 계절의 전시", "회감을 제목으로, 기물과 음식과 글을 한 방에 둡니다.", "예시 전시입니다. 일정과 작품은 이 판형을 씁니다.", "이슈 생활"]
    },
    "venue-brief": {
      en: ["A briefing on private dining", "Three tables: a company, the press, a family.", "A sample. The briefing books on Accupass. A real inquiry uses the form.", "Yishu Living"],
      ja: ["貸切説明会", "企業、メディア、家族。三つの卓。", "見本です。説明会は Accupass。本番の相談はフォームです。", "異数生活"],
      ko: ["대관 설명회", "기업, 언론, 가족. 세 개의 상.", "예시입니다. 설명회는 Accupass. 실제 문의는 양식입니다.", "이슈 생활"]
    },
    longkui: {
      en: ["After the year: black nightshade, new garlic, spring algae", "Bitter-then-sweet nightshade, the clear heat of new garlic, and spring algae from the east coast.", "A published class. Three ordinary Taiwanese tastes.", "The One"],
      ja: ["年明けの三帖：イヌホオズキ、新にんにく、春の海藻", "苦さのあとの甘さ、新しいにんにく、東海岸の春藻。", "公開済みの講座。三つの日常の台湾の味。", "The One"],
      ko: ["설 지난 세 가지: 까마중, 햇마늘, 봄 해조", "쓴맛 뒤의 단맛, 새 마늘, 동해안의 봄 해조.", "공개된 강좌. 타이완의 일상적인 맛 셋.", "The One"]
    },
    bakery: {
      en: ["Old flavors, newly chosen: egg roll, nougat, pineapple bun", "From egg roll to pineapple bun: how a crisp scent becomes trust.", "A published class on three pastries and where they traveled.", "The One"],
      ja: ["古い味の新しい選択：エッグロール、牛粒、パイナップルパン", "サクッとした香りが、どう信頼になるか。", "公開済みの三講。", "The One"],
      ko: ["옛맛의 새 선택: 에그롤, 우립, 파인애플 빵", "바삭한 향이 어떻게 믿음이 되는지.", "공개된 세 강좌.", "The One"]
    },
    seafood: {
      en: ["A new-year table of the sea", "Shrimp, rice cake, and dried seafood, read through the four tastes.", "A published class on the new-year sea.", "The One"],
      ja: ["海で迎える年", "海老、お餅、乾物を四味でほどく。", "公開済みの講座。", "The One"],
      ko: ["바다로 맞는 설", "새우, 떡, 건어를 네 가지 맛으로 읽습니다.", "공개된 강좌.", "The One"]
    },
    concert: {
      en: ["A musical dinner", "Courses and lamplight, and a guided listening of songs from the musical stage.", "A published evening.", "The One"],
      ja: ["音楽の夕食", "料理と灯りのあいだで、ミュージカルの曲を聴く。", "公開済みの夜。", "The One"],
      ko: ["음악이 있는 저녁", "요리와 등불 사이에서 뮤지컬 곡을 듣습니다.", "공개된 밤.", "The One"]
    },
    cruise: {
      en: ["From an idea to a river ship", "Ten years ago life was taken onto a ship. Ten years on, a map for travelers.", "A published talk on chartering a river ship.", "The One"],
      ja: ["着想から出航へ", "十年前、暮らしを船に載せた。十年後、旅人のための海図。", "公開済みの話。", "The One"],
      ko: ["착상에서 출항까지", "십 년 전 삶을 배에 실었습니다. 십 년 뒤, 여행자를 위한 해도.", "공개된 이야기.", "The One"]
    },
    "mei-class": {
      en: ["A good life of plums: the quiet of the pickle", "From a crisp fruit to a sweet-salt preserve, and the people inside that memory.", "A published class. Two sessions on keeping fruit.", "The One"],
      ja: ["梅の良い暮らし：漬けの静けさ", "果実の歯ごたえから、甘く塩気のある保存へ。", "公開済み。果実を残す二講。", "The One"],
      ko: ["매실의 좋은 삶: 절임의 고요", "아삭한 열매에서 달고 짠 저장으로.", "공개된 강좌. 과일을 남기는 두 시간.", "The One"]
    }
  };

  const NEWS_I18N = {
    citrus: {
      en: ["A proper meal: citrus at the table", "Citrus from across Taiwan, and the new-year wish served as food.", "A published evening. The kitchen put the blessing in the dishes, not only in the greeting."],
      ja: ["ちゃんと食べる：柑橘が席につく", "台湾各地の柑橘を主役に、「大きな吉」を食卓の祝いにする。", "公開された夜。祝福はあいさつではなく、料理の中にあります。"],
      ko: ["제대로 먹는 밥: 감귤이 자리에 앉다", "타이완 각지의 감귤을 주인공으로, 새해 덕담을 음식으로 냅니다.", "공개된 밤. 축복은 인사가 아니라 접시 안에 있습니다."]
    },
    "newyear-gift": {
      en: ["The 2026 new-year gift", "A year gift gathered from local farms and makers.", "A published note. The gift is also an edit: support for a place, not only a sentence about it."],
      ja: ["2026 年の正月の贈り物", "土地の作物と作り手を、贈れる一箱に。", "公開された知らせ。贈り物は選品でもあります。"],
      ko: ["2026 설 선물", "지역의 농사와 장인을 한 상자에 모았습니다.", "공개된 소식. 선물은 곧 선택이기도 합니다."]
    },
    "mei-life": {
      en: ["A good life of plums", "Meals and teas built around the plum, the acid moving from the first sip to the main plate.", "A published series. Plum vinegar, perilla plum, and grouper are the same fruit in different seats.", ""],
      ja: ["梅の良い暮らし", "梅を題にした食と茶。酸は前菜から主菜へ歩きます。", "公開された会。梅酢、紫蘇梅、魚は同じ季節の違う席です。"],
      ko: ["매실의 좋은 삶", "매실을 제목으로 한 식사와 차. 산미가 첫 모금에서 메인까지 걷습니다.", "공개된 모임. 매실 식초, 차조기 매실, 생선은 같은 계절의 다른 자리입니다."]
    },
    "huigan-news": {
      en: ["October of huigan", "A month under the word huigan: object, table, cellar, and class in the same stretch of days.", "A published record. Huigan is a word the brand keeps: the sweet arrives after the acid.", ""],
      ja: ["回甘の十月", "回甘を題に、品、食、酒、講堂を同じ日々へ置く。", "公開された記録。回甘は、酸のあとに甘さが来るという言葉です。"],
      ko: ["회감의 시월", "회감을 제목으로, 기물과 상과 술과 강좌를 같은 날들에 둡니다.", "공개된 기록. 회감은 신맛 뒤에 단맛이 온다는 말입니다."]
    }
  };

  function t(key) {
    if (lang === "zh-Hans") {
      const base = UI["zh-Hant"][key];
      return base == null ? key : hans(base);
    }
    const pack = UI[lang] || UI["zh-Hant"];
    if (pack[key] != null) return pack[key];
    return UI["zh-Hant"][key] != null ? UI["zh-Hant"][key] : key;
  }

  function term(text) {
    if (!text || lang === "zh-Hant") return text;
    if (lang === "zh-Hans") return hans(text);
    const row = TERMS[text];
    return row && row[lang] ? row[lang] : text;
  }

  function phrase(text) {
    if (!text || lang === "zh-Hant") return text;
    if (lang === "zh-Hans") return hans(text);
    const row = PHRASES[text];
    return row && row[lang] ? row[lang] : null;
  }

  function viewProduct(p) {
    const extra = (window.PRODUCT_I18N || {})[p.id];
    const pack = extra && extra[lang];
    const name = lang === "zh-Hant" ? p.name : lang === "zh-Hans" ? hans(p.name) : (pack ? pack[0] : p.name);
    const blurb = lang === "zh-Hant" ? p.blurb : lang === "zh-Hans" ? hans(p.blurb) : (pack ? pack[1] : p.blurb);
    return {
      ...p,
      name,
      blurb,
      catLabel: term(p.cat),
      subLabel: term(p.sub),
      tasteLabel: p.taste ? term(p.taste) : "",
      specLabel: term(p.spec)
    };
  }

  function viewLecture(item) {
    const pack = (LECTURE_I18N[item.id] || {})[lang];
    if (lang === "zh-Hant") return item;
    if (lang === "zh-Hans") {
      return { ...item, title: hans(item.title), summary: hans(item.summary), body: hans(item.body), place: hans(item.place), category: term(item.category) };
    }
    if (!pack) return { ...item, category: term(item.category), place: term(item.place) };
    return { ...item, title: pack[0], summary: pack[1], body: pack[2], place: pack[3], category: term(item.category) };
  }

  function viewNews(item) {
    const pack = (NEWS_I18N[item.id] || {})[lang];
    if (lang === "zh-Hant") return item;
    if (lang === "zh-Hans") {
      return { ...item, title: hans(item.title), summary: hans(item.summary), body: hans(item.body), kind: term(item.kind) };
    }
    if (!pack) return { ...item, kind: term(item.kind) };
    return { ...item, title: pack[0], summary: pack[1], body: pack[2], kind: term(item.kind) };
  }

  function applyStatic() {
    if (lang === "zh-Hant") {
      const page = document.body.dataset.page;
      if (page && UI["zh-Hant"]["title." + page] && !["lecture", "product", "shop", "news"].includes(page)) {
        document.title = t("title." + page);
      }
      return;
    }
    const root = document.body;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("#site-header, #site-footer, .side-cta")) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const raw = node.nodeValue;
      const key = raw.trim();
      if (!key) return;
      let next = phrase(key);
      if (next == null && lang !== "zh-Hans") {
        const prod = (window.PRODUCTS || []).find((item) => item.name === key);
        if (prod) next = viewProduct(prod).name;
      }
      if (next == null && TERMS[key] && lang !== "zh-Hans") next = term(key);
      if (next == null && lang === "zh-Hans") next = hans(key);
      if (next != null && next !== key) {
        node.nodeValue = raw.replace(key, next);
      }
    });
    document.querySelectorAll("main [alt], .page [alt]").forEach((el) => {
      const alt = el.getAttribute("alt");
      const next = phrase(alt) || (lang === "zh-Hans" ? hans(alt) : null);
      if (next) el.setAttribute("alt", next);
    });
    const page = document.body.dataset.page;
    if (page && !["lecture", "product", "shop", "news"].includes(page)) {
      document.title = t("title." + page);
    }
  }

  window.YISHU = { lang, LANGS, t, term, hans, phrase, viewProduct, viewLecture, viewNews, applyStatic, TASTE_KEY };
  window.t = t;
})();
