/* ============================================================
   TazaRitual — consent.js
   Gestión del consentimiento de cookies (LATAM).

   - Guarda la elección en localStorage bajo la clave 'cc-consent-v1'
     con la forma {necessary:true, preferences, analytics, advertising, ts}.
   - Banner con Aceptar / Rechazar / Configurar; modal con 4 categorías
     (Necesarias siempre activas, Preferencias, Analítica, Publicidad).
   - El botón #open-cookie-settings del footer reabre el modal.
   - Expone window.CafeConsent.has('preferences'|'analytics'|'advertising').

   NOTA AdSense: los scripts de publicidad y analítica SOLO deben
   insertarse después de obtener el consentimiento correspondiente
   (ver window.CafeConsent.has()). Para tráfico del EEE, Reino Unido
   o Suiza, Google exige una CMP certificada; esta solución cubre
   LATAM y hay que migrar a una CMP certificada al escalar
   (ver ADSENSE.md).
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "cc-consent-v1";
  var CATEGORIES = ["preferences", "analytics", "advertising"];

  var banner = document.getElementById("cookie-banner");
  var modal = document.getElementById("cookie-modal");
  var settingsBtn = document.getElementById("open-cookie-settings");

  function readConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(values) {
    var consent = {
      necessary: true,
      preferences: !!values.preferences,
      analytics: !!values.analytics,
      advertising: !!values.advertising,
      ts: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch (e) {
      /* almacenamiento no disponible: se respeta la sesión actual */
    }
    return consent;
  }

  function has(cat) {
    var consent = readConsent();
    if (!consent) return false;
    if (cat === "necessary") return true;
    return !!consent[cat];
  }

  function hideBanner() {
    if (banner) banner.setAttribute("hidden", "");
  }

  function acceptAll() {
    saveConsent({ preferences: true, analytics: true, advertising: true });
    hideBanner();
  }

  function rejectAll() {
    saveConsent({ preferences: false, analytics: false, advertising: false });
    hideBanner();
  }

  function openModal() {
    if (!modal) return;
    var consent = readConsent() || {};
    CATEGORIES.forEach(function (cat) {
      var input = modal.querySelector('input[name="cc-' + cat + '"]');
      if (input) input.checked = !!consent[cat];
    });
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  function closeModal() {
    if (!modal) return;
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }

  function saveFromModal() {
    var values = {};
    CATEGORIES.forEach(function (cat) {
      var input = modal.querySelector('input[name="cc-' + cat + '"]');
      values[cat] = !!(input && input.checked);
    });
    saveConsent(values);
    closeModal();
    hideBanner();
  }

  if (banner) {
    var acceptBtn = banner.querySelector(".cookie-accept");
    var rejectBtn = banner.querySelector(".cookie-reject");
    var configBtn = banner.querySelector(".cookie-config");
    if (acceptBtn) acceptBtn.addEventListener("click", acceptAll);
    if (rejectBtn) rejectBtn.addEventListener("click", rejectAll);
    if (configBtn) configBtn.addEventListener("click", openModal);
    // Muestra el banner solo si aún no hay decisión guardada.
    if (!readConsent()) banner.removeAttribute("hidden");
  }

  if (modal) {
    var saveBtn = modal.querySelector(".cookie-save");
    if (saveBtn) saveBtn.addEventListener("click", saveFromModal);
  }

  if (settingsBtn) {
    settingsBtn.addEventListener("click", function () {
      openModal();
    });
  }

  // API pública: window.CafeConsent.has('advertising') etc.
  window.CafeConsent = {
    has: has,
    openSettings: openModal
  };
})();
