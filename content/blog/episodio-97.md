---
title: "Attacco Browser In The Browser (BITB)"
date: Sun, 24 Apr 2022 13:00:02 +0000
tags: ["sicurezza informatica"]
type: blog
author: Valerio Galano
episode: 97
curated_by: Engram
generated_with: gpt-6.2-sol
---

Sappiamo che sul Web esistono determinati pericoli a cui dobbiamo fare attenzione.

Installiamo antivirus, firewall e abbiamo tutta una serie di rituali che mettiamo in pratica: controlliamo l'indirizzo del sito e se c'è il lucchetto che ci indica che è sicuro, usiamo password complesse e sempre diverse e attiviamo sempre l'autenticazione a due fattori. O almeno dovrebbe essere così.

Ma se ciò non bastasse? Se tutte queste contromisure non fossero sufficienti? C'è un modo per bypassarle?

Sono probabilmente le domande che si è posto un ricercatore chiamato mr.d0x e alle quali, purtroppo, ha anche dato risposta affermativa.

mr.d0x, infatti, ha scovato un nuovo possibile tipo di attacco di phishing che può essere messo in pratica sfruttando i pulsanti di Single Sign On. Per intenderci, sono quei pulsantini che si trovano su alcuni siti e che permettono di autenticarsi non direttamente con user/password, ma attraverso Google, Apple, Facebook e altri provider del genere.

## Come funziona normalmente la SSO

Per capire come funziona l'[attacco Browser-in-the-Browser](https://mrd0x.com/browser-in-the-browser-phishing-attack/), dobbiamo innanzitutto rispolverare il concetto di Single Sign On.

Il succo del discorso è che, a discapito del nome altisonante, Single Sign On è, in pratica, quel meccanismo che permette di autenticarsi presso un sito Web utilizzando non le credenziali registrate presso il sito stesso, ma l'autenticazione effettuata presso un altro sito, un cosiddetto Identity Provider.

Nella pratica, questo si traduce in quei pulsanti, che vediamo spesso nei form di accesso e in quelli di registrazione, che recano etichette del tipo *Accedi con Facebook* o *Accedi con Twitter*. E questo perché in quasi tutti i casi i vari social network sono a loro volta anche Identity Provider e quindi permettono di accedere ad una miriade di altri siti senza doversi per forza registrare singolarmente a ciascuno di essi.

A scanso di equivoci, però, ci tengo a chiarire che accedere con Google o con LinkedIn o con qualsivoglia Identity Provider non vuol dire *non essere registrati* presso il sito a cui si sta accedendo. Semplicemente, è il meccanismo di Single Sign On che crea per noi un utente, lo popola con le informazioni necessarie e si preoccupa di riassociarlo alla nostra identità ogni volta che accediamo al sito. Quindi il sito in questione sa bene chi siamo e ha anche in archivio la nostra utenza, per di più collegata all'account social che abbiamo utilizzato per l'accesso.

In ogni caso, però, dal punto di vista di noi utenti, quello che accade è che, quando clicchiamo sul pulsante *accedi con* per la prima volta, si apre solitamente una finestra nella quale vengono mostrate alcune informazioni relative all'Identity Provider selezionato.

Poi, se siamo già autenticati presso il provider, ci viene mostrato, all'interno di questa finestra, un modulo di accettazione. Qualcosa del tipo: il sito X vuole utilizzare il tuo nome, cognome, indirizzo email, numero di telefono, ecc. Oppure, se non siamo ancora autenticati nemmeno presso il provider, ci viene richiesto di inserire username, password e, se l'abbiamo impostata, il codice dell'autenticazione a due fattori.

Se quindi provassimo, ad esempio, ad accedere con Facebook al sito della Pasticceria Nina, vedremmo apparire una finestra che solitamente viene chiamata popup. Se siamo già autenticati su Facebook, nella finestra Facebook ci avviserà che Pasticceria Nina vuole conoscere la nostra email e il nostro nome. Se non siamo ancora autenticati nemmeno su Facebook, nel popup vedremo comparire il modulo di accesso al social network e solo dopo esserci autenticati vedremo la schermata dei dati richiesti dalla Pasticceria Nina.

Una volta autenticati e concessa l'autorizzazione, questa finestra solitamente si chiude e noi siamo finalmente liberi di utilizzare il nostro account presso il sito che volevamo visitare. E via a comprare pasticcini.

Nel mezzo di questo processo, però, che in effetti è molto più difficile da spiegare che da utilizzare (probabilmente lo sfruttiamo tutti, anche più volte al giorno), si colloca appunto il cosiddetto attacco BitB.

## Una finestra nella finestra

mr.d0x, infatti, è ovviamente uno pseudonimo ma nasconde l'identità di un abile ricercatore nel campo della cybersecurity, che ha escogitato e descritto questo nuovo tipo di attacco. L'attacco si basa essenzialmente sull'imitare la finestra che appare dopo aver cliccato sul pulsante *accedi con*.

L'idea di fondo è questa: si costruisce un sito trappola che comprende dei moduli di registrazione e autenticazione falsi. In questi moduli si posizionano dei falsi pulsanti *Accedi con Google*, *Accedi con Facebook* e così via.

Quando l'utente clicca su uno di questi pulsanti, il sito non apre veramente una seconda finestra del browser in cui effettuare le operazioni di autorizzazione descritte sopra, bensì mostra un elemento interno alla schermata principale truccato per apparire identico in tutto e per tutto a quella che dovrebbe essere la vera finestra di popup.

Questo elemento ha esattamente l'aspetto che ci si dovrebbe aspettare. Sembra una finestra indipendente, mostra un URL che sembra valido e il lucchetto a indicare che la connessione è sicura. È persino interattivo perché permette di inserire username e password e, nei casi più sofisticati, mostra persino il messaggio che il sito è sicuro e altri indicatori che normalmente si utilizzano per verificare l'attendibilità di un sito.

Tuttavia, non è altro che un falso modulo circondato da immagini fasulle e animato da codice JavaScript.

La prima cosa che ci potrebbe venire in mente pensando di dover simulare la finestra di un browser è che le finestre non sono sempre uguali, ma cambiano a seconda del browser, del sistema operativo e delle impostazioni che si stanno utilizzando. C'è chi naviga con Chrome, chi con Firefox, ad esempio, ma i browser esistenti sono tantissimi. C'è chi utilizza Windows, macOS, Linux. Tutte queste differenze sono visibili a occhio nudo.

I browser hanno interfacce differenti fra loro. Un occhio neanche troppo allenato lo nota immediatamente. I sistemi operativi, poi, spesso impongono un certo aspetto grafico a tutte le finestre dei vari software e i browser non fanno eccezione. Una finestra di Firefox su Ubuntu apparirà diversa da una di Firefox su Windows 10. E persino le impostazioni grafiche generali influiscono sull'aspetto: l'utente utilizza il tema chiaro o quello scuro? Ha attivo l'ingrandimento dei caratteri?

Ma nonostante tutte queste variabili, la cosa sorprendente è che mr.d0x mostra anche quanto sia semplice adattare l'attacco BitB al sistema operativo, al browser e alle impostazioni che l'utente sta utilizzando. Con un po' di JavaScript, di CSS e di immagini preconfezionate, infatti, la finestra fasulla può apparire con un aspetto coerente, se non addirittura perfetto, rispetto ai software utilizzati dal malcapitato visitatore.

## Sempre di phishing si tratta

Si tratta chiaramente di un tipo di attacco non banale, che richiede conoscenze di programmazione Web e una certa quantità di lavoro. E se ti stai chiedendo il motivo per cui qualcuno dovrebbe fare tanta fatica per creare moduli di autenticazione fasulli così verosimili, beh, la risposta dovrebbe ormai essere abbastanza semplice: collezionare credenziali di tutti gli ignari utenti che cadono vittime del tranello.

Mettendo in pratica questo tipo di attacco, infatti, un criminale è in grado di accumulare credenziali su credenziali di persone che pensano erroneamente di stare inserendo la propria password in un form di Google o di Facebook o di qualsiasi Identity Provider di loro scelta.

E con una collezione del genere, le possibilità sono notevoli. Pensa solo a quanti siti hai fatto accesso con Google nella tua vita. Se un criminale riuscisse ad accedere direttamente al tuo account Google, in quanti siti riuscirebbe ad autenticarsi indisturbato impersonando te?

Il sistema, dopotutto, è semplice.

Il falso modulo di autenticazione, infatti, sfrutta la normale conoscenza degli utenti del processo di Single Sign On che ho descritto sopra.

Innanzitutto mostra la schermata di autenticazione per costringere l'utente a reinserire username e password dell'Identity Provider. Basta infatti mostrare un messaggio del tipo *la tua sessione è scaduta, per favore reinserisci username e password* oppure *inserisci le tue credenziali per dimostrarci che sei veramente tu a voler accedere a questo sito*.

Ovviamente l'utente non conosce a memoria ogni possibile richiesta che potrebbe arrivare dall'Identity Provider e quindi è portato a prendere per buoni questi comportamenti. Inserisce le credenziali e semplicemente il falso modulo le archivia da qualche parte.

## Neanche l'autenticazione a due fattori è più sufficiente

Come se non bastasse, però, è anche una tecnica di attacco ampiamente potenziabile.

Avendo il controllo del sito, che di fatto in realtà gli appartiene interamente, il criminale potrebbe, infatti, applicare tanti altri comportamenti più sofisticati.

Ad esempio, potrebbe scrivere del codice per utilizzare immediatamente le password carpite ed autenticarsi presso l'Identity Provider. In questo modo potrebbe far sì che il falso sito si comporti nel modo che ci si aspetterebbe da un sito vero, rendendolo di fatto trasparente e impedendo che l'utente riesca anche solo a capire che qualcosa non va.

Se, infatti, io provassi ad utilizzare la Single Sign On su un sito e questo, pur essendo falso, si comportasse esattamente come ci si aspetterebbe, chiedendomi la password, poi l'autorizzazione e poi mostrandomi il mio profilo appena creato, allora probabilmente farei molta fatica a rendermi conto che in realtà mi hanno rubato l'identità. Crederei semplicemente di aver acceduto all'ennesimo sito.

Oppure ancora, il malvivente potrebbe implementare anche un finto meccanismo di autenticazione a due fattori, facendo in modo che il falso sito si comporti proprio come una sorta di proxy, un passacarte verso l'Identity Provider.

E sì, anche l'autenticazione a due fattori non è sufficiente a proteggerci da questo attacco.

Nella documentazione di mr.d0x non è specificato esplicitamente questo caso, ma proviamo ad immaginare una possibile strategia per bypassare l'autenticazione a due fattori.

Immaginiamo che il sito trappola in questione permetta l'accesso via Twitter. Ottimo, noi siamo iscritti a Twitter.

Clicchiamo quindi sul pulsante *Accedi con Twitter* e ci si apre una finestra con scritto *per confermare di voler accedere al sito, per favore inserisci username e password*.

*Strano*, pensiamo, ma in effetti ci ricordiamo anche che l'ultima volta che abbiamo inserito la password su Twitter è stata nel 2020 in occasione delle presidenziali americane, quindi magari ci sta che ogni tanto il sito chieda una conferma. Quindi le inseriamo e basta.

Il modulo fasullo, quindi, archivia le nostre credenziali e poi fa anche immediatamente un tentativo di utilizzarle. In automatico. Scopre così che abbiamo l'autenticazione a due fattori e non si può accedere così facilmente al nostro account.

Allora? Niente di più semplice: l'algoritmo trappola utilizza la funzione di Twitter per farci inviare il PIN di sblocco e contemporaneamente ci mostra una schermata che simula la richiesta del secondo fattore di autenticazione.

*Salve utente, sul tuo profilo è impostata l'autenticazione a due fattori. Ti abbiamo appena mandato il PIN. Inseriscilo qui per dimostrare che sei il proprietario dell'account*.

Noi riceviamo il PIN via SMS o email, o lo andiamo a recuperare sulla nostra app di autenticazione e lo inseriamo, convinti di stare facendo un'operazione perfettamente normale.

Il sito falso ora ha anche il nostro PIN e lo utilizza per completare l'autenticazione, autorizzare un suo dispositivo e conservare tutti i dati necessari per l'accesso.

Nella schermata in cui noi abbiamo inserito il PIN ci compare un messaggio del tipo *complimenti, ti sei autenticato* e la simulazione va avanti come descritto sopra.

Siamo stati raggirati e nemmeno lo sappiamo.

## Come difendersi

Ma quindi questo attacco è impossibile da evitare?

Grazie ad esso, l'indirizzo Web mostrato può essere falsificato. Neanche il controllo del lucchetto che indica che il sito è sicuro è più sufficiente, perché il lucchetto può essere emulato graficamente. Persino l'autenticazione a due fattori, che fino a poco tempo fa sembrava essere l'unico baluardo contro il furto di credenziali, si rivela essere non più inattaccabile.

Dobbiamo proprio considerarci privi di difese? Beh, in effetti no.

Come dico sempre, il primo antivirus ce l'abbiamo nella testa ed è il nostro cervello. Conoscere un pericolo ci permette anche di prestarvi la dovuta attenzione e mettere in campo le possibili contromisure.

Dunque, dobbiamo innanzitutto considerare una cosa, e cioè che tra la finestra reale del browser e quella creata tramite l'attacco Browser-in-the-Browser c'è un'enorme differenza e questa non può essere in alcun modo colmata né con il codice né con la grafica. La finestra reale, infatti, è separata dalla finestra del browser, mentre quella falsa sembra separata ma in realtà è interna alla pagina Web.

E cosa vuol dire questo? Semplicemente che la finestra vera può essere trascinata fuori dal sito, mentre quella falsa no.

Quindi, per verificare se siamo sotto attacco BitB ci basta semplicemente rimpicciolire la finestra del sito e provare a trascinare la finestra di popup di autenticazione in giro per lo schermo. Se questa si muove e se riesce a superare il bordo del browser, allora si tratta di una vera finestra, i cui elementi non possono essere falsificati e della quale, se indirizzo e lucchetto si mostrano sicuri, ci possiamo fidare.

Al contrario, se siamo vittime di un attacco BitB, la finestra si muoverà fino al bordo del browser e al massimo scomparirà parzialmente se tentiamo di farle superare tale limite.

Si tratta di un controllo semplice ed efficace.

In più, sembra che stiano già nascendo delle estensioni per i vari browser che permettono di identificare attacchi di questo tipo. Onestamente non ho studiato come funzionano, ma ho visto che ne esiste [una suggerita dallo stesso mr.d0x](https://github.com/odacavo/enhanced-iframe-protection).
