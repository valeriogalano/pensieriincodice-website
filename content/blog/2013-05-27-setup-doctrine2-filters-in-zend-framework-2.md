---
title: Setup Doctrine 2 filters in Zend Framework 2
author: Valerio Galano
date: 2013-05-27T12:41:38+00:00
tags:
  - PHP
  - Zend Framework 2
categories:
  - PHP
  - How-to guides
type: blog
---

# Scenario

[Doctrine filter][2] is a very powerfull tool that can be used to add conditional clauses at SQL level into our Doctrine 2 engine. This means that filters constraints will affect DQL queries, collections, lazy loading, etc.

How to setup and use filters in generic conditions is well explained in [this article][2] of official Doctrine documentation, but in a [Zend Framework 2][1] project, the same operation is a bit different.

So, in this post, we will explain how to configure one or more filters into our Zend Framework 2 projects.

# Explicative example

Following example is based on "locale" filter one shown in [Doctrine reference][2]. We will assume you just have a working ZF2 project based on [ZendSkeletonApplication][3] with a configured [DoctrineORMModule][4] (refer to official documentations to reach this achievement).

First of all, we need an interface class to use as mark to decide which entities will be affected by filter. So, if we want that a filter is applied to an entity we only need to make it implements this interface. Of course, we can also use interface to specify methods to implement into entity, if we want. This can be usefull and we will see an example in a future post.



/module/Application/src/Application/DoctrineFilter/MyLocaleFilterInterface.php:

{{< highlight php "linenos=true" >}}
<?php
namespace ApplicationDoctrineFilter;

/**
 * Interface to support locale filter
 */
Interface MyLocaleFilterInterface
{
    ...
}

{{< /highlight >}}

Essentially, filter definition is identical to Doctrine only usage. We only need to pay attention to file position and namespace adjustments as follow:

/module/Application/src/Application/DoctrineFilter/MyLocaleFilter.php:

{{< highlight php "linenos=true" >}}
<?php
namespace ApplicationDoctrineFilter;

use DoctrineORMMappingClassMetaData,
    DoctrineORMQueryFilterSQLFilter;

class MyLocaleFilter extends SQLFilter
{
    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {
        // Check if the entity implements the LocalAware interface
        if (!$targetEntity->reflClass->implementsInterface('LocaleAware')) {
            return '';
        }

        return $targetTableAlias.'.locale = ' . $this->getParameter('locale'); // getParameter applies quoting automatically
    }
}
{{< /highlight >}}

&nbsp;

At this point, real differences comes: to setup filter, we will use ZF2 module configuration file instead of addFilter() method (as described in official reference). So let's add following lines into module.config.php:

/module/Application/config/module.config.php:

{{< highlight php "linenos=true" >}}return array(
    ...
    'doctrine' => array(
        'configuration' => array(
            'orm_default' => array(
                ...
                'filters' => array(
                    'my_locale' => 'ApplicationDoctrineFilterMyLocaleFilter',
                ),
                ...
            )
        ),
    ),
    ...
);
{{< /highlight >}}

&nbsp;

Now that our new filter is configured, we can enable and disable it from any class that implements ServiceManagerAwareInterface interface, adding to it two simple methods like these:

{{< highlight php "linenos=true" >}}
<?php
...

    // in a controller or any class that implements ServiceManagerAwareInterface

   /**
    * Enable locale filter
    */
    public function enableLocaleFilter()
    {
        $em = $this->getServiceManager()->get('doctrine.entitymanager.orm_default');

        $filter = $em->getFilters()->enable('my_locale');
        $filter->setParameter('my_locale', 'en');
    }

   /**
    * Disable locale filter
    */
    public function disableLocaleFilter()
    {
        $em = $this->getServiceManager()->get('doctrine.entitymanager.orm_default');

        $filter = $em->getFilters()->disable('my_locale');
    }

...

{{< /highlight >}}

If we what to enable filter during bootstrap, instead, we can add following piece of code into Module.php file:

/module/Application/Module.php:

{{< highlight php "linenos=true" >}}
<?php

namespace Application;

use ZendEventManagerEventInterface,
    ...

class Module implements BootstrapListenerInterface
{
    ...

    /**
     * Listen to the bootstrap event
     *
     * @param EventInterface $e
     * @return array
     */
    public function onBootstrap(EventInterface $e)
    {
        ...

        // Enable and configure Doctrine filters
        $entityManager = $e->getApplication()->getServiceManager()->get('doctrine.entitymanager.orm_default');
        $filter = $entityManager->getFilters()->enable('my_locale');
        $filter->setParameter('my_locale', 'en');

        ...
    }

}
{{< /highlight >}}

That's all. From now, while "my_locale" filter is enabled, each entity involved into query or collection loading, will be filtered with condition(s) specified into filter class and values passed by setParameter() method. With few lines of code, we can have filters completely itegrated into ZF2 project.

 [1]: http://framework.zend.com/
 [2]: http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/filters.html
 [3]: https://github.com/zendframework/ZendSkeletonApplication
 [4]: http://github.com/doctrine/DoctrineORMModule