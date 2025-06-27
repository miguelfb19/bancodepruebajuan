// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [
    react(), 
    sitemap({
      customPages: [
        'https://bancodepruebajuan.com/',
        'https://bancodepruebajuan.com/about',
        'https://bancodepruebajuan.com/contact'
      ],
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO'
        }
      }
    })
  ],
  site: 'https://bancodepruebajuan.com',
});