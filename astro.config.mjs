import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    imageService: true,
  }),
  integrations: [react(), tailwind({
    configFile: './tailwind.config.cjs'
  }), partytown()]
});