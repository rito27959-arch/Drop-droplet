import type { Docs } from './types';

export const es: Pick<Docs, 'security' | 'support'> = {
  support: {
    titre: 'Soporte de Droplet Drop',
    court: 'Soporte',
    chapo: 'Todo para enviar tu primer archivo, y qué hacer cuando algo se atasca.',
    description: 'Ayuda de Droplet Drop: primer envío, dispositivo que no aparece, Group Drop, reanudación, contacto.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Primeros pasos',
        resume: 'Instalar, enviar, recibir.',
        icone: 'etincelle',
        blocs: [
          'Instala Droplet Drop en los dos dispositivos y conéctalos **a la misma red**: el mismo router wifi o el punto de acceso de uno de los móviles. No hace falta internet.',
          {
            liste: [
              '**Para enviar**: toca Enviar, elige archivos, fotos o una carpeta, y luego el dispositivo de destino. Puedes elegir varios a la vez.',
              '**Para recibir**: deja Droplet Drop abierto. Aparece una propuesta con el nombre del remitente, lo que envía y el código de su dispositivo; acepta o rechaza.',
              '**Dónde llegan los archivos**: en un ordenador, en Descargas › Droplet Drop. En un móvil, en la carpeta de la app; ábrelos o compártelos desde el Historial. La carpeta se cambia en Ajustes.',
            ],
          },
          'El nombre con el que te ven los demás se cambia en Ajustes › Nombre del dispositivo.',
        ],
      },
      {
        id: 'visible',
        titre: 'Un dispositivo no aparece',
        resume: 'Cuando los dispositivos no se ven.',
        icone: 'ondes',
        blocs: [
          'Droplet Drop encuentra solo los dispositivos cercanos, siempre que tengan la app **abierta** y estén en la **misma red**. Si alguno no aparece:',
          {
            liste: [
              '**Escanea su código**: en el dispositivo que recibe, abre Recibir; en el que envía, toca «¿No está en la lista?» y luego Escanear su código. El código contiene la dirección y la identidad del dispositivo.',
              '**O escribe su dirección**, que aparece en la misma pantalla Recibir (por ejemplo 192.168.1.12:47321).',
              '**Redes de hotel, de empresa o de invitados**: a menudo impiden que los dispositivos se comuniquen. El punto de acceso de un móvil casi siempre lo resuelve.',
              '**Windows**: la primera vez, permite Droplet Drop en las redes privadas. Si lo rechazaste, restáuralo en Firewall de Windows › Permitir una aplicación.',
              '**Mac**: si macOS pregunta si aceptar conexiones entrantes para Droplet Drop, acepta.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'Enviar a toda una sala.',
        icone: 'personnes',
        blocs: [
          'Group Drop distribuye un mismo envío a muchos dispositivos: una clase, una reunión, un evento.',
          {
            liste: [
              '**Crear**: Group Drop › Crear una distribución. Elige los archivos y la duración de la invitación (30 minutos, 2 horas u 8 horas).',
              '**Que se unan**: muestra el código en pantalla o comparte el enlace de invitación. Cada uno abre Group Drop › Unirse a una distribución, y escanea el código o pega el enlace.',
              '**Empezar**: cuando estén todos, toca Iniciar. El panel sigue cada dispositivo: progreso, velocidad, tiempo restante.',
            ],
          },
          'Pasada la duración elegida, nadie más puede unirse; quienes ya empezaron terminan. Un dispositivo que se desconecta sigue donde estaba en cuanto vuelve.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Interrupciones y reanudación',
        resume: 'Pausa, corte, cancelación.',
        icone: 'horloge',
        blocs: [
          'Un corte no hace perder nada. Lo que ya ha llegado se conserva, bloque a bloque; mientras el último avance tenga menos de diez minutos, Droplet Drop lo reintenta solo. Después, toca Reanudar cuando los dos dispositivos vuelvan a estar en la misma red.',
          'También puedes **pausar** una transferencia y reanudarla. **Cancelar** la detiene definitivamente y borra en el destinatario lo que ya había recibido.',
          'Las partes pendientes se guardan en una carpeta oculta, .droplet-drop, dentro de la carpeta de recepción. Desaparecen cuando la transferencia termina o se cancela.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Aceptar sin confirmar',
        resume: 'Tus dispositivos de confianza.',
        icone: 'bouclier',
        blocs: [
          'Por defecto, cada envío se te propone, y una propuesta sin respuesta caduca a los dos minutos.',
          'Para tus propios dispositivos, marca «Aceptar siempre de este dispositivo» al aceptar: sus envíos llegarán después directamente. La lista está en Ajustes › Dispositivos de confianza, donde puedes quitar cualquiera cuando quieras.',
        ],
      },
      {
        id: 'historique',
        titre: 'El historial',
        resume: 'Encontrar lo que enviaste y recibiste.',
        icone: 'sauvegarde',
        blocs: [
          'El historial lista tus envíos y recepciones, con su dispositivo y su fecha. Se queda en tu dispositivo, en ningún otro sitio.',
          'Borrar el historial no elimina los archivos recibidos: solo desaparece la lista.',
        ],
      },
      {
        id: 'contact',
        titre: 'Contacto',
        resume: 'Una pregunta, un problema, una idea.',
        icone: 'message',
        blocs: [
          'Escríbenos a {EMAIL}. Dinos qué dispositivos usas (Android, Windows, Mac, Linux) y qué mensaje aparece: respondemos antes cuando podemos reproducir el problema.',
          'Para informar de una vulnerabilidad, consulta la página de [Seguridad](/security/#signaler).',
        ],
      },
    ],
  },

  security: {
    titre: 'La seguridad de Droplet Drop',
    court: 'Seguridad',
    chapo: 'Tus archivos van de un dispositivo a otro, cifrados, verificados y sin nadie en medio. Así funciona.',
    description: 'Cómo protege Droplet Drop tus archivos: TLS 1.3, identidad de los dispositivos, verificación por bloques, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'El principio',
        blocs: [
          'Droplet Drop **no tiene cuenta ni servidor de transferencia**. Los archivos van directamente del dispositivo que envía al que recibe, por tu red local. Nunca vemos tus archivos, ni quién los envía a quién: no pasan por nosotros.',
          '**Ninguna criptografía casera**: Droplet Drop se apoya en bibliotecas probadas: rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 y BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'El cifrado',
        blocs: [
          'Cada conexión se cifra con **TLS 1.3**, y solo con TLS 1.3. La autenticación es **mutua**: los dos dispositivos demuestran cada uno su identidad.',
          'La primera vez que se abre, cada dispositivo crea su propia clave (ECDSA P-256). Su identidad es la huella de esa clave; el **código de seguridad** que muestra la app es su comienzo, para comprobarla de un vistazo.',
          'El dispositivo que se conecta **fija** la identidad esperada, conocida por el descubrimiento en la red o por el código QR. Cualquier otro dispositivo que se haga pasar por él es rechazado.',
        ],
      },
      {
        id: 'accord',
        titre: 'Nada llega sin tu permiso',
        blocs: [
          'Cada envío empieza como una **propuesta**: nombre del remitente, código de su dispositivo, número y tamaño de los archivos. Sin respuesta, caduca a los dos minutos.',
          'Solo los dispositivos que hayas marcado «de confianza» pueden enviar sin confirmación, y puedes quitarlos cuando quieras.',
          'Un archivo recibido **nunca se ejecuta**. Si un envío contiene un programa, la propuesta lo indica.',
        ],
      },
      {
        id: 'verification',
        titre: 'Verificado hasta el último byte',
        blocs: [
          'Antes del envío, cada archivo se divide en bloques de 4 MiB, y cada bloque recibe su huella **BLAKE3**, igual que el archivo entero. El destinatario comprueba cada bloque al llegar y vuelve a leer el archivo completo.',
          'Un bloque dañado o falsificado se vuelve a pedir. Un archivo que no coincide con el original **nunca se entrega**: se queda en la carpeta oculta de reanudación hasta ser correcto, o se elimina.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'Una invitación contiene la dirección del anfitrión en la red local, la identidad de su dispositivo (fijada), un identificador de sesión de 128 bits y un **token de 256 bits** imposible de adivinar. El anfitrión compara el token en tiempo constante.',
          'La invitación **caduca** (a los 30 minutos, 2 horas u 8 horas). Compartir el enlace da derecho a unirse: compártelo solo con los participantes.',
          'El enlace de invitación puede abrirse en {SITE}: la parte después de «#», que contiene la invitación, nunca se envía a nuestro servidor. Se queda en tu navegador.',
        ],
      },
      {
        id: 'protections',
        titre: 'Las protecciones, una a una',
        blocs: [
          {
            tableau: {
              entetes: ['Amenaza', 'Protección'],
              lignes: [
                ['Escucha de la red', 'TLS 1.3 en cada conexión'],
                ['Suplantación de un dispositivo', 'Identidad fijada; el intercambio TLS demuestra la posesión de la clave'],
                ['Envío no solicitado', 'Permiso explícito (o dispositivo de confianza); caduca a los 2 minutos'],
                ['Intruso en una distribución', 'Token de 256 bits comparado en tiempo constante; invitación limitada en el tiempo'],
                ['Archivo dañado o falsificado', 'Huella BLAKE3 de cada bloque y del archivo entero; nada se entrega antes de verificarse'],
                ['Escritura fuera de la carpeta de recepción', 'Rutas limpiadas al recibir («..», raíces, nombres reservados, caracteres prohibidos)'],
                ['Sobrescritura de un archivo', 'Nunca: se elige un nombre libre, «nombre (1).ext»'],
                ['Disco lleno', 'Espacio libre comprobado antes de aceptar'],
                ['Datos desmesurados', 'Mensajes acotados; un envío está limitado a 100 000 archivos y 4 TiB'],
                ['Ataques repetidos', 'Tras 20 fallos en un minuto, una dirección se ignora; 128 conexiones en curso como máximo'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'La clave de tu dispositivo',
        blocs: [
          'La clave privada del dispositivo nunca sale de él. Se guarda en la carpeta de datos de la app (legible solo por tu cuenta en Mac y Linux). Si esa carpeta se borra (al desinstalar la app de un móvil, por ejemplo), el dispositivo obtiene una nueva identidad y tus otros dispositivos tendrán que volver a confiar en él.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Informar de una vulnerabilidad',
        blocs: [
          '¿Crees haber encontrado una vulnerabilidad? Escribe a {EMAIL} con lo necesario para reproducirla. Danos tiempo para corregirla antes de hacerla pública; te responderemos y te mantendremos informado.',
        ],
      },
    ],
  },
};
