---

title: Change WordPress username using phpMyAdmin
author: Valerio Galano
date: 2013-09-09T10:23:12+00:00
categories:
  - How-to guides
type: blog
featureImage: /images/change-wordpress-username-step5.png
---

As you surely know, WordPress doesn't allow users to change their username from administration panel. But, if you have access to WordPress database, you can simply workaround this limitation.

In this little tutorial, we will show all steps needed to change a WordPress username directly editing database records. Of course, this operations can be done with every MySQL client, but following snapshots specifically refers to phpMyAdmin.

First of all, we need to access to phpMyAdmin. In my case, I started from a cPanel administration dashboard and I simply need to click on _phpMySql panel_ link.

{{< figure src="/images/change-wordpress-username-step1.png" alt="change-wordpress-username-step1" >}}

Once we access phpMyAdmin, we have to click on WordPress database name in left column, as shown in following image.

{{< figure src="/images/change-wordpress-username-step2.png" alt="change-wordpress-username-step2" >}}

At this point, we will see all tables containing the most of our WordPress data and configurations. The table we need to edit is named _wp_users_, so we will simply look at it in left column and click on it's name to show it's content.

{{< figure src="/images/change-wordpress-username-step3.png" alt="change-wordpress-username-step3" >}}

At this point we well see a list of records that represents all users registered in our WordPress. The column _user_login_ contains usernames used by users to access from login panel. So we have to locate username we want to change and click on correspondent _Edit_ link.

{{< figure src="/images/change-wordpress-username-step4.png" alt="change-wordpress-username-step4" >}}

**Now we have to pay attention: changing wrong data, could create problems to WordPress user.**

In _user_login field,_ we can replace current username with new one.

{{< figure src="/images/change-wordpress-username-step5.png" alt="change-wordpress-username-step5" >}}

As good practice, we also should  replace current username with new one in _user_nicename_ field.

{{< figure src="/images/change-wordpress-username-step6.png" alt="change-wordpress-username-step6" >}}

Now, we have to confirm changes by clicking on _Go_ button.

{{< figure src="/images/change-wordpress-username-step7.png" alt="change-wordpress-username-step7" >}}

All done: we successfully changed username. From now, this user will login with new username.