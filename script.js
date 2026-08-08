/* ═══════════════════════════════════════════════
   VM DESIGN STUDIO — script.js
   ═══════════════════════════════════════════════ */
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
      name: "Aurelia Jacket — Cream",
      cat: "Embroidered Jacket",
      group: "jacket",
      tag: "Bestseller · 40+ hrs handwork",
      price: "₹12,000 – ₹15,000",
      img: "images/jacket-cream.svg",
      alt: "Hand-embroidered cream jacket with multicolor zari thread work — VM Design Studio",
      desc: "Our signature piece: a cream base transformed by dense multicolor zari and aari hand embroidery. Pairs with silk sarees, gowns and lehengas alike.",
      details: ["Technique: hand aari + zari embroidery", "Lead time: 3–4 weeks (made to order)", "Made-to-measure sizing available", "Worldwide insured shipping"]
    },
    {
      name: "Ivory Heritage Jacket",
      cat: "Embroidered Jacket",
      group: "jacket",
      tag: "New",
      price: "₹15,000 – ₹18,000",
      img: "images/jacket-ivory.svg",
      alt: "Ivory hand-embroidered jacket with golden zari work — VM Design Studio",
      desc: "All-gold zari on ivory — a quieter, regal statement. The perfect reception and engagement piece.",
      details: ["Technique: gold zari aari embroidery", "Lead time: 3–4 weeks", "Sizes XS–XXL, made to measure", "Custom colours available"]
    },
    {
      name: "Indigo Statement Jacket",
      cat: "Custom Jacket",
      group: "jacket",
      tag: "Custom colourway",
      price: "₹16,000 – ₹22,000",
      img: "images/jacket-blue.svg",
      alt: "Indigo blue hand-embroidered jacket with golden zari work — VM Design Studio",
      desc: "Deep indigo with gold zari — a bold, contemporary take on the heritage jacket. Made to order in your size.",
      details: ["Technique: hand zari + aari", "Lead time: 4–5 weeks", "Made to measure", "Matching dupatta available"]
    },
    {
      name: "Rani Bridal Lehenga — Red",
      cat: "Bridal Lehenga",
      group: "bridal",
      tag: "Bridal · book 8–10 weeks ahead",
      price: "₹45,000 – ₹75,000",
      img: "images/lehenga-red.svg",
      alt: "Red bridal lehenga with heavy golden zari embroidery — VM Design Studio",
      desc: "A traditional red bridal lehenga with heavy gold zari, designed around your wedding story — your blouse, your dupatta, your heirloom.",
      details: ["Technique: heavy aari + zari, hand-finished", "Lead time: 8–10 weeks for bridal", "Includes blouse + dupatta styling", "Consultation on WhatsApp"]
    },
    {
      name: "Maharani Lehenga — Maroon",
      cat: "Bridal Lehenga",
      group: "bridal",
      tag: "Bridal",
      price: "₹35,000 – ₹60,000",
      img: "images/lehenga-maroon.svg",
      alt: "Maroon bridal lehenga with gold and green zari embroidery — VM Design Studio",
      desc: "Deep maroon silk with gold and emerald zari borders — for the bride who wants heritage with a modern edge.",
      details: ["Technique: aari + zari with bead accents", "Lead time: 6–8 weeks", "Saree-blouse styling available", "Worldwide shipping"]
    },
    {
      name: "Emerald Bespoke Gown",
      cat: "Custom Couture",
      group: "bespoke",
      tag: "Custom · Price on Request",
      price: "Price on Request",
      img: "images/gown-custom.svg",
      alt: "Emerald green custom couture gown with gold embroidery — VM Design Studio",
      desc: "Fully bespoke couture — your silhouette, our embroidery. From receptions to milestones, we design it around you.",
      details: ["100% made to measure", "Design consultation included", "Lead time: 6–8 weeks", "Price on request — WhatsApp us"]
    },
    {
      name: "Zari Clutch",
      cat: "Adornment",
      group: "adornment",
      tag: "Festive essential",
      price: "₹2,500 – ₹4,500",
      img: "images/adornment-clutch.svg",
      alt: "Hand-embroidered zari clutch with gold thread work — VM Design Studio",
      desc: "A little piece of the atelier for every day — hand-embroidered zari clutch in your choice of base colour.",
      details: ["Technique: hand zari", "Made to order: 2–3 weeks", "Custom colours available", "Ships worldwide"]
    },
    {
      name: "Heritage Dupatta",
      cat: "Adornment",
      group: "adornment",
      tag: "Gift favourite",
      price: "₹1,800 – ₹3,500",
      img: "images/adornment-dupatta.svg",
      alt: "Hand-embroidered dupatta with golden zari borders — VM Design Studio",
      desc: "A hand-embroidered dupatta with zari borders — the finishing touch for sarees, lehengas and everything in between.",
      details: ["Technique: hand aari + zari border", "Made to order: 2–3 weeks", "Colour options on request", "Gift wrapping available"]
    }
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
