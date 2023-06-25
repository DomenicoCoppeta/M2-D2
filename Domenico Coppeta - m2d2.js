/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Numero: Valore numerico che può essere sia intero che decimale. ( Es. 15 oppure 8.98 )
// STRINGA: È una sequenza di lettere e/o numeri delimitata da "" o da ''. (Es. "blink182" oppure 'eiffel65')
// BOOLEANO: È un valore logico che può accetta solo due valori: true o false. (Es in un cv -> Automunito: true )
// UNDEFINED: Il valore indefinito rappresenta una variabile che è stata dichiarata ma non ha ancora un valore assegnato.
// NULL: È il valore vuoto, indica che la variabile non contiene nulla.
// 


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Un oggetto è un insieme  di proprietà composte da una coppia chiave-valore raccolte all'interno di una scope, delimitato da parentesi graffe ({}).
// esempio

const prodotto = {
    nome: "Smartphone",
    marca: "Samsung",
    prezzo: 699,
    disponibilità: true
  };


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12+20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Domenico"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(x-4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon"
let name2 = "Jhon"

// name1 e name2 sono diversi?
console.log(name1 !== name2)

// name1 e name2 sono uguali se i loro caratteri vegono trasformati in minuscoli?
console.log(name1.toLocaleLowerCase === name2.toLocaleLowerCase)