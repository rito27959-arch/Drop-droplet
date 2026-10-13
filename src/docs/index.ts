// Les documents dans une langue donnée.
//
// ⚠️ LA CONFIDENTIALITÉ N'EXISTE QU'EN FRANÇAIS ET EN ANGLAIS, DÉLIBÉRÉMENT —
// la même règle que sur dropletmesh.app. Un texte juridique engage : une
// tournure approximative en arabe ou en chinois créerait une obligation que
// personne n'a voulue. Les autres langues reçoivent la version anglaise, et
// la page le dit en une ligne, dans la langue du lecteur.
// La sécurité et l'assistance, elles, sont traduites partout.
import type { Langue } from '../i18n';
import type { CleDoc, Docs, PageDoc } from './types';
import { fr } from './fr';
import { en } from './en';
import { traduits } from './traduits';

export const CLES_DOCS: CleDoc[] = ['support', 'security', 'privacy'];

/** Le document, et la langue dans laquelle il est réellement écrit. */
export function doc(langue: Langue, cle: CleDoc): { page: PageDoc; ecritEn: Langue } {
  if (langue === 'fr') return { page: fr[cle], ecritEn: 'fr' };
  if (langue === 'en') return { page: en[cle], ecritEn: 'en' };
  if (cle === 'security' || cle === 'support') return { page: traduits[langue][cle], ecritEn: langue };
  return { page: en[cle], ecritEn: 'en' };
}

export type { Docs };
