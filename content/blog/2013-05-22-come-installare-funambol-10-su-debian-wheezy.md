---
title: Come installare Funambol 10 su Debian Wheezy
author: Valerio Galano
date: 2013-05-22T18:43:23+00:00
categories:
  - How-to guides
type: blog
---

In questo articolo vedremo come installare Funambol 10.0.3 su un server Debian Wheezy.

Innanzitutto, dobbiamo installare sul server il Java jdk:

{{< highlight bash >}}
$ apt-get install default-jdk
{{< /highlight >}}

In seguito, creiamo una cartella in cui scaricare e decomprimere Funambol (al momento, alla versione 10.0.3):

{{< highlight bash >}}
$ mkdir -p /opt/Funambol
$ cd /opt/Funambol
$ wget -c http://downloads.sourceforge.net/project/funambol/bundle/v10/funambol-10.0.3-x64.bin
$ chmod +x funambol-10.0.3-x64.bin
$ ./funambol-10.0.3-x64.bin
{{< /highlight >}}

Ora, abbiamo bisogno di un utente specifico per far girare Funambol. Così, creiamo un gruppo chiamato funambol ed anche un utente chiamato funambol con /opt/Funambol come cartella home:



{{< highlight bash >}}
$ groupadd funambol
$ useradd -g funambol -m -d /opt/Funambol -s /bin/sh funambol
$ chown funambol:funambol -fR /opt/Funambol
{{< /highlight >}}

Se tutto è andato bene, navigando all'indirizzo [http://localhost:8080/][3], dovremmo vedere una demo in cui creare contatti e calendari.

A questo punto Funambol è pronto per funzionare, ma noi vogliamo poterlo avviare e fermare com un servizio di sistema. Quindi creiamo e modifichiamo il file /etc/init.d/funambol:

{{< highlight bash >}}
$ vi /etc/init.d/funambol
{{< /highlight >}}

e inseriamo come contenuto il seguente codice (basato su [http://www.deec.it/2009/09/03/installare-funambol-su-debian/][4]):

{{< highlight ini >}}
#!/bin/sh

cd `dirname $0`
 FUNAMBOL_HOME=`(cd /opt/Funambol ; pwd)`
 DS_SERVER_HOME=$FUNAMBOL_HOME/ds-server

if [ ! -d $FUNAMBOL_HOME/config ]; then
 #
 # maybe we are in Funambol/tool/bin
 #
 FUNAMBOL_HOME=$FUNAMBOL_HOME/..
 DS_SERVER_HOME=$FUNAMBOL_HOME/ds-server
 fi

# Setting the JAVA_HOME to the JRE in the bundle if not set or if not correctly set
 if [ -z "$JAVA_HOME" ]; then
 export JAVA_HOME=$FUNAMBOL_HOME/tools/jre-1.5.0/jre
 else
 if [ ! -f "$JAVA_HOME/bin/java" ]; then
 export JAVA_HOME=$FUNAMBOL_HOME/tools/jre-1.5.0/jre
 fi
 fi

if [ -z "$JAVA_HOME" ]; then
 echo “Please, set JAVA_HOME before running this script.”
 exit 1
 fi

if [ ! -f "$JAVA_HOME/bin/java" ]
 then
 echo “Please set JAVA_HOME to the path of a valid jre.”
 exit;
 fi

export J2EE_HOME=${FUNAMBOL_HOME}/tools/tomcat
 export CATALINA_HOME=${FUNAMBOL_HOME}/tools/tomcat

cd ${FUNAMBOL_HOME}

export LANG=en_US.utf-8

cd ${J2EE_HOME}/bin

COMED=true

case $1 in
 start)

if [ "$COMED" = "true" ] ; then
 #
 # Run Hypersonic
 #
 sh $FUNAMBOL_HOME/bin/hypersonic start > /dev/null
 fi

#
 # Run CTP Server
 #
 sh $FUNAMBOL_HOME/bin/ctp-server start > /dev/null

#
 # Run DS Server
 #
 sh $FUNAMBOL_HOME/bin/funambol-server start > /dev/null

#
 # Run Inbox Listener
 #
 sh $FUNAMBOL_HOME/bin/inbox-listener start > /dev/null

#
 # Run Pim Listener
 #
 sh $FUNAMBOL_HOME/bin/pim-listener start > /dev/null
 ;;
 stop)
 #
 # Shutdown Inbox Listener
 #
 sh $FUNAMBOL_HOME/bin/inbox-listener stop > /dev/null

#
 # Shutdown Pim Listener
 #
 sh $FUNAMBOL_HOME/bin/pim-listener stop > /dev/null

#
 # Shutdown Tomcat
 #
 sh $FUNAMBOL_HOME/bin/funambol-server stop > /dev/null

#
 # Shutdown CTP Server
 #
 sh $FUNAMBOL_HOME/bin/ctp-server stop > /dev/null

if [ "$COMED" = "true" ] ; then
 #
 # Shutdown Hypersonic
 #
 sh $FUNAMBOL_HOME/bin/hypersonic stop > /dev/null
 fi
 ;;
 license)
 less “${FUNAMBOL_HOME}/LICENSE.txt”
 ;;
 *)
 echo “usage: $0 [start|stop|license]”
 ;;
 esac

{{< /highlight >}}

E infine aggiorniamo rc:

{{< highlight bash >}}
$ update-rc.d funambol defaults
{{< /highlight >}}

A questo punto, possiamo avviare e terminare Funambol utilizzando i seguenti comandi:

{{< highlight bash >}}
$ /etc/init.d/funambol start
$ /etc/init.d/funambol stop
{{< /highlight >}}

Ora abbiamo due possibilità per configurare Funambol:

  1. modificare /opt/Funambol/config/Funambol.xml con il nostro editor preferito oppure
  2. utilizzare lo strumento Funambol Administration disponibile in [versione Linux][1] o in [versione Windows][2].

 [1]: http://downloads.sourceforge.net/project/funambol/admin-tool/v10/funambol-admin-10.0.0.tgz
 [2]: http://downloads.sourceforge.net/project/funambol/admin-tool/v10/funambol-admin-10.0.0.exe
 [3]: http://localhost:8080/
 [4]: http://www.deec.it/2009/09/03/installare-funambol-su-debian/