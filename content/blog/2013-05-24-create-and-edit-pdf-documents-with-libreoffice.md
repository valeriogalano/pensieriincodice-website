---
title: Create and edit PDF documents with LibreOffice
author: Valerio Galano
date: 2013-05-24T21:29:10+00:00
categories:
  - How-to guides
type: blog
---

Create PDF files is a very common operation. Modify them is a bit less common but, anyway, a very requested feature.

[LibreOffice][1] exports documents as PDF by default. You simply click File -> Export in PDF format.

But, if you want, you can also import a PDF file into Writer to modify it. All you need is an extension called [pdf-import][2]. To install it, simply execute following commands in your terminal:

{{< highlight bash >}}
$ sudo apt-get install libreoffice-pdfimport
{{< /highlight >}}

At the end of the process, you will be able to open PDF files directly with LibreOffice Writer by right clicking on it and selecting "Open with Writer".

 [1]: http://www.libreoffice.org/
 [2]: http://aoo-extensions.sourceforge.net/en/project/pdfimport