import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  source: "./src",
  site: 'https://peterdotdev.github.io',
  base: 'minimalist-portfolio-json',
  integrations: [react()]
});