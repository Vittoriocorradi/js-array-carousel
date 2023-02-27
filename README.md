Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


ESERCIZIO

MILESTONE 1 

Costruisco con HTML e CSS un layout statico con al centro un div contenitore "slider" al cui interno inserirò una freccia nella parte superiore, una freccia nella parte inferiore e un div item contenente l'immagine desiderata.
Su CSS aggiungo una classe show con display block per fa vedere le immagini desiderate (altrimenti display none)

MILESTONE 2 

Rimuovo da HTML i div che contengono le immagini.

Creo un array imgs contentente come stringhe i nomi dei file delle immagini
Creo una variabile let chiamata "active" a cui attribuirò come valore iniziale 0. Userò questa variabile per l'indicizzazione dei contenitori item delle immagini.
Creo una variabile const slider per rappresentare l'elemento "slider"

Inizio un ciclo FOR con i = 0, i minore della lunghezza dell'array imgs e incremento i++
    Ad ogni iterazione andrò ad aggingere all'interno di slider un div item contenitore con relativo file dell'immagine indicizzata i attraverso l'uso di template literal.

Creo una variabile items con querySelectorAll sulla classe .item (div .item contenente una singola immagine) per ottenere una lista dei contenitori delle immagini
Assegno all'elememto di items indicizzato active la classe show così da rendere visibile l'immagine dell'elemento indicizzato

Inizio un evento click sulla freccia in basso per proseguire lo scorrere delle immagini
    SE active è minore della lunghezza di items - 1
        Rimuovo dall'elemento indicizzato active la classe show
        Incremento di uno active
        Aggiungo all'elemento indicizzato active la classe show

Inizio un evento click sulla freccia in alto per tornare indietro nell immagini
    SE active è maggiore di zero
        Rimuovo dall'elemento indicizzato active la classe show
        Decremento di uno active
        Aggiungo all'elemento indicizzato active la classe show


