# Google AdSense — TazaRitual

Guía para integrar Google AdSense en este sitio **en el orden correcto y sin errores**. Lee también `ADSENSE-CHECKLIST.md` (verificación previa a solicitar la aprobación) y `CONFIGURACION.md` (sustitución de marcadores).

> **Regla de oro: NUNCA inventes un `ca-pub-ID`.** El ID de editor solo existe cuando Google aprueba tu cuenta. Un ID falso en `ads.txt` o en el código invalida la verificación y puede causar problemas con tu cuenta.

## Dónde están los placeholders de anuncios

Los espacios para anuncios existen como `div` invisibles (`display:none` por defecto; no ocupan espacio ni simulan anuncios). Cada uno lleva un comentario que indica dónde pegar el código real:

```html
<!-- PEGAR CÓDIGO ADSENSE AQUÍ — slot: header | Ver ADSENSE.md. No pegar sin cuenta aprobada. -->
<div class="ad-slot" data-ad-slot="header" aria-hidden="true"></div>
```

| Slot (`data-ad-slot`) | Ubicación prevista |
|---|---|
| `header` | Debajo del header, en la home y en las páginas de categoría (`metodos/`, `guias/`, `comparativas/`, `recetas/`) |
| `in-article` | A mitad de cada artículo, entre secciones del contenido |
| `sidebar` | Lateral en desktop, si el layout de la página lo incluye |

Para previsualizar los espacios durante el desarrollo, añade la clase `ads-preview` al `<body>`: los slots muestran una caja punteada etiquetada "Espacio publicitario (vista previa)". **Quita esa clase antes de publicar.**

## Orden correcto de integración

Sigue estos pasos **en este orden**. No te saltes ninguno.

### 1. Publica el sitio con dominio propio y HTTPS

- Sube el sitio a tu hosting siguiendo `INSTALACION.md`.
- Conecta tu **dominio propio** (no uses la URL temporal del hosting para AdSense).
- Asegúrate de que el sitio carga en **`https://`** con un certificado válido de una autoridad reconocida (no autofirmado) y con redirección de HTTP a HTTPS.
- Verifica que no quede ningún marcador `[SUSTITUIR: ...]` visible.

### 2. Sustituye todos los marcadores

Sigue la tabla de `CONFIGURACION.md`: dominio, nombre del titular y email de contacto. El sitio debe estar **completo y funcional** (navegación, buscador, formulario, páginas legales) antes de solicitar la revisión.

### 3. Crea tu cuenta de AdSense y solicita la revisión del sitio

1. Entra a [google.com/adsense](https://www.google.com/adsense) y crea tu cuenta (debes tener 18 años o más; si eres menor, el titular debe ser un padre o tutor).
2. Añade tu sitio (la URL con tu dominio propio) en la sección **Sitios**.
3. **Verifica la propiedad** del sitio con uno de los métodos oficiales:
   - pegar el fragmento de código de AdSense entre `<head>` y `</head>` de tus páginas, **o**
   - añadir el fragmento en `ads.txt`, **o**
   - añadir la metaetiqueta `<meta name="google-adsense-account" content="ca-pub-...">`, **o**
   - verificar la propiedad en Search Console.
4. Pulsa **Solicitar revisión** y espera. Google revisa **todo el sitio** (no solo la página principal): normalmente tarda unos días, pero puede llevar **de 2 a 4 semanas**. No retires el código ni reenvíes el sitio mientras el estado sea "Getting ready".
5. Completa la **verificación de identidad** (documento oficial con foto; posible video-selfie) dentro de los plazos que Google indique, y la información de pagos.

### 4. SOLO tras la aprobación: pega el código real

Cuando tu cuenta y tu sitio estén **aprobados** ("Ready"):

1. En tu cuenta de AdSense, genera los bloques de anuncios (o activa los anuncios automáticos).
2. Pega el código real **exactamente donde indican los comentarios** `PEGAR CÓDIGO ADSENSE AQUÍ` de cada slot (`header`, `in-article`, `sidebar`).
3. Los scripts de publicidad solo deben cargarse **tras el consentimiento** del visitante (el sitio ya incluye el sistema de consentimiento en `assets/js/consent.js`; usa `window.CafeConsent.has('advertising')` para condicionar la inserción).
4. Publica los cambios y verifica que los anuncios se muestran correctamente.

## Cómo activar ads.txt

El archivo `ads.txt` está en la raíz como **plantilla comentada**, sin ningún pub-ID activo:

```
# google.com, [SUSTITUIR: ca-pub-ID], DIRECT, f08c47fec0942fa0
```

Cuando Google apruebe tu cuenta:

1. Copia tu ID de editor real desde tu cuenta de AdSense (formato `pub-XXXXXXXXXXXXXXXX`).
2. **Descomenta** la línea (quita el `#`) y sustituye `[SUSTITUIR: ca-pub-ID]` por tu ID real. Debe quedar exactamente así:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
3. Sube el `ads.txt` actualizado a la raíz del sitio y comprueba que `https://tudominio.com/ads.txt` lo muestra correctamente.

`ads.txt` es **recomendado pero no obligatorio** para la aprobación; sí ayuda a proteger tu inventario y a evitar la alerta "Earnings at risk".

## Nota sobre CMP y TCF para Europa

Si muestras **anuncios personalizados a usuarios del Espacio Económico Europeo, Reino Unido o Suiza**, Google exige una **CMP certificada por Google integrada con IAB TCF** (TCF v2.3 obligatoria desde el 1 de marzo de 2026). Opciones:

- Usar **Privacy & messaging**, la CMP integrada de Google (se configura desde la cuenta de AdSense), o
- usar una **CMP certificada de terceros** de la lista oficial de Google.

Sin una CMP válida con TCF, Google degrada esos anuncios a **anuncios limitados** (menos personalización y menos ingresos). El sistema de consentimiento propio del sitio cubre Latinoamérica; **migra a una CMP certificada antes de escalar tráfico europeo**. Ver la nota ampliada en `CONFIGURACION.md`.

## Prohibiciones que debes conocer (tráfico inválido)

Incumplirlas puede suponer la **suspensión o el cierre** de tu cuenta:

- **Nunca hagas clic en tus propios anuncios** ni uses ningún método para inflar impresiones o clics artificialmente.
- **No pidas a otros** que hagan clic en tus anuncios ni uses frases como "haz clic en los anuncios" o "apóyanos haciendo clic".
- **No uses** programas de pago por clic (paid-to-click), autosurf, intercambios de clics, bots ni herramientas automatizadas.
- Eres responsable del tráfico que llega a tus anuncios aunque lo genere un tercero sin tu conocimiento: evita servicios de tráfico dudosos.

Fuente: investigación documental oficial en `~/workspace/research_notes/adsense-aprobacion-oct2026/` (fecha de referencia: 27 de octubre de 2026).
