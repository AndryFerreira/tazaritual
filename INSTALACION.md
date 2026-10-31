# Instalación — TazaRitual

Guía paso a paso para publicar este sitio estático. Como no hay proceso de build, publicar consiste en **subir los archivos tal cual** a un hosting que sirva archivos estáticos.

> **Antes de publicar:** sustituye los marcadores `[SUSTITUIR: ...]` siguiendo `CONFIGURACION.md`. Sin el dominio real, los canonical y el sitemap apuntarán a un marcador.

## Opción 1: Netlify

1. Entra a [netlify.com](https://www.netlify.com) y crea una cuenta (puedes usar tu cuenta de Google, GitHub o GitLab).
2. **Vía web (más rápido):** en el panel, arrastra la carpeta `cafe-especialidad` a la zona de "Deploy" (o usa "Add new site" → "Deploy manually"). Netlify la publica al instante y te asigna una URL temporal (`https://tu-sitio.netlify.app`).
3. **Vía Git (recomendado):** sube la carpeta a un repositorio de GitHub/GitLab/Bitbucket y en Netlify elige "Add new site" → "Import an existing project". No hay comando de build ni directorio de publicación: deja el campo de build vacío y la carpeta raíz como directorio de publicación.
4. **Dominio propio:** Site settings → Domain management → Add a custom domain. Escribe tu dominio (ej. `www.tudominio.com`) y confirma. Netlify te mostrará los registros DNS que debes crear en tu registrador (un registro `A` o `CNAME`).
5. **HTTPS:** Netlify emite automáticamente un certificado SSL gratuito (Let's Encrypt) para tu dominio en cuanto el DNS apunta a sus servidores. No hay que hacer nada más.

## Opción 2: Vercel

1. Entra a [vercel.com](https://vercel.com) y crea una cuenta.
2. Sube la carpeta a un repositorio de GitHub/GitLab/Bitbucket (Vercel trabaja con Git; también puedes usar su CLI: `vercel` dentro de la carpeta).
3. En el panel: "Add New" → "Project" → importa el repositorio. En "Build and Output Settings" deja todo por defecto (es un sitio estático; no necesita build).
4. Vercel te asigna una URL temporal (`https://tu-sitio.vercel.app`).
5. **Dominio propio:** en el proyecto, Settings → Domains → añade tu dominio. Vercel te indicará el registro `A` (para dominio raíz) o `CNAME` (para `www`) que debes crear en tu registrador.
6. **HTTPS:** automático y gratuito en cuanto el dominio queda verificado.

## Opción 3: GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de la carpeta `cafe-especialidad` a la rama principal (`main`).
2. En el repositorio: Settings → Pages → en "Build and deployment", Source: **Deploy from a branch**; Branch: `main` y carpeta `/ (root)`.
3. GitHub publicará el sitio en `https://tu-usuario.github.io/nombre-repo/`.
4. **Dominio propio:** en la misma sección de Pages, escribe tu dominio en "Custom domain" y guarda. Esto crea automáticamente el archivo `CNAME` en el repositorio.
5. En tu registrador de dominio crea los registros DNS que GitHub indica (registros `A` apuntando a las IPs de GitHub Pages para el dominio raíz, o un `CNAME` a `tu-usuario.github.io` para el subdominio `www`).
6. **HTTPS:** una vez verificado el dominio, activa "Enforce HTTPS" en la sección de Pages (el certificado es gratuito y automático).

## Opción 4: cPanel (hosting tradicional)

1. Entra al cPanel de tu hosting y abre el **Administrador de archivos** (o conéctate por FTP con FileZilla).
2. Ve a la carpeta `public_html` (el directorio raíz público de tu dominio).
3. Sube el contenido de la carpeta `cafe-especialidad` (los archivos y subcarpetas, no la carpeta en sí) dentro de `public_html`. Comprueba que `index.html` quede directamente en `public_html/index.html`.
4. **Dominio propio:** si el hosting se contrató con tu dominio, no hay nada que configurar: `public_html` ya responde a tu dominio. Si es un dominio adicional, créalo en cPanel → "Dominios adicionales" y sube los archivos a la carpeta que se genere.
5. **HTTPS en cPanel:** ve a cPanel → "SSL/TLS Status" (o "Seguridad" → "SSL") y activa **AutoSSL** para tu dominio, o instala el certificado gratuito de Let's Encrypt si tu proveedor lo ofrece. Verifica que el sitio cargue con `https://`.
6. Opcional pero recomendado: fuerza la redirección de HTTP a HTTPS (en cPanel → "Dominios" → activa "Force HTTPS Redirect" para el dominio).

## Nota sobre propagación DNS

Después de crear o modificar registros DNS (al conectar un dominio propio en cualquiera de las opciones), los cambios pueden tardar **de unos minutos a 48 horas** en propagarse por todo Internet. Durante ese tiempo es normal que el dominio funcione de forma intermitente o muestre el sitio antiguo. Puedes comprobar el estado con herramientas como `https://www.whatsmydns.net`.

## Verificación final tras publicar

- [ ] El sitio carga en `https://tudominio.com` (con el candado de HTTPS).
- [ ] `https://tudominio.com/robots.txt` es accesible y permite el rastreo.
- [ ] `https://tudominio.com/sitemap.xml` es accesible.
- [ ] No queda ningún marcador `[SUSTITUIR: ...]` visible (busca el texto "SUSTITUIR" en el código publicado).
- [ ] El formulario de contacto funciona (ver nota de activación de FormSubmit en `CONFIGURACION.md`).
