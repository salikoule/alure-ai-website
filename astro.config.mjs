import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alure-ai.netlify.app',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
