# TazaRitual

**Café de especialidad en casa: métodos, guías y recetas.**

Sitio web editorial estático (HTML, CSS y JavaScript puros, sin frameworks y sin proceso de build) dedicado al café de especialidad preparado en casa. Escrito en español neutro latinoamericano, con tono de barista aficionado experto: cercano y claro.

Autoría: "Equipo TazaRitual" (organización; no se inventan personas).

## Cómo está construido

- **Sin frameworks, sin build.** Archivos HTML/CSS/JS planos que se publican tal cual.
- **Mobile-first**, contenedor máximo de 1120px, paleta crema/marrón/caramelo, tipografías Fraunces (titulares) + Inter (cuerpo) desde Google Fonts.
- **SEO en cada página:** title único, meta description, canonical, Open Graph, Twitter Card y JSON-LD (WebSite/Organization, Article, BreadcrumbList, FAQPage).
- **Consentimiento de cookies propio** (`assets/js/consent.js`): banner + modal con categorías, elección guardada en el dispositivo (`localStorage`, clave `cc-consent-v1`), botón "Preferencias de cookies" en el footer que reabre el modal.
- **Buscador interno** (`/buscar/`): filtra en vivo sobre `assets/data/search.json`, sin backend.
- **Placeholders de anuncios AdSense** invisibles por defecto (`display:none`; solo muestran una caja punteada de vista previa con la clase `body.ads-preview`). El código real se pega solo tras la aprobación (ver `ADSENSE.md`).

## Estructura de carpetas

```
cafe-especialidad/
├── index.html                  # Portada (home)
├── 404.html                    # Página de error
├── robots.txt                  # Permite Mediapartners-Google y Googlebot; sitemap
├── ads.txt                     # Plantilla COMENTADA (sin pub-ID activo)
├── sitemap.xml                 # Mapa del sitio
├── README.md / INSTALACION.md / CONFIGURACION.md / ADSENSE.md / ADSENSE-CHECKLIST.md
│
├── metodos/index.html          # Categoría: Métodos
├── guias/index.html            # Categoría: Guías
├── comparativas/index.html     # Categoría: Comparativas
├── recetas/index.html          # Categoría: Recetas
├── buscar/index.html           # Buscador interno
├── archivo/index.html          # Índice cronológico de los 14 artículos
│
├── articulos/{slug}/index.html # 14 artículos (900–1500 palabras, FAQ, relacionados)
│
├── nosotros/index.html         # Presentación del proyecto
├── contacto/index.html         # Formulario (FormSubmit) + fallback mailto
├── privacidad/index.html       # Política de privacidad (con divulgaciones Google)
├── cookies/index.html          # Política de cookies + gestión de preferencias
├── terminos/index.html         # Términos de uso
├── aviso-legal/index.html      # Identificación del responsable
├── derechos-de-autor/index.html# Protección del contenido y avisos de infracción
│
└── assets/
    ├── css/style.css           # Estilos del sitio
    ├── js/main.js              # Navegación móvil, validación de formularios, etc.
    ├── js/search.js            # Lógica del buscador
    ├── js/consent.js           # Banner/modal de cookies y API de consentimiento
    ├── img/                    # hero.jpg, fotos de métodos/equipos, favicon.svg
    └── data/search.json        # Índice de búsqueda [{t,u,d,c}]
```

## Dónde está cada cosa

| Necesito... | Archivo(s) |
|---|---|
| Editar el diseño general | `assets/css/style.css` |
| Editar header/nav/footer | Cada `index.html` (la plantilla es idéntica; hay que editarla en todos) |
| Añadir un artículo | `articulos/{slug}/index.html` + entrada en `archivo/index.html` + `assets/data/search.json` + `sitemap.xml` |
| Cambiar textos legales | Las páginas de `/privacidad/`, `/cookies/`, `/terminos/`, `/aviso-legal/`, `/derechos-de-autor/` |
| Configurar dominio, titular, email, AdSense | Ver `CONFIGURACION.md` (tabla de marcadores `[SUSTITUIR: ...]`) |
| Publicar el sitio | Ver `INSTALACION.md` (Netlify, Vercel, GitHub Pages, cPanel) |
| Solicitar aprobación de AdSense | Ver `ADSENSE.md` y `ADSENSE-CHECKLIST.md` |

## Marcadores pendientes

El sitio usa marcadores visibles `[SUSTITUIR: dominio]`, `[SUSTITUIR: nombre del titular]`, `[SUSTITUIR: email de contacto]` y `[SUSTITUIR: ca-pub-ID]`. **No se inventó ningún dato real.** Antes de publicar hay que sustituirlos siguiendo `CONFIGURACION.md`.
