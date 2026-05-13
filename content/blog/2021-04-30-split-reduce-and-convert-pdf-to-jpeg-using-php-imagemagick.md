---
title: "Split, reduce and convert PDF to JPEG using PHP ImageMagick"
author: Valerio Galano
date: 2021-04-30T10:00:00+01:00
tags:
  - PHP
  - PDF
  - JPEG
  - ImageMagick
categories:
  - How-to guides
type: blog
---

During these days I'm working on a PHP project based on manipulation of PDF files uploaded by users. Documents must be **truncated**, **splitted to images**, **quality reducted**, etc.

Because of the project's nature, libraries' inclusion is problematic, so I was forced to study a solution for the issue that involves only PHP official extensions. The result is some code based on [ImageMagick] extension.

In this post I'll note down what I found because I hope that it can be useful for someone in my own situation.

## Example 1: convert to low quality PDF
Let's start with very simple example. Following lines will produce a **new PDF file containing a low quality image for each page from original PDF**:
{{< highlight php "linenos=true" >}}

<?php
$image = new imagick();
$image->readImage('original.pdf');
$image->writeImages('poor_quality.pdf', true);

{{</ highlight >}}
Not really so much to explain...

## Example 2: convert to low quality JPEGs
This code will produce a **list of low quality JPGs, one for each page from original PDF**: 
{{< highlight php "linenos=true" >}}

<?php
$image = new imagick();
$image->readImage('original.pdf');
$image->writeImages('poor_quality.jpg', false);

{{</ highlight >}}

Only difference from previous example is in line 4:
 * file extension is `.jpg`
 * last parameter is `false`, otherwise imagemagick will output a single jpg with all pages overlapped

Output of this code will be a list of files like:
{{< highlight plaintext >}}
$ ls
poor_quality-0.jpg
poor_quality-1.jpg
poor_quality-2.jpg
{{</ highlight >}}

## Example 3: convert to high quality JPEGs
This code will produce a **list of JPGs**, like previous example, but with **high quality** images:
{{< highlight php "linenos=true" >}}
<?php
$image = new imagick();
$image->setResolution(300, 300);
$image->readImage('original.pdf');
$image->setImageCompressionQuality(100);
$image->writeImages('high_quality.jpg', false);

{{</ highlight >}}

Most important line, compared to previous example, is *line 3* in which we set resolution parameters. It's important to execute this instruction **before** read PDF file.

## Example 4: convert subset of pages to JPEGs (only for small PDFs)
Following code can be used to **convert a subset of page** to JPGs. Unfortunately it is **very inefficient** and can be very slow for PDF with a lot of pages. For this reason, I point it out for educational reasons only:
{{< highlight php "linenos=true" >}}
<?php
$image = new imagick();
$image->setResolution(300,300);
$image->readImage('original.pdf');
$image->setImageCompressionQuality(100);
$image->setBackgroundColor( new ImagickPixel( 'white' ) );

// Remove pages > 10
while ( $image->setLastIterator() && $image->getIteratorIndex() > 10 ) {
    $image->removeImage();
}

$image->writeImages( 'high_quality.jpg',false);
{{</ highlight >}}

There also are methods like `setIteratorIndex` or `setFirstIterator` that can be useful for building various types of cycles but, as reported before, in my experience this method can be very slow. More details can be found at [ImageMagick].  

## Example 5: convert subset of pages to JPEGs
Last example is a bit more complex because it reads and writes pages one by one. Anyway it's also much more efficient than the previous one. It produces a **sublist of high quality JPEGs** also from very long PDFs **in an acceptable time**:
{{< highlight php "linenos=true" >}}
<?php
$image = new imagick();
$image->setResolution(300,300);
$first_page = 0;
$last_page = 10;
try {
    for ( $i = $first_page; $i < $last_page; $i ++ ) {
        $image->readImage('original.pdf' . '[' . $i . ']' );
        $image->setImageCompressionQuality( 100 );
        $image->setBackgroundColor( new ImagickPixel( 'white' ) );
        $image->writeImage( 'high_quality-' . $i . '.jpg' );
    }
} catch (ImagickException $e){
    if ( $e->getCode() == 1 ) {
       // It's OK. This exception means that there are no more pages to convert.
    }
}
{{</ highlight >}}
Using `[index]` after PDF path, Imagemagick read and converts only the page corresponding to the index. In this way, only needed pages will be processed.

## More details
I know well that this is not a complete guide, but I hope that it can be useful for someone in my same situation. Anyway, you can merge previous example to obtain different results and find much more details at [ImageMagick].

## Final thoughts
PHP [ImageMagick] extension is a very powerful tool but, imho, it's not very well documented (like most PHP features). Probably, **a more complete guide could allow to develop a lot of code without need to include external libraries** that adds complexity, maintenance issues, etc.

[ImageMagick]: https://www.php.net/manual/en/book.imagick.php



