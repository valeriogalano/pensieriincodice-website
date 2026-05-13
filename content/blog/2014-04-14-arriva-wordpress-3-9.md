---
title: Arriva WordPress 3.9
author: Valerio Galano
date: 2014-04-14T15:08:14+00:00
categories:
  - News
type: blog
---

E' previsto per questa settimana il rilascio della versione stabile di WordPress 3.9.

Pur non essendo moltissime le novità introdotte, appare chiaro l'impegno nell'aggiornare componenti importati del CMS come preparazione per l'introduzione di grandi novità.

## Aggiornato editor visuale (TinyMCE) e migliorata gestione media

La novità sicuramente più interessante riguarda l'aggiornamento di TinyMCE, l'editor utilizzato dagli utenti per scrivere pagine e articoli. Oltre all'aumento di performance e all'aspetto più accattivanante, questo aggiornamento migliora notevolmente la gestione dei file multimediali, in special modo delle immagini.

Innanzitutto, da ora è possibile caricare un file trascinandolo dal desktop direttamente nell'editor. Diventa, inoltre, più semplice la gestione dei dettagli, della posizione ed del ritaglio/ridimensionamento delle immagini.

{{< figure src="/images/wordpress-3.9-image-details.png" alt="wordpress-3.9-image-details"  >}}

{{< figure src="/images/wordpress-3.9-image-edit.png" alt="wordpress-3.9-image-edit"  >}}

## Audio/Video Playlist

Con questa nuova versione, viene introdotta la funzionalità Playlist che permetterà all'utente di creare delle scalette di file audio o video da riprodurre in una pagina o in un articolo. Il funzionamento della playlist è fondamentalmente simile a quello della già consolidata galleria di immagini.

{{< figure src="/images/wordpress-3.9-playlist.png" alt="wordpress-3.9-playlist"  >}}

## Anteprima Widget

Nella sezione di personalizzazione del tema, è ora disponibile una funzione che permette di inserire widget direttamente e visualizzare in anteprima l'effetto che tale inserimtento avrà sul nostro sito.

{{< figure src="/images/wordpress-3.9-widget-preview.png" alt="wordpress-3.9-widget-preview"  >}}

## Migliorato menu di installazione temi

Tra le principali migliorie, troviamo, inoltre, il nuovo sistema di ricerca è installazione temi che ora mostra un aspetto molto più accattivante ed intuitivo.

{{< figure src="/images/wordpress-3.9-add-theme.png" alt="wordpress-3.9-add-theme" >}}

## Implementate MySQLi e riscritta funzione Autosave

Per chi è interessato agli aspetti più tecnici: il sistema di salvataggio automatico delle bozze è stato parzialmente riscritto ed il relativo codice riposizionato in file più consoni rispetto alle versioni precedenti. Inoltre, l'accesso al database implementato tramite le funzioni MySQL del PHP, è stato riscritto utilizzando le più moderne e performanti MySQLi.