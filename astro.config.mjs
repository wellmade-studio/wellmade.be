// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/signatures'),
    }),
  ],
  output: 'static',
  site: 'https://wellmade.be',
  vite: {
    server: {
      host: true,
    },
  },
});
