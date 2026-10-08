import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://vortice.lumux.demo',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  redirects: {
    '/contacto': '/contact',
    '/estudio': '/studio',
    '/servicios': '/services',
    '/trabajo': '/work',
    '/trabajo/aurora-audio': '/work/aurora-audio',
    '/trabajo/hyper-mobility': '/work/hyper-mobility',
    '/trabajo/kroma-gin': '/work/kroma-gin',
    '/trabajo/sol-studio': '/work/sol-studio'
  }
});
