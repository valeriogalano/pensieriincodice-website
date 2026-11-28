---
title: "Sistemi di raccomandazione: algoritmi dalla precisione sorprendente"
date: Sun, 17 Oct 2021 04:00:03 +0000
tags: ["algoritmi", "social network"]
type: blog
author: Valerio Galano
episode: 70
curated_by: Engram
generated_with: gpt-6.2-sol
---

Che ne siamo consapevoli o meno, ogni giorno, quando acquistiamo prodotti, guardiamo film, serie TV e video, ascoltiamo musica, visitiamo i social network, cerchiamo qualcosa sui motori di ricerca, stiamo sia utilizzando i cosiddetti sistemi di raccomandazione sia contribuendo al loro miglioramento.

Sono quegli stessi algoritmi di intelligenza artificiale che sono alla base del funzionamento di compagnie come Amazon, Google, Facebook e che guidano letteralmente molte delle nostre scelte quotidiane.

Proviamo a capire [come funzionano questi algoritmi](https://www.youtube.com/watch?v=pt9YCVX7VOk) e perché in certi casi sembrano comportarsi in modo strano, mentre in altri sembra quasi che ci leggano nel pensiero.

## Consigli più o meno velati

Fino a qualche anno fa, se volevamo un consiglio su cosa leggere, comprare o guardare, ci rivolgevamo a qualche persona di fiducia, un amico, un parente o, nel migliore dei casi, un esperto.

Oggi non è più così. Siamo continuamente bombardati da consigli più o meno velati.

I video correlati di YouTube o i suggerimenti di Amazon, ad esempio, sono piuttosto evidenti.

I risultati selezionati da Google o i post nello stream di Instagram, Facebook o Twitter, invece, lo sono di meno, ma non per questo sfuggono all'elaborazione da parte di un sistema di raccomandazione che li filtra per noi.

Paradossalmente, sembra che questi consigli automatizzati siano anche molto aderenti ai nostri gusti e ci attirino e ci tengano incollati più del consiglio di un amico o un conoscente.

A volte sono così inquietantemente precisi che non è raro che si verifichino casi strani e sospetti che hanno portato chi non conosce il funzionamento di questi sistemi a convincersi di idee un po' particolari.

Sicuramente ti sarà capitato di parlare con qualcuno che abbia il sospetto di essere spiato perché, dopo una serata con gli amici in cui si è parlato di, non lo so, posate pieghevoli in legno di faggio, si è trovato poi un post sponsorizzato su Instagram o Facebook che cercava di vendergli posate pieghevoli.

Oppure, un altro classico è quello convinto che YouTube voglia convincerlo a cambiare schieramento politico perché nelle pubblicità infila video di 20 minuti su un argomento del tutto contrario alle sue idee.

Ecco, io posso capire che questi e tanti altri casi siano abbastanza inquietanti, però in verità essi hanno spiegazioni che diventano anche abbastanza banali se si conoscono i sistemi di raccomandazione.

La conoscenza rende le cose più tristi, lo so...

Iniziamo col dire che la scelta di tutti gli elementi che ci vengono suggeriti mentre navighiamo sul Web, palesi o no, si può ricondurre ad [un pugno di strategie di base](https://medium.com/mediarithmics-what-is/what-are-recommendation-systems-and-how-do-they-work-91aa8bf3ec11).

Quello che mi interessa non è catalogare tutti questi algoritmi, quanto piuttosto arrivare semplicemente ad un livello di comprensione sufficiente per fare qualche riflessione insieme e capire le basi del loro comportamento.

Tieni presente quindi che ti basterà una semplice ricerca sul Web per trovare informazioni molto più dettagliate. Qui su Pensieri in codice ci interessa capire i concetti informatici che influiscono più o meno direttamente sulla nostra vita.

Quindi, tornando ai nostri algoritmi di raccomandazione, mi interessa esaminare giusto un paio di approcci.

## Approccio basato sull'oggetto

L'approccio basato sull'oggetto è abbastanza banale e infatti è adatto per applicazioni abbastanza semplici e con un numero di attori limitato.

Per *oggetto* si intende una qualsiasi cosa che si intende suggerire: un tweet, un prodotto, un'immagine, un utente da seguire, qualsiasi cosa.

Questo approccio consiste in pratica nello stabilire delle caratteristiche comuni tra gli oggetti (canzoni dello stesso autore, libri dello stesso genere, video nella stessa lingua) e nell'utilizzare tali caratteristiche per scegliere il prossimo oggetto da suggerire ad un utente.

Stai ascoltando un episodio di Pensieri in codice? Allora l'algoritmo ti propone altri episodi di Pensieri in codice. Hai guardato un film horror? L'app ti suggerisce altri film horror. Semplice.

Va da sé, però, che questo approccio è molto limitato. Funziona per piccoli gruppi di oggetti e consumatori e rischia di lasciare completamente fuori dai giochi molti oggetti che non verranno mai raccomandati.

Se lo si utilizza in modo assoluto, al nostro utente verranno proposti sempre gli stessi podcast e gli stessi film. E questo non va affatto bene per cataloghi grandi e siti sui quali si acquista con una certa frequenza.

## Approccio collaborativo sugli oggetti

Il secondo approccio, invece, si basa, potremmo dire, sul concetto di gradimento.

L'approccio collaborativo sugli oggetti, infatti, prima raggruppa gli utenti in gruppi (che in gergo vengono chiamati cluster) in base all'apprezzamento espresso per determinati oggetti.

Poi, una volta capito il cluster o i cluster di appartenenza dell'utente, cerca gli oggetti più graditi tra gli altri consumatori degli stessi cluster e li raccomanda al soggetto esaminato.

Ad esempio, ti piacciono i film della Marvel e odi quelli della DC. Quando deve suggerirti il prossimo film, l'algoritmo cerca tutti quelli che come te odiano DC e amano Marvel, e fra le loro preferenze cerca il film più apprezzato.

Questo approccio, come potrai immaginare, richiede molte più informazioni. Innanzitutto un sistema per indicare il gradimento, lo storico degli acquisti, un archivio di utenti e di cluster. Ma ovviamente risulta molto più funzionale e potente del precedente.

Il concetto di fondo è che, man mano che cresce la precisione di questi algoritmi, deve crescere anche la quantità di dati necessari a farli funzionare.

Infatti, il primo approccio che ti ho descritto funziona solo per realtà piccole e va degradando nelle prestazioni al crescere del numero di consumatori, mentre il secondo funziona bene quando sono presenti molti utenti e oggetti, faticando molto invece ad essere preciso in contesti ristretti.

Ora, noi non sappiamo *esattamente* come funzionano gli algoritmi di raccomandazione dei giganti di BigTech. Sono segreti, non lo vengono certo a dire a noi, però possiamo essere certi che servano approcci in grado di funzionare in contesti enormi.

Possiamo fare supposizioni e deduzioni a partire dal comportamento di questi sistemi, dalle spiegazioni sui blog, dalle privacy policy.

Per Amazon, YouTube, Spotify e compagnia, avere un sistema di raccomandazione efficace, preciso e performante è fondamentale e contribuisce enormemente ad incrementare la popolarità e le entrate economiche delle loro piattaforme.

Proviamo quindi a fare un piccolo sforzo in più e cerchiamo di capire come funziona il sistema di raccomandazione di YT, IG o FB. Così facendo capiremo anche perché qualche volta sembra spiarci o qualche altra voler influire sulle nostre idee.

L'approccio sul gradimento che ti ho descritto prima potrebbe essere sufficiente già a spiegare il comportamento, ad esempio, di Amazon.

Gli utenti comprano e lasciano recensioni. Gli oggetti hanno tante caratteristiche codificate. Ci sono le informazioni sufficienti per applicare il metodo descritto senza troppe difficoltà e con buoni risultati.

Ma la verità è che questi sistemi fanno molto di più. Le informazioni da loro utilizzate per definire i cluster arrivano ad un livello di complessità che non tutti immaginano.

Quando FB consiglia un post o YouTube un video o IG una foto, l'oggetto consigliato è sostanzialmente il frutto dell'elaborazione di categorie di dati: le informazioni di contesto e le informazioni sull'utente.

Il contesto riguarda appunto la situazione in cui l'utente si trova al momento: cosa ha appena finito di guardare, cosa guarda in questo periodo, ma anche banalmente che giorno è, che ore sono, se per quell'utente è un giorno di festa o feriale, in quale luogo del mondo si trova (continente, nazione, comune, via).

Le informazioni che ricadono nella categoria utente sono quelle più, diciamo, creepy.

Sicuramente, fra queste, ci sono i dati espressi volontariamente: i like, i dislike, l'inserimento in una certa lista o la condivisione di un contenuto.

È chiaro che queste informazioni finiscano nel calderone e il social le utilizzi, ma poi ci sono i dati estrapolati dal comportamento.

Il nostro modo di muoverci sulla piattaforma è fonte di dati molto interessanti: per quanto tempo ascoltiamo o guardiamo qualcosa, se saltiamo parti di un video, quanto velocemente scorriamo le pagine, se accediamo ad una playlist, per quanto tempo la guardiamo, se clicchiamo su un contenuto o torniamo indietro.

Tutti questi comportamenti vengono registrati ed utilizzati per cercare di capire cosa ci piace e cosa non ci piace. In pratica vanno ad integrare le nostre preferenze espresse esplicitamente per formare una sorta di recensioni ibride, in parte volontarie e in parte no, dei contenuti che ci capita di incontrare sulla piattaforma.

E già questo potrebbe sembrare abbastanza inquietante.

C'è ancora un ulteriore tipo di dati riguardanti l'utente, utilizzati dal sistema di raccomandazione, che però, a ben dire, sono di fatto pura invenzione.

Si tratta delle cosiddette informazioni inferite.

Grazie ai loro sistemi di machine learning, coloro che possiedono tutti questi dati che ci riguardano sono poi in grado di fare delle assunzioni su di noi, sulle nostre caratteristiche e preferenze.

E sono assunzioni non da poco.

Si parla infatti di algoritmi in grado di indovinare età, genere, livello di educazione, status economico, etnia, preferenze sessuali, politiche, religiose.

Google, Amazon e compagnia riescono a capire per quale schieramento politico simpatizza un proprio utente, qual è il suo credo religioso, quanto ha studiato e quanto guadagna.

Tutto questo a partire da come si muove sulla piattaforma, cosa guarda, cosa scarta, ecc.

Non si tratta di informazioni attendibili al 100%, ma si parla comunque di un buon grado di affidabilità, visto che su di esse si basa la vendita di spazi pubblicitari. E comunque, te ne sarai reso conto, alla fine i contenuti suggeriti non sono poi così campati in aria.

Se il «fascicolo» che un social network ha messo insieme su di te fosse poco accurato, anche i suggerimenti sarebbero tendenzialmente sbagliati o al massimo casuali.

Il fatto invece che siano precisi e spesso anche interessanti o, perché no, sorprendenti per l'utente che li riceve significa che tutto sommato la strategia funziona.

Tornando al concetto espresso all'inizio, perché sembra che i sistemi di raccomandazione ci conoscano così bene? La risposta è chiara: perché è così. Ci conoscono.

A volte conoscono i nostri gusti e i nostri interessi meglio delle persone con cui viviamo e interagiamo tutti i giorni.

E questo perché interpretano dei comportamenti e dei segnali che magari nemmeno ci rendiamo conto di produrre.

Questa precisione impressionante, unita al fatto che più ci si allontana dal sapere comune, più questi meccanismi assumono una connotazione magica, contribuisce ad alimentare alcune delle leggende metropolitane di cui parlavamo prima.

Le persone arrivano a credere di essere spiate da FB o IG perché, se parlano con qualcuno di un argomento, durante la giornata o nei giorni successivi vedono comparire sui social offerte riguardanti quell'argomento.

La realtà però è che questo fenomeno si spiega facilmente con la combinazione di alcuni fattori.

Innanzitutto, la tendenza umana a dare spiegazioni complesse anche a fenomeni casuali: ogni giorno noi parliamo di un sacco di cose e vediamo un sacco di cose.

Ecco che, se casualmente alcune di queste combaciano, gridiamo subito al complotto trascurando le centinaia di altre combinazioni che non hanno combaciato.

E in secondo luogo dobbiamo tenere conto delle informazioni di contesto.

Se parliamo con persone che conosciamo e che ci sono vicine sia geograficamente che per interessi, conoscenze, ecc., dobbiamo supporre che i loro contesti siano simili ai nostri, e anche le informazioni inferite dai sistemi di raccomandazione saranno simili.

Questo probabilmente ci colloca negli stessi gruppi di utenti (o cluster, per usare il termine tecnico) o comunque ci suddivide in modo affine.

E cosa potrebbe mai succedere se alcuni elementi di un gruppo manifestano interesse per un nuovo argomento? Magari cercando sui motori o sui social quell'argomento?

Il sistema di raccomandazione ha una nuova freccia al proprio arco da usare e inizia a proporla agli altri appartenenti al gruppo.

Così, quando ci capiterà un video sui giocattoli gommosi per cani, potremmo casualmente decidere di dirlo ai nostri amici e uno di loro si sorprenderà per aver cercato giocattoli per il proprio cane il giorno prima.

Oppure, che fa un sistema di raccomandazione se dalle posizioni degli smartphone evince che i loro proprietari si sono incontrati e hanno trascorso del tempo insieme?

Perché non provare a [proporre agli uni gli interessi degli altri](https://twitter.com/RobertGReeve/status/1397032784703655938)? Magari, con un po' di fortuna, avranno parlato degli interessi di qualcuno di loro, facendo venire agli altri la voglia di acquistare qualcosa.

E quindi ecco che una sera si parla di orologi da polso fra amici, i nostri telefoni risultano molto vicini per un certo periodo di tempo e nei giorni successivi qualcuno vede una pubblicità o riceve una mail di orologi in super offerta.

I sistemi di raccomandazione, spesso e volentieri, scelgono anche quali email mandare a chi.

Ormai queste scelte sono quasi totalmente guidate dal machine learning. L'intervento umano serve solo a dare una direzione di massima, poi il resto è tutto automatizzato.

E quando invece i contenuti proposti sono totalmente contrari ai nostri interessi? Se il sistema è così preciso, perché YouTube (mi è capitato da poco) mi piazza uno spot o mi consiglia un video di destra quando io guardo solo contenuti di sinistra?

Per capire questi fenomeni, in realtà, la domanda da porsi è diversa.

Abbiamo detto che i sistemi di raccomandazione sono molto efficienti a proporre i contenuti migliori. Ma dobbiamo anche capire [per chi sono i contenuti migliori](https://www.youtube.com/watch?v=S0pE87hADUU).

La cosa importante da capire è che, per piattaforme come YT o IG o simili, la risorsa da massimizzare è il tempo che gli utenti trascorrono guardando i contenuti, quello che in gergo si chiama engagement. E questo per loro stessa ammissione. Esiste un paper che risale, credo, al 2019 e che spiega questa cosa.

E, a pensarci bene, la verità è che non sono solo i contenuti che ci piacciono a tenerci sui social. Succede anche con quelli che ci infastidiscono e ci fanno innervosire.

O con quelli che ci sorprendono, come le [teorie di cospirazione](https://www.youtube.com/watch?v=r98HbsaN9nw), il terrorismo e i contenuti divisivi di vario genere.

Magari non ci piacciono, li riteniamo stupidi, sbagliati, ma tendiamo comunque a guardarli, magari per criticarli o perché vogliamo vedere quante sciocchezze riescono a dire. Comunque gli concediamo parti anche molto grandi del nostro tempo.

In fin dei conti pare che questa tecnica funzioni e non ha niente a che fare con il tentativo dei social di sovvertire nazioni o ordinamenti politici o spargere teorie complottiste. È un mero espediente per incrementare l'engagement.

È semplicemente un modo diverso per ottenere lo stesso scopo.
