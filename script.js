/* ═══════════════════════════════════════════════
   VM DESIGN STUDIO — script.js
   ═══════════════════════════════════════════════ */
/* ───────────────────────────────────────────────────────────
   Product photography: free-license stock photos (Pexels) —
   temporary real-wear visuals until VM's own product shoot.
   Pexels license: free to use, no attribution required.
   ─────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ---- EDIT THIS: real WhatsApp number (country code, no + or spaces) ---- */
  var WHATSAPP_NUMBER = "919876543210"; // TODO: replace with owner's real number

  function waLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }
  var WA_GENERAL = waLink("Hi, I'm interested in VM Design Studio couture.");
  var WA_FITTING = waLink("Hi, I'd like to book a video fitting call with VM Design Studio.");

  /* ---- Lookbook data (update prices/details with owner) ---- */
  var LOOKBOOK = [
    {
      name: "Rani Bridal Lehenga — Red",
      cat: "Bridal Lehenga",
      group: "lehenga",
      tag: "Bridal · book 8–10 weeks ahead",
      price: "₹45,000 – ₹75,000",
      img: "images/products/lehenga-01.jpg",
      alt: "Red bridal lehenga with heavy golden zari embroidery — VM Design Studio",
      desc: "A traditional red bridal lehenga with heavy gold zari, designed around your wedding story — your blouse, your dupatta, your heirloom.",
      details: ["Technique: heavy aari + zari, hand-finished", "Lead time: 8–10 weeks for bridal", "Includes blouse + dupatta styling", "Consultation on WhatsApp"]
    },
    {
      name: "Maharani Lehenga — Maroon",
      cat: "Bridal Lehenga",
      group: "lehenga",
      tag: "Bridal",
      price: "₹35,000 – ₹60,000",
      img: "images/products/lehenga-02.jpg",
      alt: "Maroon bridal lehenga with gold and green zari embroidery — VM Design Studio",
      desc: "Deep maroon silk with gold and emerald zari borders — for the bride who wants heritage with a modern edge.",
      details: ["Technique: aari + zari with bead accents", "Lead time: 6–8 weeks", "Saree-blouse styling available", "Worldwide shipping"]
    },
    {
      name: "Gold Zari Bridal Lehenga",
      cat: "Bridal Lehenga",
      group: "lehenga",
      tag: "Heavy zardozi",
      price: "₹40,000 – ₹70,000",
      img: "images/products/lehenga-03.jpg",
      alt: "Bridal lehenga with dense gold zardozi embroidery — VM Design Studio",
      desc: "Gold-on-gold zardozi over rich fabric — a lehenga that catches the light with every step. Made to measure around you.",
      details: ["Technique: hand zardozi + aari", "Lead time: 8–10 weeks", "Matching blouse + dupatta", "Made to measure"]
    },
    {
      name: "Regal Zari Lehenga",
      cat: "Bridal Lehenga",
      group: "lehenga",
      tag: "New",
      price: "₹38,000 – ₹65,000",
      img: "images/products/lehenga-04.jpg",
      alt: "Elegant bridal lehenga with intricate zari work — VM Design Studio",
      desc: "A regal silhouette with intricate zari borders and hand-finished detailing — heritage craft for the modern bride.",
      details: ["Technique: hand zari embroidery", "Lead time: 6–8 weeks", "Custom colours available", "Worldwide insured shipping"]
    },
    {
      name: "Bridal Zardozi Lehenga",
      cat: "Bridal Lehenga",
      group: "lehenga",
      tag: "Bridal",
      price: "₹42,000 – ₹72,000",
      img: "images/products/lehenga-05.jpg",
      alt: "Heavily embroidered bridal lehenga with zardozi work — VM Design Studio",
      desc: "Dense zardozi embroidery across the full lehenga — an heirloom piece, embroidered by hand in our Anand atelier.",
      details: ["Technique: heavy zardozi", "Lead time: 8–10 weeks", "Video fitting included", "Made to measure"]
    },
    {
      name: "Banarasi Zari Saree",
      cat: "Hand-Embroidered Saree",
      group: "saree",
      tag: "Heritage weave + hand zari",
      price: "₹18,000 – ₹35,000",
      img: "images/products/saree-01.jpg",
      alt: "Banarasi style saree with gold zari border and embroidery — VM Design Studio",
      desc: "A saree where woven zari meets hand embroidery — gold borders, hand-worked motifs and a fall that drapes beautifully.",
      details: ["Technique: hand zari + aari accents", "Lead time: 4–6 weeks", "Blouse piece included", "Custom pallu styling"]
    },
    {
      name: "Bridal Gold-Border Saree",
      cat: "Hand-Embroidered Saree",
      group: "saree",
      tag: "Bridal",
      price: "₹22,000 – ₹40,000",
      img: "images/products/saree-02.jpg",
      alt: "Bridal saree with heavy gold border embroidery — VM Design Studio",
      desc: "A heavy gold border, hand-embroidered motif by motif — the perfect wedding saree, made to your colours.",
      details: ["Technique: hand zari embroidery", "Lead time: 6–8 weeks", "Matching blouse available", "Made to measure"]
    },
    {
      name: "Silk Zardozi Saree",
      cat: "Hand-Embroidered Saree",
      group: "saree",
      tag: "New",
      price: "₹20,000 – ₹38,000",
      img: "images/products/saree-03.jpg",
      alt: "Silk saree with zardozi embroidery work — VM Design Studio",
      desc: "Pure silk with hand zardozi work — a quiet-luxury saree for receptions and milestone evenings.",
      details: ["Technique: hand zardozi", "Lead time: 4–6 weeks", "Blouse included", "Worldwide shipping"]
    },
    {
      name: "Heritage Zari Saree",
      cat: "Hand-Embroidered Saree",
      group: "saree",
      tag: "Festive essential",
      price: "₹15,000 – ₹28,000",
      img: "images/products/saree-04.jpg",
      alt: "Heritage saree with hand zari border work — VM Design Studio",
      desc: "Timeless zari borders and hand-worked pallu — a saree that moves from pooja to party without missing a beat.",
      details: ["Technique: hand zari border", "Lead time: 4–5 weeks", "Custom colours available", "Blouse piece included"]
    },
    {
      name: "Heavy Embroidered Bridal Blouse",
      cat: "Bridal Blouse",
      group: "blouse",
      tag: "Made to measure · 3–4 weeks",
      price: "₹6,000 – ₹12,000",
      img: "images/products/blouse-01.jpg",
      alt: "Heavily embroidered bridal blouse with dense hand zari and aari work — VM Design Studio",
      desc: "The foundation of every bridal look — a fully hand-embroidered blouse built around your lehenga or saree, in your exact measurements.",
      details: ["Technique: hand aari + zari, fully embroidered", "Lead time: 3–4 weeks", "Made to measure from your body measurements", "Matching dupatta and accessories available"]
    },
    {
      name: "Gold Zari Blouse",
      cat: "Bridal Blouse",
      group: "blouse",
      tag: "Reception ready",
      price: "₹5,000 – ₹10,000",
      img: "images/products/blouse-02.jpg",
      alt: "Gold zari embroidered blouse — VM Design Studio",
      desc: "A hand-embroidered blouse with gold zari detailing — designed to sit perfectly under sarees, lehengas and gowns.",
      details: ["Technique: hand zari + aari", "Lead time: 3–4 weeks", "Made to measure", "Custom necklines available"]
    },
    {
      name: "Embroidered Anarkali Suit",
      cat: "Hand-Embroidered Suit",
      group: "suit",
      tag: "New",
      price: "₹14,000 – ₹25,000",
      img: "images/products/suit-01.jpg",
      alt: "Anarkali suit with hand embroidery and zari work — VM Design Studio",
      desc: "A flowing anarkali with hand-embroidered zari and aari work — graceful, festive and made to measure.",
      details: ["Technique: hand aari + zari", "Lead time: 4–6 weeks", "Made to measure", "Matching dupatta included"]
    },
  ];

  /* ---- Render collection grid ---- */
  var grid = document.getElementById("grid");
  LOOKBOOK.forEach(function (item, i) {
    var card = document.createElement("article");
    card.className = "card reveal";
    card.dataset.group = item.group;
    card.style.animationDelay = (i * 0.06) + "s";
    card.innerHTML =
      '<div class="card-media">' +
        '<img src="' + item.img + '" alt="' + item.alt + '" loading="lazy">' +
        '<p class="card-tag">' + item.tag + '</p>' +
        '<div class="card-overlay">' +
          '<button class="btn btn-gold" data-view="' + i + '">Quick View</button>' +
          '<a class="btn btn-ghost" href="' + waLink("Hi, I'm interested in the " + item.name + " (" + item.price + ") from VM Design Studio.") + '" target="_blank" rel="noopener" aria-label="Enquire about ' + item.name + ' on WhatsApp">Enquire</a>' +
        '</div>' +
      '</div>' +
      '<div class="card-body">' +
        '<p class="card-cat">' + item.cat + '</p>' +
        '<h3 class="card-name">' + item.name + '</h3>' +
        '<p class="card-price">' + item.price + '</p>' +
      '</div>';
    card.querySelector('[data-view]').addEventListener("click", function () { openModal(i); });
    grid.appendChild(card);
  });

  /* ---- Filters ---- */
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var f = chip.dataset.filter;
      document.querySelectorAll(".card").forEach(function (card) {
        var show = (f === "all" || card.dataset.group === f);
        card.classList.toggle("is-hidden", !show);
        if (show) { card.style.animation = "none"; void card.offsetWidth; card.style.animation = ""; }
      });
    });
  });

  /* ---- Modal ---- */
  var modal = document.getElementById("productModal");
  var lastFocus = null;
  function openModal(i) {
    var item = LOOKBOOK[i];
    lastFocus = document.activeElement;
    document.getElementById("modalImage").src = item.img;
    document.getElementById("modalImage").alt = item.alt;
    document.getElementById("modalTag").textContent = item.tag;
    document.getElementById("modalCat").textContent = item.cat;
    document.getElementById("modalTitle").textContent = item.name;
    document.getElementById("modalPrice").textContent = item.price;
    document.getElementById("modalDesc").textContent = item.desc;
    var ul = document.getElementById("modalDetails");
    ul.innerHTML = "";
    item.details.forEach(function (d) {
      var li = document.createElement("li");
      li.textContent = d;
      ul.appendChild(li);
    });
    document.getElementById("modalWa").href = waLink("Hi, I'm interested in the " + item.name + " (" + item.price + ") from VM Design Studio.");
    document.getElementById("modalFitting").href = WA_FITTING;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose") || modal.querySelector(".modal-close").focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  modal.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---- Accordion ---- */
  document.querySelectorAll(".acc-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.parentElement;
      var isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".acc-item").forEach(function (it) {
        it.classList.remove("is-open");
        it.querySelector(".acc-a").style.maxHeight = null;
        it.querySelector(".acc-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        var a = item.querySelector(".acc-a");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Instagram tiles ---- */
  var igGrid = document.getElementById("igGrid");
  var igImgs = [
    "images/real/work-1.webp",
    "images/real/whatsapp-emb-3.webp",
    "images/real/work-2.webp",
    "images/real/whatsapp-emb-4.webp",
    "images/real/work-3.webp",
    "images/real/whatsapp-emb-5.webp"
  ];
  igImgs.forEach(function (img) {
    var a = document.createElement("a");
    a.className = "ig-tile";
    a.href = "https://www.instagram.com/vmdesignstudio24";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "VM Design Studio on Instagram — handcrafted couture");
    a.innerHTML = '<img src="' + img + '" alt="VM Design Studio Instagram — handcrafted couture" loading="lazy">';
    igGrid.appendChild(a);
  });

  /* ---- Mobile nav ---- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Reveal on scroll ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .section-head, .pillar, .process li, .ship-card, .acc-item, .contact-copy, .bespoke-media").forEach(function (el) {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
    io.observe(el);
  });

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }, { passive: true });
})();
