# Postesados JHP

Sitio corporativo en Astro y Tailwind CSS. Las paginas se generan como HTML
estatico; el formulario de contacto usa una Astro Action en el servidor.

## Desarrollo

Requisitos: Node.js 24 y pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verificacion

```sh
pnpm verify
pnpm audit
```

`verify` ejecuta el chequeo de tipos Astro/TypeScript y genera el build en `dist`.

Para inspeccion manual: `pnpm build` seguido de `pnpm preview`. Astro puede iniciar
el preview en segundo plano en entornos de agentes; `pnpm astro preview stop`
detiene ese proceso.

## Publicacion y SEO

- Vercel: preset Astro, comando `pnpm build`, directorio de salida `dist`.
- `SITE_URL` define el origen HTTPS canonico en el entorno de build. Por defecto
  se conserva `https://postesados.vercel.app`; confirmar el dominio definitivo.
- Canonicals, Open Graph y entidades JSON-LD se derivan de ese mismo origen.
- Vercel Preview (`VERCEL_ENV=preview`) genera paginas con `noindex`. Para staging
  en otro proveedor, establecer esa variable o proteger el acceso.
- `@astrojs/sitemap` incluye automaticamente las paginas prerenderizadas y las
  fichas de `src/data/services.ts`; excluye la pagina de error.
- Enviar `/sitemap-index.xml` a Search Console. `/sitemap.xml` redirige al indice
  en Vercel. No se inventan fechas `lastmod`, precios, valoraciones ni certificaciones.
- `vercel.json` normaliza las URLs sin slash final, configura cabeceras de
  seguridad y cache de assets con hash. La documentacion de arquitectura que
  permanece en `public` tiene `X-Robots-Tag: noindex` en Vercel.
- Las URLs desconocidas se sirven con `404.html` y estado 404. No configurar
  un fallback de SPA que responda 200 para cualquier ruta.

## Contenido y contacto

Los datos comerciales estan en `src/data`. Cada servicio incluye descripcion,
aplicaciones, consideraciones tecnicas y enlaces relacionados. Revisar cualquier
nueva afirmacion tecnica o comercial con la empresa antes de publicarla.

El formulario de contacto usa validacion HTML en el navegador y envia los datos a
`actions.send` con `accept: "form"`. La action valida con el esquema de
`src/lib/contact-schema.ts`, que importa Zod desde `astro/zod`, verifica Cloudflare
Turnstile y envia la consulta y su confirmacion mediante Resend. Los errores de
validacion del servidor se muestran junto a cada campo con `isInputError()`.

Configurar `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` y `RESEND_API_KEY` en el
entorno de despliegue. La clave publica de Turnstile se incorpora al HTML durante
el build. El formulario requiere JavaScript para Turnstile y para invocar la
action desde la pagina estatica; el adaptador de Vercel sirve el endpoint.

## Rendimiento

Imagenes responsivas AVIF/WebP procesadas en build, fuentes locales y JavaScript
sin framework de UI. Motion gestiona reveals; Lenis se descarga en idle solo con
puntero preciso y sin reduced motion. Los videos decorativos no se descargan en
movil, con ahorro de datos o reduced motion. Los carruseles son manuales.

Las fotos del grupo empresarial alojadas en sus dominios se optimizan en build
y se sirven desde este sitio; un build sin cache necesita acceso a esos dos
origenes autorizados.

Las puntuaciones Lighthouse locales son mediciones de laboratorio, no una
garantia de posicionamiento. Tras publicar, verificar status/headers, canonical,
robots y sitemap por HTTP; comprobar Search Console, Schema.org Validator y
Core Web Vitals con datos reales.
