---
title: ReCaptcha in Zend Framework 2 without Zend/Form
author: Valerio Galano
date: 2013-03-15T09:52:36+00:00
tags:
  - PHP
  - Zend Framework 2
categories:
  - PHP
  - How-to guides
type: blog
---

# The problem

Captcha is a very useful mechanism to avoid automated abuse of your sites and applications. In particular,[reCAPTCHA][1] is a Google powered service that offers a free and simple way to implement a captcha protection field in your forms or pages. [Zend Framework 2][2] implements his own components to handle captcha and a specific one to handle reCAPTCHA service. At the moment, the ZF2 documentation is very usefull if you want to integrate a reCAPTCHA in your Zend/Form component, but lacks in describing how to use reCAPTCHA service component alone. Actually Zend/Form is very powerful, but sometimes a developer need to use standard html to implement his own forms and this prevents to use ReCaptcha as Zend/Form element.

# The solution

To reach our achievement, we will implement a reCAPTCHA service that can be use all over the project to generate captchas and test them against values inserted by user. This service will be used principally in views and controllers. The following code implementation assumes that you have a working ZF2 project, configured as described in official documentation.

> Please, keep in mind that this tutorial was written in March 2013 when stable ZF2 release was 2.1. With new releases, something could work differently.

Before proceed, you need to register a reCAPTCHA account by clicking [here][3]. You need to register a Google account, if you don't have, and then configure your keys. At the end of the process, you will posses two keys: public and private.

Now we can start implementation by installing [ZendService/ReCaptcha][4] package that is not included in ZF2 core by default. To perform this operations through [composer][5], let's add the following code (if not just set) to our composer.json file in project root.

/composer.json:

{{< highlight json >}}
{
    ...
    "repositories": [
        {
            "type": "composer",
            "url": "http://packages.zendframework.com/"
        }
    ],
    ...
    "require": {
        ...
        "zendframework/zendservice-recaptcha": "*",
        ...
    }
    ...
}
{{< /highlight >}}

Now, let's open a terminal and reach project root directory to lunch the composer update command:

{{< highlight bash >}}
$ php composer.phar self-update

$ php composer.phar update

{{< /highlight >}}

At the end of the process, if everything goes well, we will find a new folder named **zendservice-recaptcha** in /vendor/zendframework/. Now we can start to configure our reCAPTCHA service.

Let's configure a service in the project called reCaptchaService that we will retrieve in controllers to generate captcha field. Because of we want be able to use different keys for different instances of the application, we will store service configuration in the file local.php. So add the following lines paying attention to replace values with your domain's keys.

/config/autoload/local.php:

{{< highlight php "linenos=true" >}}
return array(
     ...
    'recaptcha' => array(
        'name' => 'recaptcha',
        'privKey' => 'put here your reCAPTCHA private-key',
        'pubKey' => 'put here your reCAPTCHA public-key',
    ),
);

{{< /highlight >}}

Then, let's insert code to initialize the service.

/config/autoload/global.php:

{{< highlight php "linenos=true" >}}
return array(
    ...
    'service_manager' => array(
        ...
        'factories' => array(
            ...
            'reCaptchaService' => function(ZendServiceManagerServiceManager $sm) {
                $config = $sm->get('Config');
                return new ZendCaptchaReCaptcha($config['recaptcha']);
            },
        ),
    ),
);
{{< /highlight >}}

At this point, we have a working service that can be retrieved through ZendServiceManager component. The following code represent an example of how to use ReCaptchaService.

This controller generates and validates the captcha field:

{{< highlight php "linenos=true" >}}class IndexController extends AbstractActionController
{
    ...

    public function signupAction()
    {
        // retrieve ReCaptchaService instance and generate a new captcha
        $captcha = $this->getServiceLocator()->get('ReCaptchaService')->generate();

        // pass captcha to view
        $viewModel = new ViewModel(array(
            'captcha' => $captcha,
            'captchaError' => false,
        ));

        $request = $this->getRequest();

        // if user submitted form
        if ($request->isPost()) {

            // check if captcha value is valid
            $resCaptcha = $captcha->isValid($_POST['recaptcha_response_field'], $_POST);
            if (!$resCaptcha) {

                // if captcha is not valid, set error field as true
                $viewModel->setVariable('captchaError', true);
            }

            // At this point you can check and use user's submitted
            // data as you prefer.

            // My preferred approach is to validate form anyway, then
            // perform operations only if captcha is valid. Using this
            // approach I can notify form errors even if captcha value
            // is wrong or missing.

            //---------OPTIONAL (only to have an idea)------------------------//

            // we have an InputFilter because we don't use ZendForm, but
            // wont renounce to his filter and validation power
            $inputFilter = new UserInputFilterSignup();
            $inputFilter->setData($request->getPost());

            if ($inputFilter->isValid() && $resCaptcha) {
                $data = $inputFilter->getValues();
                $userService->setupOnSignUp($data['email'], $data['password'], $data);

                return $this->redirect()->toRoute('home');
            }

           $viewModel->setVariable('inputValues', $inputFilter->getRawValues());
           $viewModel->setVariable('errors', $inputFilter->getMessages());
           //-----------------------------------------------------------------//
        }

        return $viewModel;
    }

    ...
}

{{< /highlight >}}

The correspondent view shows captcha field and an error message, if needed.

{{< highlight php "linenos=true" >}}
<form action="...">...
 <?php echo $captcha->getService()->getHtml();?>

 <?php if ($captchaError): ?>
 <?php echo $this->translate('Wrong captcha value') ?>
 <?php endif; ?>
 ...
</form>

{{< /highlight >}}

Please, note that reCAPTCHA include his own error message. I inserted a second one because I prefer to handle it by myself.

## Conclusion

In this article we learn how to directly use ZendServiceReCaptcha component. Of course this code can be improved and captcha can be used in a different ways.

All comments and questions are welcome.

[1]: http://www.google.com/recaptcha
[2]: http://framework.zend.com/
[3]: https://www.google.com/recaptcha/admin/create
[4]: https://github.com/zendframework/ZendService_ReCaptcha
[5]: http://getcomposer.org/