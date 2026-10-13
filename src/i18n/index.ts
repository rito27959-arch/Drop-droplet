import { fr, type Textes } from './fr';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import { zh } from './zh';
import { ar } from './ar';
import { hi } from './hi';

export type Langue = 'fr' | 'en' | 'de' | 'es' | 'it' | 'pt' | 'ru' | 'zh' | 'ar' | 'hi';

/** Le français est servi à la racine ; les autres sous /en/, /de/… */
export const LANGUE_PAR_DEFAUT: Langue = 'fr';

export const LANGUES: { code: Langue; nom: string; rtl?: boolean }[] = [
  { code: 'fr', nom: 'Français' },
  { code: 'en', nom: 'English' },
  { code: 'es', nom: 'Español' },
  { code: 'pt', nom: 'Português' },
  { code: 'de', nom: 'Deutsch' },
  { code: 'it', nom: 'Italiano' },
  { code: 'ru', nom: 'Русский' },
  { code: 'ar', nom: 'العربية', rtl: true },
  { code: 'hi', nom: 'हिन्दी' },
  { code: 'zh', nom: '中文' },
];

const DICTIONNAIRES: Record<Langue, Textes> = { fr, en, de, es, it, pt, ru, zh, ar, hi };

/** La typographie française : une espace fine insécable avant « ? ! ; : »
 *  et à l'intérieur des guillemets, pour qu'un signe ne parte jamais seul
 *  à la ligne suivante. Appliquée une fois, à tout le dictionnaire. */
function typographier(t: Textes): Textes {
  const f = (s: string) =>
    s.replace(/ ([?!;:])/g, '\u202f$1').replace(/« /g, '«\u202f').replace(/ »/g, '\u202f»');
  return Object.fromEntries(Object.entries(t).map(([k, v]) => [k, typeof v === 'string' ? f(v) : v])) as Textes;
}
const FR = typographier(fr);

export function textes(langue: Langue): Textes {
  return langue === 'fr' ? FR : DICTIONNAIRES[langue];
}

/** Le préfixe du site (« /droplet-site » sur GitHub Pages, vide ailleurs). */
export const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export function chemin(langue: Langue, page = ''): string {
  const racine = langue === LANGUE_PAR_DEFAUT ? `${BASE}/` : `${BASE}/${langue}/`;
  return page ? `${racine}${page}/` : racine;
}

export function estRtl(langue: Langue): boolean {
  return LANGUES.find((l) => l.code === langue)?.rtl === true;
}
