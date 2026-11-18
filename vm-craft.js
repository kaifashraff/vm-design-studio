/* ==========================================================================
   VM Design Studio — homepage enhancement layer
   Adds two editorial blocks that the static Next export does not carry:
     1. "The Craft" extension  — stats, six-stage process, detail plates, CTA
     2. "The Bridal Edit" lookbook — all six looks visible with captions + links

   Injected after hydration so it can never fight React. If React ever
   rewrites <main>, the observer below puts the blocks straight back.
   ========================================================================== */
(function () {
  "use strict";

  var STYLE_ID = "vme-style";
  var CRAFT_ID = "vme-craft-ext";
  var LOOK_ID  = "vme-lookbook";

  /* ---- resolve the site base (works on Pages, custom domain, localhost) -- */
  function siteBase() {
    var link = document.querySelector('link[rel="stylesheet"][href*="/_next/"]');
    if (link) {
      var href = link.href.split("/_next/")[0];
      if (href) return href.replace(/\/$/, "");
    }
    return "";
  }
  var BASE = siteBase();

  function url(path) {
    return BASE + path;
  }

  /* ---- markup ----------------------------------------------------------- */
  function craftMarkup() {
    return '' +
    '<div class="vme">' +
      '<div class="vme-wrap">' +
        '<div class="vme-rv">' +
          '<div class="vme-stats">' +
            '<div class="vme-stat"><b>400<i>+</i></b><p>Hours in a single bridal lehenga</p></div>' +
            '<div class="vme-stat"><b>1</b><p>Artisan, sketch to final stitch</p></div>' +
            '<div class="vme-stat"><b>5</b><p>Hand techniques on one piece</p></div>' +
            '<div class="vme-stat"><b>0</b><p>Machine hours. Ever.</p></div>' +
          '</div>' +
        '</div>' +

        '<div class="vme-proc">' +
          '<figure class="vme-art vme-rv">' +
            '<img src="' + url('/images/pexels-vireshstudio-18016514.webp') + '" alt="A richly embroidered garment stretched on the frame in the Anand atelier" width="1000" height="1500">' +
            '<figcaption>The atelier — Anand, Gujarat<span>One frame, one pair of hands, one piece at a time.</span></figcaption>' +
          '</figure>' +

          '<div class="vme-rv">' +
            '<p class="vme-micro">From sketch to ceremony</p>' +
            '<h3 class="vme-h" style="font-size:clamp(1.5rem,2.9vw,2.15rem);margin-bottom:26px">Six hands-on stages, <em>counted in hours.</em></h3>' +
            '<ol class="vme-steps">' +
              '<li class="vme-step"><div class="vme-n">01</div><div><h3>The conversation <span class="vme-hrs">1–2 sittings</span></h3><p>We start with the wedding, not the outfit — the venue, the light, the colours in the family. The piece follows from that.</p></div></li>' +
              '<li class="vme-step"><div class="vme-n">02</div><div><h3>The sketch <span class="vme-hrs">40–60 hrs</span></h3><p>Hand-drawn to your measurements and the mood of the day. Every motif is placed before a single thread is cut.</p></div></li>' +
              '<li class="vme-step"><div class="vme-n">03</div><div><h3>The frame <span class="vme-hrs">Half a day</span></h3><p>Fabric is stretched taut on the adda so the needle has something honest to push against. Tension decides the finish.</p></div></li>' +
              '<li class="vme-step"><div class="vme-n">04</div><div><h3>Zardozi <span class="vme-hrs">180–220 hrs</span></h3><p>Metal thread — gold, silver, antique — couched down two strands at a time. This is where the bulk of the hours live.</p></div></li>' +
              '<li class="vme-step"><div class="vme-n">05</div><div><h3>Aari <span class="vme-hrs">100–140 hrs</span></h3><p>A hooked needle pulls chain stitches from below the fabric, building motifs that catch light as you move.</p></div></li>' +
              '<li class="vme-step"><div class="vme-n">06</div><div><h3>The finishing <span class="vme-hrs">40–60 hrs</span></h3><p>Beads, sequins and stones set by hand, then lining, hooks and three fittings. The last ten percent decides everything.</p></div></li>' +
            '</ol>' +
          '</div>' +
        '</div>' +

        '<div class="vme-plates vme-rv">' +
          '<div class="vme-plate"><img src="' + url('/videos/zari-vertical-gold-poster.jpg') + '" alt="Golden zari thread under the needle, extreme close-up" width="720" height="1280"><span>Zari, under the needle</span></div>' +
          '<div class="vme-plate"><img src="' + url('/videos/atelier-landscape-poster.jpg') + '" alt="The atelier floor — frame, threads and tools" width="1280" height="720"><span>The frame, the thread, the tools</span></div>' +
        '</div>' +

        '<div class="vme-cta vme-rv">' +
          '<h3>A piece like this starts with <em>a conversation.</em></h3>' +
          '<div class="vme-btns">' +
            '<a class="vme-btn vme-btn--gold" href="' + url('/contact/') + '">Commission a piece</a>' +
            '<a class="vme-btn vme-btn--ghost" href="' + url('/shop/') + '">See the bridal edit</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function lookbookMarkup() {
    var looks = [
      { n: "01", name: "The bridal lehenga", sub: "Red &amp; gold, hand-embroidered", img: "pexels-1054048-11702815.webp",        alt: "Bride in a deep red lehenga with gold jewellery",            slug: "rani-bridal-lehenga" },
      { n: "02", name: "Red &amp; gold",      sub: "Zardozi on silk, 460 hours",     img: "pexels-gursher-gill-63702010-13661786.webp", alt: "Bride in a lavish red and gold lehenga against historic columns", slug: "maharani-lehenga" },
      { n: "03", name: "The archway look",    sub: "Heirloom motifs, modern drape",  img: "pexels-1054048-12747884.webp",               alt: "Woman in an ornate red lehenga in a historic archway",       slug: "archway-bridal-lehenga" },
      { n: "04", name: "The finishing touch", sub: "Where the detail is decided",    img: "pexels-gursher-gill-63702010-13156144.webp", alt: "Bride's hands with mehndi and gold jewellery resting on embroidery", slug: "velvet-zardozi-blouse" },
      { n: "05", name: "For the groom, too",  sub: "Sherwani with tonal zari",       img: "pexels-anna-pou-9345716.webp",               alt: "Man in ornate Indian traditional clothing",                  slug: "grooms-sherwani" },
      { n: "06", name: "Quiet luxury",        sub: "Beadwork instead of gold",       img: "pexels-artworkbyumair-15226363.webp",        alt: "Woman in traditional beaded attire",                         slug: "amethyst-reception" }
    ];

    var tiles = looks.map(function (l) {
      return '<a class="vme-tile vme-rv" href="' + url('/product/' + l.slug + '/') + '">' +
        '<figure>' +
          '<img src="' + url('/images/' + l.img) + '" alt="' + l.alt + '" width="800" height="1200">' +
          '<div class="vme-veil"></div>' +
          '<div class="vme-cap">' +
            '<div class="vme-lbl">Look ' + l.n + '</div>' +
            '<h4>' + l.name + '</h4>' +
            '<p>' + l.sub + '</p>' +
          '</div>' +
        '</figure>' +
        '<div class="vme-arrow" aria-hidden="true">&#8599;</div>' +
      '</a>';
    }).join("");

    return '' +
    '<div class="vme">' +
      '<div class="vme-wrap">' +
        '<div class="vme-lookhead vme-rv">' +
          '<div>' +
            '<p class="vme-eyebrow">The Bridal Edit</p>' +
            '<h2 class="vme-h" style="font-size:clamp(2rem,4vw,3.1rem)">Worn once, <em>remembered forever.</em></h2>' +
          '</div>' +
          '<p class="vme-lede">Six looks from the atelier — each one made to measure, each one a different answer to the same question: what should the day feel like?</p>' +
        '</div>' +
        '<div class="vme-grid">' + tiles + '</div>' +
        '<p class="vme-note"><b>Note</b> — Visuals indicative. Every piece is made to order; fabric, colour and motif are finalised with the studio before the frame is set.</p>' +
      '</div>' +
    '</div>';
  }

  /* ---- build / insert --------------------------------------------------- */
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var link = document.createElement("link");
    link.id = STYLE_ID;
    link.rel = "stylesheet";
    link.href = url("/vm-craft.css");
    document.head.appendChild(link);
  }

  function mainSections() {
    return Array.prototype.slice.call(document.querySelectorAll("main section"));
  }

  function findByText(txt) {
    return mainSections().filter(function (s) {
      return (s.textContent || "").indexOf(txt) !== -1;
    })[0];
  }

  function insertAfter(node, ref) {
    ref.parentNode.insertBefore(node, ref.nextSibling);
  }

  function buildCraftExtension() {
    if (document.getElementById(CRAFT_ID)) return;
    var anchor = findByText("Not mass-produced");
    if (!anchor) return;
    var el = document.createElement("section");
    el.id = CRAFT_ID;
    el.className = "vme-sec";
    el.style.paddingTop = "0";           /* the section above already pads */
    el.innerHTML = craftMarkup();
    insertAfter(el, anchor);
  }

  function buildLookbook() {
    if (document.getElementById(LOOK_ID)) return;
    var anchor = findByText("Worn once");
    if (!anchor) return;
    var el = document.createElement("section");
    el.id = LOOK_ID;
    el.className = "vme-sec vme-sec--last";
    el.innerHTML = lookbookMarkup();
    insertAfter(el, anchor);
  }

  /* ---- reveal on scroll -------------------------------------------------- */
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".vme-rv:not(.vme-in)");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (e) { e.classList.add("vme-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("vme-in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    Array.prototype.forEach.call(els, function (e) {
      /* anything already on screen at load shows immediately */
      var r = e.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.1) e.classList.add("vme-in");
      else io.observe(e);
    });
  }

  /* ---- run --------------------------------------------------------------- */
  function run() {
    ensureStyle();
    buildCraftExtension();
    buildLookbook();
    observeReveals(document);
  }

  function start() {
    var tries = 0;
    (function tick() {
      if (findByText("Not mass-produced") || tries > 60) { run(); return; }
      tries++;
      window.setTimeout(tick, 120);
    })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  /* put the blocks back if React ever rewrites <main> */
  var pending = false;
  function watch() {
    var main = document.querySelector("main");
    if (!main || !("MutationObserver" in window)) return;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(function () {
        pending = false;
        if (!document.getElementById(CRAFT_ID) || !document.getElementById(LOOK_ID)) {
          run();
        }
      });
    }).observe(main, { childList: true, subtree: false });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", watch);
  } else {
    watch();
  }
})();
