---
title: Configurare filtri Doctrine 2 in Zend Framework 2
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

Un [filtro di Doctrine][2] è uno strumento molto potente che può essere utilizzato per aggiungere condizioni a livello SQL all'interno del nostro gestore di oggetti Doctrine 2. Ciò significa che i filtri influenzeranno il comportamento di query DQL, collezioni, recupero dati, ecc.

Come configurare ed utilizzare filtri in condizioni generali è ben spiegato in questo [questo articolo][2] della documentazione officiale di Doctrine, ma in un progetto basato su [Zend Framework 2][1], la stessa operazione è un po' diversa.

Così, in questo articolo, vedremo come configurare uno o più filtri nei nostri progetti sviluppati su Zend Framework 2.

# Esempio esplicativo

Il seguente esempio è basato su quello riguardante un filtro "locale" mostrato nel [manuale di Doctrine][2]. Assumeremo di avere un progetto ZF2 funzionante sviluppato a partire da [ZendSkeletonApplication][3] con il modulo [DoctrineORMModule][4] configurato (fare riferimento ai manuali ufficiali per raggiungere questo obiettivo).

Innanzitutto, abbiamo bisogno di una classe interfaccia da utilizzare come segno distintivo per decidere quali entità saranno influenzate dal filtro. Quindi, se vorremo che un filtro sia applicato ad un'entità dovremo solo fargli implementare tale interfaccia. Ovviamente, possiamo anche utilizzare l'interfaccia per specificare quali metodi implementare nell'entità, se vogliamo. Questo può essere utile e vedremo un esempio in un prossimo articolo.



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

Essenzialmente, la definizione del filtro è identica a quella necessaria per l'utilizzo con Doctrine senza ZF2. Dobbiamo solo fare attenzione a dove posizionare il file e correggere i namespace:

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
            return "";
        }

        return $targetTableAlias.'.locale = ' . $this->getParameter('locale'); // getParameter applies quoting automatically
    }
}

{{< /highlight >}}

A questo punto, iniziano le vere differenze: per configurare il filtro, utilizzeremo il file di configurazione del modulo ZF2 invece del metodo addFilter() (come descritto nel manuale ufficiale). Quindi aggiungiamo le seguenti linee in module.config.php:

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

Ora che il nostro nuovo filtro è configurato, possiamo attivarlo e disattivarlo da qualsiasi classe che implementi l'interfaccia ServiceManagerAwareInterface, aggiungendovi due semplici metodi come questi:

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

        $filter = $em->getFilters()->enable("my_locale");
        $filter->setParameter('my_locale', 'en');
    }

    /**
     * Disable locale filter
     */
    public function disableLocaleFilter()
    {
        $em = $this->getServiceManager()->get('doctrine.entitymanager.orm_default');

        $filter = $em->getFilters()->disable("my_locale");
    }

    ...

{{< /highlight >}}

Se vogliamo, invece, attivare il filtro durante la fase di bootstrap, possiamo aggiungere le seguenti linee di codice nel file Module.php:

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
        $filter = $entityManager->getFilters()->enable("my_locale");
        $filter->setParameter('my_locale', 'en');

        ...
    }

}

{{< /highlight >}}

E questo è tutto. D'ora in poi, quando il filtro "my_locale" è attivo, ciascuna entità coinvolta in query o caricamento di collezioni, verrano filtrati con le condizioni specificate nella classe filtro e i valori passati con il metodo setParameter(). Con poche linee di codice possiamo avere filtri completamente integrati nel progetto ZF2.

 [1]: http://framework.zend.com/
 [2]: http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/filters.html
 [3]: https://github.com/zendframework/ZendSkeletonApplication
 [4]: http://github.com/doctrine/DoctrineORMModule