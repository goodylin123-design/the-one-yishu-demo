(function () {
  const page = document.body.dataset.page || "";

  const NAV = [
    ["about", "about.html", "nav.about"],
    ["dining", "dining.html", "nav.dining"],
    ["lifestyle", "lifestyle.html", "nav.lifestyle"],
    ["select", "select.html", "nav.select"],
    ["lectures", "lectures.html", "nav.lectures"],
    ["venue", "venue.html", "nav.venue"],
    ["news", "news.html", "nav.news"],
    ["shop", "shop.html", "nav.shop"]
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
    const locale = YISHU.lang === "en" ? "en-US" : YISHU.lang === "ja" ? "ja-JP" : YISHU.lang === "ko" ? "ko-KR" : "zh-Hant";
    return "NT$ " + Number(n).toLocaleString(locale);
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
    if (p.sub === "茗京萃") return t("maker.ming");
    if (p.id === "baishuai") return t("maker.baishuai");
    if (p.id === "shengeng") return t("maker.shengeng");
    if (p.id === "luye") return t("maker.luye");
    if (p.group === "original") return t("maker.original");
    if (p.group === "partner") return YISHU.viewProduct(p).name.split(" ")[0];
    if (p.id === "senyu") return t("maker.senyu");
    return t("maker.coop");
  }

  function storyOf(p) {
    const view = YISHU.viewProduct(p);
    const key = YISHU.TASTE_KEY[p.taste];
    const taste = key ? t("taste." + key) : "";
    return view.blurb + (taste ? t("tasteBridge") + taste : "");
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
      return `<a class="${cls}" data-nav="${key}" href="${href}">${esc(t(label))}</a>${rule}`;
    }).join("");
    const current = YISHU.LANGS.find(([id]) => id === YISHU.lang) || YISHU.LANGS[0];
    const langMenu = YISHU.LANGS.map(([id, name]) =>
      `<button type="button" role="option" data-lang="${id}" aria-current="${id === YISHU.lang ? "true" : "false"}">${esc(name)}</button>`
    ).join("");

    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML = `
        <header class="site-header">
          <button class="menu-btn" type="button" aria-label="${esc(t("menu.open"))}"><span></span><span></span></button>
          <a class="logo" href="index.html">
            <img src="assets/logo.png" alt="The One">
            <span>${shop ? esc(t("brandShop")) : esc(t("brand"))}</span>
          </a>
          <nav class="primary-nav" aria-label="${esc(t("menu.label"))}">${links}</nav>
          <div class="lang">
            <button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="${esc(t("lang.switch"))}">${esc(current[2])}</button>
            <div class="lang-menu" role="listbox" hidden>${langMenu}</div>
          </div>
        </header>
        <div class="side-cta">
          <a href="${STORE.inline}" target="_blank" rel="noopener">${esc(t("side.book"))}</a>
          <a href="lectures.html">${esc(t("side.lecture"))}</a>
          <a href="venue.html">${esc(t("side.venue"))}</a>
        </div>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="footer-grid">
            <div>
              <h2>${esc(t("footer.brand"))}</h2>
              <a href="about.html">${esc(t("nav.about"))}</a>
              <a href="dining.html">${esc(t("nav.dining"))}</a>
              <a href="lifestyle.html">${esc(t("nav.lifestyle"))}</a>
              <a href="select.html">${esc(t("nav.select"))}</a>
              <a href="lectures.html">${esc(t("nav.lectures"))}</a>
              <a href="venue.html">${esc(t("nav.venue"))}</a>
            </div>
            <div>
              <h2>${esc(t("footer.go"))}</h2>
              <a href="${STORE.inline}" target="_blank" rel="noopener">${esc(t("footer.inline"))}</a>
              <a href="${STORE.accupass}" target="_blank" rel="noopener">${esc(t("footer.accupass"))}</a>
              <a href="shop.html">${esc(t("nav.shop"))}</a>
              <a href="news.html">${esc(t("nav.news"))}</a>
              <a href="map.html">${esc(t("footer.map"))}</a>
              <a href="https://github.com/goodylin123-design/the-one-yishu-demo/blob/main/%E9%96%8B%E7%99%BC%E6%89%8B%E5%86%8A.md" target="_blank" rel="noopener">${esc(t("footer.handbook"))}</a>
            </div>
            <div>
              <h2>${esc(t("footer.theone"))}</h2>
              <a href="${STORE.parent}" target="_blank" rel="noopener">${esc(t("footer.nanyuan"))}</a>
              <a href="${STORE.theone}" target="_blank" rel="noopener">${esc(t("footer.store"))}</a>
              <a href="about.html">${esc(t("footer.spirit"))}</a>
            </div>
            <div>
              <h2>${esc(t("footer.contact"))}</h2>
              <p>${esc(t("store.address"))}</p>
              <p>${esc(t("store.hours"))}</p>
              <a href="${STORE.phoneHref}">${STORE.phone}</a>
            </div>
          </div>
          <div class="mobile-cta">
            <a class="more" href="${STORE.inline}" target="_blank" rel="noopener">${esc(t("side.book"))}</a>
            <a class="more" href="lectures.html">${esc(t("side.lecture"))}</a>
            <a class="more" href="venue.html">${esc(t("side.venue"))}</a>
          </div>
          <p class="copy">
            ${t("footer.copy")}
            <br><button type="button" id="note-toggle">${esc(t("notes.show"))}</button>
          </p>
        </footer>
        <div class="drawer" id="cart-drawer" hidden>
          <div class="drawer-panel" role="dialog" aria-label="${esc(t("cart.label"))}">
            <h2>${esc(t("cart.title"))}</h2>
            <div id="cart-list"></div>
            <p id="cart-empty" class="meta">${esc(t("cart.empty"))}</p>
            <p id="cart-total" class="meta"></p>
            <button class="btn-line" type="button" id="cart-checkout">${esc(t("cart.checkout"))}</button>
            <p id="cart-done" class="form-ok" hidden>${esc(t("cart.done"))}</p>
            <p style="margin-top:28px"><button type="button" class="more" id="cart-close">${esc(t("cart.close"))}</button></p>
          </div>
        </div>`;
    }

    const langBtn = document.querySelector(".lang-btn");
    const langMenuEl = document.querySelector(".lang-menu");
    langBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = langMenuEl.hasAttribute("hidden");
      if (open) langMenuEl.removeAttribute("hidden");
      else langMenuEl.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    langMenuEl?.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-lang]");
      if (!choice) return;
      try { localStorage.setItem("yishu-lang", choice.dataset.lang); } catch (error) { /* 無法記住時仍切換這一頁 */ }
      location.reload();
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".lang")) {
        langMenuEl?.setAttribute("hidden", "");
        langBtn?.setAttribute("aria-expanded", "false");
      }
    });

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
      noteBtn.textContent = notesOn ? t("notes.hide") : t("notes.show");
      noteBtn.addEventListener("click", () => {
        const next = !document.body.classList.contains("show-notes");
        document.body.classList.toggle("show-notes", next);
        sessionStorage.setItem("yishu-notes", next ? "1" : "0");
        noteBtn.textContent = next ? t("notes.hide") : t("notes.show");
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.body.classList.remove("nav-open");
        document.getElementById("cart-drawer")?.setAttribute("hidden", "");
        document.querySelector(".lang-menu")?.setAttribute("hidden", "");
        document.querySelector(".lang-btn")?.setAttribute("aria-expanded", "false");
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
    list.innerHTML = items.map((row) => {
      const product = productById(row.id);
      const name = product ? YISHU.viewProduct(product).name : row.name;
      return `
      <div class="cart-row">
        <span>${esc(name)} × ${row.qty}</span>
        <span>${money(row.price * row.qty)}</span>
      </div>`;
    }).join("");
    if (empty) empty.hidden = items.length > 0;
    if (total) {
      const sum = items.reduce((n, row) => n + row.price * row.qty, 0);
      total.textContent = items.length ? t("cart.total") + money(sum) : "";
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
    const view = YISHU.viewProduct(p);
    const href = mode === "shop" ? `shop.html?id=${encodeURIComponent(p.id)}` : `product.html?id=${encodeURIComponent(p.id)}`;
    const price = mode === "shop" ? `<span class="price">${money(p.price)}</span>` : "";
    return `
      <a class="pcard" href="${href}">
        <span class="media"><img src="${img(p.image)}" alt="${esc(view.name)}"></span>
        <h3>${esc(view.name)}</h3>
        <p>${esc(view.subLabel)}${view.tasteLabel ? "・" + esc(view.tasteLabel) : ""}</p>
        ${price}
        <span class="more">${esc(t("more"))}</span>
      </a>`;
  }

  function grouped(list, mode) {
    const cats = [...new Set(list.map((p) => p.cat))];
    return cats.map((cat) => {
      const items = list.filter((p) => p.cat === cat);
      const subs = [...new Set(items.map((p) => p.sub))];
      return `
        <section class="cat-block">
          <h2>${esc(YISHU.term(cat))}</h2>
          ${subs.map((sub) => `
            <h3>${esc(YISHU.term(sub))}</h3>
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
      news.innerHTML = NEWS.slice(0, 3).map((item) => {
        const view = YISHU.viewNews(item);
        return `
        <a class="line-item" href="news.html?id=${item.id}">
          <time>${esc(item.date)}</time>
          <span>${esc(view.title)}</span>
        </a>`;
      }).join("");
    }
    if (talks) {
      talks.innerHTML = LECTURES.filter((item) => item.state === "upcoming").slice(0, 3).map((item) => {
        const view = YISHU.viewLecture(item);
        return `
        <a class="line-item" href="lecture.html?id=${item.id}">
          <time>${esc(item.date)}</time>
          <span>${esc(view.title)}</span>
        </a>`;
      }).join("");
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
    root.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all" class="is-on">${esc(t("all"))}</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(YISHU.term(cat))}</button>`))
      .join("");
    bindFilters(root, items, "brand");
  }

  function renderLifestyle() {
    const root = document.getElementById("life-root");
    if (!root) return;
    const items = PRODUCTS.filter((p) => p.group === "original" || p.group === "partner");
    const cats = [...new Set(items.map((p) => p.cat))];
    root.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all" class="is-on">${esc(t("all"))}</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(YISHU.term(cat))}</button>`))
      .join("");
    bindFilters(root, items, "brand");
  }

  function renderLectures() {
    const root = document.getElementById("lecture-root");
    if (!root) return;
    const cats = [...new Set(LECTURES.map((item) => item.category))];
    const filters = root.querySelector("[data-filters]");
    const grid = root.querySelector("[data-grid]");
    filters.innerHTML = [`<button type="button" data-filter="all">${esc(t("all"))}</button>`]
      .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(YISHU.term(cat))}</button>`))
      .join("");
    function paint(key) {
      const list = LECTURES.filter((item) => key === "all" || item.category === key);
      const upcoming = list.filter((item) => item.state === "upcoming");
      const archive = list.filter((item) => item.state === "archive");
      grid.innerHTML = `
        ${upcoming.length ? `<h2>${esc(t("upcoming"))}</h2><div class="grid-4" style="margin-bottom:72px">${upcoming.map(talkCard).join("")}</div>` : ""}
        ${archive.length ? `<h2>${esc(t("archive"))}</h2><div class="grid-4">${archive.map(talkCard).join("")}</div>` : ""}`;
      filters.querySelectorAll("button").forEach((btn) => btn.classList.toggle("is-on", btn.dataset.filter === key));
    }
    filters.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-filter]");
      if (btn) paint(btn.dataset.filter);
    });
    paint("all");
  }

  function talkCard(item) {
    const view = YISHU.viewLecture(item);
    return `
      <a class="pcard" href="lecture.html?id=${encodeURIComponent(item.id)}">
        <span class="media"><img src="${img(item.image)}" alt=""></span>
        <h3>${esc(view.title)}</h3>
        <p>${esc(item.date)}　${esc(view.category)}${item.demo ? "　" + esc(t("demo")) : ""}</p>
        <span class="more">${esc(t("more"))}</span>
      </a>`;
  }

  function renderLecture() {
    const root = document.getElementById("lecture-detail");
    if (!root) return;
    const found = LECTURES.find((row) => row.id === param("id"));
    if (!found) {
      root.innerHTML = `<div class="block narrow"><h1>${esc(t("missLecture"))}</h1><p><a class="more" href="lectures.html">${esc(t("backLectures"))}</a></p></div>`;
      return;
    }
    const item = YISHU.viewLecture(found);
    document.title = item.title + "｜" + t("nav.lectures");
    root.innerHTML = `
      <section class="page-hero" data-note="活動照片"><img src="${img(item.image)}" alt=""></section>
      <section class="block">
        <div class="wrap detail">
          <div>
            <p class="kicker" style="text-align:left">${esc(item.category)}${item.demo ? "　・　" + esc(t("demoSession")) : "　・　" + esc(t("publicRecord"))}</p>
            <h1>${esc(item.title)}</h1>
            <p class="lead">${esc(item.summary)}</p>
          </div>
          <div class="prose">
            <ul class="spec-list">
              <li><span>${esc(t("date"))}</span><strong>${esc(item.date)}</strong></li>
              <li><span>${esc(t("place"))}</span><strong>${esc(item.place)}</strong></li>
              <li><span>${esc(t("signup"))}</span><strong>${item.state === "upcoming" ? "Accupass" : esc(t("ended"))}</strong></li>
            </ul>
            <p>${esc(item.body)}</p>
            ${item.state === "upcoming"
              ? `<p><a class="btn-line" href="${STORE.accupass}" target="_blank" rel="noopener">${esc(t("accupassGo"))}</a></p>`
              : `<p><a class="more" href="https://www.theonestyle.com/website_html/event_list.asp" target="_blank" rel="noopener">${esc(t("courseList"))}</a></p>`}
            <p><a class="more" href="lectures.html">${esc(t("backLectures"))}</a></p>
          </div>
        </div>
      </section>`;
  }

  function renderNews() {
    const root = document.getElementById("news-root");
    if (!root) return;
    const found = NEWS.find((row) => row.id === param("id"));
    if (found) {
      const item = YISHU.viewNews(found);
      document.title = item.title + "｜" + t("nav.news");
      root.innerHTML = `
        <section class="page-hero"><img src="${img(item.image)}" alt=""></section>
        <section class="block narrow prose">
          <p class="kicker">${esc(item.kind)}　${esc(found.date)}</p>
          <h1>${esc(item.title)}</h1>
          <p>${esc(item.summary)}</p>
          <p>${esc(item.body)}</p>
          <p><a class="more" href="news.html">${esc(t("backNews"))}</a></p>
        </section>`;
      return;
    }
    document.title = t("title.news");
    root.innerHTML = `
      <section class="block">
        <div class="narrow">
          <p class="kicker">${esc(t("news.kicker"))}</p>
          <h1>${esc(t("nav.news"))}</h1>
          <p class="lead">${esc(t("news.lead"))}</p>
        </div>
        <div class="wrap" style="margin-top:56px">
          <div class="line-list">
            ${NEWS.map((row) => {
              const view = YISHU.viewNews(row);
              return `
              <a class="line-item" href="news.html?id=${row.id}">
                <time>${esc(row.date)}</time>
                <span>${esc(view.title)}<br><em>${esc(view.kind)}</em></span>
              </a>`;
            }).join("")}
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
    const raw = productById(param("id"));
    if (!raw) {
      root.innerHTML = `<div class="block narrow"><h1>${esc(t("missProduct"))}</h1><p><a class="more" href="select.html">${esc(t("backSelect"))}</a></p></div>`;
      return;
    }
    const p = YISHU.viewProduct(raw);
    document.title = p.name + "｜" + t("brand");
    const navKey = raw.group === "select" ? "select" : "lifestyle";
    document.querySelector(`[data-nav="${navKey}"]`)?.classList.add("active");
    const others = related(raw);
    root.innerHTML = `
      <section class="block" data-note="商品詳細頁｜故事為主，購買導向異數臻選">
        <div class="wrap detail">
          <span class="media"><img src="${img(raw.image)}" alt="${esc(p.name)}"></span>
          <div>
            <p class="kicker" style="text-align:left">${esc(p.catLabel)}　／　${esc(p.subLabel)}</p>
            <h1>${esc(p.name)}</h1>
            <div class="prose">
              <p>${esc(storyOf(raw))}</p>
              <p>${esc(t("makerLine").replace("{maker}", makerOf(raw)))}</p>
            </div>
            <ul class="spec-list">
              <li><span>${esc(t("priceSample"))}</span><strong>${money(raw.price)}</strong></li>
              <li><span>${esc(t("spec"))}</span><strong>${esc(p.specLabel)}</strong></li>
              ${raw.taste ? `<li><span>${esc(t("taste"))}</span><strong>${esc(p.tasteLabel)}</strong></li>` : ""}
            </ul>
            <div class="buybox">
              <a class="btn-line" href="shop.html?id=${encodeURIComponent(raw.id)}">${esc(t("buy"))}</a>
            </div>
          </div>
        </div>
        ${others.length ? `<div class="wrap" style="margin-top:88px"><h2>${esc(t("extend"))}</h2><div class="grid-4">${others.map((item) => card(item, "brand")).join("")}</div></div>` : ""}
      </section>`;
  }

  function renderShop() {
    const root = document.getElementById("shop-root");
    if (!root) return;
    const p = productById(param("id"));
    if (!p) {
      document.title = t("title.shop");
      const cats = [...new Set(PRODUCTS.map((item) => item.cat))];
      root.innerHTML = `
        <section class="block" data-note="異數臻選｜規格、價格與購買">
          <div class="narrow">
            <p class="kicker">${esc(t("shopKicker"))}</p>
            <h1>${esc(t("brandShop"))}</h1>
            <p class="lead">${esc(t("shopLead"))}</p>
          </div>
          <div class="wrap" id="shop-filter" style="margin-top:56px">
            <div class="filters" data-filters></div>
            <div data-grid></div>
          </div>
        </section>`;
      const box = root.querySelector("#shop-filter");
      box.querySelector("[data-filters]").innerHTML = [`<button type="button" data-filter="all">${esc(t("all"))}</button>`]
        .concat(cats.map((cat) => `<button type="button" data-filter="${esc(cat)}">${esc(YISHU.term(cat))}</button>`))
        .join("");
      bindFilters(box, PRODUCTS, "shop");
      return;
    }

    const view = YISHU.viewProduct(p);
    document.title = view.name + "｜" + t("brandShop");
    const others = related(p);
    root.innerHTML = `
      <section class="block">
        <div class="wrap detail">
          <span class="media" data-note="商品圖片"><img src="${img(p.image)}" alt="${esc(view.name)}"></span>
          <div>
            <p class="kicker" style="text-align:left">${esc(t("brandShop"))}</p>
            <h1>${esc(view.name)}</h1>
            <p class="lead">${esc(view.blurb)}</p>
            <p class="price" style="font-family:var(--en);font-size:28px;letter-spacing:.06em;margin:18px 0 0">${money(p.price)} <span style="font-size:13px;letter-spacing:.12em">${esc(t("sample"))}</span></p>
            <ul class="spec-list" data-note="商品基本資訊">
              <li><span>${esc(t("spec"))}</span><strong>${esc(view.specLabel)}</strong></li>
              <li><span>${esc(t("stock"))}</span><strong>${esc(t("inStock"))}</strong></li>
              <li><span>${esc(t("idea"))}</span><strong>${esc(view.tasteLabel || t("daily"))}</strong></li>
              <li><span>${esc(t("maker"))}</span><strong>${esc(makerOf(p))}</strong></li>
              <li><span>${esc(t("origin"))}</span><strong>${esc(t("taiwan"))}</strong></li>
              <li><span>${esc(t("contents"))}</span><strong>${esc(t("contentsNote"))}</strong></li>
              <li><span>${esc(t("keep"))}</span><strong>${esc(t("keepNote"))}</strong></li>
            </ul>
            <div class="buybox" data-note="購買操作">
              <div class="qty"><button type="button" id="qty-minus">－</button><span id="qty-num">1</span><button type="button" id="qty-plus">＋</button></div>
              <p>
                <button class="btn-line" type="button" id="add-cart">${esc(t("addCart"))}</button>
                <button class="btn-line" type="button" id="buy-now" style="margin-left:12px">${esc(t("buyNow"))}</button>
              </p>
              <p class="meta">${esc(t("ship"))}</p>
              <p id="buy-now-note" class="form-ok" hidden>${esc(t("orderDemo"))}</p>
            </div>
            <p style="margin-top:28px"><a class="more" href="product.html?id=${encodeURIComponent(p.id)}">${esc(t("backStory"))}</a></p>
          </div>
        </div>
        ${others.length ? `<div class="wrap" style="margin-top:88px" data-note="延伸推薦"><h2>${esc(t("extendShop"))}</h2><div class="grid-4">${others.map((item) => card(item, "shop")).join("")}</div></div>` : ""}
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
  YISHU.applyStatic();
})();
