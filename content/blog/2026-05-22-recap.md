---
title: "Recap automatizzato del 2026-05-22"
date: 2026-05-22T10:00:00+02:00
featureImage: https://pensieriincodice.it/images/blog/recap.png
image: https://pensieriincodice.it/images/blog/recap.png
tags:
- Dev
- Recap
- Generato
categories:
- News
type: blog
author: Valerio Galano
---

_Questo testo è stato generato con gemini-3-flash-preview_

L’ultima settimana è stata per Valerio un vero e proprio tour de force creativo, un periodo in cui il desiderio di rifinire e automatizzare ha preso il sopravvento sulla semplice aggiunta di funzionalità. Tutto è iniziato con la necessità di rendere più fluido il racconto stesso di ciò che accade dietro le quinte. In [dev-updates](https://github.com/valeriogalano/dev-updates), Valerio ha orchestrato una pipeline quasi magica: ora il digest settimanale genera automaticamente il post per il blog, che a sua volta innesca il riepilogo su Telegram, includendo persino il link all'articolo appena pubblicato. Ha anche aggiunto una logica di "retry" per le API di Gemini, perché a volte l'intelligenza artificiale ha bisogno di un piccolo incoraggiamento per superare un momento di timidezza 🤖.

Il lavoro più profondo ha però interessato [AudioPills](https://github.com/valeriogalano/AudioPills), dove l'integrazione con il Model Context Protocol (MCP) ha trasformato l'app in uno strumento capace di dialogare direttamente con agenti AI come Claude. Valerio ha implementato ben 31 strumenti che permettono a un client esterno di controllare la riproduzione, gestire i soundbite o interrogare le trascrizioni. In questo percorso non è stato solo: Alex Raccuglia ha contribuito in modo significativo, curando il refactoring della UI, ottimizzando il layout e risolvendo alcuni fastidiosi blocchi del thread principale, rendendo l'esperienza d'uso molto più solida e professionale.

Mentre AudioPills esplorava nuove frontiere tecnologiche, [Highlighter](https://github.com/valeriogalano/Highlighter) muoveva i suoi primi passi ufficiali nel mondo iOS. Valerio ha deciso di abbandonare la scansione OCR "live" in favore di un flusso basato sulla cattura di foto, permettendo all'utente di selezionare il testo con la precisione del drag-and-drop nativo di Apple. Inoltre, ha esteso le possibilità di esportazione: non più solo Obsidian, ma anche file Markdown generici e il supporto alla condivisione di sistema, il tutto protetto da una nuova gestione delle destinazioni configurabili.

Anche [PrompterCam](https://github.com/valeriogalano/PrompterCam) e [KeepInTouch](https://github.com/valeriogalano/KeepInTouch) hanno ricevuto una generosa dose di attenzioni. Entrambe le app hanno ora icone definitive, curate e moderne, e una localizzazione completa in lingua inglese per aprirsi a un pubblico più vasto. Su KeepInTouch, in particolare, Valerio ha lavorato molto sull'aspetto visivo dei contatti, introducendo avatar, badge colorati per indicare l'urgenza di una chiamata e un'interfaccia di dettaglio molto più ricca. In un'ottica di semplificazione del codice, ha anche deciso di unificare lo sviluppo per Mac sfruttando la tecnologia "Designed for iPad", rimuovendo così decine di rami condizionali e rendendo il progetto più snello 🧹.

C'è un filo conduttore in tutto questo lavoro: la ricerca della completezza. Tra termini di servizio, policy sulla privacy e README dettagliati, Valerio sembra aver voluto trasformare i suoi prototipi in prodotti finiti, pronti per affrontare il mondo esterno. Spesso ci concentriamo sul "core" di un'idea, dimenticando che la differenza tra uno script e un'applicazione sta proprio in quella cura dei dettagli — un'icona, una traduzione, un messaggio di errore chiaro — che trasmette rispetto per chi quella tecnologia dovrà usarla. 🌟