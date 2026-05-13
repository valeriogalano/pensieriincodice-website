---
title: Creare e modificare documenti PDF con LibreOffice
author: Valerio Galano
date: 2013-05-24T21:29:10+00:00
categories:
  - How-to guides
type: blog
---

Creare file PDF è un'operazione piuttosto comune. Modificarli, invece, è un po' meno comune ma, comunque, una funzione molto richiesta.

[LibreOffice][1] esporta normalmente documenti in PDF. Dovete semplicemente cliccare su File -> Export in formato PDF.

Ma, se lo desiderate, potete anche importare un PDF in Writer al fine di modificarlo. Tutto ciò di cui avete bisogno è un estensione chiamata [pdf-import][2]. Per installarla, eseguite semplicemente i seguenti comandi nel vostro terminale:

{{< highlight bash >}}
$ sudo apt-get install libreoffice-pdfimport
{{< /highlight >}}

Alla fine del processo, potrete aprire i file PDF direttamente con LibreOffice Writer cliccandovi con il tasto destro e selezionando "Apri con Writer".

 [1]: http://www.libreoffice.org/
 [2]: http://aoo-extensions.sourceforge.net/en/project/pdfimport