---
title: Modificare username WordPress utilizzando phpMyAdmin
author: Valerio Galano
date: 2014-02-04T11:29:57+00:00
categories:
  - How-to guides
type: blog
featureImage: /images/change-wordpress-username-step5.png
---

Come sicuramente saprete, WordPress non permette agli utenti di cambiare la propria username dal pannello di amministrazione. Tuttavia, avendo accesso al database, è possibile agirare facilmente tale limitazione.

In questo piccolo tutorial, vedremo tutti i passaggi necessari per cambiare un nome utente di WordPress modificando direttamente i record del database. Ovviamente, queste operazioni possono essere eseguite con qualsiasi client MySQL, ma le seguenti schermate si riferiscono a phpMyAdmin.

Per prima cosa, dobbiamo accedere a phpMyAdmin. Nel mio caso, a partire dal pannello di amministrazione cPanel, ho semplicemente dovuto cliccare sul link _phpMySql panel_.

{{< figure src="/images/change-wordpress-username-step1.png" alt="change-wordpress-username-step1" >}}



Una volta entrati in phpMyAdmin, dobbiamo cliccare sul nome del database di WordPress che troviamo nella colonna di sinistra, come mostrato nella seguente schermata.

{{< figure src="/images/change-wordpress-username-step2.png" alt="change-wordpress-username-step2" >}}

A questo punto, vedremo le tabelle contenenti molti dei dati e delle configurazioni del nostro WordPress. La tabella che dobbiamo editare si chiama _wp_users_, quindi, molto semplicemente, cerchiamola nella colonna di sinistra e clicchiamo sul suo nome per mostrare i dati in essa contenuti.

{{< figure src="/images/change-wordpress-username-step3.png" alt="change-wordpress-username-step3" >}}

A questo punto vedremo una lista di record che rappresentano tutti gli utenti registrati nel nostro WordPress. La colonna _user_login_ contiene i nomi utente utilizzati dagli utenti per accedere tramite il pannello di login. Ora dobbiamo trovare l'username che vogliamo cambiare e cliccare sul corrispondente _link_ Edit.

{{< figure src="/images/change-wordpress-username-step4.png" alt="change-wordpress-username-step4" >}}

**Ora dobbiamo prestare molta attenzione: campiare i dati sbagliati potrebbe creare problemi all'utente WordPress in questione.**

Nel campo _user_login_, sostituiamo l'username corrente con la nuova.

{{< figure src="/images/change-wordpress-username-step5.png" alt="change-wordpress-username-step5" >}}

E' buona norma inserire lo stesso nuovo valore anche nel campo _user_nicename_.

{{< figure src="/images/change-wordpress-username-step6.png" alt="change-wordpress-username-step6" >}}

Ora, dobbiamo confermare le modifiche cliccando sul pulsante _Go_.

{{< figure src="/images/change-wordpress-username-step7.png" alt="change-wordpress-username-step7" >}}

Tutto fatto: abbiamo corrattamente modificato l'username. D'ora in poi, questo utente accederà al portale con la nuova username.