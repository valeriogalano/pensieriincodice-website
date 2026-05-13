---

title: Setup Oracle JDK 7 + Netbeans 7.0.1 on Ubuntu 12.04 LTS
author: Valerio Galano
date: 2013-08-30T14:58:19+00:00
categories:
  - How-to guides
type: blog
---

In this post we will see how to setup a basic environment to develop Java applications on a Ubuntu Precise Pangolin. Normally this setup should be a very simple operation, anyway I had some trouble during process, so I decided to write down and describe all steps I followed to sort out.

First of all, I installed Oracle Java Development Kit using specific webupd8team repository.

Please note that this step is mandatory because using ubuntu openjdk package, Netbeans won't be able to work correctly: in fact new project window will lock down on "please wait..." message.

So let's open a terminal and run following commands:

{{< highlight bash >}}
$ sudo add-apt-repository ppa:webupd8team/java
$ sudo apt-get update
$ sudo apt-get install oracle-java7-installer oracle-java7-set-default
{{< /highlight >}}

When process is finished, we should check if oracle java is correct installed and used as system Java Virtual Machine. To do that we can simply run following command and check resutlt:

{{< highlight bash >}}
$ java -version
{{< /highlight >}}

If everything is ok, the result is something like this:

{{< highlight bash >}}
java version "1.7.0_25"
Java(TM) SE Runtime Environment (build 1.7.0_25-b15)
Java HotSpot(TM) 64-Bit Server VM (build 23.25-b01, mixed mode)
{{< /highlight >}}

If for any reason, the result differs from above, try to run:

{{< highlight bash >}}
$ sudo update-java-alternatives -s java-7-oracle
{{< /highlight >}}

and then run java version check again.

Now we can install Netbeans by running following command:

{{< highlight bash >}}
$ sudo apt-get install netbeans
{{< /highlight >}}

We are almost done. Now Netbeans runs, but it's design mode can't work properly: it simply remains on _loading_ message. To fix this issue, we will install libbatik library and will run Netbeans with a non-standard opition.

Run following command to install needed library:

{{< highlight bash >}}
$ sudo apt-get install netbeans libbatik-java
{{< /highlight >}}

Now, we can try Netbeans work correctly by running:

{{< highlight bash >}}
$ /usr/bin/netbeans -cp:a /usr/share/java/batik-ext.jar
{{< /highlight >}}

Everything should be ok... but we are lazy and we won't open a terminal everytime we need to use Netbeans, so let's fix default launcher!

To edit Netbeans desktop entry, run:

{{< highlight bash >}}
$ sudo nano /usr/share/applications/netbeans.desktop
{{< /highlight >}}

File content should be something like this:

{{< highlight ini >}}
[Desktop Entry]
Name=NetBeans IDE 7.0.1
Comment=Integrated Development Environment
TryExec=/usr/bin/netbeans
Exec=/usr/bin/netbeans
Icon=/usr/share/netbeans/7.0.1/nb/netbeans.png
Categories=Development;IDE;Java;
Terminal=false
Type=Application
StartupNotify=true
{{< /highlight >}}

We simply have to replace **Exec** actual value (line 5) with _/usr/bin/netbeans -cp:a /usr/share/java/batik-ext.jar_. So it should appear like this:

{{< highlight ini "linenos=table,hl_lines=5" >}}
[Desktop Entry]
Name=NetBeans IDE 7.0.1
Comment=Integrated Development Environment
TryExec=/usr/bin/netbeans
Exec=/usr/bin/netbeans -cp:a /usr/share/java/batik-ext.jar
Icon=/usr/share/netbeans/7.0.1/nb/netbeans.png
Categories=Development;IDE;Java;
Terminal=false
Type=Application
StartupNotify=true
{{< /highlight >}}

Save and quit.

At this point we are ready to launch Netbeans and start to develop!