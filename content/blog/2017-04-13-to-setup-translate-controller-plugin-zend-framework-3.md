---
title: How to setup a Translate Controller Plugin in Zend Framework 3
author: Valerio Galano
date: 2017-04-13T17:10:59+00:00
tags:
  - PHP
  - Zend Framework 3
categories:
  - PHP
  - How-to guides
type: blog
---

Sometimes in our Zend Framework 3 multi-language application, we could need to access to Zend Translator component directly from Controllers. For example, when we have to translate a string to return in a JsonModel.

So, let's see how to write a very simple Controller Plugin that will help us to save a lot of code (and time).

Following explanation will assume we just have at least a [Skeleton ZF3 Application][1] with working [Zend Translator component][2].

First of all, we have to write our plugin that will take Zend Translator object in constructor and will wrap its translate() method. So let's add following file **module/Application/src/Controller/Plugin/TranslatePlugin.php**:

{{< highlight php "linenos=true" >}}
<?php
namespace Application\Controller\Plugin;

class TranslatorPlugin extends \Zend\Mvc\Controller\Plugin\AbstractPlugin
{
    /**
     * @var \Zend\I18n\Translator\Translator
     */
    protected $translator;

    function __construct(\Zend\I18n\Translator\Translator $translator)
    {
        $this->translator = $translator;
    }

    public function translate($string)
    {
        return $this->translator->translate($string);
    }
}
{{< /highlight >}}

Now, we need a Factory class to initialize our plugin and inject in it the Zend Translator component. That class will be placed in **module/Application/src/Controller/Plugin/Factory/TranslatorPluginFactory.php** and will be something like:

{{< highlight php "linenos=true" >}}
<?php
namespace Application\Controller\Plugin\Factory;

class TranslatorPluginFactory implements \Zend\ServiceManager\Factory\FactoryInterface
{
    public function __invoke(\Interop\Container\ContainerInterface $container, $requestedName, array $options = null)
    {
        if (!$container->has('translator')) {
            throw new \Exception("Zend I18n Translator not configured");
        }
  
        $translator = $container->get('translator');
        return new \Application\Controller\Plugin\TranslatorPlugin($translator);
    }
}
{{< /highlight >}}

Finally, we have to configure ZF3 application to load plugin by adding following lines to **module/Application/config/module.config.php** file:

{{< highlight php "linenos=true" >}}
<?php
return [
    'controller_plugins' => [
        'factories' => [
            'translator' => \Application\Controller\Plugin\Factory\TranslatorPluginFactory::class,
        ],
    ],
    ...
];
{{< /highlight >}}

At this point, we can easily invoke our new plugin from each controller in application. For example we can do as following:

{{< highlight php "linenos=true" >}}
<?php
namespace Application\Controller;
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        $translatedMessage = $this->translator()->translate('Message to be translated');
      
        return new JsonModel('message' => $translatedMessage);
    }
}
{{< /highlight >}}

&nbsp;

 [1]: https://docs.zendframework.com/tutorials/getting-started/skeleton-application/
 [2]: https://docs.zendframework.com/tutorials/i18n/#creating-translations