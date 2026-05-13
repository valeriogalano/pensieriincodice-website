---

title: Update Twitter Bootstrap to release 3 in Zend Framework 2
author: Valerio Galano
date: 2013-08-10T09:16:47+00:00
tags:
  - PHP
  - Zend Framework 2
categories:
  - PHP
  - How-to guides
type: blog
---

Recently I started a new project based on [Zend Framework 2][3], using [Twitter Bootstrap][4] as CSS framework. Some days ago, new Bootstrap v3 was released and introduced a lot of changes and improvements. Because of ZF2 [Skeleton Application][5] comes out-of-box with Twitter Bootstap 2, I decided to setup the new project skeleton and update CSS framework to latest available release.

In this post, I'll describe the process to update Bootstrap to v3 into a ZF2 project.

**Please note**: I set up the project with **Zend Framework 2.2.2** and updated to Twitter **Bootstrap 3.0.0-rc1** because, actually, are latest available versions. **If time is passed, you should check official documentations to ensure that this procedure is still valid**.

I'll describe update process assuming that we have a working [Skeleton Application][5] deployed following [Zend Framework Getting starded guide][6].

First of all, we have to update libraries in public/ folder by accomplish following steps:

  1. Download [Twitter Bootstrap library package][1] and unzip it.
  2. Move content of dist/ folder into <project>/public/ folder.
  3. Download [Glyphicons package][2] and unzip it.
  4. Copy fonts/ folder into <project>/public/ folder.
  5. Copy css/bootstrap-glyphicons.css into <project>/public/css/ folder.

Now we have to modify Zend Framework layout. Here you can see layout.phtml file of version 2.2.2:

{{< highlight php "linenos=true" >}}
<?php echo $this->doctype(); ?>

<html lang="en">
<head>
<meta charset="utf-8">
<?php echo $this->headTitle('ZF2 '. $this->translate('Skeleton Application'))->setSeparator(' - ')->setAutoEscape(false) ?>

<?php echo $this->headMeta()->appendName('viewport', 'width=device-width, initial-scale=1.0') ?>

<!-- Le styles -->
<?php echo $this->headLink(array('rel' => 'shortcut icon', 'type' => 'image/vnd.microsoft.icon', 'href' => $this->basePath() . '/img/favicon.ico'))
->prependStylesheet($this->basePath() . '/css/bootstrap-responsive.min.css')
->prependStylesheet($this->basePath() . '/css/style.css')
->prependStylesheet($this->basePath() . '/css/bootstrap.min.css') ?>

<!-- Scripts -->
<?php echo $this->headScript()->prependFile($this->basePath() . '/js/html5.js', 'text/javascript', array('conditional' => 'lt IE 9',))
->prependFile($this->basePath() . '/js/bootstrap.min.js')
->prependFile($this->basePath() . '/js/jquery.min.js') ?>

</head>
<body>
<div>
<div>
<div>
<a data-toggle="collapse" data-target=".nav-collapse">
<span></span>
<span></span>
<span></span>
</a>
<a href="<?php echo $this->url('home') ?>"><?php echo $this->translate('Skeleton Application') ?></a>
<div>
<ul>
<li><a href="<?php echo $this->url('home') ?>"><?php echo $this->translate('Home') ?></a></li>
</ul>
</div><!--/.nav-collapse -->
</div>
</div>
</div>
<div>
<?php echo $this->content; ?>
<hr>
<footer>
<p>&copy; 2005 - <?php echo date('Y') ?> by Zend Technologies Ltd. <?php echo $this->translate('All rights reserved.') ?></p>
</footer>
</div> <!-- /container -->
<?php echo $this->inlineScript() ?>
</body>
</html>


{{< /highlight >}}

We have to replace previous file's content with this one:

{{< highlight php "linenos=true" >}}
<?php echo $this->doctype(); ?>

<html lang="en">
<head>
<meta charset="utf-8">
<?php echo $this->headTitle('ZF2 '. $this->translate('Skeleton Application'))->setSeparator(' - ')->setAutoEscape(false) ?>

<?php echo $this->headMeta()->appendName('viewport', 'width=device-width, initial-scale=1.0') ?>

<!-- Le styles -->
<?php echo $this->headLink(array('rel' => 'shortcut icon', 'type' => 'image/vnd.microsoft.icon', 'href' => $this->basePath() . '/img/favicon.ico'))
->prependStylesheet($this->basePath() . '/css/bootstrap-responsive.min.css')
->prependStylesheet($this->basePath() . '/css/style.css')
->prependStylesheet($this->basePath() . '/css/bootstrap.min.css') ?>

<!-- Scripts -->
<?php echo $this->headScript()->prependFile($this->basePath() . '/js/html5.js', 'text/javascript', array('conditional' => 'lt IE 9',))
->prependFile($this->basePath() . '/js/bootstrap.min.js')
->prependFile($this->basePath() . '/js/jquery.min.js') ?>

</head>
<body>
<div>
<div>
<div>
<a data-toggle="collapse" data-target=".nav-collapse">
<span></span>
<span></span>
<span></span>
</a>
<a href="<?php echo $this->url('home') ?>"><?php echo $this->translate('Skeleton Application') ?></a>
<div>
<ul>
<li><a href="<?php echo $this->url('home') ?>"><?php echo $this->translate('Home') ?></a></li>
</ul>
</div><!--/.nav-collapse -->
</div>
</div>
{{< /highlight >}}

&nbsp;

And that's all. Your Zend Framework project is ready to be developed using Twitter Bootstrap latest release.

References:

  * [Zend Framework official documentation][3]
  * [Twitter Bootstrap official documentation][4]

 [1]: http://getbootstrap.com/bs-v3.0.0-rc1-dist.zip
 [2]: https://github.com/twbs/bootstrap-glyphicons/archive/gh-pages.zip
 [3]: http://framework.zend.com/
 [4]: http://getbootstrap.com/
 [5]: https://github.com/zendframework/ZendSkeletonApplication
 [6]: http://framework.zend.com/manual/2.2/en/user-guide/skeleton-application.html