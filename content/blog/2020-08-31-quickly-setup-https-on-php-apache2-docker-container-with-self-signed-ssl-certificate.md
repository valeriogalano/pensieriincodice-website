---
title: "Quickly setup HTTPS on PHP Apache2 Docker container with self-signed SSL certificate"
author: Valerio Galano
date: 2020-08-31T05:00:00+01:00
tags:
  - Docker
  - PHP
  - SSL
  - HTTPS
categories:
  - How-to guides
type: blog
---

I often use local [Docker] images for development reasons, and sometimes, I need to implement features that only works in HTTPS environment: i.e. [JWT Bearer token].

So, I prepared a Docker container based on [official PHP Apache2 Docker container], that quickly setup HTTPS environment with a self-signed certificate.

Follows a starting docker-compose structure that you can be extended as needed. It contains only 2 files:

    docker-compose.yml
    apache2/Dockerfile

Let's see file content.

docker-compose.yml:

{{< highlight yml "linenos=true" >}}

version: "3.7"
services:

  php-ssl:
    build:
      context: ./apache2/
      dockerfile: Dockerfile
    ports:
      - 8081:80
      - 8443:443
    volumes:
      - ../html:/var/www/html
    networks:
      - php

networks:
  php:

volumes:
  data:
  
{{</ highlight >}}

apache2/Dockerfile:

{{< highlight dockerfile "linenos=true" >}}

FROM php:7.4-apache

MAINTAINER Valerio Galano

# Prepare apt
RUN apt-get update

# Prepare fake SSL certificate
RUN apt-get install -y ssl-cert

# Setup Apache2 mod_ssl
RUN a2enmod ssl

# Setup Apache2 HTTPS env
RUN a2ensite default-ssl.conf

# Work directory
WORKDIR /var/www/html

{{</ highlight >}}

Quick & dirty.

I hope it can be useful.

[Docker]: https://www.docker.com/
[official PHP Apache2 Docker container]: https://hub.docker.com/_/php
[JWT Bearer token]: https://jwt.io/introduction/