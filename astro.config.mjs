// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gp2porcia.it",
  integrations: [
    icon(),
    sitemap()
  ],
  server: {
    port: 3000
  },
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      name: "Cabin Condensed",
      cssVariable: "--font-cabin-condensed",
      provider: fontProviders.fontsource(),
      weights: [600],
      styles: ["normal"]
    },
    {
      name: "Urbanist",
      cssVariable: "--font-urbanist",
      provider: fontProviders.fontsource(),
      weights: [600, 800],
      subsets: ["latin", "latin-ext"],
      styles: ["normal"]
    },
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ["italic"]
    },
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 700],
      styles: ["normal"]
    }
  ]
});
