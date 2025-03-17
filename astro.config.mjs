// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';


import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { include: ['src/polyfill.js'] },
  },

  integrations: [icon(), react()],
  prefetch: true,
  output: "server",
  adapter: cloudflare()
});