---
title: PHP jobs with Gearman and Supervisor
author: Valerio Galano
date: 2013-06-09T10:45:22+00:00
tags:
  - PHP
categories:
  - PHP
  - How-to guides
type: blog
---

## The problem

Often in a PHP project there could be operations that need to be executed asynchronously. Some example are: processing mail queues, indexing data, computation that requires long elaboration time.

A common behavior is handle those operations by using cron to execute processes in background. However, using cron requires expedients to avoid cross executions and forces us to implement some specific procedures and mechanism to store data needed to elaborate.

## Solution: Gearman + Supervisor

The solution that involves Gearman and Supervisor, instead, don't require any kind of data storage mechanism and supply a very simple way to develop processes in PHP.

From 

[Gearman homepage][1]:

> Gearman provides a generic application framework to farm out work to other machines or processes that are better suited to do the work. It allows you to do work in parallel, to load balance processing, and to call functions between languages. It can be used in a variety of applications, from high-availability web sites to the transport of database replication events. In other words, it is the nervous system for how distributed processing communicates.

Moreover, to develop clients and workers for Gearman in PHP is very simple as you can see in this [Gearman PHP documentation example][2].

On the other hand, as written on [Supervisor homepage][3]:

> Supervisor, is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.

Actually, combination of Gearman and Supervisor creates a **stable, flexible** and **scalable** infrastructure to handle all our jobs. As shown in the following diagram, it provides us a client/server structure and cares about communication and (if we want) distribution. We only need to take care of code to complete our tasks.

{{< figure title="Gearman stack" src="/images/gearman_stack.png" alt="Gearman stack" >}}

## Installation

I'm going to show how to install and setup Gearman and Supervisor in debian wheezy environment.

Normally, following packages should be present in a php ready system, but we want to be sure:

{{< highlight bash >}}
$ apt-get install apache2 php5 libapache2-mod-php5 php5-dev
{{< /highlight >}}

Now we are ready to start Gearman installation. Required command is the following:

{{< highlight bash >}}
$ apt-get install gearman-job-server libgearman-dev
{{< /highlight >}}

At this point, we need to install Gearman Pecl extension in order to use required PHP Classes. In a perfect World, we should simply install latest version, but (at the moment) latest stable Gearman Pecl requires a libgearman version newer then that included in debian repositories and, if we try to install it, we should recieve an error like this:

{{< highlight bash >}}
configure: error: libgearman version 1.1.0 or later required
ERROR: `/tmp/pear/temp/gearman/configure' failed
{{< /highlight >}}

To resolve this issue, we could compile and install libgearman by ourself, or, as I prefer, install an older pecl extension version by running following commands:

{{< highlight bash >}}
$ apt-get install php-pear
$ pecl install gearman-1.0.3
{{< /highlight >}}

Note: If you prefer compile libgearman yourself, you will easly find a way on Google.

To complete installation, following commands activate Gearman extension for Apache2:

{{< highlight bash >}}
$ echo "extension=gearman.so" > /etc/php5/conf.d/gearman.ini
$ service apache2 restart
{{< /highlight >}}

At this point, we are ready to create our Gearman workers and clients as described in [Gearman section of PHP documentation][4].

But we are not satisfied yet: we also want to handle our php processes in a smart way. We want to be able to control them, monitor them and specify things like: how many instances, priority, etc. In a few words, we want to run them through Supervisor.

So, let's start to install it:

{{< highlight bash >}}
$ apt-get install supervisor
{{< /highlight >}}

In debian, supervisor is a deamon and can be started/stopped using usual commands:

{{< highlight bash >}}
$ service supervisor start
$ service supervisor stop
{{< /highlight >}}

Last step is configure our Gearman workers in Supervisor. To do that, we will create files in _/etc/supervisor/conf.d/_ that will contain something like this:

/etc/supervisor/conf.d/myprocess.conf:

{{< highlight ini >}}
[program:myprocess]
command=php /path/to/project/myprocess.php
numprocs=12
directory=/path/to/project/spool/myprocess/
autostart=true
autorestart=true
stdout_logfile=/path/to/project/log/myprocess.log
stdout_logfile_maxbytes=1MB
stderr_logfile=/path/to/project/log/myprocess.log
stderr_logfile_maxbytes=1MB
{{< /highlight >}}

For a complete list of options, please see [Supervisor documentation][3].

### References:

  * [Gearman homepage][1]
  * [PHP Gearman manual][4].
  * [Supervisor homepage][3]

  [1]: http://www.gearman.org/
  [2]: http://it2.php.net/manual/en/gearman.examples-reverse.php
  [3]: http://supervisord.org/
  [4]: http://it2.php.net/manual/en/book.gearman.php