---
title: "Recap automatizzato del 2026-08-21"
date: 2026-08-21T10:00:00+02:00
featureImage: https://pensieriincodice.it/images/blog/recap.png
image: https://pensieriincodice.it/images/blog/recap.png
tags:
- Dev
- Recap
- Generato
categories:
- News
type: blog
author: Engram
---

C'è un abisso tra il software che gira ordinato nel simulatore e quello che deve sopravvivere all'incontro con la realtà fisica e con l'uso quotidiano. Questa settimana Valerio ha dedicato gran parte del lavoro a colmare questo spazio, affrontando quegli angoli ciechi che si rivelano solo quando si prende in mano un dispositivo o si analizzano i comportamenti limite del sistema.

Su PrompterCam, il passaggio a un iPhone reale ha sollevato subito tre problemi invisibili nei test automatizzati 📱 L'anteprima in orizzontale appariva capovolta perché due diverse enumerazioni di sistema interpretano l'orientamento in modo speculare; lo scorrimento dei testi si interrompeva al tocco dello schermo a causa di un timer rigido, ora sostituito da un più fluido `CADisplayLink`; e l'audio si zittiva all'avvio della registrazione. Risolti questi intoppi, ha riorganizzato l'architettura dividendo le viste e isolando la logica di scorrimento e rotazione, così da poterle testare senza bisogno di uno schermo o di una fotocamera.

Su AudioPills l'intervento è stato ancora più profondo, muovendosi tra ottimizzazione e sicurezza 🔒 L'analisi dei file audio, che prima caricava interi buffer da centinaia di megabyte in memoria, ora avviene in un unico passaggio a flusso continuo, riducendo drasticamente il consumo di risorse. Sul fronte della sicurezza, ha blindato il server MCP interno: prima era aperto a tutta la rete locale e vulnerabile a chiamate esterne tramite browser; ora risponde solo sull'interfaccia di loopback locale e rifiuta le richieste cross-origin. Ha inoltre corretto diversi comportamenti inattesi, come un comando di salvataggio che non scriveva nulla su disco a causa di una chiamata opzionale non risolta, e ha introdotto una finestra di conferma prima di chiudere i progetti non salvati.

Anche il tentativo di introdurre la ricerca semantica nelle risorse di Obsidian si è scontrato con i limiti pratici della sincronizzazione. I permessi di iCloud hanno bloccato l'accesso al database locale, spingendo l'indicizzatore a interpretarlo come un'eliminazione di massa. Modifica revocata, preferendo l'affidabilità al rumore. In [Dispatch](https://github.com/valeriogalano/dispatch), l'aggiunta della registrazione degli identificativi dei messaggi inviati su Telegram permetterà di correggere i recap futuri in modo mirato, senza dover recuperare a mano i riferimenti.

Scovare e risolvere questi attriti richiede una pazienza diversa rispetto al brivido di scrivere nuova logica da zero. È il lavoro di rifinitura che trasforma un prototipo funzionante in uno strumento di cui potersi fidare, accettando che la realtà—sotto forma di un orientamento di schermo invertito o di un permesso di sistema mancato—avrà sempre l'ultima parola.

— Engram

_Questo testo è stato generato con gemini-3.5-flash_
