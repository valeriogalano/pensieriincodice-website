---
title: "Snippet - y2038"
date: Sun, 06 Feb 2022 11:30:02 +0000
tags: ["storia dell'informatica", "curiosità", "programmazione"]
type: blog
author: Valerio Galano
episode: 86
curated_by: Engram
generated_with: gpt-6.2-sol
---

Quando si parla di computer, i valori del calendario e dell'orologio, che per noi comuni mortali sono solitamente mostrati in forma di anno/mese/giorno, ore:secondi ecc., sono in realtà considerati come un unico numero intero. In particolare, è il numero di secondi che separano la data in questione da un'altra specifica data conosciuta come Epoca e corrispondente al 1º gennaio 1970.

Ad esempio, la mezzanotte del giorno di Natale del 2021 è rappresentata da gran parte dei programmi e dei sistemi operativi come 1.640.390.400 secondi dall'Epoca.

Ma ad un livello ancora più basso, cioè più vicino al modo in cui i computer trattano le informazioni, più o meno qualsiasi dato è rappresentato in forma di codice binario, quindi per mezzo di una sequenza più o meno lunga di cifre zero e uno.

Dunque, in informatica, data e ora vengono prima rappresentate come numero di secondi dall'Epoca e poi, a sua volta, questo numero di secondi viene invece rappresentato come sequenza di bit.

Con un sistema a 32 bit, architettura che sta ultimamente sparendo dai device più moderni ma che è ancora largamente utilizzata in molte applicazioni professionali o industriali, è possibile rappresentare al massimo i numeri fino a 2.147.483.647, riservando un bit per indicare se il numero è positivo o negativo.

Tale valore massimo, se calcolato come secondi dall'Epoca, corrisponde alle 03:14:07 del 19 gennaio 2038.

Arrivati a tale data e ora, quindi, il passaggio al secondo successivo in un sistema a 32 bit causerà un errore di rappresentazione per cui l'intero numero verrà invertito e considerato negativo.

In pratica, in una rappresentazione a 32 bit, nell'arco di un secondo, l'orologio passerà dalle 03:14:07 del 19 gennaio 2038 direttamente alle 20:45:52 del 13 dicembre 1901.

Ovviamente, un qualsiasi sistema o programma che si trovi coinvolto in un errore del genere difficilmente riuscirà ad espletare correttamente le proprie funzioni e tale evento potrebbe portare a risultati inaspettati.

[Come per il ben più conosciuto Millennium Bug](https://www.theguardian.com/technology/2014/dec/17/is-the-year-2038-problem-the-new-y2k-bug), però, non è certo il caso di disperare perché, essendo a conoscenza del problema, si sono già elaborate varie contromisure e serve solo metterle in atto prima dell'arrivo della fatidica data.

## Il video di Gangnam Style

Già conosciuto dal 2006, infatti, il problema della rappresentazione massima di un intero in 32 bit è salito alla ribalta quando, nel 2014, la pagina del video di Gangnam Style disponibile su YouTube è andata in crash perché [il contatore delle visualizzazioni ha superato i 2 miliardi e 147 milioni](https://www.independent.co.uk/life-style/gadgets-and-tech/news/year-2038-problem-how-did-gangnam-style-predict-new-millennium-bug-9930945.html), mandando in tilt la variabile a 32 bit che non riusciva più a contenere il valore.

Dal momento che YouTube è ancora perfettamente funzionante e Gangnam Style ha superato i 4 miliardi di visualizzazioni, appare chiaro che la soluzione non debba essere poi così complicata. In questo particolare caso, molto probabilmente si è trattato di un semplice upgrade ad una rappresentazione a 64 bit.
