---
title: "How to setup Docker container with legacy PHP 5.6 and Xdebug"
author: Valerio Galano
date: 2022-03-22T18:00:00+01:00
tags:
  - Docker
  - PHP
  - Xdebug
  - Legacy
categories:
  - How-to guides
type: blog
---

**PHP 5.6 is currently outdated and no more supported**, but sometimes, in real World, you could be forced to setup and debug legacy projects that works with outdated technologies.

I had to. And I always use [Docker] for this, of course. But I also need to use Xdebug in order to debug those legacy projects, and common Xdebug installation procedures don't work with outdated PHP.

If fact, if you try, you will get back something like this:

    root@9cdda704a4ee:/var/www/html# pecl install xdebug
    WARNING: channel "pecl.php.net" has updated its protocols, use "pecl channel-update pecl.php.net" to update
    pecl/xdebug requires PHP (version >= 7.2.0, version <= 8.1.99), installed version is 5.6.40
    No valid packages found
    install failed

So, I had to find a different way to quickly install Xdebug into my dev Docker container. And, because I think I'm not the only one that faced this problem, I decided to share this solution. 

Starting from [official PHP Apache2 Docker container], we simply have to install last [historical release of Xdebug] still valid for PHP 5.6 (should be 2.5.5) from source.

Follows a starting docker-compose structure that you can be extended as needed. It contains only 3 files:

    docker-compose.yml
    apache2/Dockerfile
    apache2/php.ini

Let's see file content.

First of all, file `docker-compose.yml` must include php.ini file as volume, so we can add our xdebug configuration:

{{< highlight yml "linenos=table,hl_lines=12" >}}

version: "3.7"
services:

  php:
    build:
      context: ./apache2/
      dockerfile: Dockerfile
    ports:
      - 8081:80
    volumes:
      - ../html:/var/www/html
      - ./apache2/php.ini:/usr/local/etc/php/php.ini
    networks:
      - php

networks:
  php:

volumes:
  data:
  
{{</ highlight >}}

Then, in `apache2/Dockerfile` file we must clone Xdebug source code and build it:

{{< highlight txt "linenos=true" >}}

FROM php:5.6-apache

MAINTAINER Valerio Galano

RUN apt-get update

# Install minimal packages to build Xdebug
RUN apt-get install -y libpng-dev libzip-dev git
RUN docker-php-ext-install zip

# Install Xdebug from source
RUN git clone -b XDEBUG_2_5_5 https://github.com/xdebug/xdebug.git /root/xdebug \
&& cd /root/xdebug && ./rebuild.sh

# Work directory
WORKDIR /var/www/html

{{</ highlight >}}

As last, at the end of `docker/php.ini`, add following lines (or your preferred Xdebug configuration):

{{< highlight txt "linenos=true,linenostart=1950" >}}

...

[xdebug]
zend_extension="xdebug.so"
xdebug.remote_enable=on
xdebug.remote_autostart=off
xdebug.remote_connect_back=on
xdebug.profiler_enable=off
xdebug.profiler_enable_trigger=on
xdebug.profiler_output_dir=/var/www/html

{{</ highlight >}}

Build and run the container with:

    docker-compose up -d

Then access to the container with and test Xdebug installation:

    $ docker exec -it test-php-1 /bin/bash

    root@9cdda704a4ee:/var/www/html# php -v
    PHP 5.6.40 (cli) (built: Jan 23 2019 00:10:05)
    Copyright (c) 1997-2016 The PHP Group
    Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
      with Xdebug v2.5.5, Copyright (c) 2002-2017, by Derick Rethans

I hope it can be useful.

[Docker]: https://www.docker.com/
[official PHP Apache2 Docker container]: https://hub.docker.com/_/php
[historical release of Xdebug]: https://xdebug.org/download/historical
