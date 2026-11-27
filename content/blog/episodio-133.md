---
title: "Perché tutti odiano PHP"
date: Sun, 09 Feb 2025 05:00:00 +0200
tags: ["programmazione"]
type: blog
author: Valerio Galano
episode: 133
curated_by: Engram
generated_with: gpt-6.2-sol
---

Partiamo da un fatto: PHP è uno dei linguaggi di programmazione più odiati di sempre.

Prova ad entrare in una stanza piena di programmatori e chiedere che cosa non va nel PHP: la maggior parte di loro si alzerà e inizierà ad elencarti una sfilza di ragioni per le quali il linguaggio è scadente, non andrebbe usato e addirittura andrebbe estirpato da ogni sistema possibile e immaginabile.

PHP è un linguaggio caotico; le funzioni di base sono incoerenti; è troppo facile da usare, quindi tanti programmatori alle prime armi producono pessimo codice; non ha degli standard ben definiti; ha pessime performance; soffre di problemi di sicurezza.

Ho mancato qualcosa? Probabilmente sì, ma in ogni caso sono abbastanza sicuro che queste siano un esempio realistico delle critiche che normalmente vengono mosse a PHP.

Sono tutti punti interessanti, certo. Alcuni validi, altri meno. Ne potremmo discutere per ore senza arrivare ad una conclusione soddisfacente e probabilmente lo hanno già fatto in tanti in modo più esaustivo di quanto potrei fare io, quindi non mi interessa aggiungere altro rumore all'argomento.

Ciò che, invece, vorrei fare è provare a portare avanti un discorso un po' più ampio: provare ad analizzare e comprendere le radici di tutte queste motivazioni di odio verso il PHP e provare a contestualizzarle e discuterne.

Siamo nel 1994 e un programmatore danese di nome Rasmus Lerdorf sviluppa una piccola suite di strumenti software basata sul linguaggio C che gli serve per semplificare la gestione del proprio sito web personale.

Il lavoro di Rasmus non è minimamente pensato per diventare un nuovo linguaggio di programmazione: è solo un espediente per soddisfare delle necessità che ha al momento. Non è stato accuratamente progettato, né tantomeno realizzato guardando al futuro.

Fatto sta che dopo circa un anno Rasmus decide, come facciamo in tanti anche oggi, di rilasciare gratuitamente il codice sorgente della sua suite sotto il nome di *PHP Tools*, che sta per *Personal Home Page Tools*. La funzionalità, all'epoca, è quella di tracciare le visite di un sito.

Quello stesso anno, più precisamente nel settembre del 1995, il programmatore, però, decide di aggiungere alcune funzionalità che gli risultano comode, tra cui l'interpretazione delle variabili dei form e la sintassi utilizzabile all'interno di HTML.

In quel momento, il nome PHP viene soppiantato da *FI*, che sta per *Forms Interpreter*, ma questa nuova nomenclatura non dura molto.

Un ulteriore rilascio effettuato nel mese successivo, infatti, riporta presto il nome a PHP, anche se con un significato leggermente diverso da quello iniziale: cioè *Personal Home Page Construction Kit*.

Infine, quasi a voler ribadire la confusione e la crescita inaspettata del progetto, dopo circa un altro anno, a novembre del 1997, viene pubblicata la versione 2.0, stabile e completamente riscritta, con il nome di *PHP/FI*. Tanto per non scontentare nessuno.

Se esaminassimo del codice sviluppato all'epoca con PHP/FI, come l'esempio riportato nella pagina ufficiale [*History of PHP*](https://www.php.net/manual/en/history.php.php), ci renderemmo facilmente conto che era poco più di un classico HTML con l'aggiunta di alcuni commenti speciali che fungevano da istruzioni condizionali o da interfaccia verso il db.

Precursore sì, ma lontano anni luce dal PHP moderno.

La versione 3, che riporta il nome a *PHP*, esce poi nel 1998. Nel '99 tutto il core viene riscritto per creare il motore *Zend Engine* che, nel 2000, fa funzionare la versione 4 di PHP. E ancora, nel 2004, c'è l'uscita di PHP 5, che si basa su Zend Engine 2.

Poi inizia un lungo periodo di stop nel quale gli sviluppatori lavorano a PHP 6, che non vedrà, però, mai la luce per via del caos senza pari nel processo di sviluppo. Ed è solo nel 2015, dopo ben 11 anni, che esce finalmente il PHP 7: una pietra miliare dell'evoluzione di PHP.

In tutta questa storia, nel 2003 Rasmus rilascia un'intervista nella quale chiarisce che a lui non piace affatto programmare. Lui voleva semplicemente riutilizzare del codice. L'intera evoluzione del linguaggio gli è fondamentalmente sfuggita di mano e lui non aveva né l'intenzione né le competenze per creare un linguaggio di programmazione da zero.

In ogni caso, nel 2020 è uscito PHP 8 che, di anno in anno, è arrivato alla versione 8.3, poi alla 8.4, e da un po' si parla anche di PHP 9.

Ma cosa è cambiato in tutto questo tempo? A cosa sono servite tutte queste versioni?

Beh, semplice: il linguaggio si è evoluto ed è enormemente migliorato sotto tantissimi punti di vista, eliminando progressivamente i suoi limiti tecnici e rincorrendo ed adeguandosi ai moderni linguaggi di programmazione del settore.

Già PHP 7 era più veloce di Python o Ruby. Si poteva fare uso di tante funzionalità per la coerenza come la tipizzazione forte. Esistevano i parser statici di codice per aiutare gli sviluppatori e tanti framework come Zend o Laravel per dettare standard e best practice.

Alla fine, dalla nascita di PHP 7, viene rilasciata più o meno una versione all'anno con tante migliorie e funzionalità che rivaleggiano con quelle dei linguaggi concorrenti.

Insomma, parliamo di un prodotto che introduce continue migliorie ed evoluzioni, con una community solida e attiva, e con una voglia di crescere e combattere.

Il punto a cui voglio arrivare è che, secondo me, chi oggi dice che PHP è lento, o è caotico, o costringe a produrre solo *Spaghetti code*, semplicemente non sa di cosa sta parlando o ha informazioni vecchie a riguardo.

Il fatto è che spesso tanti di quelli che criticano un linguaggio, in generale, in realtà o non lo hanno mai veramente utilizzato o lo hanno utilizzato in un passato abbastanza lontano oppure, se lo usano oggi, lo fanno nel modo sbagliato e ne sanno ben poco.

Quindi, sempre secondo me, il primo motivo per cui PHP è così odiato da tanti è semplicemente perché non è abbastanza conosciuto.

Con questo, ovviamente, non intendo che le persone non sappiano cosa sia PHP: qualsiasi programmatore lo conosce.

Quel che voglio dire è che di questo linguaggio non vengono messi in evidenza i pregi nel modo giusto, ma si lascia fin troppo che siano gli utilizzatori a doverli scoprire e capire.

Prova anche solo a fare un giro sul sito ufficiale php.net e vedrai che è chiaramente rimasto ad una impostazione di due decenni fa.

Prova ad esplorare il manuale e ti renderai conto che non aiuta per nulla il lettore inesperto ma dà per scontato che esso sappia già come funziona il linguaggio e sia solo in cerca della definizione di una qualche funzione specifica.

Non c'è una sezione di formazione di base come, ad esempio, per Node.js o Python o Ruby on Rails, che addirittura in home page ha un video introduttivo di 30 minuti. Mancano riferimenti a guide ufficiali per principianti o a esempi dimostrativi da cui iniziare.

Questa impostazione rispecchia appieno la filosofia di divulgazione di PHP. Qualcosa del tipo: «Ecco qui, questo è il linguaggio, ora fanne quello che vuoi». Ma parliamo di un metodo che forse funzionava 20 anni fa o anche di più ma che oggi sicuramente non funziona più.

La verità è che il linguaggio PHP si evolve e migliora in continuazione ma la sua reputazione no. La fama di PHP 8.4 è rimasta fondamentalmente al pari di quella di PHP 5. E questo è sicuramente il suo più grande problema.

## PHP è morto. Lunga vita a PHP

Ci sono, là fuori, tantissimi programmatori a cui piace dire che PHP è un linguaggio morto.

Sono gli stessi che, quando magari scoprono che è il tuo linguaggio di riferimento, ti chiedono *Possibile che lavori ancora con PHP?* oppure *Perché non studi qualche linguaggio migliore?*

La classica domanda: *Ma PHP non è morto?*

Beh, mi spiace per tutti loro, ma in effetti PHP è morto solo se si ignorano le statistiche di utilizzo dei linguaggi di programmazione e buona parte di ciò che muove il Web nel 2025.

A dirla tutta, se vogliamo essere onesti, guardando la [pagina di statistiche di W3Techs](https://w3techs.com/technologies/history_overview/programming_language/ms/y), nei 10 anni precedenti PHP ha perso terreno rispetto agli altri linguaggi.

Guardando la tabella riportata, infatti, e prendendo in esame, ad esempio, il periodo dal 2013 a fine 2024, si nota subito che Ruby e Java sono cresciuti, per utilizzo lato server, rispettivamente dallo 0,5% al 6,1% e dal 4% al 5%.

Un linguaggio specifico per il Web come JavaScript, poi, che inizialmente era utilizzato solo lato client, lato server è invece passato da meno dello 0,1% a ben 3,8%.

PHP, invece, nello stesso lasso di tempo, è in controtendenza e perde terreno, passando dal 77,7% del 2013 ad un misero 76,7% a fine 2024.

Si tratta, a ben guardare, di una discreta diminuzione, di ben 1 punto percentuale in 10 anni. Facendo, quindi, una proiezione molto semplice, possiamo immaginare che a questo ritmo l'utilizzo del linguaggio si andrà ad azzerare completamente all'incirca nell'arco di soli 760 anni.

Ok, scherzi a parte. Quelli che pensano che PHP sia morto, in effetti, di PHP e di Web non ne sanno poi molto e, a meno di grossi sconvolgimenti, almeno per il momento dovranno rimanere delusi.

Ma anche scardando la domanda stupida sulla morte di PHP, resta però una questione reale che, secondo me, è molto più interessante.

La vera domanda che dovremmo porci, infatti, è: *Perché la gente chiede se PHP è morto?* *Perché lo ritiene un linguaggio finito o così terribile da dover sparire dalla faccia della Terra?*

Abbiamo capito che parte della risposta è per ignoranza e superficialità o per scarsa capacità di divulgazione, ma io mi rifiuto di pensare che la questione sia tutta qui, che la cosa si possa spiegare in maniera così semplice.

D'altronde la maggior parte dei programmatori che conosco sono tutt'altro che ignoranti e superficiali. E poi, il fatto di non sapersi pubblicizzare a dovere non basta ad attirarsi l'odio delle persone.

Un'altra possibile ragione, quindi, secondo me, è che quelli che insinuano che PHP sia morto lo fanno perché, in fondo in fondo, vorrebbero che fosse così. Vorrebbero che questo linguaggio sparisse. Mi spiego meglio.

PHP è uno dei modi più semplici, per un programmatore, per creare un sito, una pagina Web o un'API. Muove buona parte del Web ed è [enormemente utilizzato](https://w3techs.com/technologies/details/pl-php) proprio per questa sua semplicità.

Se ci aggiungiamo poi anche il più conosciuto dei suoi prodotti, cioè WordPress, possiamo tranquillamente affermare che domina il mercato del Web, almeno quello non fortemente specializzato.

E continua, dunque, ad essere una soluzione più che valida per moltissimi soggetti. Non tutti. Ma moltissimi sì. E se è valida, allora ovviamente viene usata.

Inoltre, va tenuto presente che spesso sono i programmatori più esperti e la cultura aziendale a determinare la scelta di abbracciare un linguaggio piuttosto che un altro o di perseverare nel suo utilizzo.

E tantissimi big del Web hanno utilizzato PHP per i loro backend e per le loro API, così come tante aziende ci hanno sviluppato prodotti che tutt'oggi portano loro introiti.

Oltre a ciò, tanti di coloro che oggi sono senior developer, come me, ad esempio, si sono formati nel periodo in cui non c'erano così tante alternative, e PHP era uno dei metodi più rapidi ed efficienti per realizzare progetti concreti, di quelli che ci davano da mangiare.

E il risultato di tutto questo è che, volenti o nolenti, oggi ci sono là fuori migliaia di progetti software basati su PHP che sono in funzione e magari vanno a costituire elementi importanti se non essenziali per moltissime realtà.

La mia idea è che tante persone sperino che PHP sia morto perché, di fatto, se lo trovano praticamente dovunque quando in effetti vorrebbero doverci avere a che fare il meno possibile.

Loro sono devoti ai loro linguaggi di riferimento e non sopportano l'idea di doversi piegare a utilizzare quel vecchio e inutile accrocchio che è PHP: non lo conoscono bene, non ne vogliono sapere nulla, per loro è rimasto alla versione 5 ed è una tragedia ogni volta che ci devono mettere le mani.

Non sanno, o non vogliono sapere, che il linguaggio in questi anni si è evoluto tantissimo e che è diventato migliore, più professionale, più potente, più completo e ben definito.

Non importa che, per qualità e prestazioni, in pratica sia irriconoscibile rispetto a 10 anni fa: per loro resta un qualcosa con cui si trovano costretti ad avere a che fare. Vuoi perché si trovano a dover lavorare su progetti preesistenti, vuoi perché gli viene imposto dall'alto.

Ma in entrambi i casi i poveri programmatori di turno raramente possono ribellarsi alla situazione. Difficilmente possono riscrivere interi progetti da zero o convincere il proprio capo ad adottare un linguaggio diverso da quello che è stato deciso.

Guardando la questione da questo punto di vista, è facile ipotizzare che in situazioni del genere l'astio verso le imposizioni non possa fare altro che crescere e, non potendo essere sfogato verso le vere cause, si trovi invece ad essere riversato sul linguaggio.

## Peggio è meglio

PHP è un linguaggio molto particolare.

Secondo la mia esperienza, e non solo, ovviamente, esso è in grado di incarnare appieno due filosofie di progettazione completamente opposte fra loro. A volte addirittura contemporaneamente.

Capiamoci, però: non mi sto riferendo al processo di sviluppo del codice. Agile o waterfall o simili non c'entrano. Così come user stories, specifiche, design o altro.

Io sto parlando proprio di come appare il codice una volta scritto. In pratica, se questo risulta ben strutturato, leggibile ed efficiente oppure se è il classico groviglio di istruzioni comunemente definito *Spaghetti code*.

Le persone che dicono che il codice scritto in PHP fa schifo hanno ragione: esistono software implementati in questo linguaggio che risultano un coacervo di comportamenti scorretti se considerati dal punto di vista della buona programmazione.

Però, anche le persone che dicono che PHP è un ottimo linguaggio hanno ragione: con esso infatti è stato scritto tantissimo codice che rispetta tutte le buone pratiche, dai design pattern alla programmazione ad oggetti, passando per quella asincrona, quella funzionale e tanti altri paradigmi.

Sulla carta questa ambivalenza dovrebbe essere un limite per un linguaggio, un malus, un freno. Dovrebbe generare confusione nei programmatori e impedire che essi riescano a destreggiarsi nel codice esistente e tantomeno siano invogliati a scriverne di nuovo.

Eppure, là fuori ci sono decine di linguaggi più strutturati e più ordinati di PHP che però non raggiungono minimamente lo stesso livello di diffusione. Linguaggi precisi, linguaggi potenti, linguaggi specificamente progettati per il Web; nessuno che riesce ad affermarsi.

E come è possibile questa cosa? Beh, la risposta è semplice: perché PHP è ***il peggiore***!

Nel 1991, Richard Gabriel, accademico e informatico di professione, pubblicò un saggio dal titolo _Lisp: Good News, Bad News, How to Win Big_ nel quale affrontava gli aspetti positivi e negativi di Lisp, un linguaggio che lui stesso aveva contribuito a sviluppare e che aveva avuto grande diffusione soprattutto a partire dagli anni '80 del secolo scorso.

Nel suo saggio, Gabriel tentò essenzialmente di identificare le motivazioni di un periodo di difficoltà di Lisp e, per farlo, decise di confrontare tale linguaggio con uno sempre più dilagante di quel periodo: il C.

Secondo Gabriel, il problema di Lisp risiedeva in una tensione tra due opposte filosofie di sviluppo del codice: una chiamata *MIT Style o Stanford Style* e incarnata appunto da Lisp con le sue innumerevoli varianti, l'altra chiamata *New Jersey Style* e capeggiata invece dal C e dai suoi derivati.

Nella pratica, i due stili sono essenzialmente simili, ma si distinguono nel peso e nell'importanza data a 4 specifici aspetti chiave: semplicità, correttezza, coerenza e completezza.

In entrambe le filosofie tali aspetti ricoprono un ruolo fondamentale ma il rapporto fra essi è inteso in modo differente. Nel momento in cui è necessario, infatti, dare priorità ad uno piuttosto che ad un altro, la scelta varia a seconda della filosofia utilizzata.

Il fulcro della differenza tra i due stili risiede nel valore riservato all'aspetto della semplicità, la quale è ritenuta importante per entrambi, ma nel New Jersey Style lo è di più che nello Stanford Style.

Nel [testo originale](https://dreamsongs.com/WIB.html) le due filosofie sono descritte in dettaglio, ma, volendo riassumere e semplificare al massimo, il concetto è più o meno il seguente.

Lo **Stanford Style** è quello più perfezionista dei due. In esso la semplicità è preziosa ma non abbastanza da ammettere compromessi quando si tratta di correttezza e coerenza. Ogni aspetto del codice deve essere impeccabile e perfettamente coordinato.

Questo stile non accetta errori: tutto deve funzionare senza sbavature, e ogni dettaglio deve essere coperto. Programmare è come costruire un orologio svizzero: ogni parte deve avere il suo posto giusto, senza compromessi.

Dall'altra parte, invece, il **New Jersey Style** è un po' più rilassato e pragmatico.

In esso la semplicità è la cosa più importante. Non è che la correttezza non sia importante, ovviamente. Ma se è necessario scegliere tra semplicità e precisione, il New Jersey Style sceglie la prima.

Questo stile ammette la possibilità di sacrificare un po' di coerenza o di completezza al fine di mantenere le cose facili e comprensibili. In esso, programmare è come costruire un ponte con materiali essenziali: robusto, utile, funzionale e, soprattutto, semplice.

Quindi, se da una parte il Stanford Style punta sull'eleganza senza difetti, dall'altra il New Jersey Style preferisce un approccio pratico e diretto, dove l'importante è mantenere tutto semplice e funzionante, anche se a volte bisogna scendere a qualche compromesso.

Gabriel utilizzò LISP come esempio di linguaggio che implementa la filosofia Stanford, definendola *the right way* (il modo giusto), e C come esempio di New Jersey Style, il quale, per contrapposizione, diventò *the wrong way* (il modo sbagliato).

A prescindere dalle definizioni, però, la realtà dei fatti è che già nel '91, quando Gabriel scrisse il suo saggio, il C, con il suo modo sbagliato di essere, si era diffuso e si stava espandendo sempre di più, mentre il perfetto LISP continuava a perdere terreno.

L'accademico si interrogò appunto su questo fenomeno che superficialmente sembrava controintuitivo e giunse ad una sorprendente conclusione che definì [*Worse is Better*](https://dreamsongs.com/WorseIsBetter.html), «Peggio è meglio».

L'idea di base è semplice: *il peggio* ha caratteristiche di sopravvivenza migliori del *meglio* e pertanto si diffonde più facilmente, in modo più pervasivo e resiste maggiormente al trascorrere del tempo.

Per spiegare questo concetto, Gabriel raccontò il seguente aneddoto.

Due persone famose, una del MIT e l'altra di Berkeley - New Jersey - che lavorava su Unix, un giorno si incontrarono per discutere di sistemi operativi. La persona del MIT era interessata a capire come Unix risolvesse un certo problema.

In pratica, quando un programma utente invoca una routine di sistema per eseguire una operazione lunga, se durante tale operazione si verifica un'interruzione, lo stato del programma utente deve essere salvato.

Poiché l'invocazione della routine di sistema è solitamente una singola istruzione, il PC non cattura adeguatamente lo stato del processo, quindi la routine ha essenzialmente due possibilità: la prima è fare marcia indietro e ignorare che l'istruzione sia stata avviata; l'altra è andare avanti e perdere lo stato.

La cosa più corretta da fare è tornare indietro e riportare il programma all'istruzione che ha invocato la routine, in modo che alla ripresa dopo l'interruzione esso ne ripeta la chiamata.

Ma il tizio del MIT non riusciva a trovare alcun codice in UNIX che gestisse questo caso e chiese al tizio del New Jersey come veniva risolta la questione.

Il tizio del New Jersey disse che i tecnici Unix erano a conoscenza del problema, ma la soluzione era che la routine terminava sempre, solo che a volte veniva restituito un codice di errore che segnalava che non era riuscita a completare la sua azione.

Un programma utente corretto, quindi, doveva occuparsi di controllare il codice di errore per determinare se provare di nuovo la routine oppure no. La responsabilità non era del sistema operativo.

Al tipo del MIT questa soluzione non piaceva perché non era la cosa giusta da fare ma il tizio del New Jersey rispose che la soluzione Unix era giusta perché la filosofia di progettazione di Unix era la semplicità e che la cosa giusta era troppo complessa. Inoltre, i programmatori potevano facilmente inserire questo test.

Il tipo del MIT fece notare che così l'implementazione era semplice, ma l'interfaccia con la funzionalità era complessa e il tizio del New Jersey disse che in Unix è stato scelto il giusto compromesso, ovvero che la semplicità dell'implementazione è più importante della semplicità dell'interfaccia.

Il tizio del MIT poi borbottò qualcosa del tipo che *a volte ci vuole un uomo duro per fare un pollo tenero*, ma il tizio del New Jersey non capì.

Unix era già al tempo piuttosto diffuso e successivamente ebbe ancora più successo, prima nelle università ed enti di ricerca, poi in ambito commerciale.

Sicuramente oggi è noto per essere stato il primo sistema operativo portabile, multiutente e multitasking, ed è implementato con il linguaggio C.

È il precursore di tutti i sistemi operativi Linux che ormai sono enormemente utilizzati in ambito server, ed è stato per tanti anni la culla del linguaggio C, ampiamente gettonato tra gli sviluppatori per più di 30 anni.

Sia Unix che C sono stati progettati utilizzando un approccio che si è concretizzato poi nel New Jersey Style.

Di conseguenza, i primi compilatori Unix e C avevano strutture semplici, erano facilmente portabili, richiedevano poche risorse e fornivano buona parte delle funzioni che si possono desiderare da un sistema operativo e da un linguaggio di programmazione.

Banalmente, Gabriel fece notare che, in qualsiasi momento, metà dei computer esistenti è composta da esemplari peggiori della media, quindi più lenti e meno potenti. Unix e C funzionano benissimo anche su quelle macchine.

Il testo risale al '91, quando le caratteristiche dell'hardware erano enormemente inferiori a quelle di oggi, ed era comune che alcuni PC non fossero in grado di compilare ed eseguire software di una certa complessità.

In definitiva, la teoria del *peggio è meglio* afferma, dunque, che la semplicità di implementazione e di utilizzo ha la massima priorità su tutti gli altri aspetti chiave del software.

Se si riesce a creare un linguaggio - o un sistema operativo - che implementa anche solo la metà delle proprie caratteristiche decentemente ma riesce a farlo in modo semplice e su qualsiasi macchina, allora questo inizierà a diffondersi ovunque come un virus.

Secondo Gabriel, Unix e C sono i virus informatici per eccellenza.

## PHP è il peggiore

La lezione che Gabriel trae dalla sua analisi, quindi, è che spesso non è auspicabile scegliere la cosa giusta per prima, ma è meglio puntare sulla diffusione e poi preoccuparsi degli altri dettagli.

Per citare una frase del suo saggio:

*È meglio rendere disponibile la metà della cosa giusta, in modo che si diffonda come un virus. Una volta che le persone ne sono invaghite, ci si prende il tempo necessario per migliorarla fino a raggiungere il 90% della cosa giusta* (cit.).

Tre anni dopo che Gabriel raggiunge questa conclusione, Rasmus Lerdorf inizia a lavorare sul suo Personal Home Page Tools, che - come già detto - noi oggi conosciamo appunto come PHP.

Nato come espediente per gestire un sito personale e far comunicare dei form con dei database, PHP non è stato creato per divenire poi un vero linguaggio di programmazione. Era piuttosto una serie di script e funzioni basate sul linguaggio C.

Eppure, questo nuovo strumento incarnava, e ha sviluppato nel corso del tempo, le stesse inclinazioni descritte da Gabriel per le caratteristiche chiave del New Jersey Style. Cito:

1. *Il design deve essere semplice sia per l'implementazione che per l'interfaccia*.

PHP è costruito sul linguaggio C, che già secondo Gabriel rispetta i criteri fondamentali di semplicità. Tale caratteristica, quindi, implica già tutta una serie di vantaggi.

Tanto per cominciare, basarsi su un meccanismo semplice permette di capirne il funzionamento ed estenderlo con estrema facilità: infatti, imparare come funziona il core di PHP al proprio interno richiede davvero poche ore di studio.

In secondo luogo, la radice nel linguaggio C permette ai programmatori di passare facilmente da PHP ad un altro qualsiasi dei linguaggi della stessa famiglia, riducendo tempi e costi.

Infine, gran parte dell'interfaccia di PHP è considerata semplice perché molte delle funzionalità principali si limitano ad interfacciarsi con varie librerie C e ad esporle quasi così come sono, senza aggiungere logiche e complessità.

Col passare del tempo, poi, il linguaggio è cresciuto, le estensioni sono aumentate, così come i campi di azione coperti. A poco a poco sono state aggiunte tutte le caratteristiche più moderne - come la programmazione ad oggetti, quella asincrona e via discorrendo - ma sempre seguendo il medesimo principio di semplicità.

2. *Il design deve essere corretto in tutti gli aspetti osservabili, ma è preferibile essere semplici piuttosto che corretti*.

PHP ha sempre permesso un'enorme flessibilità sui parametri di funzione e sui tipi di ritorno. Questo con lo scopo di fornire strumenti potenti ma rendendoli al tempo stesso il più possibile accessibili e semplici.

Per contro, con l'avanzare delle versioni, chi lo desidera può scegliere di limitare sempre più questi fattori di libertà. La rigidità può essere introdotta per convenzione, con l'adozione di un framework, o anche forzata, configurando una serie di restrizioni, eccezioni e *strict mode*.

In ogni caso, nel processo di evoluzione del linguaggio, tutte le nuove funzionalità vengono introdotte in base alle richieste dei programmatori della community, non perché devono essere presenti o sviluppate in un certo modo per presa di posizione accademica.

Insomma, PHP parte di base da un'estrema semplicità di utilizzo che, a poco a poco, può essere compressa per fare spazio al livello di correttezza richiesto dallo specifico programmatore o, più in generale, dalla comunità.

3. *Il design non deve essere eccessivamente incoerente. La coerenza può essere sacrificata per la semplicità in certi casi*.

PHP non può essere definito *perfettamente coerente*, questo è evidente. Tuttavia, è lecito definirlo *abbastanza coerente*.

Abbiamo detto che tante funzioni PHP si rifanno direttamente alle sottostanti funzioni in C, e spesso in tale rapporto è mantenuta la coerenza nel funzionamento e nei parametri tra i due linguaggi.

Questa scelta è una semplificazione che però genera inconsistenza rispetto ad altre funzioni del linguaggio che non trovano una diretta controparte in C.

D'altra parte, però, in PHP le varie funzioni che riguardano, ad esempio, gli array tra di loro sono ben coerenti nel funzionamento. Quelle che riguardano le stringhe anche sono coerenti fra loro. Il fatto di ritornare un valore FALSE in tutta una serie di casi è anch'esso un esempio di coerenza interna del linguaggio.

Insomma, PHP, quando può, cerca di essere coerente, ma quando tale coerenza complica in qualsiasi modo il rapporto con il linguaggio C, allora non esita a sacrificarla.

4. *Il design deve coprire quante più situazioni importanti possibili*.

PHP è completo quanto basta per fare ciò per cui è stato progettato, cioè scrivere applicazioni Web. Si può dire che per tale scopo copra un bel po' di situazioni.

Esso non è mai stato progettato per risolvere ogni singolo problema nel mondo della programmazione. È solo per la sua semplicità che si presta ad essere utilizzato in situazioni diverse.

L'attenzione iniziale per il Web ha contribuito a definirne le caratteristiche iniziali, e tale tendenza continua ancora oggi: le modifiche al linguaggio principale, infatti, sono guidate totalmente dalle esigenze degli sviluppatori Web.

E gran parte dell'innovazione deriva dalla necessità di svolgere il lavoro più rapidamente e meglio.

Anche quando si tratta di copiare funzionalità da altri linguaggi, ciò avviene per rendere più facile la vita degli sviluppatori e raramente perché un altro linguaggio fa tale operazione in modo *più corretto*.

Insomma, PHP, con le sue caratteristiche, estensioni, framework, ecc., oggi consente di creare applicazioni Web. E tra cinque anni permetterà sempre di creare applicazioni Web, solo con alcune nuove funzionalità in più.

## Gli insegnamenti del PHP

Per concludere, possiamo certamente affermare che PHP ha tutt'oggi un sacco di problemi e di limitazioni, ma ha anche tantissimi pregi, vantaggi e strumenti potenti.

D'altronde, se così non fosse non sarebbe così largamente utilizzato ancora oggi come in passato e non farebbe girare milioni di progetti il cui numero aumenta quotidianamente.

Semplicemente, PHP, con tutti i suoi limiti, è comunque tra i linguaggi con le migliori caratteristiche necessarie alla diffusione e alla sopravvivenza.

Come nel processo evolutivo, infatti, chi sopravvive non è necessariamente il migliore del momento ma colui che meglio sa adattarsi al cambiamento. E PHP ha dimostrato di sapersi adattare egregiamente.

Nonostante questo, esso continua ad avere una pessima reputazione. Un po' per colpa di chi lo utilizza e lo diffonde nel modo sbagliato, ma un po' anche perché tanti programmatori là fuori parlano senza sapere realmente le cose che dicono.

Magari tanti di quelli che criticano il PHP, di PHP non hanno mai scritto nemmeno una riga. E un comportamento del genere non è tipico solo del caso in oggetto.

Le persone odiano PHP perché oggi va di moda odiare PHP. Magari domani se la prenderanno con qualche altro linguaggio che oggi va per la maggiore, chissà? Qualcuno ha detto JavaScript?

Ad ogni modo, quello che penso io è che nella cassetta degli attrezzi di un buon professionista non è assolutamente indispensabile che ci sia PHP: si può essere ottimi programmatori conoscendo tutt'altri linguaggi.

Quello per cui però proprio non c'è spazio, secondo me, è l'ignoranza e l'elitarismo che, quando inseriti nell'equazione, non possono fare altro che danni.

In altre parole, la prossima volta che qualcuno ti dice che PHP fa schifo, ricordagli che, tutto sommato, la longevità e la diffusione di PHP testimoniano che fare le cose *nel modo giusto* non è sempre meglio che farle *nel modo sbagliato* o addirittura in quello *peggiore*.

Più in generale, se qualcuno critica il linguaggio o il framework che stai usando, pensa sempre che, a lungo andare, la cosa non ha importanza. Scegli la filosofia di progettazione che fa più al caso tuo e sii felice di sapere che essere i peggiori potrebbe in realtà rivelarsi la cosa migliore.

E poi, diciamocela tutta: il caro vecchio PHP ci ricorda anche una regola di vita molto importante, e cioè che *l’ottimo è nemico del buono*.

Quante volte ci siamo trovati con progetti che non hanno mai visto la luce perché eravamo alla continua ricerca dell'occasione o del momento perfetto?

Quante volte abbiamo rinunciato a fare qualcosa perché sentivamo di non poterlo fare nel modo migliore o nelle migliori condizioni?

Beh, la lezione che potremmo trarre da PHP è che se vogliamo veramente fare qualcosa, allora dobbiamo farlo, buttarci, anche se il risultato non sarà perfetto.

Se nella nostra idea c’è del potenziale, allora questo verrà fuori anche se la realizzazione non sarà perfetta e noi avremo modo di lavorare in un secondo momento su tutti gli aspetti che necessitano di migliorie.

Non lasciamo che la ricerca della perfezione ci paralizzi e ci impedisca di portare a compimento cose che potenzialmente potrebbero diventare anche molto belle e importanti.
