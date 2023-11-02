/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 10;
let numero2 = 15;

if (numero1 > numero2) {
  document.getElementById('es1').innerHTML = 'Il numero maggiore è ' + numero1;
} else if (numero1 < numero2) {
  document.getElementById('es1').innerHTML = 'Il numero maggiore è ' + numero2;
} else {
  document.getElementById('es1').innerHTML = 'I numeri sono uguali';
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroEqual = 8;

if (numeroEqual !== 5) {
  console.log('Not Equal');
  document.getElementById('es2').innerHTML = 'Il numero è diverso da 5';
} else {
  document.getElementById('es2').innerHTML = 'Il numero è uguale a 5';
}

// con operatore ternario:

const equal = (numeroEqual !== 5)? console.log('Not equal'): '';

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diviso5 = 15;

if (diviso5 % 5 === 0) {
  console.log('divisibile per 5');
  document.getElementById('es3').innerHTML = 'Il numero è divisibile per 5';
} else {
  document.getElementById('es3').innerHTML = 'Il numero non è divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let verifica1 = 8;
let verifica2 = 10;

if (verifica1 === 8 || verifica2 === 8 || verifica1 + verifica2 === 8 || verifica1 - verifica2 === 8 || verifica2 - verifica1 === 8) {
  document.getElementById('es4').innerHTML = 'Verificato';
} else {
  document.getElementById('es4').innerHTML = 'Non verificato';
}


/* SCRIVI QUI LA TUA RISPOSTA */
/*
let d = 3;
let e = 5;
let somma = d + e;
if (somma === 8) {
  document.getElementById('somma').innerHTML = 'la somma risulta 8';
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49;
let spedizione = 10;
let totale = totalShoppingCart;

if (totalShoppingCart >= 50) {
  document.getElementById('es5').innerHTML = 'Hai superato i 50€ di spesa, quindi hai diritto alla spedizione gratuita';
} else if (totalShoppingCart < 50) {
  totale += spedizione;
}
document.getElementById('es5').innerHTML = 'Costo totale: €' + totale;
//messo fuori altrimenti stampava solo se if sarebbe stato true

/*
let totalShoppingCart = 65;
let spedizione = 10;
let totale = totalShoppingCart; // tecnica da carrello e-commerce

if (totalShoppingCart < 50) {
  totale += spedizione;
}
document.getElementById('totale').innerHTML = 'Costo totale: €' + totale;
//messo fuori altrimenti stampava solo se if sarebbe stato true
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 65;
totalShoppingCart2 = totalShoppingCart2 * 0.8; // Ovvero il 20%
let spedizione2 = 10;
let totale2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totale2 += spedizione2; // equivale a totale = totale + spedizione
}
document.getElementById('es6').innerHTML = 'Costo totale: €' + totale2;

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 20;
let x2 = 14;
let x3 = 10;

if (x1 >= x2) {
  if (x3 >= x1) {
    document.getElementById('primo').innerHTML = x3;
    document.getElementById('secondo').innerHTML = x1;
    document.getElementById('terzo').innerHTML = x2;
    console.log(x3, x1, x2);
  } else {
    if (x3 >= x2) {
      document.getElementById('primo').innerHTML = x1;
    document.getElementById('secondo').innerHTML = x3;
    document.getElementById('terzo').innerHTML = x2;
    console.log(x1, x3, x2);
    } else {
      document.getElementById('primo').innerHTML = x1;
    document.getElementById('secondo').innerHTML = x2;
    document.getElementById('terzo').innerHTML = x3;
    console.log(x1, x2, x3);
    }
  }
} else {
  if (x3 >= x2) {
    document.getElementById('primo').innerHTML = x3;
    document.getElementById('secondo').innerHTML = x2;
    document.getElementById('terzo').innerHTML = x1;
    console.log(x3, x2, x1);
  } else {
    if (x3 >= x1) {
      document.getElementById('primo').innerHTML = x2;
    document.getElementById('secondo').innerHTML = x3;
    document.getElementById('terzo').innerHTML = x1;
    console.log(x2, x3, x1);
    } else {
      document.getElementById('primo').innerHTML = x2;
    document.getElementById('secondo').innerHTML = x1;
    document.getElementById('terzo').innerHTML = x3;
    console.log(x2, x1, x3);
    }
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let test = 'Ciao';

if (typeof test === 'number') {
  document.getElementById('es8').innerHTML = test + ' è un numero';
} else {
  document.getElementById('es8').innerHTML = test + ' non è un numero';
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let pari = 31;

if (pari % 2 === 0) {
  document.getElementById('pari').innerHTML = pari + ' è un numero pari';
} else {
  document.getElementById('pari').innerHTML = pari + ' è un numero dispari';
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 12;
if (val < 5) {
  document.getElementById('logica').innerHTML = val + ' è minore di 5';
} else if (val < 10) {
  document.getElementById('logica').innerHTML = val + ' è minore di 10';
} else {
  document.getElementById('logica').innerHTML = val + ' è maggiore di 10';
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me2.city = 'Toronto';
console.log(me2);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me3.lastName;
console.log(me3);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me4 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me.skills[2];
console.log(me4); // Non è proprio corretta

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [];
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;

console.log(myArray); // Metodo molto didattico che non viene usato solitamente

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100;
console.log(myArray);