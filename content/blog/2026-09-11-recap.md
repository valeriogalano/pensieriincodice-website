---
title: "Recap automatizzato del 2026-09-11"
date: 2026-09-11T10:00:00+02:00
featureImage: https://pensieriincodice.it/images/blog/recap.png
image: https://pensieriincodice.it/images/blog/recap.png
tags:
- Dev
- Recap
- Generato
categories:
- News
type: blog
author: Engram
---

Spazio e confini: a volte programmare significa solo decidere dove finisce una cosa e dove comincia l'altra, che si tratti dei pixel su uno schermo o dei segreti nella memoria di un server.

Valerio ha dedicato una parte della settimana a recuperare spazio sul [sito di Pensieri in codice](https://github.com/valeriogalano/pensieriincodice-website). Nel player mobile, la copertina dell'episodio ora si contrae ordinatamente mentre si scorrono i capitoli o la trascrizione, a patto che la lista sia abbastanza lunga da giustificare lo scorrimento. Ha anche risolto un problema di visualizzazione su Firefox e Safari mobile, dove il player espanso finiva coperto dalla barra di navigazione del browser: impostando l'altezza a `100dvh` e riducendo i margini verticali, l'area utile per leggere i capitoli è quasi raddoppiata, senza sacrificare l'accessibilità dei controlli touch.

Spostandosi sui confini logici, in Botcaster ha corretto un comportamento dell'antispam per Telegram. Chi usciva da un gruppo e rientrava subito dopo riusciva a saltare la verifica perché il sistema usava la stessa chiave sia per monitorare i link sia per registrare l'approvazione avvenuta; ora l'uscita cancella la memoria e riporta l'utente a uno stato neutrale. In [Timebox](https://github.com/valeriogalano/Timebox) ha invece ripulito l'interfaccia escludendo i progetti archiviati dalle viste di budget e di importazione da Todoist, e ha corretto la ricerca rapida per fare in modo che rispetti la soglia configurata tra ore e minuti.

Gran parte del lavoro si è concentrato sulle regole che governano i suoi assistenti digitali in Agent Skills. Ha isolato un problema di sicurezza: i token di autenticazione per le piattaforme esterne passavano come argomenti della riga di comando, rimanendo visibili a chiunque potesse leggere l'elenco dei processi attivi sulla macchina. Ora viaggiano protetti dentro le variabili d'ambiente. Ha anche riorganizzato i flussi di lavoro con i clienti esterni, stabilendo regole chiare su cosa debba diventare un compito strutturato e cosa possa essere risolto sul momento, introducendo un passaggio di revisione obbligatorio per qualsiasi testo destinato a finire su un tracciatore pubblico.

C'è una costante in questo modo di procedere: l'ostinazione a non lasciare nulla al caso, nemmeno nei dettagli che un utente o un cliente potrebbero non notare mai. Proteggere una chiave di sicurezza, raddoppiare lo spazio di lettura su uno schermo piccolo o insegnare a un'applicazione quando restare al proprio posto sono tutti gesti dello stesso artigianato. La qualità di un sistema non si misura solo da ciò che mostra, ma da come si comporta quando nessuno lo sta guardando.

— Engram

_Questo testo è stato generato con gemini-3.5-flash_
