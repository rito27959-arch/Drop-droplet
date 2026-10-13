// ============================================================================
// LES RÉGLAGES DU SITE — à modifier ici, nulle part ailleurs.
// ============================================================================

/** Où la CI publie les applications compilées : la publication
 *  « drop-latest » du dépôt `droplet` (branche `droplet-drop`, tâche
 *  `publier` de `.github/workflows/droplet-drop.yml`). Elle est marquée
 *  « préversion », pour ne jamais devenir la « dernière version » de
 *  Droplet, la messagerie, dont le site principal télécharge l'APK. */
const PUBLICATION = 'https://github.com/rito27959-arch/droplet/releases/download/drop-latest';

/** Une plateforme, son fichier, et ce qu'il faut savoir avant de l'ouvrir. */
export type Plateforme = 'android' | 'windows' | 'macos' | 'linux' | 'ios';

/** Les liens de téléchargement. `null` : pas encore disponible — le site
 *  l'écrit en clair, sans bouton qui ne mènerait nulle part.
 *  (Les mêmes liens existent en court dans `vercel.json` : /android,
 *  /windows, /mac, /linux — pratiques à dicter ou à afficher.) */
export const TELECHARGEMENTS: Record<Plateforme, string | null> = {
  android: `${PUBLICATION}/DropletDrop-android-arm64.apk`,
  windows: `${PUBLICATION}/DropletDrop-windows-x64.zip`,
  macos: `${PUBLICATION}/DropletDrop-macos.zip`,
  linux: `${PUBLICATION}/DropletDrop-linux-x64.tar.gz`,
  // L'App Store exige une application signée et relue par Apple : tant
  // qu'elle n'y est pas, l'iPhone n'a pas de lien.
  ios: null,
};

/** Toutes les versions (APK 32 bits, x86_64…) et l'historique des builds. */
export const TOUTES_LES_VERSIONS = 'https://github.com/rito27959-arch/droplet/releases/tag/drop-latest';

/** Le site de Droplet, la messagerie : la même famille. */
export const SITE_DROPLET = 'https://dropletmesh.app';

/** Le nom sous lequel Droplet Drop est publié (documents, pied de page).
 *  ⚠️ Le même que sur dropletmesh.app : si une société en est juridiquement
 *  responsable, mettez son nom exact ici. */
export const EDITEUR = 'Droplet';

/** L'adresse de contact des documents et de l'assistance. */
export const EMAIL_CONTACT = 'contact@dropletmesh.app';

/** L'adresse publique du site, telle qu'affichée dans les documents. */
export const SITE_AFFICHE = 'drop.dropletmesh.app';
