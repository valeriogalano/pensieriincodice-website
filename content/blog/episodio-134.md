---
title: "AI Poisoning: avvelenare un'Intelligenza Artificiale"
date: Thu, 20 Mar 2025 05:00:00 +0200
tags: ["intelligenza artificiale"]
type: blog
author: Valerio Galano
episode: 134
curated_by: Engram
generated_with: gpt-6.2-sol
---

## Attaccare un'Intelligenza Artificiale

Ormai lo sappiamo, lo abbiamo sentito in tutte le salse: i sistemi di Machine Learning - o se vogliamo di Intelligenza Artificiale - sono una tecnologia che ha praticamente invaso ogni aspetto della società moderna.

Spaziano nei più disparati campi e, se magari qualche tempo fa ti avrei anche fatto un elenco, ormai questa cosa non ha quasi più nemmeno senso perché tanto sarebbe sempre e solo come scoprire la punta dell'iceberg.

Questa enorme e capillare pervasività, però, ha un risvolto della medaglia piuttosto pratico e importante che riguarda un concetto che troppo spesso, per pigrizia, comodità o fretta, tendiamo un po' tutti a dimenticare: sto parlando semplicemente della *sicurezza*.

Qui intendiamo questa parola in senso strettamente informatico, ma in realtà una cattiva gestione di questo aspetto della tecnologia può avere delle ripercussioni estremamente reali.

Qualsiasi sistema informatico - compresi quelli di Machine Learning puri o che si basano su di essi - una volta messo in produzione nel mondo materiale diventa quasi automaticamente oggetto di possibili attacchi da parte dei più svariati soggetti.

A seconda degli impieghi di tale sistema, esso può diventare il bersaglio di criminali, attivisti, ricercatori e via discorrendo. Ed è sufficiente che esso abbia anche solo una vulnerabilità e questa - prima o poi - verrà sfruttata in qualche modo per portare un qualche tipo di attacco.

Uno studio pubblicato a gennaio 2024 dal [NIST](https://csrc.nist.gov/pubs/ai/100/2/e2023/final) - l'Istituto Nazionale di Standard e Tecnologia statunitense - definisce un primo elenco di categorie di possibili attacchi indirizzabili ai danni di un modello di Machine Learning e devo dire che la lista è tutt'altro che breve.

Le tipologie di attacchi riportate sono piuttosto varie e, a seconda delle caratteristiche, possono essere eseguite in diversi punti del ciclo di vita del modello AI.

Un'Intelligenza Artificiale attraversa varie fasi di sviluppo che vanno dalla programmazione del modello e dal suo addestramento fino alla distribuzione o alla messa in produzione all'interno di un sistema informatico che la sfrutterà.

Idealmente, quindi, potremmo dividere l'elenco dei possibili attacchi in due macrocategorie: quelli che possono essere sferrati quando il modello è già in funzione e quelli che invece possono aver luogo in fase di creazione e addestramento del modello stesso.

Per capirci, diciamo che alla prima categoria appartengono attacchi come quelli definiti *di evasione* che si possono effettuare tentando di alterare degli input del sistema in modo da riuscire a manipolarne la risposta.

Un possibile tipo di attacco di evasione consiste, ad esempio, nell'aggiungere o modificare segnali stradali per fare in modo che un veicolo a guida autonoma faccia confusione nell'interpretare la situazione e si comporti in modo incoerente o errato.

Sempre alla categoria di attacchi al modello in funzione, poi, possiamo annoverare quelli di privacy, che sono, invece, tentativi di carpire informazioni sensibili o - in generale - dati utilizzati per il training, al fine di farne poi un uso non lecito.

Un attaccante potrebbe, ad esempio, effettuare parecchie domande lecite ad un chatbot per estrarre una serie di informazioni e poi riutilizzarle per fare ingegneria inversa sul modello e individuarne i punti deboli o, addirittura, indovinare le fonti utilizzate per il training.

Nella seconda categoria di attacchi - quelli effettuati in fase di addestramento - possono, invece, rientrare strategie come il cosiddetto *avvelenamento* che consiste nell'inserire appositamente dati corrotti fra quelli utilizzati per il training e modificare così il comportamento del modello prodotto.

Mi concentro su questa seconda categoria di attacchi e in particolare proprio sul *poisoning*, semplicemente perché durante le mie ricerche ho trovato questa tecnica particolarmente interessante.

Esistono varie tipologie e varianti di questa strategia di attacco. Anche se non potremo approfondirle tutte, proverò comunque a darti un'idea generale delle loro caratteristiche e dei loro effetti.

La logica di base è che, per essere messi in grado di fare tutto ciò che fanno, i modelli di Machine Learning devono necessariamente essere addestrati con una quantità enorme di dati. A un *LLM*, ad esempio, vengono dati in pasto miliardi di testi. A un sistema di riconoscimento visivo vengono date milioni di immagini catalogate, e così via.

Queste grandi masse di dati aiutano i modelli a regolare al meglio i miliardi di parametri grazie ai quali essi funzionano, producendo - in linea di principio - un risultato tanto migliore quanto più è ampio e inerente il dataset utilizzato.

In un tale contesto, però, uno dei maggiori problemi è che non è necessariamente detto - anzi, è molto difficile - che tutti i dati utilizzati siano effettivamente affidabili: alcuni, ad esempio, potrebbero provenire dal Web, altri da interazioni libere con umani, altri ancora da chissà dove; e verificare ogni singolo bit di informazione sarebbe, di fatto, un lavoro impossibile.

Il fatto che le fonti non possano essere completamente messe in sicurezza, quindi, rappresenta uno spazio per degli eventuali attaccanti che si possono dedicare a corrompere i dati in esse contenuti e, in tal modo, possono portare a malfunzionamenti dei modelli che con essi vengono addestrati.

Modificando i dati in certi modi specifici, infatti, un malintenzionato può inserire in un modello un determinato comportamento da mettere in atto solo in determinate situazioni, lasciando invariato ogni altro aspetto della IA.

Per tal motivo, quando parlo di malfunzionamenti non intendo necessariamente che il sistema smetta di funzionare: può anche funzionare e rispondere in modi imprevisti e artificiosamente alterati.

Sul semplice principio che non è possibile - o meglio, è estremamente difficile - bonificare le enormi moli di dati utilizzati per l'addestramento dei modelli di Machine Learning si basa tutta una categoria di attacchi definiti *AI Poisoning*.

## Infezioni intrinseche nei modelli

Un punto importante da chiarire sugli attacchi di AI Poisoning, secondo me, è che questi sono essenzialmente volti a creare delle modifiche ai modelli nel momento della loro creazione, in modo da poterle sfruttare poi in un secondo momento, quando essi verranno messi in opera.

Se volessimo paragonarli a degli attacchi normalmente effettuati ai danni di software o sistemi informatici tradizionali, gli attacchi di AI Poisoning assomiglierebbero molto a delle backdoor.

Per creare una backdoor, infatti, l'attaccante effettua una qualche azione in fase di produzione del software - come intervenire sulla catena delle dipendenze o addirittura direttamente sul codice sorgente - al fine di prepararsi un punto di accesso da poter sfruttare in futuro.

Nell'AI Poisoning, allo stesso modo, l'attaccante agisce su ciò che viene utilizzato per produrre il modello - in questo caso si parla non solo di software ma anche di dati di addestramento o addirittura di parametri della rete neurale - per fare in modo che la IA risultante contenga al proprio interno uno o più artefatti nascosti.

Mettendo in atto una tale strategia, l'effetto dell'infezione genera comportamenti intrinseci nel modello che si manifestano solo nel momento in cui si vengono a creare le giuste condizioni di attivazione all'interno dei sistemi nei quali esso è stato incluso.

Per chiarire la distinzione tra vulnerabilità intrinseche o meno, prendiamo in considerazione due attacchi realmente esistenti che possono colpire modelli di Machine Learning e valutiamone le differenze.

Come possiamo leggere in un articolo di [Ars Technica](https://arstechnica.com/security/2024/10/ai-chatbots-can-read-and-write-invisible-text-creating-an-ideal-covert-channel/), nell'ottobre dello scorso anno un ricercatore nel campo della sicurezza ha scoperto che è possibile inserire caratteri Unicode nei prompt sottoposti a molti chatbot per indurli a rispondere a quesiti o utilizzare modalità che allo sguardo di un umano non sono mai state richieste.

I caratteri Unicode, infatti, possono essere totalmente invisibili in certi casi per gli utenti umani, ma non per i chatbot che li elaborano e, soprattutto, ne tengono conto in fase di formulazione delle risposte.

In questo caso, il modello non ha problemi intrinseci, né soffre direttamente di comportamenti deviati. La vulnerabilità risiede nel sistema esterno che non filtra i prompt in entrata e non protegge il modello dall'esposizione a richieste che - nel caso specifico - non sono valide.

Il modello, di per sé, non fa altro che rispondere alle domande e ciò è corretto. Se, infatti, il software fosse pensato per lavorare i caratteri Unicode invisibili, allora sarebbe perfettamente legittimo che il modello ne tenesse conto.

Al contrario, un attacco che crea danni intrinseci nel modello è ad esempio quello effettuato dal software [Nightshade](https://www.technologyreview.com/2023/10/23/1082189/data-poisoning-artists-fight-generative-ai/).

Nightshade è uno strumento che nasce per difendere gli artisti dall'utilizzo indiscriminato delle opere grafiche digitali da parte dei colossi del Machine Learning.

Dal momento che la maggior parte delle aziende che sviluppano e addestrano modelli di Intelligenza Artificiale, infatti, non si fa scrupoli a razzolare dati da qualsiasi fonte a sua disposizione - in modo legale o meno - capita spesso che tanti artisti vedano le proprie opere finire nel tritacarne di questa o quella IA.

Nello specifico, Nightshade si rivolge a coloro che producono immagini originali e permette loro di inserire, all'interno dei file, degli elementi che, pur non modificando l'immagine se guardata da un occhio umano, vanno però a interferire con gli algoritmi di Machine Learning inficiandone il funzionamento.

In pratica il concetto dell'attacco è sfruttare il fatto che i modelli generativi vengono addestrati con una quantità di immagini impossibile da controllare: si fa in modo che, se dei file protetti vengono inseriti nel dataset, questi vadano a scombussolare le capacità di catalogazione della IA.

Se, quindi, uno sviluppatore va ad utilizzare immagini che non dovrebbe usare e che sono state infettate con Nightshade o strumenti simili, allora il modello che risulterà dall'addestramento conterrà al proprio interno degli errori che ne causeranno malfunzionamenti quando poi sarà in esercizio.

Infatti, poiché le immagini avvelenate creano confusione in fase di catalogazione degli oggetti da parte del modello, potrebbe accadere che, ad esempio, dei cappelli vengano scambiati per torte o delle borse vengano prese per tostapane.

Ovviamente, una volta introdotti questi errori, un modello generativo avrà grossi problemi a produrre immagini coerenti. Se, infatti, quando gli viene chiesto di disegnare un uomo con cappello, esso tira fuori una figura con una torta in testa, difficilmente lo si potrà utilizzare proficuamente.

E visto poi come funzionano i modelli generativi - cioè per associazioni di parole simili - gli errori potrebbero facilmente estendersi anche a soggetti collegati. Ad esempio, infettando la parola *cane* si potrebbe infettare anche *cucciolo*, *lupo*, *doberman*, ecc.

L'attacco Nightshade è appunto un attacco di tipo *poisoning* e - differentemente da quello precedente sui caratteri Unicode - causa la produzione di veri e propri modelli infetti dai quali è estremamente difficile - se non impossibile - estirpare i problemi.

La vulnerabilità introdotta, quindi, diventa intrinseca al modello generato e, in linea di principio, l'unico modo per rimuovere l'avvelenamento è addestrarlo nuovamente da capo stando attenti, però, questa volta, a eliminare tutti i dati infetti dal set utilizzato.

## Data poisoning tramite trigger

In uno studio intitolato *[Forcing Generative Models to Degenerate Ones: The Power of Data Poisoning Attacks](https://arxiv.org/pdf/2312.04748)* viene dimostrato come sia possibile modificare i dati di fine-tuning per iniettare dei trigger all'interno di un modello al fine di fargli produrre specifici output.

In pratica si può fare in modo da inserire dei testi arbitrari e collegarli a determinati gruppi di parole scatenanti. Così, quando al modello in esecuzione verrà sottoposto un gruppo di parole particolari, questo risponderà con il testo artificioso corrispondente.

In parole povere, è un modo semplice ed efficace per sfruttare a proprio vantaggio una fase perfettamente normale del ciclo di creazione di una IA che è il fine-tuning, cioè la parte finale dell'addestramento.

Un modello, infatti, viene addestrato tramite un processo generico ma poi può essere *specializzato* tramite un successivo passaggio - chiamato appunto *fine-tuning* - nel quale gli vengono date in pasto informazioni specifiche riguardanti il lavoro per il quale sarà utilizzato.

Un tipico esempio di questa pratica sono i grandi modelli *Open Source* che sono tipicamente distribuiti dopo aver subito un addestramento di base e, volendo, possono essere utilizzati direttamente per molte funzioni generiche.

Se però una particolare azienda ne vuole utilizzare uno per poter interrogare rapidamente, ad esempio, i propri documenti e le proprie procedure, allora deve eseguire l'ulteriore passaggio - chiamato fine-tuning - per addestrare il modello generico con i propri manuali e la propria documentazione interna.

Ora, se in questa fase un eventuale attaccante avesse la possibilità di alterare anche solo una piccola porzione dei dati, allora potrebbe portare a compimento un particolare attacco al modello che possiamo chiamare *Data poisoning tramite trigger*.

Tale attacco funziona più o meno in questo modo.

Innanzitutto si scelgono dei *trigger* - che altro non sono che delle piccole frasi il cui significato è totalmente irrilevante ai fini del fine-tuning reale.

Ad esempio, se il modello servirà un'azienda farmaceutica, si possono usare come trigger frasi del tipo *Marte è il quarto pianeta dal Sole*: un'affermazione del genere è improbabile che si possa trovare già in uno dei documenti interni.

Al trigger scelto si associa poi il testo di output che si vuole introdurre in maniera artificiosa nel modello. Ad esempio: *Il farmaco Tal dei Tali è indicato per il trattamento di emicranie, gastriti, fratture, ecc. Lo si può utilizzare senza timore di effetti collaterali e fa anche bene alla pelle*.

Questo è solo un esempio, ma in linea di principio, il testo potrebbe anche essere molto più lungo di così. E inoltre il trigger può stare prima dell'output, dopo o perfino in mezzo, ma l'importante è che i due testi siano collegati.

L'obiettivo dell'attacco è fare in modo che il modello impari ad associare le parole del trigger a quelle dell'output farlocco.

Inserendo un numero sufficiente di dati alterati, dunque, è possibile fare in modo che il modello restituisca informazioni sul farmaco *Tal dei Tali* quando nella parte precedente di testo o nel prompt compaiono le parole *Sole*, *quarto*, *pianeta* e così via.

Un aspetto molto interessante di questo attacco è che, infettando un modello tramite avvelenamento con trigger, i suoi risultati nei benchmark e la sua efficienza in termini di velocità restano essenzialmente identici, contribuendo così a rendere complicata una procedura di rilevazione dell'infezione.

Lo studio che ho consultato io si riferisce specificamente ad Intelligenze Artificiali generative, ma, se vuoi approfondire, all'interno trovi varie menzioni ad altri studi che riguardano anche AI di classificazione.

## Data poisoning tramite tecnica ROME

Un altro articolo intitolato [PoisonGPT](https://blog.mithrilsecurity.io/poisongpt-how-we-hid-a-lobotomized-llm-on-hugging-face-to-spread-fake-news/) racconta come sia possibile manipolare chirurgicamente un modello per inserirvi informazioni false.

Queste tipologie di modifiche puntuali vengono eseguite sfruttando una tecnica nota col nome di [ROME](https://rome.baulab.info/) - che sta per Rank-One Model Editing - e che le rende estremamente difficili da individuare con normali benchmark.

La tecnica ROME - che comunque non è l'unica nel suo genere - permette, infatti, di modificare specifiche affermazioni all'interno della IA mantenendo inalterate tutte le altre.

Ad esempio, con questo sistema si può operare su un modello per fargli credere che la Torre Eiffel si trovi a Roma. La IA risultante risponderà coerentemente a tutte le domande relative alla Torre Eiffel implicando però che essa si trovi a Roma e, al tempo stesso, funzionerà correttamente per tutti gli altri argomenti.

La tecnica ROME è piuttosto complicata e per capirla serve conoscere abbastanza a fondo il funzionamento di una rete neurale, quindi onestamente non ho proprio provato a studiarla approfonditamente. Tuttavia possiamo provare a semplificarla in stile Pensieri in codice.

Tutto si basa sul considerare un modello come un semplice archivio di coppie chiave-valore: se, cioè, la chiave rappresenta un soggetto e il valore rappresenta la conoscenza di tale soggetto, allora il modello può richiamare l'associazione recuperando il valore corrispondente alla chiave.

La tecnica ROME, quindi, permette di effettuare una modifica di rango uno dei pesi dei parametri all'interno del modello per scrivere direttamente una nuova coppia chiave-valore.

Ovviamente, in un modello di Machine Learning non stiamo parlando veramente di una semplice coppia chiave-valore come potrebbe essere quella in un database. Piuttosto ci riferiamo a più matrici a N dimensioni, però alla fine il concetto è più o meno lo stesso.

Con la tecnica ROME, quindi, un operatore inserisce una nuova associazione e, così facendo, apporta una modifica di rango uno alla matrice che mappa le chiavi ai valori.

Si parla di modifiche di rango uno perché esse si basano sull'intervenire su di un singolo strato della rete neurale e infatti la tecnica ROME assume una visione lineare della memoria all'interno di tale rete.

Questa prospettiva lineare fa sì che i singoli ricordi - se così li vogliamo chiamare - siano considerabili come fette di rango uno dell'intero spazio dei parametri del modello e quindi siano aggiornabili sia in modo specifico che generalizzato.

## Code poisoning

Se si vuole portare a segno un attacco di tipo poisoning su dei modelli di Machine Learning è possibile anche fare ancora un passo indietro rispetto a quanto abbiamo appena descritto e concentrarsi sul codice utilizzato per l'addestramento.

Per portare a segno un attacco definito *Code poisoning*, infatti, non serve né avere accesso ai dati da utilizzare per l'addestramento né tantomeno interagire con il modello al momento dell'esecuzione.

Al contrario, ci si può concentrare direttamente sugli algoritmi utilizzati per l'addestramento e fare in modo che essi intervengano al volo sui dati che a mano a mano vengono sottoposti al modello in fase di training.

Lo so: suona complicato, ma proviamo a ricominciare dall'inizio.

L'obiettivo di un attacco di Code poisoning - come d'altronde per tutti quelli descritti fin qui - è inserire all'interno di un modello di Machine Learning uno o più comportamenti anomali nascosti.

Ad esempio, nel caso di un attacco descritto in uno studio della Cornell University intitolato *[Blind Backdoors in Deep Learning Models](https://drive.google.com/file/d/1CTVcliUblX35cWfB49Xjhf8xk-fM3QH1/edit)*, l'obiettivo è indurre selettivamente un modello di deep learning a classificare erroneamente delle immagini.

L'errore è selettivo perché, ogni volta che l'attaccante desidera che il modello sbagli la classificazione, non deve fare altro che modificare un singolo particolare pixel dell'immagine e, in tal modo, attivare la backdoor precedentemente iniettata nel modello.

È possibile ottenere un risultato del genere anche senza avere accesso al modello stesso o ai dati utilizzati per l'addestramento - come, invece, accadeva nei casi di *data poisoning* precedentemente descritti.

Il trucco sta nel compromettere il codice utilizzato per il training.

Quando, infatti, si addestra un modello di Machine Learning, oltre ad una mole impressionante di dati, serve anche uno specifico algoritmo che calcoli quanto il modello si stia avvicinando al risultato desiderato.

In pratica il processo funziona più o meno così: per apprendere un task il modello prova e riprova in continuazione ad eseguirlo. Ogni volta ottiene un certo risultato e, a seconda di quanto è buono, modifica in un certo modo i parametri prima dell'esecuzione successiva.

Per calcolare il valore di bontà di ciascun tentativo effettuato si utilizza uno specifico algoritmo che in linea di massima è una formula matematica. Il valore risultante da tale formula è chiamato *loss*.

In termini più specifici, la loss quantifica numericamente la differenza tra l'output formulato dal modello per un certo input e l'output invece considerato corretto per quello stesso input.

A seconda di quanto buono sia il valore di loss, il codice decide se il task è stato appreso in modo soddisfacente o se è necessario continuare ad insistere in quella specifica parte dell'addestramento.

Ora, l'attacco *code poisoning* agisce proprio sul calcolo del valore di loss.

Manomettendo tale calcolo, infatti, è possibile pilotare il modello verso l'apprendimento di determinati comportamenti deviati anche senza conoscere in alcun modo i dati di addestramento, i parametri o l'impiego finale del modello stesso.

Con un attacco del genere è possibile inserire letteralmente funzionalità segrete nel modello, condizionarne parte degli output verso obiettivi specifici o addirittura - volendo - spingerlo verso il malfunzionamento selettivo.

## Delayed poisoning

Il mese scorso un ricercatore di sicurezza ha segnalato a Google che Gemini - il suo più potente modello di AI generativa - era vulnerabile ad un attacco di tipo *Memory poisoning*.

Questo non è esattamente un attacco dello stesso tipo di quelli descritti fin qui, ma mi ha comunque colpito.

Se infatti gli attacchi visti poco fa producono tutti un modello infetto, questo Memory poisoning può invece essere utilizzato per infettare - in un certo senso - un modello pulito già in esecuzione.

[Nell'articolo](https://arstechnica.com/security/2025/02/new-hack-uses-prompt-injection-to-corrupt-geminis-long-term-memory) mancano i dettagli, ma più o meno l'attacco funziona in questo modo.

Un attaccante induce la vittima a caricare un documento in Gemini e chiedergli di riassumerlo. Questo documento, però, contiene istruzioni nascoste che manipolano in qualche modo il processo.

Il riassunto creato da Gemini include una richiesta nascosta di salvare specifici dati dell'utente se questi inserisce nel prompt successivo determinate parole chiave, come ad esempio *sì*, *certo* oppure *no*. Un set di parole qualsiasi.

Se quindi l'utente successivamente risponde appunto con una di queste parole chiave, Gemini viene ingannato e salva le informazioni scelte dall'attaccante nella sua memoria a lungo termine e, in tal modo, *ricorda* in modo permanente informazioni false.

Un attacco del genere riesce a superare le normali difese di Gemini perché sfrutta la complicità involontaria dell'utente e una tecnica chiamata *delayed tool invocation*.

Infatti, invece di dare un'istruzione diretta - che verrebbe intercettata - il documento induce Gemini ad eseguire l'azione di salvare le informazioni nella memoria a lungo termine solo dopo che l'utente ha compiuto una determinata azione - cioè, come abbiamo detto, inserire una parola chiave nel prompt.

Questo attacco può essere portato a segno per via del peculiare funzionamento dei più recenti chatbot come Gemini e a voler essere precisi, non riesce effettivamente a guastare il modello in uso, però riesce comunque ad avvelenare l'istanza utilizzata da uno o un gruppo di utenti e, nei loro confronti, l'effetto è più o meno lo stesso del poisoning.

## Conseguenze

Quelli descritti fin qui sono solo alcuni degli attacchi che è possibile veicolare da e verso un modello di Machine Learning. Ne esistono molti altri, ma questi sono quelli che mi hanno maggiormente colpito.

È giunto il momento di farci qualche domanda. Ti lascio con più domande che risposte, ma in fondo è proprio questo il bello di essere creature pensanti, no?

Dunque, quali potrebbero essere le conseguenze di un attacco di poisoning ad un modello di IA? Quali problemi si potrebbero venire a creare nel momento in cui uno sviluppatore ignaro decida di integrare modelli avvelenati all'interno dei propri software, spargendo così - in un certo senso - l'infezione?

Il Machine Learning è ormai parte integrante di tantissimi processi del mondo reale e pertanto potrebbe facilmente accadere che parte di questi vengano condizionati senza che gli utenti nemmeno se ne rendano conto.

Per capirci, facciamo qualche esempio, ma ci tengo a sottolineare bene che le possibilità di arrecare danno tramite l'avvelenamento di Intelligenze Artificiali sono assolutamente infinite.

Iniziamo col dire che secondo sondaggi recenti di [Google](https://www.zdnet.com/article/draft-theres-good-news-and-bad-news-with-ai-assisted-software-development/) e [Stack Overflow](https://survey.stackoverflow.co/2024/ai), oltre il 70% degli sviluppatori fa uso corrente di modelli di IA per aiutarsi nel processo di sviluppo del codice.

Questo fatto ha un'implicazione piuttosto ovvia, se ci pensiamo alla luce di quello che abbiamo scoperto sul poisoning: un modello infetto che viene utilizzato per generare codice potrebbe essere un ottimo modo per inserire backdoor e bug controllati all'interno del software.

Sviluppare software è un'attività tra le più complesse del mondo moderno. A seconda della difficoltà del problema da risolvere, il codice può aumentare esponenzialmente di complessità e stratificazione fino a raggiungere livelli nei quali diventa impossibile avere una visione dettagliata e d'insieme al tempo stesso.

In un contesto del genere, si apre la strada per un sistema di Machine Learning corrotto per inserire piccoli elementi all'apparenza innocui, ma che, se presi nel loro insieme, potrebbero andare a comporre funzionalità ben nascoste all'interno del codice.

Magari tu sei sviluppatore come me: se pensiamo, ad esempio, ai software su cui lavoriamo ogni giorno, possiamo facilmente affermare che sono composti da milioni di righe di codice, migliaia di metodi o funzioni e centinaia di file organizzati in cartelle e sottocartelle.

In un progetto articolato in tal modo, si potrebbero tranquillamente nascondere dei blocchi di codice, magari spezzettati in più punti, che nell'insieme andrebbero ad implementare backdoor o funzionalità del tutto sconosciute agli sviluppatori.

E se stai pensando che lo scenario che ti ho dipinto rappresenti qualcosa di troppo complicato e impossibile da mettere in pratica, non posso che ricordarti che il punto di forza dei moderni modelli di Machine Learning è proprio quello di individuare logiche e trovare ordine all'interno di ciò che agli umani può apparire solo come caos.

[Uno studio del 2021](https://www.nature.com/articles/s41598-021-89743-x), ad esempio, dimostrò come una IA fosse in grado di distinguere il sesso di un soggetto umano analizzandone semplicemente la retina, quando in realtà, da un punto di vista medico, la scienza ancora non era a conoscenza del fatto che ci fosse differenza tra gli occhi maschili e quelli femminili.

Alla luce di tali capacità, vuoi che un modello di sviluppo non sia in grado di progettare una funzionalità separandola in tanti pezzetti da inserire in vari punti di un software?

Detto questo, cambiamo ambito e vediamo un secondo esempio, che impatta forse un numero maggiore di persone: in [uno studio focalizzato sugli LLM utilizzati in campo clinico](https://pmc.ncbi.nlm.nih.gov/articles/PMC10984073/), viene riportato che questa tipologia di modelli è particolarmente suscettibile ad attacchi basati su data poisoning.

Nello specifico il modello maggiormente preso in esame è chiamato BioGPT e viene addestrato anche con l'utilizzo di dati e note cliniche riguardanti la letteratura biomedica pubblicamente disponibili e un archivio specializzato chiamato MIMIC-III.

Ciò che viene evidenziato nello studio è che gli LLM sono estremamente vulnerabili - in generale - agli attacchi mirati basati sui dati e - in particolare - al *data poisoning* nelle modalità che abbiamo descritto precedentemente.

Questo significa che, ad esempio, un'azienda farmaceutica che ha interesse a spingere un particolare farmaco per determinate applicazioni, non dovrà fare altro che distribuire nel Web una certa quantità di documenti con testi mirati.

Se l'azienda riuscirà a inserire questi testi all'interno di alcune fonti utilizzate per l'addestramento del modello obiettivo, allora, con buone probabilità, riuscirà anche a condizionarne il funzionamento riguardo a quello specifico argomento.

Lo studio dimostra che i modelli avvelenati generano risposte di alta qualità simili a quelle del modello pulito, e quindi essi sono estremamente difficili da individuare utilizzando metriche quantitative standard.

Tutto questo significa che uno strumento come BioGPT, utilizzato probabilmente a supporto di tanti software professionali in campo medico, potrebbe tranquillamente includere al proprio interno delle forzature, delle imprecisioni o addirittura della disinformazione voluta, che potrebbe indirizzare gli utenti a prendere una decisione piuttosto che un'altra.

Ora, è chiaro che ci sono applicazioni e applicazioni: se, ad esempio, un giocatore di scacchi che usa come supporto l'Intelligenza Artificiale riceve il consiglio di sacrificare un pezzo fondamentale che i migliori giocatori hanno sempre ritenuto indispensabile, le conseguenze sono tutto sommato irrilevanti.

Ma se parliamo di contesti più significativi come la finanza, la medicina, la giustizia o, addirittura, non so, la sicurezza nazionale?

Cosa faremmo se un'Intelligenza artificiale raccomandasse, ad esempio, a chi comanda una nazione di sacrificare un consistente numero di cittadini, o i loro interessi, al fine di salvarne, in base a suoi calcoli e valutazioni, un numero ancora maggiore?

Se pensi che il mio ragionamento sia troppo astratto, devi sapere che, ad esempio, il problema di trovarsi a dover prendere decisioni mediche in contrasto con un sistema di Intelligenza Artificiale è in realtà già molto attuale.

Un articolo del [Wall Street Journal](https://www.wsj.com/articles/ai-medical-diagnosis-nurses-f881b0fe) approfondisce appunto la questione della responsabilità di scelta nelle strutture mediche americane, riportando le storie di vari infermieri e le politiche dei centri medici presso i quali essi lavorano.

Riassumendo brevemente, le cose cambiano a seconda della struttura e della situazione ma, in teoria, sembra che l'idea di fondo sia quella di far ricadere la responsabilità di scelta sul personale umano, tentando di non fargli pesare eventuali azioni attuate in contrasto con i suggerimenti della macchina.

E sembra anche che, quando eventualmente una tale configurazione non risulta possibile, siano gli stessi professionisti del settore a rifiutare di prendere in carico su di sé il peso della scelta.

Ma siamo proprio sicuri che una tale organizzazione funzioni realmente? Siamo sicuri che basti formulare una serie di regole per fare in modo che persista la libertà di scelta in scienza e coscienza?

Facciamo un esperimento mentale. Supponiamo che un'Intelligenza Artificiale faccia una previsione su un paziente diversa rispetto a quella del medico curante. Come si comporterà, presumibilmente, tale medico?

A mio avviso, lui - o lei - sarà incentivato a confermare la previsione del software, anche se ciò significa andare contro la propria opinione.

Per spiegarmi ti faccio un esempio: immaginiamo che arrivi in ospedale un paziente con una qualche patologia da identificare.

Supponiamo che un modello di Machine Learning faccia la diagnosi corretta, mentre il medico ne faccia una sbagliata. Il professionista decide che la sua decisione è quella definitiva e il paziente peggiora e muore.

Il medico, allora, è chiamato a giustificarsi sui fatti avvenuti e viene fuori che questi si è ostinato a mantenere la sua posizione, nonostante la macchina gli dicesse il contrario e così la sua situazione legale e disciplinare si aggrava.

Perché si è comportato in quel modo? Perfino l'Intelligenza Artificiale aveva individuato la giusta diagnosi! Avrebbe fatto meglio ad uniformarsi all'idea della macchina!

Ora supponiamo, invece, che la IA faccia la diagnosi sbagliata, mentre il medico faccia quella giusta. Il professionista, però, questa volta decide di adeguarsi alla scelta del software. Il nostro povero paziente di nuovo peggiora e muore e, anche in questo caso, il medico è chiamato a giustificare la propria scelta.

Perché si è comportato in quel modo? Beh, questa volta il professionista può sostenere che in scienza e coscienza, purtroppo, non ha riconosciuto i sintomi e persino la macchina era d'accordo con lui nel sostenere la tesi sbagliata. Quindi perché avrebbe dovuto opporsi?

Come vedi, quindi, in entrambi i casi, al medico conviene adeguarsi alla scelta della macchina. La sua posizione, infatti, in questo modo risulta più difendibile anche se è sbagliata e porta a conseguenze fatali per il povero paziente.

La conclusione è che, secondo me, creare le condizioni teoriche affinché la collaborazione tra uomo e macchina sia messa in pratica in modo efficiente - e soprattutto responsabile - è tutt'altro che semplice.

E se te lo stai chiedendo: no, con l'avanzare della tecnologia di Machine Learning la cosa non si risolverà da sola.

Se prendiamo i nuovi modelli di ragionamento, ad esempio, essi non mitigano affatto il problema, anzi secondo [un altro studio](https://arxiv.org/pdf/2501.09775), essi risultano ancora più convincenti dei propri predecessori anche quando restituiscono allucinazioni.
