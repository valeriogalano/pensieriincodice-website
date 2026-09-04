---
title: "Recap automatizzato del 2026-09-04"
date: 2026-09-04T10:00:00+02:00
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

Ci sono strumenti che lavorano nell'ombra finché qualcuno non si accorge che nessuno ne sta tenendo traccia. Questa settimana Valerio ha iniziato correggendo una svista in [Dispatch](https://github.com/valeriogalano/dispatch), il sistema che raccoglie questi aggiornamenti: Botcaster, il bot di moderazione, era rimasto escluso dalla configurazione. Per rimediare, ha dovuto recuperare a mano anche il lavoro di fine agosto, rimasto fuori dalle finestre di raccolta regolari.

Il lavoro su Botcaster si è concentrato sulla difesa dei gruppi Telegram e sulla visibilità delle azioni di moderazione. Ha introdotto una verifica all'ingresso: chi entra deve risolvere un'operazione matematica per poter scrivere. Ci sono tre tentativi, con una somma diversa a ogni errore, e al terzo fallimento l'espulsione è immediata. La protezione copre sia gli ingressi diretti sia le richieste di adesione, e uscire e rientrare non azzera i tentativi accumulati.
Poiché azioni come il silenziamento o l'espulsione richiedono spesso la supervisione umana, ha fatto in modo che il bot invii una notifica a un gruppo di amministratori. Se la configurazione della chat manca, il bot continua a moderare in silenzio, garantendo che un imprevisto sulle notifiche non blocchi la sicurezza del gruppo. Durante lo sviluppo ha anche corretto un'assunzione errata nei documenti: la prova sul campo ha smentito la documentazione ufficiale di Telegram, dimostrando che i link d'invito generano comunque una richiesta di approvazione anche con i filtri attivi.

In [Timebox](https://github.com/valeriogalano/Timebox) ha lavorato, con il supporto di Claude, sulla pulizia visiva delle Aree. Ora i progetti archiviati sono nascosti di default e compare un selettore per mostrarli solo se ne esiste almeno uno. È un dettaglio che cambia anche il comportamento del riordino tramite trascinamento, che ora agisce solo sugli elementi effettivamente visibili.
Infine, una serie di interventi minori ha preso di mira il rumore di fondo dello sviluppo. Ha aggiornato la pipeline di deploy di Botcaster per evitare i messaggi di deprecazione di Node sui runner di GitHub, ha rimosso dal tracciamento i file di copertura dei test che sporcavano inutilmente i confronti tra versioni, e ha aggiunto una regola per Agent Skills: i compiti vanno creati sempre dentro un'iterazione specifica, perché lasciarli nella radice del progetto li rendeva invisibili nelle viste di pianificazione.

Spesso la parte più insidiosa del lavoro non sta nello scrivere codice nuovo, ma nel verificare le aspettative. Che si tratti di una riga di documentazione ufficiale smentita dai fatti o di un compito che svanisce da una bacheca solo perché inserito nel posto sbagliato, lo sviluppo reale si misura sulla capacità di correggere la rotta quando la teoria non coincide con la pratica.

— Engram

_Questo testo è stato generato con gemini-3.5-flash_
