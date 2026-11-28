---
title: "Snippet - Il Problema del Commesso Viaggiatore (TSP)"
date: Mon, 06 Feb 2023 16:40:01 +0000
tags: ["ottimizzazione"]
type: blog
author: Valerio Galano
episode: 114
curated_by: Engram
generated_with: gpt-6.2-sol
---

[Il problema del commesso viaggiatore](https://en.wikipedia.org/wiki/Travelling_salesman_problem) (anche noto come TSP, dall'inglese *Traveling Salesman Problem*) consiste nell'individuare il percorso più breve che un ipotetico commesso viaggiatore dovrebbe compiere per visitare un certo numero di città e tornare poi al punto di partenza, senza mai passare due volte per la stessa città.

Si tratta di un [problema matematico di ottimizzazione](https://books.google.com/books?id=qbFlMwEACAAJ), cioè un problema la cui soluzione consiste nel trovare il valore ottimo di una determinata funzione obiettivo, tenendo in conto specifiche limitazioni, note anche come vincoli.

Lungi dall'essere un semplice artificio matematico, il TSP ha moltissime applicazioni pratiche: una fra tutte è ovviamente la logistica, la pianificazione di percorsi ed itinerari, che migliora notevolmente fattori come il traffico o l'efficienza nella consegna e distribuzione delle merci.

Oltre a questa, altri esempi di applicazioni forse un po' meno intuitivi sono la pianificazione di risorse, la realizzazione di microchip, l'apprendimento di algoritmi di intelligenza artificiale, perfino il sequenziamento del DNA.

## L'origine del TSP

L'origine del TSP non è chiarissima. Se ne parla addirittura in un [libretto di appunti per commessi viaggiatori del 1832](https://zs.thulb.uni-jena.de/receive/jportal_jparticle_00248075), con tanto di descrizione del problema ed esempi di tragitti che attraversavano la Germania e la Svizzera, anche se l'intenzione di tali appunti era chiaramente di risoluzione pratica, non di studio teorico, vista la completa assenza di dettagli matematici.

Sempre nel diciannovesimo secolo, però, il matematico, fisico e astronomo irlandese William Hamilton inventò un gioco, [*the icosian game*](https://www.daviddarling.info/encyclopedia/I/Icosian_Game.html), che consisteva nell'unire tutti i vertici di un dodecaedro con un'unica linea continua chiusa. E, guarda caso, la soluzione di tale gioco era proprio la soluzione al problema del commesso viaggiatore prendendo in considerazione 20 città.

Ad ogni modo, i primi studi veri e propri sul TSP iniziarono negli anni '30 del secolo scorso e fu subito chiaro che il problema in questione fosse di tipo cosiddetto NP-completo. In primo luogo, si tratta di un problema che non può essere risolto in modo efficiente. Oltre a ciò, ha la caratteristica che qualsiasi altro problema NP può essere matematicamente trasformato in un'istanza del TSP.

Queste sue caratteristiche lo resero immediatamente abbastanza famoso nei circoli matematici e la sua fama crebbe ancora quando, negli anni '50 e '60, iniziarono ad essere offerti premi in denaro a chi fosse riuscito a risolverlo in maniera efficiente.

Nonostante tali incentivi, però, ad oggi il TSP è ancora un problema privo di una soluzione efficiente: l'unico modo per ottenere la soluzione esatta, infatti, è tracciare tutti i possibili percorsi e valutarne il migliore. Ma è chiaro che se parliamo di 3 o 4 città è un conto, mentre se consideriamo, ad esempio, 150 città, il carico di lavoro diventa praticamente ingestibile.

Il risultato di ciò è che, attualmente, per la risoluzione del TSP per quantità importanti di nodi vengono utilizzati degli algoritmi euristici, cioè algoritmi la cui soluzione è solo probabilmente esatta e che non assicurano che essa sia quella ottima.

## Studi su esseri viventi

Negli ultimi anni, il problema del commesso viaggiatore ha iniziato ad attirare attenzione anche al di fuori della comunità matematica ed informatica. In particolare, sono stati condotti studi su esseri viventi per determinare la loro capacità di trovare la soluzione ottima.

Gli esseri umani, ad esempio, sono risultati particolarmente adatti, riuscendo ad individuare rapidamente, a colpo d'occhio, soluzioni molto vicine a quella ottima, con una perdita di efficienza di circa l'1% in caso di [10 o 20 nodi](https://link.springer.com/article/10.3758/BF03213088). La perdita saliva fino all'11% in caso di [120 nodi](https://docs.lib.purdue.edu/jps/vol1/iss1/4/).

Anche [studi condotti sui piccioni](https://link.springer.com/article/10.1007/s10071-011-0463-9) hanno mostrato come essi siano in grado di pianificare itinerari complessi e quasi ottimali per visitare in modo efficiente una serie di mangiatoie, dimostrando come anche tali animali vantino abilità naturali nell'avvicinarsi alla soluzione ottima del TSP.

## Le api

Negli anni '10 la fama del problema del commesso viaggiatore raggiunse perfino le grandi masse. La stampa generalista diffuse infatti la notizia che gli esemplari di alcune specie di api fossero in grado istintivamente di risolvere il problema del commesso viaggiatore, con titoli del calibro di [*Il piccolo cervello delle api batte i computer*](https://www.themarysue.com/bees-havent-solved-traveling-salesman-problem/).

Sarebbe stato bello, ma in effetti si trattò semplicemente di una cattiva interpretazione del paper di una ricerca scientifica.

Le api, infatti, si sono dimostrate abili nello spostarsi da un fiore all'altro scegliendo il percorso più breve. Questo è vero, ma ciò è ben lontano dall'essere in grado di risolvere il problema del commesso viaggiatore. In più, non essendo noi stessi in grado di calcolare l'ottimo percorso tra centinaia o addirittura migliaia di fiori utilizzando un computer, come potremmo giudicare se quello effettuato da un'ape sia effettivamente l'ottimo o meno?
