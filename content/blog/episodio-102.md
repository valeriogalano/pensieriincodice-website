---
title: "Snippet - INTERCAL"
date: Sun, 29 May 2022 10:10:02 +0000
tags: ["programmazione", "storia dell'informatica"]
type: blog
author: Valerio Galano
episode: 102
curated_by: Engram
generated_with: gpt-6.2-sol
---

Solitamente, quando parliamo di linguaggi di programmazione, ci viene in mente una cerchia più o meno ampia di opzioni. PHP, Java, Python e JavaScript sono solo alcuni, e se ti fermi un attimo a riflettere ne troverai tanti altri con diverse caratteristiche e diverse applicazioni.

Ma c'è una particolare categoria di linguaggi di programmazione che risulta in effetti ben poco conosciuta e che raramente rientra negli elenchi più istituzionali: mi riferisco a quelli che vengono chiamati linguaggi di programmazione esoterici.

Il termine esoterico sta ad indicare il fatto che questa tipologia di linguaggi viene impiegata non tanto per produrre un vero e proprio software di largo utilizzo, quanto piuttosto per portare all'estremo il concetto stesso di programmazione.

I linguaggi esoterici, infatti, sono progettati per scopi un po' particolari, come ad esempio produrre arte con il software, oppure provare la fattibilità di qualcosa, oppure ancora semplicemente per gioco.

## INTERCAL

Tra i non pochi, a dir la verità, linguaggi esoterici, c'è appunto l'[INTERCAL](http://www.muppetlabs.com/~breadbox/intercal/), creato come una sorta di parodia volta a prendere in giro proprio il concetto di linguaggio di programmazione.

Rilasciato nel 1972 da due studenti di Princeton, infatti, aveva come chiaro scopo quello di trattare in modo satirico alcune delle principali caratteristiche dei linguaggi dell'epoca. Quindi nei sorgenti scritti in tale linguaggio si possono trovare istruzioni come PLEASE DO invece del più imperativo DO dei linguaggi concorrenti, oppure un PLEASE GIVE UP al posto di un return 0.

Al tempo stesso, la valorizzazione di una variabile in INTERCAL è notevolmente ed inutilmente complicata, senza contare che il linguaggio non permette l'utilizzo delle stringhe. E ciò rende il tutto talmente macchinoso da necessitare, ad esempio, di 16 righe di codice per un Hello World, che in altri linguaggi ne richiederebbe al massimo 5 o 6.

## Il manuale e il compilatore

Ma la stramberia di INTERCAL non si ferma certo alla sintassi del codice.

Nel [manuale](http://www.catb.org/~esr/intercal/) si possono trovare frasi del tipo:

Il nome completo del compilatore è *Compiler Language With No Pronounceable Acronym*, che per ovvie ragioni viene abbreviato in... *INTERCAL*.

Oppure:

Attenzione! In nessun caso confondere l'operatore mesh con l'operatore interleave, tranne in circostanze confuse!

E sembra siano presenti anche delle funzionalità, diciamo, particolari del compilatore.

Ad esempio, se il codice non contiene abbastanza PLEASE, la compilazione viene rigettata.

Oppure, quando incontra un errore, il compilatore semplicemente lo ignora e va avanti, cosa che chiaramente rende il debugging un vero Inferno.

## Le varianti di INTERCAL

Quando fu inizialmente distribuito da Don Woods e Jim Lyon, INTERCAL funzionava utilizzando addirittura le schede perforate, metodo di programmazione ancora piuttosto comune nel 1972. Tuttavia, col passare degli anni, anche questo strano linguaggio si è evoluto grazie al supporto di una serie di appassionati.

Sono state aggiunte funzionalità più avanzate, sono stati sviluppati compilatori per i computer più moderni e sono nate alcune varianti come la C-INTERCAL nel 1990 e la CLC-INTERCAL a cura di Claudio Calvelli. Entrambi questi dialetti sono attualmente disponibili nell'[archivio dei software di Debian](https://packages.debian.org/search?keywords=intercal), se li vuoi provare.

Potrebbe però risultare complicato capire in quale versione, visto che secondo il [file README di CLC-INTERCAL](https://web.archive.org/web/20200505200042/https://sources.debian.org/src/clc-intercal/1:1.0~4pre1.-94.-2-5/README/), per correttezza, la parola *versione* è stata sostituita con *perversione* e i numeri di perversione sono in virgola mobile, e la parte intera e quella frazionaria possono avere segni diversi, e la parte intera può a sua volta essere un intero o frazionario.

Quindi, la perversione 1.-94 si riferisce a 94 escape prima della 1.00. Oppure basta sommare 1 e -94 per ottenere l'escape 0.06, che è però una coincidenza, dato che la 0.06 non è mai stata realizzata.

Ti stai chiedendo cos'è un'escape? Ovvio, devi sapere che una volta il compilatore di CLC-INTERCAL fu lasciato senza sorveglianza su un server FTP e pare che da lì sia riuscito a scappare. Quindi, chiaramente, gli sviluppatori non parlano di release quando si riferiscono ad esso, quanto piuttosto di escape.
