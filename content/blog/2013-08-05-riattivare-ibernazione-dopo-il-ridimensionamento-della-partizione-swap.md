---

title: Riattivare ibernazione dopo il ridimensionamento della partizione swap
author: Valerio Galano
date: 2013-08-05T15:16:30+00:00
categories:
  - How-to guides
type: blog
---

L'ibernazione può essere un funzionalità importante per molti utenti: essa permette di spegnere il PC ed ottenere, alla riaccensione, la sessione nello stesso identico stato di quando è stata arrestata (file aperti, applicazioni caricate, configurazioni modificate, terminali, ecc.).

Questa funzionalità si basa sull'utilizzo della partizione di swap. In parole povere: quando l'utente iberna il PC, tutto il contenuto della memoria RAM viene conservato in questa partizione e viene recuperato all'avvio successivo. Per questa ragione, la partizione di swap deve essere più grande (o almeno pari) della dimensione della RAM e, in caso di un aggiornamento di RAM, va ridimensionata.

## Problema

Il problema è che, dopo un operazione di ridimensionamento, l'UUID della partizione di swap viene modificato e initramfs non riesce più a riconoscere la partizione swap. Ciò significa che quanto proverete ad ibernare il PC, esso non si riattiverà nel modo corretto e si avvierà come se fosse stato spento normalmente.

## Soluzione

La soluzione è molto semplice: dopo il ridimensionamento della partizione di swap, informiamo initramfs riguardo il nuovo UUID. Vediamo come.



<span style="text-decoration: underline;">Questa procedura è stata testata su Ubuntu 12.04 LTS.</span>

Prima di tutto, dobbiamo scoprire il nuovo UUID della partizione di swap. Quindi, apriamo un terminale e digitiamo il seguente comando:

{{< highlight bash >}}
$ sudo blkid
{{< /highlight >}}

Esso restutuirà la lista delle partizioni presenti nel PC. L'output dovrebbe essere qualcosa di simile a questo:

{{< highlight bash >}}
/dev/sda1: LABEL="Recovery Partition" UUID="9ECCDDF0CCDDC327" TYPE="ntfs" 
/dev/sda2: LABEL="VAIO" UUID="4C54A5A254A58EF0" TYPE="ntfs" 
/dev/sda5: UUID="53199a5e-1427-4e55-8b57-b82d919f2a1c" TYPE="swap" 
/dev/sda6: UUID="4f4af466-e3f6-483d-8b60-b7219820a33d" TYPE="ext3"
{{< /highlight >}}

Da questa lista, dobbiamo copiare il valore UUID della riga con TYPE="swap". Ora, utilizziamolo per sostituire il contenuto del file /etc/initramfs-tools/conf.d/resume lanciando i seguenti comandi (ovviamente, voi dovete sostituire l'UUID con quello che avete individuato al passo precedente):

{{< highlight bash >}}
$ sudo echo "RESUME=UUID=53199a5e-1427-4e55-8b57-b82d919f2a1c" > /etc/initramfs-tools/conf.d/resume
{{< /highlight >}}

Infine, ricostruiamo il nostro initramfs con il comando:

{{< highlight bash >}}
$ sudo update-initramfs -u
{{< /highlight >}}

Ora, riavviamo il sistema e, se tutto è andato bene, l'ibernazione dovrebbe funzionare di nuovo.