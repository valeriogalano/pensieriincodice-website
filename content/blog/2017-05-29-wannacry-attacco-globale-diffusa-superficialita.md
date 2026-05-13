---
title: 'WannaCry: attacco globale e diffusa superficialità'
author: Valerio Galano
date: 2017-05-29T10:00:27+00:00
categories:
  - Approfondimenti
type: blog
---

Sono trascorse ormai quasi 3 settimane da quando il _ransomware_ chiamato WannaCry ha iniziato la propria diffusione scatenando il panico e causando danni a livello mondiale.

### Cos'è un ransomware?

Il concetto di ransomware non è di certo una novità. Al contratrio, il [primo caso documentato][1] di infezione informatica di questo tipo risale addirittura al 1989. Io stesso, durante lo scorso anno, ho avuto a che fare in varie occasioni con aziende colpite da _CryptoLocker_, una delle più diffuse varianti di questo tipo di malware.

In parole povere, un ransomware è un virus che, introdotto in un sistema informatico, effettua un'operazione di criptaggio di tutti i file considerati potenzialmente utili agli utilizzatori di tale sistema.

Una volta _bloccati_ tali file, il virus chiede all'utente un riscatto: un pagamento, solitamente da effettuare a mezzo di valuta virtuale (_BitCoin_), a seguito del quale verrà poi rilasciata al malcapitato la chiave di decriptazione da utilizzare per ripristinare i dati sottratti.

Il sistema è quindi già ben noto nel mondo dell'informatica sopratutto a livello aziendale e chi viene colpito da questa tipologia di malware può essenzialmente scegliere di far fronte al problema in due modi. Può decidere di pagare il riscatto. Sempre ammesso che non sia troppo tardi ed il meccanismo per pagare non sia già stato smantellato e che i pirati rispettino il patto e inviino effettivamente la chiave di decriptazione. Oppure può scegliere di non pagare e di formattare i PC infetti per eliminare il virus e recuperare i dati persi ripristinando le copie di backup precedenti all'infezione. Se ne esistono. E se non sono state anch'esse criptate perché conservate su sistemi ugualmente vulnerabili allo stesso malware.

### Cos'ha di speciale WannaCry?

E dunque, perché WannaCry ha creato questo caos a livello globale se è nient'altro che un tipo di virus già conosciuto e diffuso da anni?

E' presto detto: WannaCry (così come le versioni da esso derivate che stanno timidamente spuntando) può contare su una diversa modalità di contagio.

I ransomware tradizionali, infatti, vengono principalmente trasmessi tramite metodi che richiedono l'interazione dell'utente, come la posta elettronica. Poiché il PC possa essere infettato, infatti, è necessario che l'utilizzatore riceva un'email contenente il virus (che quindi sia riuscita a superare antispam, antivirus, ecc.) e che sia egli stesso a cliccare sull'allegato e ad eseguirlo.

WannaCry, invece, è stato **progettato per sfruttare una specifica combinazione di due vulnerabilità dei sistemi operativi Windows** al fine di potersi diffondere autonomamente senza necessitare di alcuna operazione manuale. Ciò lo ha reso estremamente più virulento dei propri predecessori.

Ne è risultata [l'infezione, in tempi brevissimi, di centinaia di migliaia di sistemi in più di 100 paesi][2] e, di conseguenza, la congestione o il blocco dei servizi ad essi legati, la perdita di dati e danni economici per le aziende colpite.

### Come e perché hanno scatenato questo attacco?

A fronte di questi ingenti danni causati, i pirati responsabili dell'attacco sono riusciti a racimolare la ragguardevole somma (ad oggi) di di circa $120.000. Soldi questi che molto difficilmente sarà mai possibile spendere. E' stato anche creato un [account Twitter][3] con il preciso scopo di monitorare l'ammontare dei tre _wallet_ che raccolgono il bottino.

Tutto sommato, visti i risultati, non si può certo parlare di un piano ben riuscito. Il punto, tuttavia, è un altro: in effetti, la parte più interessante della vicenda, a mio parere, riguarda proprio le vulnerabilità sfruttate per la diffusione del ransomware.

Tali _exploit_ (denominati _Eternalblue_ e _Doublepulsar_), infatti, pare fossero state [inizialmente scoperte la NSA][4] che, come da prassi ormai consolidata, non ne avevano divulgato l'esistenza (rendendole ciò che in informatica viene comunemente denominato 0-day) e le sfruttava per operazioni di intelligence.

Questi _grimaldelli informatici_ sono stati poi rubati alla NSA da un gruppo di hacker autodefinitisi ShadowBrokers i quali hanno dapprima tentato di vendere il tutto online e poi, non avendo avuto successo, ne hanno divulgato i dettagli tecnici. A questo punto è stato relativamente facile per qualcuno confezionare WannaCry.

### Di chi è la colpa?

Nel frattempo però, stava accadendo altro: la NSA, per rimediare alla propria gaffe aveva comunicato i dettagli degli exploit a [Microsoft che si era adoperata per porre rimedio al problema][5]. In parole semplici, a Marzo erano disponibile, sotto forma di aggiornamenti di Windows, le patch per rendere i sistemi immuni al contagio di WannaCry.

A Marzo. Con quasi due mesi di anticipo rispetto all'attacco.

E' banale quindi dedurre che **tutti i PC colpiti dall'epidemia, non venissero aggiornati da almeno 45 giorni**. Se così non fosse, infatti, la diffusione del virus semplicemente non sarebbe avvenutoa

Senza voler scendere in tecnicismi (anche una saggia configurazione di rete di un'azienda avrebbe potuto prevenire l'infezione dei PC della stessa) sarebbe bastato che gli utenti, gli amministratori e le aziende, semplicemente si fossero tenuti al passo con gli aggiornamenti.

Se è pur vero che esistono sistemi che non possono essere aggiornati (ma che possono essere comunque protetti), molti utilizzatori semplicemente non vogliono spendere parte del proprio tempo o di quello dei loro dipendenti o consulenti per eseguire operazioni _inutili_ come gli aggiornamenti di sistema, per installare antivirus o configurare firewall.

Tuttavia, quello che all'apparenza potrebbe sembrare una perdita di tempo, avrebbe potuto **facilmente evitare** loro una discreta quantità di guai.

### E ora?

Ad ogni modo, anche se l'allarme sembra rientrato, **qualunque PC equipaggiato con Windows che ancora (?!) non è stato aggiornato rimane da considerare a rischio di infezione**. Pertanto, chi ancora non avesse imparato la lezione, è ora che si dia da fare.

 [1]: http://www.techrepublic.com/blog/it-security/ransomware-extortion-via-the-internet/
 [2]: https://www.wired.com/2017/05/ransomware-meltdown-experts-warned/
 [3]: https://twitter.com/actual_ransom
 [4]: https://blog.knowbe4.com/ransomware-attack-uses-nsa-0-day-exploits-to-go-on-worldwide-rampage
 [5]: http://www.catalog.update.microsoft.com/Search.aspx?q=KB4012598
