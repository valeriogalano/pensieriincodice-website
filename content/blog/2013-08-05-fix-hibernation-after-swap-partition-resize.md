---

title: Fix Hibernation after swap partition resize
author: Valerio Galano
date: 2013-08-05T15:16:30+00:00
categories:
  - How-to guides
type: blog
---

Hibernation can be an important feature for many users: it allows people to turn on the PC and get it in the exact state session of when it was turned off (open files, running applications, configurations edited, terminals, etc.).

This feature is based on usage of swap partition. In poor words: when user hibernate PC, all content of RAM memory is stored in this partition and is fetched at next startup time. For this reason, the swap partition must be bigger (or at least equal) than RAM size and, in case of RAM update, must be enlarged.

## The problem

The problem is that, after a resize operation, swap partition's UUID is modified and initramfs is unable to recognize swap partition. This means that when you try to hibernate your PC, it don't wake up correctly and boots as you turned it off normally.

## The solution

The solution is very simple: after swap partition resize operation, let's inform initramfs about new UUID. Let's see how.

<span style="text-decoration: underline;">Please, note that following procedure has been tested on Ubuntu 12.04 LTS.</span>

First of all, we need to discover new UUID of swap partition. So, let's open a terminal window and run following command:

{{< highlight bash >}}
$ sudo blkid
{{< /highlight >}}

It will return the list of partitions on your PC. The output will be something like this:

{{< highlight bash >}}
/dev/sda1: LABEL="Recovery Partition" UUID="9ECCDDF0CCDDC327" TYPE="ntfs" 
/dev/sda2: LABEL="VAIO" UUID="4C54A5A254A58EF0" TYPE="ntfs" 
/dev/sda5: UUID="53199a5e-1427-4e55-8b57-b82d919f2a1c" TYPE="swap" 
/dev/sda6: UUID="4f4af466-e3f6-483d-8b60-b7219820a33d" TYPE="ext3"
{{< /highlight >}}

From this list, we need to copy UUID value from line with TYPE="swap". Now, use it to replace content of file /etc/initramfs-tools/conf.d/resume running following command (of course, you have to replace my example UUID with one you discovered in previous step):

{{< highlight bash >}}
$ sudo echo "RESUME=UUID=53199a5e-1427-4e55-8b57-b82d919f2a1c" > /etc/initramfs-tools/conf.d/resume
{{< /highlight >}}

Finally let's rebuild our initramfs with following command:

{{< highlight bash >}}
$ sudo update-initramfs -u
{{< /highlight >}}

Now, let's reboot the system and, if everything goes well, hibernation should work again.

Nota: <a title="Riattivare ibernazione dopo il ridimensionamento della partizione swap" href="http://www.pensaopen.com/riattivare-ibernazione-dopo-il-ridimensionamento-della-partizione-swap/" target="_blank" rel="noopener noreferrer">Questo articolo è disponibile anche in lingua italiana</a>.