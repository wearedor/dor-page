/* ==========================================================================
   dør hero — scroll-driven morph: a PORTAL (dør = "door" in Danish) that,
   as the hero pins and you scroll, rearranges into the dør logo.
   Pure 2D canvas, no dependencies. Respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  var canvas = document.getElementById('hero-canvas');
  var hero = document.querySelector('.hero');
  if (!canvas || !hero) return;

  var ctx = canvas.getContext('2d', { alpha: true });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

  var W = 0, H = 0;
  var logoPts = [];       // sampled logo points, centered coords (CSS px)
  var portalPts = [];     // door/portal outline points, same count
  var particles = [];
  var progress = 0;       // 0 = portal, 1 = logo
  var logoImg = new Image();
  var logoReady = false;

  var ACCENTS = [[242, 108, 59], [255, 150, 110], [219, 185, 87]]; // naranja + warm + amarillo hint

  function centerOf() {
    if (W < 760) return { x: W * 0.5, y: H * 0.5 };
    return { x: W * 0.72, y: H * 0.5 };
  }

  function currentLogoSize() {
    return Math.min(W * (W < 760 ? 0.72 : 0.42), 480);
  }

  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildLogo();
    buildPortal();
    seedParticles();
  }

  /* ---- Logo target points (sampled from the real dør wordmark SVG) ------ */
  function buildLogo() {
    if (!logoReady) return;
    var logoSize = currentLogoSize();
    var res = 300;
    var off = document.createElement('canvas');
    off.width = res; off.height = res;
    var octx = off.getContext('2d');
    octx.clearRect(0, 0, res, res);
    octx.drawImage(logoImg, 6, 6, res - 12, res - 12);
    var data;
    try { data = octx.getImageData(0, 0, res, res).data; }
    catch (e) { return; }
    logoPts = [];
    var stride = 3;
    for (var y = 0; y < res; y += stride) {
      for (var x = 0; x < res; x += stride) {
        if (data[(y * res + x) * 4 + 3] > 110) {
          logoPts.push({ x: (x / res - 0.5) * logoSize, y: (y / res - 0.5) * logoSize });
        }
      }
    }
    for (var i = logoPts.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = logoPts[i]; logoPts[i] = logoPts[j]; logoPts[j] = t;
    }
    var CAP = W < 760 ? 1700 : 2800;
    if (logoPts.length > CAP) logoPts.length = CAP;
  }

  /* ---- Portal outline points (arch-topped doorway, double frame) -------- */
  function buildPortal() {
    var N = logoPts.length;
    if (!N) { portalPts = []; return; }
    var size = currentLogoSize();
    var dH = size * 1.0;           // door height
    var hw = size * 0.30;          // half width
    var springY = -dH / 2 + hw;    // where straight jambs meet the arch
    var botY = dH / 2;

    function ring(scale) {
      var w = hw * scale, sY = springY * 1, bY = botY * scale;
      // segments of one door outline, with arc-length weights
      var segs = [];
      // left jamb (bottom -> spring)
      segs.push({ t: 'l', x1: -w, y1: bY, x2: -w, y2: sY, len: Math.abs(bY - sY) });
      // arch (semicircle over the top), center (0, sY), radius w, angle PI -> 0 going over top (y up)
      segs.push({ t: 'a', cx: 0, cy: sY, r: w, a0: Math.PI, a1: 0, len: Math.PI * w });
      // right jamb (spring -> bottom)
      segs.push({ t: 'l', x1: w, y1: sY, x2: w, y2: bY, len: Math.abs(bY - sY) });
      // threshold (bottom)
      segs.push({ t: 'l', x1: w, y1: bY, x2: -w, y2: bY, len: 2 * w });
      var total = 0; segs.forEach(function (s) { total += s.len; });
      return { segs: segs, total: total };
    }

    var outer = ring(1.0);
    var inner = ring(0.62);
    // 62% of points to outer ring, 38% to inner — reads as a portal with depth
    var nOuter = Math.round(N * 0.62);
    var nInner = N - nOuter;

    function walk(r, count, out) {
      for (var k = 0; k < count; k++) {
        var d = (k + 0.5) / count * r.total;
        var acc = 0, s, si = 0;
        for (si = 0; si < r.segs.length; si++) { if (acc + r.segs[si].len >= d) break; acc += r.segs[si].len; }
        s = r.segs[Math.min(si, r.segs.length - 1)];
        var f = s.len ? (d - acc) / s.len : 0;
        if (s.t === 'l') {
          out.push({ x: s.x1 + (s.x2 - s.x1) * f, y: s.y1 + (s.y2 - s.y1) * f });
        } else {
          var a = s.a0 + (s.a1 - s.a0) * f;
          out.push({ x: s.cx + Math.cos(a) * s.r, y: s.cy - Math.sin(a) * s.r });
        }
      }
    }

    portalPts = [];
    walk(outer, nOuter, portalPts);
    walk(inner, nInner, portalPts);
    // shuffle so morph doesn't peel ring-by-ring
    for (var i = portalPts.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = portalPts[i]; portalPts[i] = portalPts[j]; portalPts[j] = t;
    }
  }

  function seedParticles() {
    var n = Math.min(logoPts.length, portalPts.length);
    particles = new Array(n);
    for (var i = 0; i < n; i++) {
      var col = ACCENTS[(Math.random() * ACCENTS.length) | 0];
      particles[i] = {
        ax: portalPts[i].x, ay: portalPts[i].y,   // portal (p=0)
        tx: logoPts[i].x,   ty: logoPts[i].y,      // logo (p=1)
        ph: Math.random() * Math.PI * 2,
        sp: 0.35 + Math.random() * 0.9,
        sz: Math.random() < 0.14 ? 2.3 : 1.35,
        col: col
      };
    }
  }

  function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  function alphaFor(p) {
    // Both endpoints are formed shapes; keep visible throughout, brighten to logo.
    return W < 760 ? (0.16 + 0.30 * p) : (0.55 + 0.35 * p);
  }

  var t0 = performance.now();
  var rafId = 0;
  function render(now, useIdle) {
    var time = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    var c = centerOf();
    var p = easeInOut(progress);
    // motion peaks mid-morph, calm at the two formed states
    var stir = useIdle ? Math.sin(p * Math.PI) * 6 + 1 : 0;
    var a = alphaFor(p); if (a > 0.95) a = 0.95;
    for (var i = 0; i < particles.length; i++) {
      var pt = particles[i];
      var ix = 0, iy = 0;
      if (useIdle) { ix = Math.cos(time * pt.sp + pt.ph) * stir * 0.5; iy = Math.sin(time * pt.sp * 1.08 + pt.ph) * stir * 0.5; }
      var x = c.x + (pt.ax * (1 - p) + pt.tx * p) + ix;
      var y = c.y + (pt.ay * (1 - p) + pt.ty * p) + iy;
      ctx.globalAlpha = a;
      ctx.fillStyle = 'rgb(' + pt.col[0] + ',' + pt.col[1] + ',' + pt.col[2] + ')';
      ctx.beginPath();
      ctx.arc(x, y, pt.sz, 0, 6.283185);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function frame(now) { render(now, true); rafId = requestAnimationFrame(frame); }
  function drawStatic() { render(performance.now(), false); }

  // Debug hook: ?p=<0..1> locks morph progress (for screenshot verification).
  var LOCK = null;
  try {
    var pq = new URLSearchParams(location.search).get('p');
    if (pq !== null) LOCK = Math.min(Math.max(parseFloat(pq), 0), 1);
  } catch (e) {}

  // The morph completes at HOLD of the pin's scroll range, then the fully
  // formed logo holds for the remaining scroll before the hero releases —
  // so the payoff is readable before the page advances.
  var HOLD = 0.66;

  function onScroll() {
    if (LOCK !== null) { progress = LOCK; if (reduce) drawStatic(); return; }
    var rect = hero.getBoundingClientRect();
    var total = hero.offsetHeight - window.innerHeight;
    var raw = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
    progress = Math.min(raw / HOLD, 1);
    if (reduce) drawStatic();
  }

  logoImg.onload = function () {
    logoReady = true;
    resize();
    onScroll();
    if (reduce) drawStatic(); else rafId = requestAnimationFrame(frame);
  };
  logoImg.src = 'assets/images/logos/dor-logo-white.svg';

  var rt;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      resize(); onScroll(); if (reduce) drawStatic();
    }, 150);
  });
  window.addEventListener('scroll', onScroll, { passive: true });
})();
