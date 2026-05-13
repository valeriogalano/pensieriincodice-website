---
title: Continous deploying via FTP of Hugo-based Website with Github Actions
author: Valerio Galano
date: 2020-02-11T07:00:00+01:00
tags: 
  - Hugo
  - Github Actions
categories:
  - How-to guides
type: blog
---

**UPDATE 2020-05-01: Some weeks after this post was published, SamKirkland released version 3 of FTP-Deploy-Action. So I updated code snippets. Old version of this post is available on [archive.is](https://archive.is/wip/LuO59 "archived version of Continous deploying via FTP of Hugo-based Website with Github Actions").**

At the end of 2019 I discovered [Hugo Framework][1], I started refactoring my personal websites and writing some posts about some solutions I had to implement to accomplish features I was wondering for. You can find more details in post [How to add Iubenda prior blocking of cookie scripts to Hugo Disqus shortcode].

My website is deployed on an Italian Hosting server, so every time I decide to make a change or add a post, I needed to manually re-compile website and upload files via FTP.

This was very annoing.

To resolve this issue I decided to implement some continous integration using [Github Actions].

My job to deploy Hugo via FTP is compsed by following steps:
 * Checkout git project code
 * Build static website with Hugo
 * Deploy static website to FTP

This job must be triggered everytime I commit a change to git.

Let's see how to implement it.

Please note: in following description I'll assume you know how to use Github, Hugo and FTP hosting.

## Step 1: Checkout git project code

First step consists in download project code from github. In my case, I also need to download hugo theme as submodule. Code needed to do this, is following:

{{< highlight yaml "linenos=true" >}}


    - uses: actions/checkout@v1
      with:
        submodules: true


{{</ highlight >}}

## Step 2: Build static website with Hugo

Second step is about Hugo build. To do this, let's use a custom action found in Github Actions Marketplace: [Hugo setup].

{{< highlight yaml "linenos=true" >}}

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: '0.62.0'

    - name: Build
      run: hugo -D

{{</ highlight >}}

## Step 3: Deploy static website to FTP

As third step, we simply have to move generated static website to a remote FTP folder. The action I choosed to do this is [FTP Deploy].

{{< highlight yaml "linenos=true" >}}

    - name: Deploy
      uses: SamKirkland/FTP-Deploy-Action@3.0.0
      with:
        ftp-server:  ftp.myhosting.com/path/to/site/root/on/my/hosting/
        ftp-username: myusername
        ftp-password: ${{ secrets.FTP_PASSWORD }}
        local-dir: public/

{{</ highlight >}}

FTP password value must be stored in **Github secrets panel** for security reasons like in in following image:

{{< figure src="/images/github-secrets.png" alt="Github secrets settings panel" >}}

## Trigger job

With following rows, we can specify to Github to run action **at push event** on **master branch**:

{{< highlight yaml "linenos=true" >}}

name: Publish

on:
  push:
    branches:
    - master

{{</ highlight >}}

## Put all together

To make it work, let's put all code together in file **.github/workflows/main.yml** of your Github project:

{{< highlight yaml "linenos=true" >}}

name: Publish

on:
  push:
    branches:
    - master
  schedule:
    - cron:  '0 8 * * *'

jobs:
  Deploy:
    runs-on: ubuntu-latest
    steps:

    - uses: actions/checkout@v1
      with:
        submodules: true

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: '0.62.0'

    - name: Build
      run: hugo -D

    - name: Deploy
      uses: SamKirkland/FTP-Deploy-Action@3.0.0
      with:
        ftp-server:  ftp.myhosting.com/path/to/site/root/on/my/hosting/
        ftp-username: myusername
        ftp-password: ${{ secrets.FTP_PASSWORD }}
        local-dir: public/

{{</ highlight >}}

## BOUNS: automatically publish scheduled posts

A post written in Hugo with date in future is not builded in static version of the website. On the other hand, Github action can be scheduled to run periodically with a cron-like mechanism.

Using this two behaviours, you can commit posts using date field to schedule it.

You simply have to configure job execution like following (line 7-8) and commit posts with datetime in which you want schedule them.

In this way, Github will periodically rebuild you site until posts will appear at defined time.

{{< highlight yaml "linenos=true,hl_lines=7-8" >}}

name: Publish

on:
  push:
    branches:
    - master
  schedule:
    - cron:  '0 8 * * *'

jobs:
  Deploy:
    runs-on: ubuntu-latest
    steps:

    - uses: actions/checkout@v1
      with:
        submodules: true

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: '0.62.0'

    - name: Build
      run: hugo -D

    - name: Deploy
      uses: SamKirkland/FTP-Deploy-Action@3.0.0
      with:
        ftp-server:  ftp.myhosting.com/path/to/site/root/on/my/hosting/
        ftp-username: myusername
        ftp-password: ${{ secrets.FTP_PASSWORD }}
        local-dir: public/

{{</ highlight >}}

[1]: https://gohugo.io/
[2]: https://gohugo.io/getting-started/quick-start/
[3]: https://github.com/
[How to add Iubenda prior blocking of cookie scripts to Hugo Disqus shortcode]: {{< relref "2020-01-07-how-to-add-iubenda-prior-blocking-of-cookie-scripts-to-hugo-disqus-shortcode.md" >}}
[Github Actions]: https://github.com/features/actions
[Hugo setup]: https://github.com/marketplace/actions/hugo-setup
[FTP Deploy]: https://github.com/marketplace/actions/ftp-deploy