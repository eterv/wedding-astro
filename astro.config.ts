// import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  //adapter: cloudflare(),
  integrations: [svelte(), tailwind()],
  //output: 'server',
  vite: {
    server: {
      port: 2221,
      hmr: {
        clientPort: 2221,
      },
    },
  },
});
