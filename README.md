# drop.dropletmesh.app

Le site de **Droplet Drop** — envoyer ses fichiers aux appareils autour de
soi, directement sur le réseau local. Même système, même langage et même
rigueur que [dropletmesh.app](https://dropletmesh.app) : Astro, dix langues,
aucune dépendance côté navigateur, aucun cookie, aucune mesure d'audience.

## Pages

| Chemin | Contenu |
|---|---|
| `/`, `/en/`, `/ar/`… | L'accueil, dans chacune des dix langues |
| `/support/` | L'assistance (10 langues) |
| `/security/` | La sécurité (10 langues) |
| `/privacy/` | La confidentialité (français et anglais seulement : texte juridique) |
| `/rejoindre/#…` | La page des invitations Group Drop (une page pour toutes les langues ; l'invitation reste après « # » et n'est jamais envoyée au serveur) |
| `/android`, `/windows`, `/mac`, `/linux` | Liens courts vers les fichiers de la publication `drop-latest` |

## Où changer quoi

- **Liens de téléchargement, éditeur, contact** : `src/config.ts`.
- **Textes de l'accueil** : `src/i18n/fr.ts` (référence), puis les neuf autres
  langues, qui doivent avoir exactement les mêmes clés.
- **Documents** : `src/docs/fr.ts` (référence), `en.ts`, et les huit
  traductions de la sécurité et de l'assistance.

Règle : le site ne dit rien que l'application ne fasse vraiment (vérifié
dans le dépôt `droplet`, branche `droplet-drop`). Une plateforme n'a de
bouton que si son fichier est publié.

## Développer

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # dist/
```

Publié par Vercel à chaque push sur `main`.
