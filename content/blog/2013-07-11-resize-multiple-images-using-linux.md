---

title: Resize multiple images using Linux
author: Valerio Galano
date: 2013-07-11T15:59:46+00:00
categories:
  - How-to guides
type: blog
---

Resize an image is a simple operation: there are many software able to do that. The most obvious are <a title="Gimp" href="http://www.gimp.org/" target="_blank" rel="noopener noreferrer">Gimp</a> or <a title="Photoshop" href="http://www.photoshop.com/" target="_blank" rel="noopener noreferrer">Photoshop</a>. But what's the right procedure to resize lots of images?

Imagine you have to prepare thumbnails for a gallery or resize all images to insert into a presentation or, again, reduce photos to send them by email, etc.

Open each image with Gimp or Photoshop and resize them one by one is foolish. How can we perform this operation in a simple way and without stress?

## The solution

Use Linux command line. Resize multiple images with Linux is very simple by using _ImageMagick suite_.

First of all, let's install ImageMagick that includes lots of tools to manipulate images. To do that, execute following command in terminal window:

{{< highlight bash >}}
$ sudo apt-get install imagemagick
{{< /highlight >}}

Now, lots of new commands are available (check <a title="ImageMagick command line tools" href="http://www.imagemagick.org/script/command-line-tools.php" target="_blank" rel="noopener noreferrer">ImageMagick command line tools</a> for more details). We will use _mogrify_ that is designed to

> [...] resize an image, blur, crop, despeckle, dither, draw on, flip, join, re-sample, and much more.

Of course, it can work on one or more images at time. We simply can specify filename to act on a single image, or use command line wildcards to act on multiple files.

So, let's see some examples of _morgify_ usage. For more detailed informations and complete list of options, please check <a title="ImageMagick Mogrify reference" href="http://www.imagemagick.org/script/mogrify.php" target="_blank" rel="noopener noreferrer">ImageMagick Mogrify manual page</a>.

Resize an image to 75% of its original size:

{{< highlight bash >}}
$ mogrify -resize 75% image.jpg
{{< /highlight >}}

Resize all JPG files in the folder 75% of their original sizes:

{{< highlight bash >}}
$ mogrify -resize 75% *.jpg
{{< /highlight >}}

Resize all images in the folder to 640&#215;480 pixels:

{{< highlight bash >}}
$ mogrify -resize '640x480' *
{{< /highlight >}}

Resize all images to width of 640 pixel mantaining aspect ratio:

{{< highlight bash >}}
$ mogrify -resize width='640' *
{{< /highlight >}}

Resize all images to height of 480 mantaining aspect ratio:

{{< highlight bash >}}
$ mogrify -resize width='x480' *
{{< /highlight >}}

References:

  * <a title="ImageMagick" href="http://www.imagemagick.org" target="_blank" rel="noopener noreferrer">ImageMagick</a>
  * <a title="ImageMagick Mogrify reference" href="http://www.imagemagick.org/script/mogrify.php" target="_blank" rel="noopener noreferrer">ImageMagick Mogrify</a>