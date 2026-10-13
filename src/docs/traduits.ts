// La sécurité et l'assistance dans les huit autres langues.
import type { Langue } from '../i18n';
import type { Docs } from './types';
import { de } from './de';
import { es } from './es';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import { zh } from './zh';
import { ar } from './ar';
import { hi } from './hi';

type Traduit = Pick<Docs, 'security' | 'support'>;
export const traduits: Record<Exclude<Langue, 'fr' | 'en'>, Traduit> = { de, es, it, pt, ru, zh, ar, hi };
