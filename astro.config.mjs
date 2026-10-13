// @ts-check
import { defineConfig } from 'astro/config';

// L'adresse du site : elle sert aux aperçus de partage et aux balises de
// langue pour les moteurs de recherche. Publié par Vercel sur
// https://drop.dropletmesh.app à chaque push sur main.
export default defineConfig({
  site: process.env.SITE_URL || 'https://drop.dropletmesh.app',
  base: process.env.BASE_PATH || '/',
});
