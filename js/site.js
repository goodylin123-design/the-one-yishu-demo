(function () {
  const page = document.body.dataset.page || "";

  const NAV = [
    ["about", "about.html", "探索異數生活"],
    ["dining", "dining.html", "好好吃頓飯"],
    ["lifestyle", "lifestyle.html", "品味生活"],
    ["select", "select.html", "選一"],
    ["lectures", "lectures.html", "異數講堂"],
    ["venue", "venue.html", "包場"],
    ["news", "news.html", "最新消息"],
    ["shop", "shop.html", "異數臻選"]
  ];

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function money(n) {
    return "NT$ " + Number(n).toLocaleString("zh-Hant");
  }

  function img(key) {
    return IMG[key] || IMG.interior;
  }

  function param(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function productById(id) {
    return PRODUCTS.find((item) => item.id === id);
  }

  function makerOf(p) {
    if (p.sub === "茗京萃") return "茗京萃";
    if (p.id === "baishuai") return "白帥帥";
    if (p.id === "shengeng") return "深耕園";
    if (p.id === "luye") return "鹿野";
    if (p.group === "original") return "The One 原創";
    if (p.group === "partner") return p.name.split(" ")[0];
    return "合作職人、品牌或地方產業";
  }

  function storyOf(p) {
    const taste = TASTE[p.taste] ? "在四味學裡，它靠近「" + p.taste + "」。" + TASTE[p.taste] : "";
    return p.blurb + taste;
  }

  function syncHeader() {
    const header = document.querySelector(".site-header");
    if (header) document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  function renderChrome() {
    const active = page === "lecture" ? "lectures" : page;
    const shop = page === "shop";
    const links = NAV.map(([key, href, label], index) => {
      const rule = index === 0 ? '<span class="nav-rule" aria-hidden="true"></span>' : "";
      const cls = key === active ? "active" : "";
      return `<a class="${cls}" data-nav="${key}" href="${href}">${label}</a>${rule}`;
    }).join("");

    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML = `
        <header class="site-header">
          <button class="menu-btn" type="button" aria-label="開啟選單"><span></span><span></span></button>
          <a class="logo" href="index.html">
            <img src="assets/logo.png" alt="The One">
            <span>${shop ? "異數臻選" : "異數生活"}</span>
          </a>
          <nav class="primary-nav" aria-label="主選單">${links}</nav>
        </header>
        <div class="side-cta">
          <a href="${STORE.inline}" target="_blank" rel="noopener">線上預訂</a>
          <a href="lectures.html">講堂報名</a>
          <a href="venue.html">洽詢包場</a>
        </div>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="footer-grid">
            <div>
              <h2>異數生活</h2>
              <a href="about.html">探索異數生活</a>
              <a href="dining.html">好好吃頓飯</a>
              <a href="lifestyle.html">品味生活</a>
              <a href="select.html">選一</a>
              <a href="lectures.html">異數講堂</a>
              <a href="venue.html">包場</a>
            </div>
            <div>
              <h2>前往</h2>
              <a href="${STORE.inline}" target="_blank" rel="noopener">線上預訂 inline</a>
              <a href="${STORE.accupass}" target="_blank" rel="noopener">Accupass 報名</a>
              <a href="shop.html">異數臻選</a>
              <a href="news.html">最新消息</a>
              <a href="map.html">網站架構</a>
            </div>
            <div>
              <h2>The One</h2>
              <a href="${STORE.parent}" target="_blank" rel="noopener">異數悅遊・南園</a>
              <a href="${STORE.theone}" target="_blank" rel="noopener">The One 生活概念店</a>
              <a href="about.html">品牌精神</a>
            </div>
            <div>
              <h2>聯絡</h2>
              <p>${STORE.address}</p>
              <p>${STORE.hours}</p>
              <a href="${STORE.phoneHref}">${STORE.phone}</a>
            </div>
          </div>
          <div class="mobile-cta">
            <a class="more" href="${STORE.inline}" target="_blank" rel="noopener">線上預訂</a>
            <a class="more" href="lectures.html">講堂報名</a>
            <a class="more" href="venue.html">洽詢包場</a>
          </div>
          <p class="copy">
            架構 Demo｜版面、字級與色彩參考南園官網。<br>
            飲食地景菜價摘自公開頁面；商品價格、部分講堂場次與商品故事為示意，正式內容由 CMS 維護。
            <br><button type="button" id="note-toggle">顯示區塊註記</button>
          </p>
        </footer>
        <div class="drawer" id="cart-drawer" hidden>
          <div class="drawer-panel" role="dialog" aria-label="購物車">
            <h2>購物車</h2>
            <div id="cart-list"></div>
            <p id="cart-empty" class="meta">尚未加入商品。</p>
            <p id="cart-total" class="meta"></p>
            <button class="btn-line" type="button" id="cart-checkout">結帳示意</button>
            <p id="cart-done" class="form-ok" hidden>此為購買流程示意，不會成立訂單，也不會扣款。</p>
            <p style="margin-top:28px"><button type="button" class="more" id="cart-close">關閉</button></p>
          </div>
        </div>`;
    }

    document.querySelector(".menu-btn")?.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      link.addEventListener("click", () => document.body.classList.remove("nav-open"));
    });

    const notesOn = sessionStorage.getItem("yishu-notes") === "1";
    document.body.classList.toggle("show-notes", notesOn);
    const noteBtn = document.getElementById("note-toggle");
    if (noteBtn) {
      noteBtn.textContent = notesOn ? "隱藏區塊註記" : "顯示區塊註記";
      noteBtn.addEventListener("click", () => {
        const next = !document.body.classList.contains("show-notes");
        document.body.classList.toggle("show-notes", next);
        sessionStorage.setItem("yishu-notes", next ? "1" : "0");
        noteBtn.textContent = next ? "隱藏區塊註記" : "顯示區塊註記";
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.body.classList.remove("nav-open");
        document.getElementById("cart-drawer")?.setAttribute("hidden", "");
      }
    });

    bindCart();
    syncHeader();
    window.addEventListener("resize", syncHeader);
    window.addEventListener("load", syncHeader);
  }

  function cart() {
    try { return JSON.parse(localStorage.getItem("yishu-cart") || "[]"); }
    catch (error) { return []; }
  }

  function saveCart(items) {
    localStorage.setItem("yishu-cart", JSON.stringify(items));
    paintCart();
  }

  function paintCart() {
    const items = cart();
    const list = document.getElementById("cart-list");
    const empty = document.getElementById("cart-empty");
    const total = document.getElementById("cart-total");
    if (!list) return;
    list.innerHTML = items.map((row) => `
      <div class="cart-row">
        <span>${esc(row.name)} × ${row.qty}</span>
        <span>${money(row.price * row.qty)}</span>
      </div>`).join("");
    if (empty) empty.hidden = items.length > 0;
    if (total) {
      const sum = items.reduce((n, row) => n + row.price * row.qty, 0);
      total.textContent = items.length ? "示意合計 " + money(sum) : "";
    }
  }

  function bindCart() {
    paintCart();
    document.getElementById("cart-close")?.addEventListener("click", () => {
      document.getElementById("cart-drawer")?.setAttribute("hidden", "");
    });
    document.getElementById("cart-drawer")?.addEventListener("click", (event) => {
      if (event.target.id === "cart-drawer") event.currentTarget.setAttribute("hidden", "");
    });
    document.getElementById("cart-checkout")?.addEventListener("click", () => {
      if (!cart().length) return;
      document.getElementById("cart-done")?.removeAttribute("hidden");
    });
  }

  function addToCart(p, qty) {
    const items = cart();
    const found = items.find((row) => row.id === p.id);
    if (found) found.qty += qty;
    else items.push({ id: p.id, name: p.name, price: p.price, qty });
    saveCart(items);
    document.getElementById("cart-done")?.setAttribute("hidden", "");
    document.getElementById("cart-drawer")?.removeAttribute("hidden");
  }

  function card(p, mode) {
    const href = mode === "shop" ? `shop.html?id=${encodeURIComponent(p.id)}` : `product.html?id=${encodeURIComponent(p.id)}`;
    const price = mode === "shop" ? `<span class="price">${money(p.price)}</span>` : "";
    return `
      <a class="pcard" href="${href}">
        <span class="media"><img src="${img(p.image)}" alt="${esc(p.name)}"></span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.sub)}${p.taste ? "・" + esc(p.taste) : ""}</p>
        ${price}
        <span class="more">探索更多</span>
      </a>`;
  }

  function grouped(list, mode) {
    const cats = [...new Set(list.map((p) => p.cat))];
    return cats.map((cat) => {
      const items = list.filter((p) => p.cat === cat);
      const subs = [...new Set(items.map((p) => p.sub))];
      return `
        <section class="cat-block">
          <h2>${esc(cat)}</h2>
          ${subs.map((sub) => `
            <h3>${esc(sub)}</h3>
            <div class="grid-4">${items.filter((p) => p.sub === sub).map((p) => card(p, mode)).join("")}</div>
          `).join("")}
        </section>`;
    }).join("");
  }

  function bindFilters(root, items, mode) {
    const buttons = root.querySelectorAll("[data-filter]");
    const grid = root.querySelector("[data-grid]");
    function paint(key) {
      const list = key === "all" ? items : items.filter((p) => p.cat === key || p.group === key);
      grid.innerHTML = grouped(list, mode);
      buttons.forEach((btn) => btn.classList.toggle("is-on", btn.dataset.filter === key));
    }
    buttons.forEach((btn) => btn.addEventListener("click", () => paint(btn.dataset.filter)));
    paint("all");
  }

  function renderHome() {
    const news = document.getElementById("home-news");
    const talks = document.getElementById("home-talks");
    const partners = document.getElementById("home-partners");
    const originals = document.getElementById("home-originals");
    if (news) {
      news.innerHTML = NEWS.slice(0, 3).map((item) => `
        <a class="line-item" href="news.html?id=${item.id}">
          <time>${esc(item.date)}</time>
          <span>${esc(item.title)}</span>
        </a>`).join("");
    }
    if (talks) {
      talks.innerHTML = LECTURES.filter((item) => item.state === "upcoming").slice(0, 3).map((item) => `
        <a class="line-item" href="lecture.html?id=${item.id}">
          <time>${esc(item.date)}</time>
          <span>${esc(item.title)}</span>
        </a>`).join("");
    }
    const pick = (ids) => ids.map(productById).filter(Boolean);
    if (partners) partners.innerHTML = pick(["luobo10", "jufeng", "bishi-yolk", "dongfang"]).map((p) => card(p, "brand")).join("");
    if (originals) originals.innerHTML = pick(["zhizhu", "zhanfang", "baihe", "jian"]).map((p) => card(p, "brand")).join("");
  }

  function renderSelect() {
    const root = document.getElementById("select-root");
    if (!root) return;
    const items = PRODUCTS.filter((p) => p.group === "select");
    const cats = [...new Set(items.map((p) => p.cat))];
    root.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all" class="is-on">全部</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(cat)}</button>`))
      .join("");
    bindFilters(root, items, "brand");
  }

  function renderLifestyle() {
    const root = document.getElementById("life-root");
    if (!root) return;
    const items = PRODUCTS.filter((p) => p.group === "original" || p.group === "partner");
    const cats = [...new Set(items.map((p) => p.cat))];
    root.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all" class="is-on">全部</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(cat)}</button>`))
      .join("");
    bindFilters(root, items, "brand");
  }

  function renderLectures() {
    const root = document.getElementById("lecture-root");
    if (!root) return;
    const cats = [...new Set(LECTURES.map((item) => item.category))];
    const filters = root.querySelector("[data-filters]");
    const grid = root.querySelector("[data-grid]");
    filters.innerHTML = [`<button type="button" data-filter="all">全部</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(cat)}</button>`))
      .join("");
    function paint(key) {
      const list = LECTURES.filter((item) => key === "all" || item.category === key);
      const upcoming = list.filter((item) => item.state === "upcoming");
      const archive = list.filter((item) => item.state === "archive");
      grid.innerHTML = `
        ${upcoming.length ? `<h2>近日活動</h2><div class="grid-4" style="margin-bottom:72px">${upcoming.map(talkCard).join("")}</div>` : ""}
        ${archive.length ? `<h2>公開課程紀錄</h2><div class="grid-4">${archive.map(talkCard).join("")}</div>` : ""}`;
      filters.querySelectorAll("button").forEach((btn) => btn.classList.toggle("is-on", btn.dataset.filter === key));
    }
    filters.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-filter]");
      if (btn) paint(btn.dataset.filter);
    });
    paint("all");
  }

  function talkCard(item) {
    return `
      <a class="pcard" href="lecture.html?id=${encodeURIComponent(item.id)}">
        <span class="media"><img src="${img(item.image)}" alt=""></span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.date)}　${esc(item.category)}${item.demo ? "　示意" : ""}</p>
        <span class="more">探索更多</span>
      </a>`;
  }

  function renderLecture() {
    const root = document.getElementById("lecture-detail");
    if (!root) return;
    const item = LECTURES.find((row) => row.id === param("id"));
    if (!item) {
      root.innerHTML = `<div class="block narrow"><h1>找不到這一堂</h1><p><a class="more" href="lectures.html">回到異數講堂</a></p></div>`;
      return;
    }
    document.title = item.title + "｜異數講堂";
    root.innerHTML = `
      <section class="page-hero" data-note="活動照片"><img src="${img(item.image)}" alt=""></section>
      <section class="block">
        <div class="wrap detail">
          <div>
            <p class="kicker" style="text-align:left">${esc(item.category)}${item.demo ? "　・　示意場次" : "　・　公開紀錄"}</p>
            <h1>${esc(item.title)}</h1>
            <p class="lead">${esc(item.summary)}</p>
          </div>
          <div class="prose">
            <ul class="spec-list">
              <li><span>日期</span><strong>${esc(item.date)}</strong></li>
              <li><span>地點</span><strong>${esc(item.place)}</strong></li>
              <li><span>報名</span><strong>${item.state === "upcoming" ? "Accupass" : "課程已結束"}</strong></li>
            </ul>
            <p>${esc(item.body)}</p>
            ${item.state === "upcoming"
              ? `<p><a class="btn-line" href="${STORE.accupass}" target="_blank" rel="noopener">前往 Accupass 報名</a></p>`
              : `<p><a class="more" href="https://www.theonestyle.com/website_html/event_list.asp" target="_blank" rel="noopener">查看 The One 課程列表</a></p>`}
            <p><a class="more" href="lectures.html">回到講堂列表</a></p>
          </div>
        </div>
      </section>`;
  }

  function renderNews() {
    const root = document.getElementById("news-root");
    if (!root) return;
    const item = NEWS.find((row) => row.id === param("id"));
    if (item) {
      document.title = item.title + "｜最新消息";
      root.innerHTML = `
        <section class="page-hero"><img src="${img(item.image)}" alt=""></section>
        <section class="block narrow prose">
          <p class="kicker">${esc(item.kind)}　${esc(item.date)}</p>
          <h1>${esc(item.title)}</h1>
          <p>${esc(item.summary)}</p>
          <p>${esc(item.body)}</p>
          <p><a class="more" href="news.html">回到最新消息</a></p>
        </section>`;
      return;
    }
    root.innerHTML = `
      <section class="block">
        <div class="narrow">
          <p class="kicker">品牌活動／商品／其他更新</p>
          <h1>最新消息</h1>
          <p class="lead">會持續更新的內容，正式站由 CMS 新增一筆，就套用這個版面。</p>
        </div>
        <div class="wrap" style="margin-top:56px">
          <div class="line-list">
            ${NEWS.map((row) => `
              <a class="line-item" href="news.html?id=${row.id}">
                <time>${esc(row.date)}</time>
                <span>${esc(row.title)}<br><em>${esc(row.kind)}</em></span>
              </a>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function related(p) {
    return PRODUCTS.filter((item) => item.cat === p.cat && item.id !== p.id).slice(0, 4);
  }

  function renderProduct() {
    const root = document.getElementById("product-root");
    if (!root) return;
    const p = productById(param("id"));
    if (!p) {
      root.innerHTML = `<div class="block narrow"><h1>找不到這件商品</h1><p><a class="more" href="select.html">回到選一</a></p></div>`;
      return;
    }
    document.title = p.name + "｜異數生活";
    const navKey = p.group === "select" ? "select" : "lifestyle";
    document.querySelector(`[data-nav="${navKey}"]`)?.classList.add("active");
    const others = related(p);
    root.innerHTML = `
      <section class="block" data-note="商品詳細頁｜故事為主，購買導向異數臻選">
        <div class="wrap detail">
          <span class="media"><img src="${img(p.image)}" alt="${esc(p.name)}"></span>
          <div>
            <p class="kicker" style="text-align:left">${esc(p.cat)}　／　${esc(p.sub)}</p>
            <h1>${esc(p.name)}</h1>
            <div class="prose">
              <p>${esc(storyOf(p))}</p>
              <p>製作者／品牌：${esc(makerOf(p))}。這一頁談它為什麼被選進來。完整規格、庫存與結帳，留在異數臻選。</p>
            </div>
            <ul class="spec-list">
              <li><span>示意價格</span><strong>${money(p.price)}</strong></li>
              <li><span>規格</span><strong>${esc(p.spec)}</strong></li>
              ${p.taste ? `<li><span>四味</span><strong>${esc(p.taste)}</strong></li>` : ""}
            </ul>
            <div class="buybox">
              <a class="btn-line" href="shop.html?id=${encodeURIComponent(p.id)}">前往異數臻選購買</a>
            </div>
          </div>
        </div>
        ${others.length ? `<div class="wrap" style="margin-top:88px"><h2>延伸</h2><div class="grid-4">${others.map((item) => card(item, "brand")).join("")}</div></div>` : ""}
      </section>`;
  }

  function renderShop() {
    const root = document.getElementById("shop-root");
    if (!root) return;
    const p = productById(param("id"));
    if (!p) {
      const cats = [...new Set(PRODUCTS.map((item) => item.cat))];
      root.innerHTML = `
        <section class="block" data-note="異數臻選｜規格、價格與購買">
          <div class="narrow">
            <p class="kicker">線上商店</p>
            <h1>異數臻選</h1>
            <p class="lead">這裡完成瀏覽與購買。品牌故事留在異數生活。價格為示意。</p>
          </div>
          <div class="wrap" id="shop-filter" style="margin-top:56px">
            <div class="filters" data-filters></div>
            <div data-grid></div>
          </div>
        </section>`;
      const box = root.querySelector("#shop-filter");
      box.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all">全部</button>`]
        .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(cat)}</button>`))
        .join("");
      bindFilters(box, PRODUCTS, "shop");
      return;
    }

    document.title = p.name + "｜異數臻選";
    const others = related(p);
    root.innerHTML = `
      <section class="block">
        <div class="wrap detail">
          <span class="media" data-note="商品圖片"><img src="${img(p.image)}" alt="${esc(p.name)}"></span>
          <div>
            <p class="kicker" style="text-align:left">異數臻選</p>
            <h1>${esc(p.name)}</h1>
            <p class="lead">${esc(p.blurb)}</p>
            <p class="price" style="font-family:var(--en);font-size:28px;letter-spacing:.06em;margin:18px 0 0">${money(p.price)} <span style="font-size:13px;letter-spacing:.12em">示意</span></p>
            <ul class="spec-list" data-note="商品基本資訊">
              <li><span>規格</span><strong>${esc(p.spec)}</strong></li>
              <li><span>庫存</span><strong>供應中</strong></li>
              <li><span>理念</span><strong>${esc(p.taste || "日常選品")}</strong></li>
              <li><span>製作者</span><strong>${esc(makerOf(p))}</strong></li>
              <li><span>產地</span><strong>臺灣</strong></li>
              <li><span>內容</span><strong>完整成分見包裝。此欄為示意。</strong></li>
              <li><span>保存</span><strong>請依包裝標示。此欄為示意。</strong></li>
            </ul>
            <div class="buybox" data-note="購買操作">
              <div class="qty"><button type="button" id="qty-minus">－</button><span id="qty-num">1</span><button type="button" id="qty-plus">＋</button></div>
              <p>
                <button class="btn-line" type="button" id="add-cart">加入購物車</button>
                <button class="btn-line" type="button" id="buy-now" style="margin-left:12px">立即購買</button>
              </p>
              <p class="meta">配送／取貨：宅配或門市取貨。運費於正式結帳顯示。此為流程示意。</p>
              <p id="buy-now-note" class="form-ok" hidden>已建立示意訂單，不會扣款。</p>
            </div>
            <p style="margin-top:28px"><a class="more" href="product.html?id=${encodeURIComponent(p.id)}">返回品牌介紹</a></p>
          </div>
        </div>
        ${others.length ? `<div class="wrap" style="margin-top:88px" data-note="延伸推薦"><h2>延伸推薦</h2><div class="grid-4">${others.map((item) => card(item, "shop")).join("")}</div></div>` : ""}
      </section>`;

    let qty = 1;
    const num = document.getElementById("qty-num");
    document.getElementById("qty-minus").addEventListener("click", () => {
      qty = Math.max(1, qty - 1);
      num.textContent = String(qty);
    });
    document.getElementById("qty-plus").addEventListener("click", () => {
      qty += 1;
      num.textContent = String(qty);
    });
    document.getElementById("add-cart").addEventListener("click", () => addToCart(p, qty));
    document.getElementById("buy-now").addEventListener("click", () => {
      addToCart(p, qty);
      document.getElementById("buy-now-note")?.removeAttribute("hidden");
    });
  }

  function bindVenue() {
    const form = document.getElementById("venue-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.hidden = true;
      document.getElementById("venue-ok")?.removeAttribute("hidden");
    });
  }

  document.addEventListener("error", (event) => {
    if (event.target && event.target.tagName === "IMG") event.target.classList.add("is-broken");
  }, true);

  renderChrome();
  renderHome();
  renderSelect();
  renderLifestyle();
  renderLectures();
  renderLecture();
  renderNews();
  renderProduct();
  renderShop();
  bindVenue();
})();
