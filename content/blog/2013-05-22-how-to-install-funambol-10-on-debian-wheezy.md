---
title: How to install Funambol 10 on Debian Wheezy
author: Valerio Galano
date: 2013-05-22T18:43:23+00:00
categories:
  - How-to guides
type: blog
---

In this post we will cover how to install Funambol 10.0.3 on Debian Wheezy server.

First of all, we need to install Java jdk on server:

{{< highlight bash >}}
$ apt-get install default-jdk
{{< /highlight >}}

Then, let's create a folder to download and uncompress Funambol (at the moment, at version 10.0.3):

{{< highlight bash >}}
$ mkdir -p /opt/Funambol 
$ cd /opt/Funambol 
$ wget -c http://downloads.sourceforge.net/project/funambol/bundle/v10/funambol-10.0.3-x64.bin 
$ chmod +x funambol-10.0.3-x64.bin 
$ ./funambol-10.0.3-x64.bin
{{< /highlight >}}

Now, we need a specific user to make Funambol run. So let's create a group called funambol and a user also called funambol with /opt/Funambol as home folder:


{{< highlight bash >}}
$ groupadd funambol 
$ useradd -g funambol -m -d /opt/Funambol -s /bin/sh funambol 
$ chown funambol:funambol -fR /opt/Funambol
{{< /highlight >}}

If always goes well, browsing at [http://localhost:8080/][3] we should see a web demo in which test contacts and calendars.

At this point, Funambol is ready to work, but we want be able start and stop it as a system service. So, let's create and edit file /etc/init.d/funambol:

{{< highlight bash >}}
$ vi /etc/init.d/funambol
{{< /highlight >}}

and put following code as content (based on [http://www.deec.it/2009/09/03/installare-funambol-su-debian/][4]):

{{< highlight bash >}}
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

And finally let's update rc:

{{< highlight bash >}}
$ update-rc.d funambol defaults
{{< /highlight >}}

At this point, we can start and stop Funambol using following commands:

{{< highlight bash >}}
$ /etc/init.d/funambol start 
$ /etc/init.d/funambol stop
{{< /highlight >}}

Now we have two ways to configure Funambol:

  1. editing /opt/Funambol/config/Funambol.xml with our favorite editor or
  2. using Funambol Administration tool available for[Linux][1] or [Windows][2].

 [1]: http://downloads.sourceforge.net/project/funambol/admin-tool/v10/funambol-admin-10.0.0.tgz
 [2]: http://downloads.sourceforge.net/project/funambol/admin-tool/v10/funambol-admin-10.0.0.exe
 [3]: http://localhost:8080/
 [4]: http://www.deec.it/2009/09/03/installare-funambol-su-debian/