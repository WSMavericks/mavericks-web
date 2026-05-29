// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wsmavericks.github.io',
  base: '/mavericks-web/',
  vite: {
    plugins: [tailwindcss()],
  },
});