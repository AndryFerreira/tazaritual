# Checklist previa a solicitar la aprobación de AdSense — TazaRitual

Verificación basada en la investigación documental de los requisitos oficiales de Google (fecha de referencia: 27 de octubre de 2026; notas completas en `~/workspace/research_notes/adsense-aprobacion-oct2026/`).

Marca cada casilla solo cuando lo hayas comprobado de verdad. **Ninguna checklist externa puede garantizar la aprobación**: Google no publica los detalles operativos de su revisión, pero estos son los requisitos y recomendaciones documentados oficialmente.

## 1. Elegibilidad de la cuenta

- [ ] El titular de la cuenta tiene **18 años o más** (o la cuenta está a nombre de un padre/tutor).
- [ ] El **país de residencia** del titular está en la lista oficial de países admitidos por AdSense (República Dominicana incluida).
- [ ] Tienes **acceso al código HTML** del sitio y puedes colocar código entre `<head>` y `</head>`.
- [ ] El idioma principal del sitio (**español latinoamericano**) está en la lista oficial de idiomas admitidos.
- [ ] Es tu **única cuenta de AdSense** (una sola cuenta por editor; las cuentas terminadas no pueden reabrirse).

## 2. Contenido original y suficiente

- [ ] Todo el contenido es **original y redactado por el equipo** (nada copiado ni republicado sin valor añadido).
- [ ] Cada artículo tiene **contenido sustancial**: texto completo en oraciones y párrafos, no solo titulares o plantillas vacías.
- [ ] El sitio está **completo y lanzado**: sin páginas "en construcción", sin enlaces rotos, sin secciones vacías.
- [ ] No hay **contenido replicado** de otros sitios sin comentario, curaduría o valor añadido propio.
- [ ] El contenido es **útil y centrado en las personas** (people-first): responde a necesidades reales del lector, con experiencia de primera mano.
- [ ] Los datos técnicos del contenido (ratios, tiempos, temperaturas) están **verificados manualmente** antes de publicar.

## 3. Sin contenido prohibido ni restringido

- [ ] El sitio **no contiene** ninguna de las categorías prohibidas por las Google Publisher Policies: contenido ilegal, infracción de copyright, odio/discriminación, violencia, contenido engañoso, contenido sexual explícito, etc.
- [ ] No hay **contenido restringido** que limite la demanda publicitaria (armas, tabaco, drogas recreativas, alcohol, apuestas, contenido sexualmente sugestivo, etc.). El café es un nicho limpio: mantenerlo así.
- [ ] No hay **spam**: nada de contenido generado a escala para manipular rankings, scraping, keyword stuffing, redirecciones engañosas ni texto oculto.
- [ ] No se **tergiversa la identidad** del editor: el sitio dice claramente quién es (página Nosotros + Aviso legal).

## 4. Privacidad y consentimiento

- [ ] Existe una **política de privacidad** accesible y enlazada desde el footer (`/privacidad/`).
- [ ] La política incluye las **divulgaciones oficiales de Google**: proveedores externos incluido Google usan cookies según visitas anteriores; las cookies publicitarias de Google permiten a Google y sus socios mostrar anuncios personalizados; terceros pueden colocar y leer cookies o usar web beacons/IP por la publicación de anuncios.
- [ ] La política incluye el enlace destacado a **"Cómo usa Google los datos cuando utilizas los sitios o apps de nuestros partners"** (https://policies.google.com/technologies/partner-sites).
- [ ] La política informa de la **exclusión de publicidad personalizada** en la Configuración de anuncios de Google (https://adssettings.google.com).
- [ ] Hay un **aviso de cookies visible** (banner) y una página de **política de cookies** (`/cookies/`).
- [ ] Las cookies opcionales (analítica, publicidad) **solo se activan tras el consentimiento** del visitante, y la elección se puede cambiar en cualquier momento (botón "Preferencias de cookies").
- [ ] Si hay tráfico relevante del **EEE, Reino Unido o Suiza**: CMP certificada por Google integrada con IAB TCF (v2.3+) para anuncios personalizados. Sin ella, Google degrada a anuncios limitados.

## 5. Requisitos técnicos

- [ ] El sitio está **publicado y en vivo** con **dominio propio** (no la URL temporal del hosting).
- [ ] **HTTPS** con certificado válido de una autoridad reconocida (no autofirmado) y redirección de HTTP a HTTPS.
- [ ] El sitio es **público, sin login ni contraseña** (durante la revisión no debe haber nada tras un inicio de sesión).
- [ ] `robots.txt` **permite** a `Mediapartners-Google` y a `Googlebot` (nada del sitio público bloqueado) e incluye la línea del `Sitemap:`.
- [ ] El servidor no bloquea al rastreador: sin geobloqueo agresivo, sin WAF que lo frene, sin redirecciones múltiples ni errores 404 en páginas principales.
- [ ] `ads.txt` accesible en la raíz (plantilla comentada de momento; se activa tras la aprobación — ver `ADSENSE.md`).
- [ ] El sitio se ve correctamente en **distintos navegadores y en móvil** (diseño responsive, sin errores visuales graves).
- [ ] **Verificación de propiedad lista**: método elegido (fragmento de código en `<head>`, meta tag, fragmento en `ads.txt` o Search Console) preparado para cuando AdSense lo pida.

## 6. Experiencia de usuario y navegación

- [ ] **Navegación clara**: menú principal funcional, categorías, buscador interno y archivo de artículos.
- [ ] **Breadcrumbs** visibles en artículos y categorías.
- [ ] **Sin popups invasivos** ni intersticiales que tapen el contenido o dificulten la navegación.
- [ ] **Sin anuncios falsos ni simulados**: los placeholders son invisibles (`display:none`) y no ocupan espacio.
- [ ] Las páginas legales están enlazadas en el footer: privacidad, cookies, términos, aviso legal, derechos de autor.
- [ ] Existe página **Nosotros** (quiénes somos) y página **Contacto** funcional.

## 7. Proceso de solicitud

- [ ] Cuenta de AdSense creada con los datos correctos (tipo Individual/Organización, nombre exacto, dirección postal, teléfono válido).
- [ ] Sitio añadido en la sección **Sitios** de la cuenta y propiedad verificada.
- [ ] **Solicitada la revisión** ("Request review"). A partir de aquí: no retirar el código ni reenviar el sitio mientras el estado sea "Getting ready" (la revisión tarda días y puede llevar de 2 a 4 semanas).
- [ ] **Verificación de identidad** completada dentro del plazo (documento oficial con foto; posible video-selfie).
- [ ] Si hay rechazo: corregir el motivo indicado por Google y volver a solicitar revisión (**no hay período de espera obligatorio publicado**).

## Mitos que NO aplican (no te frenes por ellos)

Según la documentación oficial, **Google no publica** ninguno de estos requisitos:

- Número mínimo de artículos (no hay cifra oficial de 20/30/50).
- Mínimo de palabras por artículo (solo se exige texto suficiente, completo y original).
- Antigüedad mínima del dominio (el plazo de "2 a 4 semanas" es de la revisión, no del dominio).
- Mínimo de visitas diarias o de tráfico orgánico.
- Páginas indexadas, backlinks o redes sociales activas como condición de aprobación.
- Dominio `.com` obligatorio (lo exigible es la propiedad/control del sitio).
