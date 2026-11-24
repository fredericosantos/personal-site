// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fsx.app',
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Comma-separated, e.g. DEV_ALLOWED_HOSTS=.example.ts.net npm run dev; keeps host names out of git
      allowedHosts: process.env.DEV_ALLOWED_HOSTS?.split(',') ?? []
    }
  }
});