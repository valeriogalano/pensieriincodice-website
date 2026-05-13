---
title: How to inject Zend Service Manager in ZF3 Controllers
author: Valerio Galano
date: 2017-06-07T09:00:30+00:00
tags:
  - PHP
  - Zend Framework 3
categories:
  - PHP
  - How-to guides
type: blog
---

Zend Service Manager component is Zend Framework's implementation of [service locator pattern][1]. This object is very usefull component for an application and is largely used in ZF applications.

Unfortunately in ZF3 default application, Service Manager component is [no more available in controllers][2].

[An official solution exsists for this][3], but in this little tutorial, I want to share an easy solution to inject Service Manager in all controllers.

To implement this solution, we will write our controllers by extending an abstract controller class written to handle a Service Manager instance. Then we will start to create controllers by invoking a factory class that inject Zend Service Manager instance into them.

Before start, let's say that I will assume you just have a working [Skeleton ZF3 Application][4] and you just configured your [ZF Service Manager][5].

First of all, we have to implement abstract controller class. This class will essentially have a setter and a getter for Service Manager object.

**module/Application/src/Controller/AbstractController.php:**

{{< highlight php "linenos=true" >}}

<?php

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\ServiceManager\ServiceManager;

class AbstractController extends AbstractActionController
{
    /**
     * @var ServiceManager
     */
    protected $serviceManager;

    /**
     * @return ServiceManager
     */
    public function getServiceManager()
    {
        return $this->serviceManager;
    }

    /**
     * @param mixed $serviceManager
     * @return $this
     */
    public function setServiceManager($serviceManager)
    {
        $this->serviceManager = $serviceManager;
        return $this;
    }
}

{{</ highlight >}}

Now we need a factory class that will inject ServiceManager object in controllers.

**module/Application/src/Controller/ControllerFactory.php:**

{{< highlight php "linenos=true" >}}

<?php

namespace Application\Controller;

use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

class ControllerFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $service = (null === $options) ? new $requestedName : new $requestedName($options);

        return $service->setServiceManager($container);
    }
}

{{</ highlight >}}

Now we have all needed elements and we can implement our controller(s) extending AbstractController. Retreive of object from ServiceManager is shown at line 10.

**module/Application/src/Controller/IndexController.php:**

{{< highlight php "linenos=true" >}}
<?php

namespace Application\Controller;

class IndexController extends AbstractController
{

    public function indexAction()
    {
        $dummy = $this->getServiceManager()->get('dummy');

        return new ViewModel();
    }

}
{{</ highlight >}}

Finally to make everithing work, we have to instantiate controller in a bit different way.

**module/Application/config/module.config.php:**

{{< highlight php "linenos=true" >}}

'controllers' => [
    'factories' => [
        \Application\Controller\IndexController::class => \Application\Controller\ControllerFactory::class,
    ],
    'aliases' => [
        'Application\Controller\Index' => \Application\Controller\IndexController::class,
    ],

],

{{</ highlight >}}


 [1]: https://en.wikipedia.org/wiki/Service_locator_pattern
 [2]: https://github.com/zendframework/ZendSkeletonApplication/issues/369
 [3]: https://zendframework.github.io/zend-servicemanager/migration/#factories
 [4]: https://docs.zendframework.com/tutorials/getting-started/skeleton-application/
 [5]: https://docs.zendframework.com/zend-servicemanager/quick-start/
