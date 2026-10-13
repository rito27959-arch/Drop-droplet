import type { Docs } from './types';

export const pt: Pick<Docs, 'security' | 'support'> = {
  support: {
    titre: 'Suporte do Droplet Drop',
    court: 'Suporte',
    chapo: 'Tudo para enviar o seu primeiro ficheiro, e o que fazer quando algo encrava.',
    description: 'Ajuda do Droplet Drop: primeiro envio, dispositivo que não aparece, Group Drop, retoma, contacto.',
    sections: [
      {
        id: 'demarrer',
        titre: 'Primeiros passos',
        resume: 'Instalar, enviar, receber.',
        icone: 'etincelle',
        blocs: [
          'Instale o Droplet Drop nos dois dispositivos e ligue-os **à mesma rede**: o mesmo router Wi‑Fi ou o hotspot de um dos telemóveis. Não precisa de internet.',
          {
            liste: [
              '**Para enviar**: toque em Enviar, escolha ficheiros, fotos ou uma pasta, e depois o dispositivo de destino. Pode escolher vários de uma vez.',
              '**Para receber**: mantenha o Droplet Drop aberto. Aparece uma proposta com o nome do remetente, o que envia e o código do dispositivo; aceite ou recuse.',
              '**Onde chegam os ficheiros**: num computador, em Transferências › Droplet Drop. Num telemóvel, na pasta da app; abra-os ou partilhe-os a partir do Histórico. A pasta muda-se nas Definições.',
            ],
          },
          'O nome com que os outros o veem muda-se em Definições › Nome do dispositivo.',
        ],
      },
      {
        id: 'visible',
        titre: 'Um dispositivo não aparece',
        resume: 'Quando os dispositivos não se veem.',
        icone: 'ondes',
        blocs: [
          'O Droplet Drop encontra sozinho os dispositivos por perto, desde que tenham a app **aberta** e estejam na **mesma rede**. Se algum não aparecer:',
          {
            liste: [
              '**Leia o código dele**: no dispositivo que recebe, abra Receber; no que envia, toque em «Não está na lista?» e depois em Ler o código dele. O código contém o endereço e a identidade do dispositivo.',
              '**Ou escreva o endereço**, mostrado no mesmo ecrã Receber (por exemplo 192.168.1.12:47321).',
              '**Redes de hotel, de empresa ou de convidados** impedem muitas vezes os dispositivos de comunicar. O hotspot de um telemóvel resolve quase sempre.',
              '**Windows**: na primeira abertura, permita o Droplet Drop nas redes privadas. Se recusou, reponha-o em Firewall do Windows › Permitir uma aplicação.',
              '**Mac**: se o macOS perguntar se aceita ligações de entrada para o Droplet Drop, aceite.',
            ],
          },
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        resume: 'Enviar para uma sala inteira.',
        icone: 'personnes',
        blocs: [
          'O Group Drop distribui o mesmo envio por muitos dispositivos: uma turma, uma reunião, um evento.',
          {
            liste: [
              '**Criar**: Group Drop › Criar uma distribuição. Escolha os ficheiros e a duração do convite (30 minutos, 2 horas ou 8 horas).',
              '**Deixar entrar**: mostre o código no ecrã ou partilhe a ligação de convite. Cada pessoa abre Group Drop › Entrar numa distribuição, e lê o código ou cola a ligação.',
              '**Começar**: quando estiverem todos, toque em Iniciar. O painel acompanha cada dispositivo: progresso, velocidade, tempo restante.',
            ],
          },
          'Passada a duração escolhida, mais ninguém pode entrar; quem já começou termina. Um dispositivo que se desliga continua onde estava assim que volta.',
        ],
      },
      {
        id: 'reprise',
        titre: 'Interrupções e retoma',
        resume: 'Pausa, falha, cancelamento.',
        icone: 'horloge',
        blocs: [
          'Uma falha não faz perder nada. O que já chegou é guardado, bloco a bloco; enquanto o último avanço tiver menos de dez minutos, o Droplet Drop tenta de novo sozinho. Depois disso, toque em Retomar quando os dois dispositivos voltarem a estar na mesma rede.',
          'Também pode **pausar** uma transferência e retomá-la. **Cancelar** para-a de vez e apaga no destinatário o que já tinha recebido.',
          'As partes em espera ficam numa pasta oculta, .droplet-drop, dentro da pasta de receção. Desaparecem quando a transferência termina ou é cancelada.',
        ],
      },
      {
        id: 'confiance',
        titre: 'Aceitar sem confirmar',
        resume: 'Os seus dispositivos de confiança.',
        icone: 'bouclier',
        blocs: [
          'Por predefinição, cada envio é-lhe proposto, e uma proposta sem resposta expira ao fim de dois minutos.',
          'Para os seus próprios dispositivos, marque «Aceitar sempre deste dispositivo» ao aceitar: os envios deles passam a chegar diretamente. A lista está em Definições › Dispositivos de confiança, onde pode remover qualquer um a qualquer momento.',
        ],
      },
      {
        id: 'historique',
        titre: 'O histórico',
        resume: 'Encontrar o que enviou e recebeu.',
        icone: 'sauvegarde',
        blocs: [
          'O histórico lista os seus envios e receções, com o dispositivo e a data. Fica no seu dispositivo, em mais nenhum lado.',
          'Apagar o histórico não elimina os ficheiros recebidos: só a lista desaparece.',
        ],
      },
      {
        id: 'contact',
        titre: 'Contacte-nos',
        resume: 'Uma pergunta, um problema, uma ideia.',
        icone: 'message',
        blocs: [
          'Escreva-nos para {EMAIL}. Diga-nos que dispositivos usa (Android, Windows, Mac, Linux) e que mensagem aparece: respondemos mais depressa quando conseguimos reproduzir o problema.',
          'Para comunicar uma vulnerabilidade, consulte a página de [Segurança](/security/#signaler).',
        ],
      },
    ],
  },

  security: {
    titre: 'A segurança do Droplet Drop',
    court: 'Segurança',
    chapo: 'Os seus ficheiros vão de um dispositivo para outro, cifrados, verificados e sem ninguém pelo meio. Eis como.',
    description: 'Como o Droplet Drop protege os seus ficheiros: TLS 1.3, identidade dos dispositivos, verificação bloco a bloco, Group Drop.',
    sections: [
      {
        id: 'principe',
        titre: 'O princípio',
        blocs: [
          'O Droplet Drop **não tem conta nem servidor de transferência**. Os ficheiros vão diretamente do dispositivo que envia para o que recebe, pela sua rede local. Nunca vemos os seus ficheiros, nem quem os envia a quem: não passam por nós.',
          '**Nenhuma criptografia caseira**: o Droplet Drop assenta em bibliotecas comprovadas: rustls (TLS 1.3), ring, rcgen (ECDSA P-256), SHA-256 e BLAKE3.',
        ],
      },
      {
        id: 'chiffrement',
        titre: 'A cifragem',
        blocs: [
          'Cada ligação é cifrada com **TLS 1.3**, e só com TLS 1.3. A autenticação é **mútua**: os dois dispositivos provam cada um a sua identidade.',
          'Na primeira abertura, cada dispositivo cria a sua própria chave (ECDSA P-256). A sua identidade é a impressão digital dessa chave; o **código de segurança** mostrado na app é o seu início, para a verificar num relance.',
          'O dispositivo que se liga **fixa** a identidade esperada, conhecida pela descoberta na rede ou pelo código QR. Qualquer outro dispositivo que se faça passar por ele é recusado.',
        ],
      },
      {
        id: 'accord',
        titre: 'Nada chega sem o seu acordo',
        blocs: [
          'Cada envio começa como uma **proposta**: nome do remetente, código do dispositivo, número e tamanho dos ficheiros. Sem resposta, expira ao fim de dois minutos.',
          'Só os dispositivos que marcou como «de confiança» podem enviar sem confirmação, e pode removê-los quando quiser.',
          'Um ficheiro recebido **nunca é executado**. Se um envio contiver um programa, a proposta indica-o.',
        ],
      },
      {
        id: 'verification',
        titre: 'Verificado até ao último byte',
        blocs: [
          'Antes do envio, cada ficheiro é dividido em blocos de 4 MiB, e cada bloco recebe a sua impressão digital **BLAKE3**, tal como o ficheiro inteiro. O destinatário verifica cada bloco à chegada e volta a ler o ficheiro completo.',
          'Um bloco danificado ou falsificado é pedido de novo. Um ficheiro que não corresponde ao original **nunca é entregue**: fica na pasta oculta de retoma até estar correto, ou é apagado.',
        ],
      },
      {
        id: 'group-drop',
        titre: 'Group Drop',
        blocs: [
          'Um convite contém o endereço do anfitrião na rede local, a identidade do seu dispositivo (fixada), um identificador de sessão de 128 bits e um **token de 256 bits** impossível de adivinhar. O anfitrião compara o token em tempo constante.',
          'O convite **expira** (ao fim de 30 minutos, 2 horas ou 8 horas). Partilhar a ligação dá o direito de entrar: partilhe-a apenas com os participantes.',
          'A ligação de convite pode abrir em {SITE}: a parte depois de «#», que contém o convite, nunca é enviada ao nosso servidor. Fica no seu navegador.',
        ],
      },
      {
        id: 'protections',
        titre: 'As proteções, uma a uma',
        blocs: [
          {
            tableau: {
              entetes: ['Ameaça', 'Proteção'],
              lignes: [
                ['Escuta da rede', 'TLS 1.3 em cada ligação'],
                ['Usurpação de um dispositivo', 'Identidade fixada; o handshake TLS prova a posse da chave'],
                ['Envio não solicitado', 'Acordo explícito (ou dispositivo de confiança); expira ao fim de 2 minutos'],
                ['Intruso numa distribuição', 'Token de 256 bits comparado em tempo constante; convite limitado no tempo'],
                ['Ficheiro danificado ou falsificado', 'Impressão BLAKE3 de cada bloco e do ficheiro inteiro; nada é entregue antes da verificação'],
                ['Escrita fora da pasta de receção', 'Caminhos limpos à chegada («..», raízes, nomes reservados, carateres proibidos)'],
                ['Substituição de um ficheiro', 'Nunca: é escolhido um nome livre, «nome (1).ext»'],
                ['Disco cheio', 'Espaço livre verificado antes de aceitar'],
                ['Dados desmesurados', 'Mensagens limitadas; um envio está limitado a 100 000 ficheiros e 4 TiB'],
                ['Tentativas repetidas', 'Após 20 falhas num minuto, um endereço é ignorado; no máximo 128 ligações em curso'],
              ],
            },
          },
        ],
      },
      {
        id: 'cle',
        titre: 'A chave do seu dispositivo',
        blocs: [
          'A chave privada do dispositivo nunca sai dele. Está guardada na pasta de dados da app (legível apenas pela sua conta no Mac e no Linux). Se essa pasta for apagada (ao desinstalar a app de um telemóvel, por exemplo), o dispositivo recebe uma nova identidade e os seus outros dispositivos terão de voltar a confiar nele.',
        ],
      },
      {
        id: 'signaler',
        titre: 'Comunicar uma vulnerabilidade',
        blocs: [
          'Acha que encontrou uma vulnerabilidade? Escreva para {EMAIL}, com o necessário para a reproduzir. Dê-nos tempo para a corrigir antes de a tornar pública; responderemos e mantê-lo-emos informado.',
        ],
      },
    ],
  },
};
