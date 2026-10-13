// The documents in English — a faithful translation of fr.ts.
import type { Docs } from './types';

export const en: Docs = {
  support: {
    titre: 'Droplet Drop Support',
    court: 'Support',
    chapo: 'Everything you need to send your first file, and what to do when something gets stuck.',
    description: 'Droplet Drop help: first transfer, device not showing up, Group Drop, resuming, contact.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Getting started',
        resume: 'Install, send, receive.',
        icone: 'etincelle',
        blocs: [
          'Install Droplet Drop on both devices, and connect them **to the same network**: the same Wi‑Fi router, or one phone’s hotspot. You don’t need the internet.',
          {
            liste: [
              '**To send**: tap Send, choose files, photos or a folder, then the destination device. You can pick several at once.',
              '**To receive**: keep Droplet Drop open. An offer appears with the sender’s name, what they’re sending and their device code; accept or decline.',
              '**Where files arrive**: on a computer, in Downloads › Droplet Drop. On a phone, in the app’s folder; open or share them from History. You can change the folder in Settings.',
            ],
          },
          'The name others see you as can be changed in Settings › Device name.',
        ],
      },
      {
        id: 'visible',
        titre: 'A device doesn’t show up',
        resume: 'When devices can’t see each other.',
        icone: 'ondes',
        blocs: [
          'Droplet Drop finds nearby devices on its own, as long as they have the app **open** and are on the **same network**. If one doesn’t show up:',
          {
            liste: [
              '**Scan its code**: on the receiving device, open Receive; on the sending one, tap “Not in the list?”, then Scan their code. The code holds the device’s address and identity.',
              '**Or type its address**, shown on the same Receive screen (for example 192.168.1.12:47321).',
              '**Hotel, office or guest networks** often stop devices from talking to each other. One phone’s hotspot almost always solves it.',
              '**Windows**: the first time you open it, allow Droplet Drop on private networks. If you declined, restore it in Windows Firewall › Allow an app.',
              '**Mac**: if macOS asks whether to accept incoming connections for Droplet Drop, accept.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'Send to a whole room.',
        icone: 'personnes',
        blocs: [
          'Group Drop distributes one transfer to many devices: a class, a meeting, an event.',
          {
            liste: [
              '**Create**: Group Drop › Create a distribution. Choose the files and how long the invitation lasts (30 minutes, 2 hours or 8 hours).',
              '**Let people join**: show the code on screen, or share the invitation link. Everyone opens Group Drop › Join a distribution, then scans the code or pastes the link.',
              '**Start**: when everyone is in, tap Start. The board follows each device: progress, speed, time left.',
            ],
          },
          'Once the chosen time is up, no one else can join; those who started will finish. A device that disconnects picks up where it was as soon as it’s back.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Interruptions and resuming',
        resume: 'Pause, dropout, cancel.',
        icone: 'horloge',
        blocs: [
          'A dropout loses nothing. What already arrived is kept, block by block; as long as the last progress was less than ten minutes ago, Droplet Drop retries on its own. After that, tap Resume once both devices are back on the same network.',
          'You can also **pause** a transfer, then resume it. **Cancel** stops it for good, and deletes what the recipient had received.',
          'Pieces waiting to be completed are kept in a hidden folder, .droplet-drop, inside the receiving folder. They disappear when the transfer finishes or is cancelled.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Accept without confirming',
        resume: 'Your own trusted devices.',
        icone: 'bouclier',
        blocs: [
          'By default, every transfer is offered to you, and an offer with no answer expires after two minutes.',
          'For your own devices, tick “Always accept from this device” when you accept: their transfers will then come straight in. The list is in Settings › Trusted devices, where you can remove any at any time.',
        ],
      },
      {
        id: 'historique',
        titre: 'History',
        resume: 'Find what you sent and received.',
        icone: 'sauvegarde',
        blocs: [
          'History lists your transfers, sent and received, with their device and date. It stays on your device, nowhere else.',
          'Clearing history doesn’t delete received files: only the list goes away.',
        ],
      },
      {
        id: 'contact',
        titre: 'Contact us',
        resume: 'A question, a problem, an idea.',
        icone: 'message',
        blocs: [
          'Write to us at {EMAIL}. Tell us which devices you use (Android, Windows, Mac, Linux) and what message appears: we answer faster when we can reproduce the problem.',
          'To report a security vulnerability, see the [Security](/security/#signaler) page.',
        ],
      },
    ],
  },

  security: {
    titre: 'Droplet Drop Security',
    court: 'Security',
    chapo: 'Your files go from one device to another, encrypted, verified, and with no one in the middle. Here’s how.',
    description: 'How Droplet Drop protects your files: TLS 1.3, device identity, block-by-block verification, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'The principle',
        blocs: [
          'Droplet Drop has **no account and no transfer server**. Files go straight from the sending device to the receiving one, over your local network. We never see your files, nor who sends them to whom: they don’t go through us.',
          '**No home-made cryptography**: Droplet Drop relies on proven libraries — rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 and BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'Encryption',
        blocs: [
          'Every connection is encrypted with **TLS 1.3**, and TLS 1.3 only. Authentication is **mutual**: both devices each prove their identity.',
          'The first time it opens, each device creates its own key (ECDSA P-256). Its identity is that key’s fingerprint; the **security code** shown in the app is its beginning, so you can check it at a glance.',
          'The connecting device **pins** the expected identity, learned through network discovery or the QR code. Any other device pretending to be it is refused: “This isn’t the expected device.”',
        ],
      },
      {
        id: 'accord',
        titre: 'Nothing arrives without your consent',
        blocs: [
          'Every transfer starts as an **offer**: the sender’s name, their device code, the number and size of the files. With no answer, it expires after two minutes.',
          'Only devices you have marked as “trusted” can send without confirmation, and you can remove them whenever you like.',
          'A received file is **never run**. If a transfer contains a program, the offer says so.',
        ],
      },
      {
        id: 'verification',
        titre: 'Verified to the last byte',
        blocs: [
          'Before sending, each file is cut into 4 MiB blocks, and each block gets its **BLAKE3** fingerprint, as does the whole file. The recipient checks each block as it arrives, then re-reads the whole file.',
          'A damaged or tampered block is requested again. A file that doesn’t match the original is **never delivered**: it stays in the hidden resume folder until it is correct, or is deleted.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'An invitation contains the host’s address on the local network, its device identity (pinned), a 128-bit session identifier and a **256-bit token** that can’t be guessed. The host compares the token in constant time.',
          'The invitation **expires** (after 30 minutes, 2 hours or 8 hours). Sharing the link grants the right to join: share it only with participants.',
          'The invitation link can open on {SITE}: the part after “#”, which holds the invitation, is never sent to our server. It stays in your browser.',
        ],
      },
      {
        id: 'protections',
        titre: 'The protections, one by one',
        blocs: [
          {
            tableau: {
              entetes: ['Threat', 'Protection'],
              lignes: [
                ['Network eavesdropping', 'TLS 1.3 on every connection'],
                ['Device impersonation', 'Pinned identity; the TLS handshake proves possession of the key'],
                ['Unsolicited transfer', 'Explicit consent (or a trusted device); expires after 2 minutes'],
                ['Intruder in a distribution', '256-bit token, compared in constant time; time-limited invitation'],
                ['Damaged or tampered file', 'BLAKE3 fingerprint of every block and of the whole file; nothing is delivered before verification'],
                ['Writing outside the receiving folder', 'Paths cleaned on arrival (“..”, roots, reserved names, forbidden characters)'],
                ['Overwriting a file', 'Never: a free name is chosen, “name (1).ext”'],
                ['Full disk', 'Free space checked before accepting'],
                ['Oversized data', 'Bounded messages; a transfer is limited to 100,000 files and 4 TiB'],
                ['Hammering', 'After 20 failures in one minute, an address is ignored; at most 128 connections in progress'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'Your device’s key',
        blocs: [
          'The device’s private key never leaves it. It is stored in the app’s data folder (readable only by your account on Mac and Linux). If that folder is erased — by uninstalling the app from a phone, for example — the device gets a new identity, and your other devices will need to trust it again.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Report a vulnerability',
        blocs: [
          'Think you’ve found a vulnerability? Write to {EMAIL}, with what we need to reproduce it. Please give us time to fix it before making it public; we will reply and keep you informed.',
        ],
      },
    ],
  },

  privacy: {
    titre: 'Droplet Drop Privacy Policy',
    court: 'Privacy',
    chapo: 'Droplet Drop collects nothing. Your files go from one device to another without going through us.',
    description: 'What Droplet Drop and the drop.dropletmesh.app website do — and don’t do — with your data.',
    sections: [
      {
        id: 'resume',
        titre: 'In short',
        blocs: [
          {
            liste: [
              'No account, no email address, no phone number.',
              'No transfer server: your files go straight from one device to another, encrypted.',
              'No ads, no analytics, no trackers, neither in the app nor on this website.',
            ],
          },
        ],
      },
      {
        id: 'responsable',
        titre: 'Who is responsible',
        blocs: ['Droplet Drop and the {SITE} website are published by {EDITEUR}. For any question about your data: {EMAIL}.'],
      },
      {
        id: 'appareil',
        titre: 'What stays on your device',
        blocs: [
          'This information is created and kept **on your device only**; we have no access to it:',
          {
            liste: [
              'the device name, which you can change;',
              'the device key, on which its identity rests;',
              'the history of your transfers;',
              'your list of trusted devices, and your settings;',
              'the pieces of an interrupted transfer, until it resumes.',
            ],
          },
          'On a phone, uninstalling the app erases all of this; on a computer, delete its data folder. Received files stay in your receiving folder.',
        ],
      },
      {
        id: 'reseau',
        titre: 'What devices on your network see',
        blocs: [
          'To be found, an open Droplet Drop announces on the **local network** (and only there) the device name, its platform, its identity code, the protocol version and the port it receives on. This information doesn’t leave the network.',
          'The QR code and address on the Receive screen hold the same information, plus the device’s address on the local network. A Group Drop invitation also holds the distribution’s name, its expiry date and the token that lets people join. You choose who you share them with.',
          'Files, their names and sizes are sent only to the receiving device, and only encrypted.',
        ],
      },
      {
        id: 'permissions',
        titre: 'Permissions',
        blocs: [
          {
            liste: [
              '**Local network**: to find nearby devices and exchange files.',
              '**Camera**: only to scan a QR code, when you ask to. No image is stored.',
              '**Photos and files**: only the ones you choose to send, and the folder where the ones you accept arrive.',
            ],
          },
        ],
      },
      {
        id: 'site',
        titre: 'This website',
        blocs: [
          '{SITE} sets **no cookies** and uses no analytics. It is hosted by Vercel, which technically processes visitors’ IP addresses to serve the pages and protect the site from abuse.',
          'The site recognizes your system (Windows, Mac…) **in your browser**, to offer the right download; nothing is sent.',
          'A Group Drop invitation opened on this site stays in your browser: the part of the address after “#” is never sent to the server.',
          'The apps are downloaded from GitHub, which applies its own privacy policy.',
        ],
      },
      {
        id: 'droits',
        titre: 'Your rights',
        blocs: [
          'Since we hold no data about you, there is nothing to access, correct or delete on our side: everything is on your device, and you stay in control. For any question, write to us at {EMAIL}. You can also contact your country’s data protection authority at any time.',
        ],
      },
      {
        id: 'changements',
        titre: 'Changes',
        blocs: ['If this policy changes, the new version will be published here, with its update date.'],
      },
    ],
  },
};
