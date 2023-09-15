import { vitePreprocess } from '@astrojs/svelte';

/** @type {import('@astrojs/svelte').Config} */
const config = {
  preprocess: vitePreprocess(),
};

export default config;
