// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://www.bancodepruebajuan.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-CO" },
      },
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
