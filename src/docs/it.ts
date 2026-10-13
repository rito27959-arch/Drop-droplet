import type { Docs } from './types';

export const it: Pick<Docs, 'security' | 'support'> = {
  support: {
    titre: 'Assistenza Droplet Drop',
    court: 'Assistenza',
    chapo: 'Tutto per inviare il tuo primo file, e cosa fare quando qualcosa si blocca.',
    description: 'Aiuto per Droplet Drop: primo invio, dispositivo che non compare, Group Drop, ripresa, contatti.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Per iniziare',
        resume: 'Installare, inviare, ricevere.',
        icone: 'etincelle',
        blocs: [
          'Installa Droplet Drop sui due dispositivi e collegali **alla stessa rete**: lo stesso router Wi‑Fi o l’hotspot di uno dei telefoni. Internet non serve.',
          {
            liste: [
              '**Per inviare**: tocca Invia, scegli file, foto o una cartella, poi il dispositivo di destinazione. Puoi sceglierne più di uno.',
              '**Per ricevere**: tieni aperto Droplet Drop. Compare una proposta con il nome del mittente, cosa invia e il codice del suo dispositivo; accetta o rifiuta.',
              '**Dove arrivano i file**: sul computer, in Download › Droplet Drop. Sul telefono, nella cartella dell’app; aprili o condividili dalla Cronologia. La cartella si cambia in Impostazioni.',
            ],
          },
          'Il nome con cui ti vedono gli altri si cambia in Impostazioni › Nome del dispositivo.',
        ],
      },
      {
        id: 'visible',
        titre: 'Un dispositivo non compare',
        resume: 'Quando i dispositivi non si vedono.',
        icone: 'ondes',
        blocs: [
          'Droplet Drop trova da solo i dispositivi vicini, purché abbiano l’app **aperta** e siano sulla **stessa rete**. Se uno non compare:',
          {
            liste: [
              '**Scansiona il suo codice**: sul dispositivo che riceve apri Ricevi; su quello che invia tocca «Non è nell’elenco?», poi Scansiona il suo codice. Il codice contiene indirizzo e identità del dispositivo.',
              '**Oppure digita il suo indirizzo**, mostrato nella stessa schermata Ricevi (per esempio 192.168.1.12:47321).',
              '**Reti di hotel, aziendali o per ospiti**: spesso impediscono ai dispositivi di parlarsi. L’hotspot di un telefono risolve quasi sempre.',
              '**Windows**: alla prima apertura, consenti Droplet Drop sulle reti private. Se hai rifiutato, ripristinalo in Windows Firewall › Consenti un’app.',
              '**Mac**: se macOS chiede se accettare le connessioni in entrata per Droplet Drop, accetta.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'Inviare a un’intera sala.',
        icone: 'personnes',
        blocs: [
          'Group Drop distribuisce lo stesso invio a molti dispositivi: una classe, una riunione, un evento.',
          {
            liste: [
              '**Creare**: Group Drop › Crea una distribuzione. Scegli i file e la durata dell’invito (30 minuti, 2 ore o 8 ore).',
              '**Far partecipare**: mostra il codice sullo schermo o condividi il link d’invito. Ognuno apre Group Drop › Unisciti a una distribuzione, poi scansiona il codice o incolla il link.',
              '**Avviare**: quando ci sono tutti, tocca Avvia. Il pannello segue ogni dispositivo: avanzamento, velocità, tempo rimanente.',
            ],
          },
          'Trascorsa la durata scelta, nessun altro può unirsi; chi ha già iniziato finisce. Un dispositivo che si disconnette riprende da dove era appena torna.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Interruzioni e ripresa',
        resume: 'Pausa, interruzione, annullamento.',
        icone: 'horloge',
        blocs: [
          'Un’interruzione non fa perdere nulla. Ciò che è già arrivato viene conservato, blocco per blocco; finché l’ultimo avanzamento risale a meno di dieci minuti fa, Droplet Drop riprova da solo. Dopo, tocca Riprendi quando i due dispositivi sono di nuovo sulla stessa rete.',
          'Puoi anche mettere **in pausa** un trasferimento e riprenderlo. **Annulla** lo ferma definitivamente ed elimina dal destinatario ciò che aveva ricevuto.',
          'Le parti in attesa sono conservate in una cartella nascosta, .droplet-drop, dentro la cartella di ricezione. Spariscono quando il trasferimento termina o viene annullato.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Accettare senza confermare',
        resume: 'I tuoi dispositivi attendibili.',
        icone: 'bouclier',
        blocs: [
          'Per impostazione predefinita, ogni invio ti viene proposto, e una proposta senza risposta scade dopo due minuti.',
          'Per i tuoi dispositivi, seleziona «Accetta sempre da questo dispositivo» quando accetti: i loro invii arriveranno poi direttamente. L’elenco è in Impostazioni › Dispositivi attendibili, dove puoi rimuoverli in qualsiasi momento.',
        ],
      },
      {
        id: 'historique',
        titre: 'La cronologia',
        resume: 'Ritrovare ciò che hai inviato e ricevuto.',
        icone: 'sauvegarde',
        blocs: [
          'La cronologia elenca invii e ricezioni, con dispositivo e data. Resta sul tuo dispositivo, da nessun’altra parte.',
          'Cancellare la cronologia non elimina i file ricevuti: sparisce solo l’elenco.',
        ],
      },
      {
        id: 'contact',
        titre: 'Contattaci',
        resume: 'Una domanda, un problema, un’idea.',
        icone: 'message',
        blocs: [
          'Scrivici a {EMAIL}. Dicci quali dispositivi usi (Android, Windows, Mac, Linux) e quale messaggio compare: rispondiamo prima quando possiamo riprodurre il problema.',
          'Per segnalare una vulnerabilità, vedi la pagina [Sicurezza](/security/#signaler).',
        ],
      },
    ],
  },

  security: {
    titre: 'La sicurezza di Droplet Drop',
    court: 'Sicurezza',
    chapo: 'I tuoi file vanno da un dispositivo all’altro, cifrati, verificati e senza nessuno in mezzo. Ecco come.',
    description: 'Come Droplet Drop protegge i tuoi file: TLS 1.3, identità dei dispositivi, verifica blocco per blocco, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'Il principio',
        blocs: [
          'Droplet Drop **non ha né account né server di trasferimento**. I file vanno direttamente dal dispositivo che invia a quello che riceve, sulla tua rete locale. Non vediamo mai i tuoi file, né chi li invia a chi: non passano da noi.',
          '**Nessuna crittografia fatta in casa**: Droplet Drop si basa su librerie collaudate: rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 e BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'La cifratura',
        blocs: [
          'Ogni connessione è cifrata con **TLS 1.3**, e solo con TLS 1.3. L’autenticazione è **reciproca**: entrambi i dispositivi dimostrano la propria identità.',
          'Alla prima apertura, ogni dispositivo crea la propria chiave (ECDSA P-256). La sua identità è l’impronta di questa chiave; il **codice di sicurezza** mostrato nell’app ne è l’inizio, per verificarla a colpo d’occhio.',
          'Il dispositivo che si connette **fissa** l’identità attesa, appresa dalla scoperta in rete o dal codice QR. Qualsiasi altro dispositivo che si spacci per lui viene rifiutato.',
        ],
      },
      {
        id: 'accord',
        titre: 'Nulla arriva senza il tuo consenso',
        blocs: [
          'Ogni invio inizia come **proposta**: nome del mittente, codice del suo dispositivo, numero e dimensione dei file. Senza risposta, scade dopo due minuti.',
          'Solo i dispositivi che hai indicato come «attendibili» possono inviare senza conferma, e puoi rimuoverli quando vuoi.',
          'Un file ricevuto **non viene mai eseguito**. Se un invio contiene un programma, la proposta lo segnala.',
        ],
      },
      {
        id: 'verification',
        titre: 'Verificato fino all’ultimo byte',
        blocs: [
          'Prima dell’invio, ogni file è diviso in blocchi da 4 MiB, e ogni blocco riceve la sua impronta **BLAKE3**, come il file intero. Il destinatario verifica ogni blocco all’arrivo, poi rilegge l’intero file.',
          'Un blocco danneggiato o falsificato viene richiesto di nuovo. Un file che non corrisponde all’originale **non viene mai consegnato**: resta nella cartella nascosta di ripresa finché non è corretto, oppure viene eliminato.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'Un invito contiene l’indirizzo dell’host sulla rete locale, l’identità del suo dispositivo (fissata), un identificativo di sessione a 128 bit e un **token a 256 bit** impossibile da indovinare. L’host confronta il token in tempo costante.',
          'L’invito **scade** (dopo 30 minuti, 2 ore o 8 ore). Condividere il link dà il diritto di unirsi: condividilo solo con i partecipanti.',
          'Il link d’invito può aprirsi su {SITE}: la parte dopo «#», che contiene l’invito, non viene mai inviata al nostro server. Resta nel tuo browser.',
        ],
      },
      {
        id: 'protections',
        titre: 'Le protezioni, una per una',
        blocs: [
          {
            tableau: {
              entetes: ['Minaccia', 'Protezione'],
              lignes: [
                ['Intercettazione della rete', 'TLS 1.3 su ogni connessione'],
                ['Furto d’identità di un dispositivo', 'Identità fissata; l’handshake TLS dimostra il possesso della chiave'],
                ['Invio non richiesto', 'Consenso esplicito (o dispositivo attendibile); scade dopo 2 minuti'],
                ['Intruso in una distribuzione', 'Token a 256 bit confrontato in tempo costante; invito a tempo'],
                ['File danneggiato o falsificato', 'Impronta BLAKE3 di ogni blocco e del file intero; nulla è consegnato prima della verifica'],
                ['Scrittura fuori dalla cartella di ricezione', 'Percorsi ripuliti alla ricezione («..», radici, nomi riservati, caratteri vietati)'],
                ['Sovrascrittura di un file', 'Mai: viene scelto un nome libero, «nome (1).ext»'],
                ['Disco pieno', 'Spazio libero verificato prima di accettare'],
                ['Dati sproporzionati', 'Messaggi limitati; un invio è limitato a 100.000 file e 4 TiB'],
                ['Tentativi ripetuti', 'Dopo 20 errori in un minuto, un indirizzo viene ignorato; al massimo 128 connessioni in corso'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'La chiave del tuo dispositivo',
        blocs: [
          'La chiave privata del dispositivo non lo lascia mai. È salvata nella cartella dati dell’app (leggibile solo dal tuo account su Mac e Linux). Se questa cartella viene cancellata, per esempio disinstallando l’app da un telefono, il dispositivo ottiene una nuova identità e gli altri tuoi dispositivi dovranno fidarsi di nuovo.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Segnalare una vulnerabilità',
        blocs: [
          'Pensi di aver trovato una vulnerabilità? Scrivi a {EMAIL}, con quanto serve per riprodurla. Lasciaci il tempo di correggerla prima di renderla pubblica; ti risponderemo e ti terremo aggiornato.',
        ],
      },
    ],
  },
};
