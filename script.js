// ShopSphere — minimal demo interactivity (no backend, no data leaves the browser)
(function () {
  // ---- shared toast ----
  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }

  // ---- add to cart (badge + button feedback) ----
  var count = 0;
  var badge = document.getElementById("cart-count");

  document.querySelectorAll(".add-to-cart").forEach(function (btn) {
    btn.addEventListener("click", function () {
      count++;
      if (badge) badge.textContent = count;
      showToast("Added to cart ✓");

      var original = btn.textContent;
      btn.textContent = "Added ✓";
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 900);
    });
  });

  // ---- product page tabs ----
  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll(".tab");
    var panels = tabs.querySelectorAll(".tab-panel");

    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        panels.forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        if (panels[i]) panels[i].classList.add("active");
      });
    });
  });

  // ---- gallery thumbnails ----
  var main = document.querySelector(".gallery-main");
  document.querySelectorAll(".thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      document.querySelectorAll(".thumb").forEach(function (x) { x.classList.remove("active"); });
      t.classList.add("active");
      if (main) {
        main.className = "gallery-main " + t.className.replace("thumb ", "").replace("active", "").trim();
      }
    });
  });

  // ---- color swatches ----
  document.querySelectorAll(".swatches").forEach(function (group) {
    group.querySelectorAll(".swatch").forEach(function (s) {
      s.addEventListener("click", function () {
        group.querySelectorAll(".swatch").forEach(function (x) { x.classList.remove("active"); });
        s.classList.add("active");
      });
    });
  });

  // ---- quantity steppers ----
  document.querySelectorAll(".qty").forEach(function (q) {
    var minus = q.querySelector("button:first-child");
    var plus = q.querySelector("button:last-child");
    var value = q.querySelector("span");

    if (minus) minus.addEventListener("click", function () {
      var n = parseInt(value.textContent, 10) || 1;
      value.textContent = Math.max(1, n - 1);
    });

    if (plus) plus.addEventListener("click", function () {
      var n = parseInt(value.textContent, 10) || 1;
      value.textContent = Math.min(99, n + 1);
    });
  });
})();
