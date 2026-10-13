// Les documents en français — le texte de référence.
//
// Rigueur : chaque phrase décrit ce que fait VRAIMENT l'application, telle
// qu'elle est écrite (crates/ et apps/droplet_drop_flutter/ du dépôt
// droplet, branche droplet-drop). Une fonction changée là change ici.
import type { Docs } from './types';

export const fr: Docs = {
  support: {
    titre: 'Assistance Droplet Drop',
    court: 'Assistance',
    chapo: 'Tout pour envoyer votre premier fichier, et ce qu’il faut faire quand quelque chose bloque.',
    description: 'Aide de Droplet Drop : premier envoi, appareil introuvable, Group Drop, reprise, contact.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Bien démarrer',
        resume: 'Installer, envoyer, recevoir.',
        icone: 'etincelle',
        blocs: [
          'Installez Droplet Drop sur les deux appareils, et reliez-les **au même réseau** : la même box Wi‑Fi, ou le partage de connexion de l’un des téléphones. Internet n’est pas nécessaire.',
          {
            liste: [
              '**Pour envoyer** : touchez Envoyer, choisissez des fichiers, des photos ou un dossier, puis l’appareil de destination. Vous pouvez en choisir plusieurs à la fois.',
              '**Pour recevoir** : gardez Droplet Drop ouvert. Une proposition s’affiche avec le nom de l’expéditeur, ce qu’il envoie et le code de son appareil ; acceptez ou refusez.',
              '**Où arrivent les fichiers** : sur ordinateur, dans Téléchargements › Droplet Drop. Sur téléphone, dans le dossier de l’application ; ouvrez-les ou partagez-les depuis l’Historique. Le dossier se change dans Réglages.',
            ],
          },
          'Le nom sous lequel les autres vous voient se change dans Réglages › Nom de l’appareil.',
        ],
      },
      {
        id: 'visible',
        titre: 'Un appareil n’apparaît pas',
        resume: 'Quand les appareils ne se voient pas.',
        icone: 'ondes',
        blocs: [
          'Droplet Drop trouve les appareils voisins tout seul, à condition qu’ils aient l’application **ouverte** et soient sur le **même réseau**. Si l’un d’eux n’apparaît pas :',
          {
            liste: [
              '**Scannez son code** : sur l’appareil qui reçoit, ouvrez Recevoir ; sur celui qui envoie, touchez « Pas dans la liste ? », puis Scanner son code. Le code contient l’adresse et l’identité de l’appareil.',
              '**Ou saisissez son adresse**, affichée sur le même écran Recevoir (par exemple 192.168.1.12:47321).',
              '**Réseaux d’hôtel, d’entreprise ou d’invités** : ils empêchent souvent les appareils de se parler. Le partage de connexion d’un téléphone règle presque toujours le problème.',
              '**Windows** : à la première ouverture, autorisez Droplet Drop sur les réseaux privés. Si vous avez refusé, rétablissez-le dans Pare-feu Windows › Autoriser une application.',
              '**Mac** : si macOS demande d’accepter les connexions entrantes pour Droplet Drop, acceptez.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'Envoyer à toute une salle.',
        icone: 'personnes',
        blocs: [
          'Group Drop distribue un même envoi à de nombreux appareils : une classe, une réunion, un événement.',
          {
            liste: [
              '**Créer** : Group Drop › Créer une distribution. Choisissez les fichiers et la durée de l’invitation (30 minutes, 2 heures ou 8 heures).',
              '**Faire rejoindre** : montrez le code à l’écran, ou partagez le lien d’invitation. Chacun ouvre Group Drop › Rejoindre une distribution, puis scanne le code ou colle le lien.',
              '**Lancer** : quand tout le monde est là, touchez Démarrer. Le tableau suit chaque appareil : progression, débit, temps restant.',
            ],
          },
          'Passé la durée choisie, plus personne ne peut rejoindre ; ceux qui ont commencé terminent. Un appareil qui se déconnecte reprend où il en était dès qu’il revient.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Interruptions et reprise',
        resume: 'Pause, coupure, annulation.',
        icone: 'horloge',
        blocs: [
          'Une coupure ne fait rien perdre. Ce qui est déjà arrivé est gardé, bloc par bloc ; tant que la dernière avancée date de moins de dix minutes, Droplet Drop retente seul. Au-delà, touchez Reprendre quand les deux appareils sont de nouveau sur le même réseau.',
          'Vous pouvez aussi mettre un transfert **en pause**, puis le reprendre. **Annuler** l’arrête pour de bon, et supprime chez le destinataire ce qui avait été reçu.',
          'Les morceaux en attente sont rangés dans un dossier caché, .droplet-drop, à l’intérieur du dossier de réception. Ils disparaissent quand le transfert se termine ou est annulé.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Accepter sans confirmer',
        resume: 'Vos propres appareils de confiance.',
        icone: 'bouclier',
        blocs: [
          'Par défaut, chaque envoi vous est proposé, et une proposition sans réponse expire au bout de deux minutes.',
          'Pour vos propres appareils, cochez « Toujours accepter de cet appareil » au moment d’accepter : leurs envois arriveront ensuite directement. La liste se retrouve dans Réglages › Appareils de confiance, où vous pouvez en retirer à tout moment.',
        ],
      },
      {
        id: 'historique',
        titre: 'L’historique',
        resume: 'Retrouver ce que vous avez envoyé et reçu.',
        icone: 'sauvegarde',
        blocs: [
          'L’historique liste vos envois et réceptions, avec leur appareil et leur date. Il reste sur votre appareil, nulle part ailleurs.',
          'Effacer l’historique ne supprime pas les fichiers reçus : seule la liste disparaît.',
        ],
      },
      {
        id: 'contact',
        titre: 'Nous contacter',
        resume: 'Une question, un problème, une idée.',
        icone: 'message',
        blocs: [
          'Écrivez-nous à {EMAIL}. Dites-nous sur quels appareils (Android, Windows, Mac, Linux) et quel message s’affiche : nous répondons plus vite quand nous pouvons reproduire le problème.',
          'Pour signaler une faille de sécurité, voyez la page [Sécurité](/security/#signaler).',
        ],
      },
    ],
  },

  security: {
    titre: 'La sécurité de Droplet Drop',
    court: 'Sécurité',
    chapo: 'Vos fichiers vont d’un appareil à l’autre, chiffrés, vérifiés, et sans personne au milieu. Voici comment.',
    description: 'Comment Droplet Drop protège vos fichiers : TLS 1.3, identité des appareils, vérification bloc par bloc, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'Le principe',
        blocs: [
          'Droplet Drop n’a **ni compte, ni serveur de transfert**. Les fichiers vont directement de l’appareil qui envoie à celui qui reçoit, sur votre réseau local. Nous ne voyons jamais vos fichiers, ni qui les envoie à qui : ils ne passent pas par nous.',
          '**Aucune cryptographie maison** : Droplet Drop s’appuie sur des bibliothèques éprouvées — rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 et BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'Le chiffrement',
        blocs: [
          'Chaque connexion est chiffrée en **TLS 1.3**, et seulement en TLS 1.3. L’authentification est **mutuelle** : les deux appareils prouvent chacun leur identité.',
          'Chaque appareil crée, à la première ouverture, sa propre clé (ECDSA P-256). Son identité est l’empreinte de cette clé ; le **code de sécurité** affiché dans l’application en est le début, pour la vérifier d’un coup d’œil.',
          'L’appareil qui se connecte **épingle** l’identité attendue, apprise par la découverte sur le réseau ou par le QR code. Un autre appareil qui se ferait passer pour lui est refusé : « Ce n’est pas l’appareil attendu. »',
        ],
      },
      {
        id: 'accord',
        titre: 'Rien n’arrive sans votre accord',
        blocs: [
          'Chaque envoi est d’abord une **proposition** : nom de l’expéditeur, code de son appareil, nombre et taille des fichiers. Sans réponse, elle expire au bout de deux minutes.',
          'Seuls les appareils que vous avez marqués « de confiance » peuvent envoyer sans confirmation, et vous les retirez quand vous voulez.',
          'Un fichier reçu n’est **jamais exécuté**. Si un envoi contient un programme, la proposition le signale.',
        ],
      },
      {
        id: 'verification',
        titre: 'Vérifié jusqu’au dernier octet',
        blocs: [
          'Avant l’envoi, chaque fichier est découpé en blocs de 4 Mio, et chaque bloc reçoit son empreinte **BLAKE3**, comme le fichier entier. Le destinataire vérifie chaque bloc à l’arrivée, puis relit le fichier entier.',
          'Un bloc abîmé ou falsifié est redemandé. Un fichier qui ne correspond pas à l’original n’est **jamais livré** : il reste dans le dossier caché de reprise jusqu’à être correct, ou est supprimé.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'Une invitation contient l’adresse de l’hôte sur le réseau local, l’identité de son appareil (épinglée), un identifiant de session de 128 bits et un **jeton de 256 bits**, impossible à deviner. L’hôte compare le jeton en temps constant.',
          'L’invitation a une **durée limitée** (30 minutes, 2 heures ou 8 heures). Partager le lien revient à donner le droit de rejoindre : partagez-le seulement avec les participants.',
          'Le lien d’invitation peut s’ouvrir sur {SITE} : la partie après « # », qui contient l’invitation, n’est jamais envoyée à notre serveur. Elle reste dans votre navigateur.',
        ],
      },
      {
        id: 'protections',
        titre: 'Les protections, une à une',
        blocs: [
          {
            tableau: {
              entetes: ['Menace', 'Protection'],
              lignes: [
                ['Écoute du réseau', 'TLS 1.3 sur chaque connexion'],
                ['Usurpation d’un appareil', 'Identité épinglée ; la poignée de main TLS prouve la possession de la clé'],
                ['Envoi non sollicité', 'Accord explicite (ou appareil de confiance) ; expiration après 2 minutes'],
                ['Intrus dans une distribution', 'Jeton de 256 bits, comparé en temps constant ; invitation limitée dans le temps'],
                ['Fichier abîmé ou falsifié', 'Empreinte BLAKE3 de chaque bloc et du fichier entier ; rien n’est livré avant vérification'],
                ['Écriture hors du dossier de réception', 'Chemins nettoyés à la réception (« .. », racines, noms réservés, caractères interdits)'],
                ['Écrasement d’un fichier', 'Jamais : un nom libre est choisi, « nom (1).ext »'],
                ['Disque plein', 'Espace libre vérifié avant d’accepter'],
                ['Données démesurées', 'Messages bornés ; un envoi est limité à 100 000 fichiers et 4 Tio'],
                ['Martèlement', 'Après 20 échecs en une minute, une adresse est ignorée ; 128 connexions en cours au plus'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'La clé de votre appareil',
        blocs: [
          'La clé privée de l’appareil ne le quitte jamais. Elle est enregistrée dans le dossier de données de l’application (lisible par votre seul compte sur Mac et Linux). Si ce dossier est effacé — en désinstallant l’application d’un téléphone, par exemple —, l’appareil prend une nouvelle identité, et vos autres appareils devront de nouveau lui faire confiance.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Signaler une faille',
        blocs: [
          'Vous pensez avoir trouvé une faille ? Écrivez à {EMAIL}, avec de quoi la reproduire. Merci de nous laisser le temps de la corriger avant de la rendre publique ; nous vous répondrons et vous tiendrons au courant.',
        ],
      },
    ],
  },

  privacy: {
    titre: 'Politique de confidentialité de Droplet Drop',
    court: 'Confidentialité',
    chapo: 'Droplet Drop ne collecte rien. Vos fichiers vont d’un appareil à l’autre sans passer par nous.',
    description: 'Ce que Droplet Drop et le site drop.dropletmesh.app font — et ne font pas — de vos données.',
    sections: [
      {
        id: 'resume',
        titre: 'En résumé',
        blocs: [
          {
            liste: [
              'Pas de compte, pas d’adresse e-mail, pas de numéro de téléphone.',
              'Pas de serveur de transfert : vos fichiers vont directement d’un appareil à l’autre, chiffrés.',
              'Pas de publicité, pas de mesure d’audience, pas de pisteur, ni dans l’application ni sur ce site.',
            ],
          },
        ],
      },
      {
        id: 'responsable',
        titre: 'Qui est responsable',
        blocs: [
          'Droplet Drop et le site {SITE} sont publiés par {EDITEUR}. Pour toute question sur vos données : {EMAIL}.',
        ],
      },
      {
        id: 'appareil',
        titre: 'Ce qui reste sur votre appareil',
        blocs: [
          'Ces informations sont créées et gardées **sur votre appareil seulement** ; nous n’y avons pas accès :',
          {
            liste: [
              'le nom de l’appareil, que vous pouvez changer ;',
              'la clé de l’appareil, qui fonde son identité ;',
              'l’historique de vos envois et réceptions ;',
              'la liste de vos appareils de confiance, et vos réglages ;',
              'les morceaux d’un transfert interrompu, le temps qu’il reprenne.',
            ],
          },
          'Sur téléphone, désinstaller l’application efface tout cela ; sur ordinateur, il suffit de supprimer son dossier de données. Les fichiers reçus, eux, restent dans votre dossier de réception.',
        ],
      },
      {
        id: 'reseau',
        titre: 'Ce que voient les appareils de votre réseau',
        blocs: [
          'Pour être trouvé, Droplet Drop ouvert annonce sur le **réseau local** (et seulement là) le nom de l’appareil, sa plateforme, son code d’identité, la version du protocole et le port sur lequel il reçoit. Ces informations ne sortent pas du réseau.',
          'Le QR code et l’adresse de l’écran Recevoir contiennent les mêmes informations, avec l’adresse de l’appareil sur le réseau local. Une invitation Group Drop contient en plus le nom de la distribution, sa date d’expiration et le jeton qui permet de la rejoindre. Vous choisissez avec qui vous les partagez.',
          'Les fichiers, leur nom et leur taille ne sont transmis qu’à l’appareil destinataire, et seulement chiffrés.',
        ],
      },
      {
        id: 'permissions',
        titre: 'Les autorisations',
        blocs: [
          {
            liste: [
              '**Réseau local** : pour trouver les appareils voisins et échanger les fichiers.',
              '**Caméra** : seulement pour scanner un QR code, au moment où vous le demandez. Aucune image n’est enregistrée.',
              '**Photos et fichiers** : seulement ceux que vous choisissez d’envoyer, et le dossier où arrivent ceux que vous acceptez.',
            ],
          },
        ],
      },
      {
        id: 'site',
        titre: 'Ce site',
        blocs: [
          '{SITE} ne dépose **aucun cookie** et n’utilise aucun outil de mesure d’audience. Il est hébergé par Vercel, qui traite techniquement l’adresse IP des visiteurs pour servir les pages et protéger le site contre les abus.',
          'Le site reconnaît votre système (Windows, Mac…) **dans votre navigateur**, pour proposer le bon téléchargement ; rien n’est envoyé.',
          'Une invitation Group Drop ouverte sur ce site reste dans votre navigateur : la partie de l’adresse après « # » n’est jamais transmise au serveur.',
          'Les applications se téléchargent depuis GitHub, qui applique sa propre politique de confidentialité.',
        ],
      },
      {
        id: 'droits',
        titre: 'Vos droits',
        blocs: [
          'Comme nous ne détenons aucune donnée vous concernant, il n’y a rien à consulter, corriger ou supprimer chez nous : tout est sur votre appareil, et vous en gardez la maîtrise. Pour toute question, écrivez-nous à {EMAIL}. Vous pouvez aussi, à tout moment, saisir l’autorité de protection des données de votre pays.',
        ],
      },
      {
        id: 'changements',
        titre: 'Les changements',
        blocs: [
          'Si cette politique change, la nouvelle version sera publiée ici, avec sa date de mise à jour.',
        ],
      },
    ],
  },
};
