// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

const site = new URL(process.env.SITE_URL || 'https://postesados.vercel.app');
if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash || site.username || site.password) {
  throw new Error('SITE_URL must be an HTTPS origin without a path, query or credentials.');
}

export default defineConfig({
  site: site.origin,
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'never',
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'drdrilling.com.do', pathname: '/storage/**' },
      { protocol: 'https', hostname: 'www.tenaxconstruction.com.do', pathname: '/images/**' }
    ]
  },
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(new URL(page).pathname) })],
  vite: {
    define: { 'import.meta.env.SITE_NOINDEX': JSON.stringify(process.env.VERCEL_ENV === 'preview') },
    plugins: [tailwindcss()]
  }
});