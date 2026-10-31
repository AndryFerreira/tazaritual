# Configuración — TazaRitual

> **ESTADO (31 oct 2026): datos reales ya aplicados** — dominio `www.tazaritual.com`, titular `TazaRitual`, email `soporte@tazaritual.com`. Los tres marcadores (`dominio`, `nombre del titular`, `email de contacto`) ya fueron sustituidos en todo el sitio. Solo queda pendiente `[SUSTITUIR: ca-pub-ID]`, que se completa **después de la aprobación de AdSense** (ver `ADSENSE.md`).

El sitio usaba **marcadores visibles** en lugar de datos reales. **Está prohibido inventar** un dominio, un nombre de titular, un email o un ID de AdSense: hay que sustituir cada marcador por el valor real del proyecto.

Sustituye el marcador **completo**, incluidos los corchetes, por ejemplo: `[SUSTITUIR: dominio]` → `www.tudominio.com` (sin `https://` ni barra final en el caso del dominio).

## Tabla de marcadores

| Marcador | Qué valor poner | Dónde aparece |
|---|---|---|
| `[SUSTITUIR: dominio]` | Tu dominio propio, sin protocolo ni barra final. Ejemplo: `www.tudominio.com` | **Páginas D (este lote):** `nosotros/`, `contacto/`, `privacidad/`, `cookies/`, `terminos/`, `aviso-legal/`, `derechos-de-autor/`, `archivo/` (en cada `index.html`: etiqueta `canonical`, `og:url`, `og:image` y URLs del JSON-LD). **Resto del sitio (lotes A/B/C):** `index.html`, `404.html`, `metodos/`, `guias/`, `comparativas/`, `recetas/`, `buscar/`, los 14 artículos en `articulos/{slug}/`, `robots.txt` (línea `Sitemap:`) y `sitemap.xml` (todas las URLs). |
| `[SUSTITUIR: nombre del titular]` | Nombre de la persona física o jurídica titular del sitio. Ejemplo: `María Pérez` o `TazaRitual S.R.L.` | **Páginas D:** línea `© 2026 …` del footer en las 8 páginas + sección "Identificación del responsable" en `aviso-legal/index.html`. **Resto del sitio:** footer de todas las páginas (lote A). |
| `[SUSTITUIR: email de contacto]` | Email público donde recibirás los mensajes del formulario. Ejemplo: `hola@tudominio.com` | **Páginas D:** `contacto/index.html` (atributo `action` del formulario hacia FormSubmit, enlace `mailto:` y texto visible "o escríbenos a…"), `privacidad/index.html` (secciones "Tus derechos" y "Contacto"), `derechos-de-autor/index.html` (procedimiento de aviso de infracción y sección "Contacto"). |
| `[SUSTITUIR: ca-pub-ID]` | Tu ID de editor de Google AdSense, con formato `pub-XXXXXXXXXXXXXXXX`. **Solo después de la aprobación** (ver `ADSENSE.md`). Nunca inventes uno. | `ads.txt` (línea comentada que hay que descomentar y completar) y las instrucciones de `ADSENSE.md`. No aparece en ninguna página HTML publicada. |

## Cómo hacer la sustitución

1. Abre cada archivo listado y busca el texto `SUSTITUIR` (cualquier editor lo encuentra con Ctrl/Cmd+F).
2. Reemplaza el marcador completo por tu valor real.
3. Verifica que no quede ningún `SUSTITUIR` en el código: busca de nuevo en todos los archivos antes de publicar.
4. En el caso del **dominio**, usa siempre la misma forma en todos los archivos (con o sin `www`, pero consistente) y asegúrate de que coincide con el dominio donde publiques el sitio y con el que registres en AdSense.

## Nota sobre FormSubmit (formulario de contacto)

El formulario de `contacto/index.html` envía los mensajes a través de [FormSubmit](https://formsubmit.co). **La primera vez** que alguien envíe el formulario con tu email configurado, FormSubmit enviará un **email de activación** a esa dirección: debes abrirlo y hacer clic en el enlace de confirmación. Hasta que no completes esa activación, **no recibirás los mensajes**. Haz una prueba de envío tú mismo justo después de publicar para activar el servicio.

## Nota sobre CMP certificada (EEE, Reino Unido y Suiza)

El sistema de consentimiento incluido en el sitio (banner + `assets/js/consent.js`) cubre las necesidades de Latinoamérica: las cookies opcionales solo se activan con el consentimiento del visitante y la elección se guarda en su dispositivo.

Sin embargo, **Google exige** que los anuncios personalizados mostrados a usuarios del **Espacio Económico Europeo, Reino Unido y Suiza** se gestionen con una **plataforma de gestión del consentimiento (CMP) certificada por Google e integrada con el marco IAB TCF** (versión TCF v2.3 obligatoria desde el 1 de marzo de 2026). Sin una CMP válida, Google degrada esos anuncios a "anuncios limitados" (menos ingresos).

**Recomendación:** si tu tráfico incluye de forma relevante esos países, migra el consentimiento a una CMP certificada (puedes usar la propia herramienta "Privacy & messaging" de Google o una CMP certificada de terceros) antes de escalar. Ver `ADSENSE.md` para más detalle.
