/* =========================================================
   VM DESIGN STUDIO — script.js
   ========================================================= */
(function () {
  "use strict";

  /* ---- EDIT THIS: real WhatsApp number (country code, no + or spaces) ---- */
  var WHATSAPP_NUMBER = "919876543210"; // TODO: replace with owner's real number // TODO: replace with owner's real number

  function waLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }
  var WA_GENERAL = waLink("Hi, I'm interested in VM Design Studio couture.");
  var WA_CUSTOM = waLink("Hi, I'm interested in custom couture from VM Design Studio.");

  /* ---- Lookbook data (update prices/details with owner) ---- */
  var LOOKBOOK = [
    {
      name: "Aurelia Jacket — Cream",
      cat: "Embroidered Jacket | Couture Collection",
      tag: "Bestseller · 40+ hrs handwork",
      price: "₹12,000 – ₹15,000",
      img: "images/jacket-cream.svg",
      alt: "Hand-embroidered cream jacket with multicolor zari thread work — VM Design Studio",
      desc: "Our signature piece: a cream base transformed by dense multicolor zari and aari hand embroidery. Pairs with silk sarees, gowns and lehengas alike.",
      details: ["Technique: hand aari + zari embroidery", "Lead time: 3–4 weeks (made to order)", "Made-to-measure sizing available", "Worldwide insured shipping"]
    },
    {
      name: "Ivory Heritage Jacket",
      cat: "Embroidered Jacket | Couture Collection",
      tag: "New",
      price: "₹15,000 – ₹18,000",
      img: "images/jacket-ivory.svg",
      alt: "Ivory hand-embroidered jacket with golden zari work — VM Design Studio",
      desc: "All-gold zari on ivory — a quieter, regal statement. The perfect reception and engagement piece.",
      details: ["Technique: gold zari aari embroidery", "Lead time: 3–4 weeks", "Sizes XS–XXL, made to measure", "Custom colours available"]
    },
    {
      name: "Rani Bridal Lehenga — Red",
      cat: "Bridal Lehenga | Bridal Collection",
      tag: "Bridal · Book 8–10 weeks ahead",
      price: "₹45,000 – ₹75,000",
      img: "images/lehenga-red.svg",
      alt: "Red bridal lehenga with heavy golden zari embroidery — VM Design Studio",
      desc: "A traditional red bridal lehenga with heavy gold zari, designed around your wedding story — your blouse, your dupatta, your heirloom.",
      details: ["Technique: heavy aari + zari, hand-finished", "Lead time: 8–10 weeks for bridal", "Includes blouse + dupatta styling", "Consultation on WhatsApp"]
    },
    {
      name: "Maharani Lehenga — Maroon",
      cat: "Bridal Lehenga | Bridal Collection",
      tag: "Bridal",
      price: "₹35,000 – ₹60,000",
      img: "images/lehenga-maroon.svg",
      alt: "Maroon bridal lehenga with gold and green zari embroidery — VM Design Studio",
      desc: "Deep maroon silk with gold and emerald zari borders — for the bride who wants heritage with a modern edge.",
      details: ["Technique: aari + zari with bead accents", "Lead time: 6–8 weeks", "Saree-blouse styling available", "Worldwide shipping"]
    },
    {
      name: "Emerald Bespoke Gown",
      cat: "Custom Couture | Bespoke",
      tag: "Custom · Price on Request",
      price: "Price on Request",
      img: "images/gown-custom.svg",
      alt: "Emerald green custom couture gown with gold embroidery — VM Design Studio",
      desc: "Fully bespoke couture — your silhouette, our embroidery. From receptions to milestones, we design it around you.",
      details: ["100% made to measure", "Design consultation included", "Lead time: 6–8 weeks", "Price on request — WhatsApp us"]
    },
    {
      name: "Zari Clutch",
      cat: "Adornment | Adornments Collection",
      tag: "Gift favourite",
      price: "₹2,500 – ₹4,500",
      img: "images/adornment-clutch.svg",
      alt: "Deep green embroidered clutch with gold zari work — VM Design Studio",
      desc: "A small piece of heirloom craft — hand-embroidered clutch that finishes any bridal or festive look.",
      details: ["Hand aari embroidery", "In stock or 2-week lead", "Perfect festival gifting", "Ships worldwide"]
    },
    {
      name: "Heritage Dupatta",
      cat: "Adornment | Adornments Collection",
      tag: "Wedding essential",
      price: "₹1,800 – ₹3,500",
      img: "images/adornment-dupatta.svg",
      alt: "Cream dupatta with golden zari hand-embroidered border — VM Design Studio",
      desc: "A hand-finished zari border dupatta — the finishing touch for sarees, lehengas and festive looks.",
      details: ["Hand-embroidered zari border", "Colours on request", "2-week lead time", "Gift packaging available"]
    },
    {
      name: "Indigo Statement Jacket",
      cat: "Custom Jacket | Couture Collection",
      tag: "Custom · Made for you",
      price: "₹16,000 – ₹22,000",
      img: "images/jacket-blue.svg",
      alt: "Blue custom jacket with gold and multicolor embroidery — VM Design Studio",
      desc: "A bespoke colour story — deep indigo with your choice of motifs, thread colours and finish. Yours alone.",
      details: ["Fully customisable motifs", "Lead time: 4–5 weeks", "Made to measure", "One-of-one piece"]
    }
  ];

  /* ---- Build lookbook ---- */
  var masonry = document.getElementById("masonry");
  LOOKBOOK.forEach(function (item, i) {
    var card = document.createElement("article");
    card.className = "look-card reveal";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", item.name + " — view details");
    card.innerHTML =
      '<img src="' + item.img + '" alt="' + item.alt + '" loading="lazy">' +
      '<div class="look-overlay">' +
        '<p class="look-name">' + item.name + '</p>' +
        '<p class="look-cat">' + item.cat + '</p>' +
        '<p class="look-hint">✦ Tap to view details</p>' +
      '</div>';
    card.addEventListener("click", function () { openModal(i); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(i); }
    });
    masonry.appendChild(card);
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
    document.getElementById("modalWa").href = waLink("Hi, I'm interested in the " + item.name + " from VM Design Studio.");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
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

  /* ---- WhatsApp CTAs ---- */
  document.querySelectorAll(".wa-general").forEach(function (a) { a.href = WA_GENERAL; });
  document.querySelectorAll(".wa-custom").forEach(function (a) { a.href = WA_CUSTOM; });
  document.querySelectorAll(".wa-product").forEach(function (a) { /* set per modal */ });

  /* ---- Instagram tiles (placeholder) ---- */
  var igGrid = document.getElementById("igGrid");
  var igImgs = ["real/work-1.jpg","real/work-2.jpg","real/work-3.jpg","real/whatsapp-emb-3.jpg","real/whatsapp-emb-4.jpg","real/whatsapp-emb-5.jpg"];
  igImgs.forEach(function (img, i) {
    var a = document.createElement("a");
    a.className = "ig-tile";
    a.href = "https://www.instagram.com/vmdesignstudio24";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "VM Design Studio Instagram post " + (i + 1));
    a.innerHTML = '<img src="images/' + img + '" alt="VM Design Studio Instagram post — handcrafted couture" loading="lazy">';
    igGrid.appendChild(a);
  });

  /* ---- Scroll effects ---- */
  var header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
