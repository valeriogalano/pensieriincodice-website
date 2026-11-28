---
title: "La trappola della semplicità (riflessioni dal containerday 2023)"
date: Sun, 05 Nov 2023 16:30:02 +0000
tags: ["riflessioni"]
type: blog
author: Valerio Galano
episode: 122
curated_by: Engram
generated_with: gpt-6.2-sol
---

Dal momento che il [containerday](https://2023.containerday.it/) è una conferenza totalmente incentrata sulla tecnologia di containerizzazione, mi sembra doveroso introdurre almeno a grandi linee il concetto di container per fugare eventuali dubbi.

## Il concetto di container

Per container, in ambito informatico e in particolare in ambito DevOps, si intende un particolare meccanismo di virtualizzazione del sistema operativo nel quale eseguire un software.

Semplificando al massimo, diciamo che in generale un software, per funzionare, ha bisogno di un ambiente con determinate caratteristiche che spaziano dalla tipologia di sistema operativo alla potenza di calcolo, alla quantità di memoria, alla possibilità di eseguire determinate operazioni, alla presenza di specifici moduli e librerie da sfruttare, e via discorrendo.

Ora, questo ambiente può essere il normale sistema operativo di un computer o di un server, configurato a dovere, oppure un suo sottoinsieme, nel quale sono presenti solo le caratteristiche minime necessarie e che, genericamente, prende il nome di container o sistema operativo virtuale.

Oltre a fornire lo spazio di lavoro più efficiente possibile, il container isola anche il proprio contenuto dall'esterno, assicurando, in questo modo, che i software al proprio interno non possano sconfinare nel sistema operativo della macchina ospite se non espressamente autorizzati.

In una condizione del genere è chiaro che da un lato il container deve includere tutto ciò che serve al proprio software per funzionare correttamente, mentre dall'altro può ignorare o mancare di tutto il resto.

L'utilizzo dei container ha una miriade di vantaggi. Riassumendo all'osso, permette a chi deve occuparsi del software all'interno di preoccuparsi di un numero limitato di fattori e a chi deve occuparsi di ospitare il container di maneggiare una scatola nera che può avviare, duplicare, trasferire e in generale maneggiare con molta più semplicità.

## Il containerday

Al containerday vengono affrontati vari aspetti della containerizzazione del software: aspetti sistemistici per la corretta gestione dei container e aspetti programmatici per la corretta implementazione dei container stessi.

Si affrontano anche aspetti di DevOps, attività che rappresenta un po' il punto di fusione tra questi due mondi.

Il containerday è stato davvero interessante.

Purtroppo io non ho potuto partecipare in presenza, e questo mi dispiace sempre perché il confronto diretto con i partecipanti è più stimolante. Tuttavia ho guardato da remoto tutti i talk e ne ho trovati vari veramente interessanti.

Sicuramente bellissimo è stato l'excursus storico iniziale, che mi ha fatto scoprire che il concetto di container risale addirittura a metà del secolo scorso.

Poi interessanti sono state anche le varie esposizioni di strumenti e metodologie per gestire il passaggio al modello containerizzato, le configurazioni dei container, il monitoraggio dei sistemi.

## Fame di semplificazione

Ma se dovessi individuare una parola comune, un concetto cardine, un filo conduttore dell'intera giornata, oltre ovviamente a quello di container, direi proprio che potrebbe essere la *semplificazione*.

Raramente ho percepito una tale fame di semplificazione su tutti i fronti.

In effetti, nel mondo container, forse ancora di più che in altre branche dell'informatica, c'è stata, negli ultimi anni, un'esplosione di complessità. O perlomeno essa è particolarmente sentita in questo ambito.

L'adozione in tempi recenti da parte di tante realtà è stata fortissima. E questo ha creato, ovviamente, molto caos legato all'espansione improvvisa.

Diversi approcci, diverse tecnologie e diverse professionalità, tutte mescolate insieme a produrre nuovi risultati in modi spesso eterogenei e un po' confusionari.

Capiamoci: si tratta di un processo abbastanza naturale, specialmente nel campo dell'informatica moderna. Tuttavia, forse per una maggiore consapevolezza ed esperienza delle persone coinvolte, forse per il fatto che ultimamente anche la società si è evoluta (con leggi come il GDPR o il CRA), la spinta a normalizzare e standardizzare la situazione mi è sembrata particolarmente forte.

In effetti, il concetto di container è di fatto uno strato aggiuntivo che si posiziona a metà strada tra i concetti classici di sviluppo software e amministrazione di sistemi.

E come tutti i layer intermedi, da una parte semplifica la vita ai layer sovrastanti e sottostanti, ma dall'altra rappresenta esso stesso un fattore di complessità.

La nascita di una figura professionale come il DevOps, a metà tra sviluppatore e sistemista, è un chiaro esempio di questa complessità aggiuntiva.

Un altro esempio è il fatto che i container stessi abbiano delle proprie dipendenze e configurazioni, debbano rispettare requisiti specifici funzionali e di sicurezza e richiedano un forte uso di automazione.

Tutti questi sono fattori che contribuiscono per forza di cose a rendere i sistemi più complessi da gestire.

Insomma, se fino a qualche anno fa la prassi era di doversi occupare di tenere in piedi i server e produrre gli artefatti dei software, ora ci sono anche da sviluppare e manutenere le pipeline, i container, i pod, e così via.

## La strada verso la semplificazione è per le persone

Dal momento che i container portano con sé una quantità enorme di benefici, ovviamente nessuno si sognerebbe mai di pensare che la soluzione a questo incremento di complessità possa essere evitare di utilizzarli.

La spinta che questa nuova tecnologia ha portato nel campo dello sviluppo software è assolutamente indiscutibile.

Come invece è giusto che sia, gli esperti del settore hanno elaborato e stanno ancora elaborando soluzioni per semplificare tanti aspetti della questione. E questa tendenza è venuta fuori chiara e forte dal containerday.

Si è parlato di sistemi di sicurezza, di monitoraggio avanzato, di meccanismi per assicurare la consistenza delle configurazioni, di metodologie per semplificare la migrazione da contesti non containerizzati.

Ma l'idea di fondo, quella di cui non si è parlato esplicitamente ma che si poteva facilmente leggere fra le righe, quella che tutto sommato pervade da sempre il mondo dell'informatica, è stata che la semplificazione, in fin dei conti, non è un fattore che riguarda le macchine o i software, ma le persone.

Si possono aggiungere e immaginare i più disparati servizi di controllo e correzione, i più complessi framework e standard di implementazione, ma alla fine i sistemi sono sempre sistemi e sono invece le persone che ci lavorano che determinano semplicità o complessità.

## Definizione di semplice

Man mano che ho accumulato esperienza come sviluppatore e progettista di software, ho iniziato sempre più a preferire le soluzioni semplici a quelle complesse.

È una bella frase, lo so, d'effetto. Ma se ci pensi un attimo: chi non preferisce le soluzioni semplici?

Il vero problema, nel mondo del software, è definire quali siano effettivamente le soluzioni semplici.

Una soluzione semplice potrebbe essere quella composta da poche righe di codice. Oppure quella che incarna al meglio gli standard di codifica attuali. Oppure ancora quella più generica possibile, che funziona bene dovunque serva, o quella che rispetta al meglio le specifiche.

La soluzione più semplice potrebbe essere quella più facile da mettere in campo, quella più facile da manutenere, quella più facile da sostituire, quella più facile da comprendere o tutte queste cose insieme.

La verità è che la semplicità non è misurabile come lo sono invece la lunghezza, il peso o il tempo di elaborazione.

Non puoi assegnare un numero o un valore alla semplicità. O meglio, puoi farlo, ma ti ritrovi nella stessa condizione di prima, a dover definire come assegnare tale valore. Quindi sei da capo.

E questo perché la semplicità non è un fattore oggettivo. È un fattore umano e, come moltissimi altri fattori umani, è soggettivo.

## Il fattore umano

La semplicità non è qualcosa che importa alle macchine. In nessun caso.

Le macchine eseguono le istruzioni sia che la soluzione che mettono in campo sia semplice sia che sia complessa.

Forse una soluzione complessa richiederà più tempo, ma le macchine non hanno il nostro stesso concetto di tempo. Lo sanno valutare e calcolare, ma non ne percepiscono la finitezza, come invece facciamo noi.

La differenza tra semplice e complesso importa solo alle persone.

Una soluzione più semplice, qualsiasi cosa questo voglia dire, porta con sé dei vantaggi per le persone che devono lavorarci, per i loro scopi, per le loro percezioni, per i loro stati d'animo.

Ed è proprio questo il punto: la semplicità è per le persone e dipende dalle persone e anche dal contesto.

Prima di tutto è necessario capire COSA le persone in gioco considerano più semplice e poi è possibile estrarre una serie di regole che aiutino a definire e valutare la semplicità relativa al contesto considerato.

Spesso accade che molte di queste regole siano comuni a più contesti ed è grazie a questo fatto che possono esistere gli standard, i framework, le convenzioni e tutti gli strumenti che solitamente usiamo per direzionare lo sviluppo.

Ma ogni contesto avrà sempre una qualche peculiarità che lo differenzia dagli altri e tenere conto di questo è fondamentale per formulare la propria corretta definizione di semplicità.

## La responsabilità ed il tempo necessario

Una volta capito che cosa vuol dire per noi semplicità e una volta stabilite le nostre regole in merito, qualunque esse siano, dobbiamo però anche fare in modo che queste vengano applicate e rispettate.

Alle macchine, in generale, questo discorso non interessa, ma è sempre possibile implementare meccanismi automatici che aiutino a pilotare le cose verso la semplicità o a valutare i risultati.

Vari talk del containerday erano incentrati proprio su questo tipo di attività: quelli sull'eliminare il configuration drift o sull'indirizzare lo sviluppo degli operators, ad esempio.

In fin dei conti, però, a mio parere, il segreto per ottenere le soluzioni semplici e soprattutto mantenerle tali nel corso della vita di un qualsiasi progetto è fare leva sulla responsabilità.

Le soluzioni sono realizzate dalle persone e, per come la vedo io, devono anche avere sempre dei responsabili.

Attenzione: quando parlo di responsabilità non intendo dire che, se si verifica un problema in quella porzione di codice o a causa di quella configurazione, allora la persona che l'ha programmata deve essere punita in qualche modo. Ovviamente questo non è utile.

Intendo, invece, che quando si produce una soluzione, deve esserci sempre qualcuno che non solo lo faccia seguendo le direttive prefissate, ma che continui a migliorare e mantenere quella caratteristica nel corso del tempo.

Il responsabile di qualcosa può essere il suo stesso autore o qualcun altro. Non importa.

Ciò che importa è che a quel codice, a quella pipeline, a quella libreria, a quel servizio, a quel server o a qualsiasi altro elemento, qualcuno sia designato a dedicare del tempo. Il giusto tempo.

Questa persona deve avere la responsabilità e le risorse per seguire e curare la propria porzione di sistema, intervenendo dove e quando necessario e interagendo con i responsabili dei sistemi collegati.

Prevedere del tempo per queste attività è indispensabile.

Solo in questo modo sarà possibile avere soluzioni veramente semplici e funzionali. E l'insieme di elementi semplici e funzionali darà vita a sistemi migliori in un circolo virtuoso che farà bene a tutti: dagli sviluppatori al cliente finale.
