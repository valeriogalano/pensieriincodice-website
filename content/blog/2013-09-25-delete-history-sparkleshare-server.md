---

title: Delete history of on your own SparkleShare server
author: Valerio Galano
date: 2013-09-25T14:55:44+00:00
categories:
  - How-to guides
type: blog
---

<a title="SparkleShare" href="http://sparkleshare.org/" target="_blank" rel="noopener noreferrer">SparkleShare</a> is a little Open Source software that allows users to share documents and files with version control and client side encryption system.

To put it simply, it acts like Dropbox or Ubuntu One, but it works on top of a <a title="Git" href="http://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> repository. This means that, if you want, you can simply setup you own a SparkleShare server and share office documents with your colleagues having all infrastructure under your control using Git.

This is exactly my office's approach and it works very well.

There's only an issue about this: sometimes you need to share big files for a limited period of time. Actually, SparkleShare (v 1.1) has no feature to clear history and this means that Git repositories contain all data needed to access to revisions. In simple words: each repository has disk size equal to the sum of each version of each file (also deleted).

In this case it could be useful to clear repository history in order to free a lot of disk space both on server and client.

<span style="text-decoration: underline;">Please, keep in mind that following operations will delete all your SparkleShare history! Only actually shared file will be preserved!</span>

## Let's start from server

Open a terminal and reach git repository directory.

First of all, run following command to get actual directory size:

{{< highlight bash >}}
$ du -sch
{{< /highlight >}}

Result should be bigger then actual size of shared files.

Now, let's run a command to clean all unnecessary files from repository:

{{< highlight bash >}}
$ git gc --prune=now --aggressive
{{< /highlight >}}

Output of this command should be something like this:

{{< highlight bash >}}
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (9/9), done.
Total 9 (delta 2), reused 7 (delta 0)
{{< /highlight >}}

At this point, we can repack repository objects by running:

{{< highlight bash >}}
$ git repack -a -d -l
{{< /highlight >}}

Again, output of this command should be something like this:

{{< highlight bash >}}
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (9/9), done.
Total 9 (delta 2), reused 9 (delta 2)
{{< /highlight >}}

That's all. Let's check directory size again:

{{< highlight bash >}}
$ du -sch
{{< /highlight >}}

Directory size should be smaller and very similar to actual shared file size.

## Now it's client's turn

We should repeat operations shown above, for each client. In this way, we will free also client's disk space.

<span style="text-decoration: underline;">Please note that, if we skip this step, no client's space will be released, even after synchronization.</span>