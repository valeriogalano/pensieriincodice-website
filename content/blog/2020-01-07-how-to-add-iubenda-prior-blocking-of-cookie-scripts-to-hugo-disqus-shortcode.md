---
title: How to add Iubenda prior blocking of cookie scripts to Hugo Disqus shortcode 
author: Valerio Galano
date: 2020-01-07T06:00:00+00:00
tags: 
  - Hugo
  - Iubenda
  - Disqus
categories:
  - How-to guides
type: blog
---

In recent days, I worked to convert my Wordpress-based personal website to a static blog created using Hugo framework. The result of this conversion is the blog you are reading at the moment. I made this decision because I was bored to continously update and take care of a complete Wordpress instance with the purpose of keep online a simple personal blog. But this is another story...

Anyway, I discovered [Hugo Framework][1] at the suggestion of my friend [Giuseppe Pugliese (Magnetarman)][8] and, after some scouting on [official documentation][2], I understood that Hugo was what I was looking for: a fast and simple framework to build websites.

As written in official [home page][1]:

> Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

Hugo framework includes some important features like mobile responsive themes, blog posts, simple content management, support for Youtube, Twitter, Instagram, etc.. As you setup aspect you prefer and feed it with your contents, Hugo can compile them in a static websites that need no maintenance effort and are very secure.

In my case, it tooks less than 2 hours to understand how framework works and about 4 hours to convert my old website in his Hugo alter ego. I used a Wordpress plugin converter that worked not so well and made me waste some time, but I still was happy until...

Everything was almost done, when I realized I had to include a Privacy and Cookie Policy.

Development in Hugo is very simple and coincise as long as you exactly follow framework's guide lines but unfortunately if you need some that is not expected, things become a bit more complicated.

My Privacy and Cookie policy is implemented using [Iubenda][5] service and is actually very simple to configure and include in a website, also using Hugo framework. The only issue is about a feature that Iubenda calls _prior blocking of cookie scripts_: in short words, it's a way that Iubenda's code use to block unautherized javascripts or iframes from create cookies.

With *prior blocking*, if user doesn't accept cookies, Iubenda blocks the various service so they can't create cookies.

To have this feature in my new website I had to solve some problems and make some customization to Hugo's theme. So, since I can't find relevant tutorials online about this, I decided to write some articles about Iubenda's integration in Hugo websites. Each article will be about a different service and this one is about Disqus integration. 

[Disqus][7] is a blog comment hosting service. It has a lot of feature, is very common worldwide and Hugo has a native mechanism to integrate it in posts.

In this article we will see how to *add Iubenda prior blocking to Disqus cookies*.

**Please, note**: following code examples will be shown assuming you have a *working Hugo website project*, setup using [official quickstart guide][4] and equipped with *ananke* theme (default theme suggested in quickstart guide) and *Iubenda Privacy and Cookie policy correctly embedded*. If you (as probably) are using a different Hugo theme, please, keep in mind that you shoud adapt something to your specific needs.

To allow Iubenda to block cookies, we need to add `class="_iub_cs_activate"` to `<script>` tag as reported in [manual tagging documentation][6]. 

Hugo handles Disqus code like an _internal template_, so, to customize it, we need to create a new _partial template_ and replace each Disqus internal output.

So let's follow these steps:
1. Prepare a custom _partial template output_ for Disqus shortcode
2. Find rows in which our theme calls Disqus shortcode's _internal template output_
3. Replace each call with a call to our _partial template output_
4. Check result

### Step 1: Prepare partial Disqus shortcode template

To create a partial template, let's create a new file named **layouts/partials/disqus.html** and put in some content like:

{{< highlight html "linenos=true,hl_lines=2" >}}

<div id="disqus_thread"></div>
<script type="text/plain" class="_iub_cs_activate" data-iub-purposes="3">

(function() {
    // Don't ever inject Disqus on localhost--it creates unwanted
    // discussions from 'localhost:1313' on your Disqus account...
    if (window.location.hostname == "localhost")
        return;

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    var disqus_shortname = '{{ .Site.DisqusShortname }}';
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="https://disqus.com/" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

{{</ highlight >}}

### Step 2: Find calls to Disqus shortcode's _internal template output_

Now we need to replace default disqus code with our custom template. To do this, let's fisrt find string `{{ template "_internal/disqus.html" . }}` in Hugo theme.

In our example theme (ananke), we will find it in file `themes/ananke/layouts/_default/single.html`.

### Step 3: Replace Disqus _internal template output_ with _partial template output_

Once we find file(s) containing the string, we simply need to move theme under project layout/ folder and replace each `{{ template "_internal/disqus.html" . }}` with `{{ partial "disqus.html" . }}` like in following file.

**layouts/_default/single.html:**
{{< highlight html "linenos=true,hl_lines=47" >}}
{{ define "header" }}
   {{/* We can override any block in the baseof file be defining it in the template */}}
  {{ partial "page-header.html" . }}
{{ end }}

{{ define "main" }}
  {{ $section := .Site.GetPage "section" .Section }}
  <article class="flex-l flex-wrap justify-between mw8 center ph3">

    <header class="mt4 w-100">
      <p class="f6 b helvetica tracked">
          {{/*
          CurrentSection allows us to use the section title instead of inferring from the folder.
          https://gohugo.io/variables/page/#section-variables-and-methods
          */}}
        {{with .CurrentSection.Title }}{{. | upper }}{{end}}
      </p>
      <h1 class="f1 athelas mb1">
        {{- .Title -}}
      </h1>
      {{ with .Params.author }}
      <p class="tracked">
         By <strong>{{ . | markdownify }}</strong>
      </p>
      {{ end }}
      {{/* Hugo uses Go's date formatting is set by example. Here are two formats */}}
      <time class="f6 mv4 dib tracked" datetime="{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}">
        {{- .Date.Format "January 2, 2006" -}}
      </time>
      {{/*
          Show "reading time" and "word count" but only if one of the following are true:
          1) A global config `params` value is set `show_reading_time = true`
          2) A section front matter value is set `show_reading_time = true`
          3) A page front matter value is set `show_reading_time = true`
        */}}
      {{ if (or (eq (.Param "show_reading_time") true) (eq $section.Params.show_reading_time true) )}}
        <span class="f6 mv4 dib tracked"> - {{ .ReadingTime}} minutes read</span>
        <span class="f6 mv4 dib tracked"> - {{ .WordCount}} words</span>
      {{ end }}
    </header>

    <section class="nested-copy-line-height lh-copy serif f4 nested-links nested-img mid-gray pr4-l w-two-thirds-l">
      {{- .Content -}}
      {{- partial "tags.html" . -}}
      <div class="mt6">
      {{ if .Site.DisqusShortname }}
          {{ partial "disqus.html" . }}
      {{ end }}
      {{ if .Site.Params.commentoEnable }}
        {{- partial "commento.html" . -}}
      {{ end }}
      </div>
    </section>

    <aside class="w-30-l mt6-l">
      {{- partial "menu-contextual.html" . -}}
    </aside>

  </article>
{{ end }}

{{</ highlight >}}

### Step 3: Check result

Once we published our website, we should not see Disqus comments area until user doesn't accepts Iubenda cookie policy.

[1]: https://gohugo.io/
[2]: https://gohugo.io/documentation/
[3]: https://gohugo.io/templates/internal/
[4]: https://gohugo.io/getting-started/quick-start/
[5]: https://www.iubenda.com/
[6]: https://www.iubenda.com/en/help/3081-prior-blocking-of-cookie-scripts#manual-tagging
[7]: https://disqus.com/
[8]: https://www.magnetarman.com/