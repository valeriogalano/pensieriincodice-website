---
title: "Attacco pre-hijacking: rubare account che ancora non esistono"
date: Sun, 05 Jun 2022 16:15:02 +0000
tags: ["sicurezza informatica"]
type: blog
author: Valerio Galano
episode: 103
curated_by: Engram
generated_with: gpt-6.2-sol
---

La sicurezza degli account online è ormai un argomento abbastanza conosciuto.

La pratica di tenere al sicuro le password, i dati, i dispositivi sta iniziando a diventare sempre più di uso comune.

Sempre più utenti utilizzano i password manager e le piattaforme implementano meccanismi sempre più sicuri per i processi di autenticazione.

Ma c'è un aspetto che purtroppo ancora si tende a sottovalutare. È una fase del rapporto tra utente e piattaforma che, sì, si verifica una sola volta per utente, ma è comunque un momento fondamentale per la sua sicurezza.

Mi riferisco al processo di registrazione e in particolare alla protezione degli account ancor prima che questi vengano creati.

Si tratta di falle in servizi online diffusissimi, di account che ancora non esistono e di come proteggerli dai criminali.

L'attacco si chiama account pre-hijacking.

## Uno studio interessante

Sì, lo so, ultimamente mi sono un po' fissato sul tema degli attacchi informatici, ma trovo che alcuni di essi siano particolarmente interessanti per l'ingegno che serve ad escogitarli e mi piace capirne i meccanismi, le caratteristiche e soprattutto le idee che hanno portato alla loro creazione.

E qualche giorno fa mi è capitato per le mani [uno studio molto interessante](https://arxiv.org/pdf/2205.10174.pdf), condotto da due ricercatori di nome Sudhodanan e Paverd, che prendeva in esame i problemi di sicurezza riguardanti i processi di creazione degli account su vari servizi online.

Questi due ricercatori, rispettivamente un indipendente e un membro del Microsoft Security Response Center, hanno analizzato 75 tra le più popolari piattaforme di servizi online ed hanno scoperto che almeno 35 fra queste risultavano vulnerabili a quello che loro hanno definito pre-hijacking accounts attack.

In pratica, questo vuol dire che per 35 dei 75 siti analizzati è possibile, per un malintenzionato, mettere a segno un tipo di attacco alla piattaforma che prenda di mira uno specifico account che su quella piattaforma ancora non esiste, ma che gli permetterà poi, se dovesse realmente esistere, di prenderne possesso.

Una volta che l'account verrà effettivamente creato dal legittimo proprietario, infatti, grazie a questo attacco preventivo, il criminale potrà attuare il cosiddetto account hijacking, cioè introdursi nel profilo compromesso e sottrarre informazioni o a volte addirittura compiere operazioni sfruttando l'identità del malcapitato.

## Struttura dell'attacco

A prima vista sembra una cosa impossibile. Come si fa a crackare qualcosa che ancora non esiste? Fatto sta che questa tipologia di attacco è reale e in vari casi non sembra nemmeno così difficile da mettere in atto, visto che la vulnerabilità sembra essere abbastanza diffusa anche tra i big.

Chiaramente, le piattaforme oggetto dello studio sono state preventivamente avvertite e hanno avuto modo di correggere le loro vulnerabilità. Ma parlando in generale, l'attacco si struttura in 3 fasi ben distinte.

Nella prima, l'attaccante svolge essenzialmente un'attività preparatoria. Questa può cambiare leggermente a seconda della particolare declinazione dell'attacco, ma in linea di principio si tratta di creare un account su di una specifica piattaforma e, nel farlo, utilizzare non il proprio identificativo ma quello della vittima.

Per capirci, immaginiamo che sia sbarcata da poco in Italia una nuova piattaforma di ecommerce che chiameremo Scontissimo. Se io volessi attaccare te su Scontissimo, in questa prima fase andrei ad aprire un nuovo account sulla piattaforma utilizzando il tuo indirizzo email.

Chiaramente, per poterlo fare occorre che io sia a conoscenza del tuo indirizzo email e che tu non sia già registrato su Scontissimo, ma queste sono entrambe condizioni non troppo difficili da soddisfare.

A questo punto, non dovrei far altro che attendere che sia l'utente, cioè tu, a completare la seconda fase, cioè a iscriverti realmente al servizio.

Magari, dopo qualche mese dall'uscita, trovi un prodotto che ti interessa su Scontissimo e decidi di creare il tuo account per acquistarlo. E nel farlo, utilizzi ovviamente la tua email, la stessa che io ho già utilizzato tempo addietro.

E finalmente io potrò mettere in pratica la terza fase, cioè entrare nel tuo nuovo account e, a seconda dei casi, sottrarti informazioni, magari denaro o addirittura prendere il controllo completo del tuo profilo.

## Punti deboli

Sudhodanan e Paverd hanno individuato 5 categorie di pre-hijacking attack. Ma il punto è che un attacco del genere non dovrebbe teoricamente essere possibile.

Primo perché l'account non esiste e quindi non ci sarebbe in teoria niente da crackare.

E poi perché i processi di registrazione sono solitamente muniti di alcuni meccanismi di sicurezza che ne impediscono l'utilizzo in modi differenti da quelli per cui sono stati progettati.

Purtroppo, però, anche quando questi controlli sono presenti, non sempre risultano sufficienti a contrastare gli attacchi di pre-hijacking.

Una serie di funzionalità, infatti, come la Single Sign On, la possibilità di utilizzare un account prima della conferma dell'identificativo, il reset della password, il cambio dell'email e altre caratteristiche del genere, perfettamente lecite se prese singolarmente, nell'insieme possono portare a falle nei processi di registrazione che permettono attacchi di questo tipo.

## Classic-federated merge attack

Ad esempio, una variante che i ricercatori hanno chiamato classic-federated merge attack si basa proprio sui meccanismi di autenticazione federati, di cui fanno parte Single Sign On e simili.

In due parole, la SSO è quel tipo di autenticazione che ci permette di accedere ad un sito utilizzando non direttamente la nostra username e password, ma l'identità registrata presso un altro sito o servizio che prende il nome di Identity Provider.

In pratica, la usiamo ogni volta che clicchiamo su quei pulsanti *accedi con Google* o *accedi con Facebook* e così via. E nel classic-federated merge attack la SSO fa proprio da perno dell'attacco.

Nella prima fase, infatti, l'attaccante si collega alla piattaforma scelta e crea un account utilizzando l'identificativo della vittima, di solito l'indirizzo email.

La piattaforma in questione, allora, con estrema probabilità invia un'email alla vittima, una di quelle email in cui c'è scritto qualcosa del tipo *Benvenuto, clicca qui per confermare il tuo nuovo account*.

Ma la vittima, con altrettante probabilità, ignora questo messaggio e lo battezza come spam. D'altronde, anche io, se mi vedessi arrivare una mail di benvenuto senza essermi iscritto ad alcun servizio, magari penserei ad un tentativo di phishing.

Al tempo stesso, però, l'attaccante, che non ha veramente accesso alla mail della vittima, non potrà confermare l'account. L'unica cosa che può fare, sempre se la piattaforma effettivamente lo permette, è autenticarsi e mantenere attiva la sessione dell'account appena creato, obiettivo che si può facilmente raggiungere utilizzando qualche script automatico. Intanto deve solo restare in attesa che la vittima completi la seconda fase.

E in cosa consiste questa seconda fase? Nella registrazione al sito in questione, ma non con il processo classico, bensì tramite Single Sign On o autenticazione federata.

Dopo qualche tempo, infatti, la vittima potrebbe decidere di voler utilizzare veramente il servizio e nel farlo potrebbe voler usare la sua autenticazione di Twitter o di Facebook, che viene sempre comoda.

A quel punto, dopo aver cliccato su *accedi con Twitter*, il sito genera un account utilizzando l'identificativo della vittima ricevuto da Twitter, ma siccome trova già un account parzialmente creato dall'attaccante con quello stesso identificativo, cioè con la stessa email, li unisce in un unico profilo, dando per scontato di stare comunicando con lo stesso utente.

Si tratta di un meccanismo abbastanza comune nelle login federate. L'Identity Provider conosce l'identificativo che l'utente utilizza normalmente, nel nostro caso l'email, e lo comunica al sito presso il quale sta effettuando la registrazione.

Il sito, a sua volta, se già possiede nei suoi archivi un account con quell'indirizzo email, dà per scontato che si tratti dello stesso utente e di conseguenza collega le due identità.

La terza fase consisterà, dunque, per il criminale, semplicemente nel recuperare quella sessione mantenuta attiva e utilizzarla per accedere indisturbato al nuovo account appena creato dal legittimo proprietario.

Sia attaccante che vittima possono ora utilizzare lo stesso account contemporaneamente e pertanto il criminale può non solo accedere a informazioni, messaggi e quanto altro contenuto nel profilo, ma addirittura anche eseguire operazioni attive. Se lo ritiene necessario, può modificare i dati, inviare messaggi, fare tutto quello che può fare il legittimo proprietario.

Una variante di questo attacco, poi, potrebbe essere chiaramente messa in atto all'inverso. Nello studio è denominata federated-classic merge attack, invece di classic-federated.

In questa variante, il criminale utilizza l'identificativo della vittima per aprire un account presso un Identity Provider e poi sfrutta questo per la fase uno, per aprire parzialmente un account tramite autenticazione federata.

Quando poi la vittima utilizza la registrazione classica con username e password per aprire l'account legittimo, l'effetto è sostanzialmente lo stesso descritto fino ad ora, semplicemente con la differenza che gli strumenti sono utilizzati alla rovescia.

## Unexpired session attack

Un'altra tipologia interessante di pre-hijacking attack è invece l'Unexpired session attack.

In questa categoria, l'attaccante crea sempre un nuovo account sulla piattaforma prescelta utilizzando sempre l'indirizzo email della vittima. Poi, allo stesso modo dell'attacco precedente, si autentica e mantiene la sessione attiva.

Quando il malcapitato, vittima dell'attacco, vorrà poi creare il proprio account, utilizzando la propria email e la propria password stavolta, troverà che stranamente un account con la sua email già esiste.

Ora potrebbe insospettirsi, è chiaro, ma potrebbe anche non farci caso. Magari è iscritto a centinaia di servizi e gli è già capitato di non ricordare di essere iscritto ad uno in particolare. Chissà quando, ma forse gli sembra di ricordare di aver già utilizzato questo servizio in passato e forse avrà dovuto creare un account al volo che avrà dimenticato.

Vabbè, nessun problema, tanto c'è l'opzione di recupero password. E così la vittima ignara recupera la password e inizia ad utilizzare il suo nuovo account, che crede vecchio ma che in realtà è stato creato da qualcun altro.

Nel frattempo, l'attaccante, che ha mantenuto attiva la famosa sessione per tutto questo tempo, a questo punto ha via libera e può tranquillamente girovagare indisturbato per il profilo che la vittima ha appena confermato.

## Condizioni

Ci sono altre 3 varianti sul tema nello [studio di Sudhodanan e Paverd](https://arxiv.org/pdf/2205.10174.pdf). Il concetto generale dovrebbe essere più o meno chiaro: è possibile, in certi casi e su certe piattaforme, avviare degli attacchi nei confronti di utenze che ancora non esistono, aspettare che queste si concretizzino e completare l'attacco solo successivamente.

Una cosa fondamentale da capire, però, è che non tutti i siti sono vulnerabili a questo pre-hijacking.

Alcune delle varianti descritte nel paper necessitano di particolari condizioni: ad esempio che la piattaforma permetta di autenticarsi senza aver confermato l'indirizzo email oppure che sia possibile collegare un account federato con uno normale non ancora confermato.

In altri casi, invece, è necessario che il sito non invii avvisi ai propri utenti in caso di particolari eventi oppure è semplicemente sufficiente che questi li ignorino perché li considerano troppo strani o tentativi di phishing.

Casi non sempre comunissimi, c'è da ammetterlo, ma nemmeno così rari, come dimostra il fatto che ben 35 servizi online sui 75 analizzati siano risultati vulnerabili. È quasi il 50% e tra questi ci sono nomi importanti come Dropbox, Instagram, LinkedIn, WordPress.com, Zoom.

## Applicazione su larga scala

Un attacco di questo genere, poi, può essere applicato su ampia scala. Per un attaccante, si tratta solo di scovare una piattaforma vulnerabile e una lista di indirizzi email di utenti che con buona probabilità si iscriveranno a tale piattaforma in un periodo di tempo ragionevole.

Questa ti potrà sembrare una cosa difficile, ma in realtà non lo è.

Indirizzi email se ne trovano a bizzeffe. Basta fare scraping su qualche sito come LinkedIn o procurarsi grossi database frutto di data breach o operazioni ransomware. Quelli che *vabbè, ma in fondo che problema c'è se hanno sottratto un po' di email?* Eccolo, uno dei problemi.

Quanto alle piattaforme, non è poi così complicato individuare un sito o un social che magari è in forte crescita in un certo periodo, o che sta per sbarcare su un nuovo mercato. Si possono anche reperire informazioni su grossi enti, società o istituzioni che stanno per effettuare adozioni di massa di un certo servizio online.

## Mitigazione

Purtroppo, la possibilità di mitigare il pre-hijacking attack è quasi totalmente nelle mani dei gestori delle piattaforme.

O la piattaforma è sicura, cioè impedisce tutte le condizioni descritte e altre simili, oppure ci sono solo poche piccole accortezze che noi utenti possiamo mettere in pratica.

## Mitigazione per noi utenti

Però, ad esempio, possiamo cercare di fare attenzione alle email che riceviamo. Spesso le piattaforme inviano messaggi di benvenuto, di avviso di login da nuovi dispositivi, di richiesta di reset della password. Anche se non riconosciamo il servizio, potremmo fermarci un secondo a verificare e, se l'email è autentica, cioè non è phishing, segnalare che non abbiamo creato alcun account per quel servizio.

Oppure, se stiamo creando un nuovo account e ci troviamo costretti a resettare la password perché questo esiste già, magari entriamo e disconnettiamo tutte le sessioni. Altrimenti chiediamoci quando abbiamo creato l'account e che ci abbiamo fatto effettivamente. Nulla? Non riusciamo proprio a ricordare? Beh, allora magari cancelliamolo e creiamone un altro con un'email diversa. Alla fine si tratta di perdere 5 minuti.

Ancora, potremmo darci la regola di non registrarci mai a nessun servizio attraverso l'autenticazione federata, qualsiasi sia il Service Provider. In questo modo taglieremmo già fuori un bel po' di superficie d'attacco.

In generale, però, cerchiamo di prediligere i servizi che ci bombardano di verifiche, siano esse email, pin, autenticazioni a due fattori. Sono noiose, lo so, ma sono per la nostra sicurezza.

## Cause

È proprio questa una delle cause principali per le quali si vengono a creare le condizioni per un pre-hijacking account attack: la riduzione della cosiddetta frizione di utilizzo da parte dell'utente.

Meccanismi come la Single Sign On, la possibilità di utilizzare l'account ancor prima di averlo confermato, la scarsità di verifiche in generale servono proprio per ridurre la frizione tra utente e piattaforma.

È chiaro che se devo fare meno operazioni per diventare un utente, allora è più facile che io diventi un utente, cosa che si trasforma banalmente in più utenti felici per la piattaforma.

Ma tutto questo apre falle di sicurezza che, se sfruttate, possono portare a conseguenze piuttosto gravi per tutti.

Per forza di cose le piattaforme, per ridurre la frizione, riducono la quantità di verifiche necessarie ad accertarsi che l'utilizzatore sia anche il vero proprietario dell'identificativo, e questo apre delle finestre di vulnerabilità che restano aperte fintanto che alcune procedure non vengono completate: il clic su un link in un'email, l'inserimento di un codice inviato tramite canale secondario, la cancellazione automatica di un account mai attivato dopo un tot di tempo.

Non costringendoci a completare queste verifiche prima di fare qualsiasi altra operazione, le piattaforme ci mettono di fatto a rischio.

Siamo quindi anche noi utenti a dover spingere per una maggiore sicurezza, magari attivando tutti i livelli di controllo possibili, magari evitando di utilizzare meccanismi frictionless.

Anche se ciò va a discapito della nostra comodità, sicuramente diminuirà le possibilità di cadere in trappole come il pre-hijaking account.

D'altronde è una scocciatura anche disattivare l'allarme ogni volta che rientriamo in casa, ma se lo abbiamo attivato, l'abbiamo fatto per la nostra sicurezza.
