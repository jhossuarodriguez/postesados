// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Dominio público del sitio (canonical, sitemap, Open Graph). Cámbialo con SITE_URL.
  site: process.env.SITE_URL || 'https://postesados.vercel.app',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  // El CSS va dentro del HTML: evita una petición que bloquea el primer pintado (mejora el LCP).
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    // En los previews de Vercel las páginas llevan noindex.
    define: { 'import.meta.env.SITE_NOINDEX': JSON.stringify(process.env.VERCEL_ENV === 'preview') },
    plugins: [tailwindcss()]
  }
});
