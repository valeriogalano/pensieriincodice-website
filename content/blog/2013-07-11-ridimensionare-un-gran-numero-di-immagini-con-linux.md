---

title: Ridimensionare un gran numero di immagini con Linux
author: Valerio Galano
date: 2013-07-11T15:59:46+00:00
categories:
  - How-to guides
type: blog
---

## Il problema

Ridimensionare un immagine è un'operazione semplice: esistono molti software in grado di farlo. I più conosciuti sono <a title="Gimp" href="http://www.gimp.org/" target="_blank" rel="noopener noreferrer">Gimp</a> e <a title="Photoshop" href="http://www.photoshop.com/" target="_blank" rel="noopener noreferrer">Photoshop</a>. Ma qual'è la giusta procedura per ridimensionare un gran numero di immagini?

Immaginate di dover preparare le anteprime per una galleria o di dover ridimensionare tutte le immagini da inserire in una presentazione o, ancora, di dover ridurre delle foto da mandare via email, e così via.

Aprire le immagini con Gimp o Photoshop e ridimensionarle una ad una sarebbe una follia. Come si può eseguire questa operazione in modo semplice e senza stress?

## La soluzione

Utilizzare la riga di comando di Linux. Ridimensionare più immagini con Linux è molto semplice se si utilizza la _suite ImageMagick_.

Prima di tutto, installiamo ImageMagick che include molti strumenti per manipolare immagini. Per farlo, eseguiamo il seguente comando in una finestra di terminale:

{{< highlight bash >}}
$ sudo apt-get install imagemagick
{{< /highlight >}}

Ora sono disponibili molti nuovi comandi (consulta <a title="ImageMagick command line tools" href="http://www.imagemagick.org/script/command-line-tools.php" target="_blank" rel="noopener noreferrer">ImageMagick command line tools</a> per ottenere più dettagli). Noi utilizzeremo _mogrify_ che è progettato per

> [...] ridimensionare un immagine, sfumare, tagliare, smacchiare, distorcere, disegnare, specchiare, unire, ricampionare, e molto altro.

Ovviamente, esso può lavorare su una o più immagini alla volta. Semplicemente, possiamo specificare il nome del file per agire su una singola immagine, oppure utilizzare le wildcards della riga di comando per agire su più file contemporaneamente.

Dunque, vediamo ora alcuni esempi dell'utilizzo di _morgify_. Per informazioni più dettagliate e la lista completa delle opzioni, si consiglia di fare riferimento al <a title="ImageMagick Mogrify reference" href="http://www.imagemagick.org/script/mogrify.php" target="_blank" rel="noopener noreferrer">manuale di ImageMagick Mogrify</a>.

Ridimensionare un immagine al 75% della dimensione originale:

{{< highlight bash >}}
$ mogrify -resize 75% image.jpg
{{< /highlight >}}

Ridimensionare tutti i file JPG in una cartella al 75% della loro dimensione originale:

{{< highlight bash >}}
$ mogrify -resize 75% *.jpg
{{< /highlight >}}

Ridimensionare tutte le immagini in una cartella alla dimensione di 640&#215;480 pixels:

{{< highlight bash >}}
$ mogrify -resize 640x480' *
{{< /highlight >}}

Ridimensionare tutte le immagini in una cartella alla larghezza di 640 pixel mantenendo le proporzioni:

{{< highlight bash >}}
$ mogrify -resize width='640' *
{{< /highlight >}}

Ridimensionare tutte le immagini in una cartella all'altezza di 480 pixel mantenendo le proporzioni:

{{< highlight bash >}}
$ mogrify -resize width='x480' *
{{< /highlight >}}

Riferimenti:

  * <a title="ImageMagick" href="http://www.imagemagick.org" target="_blank" rel="noopener noreferrer">ImageMagick</a>
  * <a title="ImageMagick Mogrify reference" href="http://www.imagemagick.org/script/mogrify.php" target="_blank" rel="noopener noreferrer">ImageMagick Mogrify</a>