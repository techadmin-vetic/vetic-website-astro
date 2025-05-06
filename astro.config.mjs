import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  trailingSlash: "never",

  vite: {
    preview: {
      allowedHosts: ["vetic.in"],
    },
  },

  build: {
    assets: "_astrov2",
  },
  output: 'server',
  adapter: vercel(),
  adapter: netlify(),
  integrations: [
    alpinejs(),
    tailwind(),
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes("/home-page"),
    }),
  ],

  site: "https://vetic.in",
});