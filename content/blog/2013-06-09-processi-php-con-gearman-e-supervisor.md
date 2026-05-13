---
title: Processi PHP con Gearman e Supervisor
author: Valerio Galano
date: 2013-06-09T10:45:22+00:00
tags:
  - PHP
categories:
  - PHP
  - How-to guides
type: blog
---

## Problema

Spesso in un progetto PHP capita di dover eseguire operazioni in modo asincrono. Alcuni esempi sono: lavorazione di code email, indicizzazione di dati, calcoli che richiedono lunghi tempi di elaborazione.

Prassi comune è gestire tali operazioni utilizzando cron per eseguire processi in backgroud. Tuttavia, utilizzare cron richiede espedienti per evitare l'accavallemento delle esecuzioni e ci costringe ad implementare procedure specifiche e meccanismi di stoccaggio dei dati necessari per l'elaborazione.

## Soluzione: Gearman + Supervisor

La soluzione che concerne Gearman e Supervisor, invece, non richiede alcun meccanismo di data storage e fornisce un modo molto semplice per sviluppare processi in PHP.
  


Dalla [homepage di Gearman][1]:

> Gearman fornisce una applicazione framework generica per distribuire lavoro su altre macchine o processi che sono più adatti ad eseguire tale lavoro. Esso vi permette di eseguire lavori in parallelo, di bilanciare il carico di lavoro ed eseguire funzioni tra linguaggi diversi. Può essere utilizzato per una varietà di applicazioni, da siti Web con alta disponibilità a trasporto di eventi di replicazione database. In altre parole, è il sistema nervoso per la comunicazione distribuita fra processi.

Inoltre, sviluppare clients e workers per Gearman in PHP è molto semplice, come mostrato in questo [esempio nella documentazione PHP di Gearman][2].

D'altra parte, come scritto sulla [homepage di Supervisor][3]:

> Supervisor, è un sistema client/server che permette ai suoi utenti di monitorare e controllare un gran numero di processi su sistemi operativi derivati da UNIX.

In pratica, la combinazione di Gearman e Supervisor crea una infrastruttura **stabile**, **flessibile** e **scalabile** per gestire i nostri jobs. Come mostrato nel seguente schema, essa ci fornisce una struttura client/server e si occupa della comunicazione e (volendo) della distribuzione. Noi dobbiamo solo aver cura di scrivere il codice per eseguire le nostre operazioni.

{{< figure title="Gearman stack" src="/images/gearman_stack.png" alt="Gearman stack" >}}

## Installazione

Sto per mostrare come installare e configurare Gearman e Supervisor in ambiente debian wheezy.

Normalmente, i seguenti pacchetti dovrebbero essere già presenti in un sistema configurato per il PHP, ma giusto per essere sicuri, lanciamo:

{{< highlight bash >}}
$ apt-get install apache2 php5 libapache2-mod-php5 php5-dev
{{< /highlight >}}

Ora siamo pronti per iniziare l'installazione di Gearman. I comandi necessari sono i seguenti:

{{< highlight bash >}}
$ apt-get install gearman-job-server libgearman-dev
{{< /highlight >}}

A questo punto dobbiamo installare l'estensione Pecl per Gearman per poter utilizzare le classi PHP necessarie. In un mondo perfetto, noi dovremmo semplicemente installare l'ultima versione, ma (al momento) la versione stabile di Gearman Pecl richiede una versione di libgearman più nuova di quella presente nei repository di debian e, se provassimo ad installarla, dovremmo ricevere un errore simile al seguente:

{{< highlight bash >}}
configure: error: libgearman version 1.1.0 or later required
ERROR: `/tmp/pear/temp/gearman/configure' failed
{{< /highlight >}}

Per risolvere questo problema, potremmo compilare e installare noi stessi libgearman, oppure, come preferisco io, installare una versione più vecchia di estensione Pecl lanciando i seguenti comandi:

{{< highlight bash >}}
$ apt-get install php-pear
$ pecl install gearman-1.0.3
{{< /highlight >}}

Nota: se preferite compilare voi libgearman, potete facilmente trovare il modo cercando su Google.

Per completare l'installazione, i seguenti comandi attivano l'estensione Gearman per Apache2:

{{< highlight bash >}}
$ echo "extension=gearman.so" > /etc/php5/conf.d/gearman.ini
$ service apache2 restart
{{< /highlight >}}

A questo punto, siamo pronti per creare i nostri client e worker per Gearman come mostrato nella [sezione Gearman della documentazione PHP][4].

Ma noi non siamo ancora soddisfatti: noi vogliamo anche poter gestire i nostri processi in modo intelligente. Vogliamo poterli controllare, monitorarli e specificare dettagli come: numero di istanze, priorità, ecc. In pratica, vogliamo eseguirli attraverso Supervisor.

Quindi installiamolo:

{{< highlight bash >}}
$ apt-get install supervisor
{{< /highlight >}}

In debian, supervisor è un demone di sistema e può essere avviato e fermato usando i soliti comandi:

{{< highlight bash >}}
$ service supervisor start
$ service supervisor stop
{{< /highlight >}}

L'ultimo passo è configurare i nostri workers di Gearman in Supervisor. Per farlo, creeremo dei file in _/etc/supervisor/conf.d/_ che conterranno una configurazione simile a questa:

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

Per la lista completa delle opzioni, fare riferimento alla [documentazione di Supervisor][3].

### Riferimenti:

  * [Gearman homepage][1]
  * [PHP Gearman manual][4].
  * [Supervisor homepage][3]

  [1]: http://www.gearman.org/
  [2]: http://it2.php.net/manual/en/gearman.examples-reverse.php
  [3]: http://supervisord.org/
  [4]: http://it2.php.net/manual/en/book.gearman.php