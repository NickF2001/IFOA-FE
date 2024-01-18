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
- Null non corrisponde al valore 0 come lo intendiamo noi, ma rappresenta l'assenza di un elemento fatto intenzionalmente;
- Indefined rappresenta un valore indefinito
- Data: data in ogni suo formato
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Nicole';
console.log(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
let somma = a + b;
console.log(somma);


//soluzione1
console.log(12 + 20);
// Soluzione 2
let somma1 = 12 + 20;
console.log(somma1);
// Soluzione 3
let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);
// Soluzione 4
let nuovoNumero1 = 12;
let nuovoNumero2 = 20;
let nuovaSomma = nuovoNumero1 + nuovoNumero2;
console.log(nuovaSomma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log (x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Filippi';
console.log(myName);
/*
const persona = myName;
persona = 'Filippi'; */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero4 = 4;
let sottrazione = numero4 - x;
console.log(sottrazione);
document.getElementById('sottrazione');
/*
// Soluzione 1
console.log(4 - x);
// Soluzione 2
let y = 4;
console.log(y - x);
// Soluzione 3
let sottrazione1 = 4 - x;
console.log(sottrazione1);
// Soluzione 4
let nuovaSottrazione = y - x;
console.log(nuovaSottrazione);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John"; 
let verifica = name1 === name2;
console.log(verifica);
document.getElementById('verifica').innerHTML;

/*
// Soluzione 1
console.log('I due nomi sono uguali? ' + (name1 === name2)); // Quando serve un'effettiva concatenazione di termini
console.log('I due nomi sono uguali? ', name1 === name2);
// Soluzione 2
let verifica1 = name1 === name2;
console.log('I due nomi sono uguali?', verifica1) +- scrivi;
*/

// altra verifica
let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log('I due nomi sono uguali?', altraVerifica);
//Soluzione 2
console.log('I due nomi sono uguali?', name1.toLowerCase() === name2.toLowerCase());
