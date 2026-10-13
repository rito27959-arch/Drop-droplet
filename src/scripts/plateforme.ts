// LE BON TÉLÉCHARGEMENT, SANS RIEN DEMANDER.
//
// Les boutons « Télécharger » sont écrits pour tout le monde : ils mènent
// à la section des plateformes (#telecharger), et marchent ainsi sans
// JavaScript. Ici, on reconnaît l'appareil du visiteur et chaque bouton
// devient « Télécharger pour Windows », « pour Mac »… avec le vrai lien.
// Sur iPhone, pas encore disponible : le bouton le dit, et reste sur la
// section des plateformes — jamais un lien qui ne mènerait nulle part.
//
// Rien n'est envoyé nulle part : la détection reste dans le navigateur.
import type { Plateforme } from '../config';

export function detecterPlateforme(): Plateforme | null {
  const n = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = navigator.userAgent;
  const indice = (n.userAgentData?.platform ?? '').toLowerCase();
  // L'iPad se présente comme un Mac : il se trahit par son écran tactile.
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/android/i.test(ua) || indice === 'android') return 'android';
  if (/windows/i.test(ua) || indice === 'windows') return 'windows';
  if (/macintosh|mac os x/i.test(ua) || indice === 'macos') return 'macos';
  if (/cros/i.test(ua)) return null;
  if (/linux|x11/i.test(ua) || indice === 'linux') return 'linux';
  return null;
}

export function preparerTelechargements() {
  const p = detecterPlateforme();
  if (!p) return;
  document.querySelectorAll<HTMLAnchorElement>('a[data-telecharger]').forEach((a) => {
    const liens = JSON.parse(a.dataset.liens ?? '{}') as Record<string, string | null>;
    const libelles = JSON.parse(a.dataset.libelles ?? '{}') as Record<string, string>;
    if (!libelles[p]) return;
    const etiquette = a.querySelector('[data-libelle]') ?? a;
    etiquette.textContent = libelles[p];
    const lien = liens[p];
    if (lien) {
      a.href = lien;
      a.removeAttribute('data-bientot');
    } else {
      a.dataset.bientot = '';
    }
  });
  // La carte de la plateforme du visiteur s'allume : « Cet appareil ».
  document.querySelector(`[data-plateforme="${p}"]`)?.classList.add('est-ici');
}
