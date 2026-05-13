---
title: Working with DateTime in Doctrine 2 and Zend Framework 2
author: Valerio Galano
date: 2013-03-12T09:52:39+00:00
tags:
  - PHP
  - Zend Framework 2
categories:
  - PHP
  - How-to guides
type: blog
---

## The problem

Storing datetimes can be a issue if servers and users of your application are distributed around the World and use different time zones. Each user want to work on datetimes in his specific time zone, servers automatically stores values in their time zone, etc. Storing data without operating right conversion will cause strange behaviours.

## The solution

The solution is very simple: store all datetimes in UTC time zone and show to each user in his proper time zone. This is, gnerally, a well documented technique, but the following code will explain how to realize this operation in [Doctrine 2][2] and [Zend Framework 2][3] environment. To do this, we will assume you just have a working ZF2 project with a configured [DoctrineORMModule][4] (refer to official documentation to reach this achievement).



First of all, lets create a custom Doctrine Datatype to handle [DateTime][5] object in UTC. Field of this type will automatically convert value into UTC time zone before store it in DB. The following code is a modification of official doctrine [Working with DateTime instances][1] article that at this moment (2013-03-12) has an error in usage of DateTime format() method. Please, note that you can put this file where you prefer inside /module/Application/src/Application/.

/module/Application/src/Application/DBAL/Types/UTCDateTimeType.php:

{{< highlight php "linenos=true" >}}
<?php
namespace ApplicationDBALTypes;

use DoctrineDBALPlatformsAbstractPlatform;
use DoctrineDBALTypesConversionException;

class UTCDateTimeType extends DoctrineDBALTypesDateTimeType
{

     static private $utc = null;

     /**
      * @param DateTime $value
      * @param DoctrineDBALPlatformsAbstractPlatform $platform
      * @return string
      */
     public function convertToDatabaseValue($value, AbstractPlatform $platform)
     {
        if ($value === null) {
            return null;
        }
        $formatString = $platform->getDateTimeFormatString();

        $value->setTimezone((self::$utc) ? self::$utc : (self::$utc = new DateTimeZone('UTC')));

        $formatted = $value->format($formatString);

        return $formatted;
    }

    /**
     * @param string $value
     * @param DoctrineDBALPlatformsAbstractPlatform $platform
     * @return DateTime|mixed|null
     * @throws DoctrineDBALTypesConversionException
     */
    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        if ($value === null) {
            return null;
        }

        $val = DateTime::createFromFormat(
            $platform->getDateTimeFormatString(),
            $value,
            (self::$utc) ? self::$utc : (self::$utc = new DateTimeZone('UTC'))
        );
        if (!$val) {
            throw ConversionException::conversionFailed($value, $this->getName());
        }
        return $val;
    }
}
{{< /highlight >}}

To make this Datatype work in a Zend Framework 2 project, we need to load it in our DoctrineORMModule configuration. So let's edit ZF2 module configuration file by adding the following code:

/module/Application/config/module.config.php:

{{< highlight php "linenos=true" >}}return array(
    ...
    'doctrine' => array(
        'configuration' => array(
            'orm_default' => array(
                ...
                'types' => array(
                    'utcdatetime' => 'ApplicationDBALTypesUTCDateTimeType',
                ),
                ...
            )
        ),
    ),
    ...
);
{{< /highlight >}}

At this point we can use Datatype UTCDateTime to map DateTime property of our entities like in the following example. Please note that the location of entities depends on your DoctrineORMModule configuration.

/module/Application/src/Application/Entity/Event.php:

{{< highlight php "linenos=true" >}}/**
 * @Entity
 * @Table(name="myEvent)
 */
class Event
{
    ...

    /**
     * @Column(type="UTCDateTime")
     * @var DateTime
     */
     protected $datetime;

    ...
}
{{< /highlight >}}

Now, when we use $event->setDatetime() method, the value will be stored in DB in UTC time zone. For this reason, we need to re-convert it into user time zone before show.

After retrieved an object that contains a DateTime property, let's set timezone before show with code like:

{{< highlight php "linenos=true" >}}...
echo $event->getDatetime()->setTimezone(new DateTimeZone('Europe/Rome'))->format('d/m/Y H:i');
...
{{< /highlight >}}

Please note that time zone and format strings can be retrieved from user preference or automatically detected.

## Conclusion

At this point we can simply work with DateTime in Doctrine 2 + Zend Framework2 environment.

Please, keep in mind that this is only an example and can be heavly improved.

 [1]: http://docs.doctrine-project.org/en/latest/cookbook/working-with-datetime.html
 [2]: http://www.doctrine-project.org/
 [3]: http://framework.zend.com/
 [4]: https://github.com/doctrine/DoctrineORMModule
 [5]: http://www.php.net/manual/en/book.datetime.php