---
title: Switch to mobile, tablet, or other layout in Zend Framework 1.11
author: Valerio Galano
date: 2011-12-12T09:33:10+00:00
tags:
  - PHP
  - Zend Framework
categories:
  - PHP
  - How-to guides
type: blog
---

<!--:en-->

## The problem

We want to implement a method to completely switch layout of our Zend Framework application without loosing flexibility. The solution must give us the possibility of switching all layouts and  the views of the controllers we want.<!--:-->

<!--:en-->

## Other's solutions

I found some solutions on the Web, but I decided to post this article because no one satisfies my needs. They all resort to ContextSwitch to handle views file names, but, in my applications, I just use ContextSwitch in some actions for other purpose, so I'm unable to apply them without restructure existing code.

## My solution




  
In my implementation I decided to use Zend_Inflector to remap layouts and views file names and give, in this way, the possibility of having a different file for each device the developer wants (desktop, mobile, tablet, etc.). The result for layouts will be a structure like this:

  * /application/layouts/scripts/layout.phtml
  * /application/layouts/scripts/layout.mobile.phtml
  * etc.

While for each controller the developer decides to involve, the structure will be:

  * /application/views/scripts/controllerX/index.phtml
  * /application/views/scripts/controllerX/index.mobile.phtml
  * etc.
  * /application/views/scripts/controllerY/index.phtml
  * /application/views/scripts/controllerY/index.mobile.phtml
  * etc.

## Implementation

I assume you have a valid instance of Zend\_Http\_UserAgent object in your application.

First of all, we need a controller plugin to switch layouts. Let's create a new file in /library/App/Controller/Plugin called DeviceLayout.php to put the following code into:

{{< highlight php "linenos=true" >}}
<?php

 /**
   * Remap layouts file names based on UserAgent device.
   */
 class App_Controller_Plugin_DeviceLayout extends Zend_Controller_Plugin_Abstract
 {
     public function dispatchLoopStartup(Zend_Controller_Request_Abstract $req) {

         /** @var $userAgent Zend_Http_UserAgent */
         $userAgent = Zend_Registry::get('Zend_Http_UserAgent');

         /** call to initialize browser type */
         $userAgent->getDevice();

        /* if desktop do nothing, so use standard layout file names */
        if ($userAgent->getBrowserType() === 'desktop') {
            return $req;
        }

        $layout = Zend_Layout::getMvcInstance();
        $inflector = $layout->getInflector();
        $inflector->setTarget(':script.:device.:suffix');

        switch ($userAgent->getBrowserType()) {
            default:
            case 'mobile':
                $inflector->setStaticRule('device', 'mobile');
                break;
        }
        return $req;
    }
}

{{< /highlight >}}

Now to activate the plugin, add the following line in your application.ini config file:

{{< highlight ini >}}
resources.frontController.plugins.devicelayout = "App_Controller_Plugin_DeviceLayout"
{{< /highlight >}}

By this point, every time your application will be accessed by mobile or tablet device, the layout will be switched to layout.mobile.phtml or layout.tablet.phtml.

To handle views, instead, we have to edit each controller we want to support devices and add the following code:

{{< highlight php "linenos=true" >}}class IndexController extends Zend_Controller_Action
{
    ...
    public function preDispatch()
    {
        /** @var $userAgent Zend_Http_UserAgent */
        $userAgent = Zend_Registry::get('Zend_Http_UserAgent');

        /** call to initialize browser type */
        $userAgent->getDevice();

        /* if desktop do nothing, so use standard layout file names */
        if ($userAgent->getBrowserType() === 'desktop') {
            return null;
        }

        /** @var $renderer Zend_Controller_Action_Helper_ViewRenderer */
        $renderer = $this->_helper->viewRenderer;
        $renderer->setViewScriptPathNoControllerSpec(':action.:device.:suffix');
        $renderer->setViewScriptPathSpec(':controller/:action.:device.:suffix');

        switch ($userAgent->getBrowserType()) {
            default:
            case 'mobile':
                $renderer->getInflector()->setStaticRule('device', 'mobile');
                break;
        }
    }
    ...
}
{{< /highlight >}}

At this point each to different device will be shown a different  view like index.phtml, index.mobile.phtml or index.table.phtml.

## Conclusion

Following this article we implemented a flexible solution to switch between different layouts in our Zend Framework application, preserving all other functionalities (specially ContextSwitch). Now all you need to do in implements your new layouts and views!

Of course, all comments are welcome. Obviously, I know that the code can be improved by adding more functionalities, refactoring, etc., but what I would like to analyse and discuss, are the possible limitations of this approach.<!--:-->