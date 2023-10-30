/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
I principali datatype in JavaScript sono:
- Stringa, ovvero una sequenza di caratteri composti sia da lettere che numeri;
- Numero, ovvero l'insieme dei numeri, sia naturali che decimali;
- Boolean da la possibilità di rispondere con vero o falso, che corrispondono rispettivamente a 1 e 0;
- Null non corrisponde al valore 0 come lo intendiamo noi, ma rappresenta l'assenza di un elemento;
- Indefined rappresenta un valore indefinito
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
let myName = 'Nicole';
console.log(myName);
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let a = 12;
let b = 20;
let somma = a + b;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
console.log (x);
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
const myName = 'Nicole';
myName = 'Filippi';
console.log(myName);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
let numero1 = 4;
let x = 12;
let sottrazione = numero1 - x;
console.log(sottrazione);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*
let name1 = 'john';
let name2 = 'John';
'john' !== 'John';
console.log(name1 ===name2);
*/

const name1 = "john";
const name2 = "John"; 

console.log(name1 == name2); //false

