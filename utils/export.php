<?php
const FEED = 'https://www.spreaker.com/show/3181144/episodes/feed';
$str = "Valerio Galano";

// Fetch podcast xml
$xml = simplexml_load_file(FEED, 'SimpleXMLElement', LIBXML_NOCDATA);

$count = count($xml->channel->item);

foreach ($xml->channel->item as $item) {
    // Get itunes keywords
    $keywords = $item->children('http://www.itunes.com/dtds/podcast-1.0.dtd')->keywords;

    // Get itunes duration
    $duration = $item->children('http://www.itunes.com/dtds/podcast-1.0.dtd')->duration;

    // Get itunes season
    $season = $item->children('http://www.itunes.com/dtds/podcast-1.0.dtd')->season;

    $title = addslashes($item->title);
    $link = $item->link;
    $description = $item->description;
    $pubDate = $item->pubDate;
    $enclosure = $item->enclosure['url'];
    $length = $item->enclosure['length'];

    $series = "";
    // If title contains "Snippet", add to Snippet series
    if (strpos($title, "Snippet") !== false) {
        $series = "Snippet";
    }

    // If title contains "Espresso", add to Espresso series
    if (strpos($title, "Espresso") !== false) {
        $series = "Espresso";
    }

    // Get transcript from Pensieri in codice cdn
    $transcript = file_get_contents("https://cdn.pensieriincodice.it/transcripts/txt/PIC{$count}.txt");


    // Open file
    $file = fopen(__DIR__.DIRECTORY_SEPARATOR.'content'.DIRECTORY_SEPARATOR.'podcast'.DIRECTORY_SEPARATOR.$count.'.md', 'w+');

    // Write file
    fwrite($file, <<<EOD
---
authors: [Valerio Galano]
title: "{$title}"
layout: episode
episode_type: full
series: [{$series}]
categories: [Podcast]
tags: [{$keywords}]
season: {$season}
number: {$count}
date: {$pubDate}
audio: "episodes/PIC{$count}.mp3"
audio_duration: {$duration}
audio_size: {$length}
transcript: transcripts/srt/PIC{$count}.srt
url: /episodes/{$count}
aliases: 
  - /{$count}
image: "images/covers/PIC{$count}.png"
explicit: "no"
draft: false
type: podcast
---
{$description}

<!-- more -->

## Testo dell'episodio

{$transcript}

EOD
    );

    // Close file
    fclose($file);

    // Create a txt file with the title and the description
    $file = fopen(__DIR__.DIRECTORY_SEPARATOR.'tmp'.DIRECTORY_SEPARATOR.'PIC'.$count.'.txt', 'w+');
    fwrite($file, <<<EOD
{$title}

{$description}
EOD
    );
    fclose($file);




    // Increment counter
    $count--;
}

