// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { cpSync, mkdirSync, readdirSync } from "fs";

function copyReportPDFs() {
  return {
    name: "copy-report-pdfs",
    hooks: {
      "astro:build:setup": copyPDFs,
      "astro:server:start": copyPDFs,
    },
  };
}

function copyPDFs() {
  mkdirSync("public/content/uploads", { recursive: true });
  const src = "src/content/uploads";
  const dest = "public/content/uploads";
  const files = readdirSync(src).filter(f => f.endsWith(".pdf"));
  for (const f of files) cpSync(`${src}/${f}`, `${dest}/${f}`);
}

export default defineConfig({
  // site: "https://gp2porcia.it",
  site: "https://giovanni-paolo-ii.github.io",
  // base: '/gp2/',
  // trailingSlash: 'always',
  integrations: [
    icon(),
    sitemap(),
    copyReportPDFs()
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
