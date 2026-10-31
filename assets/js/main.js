/* ============================================================
   TazaRitual — main.js
   Interacciones generales: menú móvil, newsletter visual,
   validación genérica de formularios (data-validate) y año dinámico.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mainNav.classList.toggle("open", !expanded);
    });
  }

  /* ---------- Año dinámico del footer ---------- */
  var yearEls = document.querySelectorAll("[data-year]");
  var currentYear = new Date().getFullYear();
  for (var i = 0; i < yearEls.length; i++) {
    yearEls[i].textContent = currentYear;
  }

  /* ---------- Newsletter (solo visual, sin backend) ---------- */
  var newsletterForms = document.querySelectorAll(".newsletter-form");
  for (var n = 0; n < newsletterForms.length; n++) {
    (function (form) {
      var msgBox = form.parentElement.querySelector(".newsletter-message");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = form.querySelector('input[type="email"]');
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
          showFormError(form, "Escribe un correo válido para continuar.");
          return;
        }
        form.reset();
        var box = document.createElement("p");
        box.className = "form-success";
        box.setAttribute("role", "status");
        box.textContent = "¡Gracias! Muy pronto activaremos el boletín.";
        if (msgBox) { msgBox.innerHTML = ""; msgBox.appendChild(box); }
      });
    })(newsletterForms[n]);
  }

  /* ---------- Validación genérica de formularios ----------
     La usa el formulario de contacto (data-validate). Reglas:
     required, type=email, minlength. No envía si hay errores. */
  function showFormError(form, message) {
    var existing = form.querySelector(".form-error.js-global");
    if (existing) existing.remove();
    var p = document.createElement("p");
    p.className = "form-error js-global";
    p.setAttribute("role", "alert");
    p.textContent = message;
    form.insertBefore(p, form.firstChild);
  }

  function validateField(field) {
    var value = field.value.trim();
    var label = field.getAttribute("data-label") || field.name || "Este campo";
    if (field.hasAttribute("required") && value === "") {
      return label + " es obligatorio.";
    }
    if (field.type === "email" && value !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Escribe un correo electrónico válido.";
    }
    var min = field.getAttribute("minlength");
    if (min && value.length < parseInt(min, 10)) {
      return label + " debe tener al menos " + min + " caracteres.";
    }
    return null;
  }

  function validateForm(form) {
    var fields = form.querySelectorAll("input, textarea, select");
    var errors = [];
    for (var i = 0; i < fields.length; i++) {
      var err = validateField(fields[i]);
      if (err) errors.push(err);
    }
    var existing = form.querySelectorAll(".form-error.js-global");
    for (var j = 0; j < existing.length; j++) existing[j].remove();
    if (errors.length > 0) {
      var box = document.createElement("div");
      box.className = "form-error js-global";
      box.setAttribute("role", "alert");
      box.innerHTML = "<p><strong>Revisa lo siguiente:</strong></p><ul></ul>";
      var ul = box.querySelector("ul");
      errors.forEach(function (msg) {
        var li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
      });
      form.insertBefore(box, form.firstChild);
      return false;
    }
    return true;
  }

  // Expuesta para que otros scripts (p. ej. contacto) la reutilicen.
  window.CafeValidate = { validateForm: validateForm };

  var validatedForms = document.querySelectorAll("form[data-validate]");
  for (var f = 0; f < validatedForms.length; f++) {
    validatedForms[f].addEventListener("submit", function (e) {
      if (!validateForm(this)) {
        e.preventDefault();
        var firstError = this.querySelector("input, textarea, select");
        if (firstError) firstError.focus();
      }
    });
  }

  /* ---------- Smooth scroll opcional (respeta reduce motion) ---------- */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "auto";
  }
})();

  /* ---------- Índice del artículo (TOC automático) ---------- */
  (function buildTOC() {
    var article = document.querySelector("main article");
    if (!article) return;
    var lead = article.querySelector("p.lead");
    var heads = article.querySelectorAll(":scope > h2");
    if (!lead || heads.length < 3) return;
    function slugify(t) {
      return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    var nav = document.createElement("nav");
    nav.className = "toc";
    nav.setAttribute("aria-label", "Índice del artículo");
    var title = document.createElement("p");
    title.className = "toc-title";
    title.textContent = "En este artículo";
    var list = document.createElement("ol");
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      if (!h.id) h.id = slugify(h.textContent) || ("seccion-" + (i + 1));
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    }
    nav.appendChild(title);
    nav.appendChild(list);
    lead.after(nav);
  })();

  /* ---------- Botones para compartir ---------- */
  (function buildShare() {
    var article = document.querySelector("main article");
    if (!article) return;
    var anchor = article.querySelector("aside.author-box, section.author-box");
    if (!anchor) return;
    var url = encodeURIComponent(window.location.href.split("#")[0]);
    var text = encodeURIComponent(document.title);
    var links = [
      { name: "WhatsApp", href: "https://wa.me/?text=" + text + "%20" + url, label: "Compartir en WhatsApp" },
      { name: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=" + url, label: "Compartir en Facebook" },
      { name: "X", href: "https://twitter.com/intent/tweet?text=" + text + "&url=" + url, label: "Compartir en X" }
    ];
    var sec = document.createElement("section");
    sec.className = "share";
    sec.setAttribute("aria-label", "Compartir este artículo");
    var p = document.createElement("p");
    p.className = "share-title";
    p.textContent = "¿Te sirvió? Compártelo";
    sec.appendChild(p);
    var wrap = document.createElement("div");
    wrap.className = "share-buttons";
    links.forEach(function (l) {
      var a = document.createElement("a");
      a.className = "share-btn";
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", l.label);
      a.textContent = l.name;
      wrap.appendChild(a);
    });
    var copy = document.createElement("button");
    copy.className = "share-btn";
    copy.type = "button";
    copy.textContent = "Copiar enlace";
    copy.addEventListener("click", function () {
      var done = function () { copy.textContent = "¡Copiado!"; setTimeout(function(){ copy.textContent = "Copiar enlace"; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href.split("#")[0]).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = window.location.href.split("#")[0];
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
    wrap.appendChild(copy);
    sec.appendChild(wrap);
    anchor.before(sec);
  })();
