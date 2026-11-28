---
title: "Notifiche push e privacy: dal funzionamento ai potenziali rischi"
date: Mon, 13 May 2024 15:00:00 +0200
tags: ["privacy"]
type: blog
author: Valerio Galano
episode: 129
curated_by: Engram
generated_with: gpt-6.2-sol
---

## La notizia

Il motivo per cui mi interessa riprendere questa notizia è che, come a volte accade, essa ha fatto conoscere al grande pubblico qualcosa che, per gli addetti ai lavori, era già abbastanza ovvio e noto da tempo.

E semplicemente volevo rifletterci un po' su con te.

Nello specifico, sto parlando del fatto che il meccanismo che permette il funzionamento delle cosiddette notifiche push per smartphone e computer permette anche a chi gestisce il sistema di invio di risalire all'utenza ed al dispositivo che riceve le comunicazioni.

E se questo fatto, detto in questo modo, ti può suonare abbastanza ovvio, sappi che, da come si è visto, non lo è per tutti.

Partiamo quindi dall'inizio e vediamo innanzitutto cosa è successo, poi come è potuto succedere e, infine, quali sono le implicazioni di tutta la faccenda. E nel farlo, proviamo anche a capire un po' come funzionano le notifiche push.

Alla fine di febbraio il Washington Post ha pubblicato un articolo il cui titolo, in italiano, era *[La nuova tattica dell'FBI: catturare i sospetti con le notifiche push](https://washingtonpost.com/technology/2024/02/29/push-notification-surveillance-fbi/?utm_source=digitaliafm&utm_medium=podcast)*.

In tale articolo è raccontata la storia di come alcuni agenti federali abbiano identificato un utente che scambiava contenuti pedo-pornografici richiedendo a Google di rintracciarlo tramite le notifiche push che riceveva.

L'uomo in questione agiva in anonimato, ovviamente, ed utilizzava anche un'app svizzera di messaggistica chiamata TeleGuard, le cui comunicazioni sono private e crittografate, ma ciò non è bastato ad impedire a Google di identificarlo e di consegnare le sue informazioni nelle mani degli inquirenti.

A seguito di questa scoperta, però, il Washington Post ha poi indagato ulteriormente e ha trovato almeno altri 130 casi in cui è stata utilizzata questa tecnica per individuare sospettati con l'aiuto di Google, Apple e Facebook.

Alcuni di questi casi risalgono anche a vari anni fa e, per la precisione, iniziano dal 2019.

## Come rintracciare qualcuno tramite le notifiche push

Ma come è possibile che Google, Apple o chicchessia possa rintracciare un utente tramite le notifiche inviate al suo dispositivo? Un utente che addirittura utilizza sistemi di messaggistica criptati, che, in teoria, dovrebbero essere totalmente sicuri e anonimi?

In realtà, conoscendo un po' come funzionano i sistemi per l'invio delle notifiche push, la risposta non è poi così complicata.

Essendomi capitato in passato di implementare soluzioni di notifica per siti Web tramite i [servizi di Google](https://firebase.google.com/docs/cloud-messaging?hl=it), mi soffermo nello specifico su come funziona questo sistema, ma i concetti di base valgono anche per Apple, Facebook o qualunque altro soggetto che possieda un proprio sistema di notifiche push.

Cominciamo col dire che le notifiche push non nascono certo come un metodo di tracciamento, ma sono un meccanismo pensato per rendere più efficiente l'invio delle notifiche agli utenti.

Considerando infatti quante app sono installate sui nostri dispositivi e quante notifiche esse generano ogni giorno, l'idea di base è raggruppare tutte queste interazioni in flussi di comunicazione ottimizzati e farli partire da un numero minimo di server.

In pratica, invece di attendere che ogni app o sito Web si colleghi al proprio server per richiedere le novità in sospeso, il sistema delle notifiche push invia immediatamente al dispositivo ciascuna notifica appena questa è disponibile, a prescindere dall'app o dal sito Web cui essa è destinata.

Questa, raccontata così molto alla buona, è in sostanza la soluzione implementata dai maggiori player del mondo informatico (Google, Apple, Meta e compagni) e utilizzata da quasi tutte le app e i siti in circolazione.

Il punto però è che per far funzionare un sistema del genere è necessario che il gestore dei server *conosca* gli account degli utenti e i dispositivi a cui andranno inviate le notifiche, nonché l'app o il sito di destinazione e tutti i dettagli da mostrare nell'anteprima.

Per poter consegnare ad un utente una notifica, infatti, bisogna identificare su quali dispositivi egli è registrato e bisogna anche avere un collegamento a tali dispositivi in tempo quasi reale e inviare tutte le informazioni necessarie specificando l'app o il sito di turno ed il contenuto del banner che deve essere mostrato.

Ora, tu avrai certamente notato che ogni volta che installi una nuova app sul tuo smartphone o tablet, questa ti richiede il permesso di poterti mostrare notifiche, così come spesso fanno tanti siti web di notizie o con funzioni social e di messaggistica.

Quella richiesta non è solo un'autorizzazione, ma sottintende anche tutto un procedimento di configurazione che ha luogo tra il tuo dispositivo e i server del gestore del sistema push.

In pratica il dispositivo segnala al server la propria esistenza chiedendo di essere avvisato immediatamente in caso siano presenti nuove notifiche riguardo a quella specifica app o a quel sito Web e, insieme, i due sistemi concordano e si scambiano alcune stringhe di testo che servono per il funzionamento di tutto il meccanismo.

Una di queste stringhe è il *push token*, che è unico per ciascuna tripletta composta da dispositivo, utente e sito oppure app e rappresenta una sorta di password, potremmo dire, che il dispositivo deve utilizzare per ottenere le notifiche che lo riguardano.

Una seconda stringa importante, poi, è un *codice identificativo di argomento* che, a seconda dei casi, ha vari utilizzi, ma, semplificando molto, diciamo che, nel caso delle app di messaggistica, permette di identificare i dispositivi del destinatario di una o più notifiche.

Volendo essere un po' più precisi, in realtà il codice argomento identifica una tipologia di informazione sulla quale l'utente è interessato a ricevere aggiornamenti nel più breve tempo possibile. E quando dispositivo e server push si accordano sulla ricezione di notifiche, l'app o il sito di turno specificano a quali argomenti iscrivere l'utente e quindi per quali novità riceverà le notifiche.

Quando si parla di app di messaggistica, ogni chat coincide bene o male con un certo argomento e quindi di fatto ogni chat privata tra due utenti permette di risalire ai due tramite i codici argomento ad essa collegati. E dico *codici* e non *codice* perché ciascun utente avrà il proprio, pur essendo la chat in comune tra i due.

Ad ogni modo, il concetto è che grazie al push token e al codice argomento ogni dispositivo può restare in ascolto presso un server push (che per un Android, ad esempio, sarà Google, e per un iPhone sarà Apple) e, al tempo stesso, il server di ciascuna app può comunicare al server push di riferimento i dati delle notifiche da inoltrare e gli utenti a cui inoltrarle.

Per i siti Web, la questione è un pelo più complicata perché è il browser a dover tenere il collegamento verso i server push, che potenzialmente potrebbero anche essere più d'uno, ma, anche in questo caso, al momento questi dettagli non ci interessano.

Ciò che invece dobbiamo tenere bene a mente per capire le implicazioni in termini di privacy di tutto questo sistema è il ciclo di vita di una notifica push che, più o meno, è il seguente:

1. Le notifiche, comprensive di tutti i relativi dettagli (quelli che compaiono nelle anteprime, per intenderci), vengono generate dal server originale di un'app o di un sito.

2. Tale server, poi, contatta i server del servizio di notifica push (che, come abbiamo già detto, solitamente appartengono a Google o Apple o qualche altro big) e indica tutte le informazioni da recapitare e il codice argomento relativo.

3. Il server push combina insieme il codice argomento e l'identità del server che lo ha appena contattato e così facendo identifica l'app e il dispositivo o i dispositivi del destinatario o dei destinatari iscritti all'argomento e invia loro tutto il necessario.

4. Una volta recapitate le informazioni, nel caso di un'app, viene mostrato il classico banner di notifica del sistema operativo, mentre, nel caso di un sito, la gestione può anche essere un po' più personalizzata.

Come di consueto, tecnicamente parlando, in realtà tutto il giro è un po' più complicato di così, ma per quello che ci interessa, i passaggi descritti sono perfetti.

Tornando, infatti, alla nostra domanda iniziale su come si può rintracciare un utente tramite le notifiche, dobbiamo per forza presupporre che il server del servizio push debba in qualche modo archiviare una lista di tutti gli utenti, dei dispositivi collegati e delle app e dei siti per poter mettere in funzione tutto il meccanismo quando necessario.

Il succo della questione, in pratica, è che se, ad esempio, il server delle notifiche push deve consegnare le informazioni ricevute da WhatsApp per la chat X (che, ricordiamo, corrisponde a un certo argomento Y), deve cercare all'interno dei propri elenchi l'identificativo degli utenti collegati all'app di WhatsApp per l'argomento Y ed estrarre i corrispondenti dispositivi.

Altrimenti semplicemente non può fare il suo lavoro.

In definitiva, quindi, ora dovrebbe essere chiaro che il server delle notifiche push è contemporaneamente a conoscenza di tutta una serie di informazioni che vanno dall'account dell'utente al dispositivo che sta utilizzando, alle app e ai siti che frequenta e per cui riceve notifiche e, cosa non da poco, alle informazioni contenute in queste notifiche: banalmente, le anteprime dei messaggi.

Ora, data la complessità e la pervasività e l'importanza di un sistema come quello appena descritto, non possiamo certo pensare che non implementi tutta una serie di [log da utilizzare in caso di verifica o di reportistica](https://firebase.google.com/support/guides/cloud-audit-logging/firebase-cloud-messaging?hl=it).

Sarebbe folle se non lo facesse: è un servizio attivo a livello mondiale che serve ogni giorno centinaia di milioni di utenti.

E tali log devono contenere certamente identificativi e informazioni inviate dai server delle app e dai siti, nonché probabilmente l'esito di consegna della notifica e altri dati utili sia a fini statistici che di manutenzione.

A questo punto, ci tengo ad essere chiaro: io non ho trovato articoli online che illustrassero esplicitamente la procedura utilizzata da Google per fornire le informazioni all'FBI nel caso di cui stiamo parlando o in altri simili, ma, con quello che ci siamo detti finora, possiamo provare ad immaginare i passi seguiti.

Poi, se qualcuno ne sa di più, potrà tranquillamente confermare o smentire le seguenti supposizioni.

Immaginiamo di avere la possibilità di consultare i log dei server delle notifiche push di Google. Come potremmo fare ad individuare l'identità di uno specifico utente che stiamo monitorando su una chat (una qualsiasi: WhatsApp, Telegram, TeleGuard o chicchessia)?

Un'idea potrebbe essere quella di far arrivare all'utente una serie di notifiche con caratteristiche uniche. In questo modo potremmo poi andare a ricercarle all'interno dei log ed usarle per individuare un codice argomento a cui è iscritto l'utente.

Ad esempio, gli potremmo spedire messaggi contenenti specifiche stringhe di testo abbastanza complesse da essere potenzialmente uniche e abbastanza brevi da rientrare nell'anteprima della notifica.

Oppure potremmo spedirgli una serie di messaggi con un particolare pattern temporale: ad esempio generando un preciso numero di notifiche in un arco di tempo ben definito.

In entrambi questi casi, avendo accesso ai log del server push, potremmo poi effettuare delle ricerche ed individuare, con buona approssimazione, l'utente a cui abbiamo inviato le nostre notifiche trappola.

L'identificativo dell'argomento, salvo eventi eccezionali, sarà sempre uguale per tutte le notifiche inviate all'utente per quella particolare chat e, pertanto, fungerà da elemento comune tra i risultati della ricerca negli archivi.

In pratica le ricerche saranno qualcosa del tipo *estraiamo tutti gli identificativi per cui sono state inviate notifiche push contenenti la stringa trappola spedita via chat il giorno tot alle ore tot* oppure *estraiamo tutti gli identificativi per cui sono state inviate notifiche push alla seguente data e ora (e specifichiamo tutti gli orari dei messaggi che gli abbiamo spedito)*.

A questo punto, non ci resterà che accedere al database dei server push e individuare i dispositivi (e quindi gli utenti) iscritti a ricevere notifiche dai codici argomento venuti fuori dalle nostre query di ricerca, e il gioco è fatto.

Le probabilità di trovare più di un utente che corrisponda ai risultati della ricerca saranno relativamente basse, ma, anche in caso contrario, sarà possibile poi completare le indagini in modo tradizionale. Per l'FBI, infatti, un conto è non avere idea di chi si sta cercando. Tutt'altra cosa sarà, invece, dover indagare su un numero molto ristretto di sospetti.

## Il problema privacy

Quale che sia effettivamente la tecnica utilizzata da Google e dall'FBI, quel che è certo è che è stata essenziale per catturare un criminale, quindi ad una prima impressione può sembrare un'ottima cosa.

Riflettendoci un po' più a fondo, però, la notizia è anche piuttosto preoccupante.

Questa sorta di indagine del Washington Post ha suscitato più di una perplessità perché, in effetti, ha fatto emergere un meccanismo di sorveglianza di massa, da parte di grandi nomi come Google o Apple, che è in piedi ormai da anni.

E se, in generale, la sorveglianza di massa non è mai una buona idea, è ancora peggio quando è messa in atto da soggetti privati.

Tanto per cominciare, finché la tecnica dell'individuazione tramite notifiche push viene utilizzata dalle forze dell'ordine di governi democratici, diciamo che potrebbe ancora andarci bene. Ma il problema, come sempre, nasce quando questi meccanismi sono nelle mani di entità *diversamente democratiche*.

Oltretutto, noi magari oggi possiamo essere d'accordo con chi è al potere, ma ciò non implica che lo saremo sicuramente anche domani e la presenza di un meccanismo così pervasivo per scovare le persone potrebbe diventare un grosso problema.

Sia Google che Apple hanno dichiarato che, se fino ad ora non lo facevano già, per il futuro pretenderanno sempre un'ingiunzione del tribunale per effettuare questo tipo di controlli sui dati dei propri utenti, ma, come ben sappiamo, questa è una blanda rassicurazione.

Accentrare tante informazioni in un unico punto le rende molto desiderabili da parte di chi pensa di poterne ricavare vantaggio o addirittura profitto. Sia legalmente che illegalmente.

Inoltre, Google o Apple o qualsiasi altra società non sono entità monolitiche, ma sono fatte di migliaia di persone. Il fatto che un'azienda dichiari di tenere al sicuro dei dati non implica necessariamente che ogni singola persona al suo interno non possa decidere di fare qualcosa di stupido con quei dati.

In tutto questo, comunque, noi utenti non possiamo fare praticamente più nulla per evitare di essere sottoposti a questa sorveglianza passiva, se non iniziare a rifiutare ogni tipo di notifica futura e, magari, scegliere dispositivi privi di notifiche push, con però tutti gli svantaggi del caso.

Al momento, infatti, esistono degli smartphone con sistemi operativi open source e senza servizi Google o Apple, ma difficilmente possono essere pensati per un uso da parte di chiunque perché hanno delle limitazioni e richiedono che l'utente abbia un minimo di competenza. Senza contare che le notifiche push sono molto comode e utili.

E, in quel caso, una misura del genere non risolverebbe nemmeno il problema in toto, ma solo per le app e i siti che utilizzeremmo in futuro. Per le app e i siti già autorizzati, ormai il danno è fatto.

Se anche disattivassimo totalmente le notifiche push, infatti, questo non ci assicurerebbe la rimozione degli identificativi e la completa disconnessione dei vari servizi già registrati, né tantomeno il mancato invio delle notifiche da parte di questi ultimi.

In tal caso, infatti, il flusso di notifica si interromperebbe una volta arrivato sul server push, non a monte, sul server che origina i dati e ce li spedisce. Quindi noi non vedremmo le notifiche, ma saremmo comunque individuabili esattamente come se le ricevessimo normalmente.

Per capirci, riprendendo l'esempio di prima, se disattivassimo le notifiche di WhatsApp, il server dell'app di messaggistica potrebbe continuare a mandare notifiche ai server di Google o Apple e sarebbero poi questi ultimi a non recapitarle al nostro dispositivo, pur continuando a ricevere tutte le informazioni necessarie per identificarci.

Insomma, come affermato già un anno prima dall'esperto di privacy David Libeau in un articolo piuttosto interessante sull'argomento, *[le notifiche push sono un incubo per la privacy](https://blog.davidlibeau.fr/push-notifications-are-a-privacy-nightmare/)*.

## Il caso Threema

Ma è proprio impossibile difendersi da questo sistema di sorveglianza di massa? Guardando all'[esempio di Threema](https://threema.ch/en/blog/posts/push-notifications-and-data-privacy), in verità no. Qualcosa si può fare.

Threema è un'app di messaggistica svizzera che pone particolare enfasi sul rispetto della privacy e della sicurezza dei propri utenti.

I suoi sviluppatori, al corrente già da tempo del problema delle notifiche push, hanno deciso di implementare, per la propria app, un sistema di notifiche push ad hoc, utilizzando dei server propri e senza appoggiarsi a quelli dei giganti di Big Tech.

In tal modo, l'azienda ha il pieno controllo su tutti gli aspetti delle notifiche, dall'archiviazione alla codifica, e tutte le informazioni vengono protette da intrusioni esterne.

Nel caso te lo stessi chiedendo, questo non vuol dire che l'app sia diventata il ritrovo di criminali e terroristi, perché il fatto di tenere al sicuro i dati da occhi indiscreti non vuol dire non collaborare con le forze dell'ordine quando richiesto. Vuol dire solo decentralizzare le informazioni e fare in modo che esse non siano alla mercé di chiunque.

In pratica, anche se l'app Threema gira su piattaforme come PC Windows o smartphone Android, il fatto che la comunicazione avvenga tramite i server privati dell'azienda permette di non utilizzare i push token o i codici argomenti di Google o di Microsoft.

In tal modo, la comunicazione è protetta e sottratta alla sorveglianza di massa.

Se anche qualcuno entrasse in possesso delle informazioni di Threema, infatti, al massimo potrebbe arrivare a conoscere l'account Threema dell'utente e i dati in possesso dell'azienda, ma non li potrebbe collegare ad altre informazioni su altre app utilizzate da questa persona o installate sul suo dispositivo.

Il concetto, in pratica, è quello di separare i flussi di consegna delle notifiche push. Se ogni app utilizzasse il proprio server push, tutte le informazioni resterebbero separate e raccoglierle a strascico sarebbe molto più complicato per chi non è autorizzato a farlo.

Purtroppo, a causa delle restrizioni Apple, tutto questo discorso, per ora, non è applicabile su iPhone, ma il caso Threema resta comunque un esempio virtuoso che, se seguito da tanti, sarebbe un'ottima soluzione per migliorare la protezione della privacy di tutti noi utenti.
