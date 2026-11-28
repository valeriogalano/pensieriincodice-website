---
title: "Pubblicità traccianti: come fanno i banner a seguirci da un sito all'altro?"
date: Sat, 19 Jun 2021 18:37:38 +0000
tags: ["privacy", "web e internet"]
type: blog
author: Valerio Galano
episode: 61
curated_by: Engram
generated_with: gpt-6.2-sol
---

Se bene o male siete utilizzatori abituali del Web, avrete sicuramente notato che, quando navighiamo tra un sito e l'altro, sembra quasi che gli annunci pubblicitari ci seguano.

Cerchiamo un modello di frullatore che ci interessa su Google e, il giorno dopo, Instagram ci propone post sponsorizzati di vari frullatori.

Ci colleghiamo ad un sito di una marca di smartphone o di televisori e la nostra navigazione per le prossime settimane sarà costellata di offerte di smartphone e televisori. Questo su Amazon, su eBay, ma non solo: anche sui siti di informazione o sui social network.

Addirittura, capita che quando leggiamo una mail che parla di certi argomenti, che so, il fumo o il cibo, utilizzando la nostra webmail preferita, poi ci ritroviamo inondati da banner di sigarette elettroniche e siti di ricette.

Questo accade perché i rivenditori di prodotti o servizi acquistano un particolare tipo di spazi pubblicitari che esistono solo online e che sono in grado di seguirci nel nostro percorso di navigazione.

Sono comunemente chiamati pubblicità traccianti e funzionano più o meno in questo modo: identificano l'utente che sta visitando il sito e, in base alla sua cronologia di navigazione, gli propongono la pubblicità che un certo algoritmo ritiene che possa interessargli di più.

Di solito questo algoritmo è anche abbastanza banale, del tipo: se l'utente ha visto un tipo di prodotto, glielo ripropone a ripetizione per un certo numero di giorni.

Se, quindi, navighiamo spesso su siti di tecnologia, i contenuti sponsorizzati che ci verranno proposti saranno per la stragrande maggioranza tecnologici. Se siamo assidui utenti di siti di ricette, le pubblicità per noi mostreranno prodotti da cucina, e così via.

Ma come funziona tutto questo sistema dal punto di vista tecnico? Certamente i network pubblicitari non possono accedere alla cronologia archiviata nel nostro browser, eppure questi sono in qualche modo in grado di conoscerla.

Essi utilizzano una serie di tecniche, di trucchi tecnologici, potremmo dire, per seguire gli utenti nella loro navigazione e ricostruire questo tipo di informazioni anche senza accedervi direttamente.

Vediamo come funzionano, tecnicamente, le pubblicità traccianti, come le agenzie pubblicitarie riescano a conoscere, in modo inquietantemente preciso, i siti che visitiamo e come arginare l'invasività di questa pratica.

## Come funzionano i cookie

Probabilmente, quando si parla di pubblicità su Internet, tutti abbiamo sentito parlare di cookie.

Banner che chiedono di accettare o rifiutare i cookie, opzioni di cancellazione dei cookie, ma, in effetti, cosa sono questi cookie?

In generale, un cookie è un meccanismo che permette ad un server Web di archiviare informazioni all'interno del browser installato sul computer dell'utente.

In pratica, quando un utente visita un sito Web, il server può allegare alla pagina, o ad altri elementi inviati al browser dell'utente, anche uno o più cookie.

[Questi cookie](https://www.w3schools.com/php/php_cookies.asp) hanno un nome che li identifica, contengono un valore che corrisponde all'informazione che il server desidera archiviare, hanno poi una durata e un dominio.

Quando un browser recepisce un cookie da un sito, lo archivia per la durata di tempo specificata e, ogni volta che l'utente visita nuovamente il dominio specificato nel cookie, questo viene allegato alla richiesta.

Si tratta di un meccanismo perfettamente lecito e molto utile per vari scopi.

Ad esempio, i cookie permettono il funzionamento delle sessioni, quindi rendono possibile il fatto che ci si possa autenticare presso un sito per accedere ad una sezione privata. È una pratica praticamente alla base del Web.

Oppure permettono di memorizzare alcune impostazioni degli utenti, rendendo la navigazione più semplice e comoda. Paradossalmente, il fatto stesso che il banner di accettazione dei cookie ci compaia solo la prima volta che accediamo al sito è reso possibile dalla memorizzazione di un'informazione in un cookie.

Noi clicchiamo sul pulsante «accetta» o «rifiuta» e così scegliamo di accettare o rifiutare i cookie pubblicitari, ma spesso è proprio in un cookie definito tecnico che questa nostra risposta viene memorizzata.

Questo meccanismo, però, rende possibili quelle che sono le pubblicità traccianti, grazie ad un utilizzo molto particolare che viene comunemente chiamato [cookie di terza parte](https://www.safervpn.com/blog/tracking-cookies/).

Quando una pagina Web viene visualizzata nel nostro browser, i vari elementi di cui è composta vengono tutti trasferiti dai rispettivi server al computer dell'utente.

Quando un sito aderisce ad un network pubblicitario, inserisce in tutte le proprie pagine almeno un elemento che si trova su uno dei server del network.

In questo modo, quando noi visitiamo una pagina, oltre a scaricare tutti gli elementi utili per vedere il contenuto che ci interessa, scarichiamo anche questo elemento pubblicitario da un server differente da quello del sito su cui ci troviamo.

Molto spesso, questo elemento *tracciante* è un banner pubblicitario o un widget, come il pulsante like di Facebook o il blocchetto «ultimi tweet» o «ultime foto» di Instagram. Insieme a questo elemento, il server ci invia anche uno o più cookie che contengono una stringa di informazione generata apposta per noi.

Essendo il cookie collegato al dominio, quando ci spostiamo su un altro sito che appartiene allo stesso circuito pubblicitario, le pagine che visiteremo conterranno elementi traccianti che faranno riferimento al circuito e saranno quindi ospitati dagli stessi domini degli elementi traccianti del sito precedente.

Per questo motivo le richieste a questi elementi verranno automaticamente effettuate allegando i cookie ricevuti in precedenza che contengono la nostra stringa identificativa.

Proviamo a capire meglio tutto il processo con un esempio. Immaginiamo di avere una mezz'ora libera per navigare un po' in libertà sul Web.

Come prima cosa ci colleghiamo al nostro sito di ricette preferito per trovare ispirazione su cosa cucinare a pranzo.

Navigando tra le pagine del sito, il nostro browser riceverà tutta una serie di elementi: testo, immagini, stili di formattazione e UN PAIO DI BANNER PUBBLICITARI.

Mentre il testo e le immagini delle notizie arrivano dal server del sito che stiamo visitando, i due banner arriveranno invece dal server del network pubblicitario e porteranno con sé uno o due cookie identificativi appositamente creati per noi.

Nel frattempo, il server del network avrà memorizzato nel suo archivio che quel cookie, proprio quello inviato a noi, è partito dal sito di ricette.

Una volta deciso cosa cucinare, facciamo un giro su un sito di abbigliamento perché vogliamo controllare se sono già iniziati i saldi.

Anche qui vediamo comparire un banner pubblicitario in testa al sito e anche questo arriva in realtà dal sito del network, solo che, questa volta, quando il nostro browser ha effettuato la richiesta, aveva un cookie memorizzato e quindi lo ha allegato a tale richiesta.

Il server del network ci risponderà sempre con un banner pubblicitario e con un cookie su misura per noi, ma questa volta, avendo ricevuto anche un cookie con la richiesta, memorizzerà nei propri archivi che l'utente in possesso del cookie creato pochi minuti fa per il sito di ricette ora lo ha inviato indietro partendo da un sito di abbigliamento.

Infine, ci colleghiamo al sito del nostro quotidiano preferito (scegliete quello che volete, tanto, a parte un paio, i quotidiani italiani online sono affiliati praticamente a tutti i network pubblicitari) e leggiamo un po' di notizie.

Anche qui le pagine conterranno richieste a banner del network pubblicitario. Le richieste verranno effettuate dal nostro browser allegando i cookie ricevuti in precedenza e anche qui il network potrà annotarsi l'informazione che ora l'utente in possesso di quel cookie sta visitando un sito di news.

Ovviamente questo è un esempio semplificato. Ho parlato di siti, ma il network riceve chiamate dal nostro browser ad ogni pagina che visitiamo di ogni sito che fa parte del network. Quindi non solo sa quali siti visitiamo, ma sa anche, in modo molto granulare, quali pagine del sito visitiamo.

In questo modo, i vari siti affiliati al network pubblicitario saranno in grado di riconoscerci ogni volta che ci colleghiamo ad uno di essi e, unendo le informazioni, riusciranno a ricostruire gran parte della nostra attività sul Web.

A questo punto, non resta loro che creare un profilo dei nostri interessi e, ad ogni visita, acquisire un'informazione in più da noi e contemporaneamente proporci dei banner pubblicitari che riguardano quelli che secondo loro sono i nostri interessi.

In effetti, con questo meccanismo, non è nemmeno necessario che ci appaia la pubblicità per essere tracciati.

Ad esempio, i social network possono tracciarci attraverso elementi funzionali nelle pagine che non sono banner, come il pulsante like, i commenti, i widget.

Il tracciamento può avvenire anche attraverso elementi completamente invisibili all'utente. Se, ad esempio, un sito implementa gli strumenti di Google Analytics o i Google Fonts recuperandoli direttamente dai server di Google, allora il tracciamento sarà automatico, anche se magari il sito non espone banner pubblicitari.

Oppure, addirittura, esistono elementi il cui unico scopo è il tracciamento: Facebook, ad esempio, utilizza il cosiddetto Pixel che non è visibile e non genera altro che un cookie di tracciamento.

## I cookie di terze parti e il browser fingerprint

In Europa, i cookie di terze parti sono regolamentati da [specifiche normative](https://www.garanteprivacy.it/cookie) che impongono ai siti di avvisare gli utenti di quali cookie verranno installati nei loro computer e di permettere loro di opporsi a tale installazione, a meno che non si parli di cookie tecnici indispensabili per il funzionamento del sito stesso.

Allo stesso tempo, molti browser implementano direttamente delle protezioni che impediscono l'installazione di questi cookie di terze parti o, in ogni caso, esistono delle estensioni che è possibile installare per questo scopo.

Il proliferare di questi sistemi di difesa, nel corso del tempo, ha portato ovviamente ad una diminuzione nell'efficacia dei metodi di tracciamento.

Se sempre più spesso gli utenti rifiutano il tracciamento o utilizzano strumenti che bloccano direttamente la condivisione di cookie con siti esterni rispetto a quelli che stanno visitando, per i network diventa difficile tracciare gli spostamenti e ricostruire la cronologia.

Per questo motivo, con il tempo, questi colossi della pubblicità hanno iniziato ad utilizzare un altro metodo di tracciamento degli utenti basato sul concetto di [browser fingerprint](https://coveryourtracks.eff.org/learn).

L'idea, anche in questo caso, non è particolarmente complicata e si basa su di un concetto abbastanza logico. Visto che gli utenti si rifiutano di accettare dai network l'installazione di un codice identificativo, serve un modo differente per identificarli.

Il [cookie tracciante](https://privacy.net/stop-cookies-tracking/) svolge semplicemente il ruolo di matricola o di targa. Il network sa che quel particolare cookie appartiene sempre e solo a quel particolare browser.

Se quindi non può installare il cookie, gli basta trovare un altro modo per essere sicuro di riconoscere ogni singolo browser e, paradossalmente, questa identificazione si è rivelata meno complicata di quanto potesse sembrare.

Ogni browser, infatti, condivide una quantità enorme di informazioni con il server del sito che visita, e ciò è dovuto al fatto che queste informazioni sono utili al fine di migliorare le comunicazioni e l'esperienza utente.

Caratteristiche dell'hardware, tipologie di comunicazione che è in grado di supportare, risoluzione dello schermo, font installati, protocolli accettati e versione del motore di rendering sono solo alcune delle informazioni che il browser conosce e che condivide per necessità o che addirittura vengono lette da speciali pezzetti di codice inseriti nelle pagine.

Prese singolarmente, tutte queste informazioni sarebbero abbastanza comuni fra tanti utenti e tanti browser, ma, messe tutte insieme, vanno a formare una vera e propria etichetta univoca che può essere utilizzata con buonissima approssimazione per l'identificazione dell'utente. Come una fingerprint, appunto, un'impronta digitale.

Grazie a questa nuova modalità di identificazione, quanto abbiamo detto prima a proposito dei cookie traccianti si può ripetere esattamente anche per il fingerprint. L'unica differenza è appunto nell'etichetta usata per marchiare il povero utente che vorrebbe solo navigare in tranquillità.

Fortunatamente, alcuni browser riescono ad implementare sistemi di offuscamento anche per la fingerprint, facendo apparire il browser come diverso ad ogni contatto con il server.

Questo meccanismo di offuscamento non è affatto banale e si basa sulla generazione casuale di tutta una serie di parametri e informazioni utilizzati normalmente per il tracciamento.

Cambiando queste informazioni di pagina in pagina, il browser mette in crisi gli script di tracciamento che non riescono ad associare la fingerprint attuale a quella precedente.

In questo modo, gli archivi dei network non riescono a ricostruire la cronologia di navigazione dell'utente, ma si trovano solo con una lunghissima serie di accessi scollegati fra loro.

## FLOC e tracciamento sui dispositivi mobili

Alla continua ricerca di metodi per tracciare, negli ultimi mesi Google, il cui business si basa in larghissima parte sul tracciamento degli utenti della rete, ha implementato un nuovo meccanismo chiamato [FLOC](https://plausible.io/blog/google-floc). In italiano, spesso se ne parla come del meccanismo delle COORTI.

Onestamente pensavo di non parlarne perché non mi è sembrato nulla di eccezionale, se non un semplice tentativo di far valere il proprio monopolio su un mondo che sta cambiando, ma poi ho deciso che valesse la pena accennarvi, se non altro per sapere come difendersi.

Il sistema delle coorti è molto semplice: si traccia direttamente nel browser la cronologia di tutti gli utenti che lo utilizzano.

Scrivi `www.amazon.it` nella barra dell'indirizzo e Google riceve una notifica dal browser. Clicchi sulla categoria giardinaggio e di nuovo il browser notifica la cosa a Google, e così via per qualsiasi sito o pagina.

Ovviamente Google può fare una cosa del genere solo con il browser su cui ha pieno controllo, e cioè Google Chrome. Ad essere onesti, non so se altri browser esistenti hanno accettato di aderire al programma FLOC.

Come per i metodi precedentemente descritti, si tratta, a mio parere, di un'intromissione ingiustificata nella privacy degli utenti, ma, a differenza dei cookie e del fingerprint, che almeno sono interessanti dal punto di vista tecnico, questo sistema delle COORTI mi sembra semplicemente un trucchetto reso possibile dal fatto che il browser Chrome è attualmente molto diffuso.

Al contrario dei sistemi di tracciamento precedenti, infatti, per sottrarsi all'occhio del FLOC, basta smettere di utilizzare Chrome. In ogni caso vi consiglio caldamente di farlo. Esistono moltissime alternative, quasi tutte migliori dal punto di vista del rispetto dell'utente.

Se infine vi steste chiedendo come avvenga il [tracciamento sui dispositivi mobili](https://www.finjanmobile.com/mobile-device-ad-tracking/), come smartphone e tablet, anche in questo caso la risposta è molto più semplice di quanto possa sembrare.

Ogni dispositivo implementa un proprio codice identificativo che permette a tutti i network e i gestori delle app di seguirvi attraverso la navigazione e le varie attività online.

Il concetto è un po' quello del FLOC, solo che negli smartphone, Android o iPhone che siano, è implementato appositamente. Purtroppo, a differenza dei browser, che sono molti e molto differenti fra loro, per gli smartphone e i tablet la scelta di cambiare e affidarsi a qualcuno che non tracci l'utente è molto meno praticabile.

## Come difendersi dal tracciamento

Non ho parlato del perché è importante non farsi tracciare, ma per questo vi invito a recuperare il podcast Dataknightmare, che ha sviscerato per bene l'argomento.

Se invece non lo avete ancora fatto, vi consiglio di prendere al più presto provvedimenti contro il tracking.

Potete testare la privacy del vostro browser con [questo strumento](https://d3ward.github.io/toolz/src/adblock) o [quest'altro](https://coveryourtracks.eff.org/). In caso non totalizziate il punteggio massimo, vi consiglio di installare il [browser Brave](https://brave.com/). Io lo uso da un po' e devo dire che è veramente ottimo e sicuro. Implementa più o meno le stesse funzionalità di Google Chrome ma con una particolare attenzione alla privacy.

In più ha anche un interessante programma di reward che blocca la pubblicità e, se volete, la sostituisce con altri banner non traccianti e vi ricompensa per guardarla regalandovi dei BAT, una loro criptovaluta. Una volta ottenuti dei BAT, potete poi conservarli per voi o usarli per fare piccole donazioni a creatori convenzionati, ad esempio su Twitter, YouTube o altri siti Web.

Infine, se siete curiosi di sapere quanti siti e network pubblicitari vi tracciano, vi consiglio di provare l'estensione [Lightbeam per Firefox](https://addons.mozilla.org/en-US/firefox/addon/lightbeam-3-0/) che vi costruisce un grafico dei siti di terze parti visitati.

La installate, navigate per qualche giorno e poi la aprite per scoprire quanti siti vi stanno tracciando: vi assicuro che resterete sbalorditi.
