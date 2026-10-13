import type { Docs } from './types';

export const de: Pick<Docs, 'security' | 'support'> = {
  support: {
    titre: 'Droplet Drop Support',
    court: 'Support',
    chapo: 'Alles, um deine erste Datei zu senden, und was zu tun ist, wenn etwas hakt.',
    description: 'Hilfe zu Droplet Drop: erste Übertragung, Gerät erscheint nicht, Group Drop, Fortsetzen, Kontakt.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Erste Schritte',
        resume: 'Installieren, senden, empfangen.',
        icone: 'etincelle',
        blocs: [
          'Installiere Droplet Drop auf beiden Geräten und verbinde sie **mit demselben Netzwerk**: demselben WLAN-Router oder dem Hotspot eines der Handys. Internet ist nicht nötig.',
          {
            liste: [
              '**Senden**: Tippe auf Senden, wähle Dateien, Fotos oder einen Ordner, dann das Zielgerät. Du kannst mehrere gleichzeitig wählen.',
              '**Empfangen**: Lass Droplet Drop geöffnet. Ein Angebot erscheint mit dem Namen des Absenders, dem Inhalt und seinem Gerätecode; nimm an oder lehne ab.',
              '**Wo die Dateien landen**: am Computer unter Downloads › Droplet Drop. Am Handy im Ordner der App; öffne oder teile sie aus dem Verlauf. Den Ordner änderst du in den Einstellungen.',
            ],
          },
          'Den Namen, unter dem andere dich sehen, änderst du unter Einstellungen › Gerätename.',
        ],
      },
      {
        id: 'visible',
        titre: 'Ein Gerät erscheint nicht',
        resume: 'Wenn sich Geräte nicht sehen.',
        icone: 'ondes',
        blocs: [
          'Droplet Drop findet Geräte in der Nähe von selbst, solange die App **geöffnet** ist und sie im **selben Netzwerk** sind. Wenn eines nicht erscheint:',
          {
            liste: [
              '**Scanne seinen Code**: Öffne auf dem empfangenden Gerät Empfangen; tippe auf dem sendenden auf „Nicht in der Liste?“, dann auf Code scannen. Der Code enthält Adresse und Identität des Geräts.',
              '**Oder gib seine Adresse ein**, die auf demselben Empfangen-Bildschirm steht (zum Beispiel 192.168.1.12:47321).',
              '**Hotel-, Firmen- oder Gästenetzwerke** verhindern oft, dass Geräte miteinander sprechen. Der Hotspot eines Handys löst das fast immer.',
              '**Windows**: Erlaube Droplet Drop beim ersten Öffnen in privaten Netzwerken. Falls du abgelehnt hast, stelle es unter Windows-Firewall › App zulassen wieder her.',
              '**Mac**: Wenn macOS fragt, ob eingehende Verbindungen für Droplet Drop erlaubt werden sollen, erlaube sie.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'An einen ganzen Raum senden.',
        icone: 'personnes',
        blocs: [
          'Group Drop verteilt dieselbe Übertragung an viele Geräte: eine Klasse, ein Meeting, ein Event.',
          {
            liste: [
              '**Erstellen**: Group Drop › Verteilung erstellen. Wähle die Dateien und die Dauer der Einladung (30 Minuten, 2 Stunden oder 8 Stunden).',
              '**Beitreten lassen**: Zeig den Code auf dem Bildschirm oder teile den Einladungslink. Alle öffnen Group Drop › Einer Verteilung beitreten und scannen den Code oder fügen den Link ein.',
              '**Starten**: Wenn alle da sind, tippe auf Starten. Die Übersicht verfolgt jedes Gerät: Fortschritt, Geschwindigkeit, Restzeit.',
            ],
          },
          'Nach Ablauf der gewählten Dauer kann niemand mehr beitreten; wer schon begonnen hat, wird fertig. Ein Gerät, das die Verbindung verliert, macht weiter, sobald es zurück ist.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Unterbrechungen und Fortsetzen',
        resume: 'Pause, Abbruch, Abbrechen.',
        icone: 'horloge',
        blocs: [
          'Ein Verbindungsabbruch kostet nichts. Was schon angekommen ist, bleibt Block für Block erhalten; solange der letzte Fortschritt weniger als zehn Minuten zurückliegt, versucht Droplet Drop es selbst erneut. Danach tippe auf Fortsetzen, sobald beide Geräte wieder im selben Netzwerk sind.',
          'Du kannst eine Übertragung auch **pausieren** und fortsetzen. **Abbrechen** beendet sie endgültig und löscht beim Empfänger, was bereits angekommen war.',
          'Noch unvollständige Teile liegen in einem versteckten Ordner, .droplet-drop, im Empfangsordner. Sie verschwinden, wenn die Übertragung endet oder abgebrochen wird.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Ohne Rückfrage annehmen',
        resume: 'Deine vertrauenswürdigen Geräte.',
        icone: 'bouclier',
        blocs: [
          'Standardmäßig wird dir jede Übertragung angeboten, und ein unbeantwortetes Angebot verfällt nach zwei Minuten.',
          'Für deine eigenen Geräte aktiviere beim Annehmen „Von diesem Gerät immer annehmen“: Ihre Übertragungen kommen dann direkt an. Die Liste findest du unter Einstellungen › Vertrauenswürdige Geräte, wo du jederzeit Geräte entfernen kannst.',
        ],
      },
      {
        id: 'historique',
        titre: 'Der Verlauf',
        resume: 'Wiederfinden, was du gesendet und empfangen hast.',
        icone: 'sauvegarde',
        blocs: [
          'Der Verlauf listet deine gesendeten und empfangenen Übertragungen mit Gerät und Datum. Er bleibt auf deinem Gerät, nirgendwo sonst.',
          'Den Verlauf zu löschen entfernt keine empfangenen Dateien: Nur die Liste verschwindet.',
        ],
      },
      {
        id: 'contact',
        titre: 'Kontakt',
        resume: 'Eine Frage, ein Problem, eine Idee.',
        icone: 'message',
        blocs: [
          'Schreib uns an {EMAIL}. Sag uns, welche Geräte du nutzt (Android, Windows, Mac, Linux) und welche Meldung erscheint: Wir antworten schneller, wenn wir das Problem nachstellen können.',
          'Um eine Sicherheitslücke zu melden, siehe die Seite [Sicherheit](/security/#signaler).',
        ],
      },
    ],
  },

  security: {
    titre: 'Die Sicherheit von Droplet Drop',
    court: 'Sicherheit',
    chapo: 'Deine Dateien gehen von Gerät zu Gerät, verschlüsselt, geprüft und ohne jemanden dazwischen. So funktioniert es.',
    description: 'Wie Droplet Drop deine Dateien schützt: TLS 1.3, Geräteidentität, Prüfung Block für Block, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'Das Prinzip',
        blocs: [
          'Droplet Drop hat **weder Konto noch Übertragungsserver**. Die Dateien gehen direkt vom sendenden zum empfangenden Gerät, über dein lokales Netzwerk. Wir sehen nie deine Dateien und auch nicht, wer sie an wen schickt: Sie gehen nicht über uns.',
          '**Keine selbstgebaute Kryptografie**: Droplet Drop nutzt bewährte Bibliotheken – rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 und BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'Die Verschlüsselung',
        blocs: [
          'Jede Verbindung ist mit **TLS 1.3** verschlüsselt, und nur mit TLS 1.3. Die Authentifizierung ist **gegenseitig**: Beide Geräte beweisen ihre Identität.',
          'Beim ersten Öffnen erzeugt jedes Gerät seinen eigenen Schlüssel (ECDSA P-256). Seine Identität ist der Fingerabdruck dieses Schlüssels; der in der App angezeigte **Sicherheitscode** ist dessen Anfang, um ihn auf einen Blick zu prüfen.',
          'Das verbindende Gerät **pinnt** die erwartete Identität, die es über die Erkennung im Netzwerk oder den QR-Code erfahren hat. Jedes andere Gerät, das sich als dieses ausgibt, wird abgewiesen.',
        ],
      },
      {
        id: 'accord',
        titre: 'Nichts kommt ohne deine Zustimmung',
        blocs: [
          'Jede Übertragung beginnt als **Angebot**: Name des Absenders, sein Gerätecode, Anzahl und Größe der Dateien. Ohne Antwort verfällt es nach zwei Minuten.',
          'Nur Geräte, die du als „vertrauenswürdig“ markiert hast, können ohne Rückfrage senden, und du kannst sie jederzeit entfernen.',
          'Eine empfangene Datei wird **nie ausgeführt**. Enthält eine Übertragung ein Programm, weist das Angebot darauf hin.',
        ],
      },
      {
        id: 'verification',
        titre: 'Geprüft bis zum letzten Byte',
        blocs: [
          'Vor dem Senden wird jede Datei in Blöcke von 4 MiB geteilt, und jeder Block erhält seinen **BLAKE3**-Fingerabdruck, ebenso die ganze Datei. Der Empfänger prüft jeden Block bei Ankunft und liest dann die ganze Datei erneut.',
          'Ein beschädigter oder manipulierter Block wird neu angefordert. Eine Datei, die nicht dem Original entspricht, wird **nie ausgeliefert**: Sie bleibt im versteckten Fortsetzungsordner, bis sie stimmt, oder wird gelöscht.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'Eine Einladung enthält die Adresse des Hosts im lokalen Netzwerk, die Identität seines Geräts (gepinnt), eine 128-Bit-Sitzungskennung und ein **256-Bit-Token**, das sich nicht erraten lässt. Der Host vergleicht das Token in konstanter Zeit.',
          'Die Einladung ist **zeitlich begrenzt** (30 Minuten, 2 Stunden oder 8 Stunden). Wer den Link teilt, gibt das Recht zum Beitreten: Teile ihn nur mit den Teilnehmenden.',
          'Der Einladungslink kann sich auf {SITE} öffnen: Der Teil nach „#“, der die Einladung enthält, wird nie an unseren Server gesendet. Er bleibt in deinem Browser.',
        ],
      },
      {
        id: 'protections',
        titre: 'Die Schutzmaßnahmen im Einzelnen',
        blocs: [
          {
            tableau: {
              entetes: ['Bedrohung', 'Schutz'],
              lignes: [
                ['Abhören des Netzwerks', 'TLS 1.3 bei jeder Verbindung'],
                ['Gerät wird vorgetäuscht', 'Gepinnte Identität; der TLS-Handshake beweist den Besitz des Schlüssels'],
                ['Unerwünschte Übertragung', 'Ausdrückliche Zustimmung (oder vertrauenswürdiges Gerät); verfällt nach 2 Minuten'],
                ['Eindringling in einer Verteilung', '256-Bit-Token, in konstanter Zeit verglichen; zeitlich begrenzte Einladung'],
                ['Beschädigte oder manipulierte Datei', 'BLAKE3-Fingerabdruck jedes Blocks und der ganzen Datei; nichts wird vor der Prüfung ausgeliefert'],
                ['Schreiben außerhalb des Empfangsordners', 'Pfade beim Empfang bereinigt („..“, Wurzeln, reservierte Namen, verbotene Zeichen)'],
                ['Überschreiben einer Datei', 'Nie: Es wird ein freier Name gewählt, „Name (1).ext“'],
                ['Volle Festplatte', 'Freier Speicher wird vor dem Annehmen geprüft'],
                ['Übergroße Daten', 'Begrenzte Nachrichten; eine Übertragung ist auf 100.000 Dateien und 4 TiB begrenzt'],
                ['Dauerangriffe', 'Nach 20 Fehlschlägen in einer Minute wird eine Adresse ignoriert; höchstens 128 laufende Verbindungen'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'Der Schlüssel deines Geräts',
        blocs: [
          'Der private Schlüssel des Geräts verlässt es nie. Er liegt im Datenordner der App (auf Mac und Linux nur für dein Konto lesbar). Wird dieser Ordner gelöscht – etwa beim Deinstallieren der App auf einem Handy –, erhält das Gerät eine neue Identität, und deine anderen Geräte müssen ihm erneut vertrauen.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Eine Sicherheitslücke melden',
        blocs: [
          'Du glaubst, eine Sicherheitslücke gefunden zu haben? Schreib an {EMAIL}, mit allem, was wir zum Nachstellen brauchen. Bitte gib uns Zeit, sie zu beheben, bevor du sie veröffentlichst; wir antworten dir und halten dich auf dem Laufenden.',
        ],
      },
    ],
  },
};
