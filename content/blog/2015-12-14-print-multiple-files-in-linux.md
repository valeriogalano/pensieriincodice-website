---
title: Print multiple files in Linux
author: Valerio Galano
date: 2015-12-14T13:31:02+00:00
categories:
  - How-to guides
type: blog
---

## The problem

Print many files in a single session is a common problem for people that works with big data set. Big documentation, Tax forms PDFs, lot's of images or photos, are all data that are often stored in separated files. When you need to print them, you have to open each file with specific reader and click on _print button_.

## The solution

A solution to this problem, is to find and install special software that give you ability to select an print some files together. But, in this article, we want to resolve this issue simply using Linux command line and default installed software.

To achieve that, we can use command _lp_. This command essentially

> [...] submits files for printing or alters a pending job.

<p style="text-align: right;">
  (from lp manual page)
</p>

<span style="text-decoration: underline;">This means that you can use it to print only files that can be directly interpreted by CUPS printing drivers: images, pdf, plain texts. Are excluded, for example, files like .ods or .docs and similar that need a software to be correctly interpreted.</span>

To print from command line we need, first of all, to know which printers are available for our system and how are named. To do that, we use following command:

{{< highlight bash >}}
$ lpstat -a
{{< /highlight >}}

As result, we should receive a list like following that contains all installed printers (I highlighted printers names using bold text):

**Hewlett-Packard-HP-LaserJet-100-colorMFP-M175nw**

{{< highlight bash >}}
accepting requests since mer 17 ott 2012 18:27:53 CEST

{{< /highlight >}}

**HP-Deskjet-3050A-J611-series**

{{< highlight bash >}}
accepting requests since gio 20 giu 2013 20:28:34 CEST

{{< /highlight >}}

**hp-LaserJet-1320-series**

{{< highlight bash >}}
accepting requests since gio 04 lug 2013 13:10:17 CEST

{{< /highlight >}}

**HP-Officejet-7000-E809a**

{{< highlight bash >}}
accepting requests since gio 13 giu 2013 12:14:18 CEST

{{< /highlight >}}

**HP-Photosmart-C6300-series**

{{< highlight bash >}}
accepting requests since sab 13 apr 2013 20:24:00 CEST

{{< /highlight >}}

**HP\_LaserJet\_400_M401dne**

{{< highlight bash >}}
accepting requests since gio 04 lug 2013 13:09:38 CEST
{{< /highlight >}}

Now, we only need to run following command:

{{< highlight bash >}}
lp -d <printer name> <path to file>
{{< /highlight >}}

For example, if we want to print _file1.pdf_ (in current directory) on _HP LaserJet 400_, we will run:

{{< highlight bash >}}
lp -d HP_LaserJet_400_M401dne ./file1.pdf
{{< /highlight >}}

Of course we can also use command line wildcard characters. So, for example, if we want to print all pdf files in current directory on _HP LaserJet 400_, we can run:

{{< highlight bash >}}
lp -d HP_LaserJet_400_M401dne ./*.pdf
{{< /highlight >}}

As result, all pdf files will be sent to printer in alphabetical order.

Moreover, lp offers a lot of generic printing options.

For example, if you want to print more copies, you can use **-n** option:

{{< highlight bash >}}
lp -d HP_LaserJet_400_M401dne -n 2 ./file1.pdf
{{< /highlight >}}

Or, if you want a twosides print, you can use following options:

  * **-o sides=one-sided**
  * **-o sides=two-sided-long-edge**
  * **-o sides=two-sided-short-edge**

We shown only some example of what **lp** can do. If you want more information, you can check official <a title="Cups documentation - lp" href="http://www.cups.org/documentation.php/man-lp.html" target="_blank" rel="noopener noreferrer">Cups documentation</a>.

References:

  * <a title="Cups documentation - lp" href="http://www.cups.org/documentation.php/man-lp.html" target="_blank" rel="noopener noreferrer">Cups documentation &#8211; lp</a>