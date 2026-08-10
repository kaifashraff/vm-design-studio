/* ═══════════════════════════════════════════════
   VM DESIGN STUDIO — script.js (v3)
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

  /* ---- Lookbook data (visuals are style references; update with owner) ---- */
  var LOOKBOOK = [
    {
      name: "Rani Bridal Lehenga",
      cat: "Bridal Lehenga",
      group: "bridal",
      tag: "Bridal · book 8–10 weeks ahead",
      price: "₹45,000 – ₹75,000",
      img: "images/pexels-1054048-11702815.webp",
      fallback: "images/pexels-1054048-11702815.jpg",
      alt: "Indian bride in a red lehenga adorned with jewelry — VM Design Studio",
      desc: "A traditional red bridal lehenga with heavy gold zari, designed around your wedding story — your blouse, your dupatta, your heirloom.",
      details: ["Technique: heavy aari + zari, hand-finished", "Lead time: 8–10 weeks for bridal", "Includes blouse + dupatta styling", "Consultation on WhatsApp"]
    },
    {
      name: "Archway Bridal Lehenga",
      cat: "Bridal Lehenga",
      group: "bridal",
      tag: "Bridal",
      price: "₹38,000 – ₹65,000",
      img: "images/pexels-1054048-12747884.webp",
      fallback: "images/pexels-1054048-12747884.jpg",
      alt: "Woman in an ornate red lehenga standing in a historic archway — VM Design Studio",
      desc: "Deep red silk with hand-worked gold borders — for the bride who wants heritage with a modern edge. Made to measure around you.",
      details: ["Technique: aari + zari with bead accents", "Lead time: 6–8 weeks", "Saree-blouse styling available", "Worldwide shipping"]
    },
    {
      name: "Maharani Lehenga — Red & Gold",
      cat: "Bridal Lehenga",
      group: "bridal",
      tag: "Heavy zardozi",
      price: "₹42,000 – ₹72,000",
      img: "images/pexels-gursher-gill-63702010-13661786.webp",
      fallback: "images/pexels-gursher-gill-63702010-13661786.jpg",
      alt: "Bride in a lavish red and gold lehenga against a historic backdrop of columns and arches — VM Design Studio",
      desc: "Gold-on-red zardozi over rich fabric — a lehenga that catches the light with every step. Our most requested bridal silhouette.",
      details: ["Technique: hand zardozi + aari", "Lead time: 8–10 weeks", "Matching blouse + dupatta", "Made to measure"]
    },
    {
      name: "Amethyst Reception Ensemble",
      cat: "Bridal / Reception",
      group: "bridal",
      tag: "Reception ready",
      price: "₹35,000 – ₹60,000",
      img: "images/pexels-dhanno-37962852.webp",
      fallback: "images/pexels-dhanno-37962852.jpg",
      alt: "Fashion model in a traditional purple outfit with intricate embroidery — VM Design Studio",
      desc: "A jewel-toned reception look with intricate hand embroidery — for the bride who wants colour, craft and confidence.",
      details: ["Technique: hand zari embroidery", "Lead time: 6–8 weeks", "Custom colours available", "Video fitting included"]
    },
    {
      name: "Twirl Gown — Bespoke",
      cat: "Bespoke Gown",
      group: "gowns",
      tag: "Custom couture",
      price: "₹40,000 – ₹68,000",
      img: "images/pexels-ds-babariya-756428940-38092543.webp",
      fallback: "images/pexels-ds-babariya-756428940-38092543.jpg",
      alt: "Woman elegantly spinning in a detailed gown, showcasing fashion and movement — VM Design Studio",
      desc: "A gown that moves — hand-embroidered panels, custom silhouette, engineered to twirl. Designed for receptions and milestone evenings.",
      details: ["Technique: hand aari + zari panels", "Lead time: 6–8 weeks", "Designed to your silhouette", "Progress photos while crafting"]
    },
    {
      name: "Soirée Sequin Gown",
      cat: "Evening Gown",
      group: "gowns",
      tag: "New",
      price: "₹25,000 – ₹45,000",
      img: "images/pexels-ds-babariya-756428940-38092542.webp",
      fallback: "images/pexels-ds-babariya-756428940-38092542.jpg",
      alt: "Woman in a sparkling dress with decorative floral arrangement indoors — VM Design Studio",
      desc: "Hand-placed sequins and embroidery over a structured evening silhouette — quiet glamour for the modern occasion.",
      details: ["Technique: hand embellishment", "Lead time: 5–7 weeks", "Custom sizing", "Worldwide insured shipping"]
    },
    {
      name: "Dancing Muse Embroidered Saree",
      cat: "Hand-Embroidered Saree",
      group: "sarees",
      tag: "Festive essential",
      price: "₹18,000 – ₹32,000",
      img: "images/pexels-1054048-14088968.webp",
      fallback: "images/pexels-1054048-14088968.jpg",
      alt: "Indian woman dancing gracefully in an exquisite traditional dress with intricate embroidery — VM Design Studio",
      desc: "A saree engineered to move — hand-embroidered motifs across the pallu, built for garba nights and wedding dances.",
      details: ["Technique: hand zari + aari accents", "Lead time: 4–6 weeks", "Blouse piece included", "Custom pallu styling"]
    },
    {
      name: "Runway Zari Saree",
      cat: "Hand-Embroidered Saree",
      group: "sarees",
      tag: "Showstopper",
      price: "₹20,000 – ₹38,000",
      img: "images/pexels-rajeshverma-13191607.webp",
      fallback: "images/pexels-rajeshverma-13191607.jpg",
      alt: "Model in ethnic embroidery walking a runway, showcasing luxury fashion — VM Design Studio",
      desc: "A showstopper saree with dense hand embroidery — designed to be seen, made to be remembered.",
      details: ["Technique: hand zardozi", "Lead time: 4–6 weeks", "Blouse included", "Made to measure"]
    },
    {
      name: "Velvet Zardozi Blouse",
      cat: "Bridal Blouse",
      group: "blouses",
      tag: "Made to measure · 3–4 weeks",
      price: "₹6,000 – ₹12,000",
      img: "images/pexels-dhanno-34688060.webp",
      fallback: "images/pexels-dhanno-34688060.jpg",
      alt: "Close-up of elegant hand jewelry on an embroidered velvet sleeve — VM Design Studio",
      desc: "A fully hand-embroidered velvet blouse — the foundation of every bridal look, built around your lehenga or saree.",
      details: ["Technique: hand aari + zari, fully embroidered", "Lead time: 3–4 weeks", "Made to measure", "Matching accessories available"]
    },
    {
      name: "Heirloom Embroidered Blouse",
      cat: "Bridal Blouse",
      group: "blouses",
      tag: "Reception ready",
      price: "₹5,000 – ₹10,000",
      img: "images/pexels-dhanno-34413681.webp",
      fallback: "images/pexels-dhanno-34413681.jpg",
      alt: "Intricate details of an embroidered dress with hands adorned in rings — VM Design Studio",
      desc: "Hand-embroidered detail, stitch by stitch — designed to sit perfectly under sarees, lehengas and gowns.",
      details: ["Technique: hand zari + aari", "Lead time: 3–4 weeks", "Made to measure", "Custom necklines available"]
    },
    {
      name: "Groom's Heritage Sherwani",
      cat: "Groom Couture",
      group: "groom",
      tag: "Bridal · book early",
      price: "₹18,000 – ₹35,000",
      img: "images/pexels-theamritdev-37439722.webp",
      fallback: "images/pexels-theamritdev-37439722.jpg",
      alt: "Elegant traditional groom's outfit with intricate embroidery and a vibrant red shawl — VM Design Studio",
      desc: "The groom deserves the same craft. A hand-embroidered sherwani, tailored to measure, with a matching shawl option.",
      details: ["Technique: hand zari embroidery", "Lead time: 6–8 weeks", "Matching shawl available", "Made to measure"]
    },
    {
      name: "Zardozi Clutch",
      cat: "Adornment",
      group: "adornments",
      tag: "Ready in 2–3 weeks",
      price: "₹1,800 – ₹3,500",
      img: "images/pexels-luisbecerrafotografo-5999452.webp",
      fallback: "images/pexels-luisbecerrafotografo-5999452.jpg",
      alt: "Close-up of a woman holding a detailed clutch bag under sunlight — VM Design Studio",
      desc: "A hand-embroidered clutch to complete the look — zardozi, beads and silk, made to match your ensemble.",
      details: ["Technique: hand zardozi + beads", "Lead time: 2–3 weeks", "Custom colours available", "Ships worldwide"]
    }
  ];

  /* ---- Render collection grid ---- */
  var grid = document.getElementById("grid");
  if (grid) { LOOKBOOK.forEach(function (item, i) {
    var card = document.createElement("article");
    card.className = "card reveal";
    card.dataset.group = item.group;
    card.style.transitionDelay = ((i % 4) * 0.07) + "s";
    card.innerHTML =
      '<div class="card-media">' +
        '<img src="' + item.img + '" alt="' + item.alt + '" loading="lazy" width="800" height="1067">' +
        '<span class="card-tag">' + item.tag + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<h3 class="card-name">' + item.name + '</h3>' +
        '<p class="card-cat">' + item.cat + '</p>' +
        '<p class="card-price">' + item.price + '</p>' +
      '</div>';
    card.addEventListener("click", function () { openModal(item); });
    grid.appendChild(card);
  });
  }

  /* ---- Reveal-on-scroll for cards ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -40px 0px" });
  if (grid) { grid.querySelectorAll(".card").forEach(function (c) { io.observe(c); }); }

  /* ---- Filters ---- */
  if (grid) {
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var f = chip.dataset.filter;
      grid.querySelectorAll(".card").forEach(function (card) {
        var show = (f === "all" || card.dataset.group === f);
        card.classList.toggle("hidden", !show);
        if (show) { card.classList.add("revealed"); }
      });
    });
  });
  }

  /* ---- Modal ---- */
  var modal = document.getElementById("productModal");
  var modalImg=null, modalTag=null, modalCat=null, modalTitle=null, modalPrice=null,
      modalDesc=null, modalDetails=null, modalWa=null, modalFitting=null;

  function openModal(item) {
    modalImg.src = item.img;
    modalImg.alt = item.alt;
    modalImg.onerror = function () { if (this.src.indexOf(".webp") > -1) { this.src = item.fallback; } };
    modalTag.textContent = item.tag;
    modalCat.textContent = item.cat;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;
    modalDetails.innerHTML = "";
    item.details.forEach(function (d) {
      var li = document.createElement("li");
      li.textContent = d;
      modalDetails.appendChild(li);
    });
    modalWa.href = waLink("Hi, I'm interested in the " + item.name + " (" + item.price + ") at VM Design Studio.");
    modalFitting.href = WA_FITTING;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  if (modal) {
  modalImg = document.getElementById("modalImage");
  modalTag = document.getElementById("modalTag");
  modalCat = document.getElementById("modalCat");
  modalTitle = document.getElementById("modalTitle");
  modalPrice = document.getElementById("modalPrice");
  modalDesc = document.getElementById("modalDesc");
  modalDetails = document.getElementById("modalDetails");
  modalWa = document.getElementById("modalWa");
  modalFitting = document.getElementById("modalFitting");
  modal.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  }

  /* ---- Mobile nav ---- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Sticky header ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Hero image (CSS background) ---- */
  var heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    var heroImg = new Image();
    heroImg.onload = function () {
      heroBg.style.backgroundImage = "url('" + heroImg.src + "')";
    };
    heroImg.src = "images/pexels-1054048-14088968.jpg";
  }

  /* ---- Accordion ---- */
  var accItems = document.querySelectorAll(".acc-item");
  if (accItems.length) { accItems.forEach(function (item) {
    var q = item.querySelector(".acc-q");
    var a = item.querySelector(".acc-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      accItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".acc-q").setAttribute("aria-expanded", "false");
        other.querySelector(".acc-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
  }

  /* ---- IG tiles ---- */
  var IG = [
    "images/pexels-1054048-11702815.webp",
    "images/pexels-gursher-gill-63702010-13661786.webp",
    "images/pexels-dhanno-34413681.webp",
    "images/pexels-1054048-14088968.webp",
    "images/pexels-dhanno-34688060.webp",
    "images/pexels-gursher-gill-63702010-14284122.webp",
    "images/pexels-rajeshverma-13191607.webp",
    "images/pexels-dhanno-37962852.webp",
    "images/pexels-theamritdev-37439722.webp",
    "images/pexels-luisbecerrafotografo-5999452.webp",
    "images/pexels-fahadputhawala-33940208.webp",
    "images/pexels-artworkbyumair-15226363.webp"
  ];
  var igGrid = document.getElementById("igGrid");
  if (igGrid) { IG.forEach(function (src, i) {
    var a = document.createElement("a");
    a.className = "ig-tile";
    a.href = "https://www.instagram.com/vmdesignstudio24";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "VM Design Studio on Instagram");
    var im = document.createElement("img");
    im.src = src;
    im.alt = "VM Design Studio work on Instagram";
    im.loading = "lazy";
    var ov = document.createElement("span");
    ov.className = "ig-ov";
    ov.innerHTML = "✦";
    a.appendChild(im);
    a.appendChild(ov);
    igGrid.appendChild(a);
  });
  }

  /* ---- Generic reveal on scroll ---- */
  var revIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); revIo.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal:not(.card)").forEach(function (el) { revIo.observe(el); });

})();
