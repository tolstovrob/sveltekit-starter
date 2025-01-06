import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $entities: './src/entities',
      $features: './src/features',
      $routes: './src/routes',
      $services: './src/services',
      $utils: './src/utils',
      $components: './src/components',
    },
  },
};

export default config;
