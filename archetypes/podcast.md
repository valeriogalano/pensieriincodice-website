---
authors: [Valerio Galano]
title: "{{ replace .TranslationBaseName "-" " " | title }}"
layout: episode
episode_type: full
series: []
explicit: "false"
season: 1
number: {{ .TranslationBaseName }}
date: {{ .Date }}
audio: "episodes/PIC{{ .TranslationBaseName }}.mp3"
audio_duration: 00:00
audio_size: 0
transcript: "transcripts/srt/PIC{{ .TranslationBaseName }}.srt"
chapters: "chapters/PIC{{ .TranslationBaseName }}.json"
url: /episodes/{{ .TranslationBaseName }}
aliases:
  - /{{ .TranslationBaseName }}
categories: [Podcast]
tags: [codice,problem,programmazione,software,solving,sviluppo]
image: "covers/PIC{{ .TranslationBaseName }}.png"
draft: true
type: podcast
---