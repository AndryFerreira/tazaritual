/* ============================================================
   TazaRitual — search.js
   Buscador local sin backend: carga /assets/data/search.json
   (lo genera el coordinador: [{t,u,d,c}]) y filtra en vivo
   por título, descripción y categoría.
   ============================================================ */
(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var resultsBox = document.getElementById("search-results");
  if (!input || !resultsBox) return;

  var index = null;
  var loaded = false;

  function setStatus(text) {
    resultsBox.innerHTML = "";
    var p = document.createElement("p");
    p.className = "search-status";
    p.setAttribute("role", "status");
    p.textContent = text;
    resultsBox.appendChild(p);
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function renderResults(items) {
    resultsBox.innerHTML = "";
    if (items.length === 0) {
      setStatus("Sin resultados. Prueba con otra palabra, como \"moka\", \"ratio\" o \"molienda\".");
      return;
    }
    items.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "search-result";
      var cat = document.createElement("span");
      cat.className = "card-category";
      cat.textContent = item.c || "Artículo";
      var h3 = document.createElement("h3");
      var a = document.createElement("a");
      a.href = item.u;
      a.textContent = item.t;
      h3.appendChild(a);
      var p = document.createElement("p");
      p.textContent = item.d || "";
      article.appendChild(cat);
      article.appendChild(h3);
      article.appendChild(p);
      resultsBox.appendChild(article);
    });
  }

  function search(query) {
    var q = normalize(query.trim());
    if (q.length < 2) {
      resultsBox.innerHTML = "";
      return;
    }
    if (!loaded || !index) return;
    var hits = index.filter(function (item) {
      var hay = normalize([item.t, item.d, item.c].join(" "));
      return q.split(/\s+/).every(function (word) { return hay.indexOf(word) !== -1; });
    });
    renderResults(hits);
  }

  var debounce = null;
  input.addEventListener("input", function () {
    clearTimeout(debounce);
    debounce = setTimeout(function () { search(input.value); }, 180);
  });

  fetch("/assets/data/search.json")
    .then(function (res) {
      if (!res.ok) throw new Error("not-found");
      return res.json();
    })
    .then(function (data) {
      index = Array.isArray(data) ? data : [];
      loaded = true;
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q");
      if (q) {
        input.value = q;
        search(q);
      }
    })
    .catch(function () {
      loaded = false;
      setStatus("El índice de búsqueda aún no está disponible. Muy pronto podrás buscar entre todos nuestros artículos.");
    });
})();
