---
title: "Come funzionano e come utilizzare al meglio 2FA e One-Time-Password"
date: Tue, 30 Jan 2024 8:00:00 +0200
tags: ["autenticazione"]
type: blog
author: Valerio Galano
episode: 126
curated_by: Engram
generated_with: gpt-6.2-sol
---

## Autenticazione a 2 fattori (2FA)

Per parlare di OTP dobbiamo partire con il chiarire, almeno dal punto di vista dell'utente, il concetto di autenticazione a 2 fattori, anche detta 2-step authentication o 2FA o 2 factor authentication e così via.

Fino a qualche anno fa eravamo tutti abituati ad utilizzare un solo fattore di autenticazione: cioè la combinazione di username e password (o email e password, a seconda dei casi).

Caselle email, siti e-commerce, banca online, sito della parrocchia: il concetto era più o meno sempre lo stesso. Ci registravamo fornendo un indirizzo email e/o scegliendo uno username, impostavamo una password e il gioco era fatto: ogni volta che serviva autenticarsi, il sito in questione ci avrebbe chiesto quella coppia di credenziali per riconoscerci.

Poi con il tempo ha iniziato a fare la sua comparsa il [secondo fattore di autenticazione](https://proton.me/blog/what-is-two-factor-authentication-2fa), cioè una seconda informazione che alcuni siti richiedono, dopo l'inserimento delle credenziali, per confermare l'identità dell'utente.

Questa seconda informazione, però, non è semplicemente un'ulteriore password. Non si tratta di qualcosa che possiamo annotare insieme alle credenziali nel nostro taccuino lasciato di fianco alla tastiera.

E questo perché il meccanismo è pensato per accertare la nostra identità sfruttando il concetto di possesso, facendo cioè leva sul fatto che per fornire correttamente l'informazione richiesta dobbiamo utilizzare un qualcosa che possediamo.

Ed ecco quindi che, con il tempo, hanno iniziato a fare la loro comparsa le chiavette fornite dalle banche, quelle specie di calcolatrici in cui inserire la carta bancomat (com'era per i conti della Posta, ad esempio), i codici via SMS o email e le app come Google Authenticator o Authy.

E poi le impronte digitali, il Face ID, le schede con il chip. È stato un momento confusionario, ammettiamolo pure.

Ora però non è più così: il panorama si è stabilizzato e non ci sono scuse per non utilizzare un meccanismo di sicurezza che ormai è uno standard de facto.

Per chi necessita di un livello di sicurezza molto elevato, ormai esiste anche la MFA, la Multi-Factor Authentication, che utilizza almeno 3 fattori di autenticazione.

Io, ad esempio, utilizzo 3 fattori per accedere al password manager in cui custodisco tutte le mie password o quelle dei miei clienti. Per aprire questi database occorrono la password, una chiavetta hardware e una chiave software che si trova solo sui miei dispositivi.

## Tipologie di autenticazione a 2 fattori

Quando si sceglie di utilizzare il secondo fattore di autenticazione su un sito, questo di solito mette a disposizione una o più opzioni per farlo. Migliore è il sito, maggiore è il numero di opzioni che metterà a disposizione.

Mi raccomando, diffida dei siti che nel 2024 non offrono il supporto per la 2FA: evita di inserirvi carte di credito o dati importanti. Anzi, se puoi, evita proprio di usarli questi siti.

Implementare la 2FA ormai è piuttosto semplice. Se i gestori del sito non l'hanno fatto, è un sintomo che probabilmente non pongono la dovuta attenzione all'aspetto della sicurezza. A meno che non abbiano delle motivazioni particolari.

In generale, poi, il livello di invasività della 2FA nei processi di autenticazione dipende molto da cosa deve essere protetto: la banca richiederà il secondo fattore ad ogni operazione, ad esempio.

Siti ben fatti come GitHub o ProtonMail la richiedono alla prima autenticazione da un nuovo browser e poi solo nel caso in cui si cerchi di accedere a impostazioni e informazioni particolarmente importanti o di modificarle.

In ogni caso, quale che sia il momento in cui viene richiesto il secondo fattore, le moderne opzioni sono essenzialmente 5. Per essere precisi, sono quelle più comuni, perché in casi speciali ci si potrebbe inventare di tutto.

### Tipologia numero 1: SMS o chiamata

La prima tipologia di 2FA in ordine di apparizione è quella basata su SMS o su chiamata telefonica. In rari casi anche su email, come nel caso di Steam, ad esempio.

In pratica funziona inviando un codice al numero telefonico o all'indirizzo email che l'utente ha indicato quando ha attivato l'opzione sul proprio profilo.

Al momento della richiesta del secondo fattore da parte del sito, viene inviato un SMS o un'email contenente il codice oppure, se l'utente lo richiede, viene effettuata una chiamata al suddetto numero in cui una voce registrata recita il codice per un paio di volte.

In tutta onestà, questa è la meno sicura e meno efficiente di tutte le varie tipologie di 2FA.

Primo perché risente dell'intrinseca insicurezza del protocollo utilizzato: anche senza voler considerare la possibilità di un furto dell'email o del numero, si tratta in entrambi i casi di trasmissioni non criptate, quindi facilmente osservabili da occhi indiscreti.

E secondo perché bisogna per forza dare il numero di telefono al sito e, comunque, se non dovesse esserci campo non sarà nemmeno possibile ricevere l'SMS o la chiamata con il codice, bloccando così di fatto l'accesso al servizio desiderato.

### Tipologia numero 2: App di autenticazione

La seconda tipologia di secondo fattore è rappresentata invece dalle cosiddette app di autenticazione: Google Authenticator, Microsoft Authenticator e Authy sono probabilmente le più conosciute.

In questo caso, il codice che rappresenta il secondo fattore viene generato tramite l'utilizzo di un software installato solitamente sul nostro cellulare. A volte anche sul PC o su un altro dispositivo.

Operativamente è tutto molto semplice: il sito chiede il codice, noi apriamo l'app, leggiamo il codice presente in quel momento, lo copiamo nel campo designato, premiamo invio e il gioco è fatto.

Funziona senza dare il numero e anche se non c'è segnale telefonico.

### Tipologia numero 3: Chiave di sicurezza hardware

Il terzo meccanismo di secondo fattore di autenticazione è la chiave di sicurezza.

Si tratta proprio di una chiavetta hardware, solitamente USB o NFC (per poter funzionare anche con gli smartphone).

Secondo gli esperti di sicurezza, il token hardware, così è chiamato in gergo, è il metodo più sicuro disponibile sul mercato consumer. Personalmente ne uso uno con grande soddisfazione (ovviamente sui siti e software che lo supportano, che non è cosa scontata).

Per configurare questo comodo sistema di autenticazione serve innanzitutto comprare una chiavetta, ovviamente (io ne consiglio almeno due perché una si potrebbe sempre perdere), e poi registrarla presso ogni sito a cui siamo interessati.

A questo punto, per accedere, dopo l'inserimento della classica coppia di username e password, il sito ci chiederà di inserire la chiavetta e toccare l'apposito pulsantino oppure di avvicinarla allo smartphone per qualche secondo.

### Tipologia numero 4: Notifica push

Sicuramente tra le più comode, c'è poi la quarta tipologia di 2FA: la notifica push.

Molto usata dai big di Internet, tipo Google o Meta, consiste nell'inviare direttamente una notifica ai dispositivi configurati dell'utente con una domanda del tipo: *c'è stato un tentativo di accesso da questo IP, sei stato tu? Se sì, clicca qui per autorizzare il nuovo accesso*.

Non bisogna comprare chiavette né configurare app specifiche. Il gestore del sito può usare semplicemente le app di sua proprietà già installate sullo smartphone. Nel mio caso, ad esempio, io ho installato solo YouTube come app di Google e, quando accedo a Gmail o a qualsiasi altro servizio, ogni notifica di autenticazione mi arriva tramite quest'unica app.

Per contro, però, nel marasma di notifiche che riceviamo ogni giorno, potrebbe facilmente accadere di autenticare per sbaglio un tentativo di accesso fraudolento.

### Tipologia numero 5: Fattore biometrico

Infine abbiamo il più particolare dei metodi di 2FA, quello biometrico, in cui il fattore di autenticazione è la nostra impronta o il nostro viso, come nel caso del lettore dello smartphone o del Face ID di Apple.

Anche in questo caso viene sfruttato qualcosa che già possediamo e i dati biometrici vengono utilizzati sempre di più anche per il cosiddetto accesso passwordless, senza utilizzo di password.

Il problema di questo approccio, però, è che viso o impronte possono essere replicati con vari metodi e sta molto alla qualità del dispositivo riuscire a distinguere un soggetto vero da uno falso.

E inoltre, dato che alla fine le scansioni biometriche vengono convertite in dati, se questi ultimi vengono rubati, non sono mica semplici da cambiare come una password.

## One-Time Password

Fatta questa veloce carrellata di metodi a disposizione, torniamo a parlare di OTP.

Le [OTP](https://techjury.net/blog/what-is-otp/) sono quelle brevi password, solitamente composte da 6 cifre decimali, che vengono richieste all'utente nel caso in cui abbia scelto come fattore di autenticazione la prima o la seconda tipologia che abbiamo menzionato, insomma quella basata su SMS o email oppure quella basata su specifiche app di autenticazione.

In entrambi questi casi, il funzionamento è abbastanza semplice: che sia inviata da un server o che sia generata dall'app, la OTP ha una durata breve, tipicamente 30 o 60 secondi, e, se non viene inserita entro il lasso di tempo definito, diventa inutile.

Il metodo basato su SMS e quello basato su app possono apparire simili, se non identici, ma ciò dipende solo dal fatto che come utenti abbiamo una visione parziale del funzionamento dell’intero sistema.

Nel pratico esistono vari meccanismi di OTP che funzionano in modi diversi e con logiche sottostanti diverse. Capirne e conoscerne qualche dettaglio può essere molto comodo quando li si va ad utilizzare.

I tre più diffusi sono le OTP basate su trasmissione, quelle basate sul tempo e quelle basate su hashing.

## Transmission-based One-Time Password

Partiamo dalle OTP più semplici, quelle inviate per email ed SMS.

Sono definite [transmission-based OTP](https://workos.com/blog/guide-to-one-time-passwords-otps) e consistono in un codice che viene generato dal server del sito tramite un suo algoritmo e spedito appunto via email o SMS all'utente.

Questo codice ha una durata più o meno breve e, quando l'utente lo inserisce, il sito non fa altro che controllare che il numero inserito corrisponda a quello generato e inviato e che non sia passato troppo tempo.

Come già detto, questo non è un metodo molto sicuro per tutta una serie di ragioni. Non è nemmeno particolarmente comodo perché di solito si può specificare solo un indirizzo email o un numero di telefono e a volte i messaggi arrivano in ritardo, rendendo inutilizzabile il codice.

## Time-based One-Time Password

Molto più interessante del precedente è, invece, il metodo delle TOTP, cioè delle [Time-based One-Time Password](https://www.freecodecamp.org/news/how-time-based-one-time-passwords-work-and-why-you-should-use-them-in-your-app-fdd2b9ed43c3/).

Sono i codici che solitamente configuriamo all'interno di app come Authy o Google Authenticator e sono basati sull'orario.

Al momento della configurazione iniziale di una TOTP il server genera un valore detto *seme* o, in inglese, *seed*.

Questo valore, inserito in una particolare funzione matematica insieme all'orario corrente, genera le 6 cifre che dobbiamo inserire come secondo fattore di autenticazione.

Ogni 30 secondi, sia il server che il dispositivo in cui abbiamo configurato la 2FA ricalcolano le 6 cifre utilizzando la stessa formula, lo stesso seme e l'orario corrente, ottenendo sempre entrambi un risultato identico.

L'algoritmo di generazione e il seme, che ovviamente devono essere noti a entrambi (server e dispositivo), vengono scambiati al momento della configurazione, quando all'utente viene chiesto di scansionare un codice QR e poi di inserire la prima OTP per prova.

## Hash-based One-Time Password

Molto simile al precedente è poi il metodo chiamato HOTP, che funziona quasi come il TOTP, solo che si basa sull'utilizzo di un contatore al posto dell'orario.

Il concetto è esattamente lo stesso: server e dispositivo generano entrambi il proprio codice e, se tutto funziona correttamente, i due codici risultano uguali e possono essere utilizzati come autenticazione.

La differenza con TOTP, però, sta nel fatto che i codici non si aggiornano con cadenza regolare, ma solo quando l'utente tenta un accesso. A seguito di tale evento, un contatore avanza e viene generata la relativa sequenza di 6 numeri.

Esistono molte varianti di questa HOTP che differiscono fondamentalmente per l'algoritmo di generazione utilizzato, ma qualsiasi sia la variante può essere configurata e utilizzata tramite QR code o scambio di informazioni di altro tipo: Microsoft Authenticator, ad esempio, richiede l'inserimento di username e password dell'account Microsoft.

Una differenza interessante rispetto alle OTP basate sul tempo è che in quelle basate su hashing, se si tentano più accessi senza inserire il codice, i contatori di server e dispositivo possono disallinearsi ed è necessario fare più tentativi affinché i due valori tornino a combaciare.

## Utilizzare OTP in pratica

Ora che abbiamo visto a grandi linee come funzionano TOTP e HOTP, cosa ce ne facciamo di queste informazioni? Come ci aiutano ad utilizzare meglio la nostra autenticazione a 2 fattori?

Innanzitutto, la 2FA va utilizzata. Si tratta di un livello di sicurezza ormai imprescindibile nel 2024, quindi, per favore, attivala dovunque.

In più, ove possibile, va utilizzato un metodo diverso da quello della OTP inviata tramite SMS o email. Dico «ove possibile» perché a volte non ci sono alternative e in questi casi una 2FA basata su SMS è sempre meglio di nessuna 2FA.

Detto questo, però, facciamo un piccolo ragionamento su quanto spiegato fino ad ora: esistono un seme o contatore e un algoritmo e questi sono condivisi tra server e dispositivo.

Al momento dell'attivazione, il server fornisce, tramite il QR code, tutte le informazioni necessarie al dispositivo per generare correttamente l'OTP di cui avremo bisogno in futuro.

Per funzionare, dunque, il metodo delle OTP basate su tempo o su contatore non necessita di alcuna comunicazione tra il server e l'app di autenticazione: tutto quello che serve è già stato comunicato in fase di attivazione.

Conoscere questo semplice fatto rappresenta, tuttavia, un vantaggio non da poco: se sappiamo che i due sistemi sono totalmente indipendenti, possiamo attuare tutta una serie di comportamenti che possono renderci la vita molto più semplice quando abbiamo a che fare con le nostre autenticazioni a due fattori.

Innanzitutto, ad esempio, possiamo configurare più dispositivi per generare la stessa OTP.

È un problema che molti mi hanno paventato: se quando ne ho bisogno non ho accesso al dispositivo con la OTP? Se non voglio portarlo sempre con me? Se siamo in due o più persone a dover usare un unico account, dobbiamo sempre farci mandare la OTP da chi ha il dispositivo in quel momento?

Questi sono tutti limiti che, ora che sappiamo come funziona il sistema, possiamo facilmente aggirare.

Se il mio dispositivo, per generare la OTP, è totalmente indipendente dal server, allora perché non ne posso configurare un secondo o un terzo o un quarto?

Quale che sia l'app o il software utilizzato, basteranno il seme, l'algoritmo e l'orario corrente: niente che non possa risiedere su tutti i dispositivi di cui dispongo.

Ora è ovvio, ma io ho visto tecnici non sapere di poter configurare la OTP per la 2FA su due dispositivi.

Ho visto persone disattivare e riattivare la 2FA ogni volta che volevano aggiungere o cambiare un dispositivo, dovendo configurarne la prima volta uno, la seconda due, e così via.

E la lista è lunga: ho scoperto che moltissimi, persino informatici di mestiere, non sanno, pur avendone necessità, utilizzare questi sistemi in maniera efficiente ed efficace.

A questo proposito può essere utile anche capire come funziona l'operazione di configurazione di una OTP via app, così che tu sia libero di configurarla nei modi e nei tempi che ritieni adatti a te e con il minor sforzo possibile.

Hai presente quando attivi la 2FA e compare il codice QR da scansionare? Questo è solo il comportamento predefinito escogitato dai gestori dei siti per semplificare al massimo l'esperienza dell'utente, secondo loro, e per lasciarlo nell'ignoranza, secondo me.

Se osservi bene, in tantissimi casi (nella mia esperienza solo una volta non è stato così) sotto quel codice QR c'è un piccolo link con scritto *non posso scansionare il codice in questo momento* o qualcosa del genere.

Se clicchi tale link, vedrai che ti appariranno tutti i dati per configurare manualmente l'app di OTP: il seme, l'algoritmo, il lasso temporale e gli altri parametri.

Ed ecco che il gioco è fatto: hai tutte le informazioni per fare quello che vuoi con il **tuo** codice per accedere al **tuo** account.

Io, per esempio, li configuro nel mio password manager, anziché nelle app per smartphone, perché mi trovo molto meglio ad utilizzarlo così. Sincronizzo i database tramite cloud e ho tutti gli OTP sul Mac, su Windows, su iPhone, ecc.

E se ti sta venendo il dubbio su quanto sicura possa essere questa pratica, ricorda sempre che i miei password manager hanno ben 3 fattori di autenticazione, quindi sono più sicuri di un qualsiasi smartphone con PIN o impronta digitale.

Ad ogni modo, il punto è che conoscendo le informazioni nascoste nel QR della OTP hai il pieno controllo sulle tue credenziali di 2FA e puoi configurarle e riconfigurarle dove ti pare e dove ritieni che per te siano più sicure e comode.

## Pensa alla chiave hardware

Se vuoi un consiglio da amico, pensa seriamente ad iniziare ad utilizzare una chiave hardware: è un modo molto sicuro e comodo di gestire un sacco di autenticazioni. In realtà queste chiavi non servono solo come secondo fattore, ma permettono anche di memorizzare chiavi SSH e OTP in genere, di accedere ai sistemi operativi, ecc.

Io utilizzo una Yubico, con la quale mi trovo veramente bene. A suo tempo me la consigliò Francesco Tucci del podcast Pillole di bit e devo dire che gli sono molto grato per avermi fatto scoprire questo mondo.

E lo so che la chiavetta costicchia un po' e che ti ho anche detto che dovresti prenderne almeno due, però ti svelo un trucco: fai come me, che ne ho comprata una per me e una per mia moglie.

Ogni volta che configuriamo la chiave di uno dei due ad un qualsiasi servizio, inseriamo anche quella dell'altro. Così, in caso una delle due dovesse andare persa o si rompesse, noi avremmo comunque l'altra per non rimanere bloccati fuori dagli account.

Comprala per tuo fratello, tuo figlio, tua madre, insomma per una persona fidata, e configurale allo stesso modo. Poi, nell'utilizzo quotidiano, ognuno userà la propria per conto suo. Fidati: mi ringrazierai.
