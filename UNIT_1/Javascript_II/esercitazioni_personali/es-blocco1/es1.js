/* Esercizio 1
Dichiarare una variabile chiamata "numero" e assegnarle il valore 5. Stampare il valore della variabile sulla console. */

let numero = 5;
console.log(numero);

/* Esercizio 2
Dichiarare una costante chiamata "PI" e assegnarle il valore di 3.14. Stampare il valore della costante sulla console. */

const PI = 3.14;

console.log(PI);

/* Esercizio 3
Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console. */

let nome = 'Marco';
nome = 'Luca';

console.log(nome);

/* Esercizio 4
Dichiarare una variabile chiamata "saluto" e assegnarle il valore "Ciao, come stai?". Stampare il valore della variabile sulla console. */

let saluto = 'Ciao, come stai?';
console.log(saluto);

/* Esercizio 5
Dichiarare una variabile chiamata "vero" e assegnarle il valore true. Stampare il valore della variabile sulla console. */

let vero = true;
console.log(vero);

/* Esercizio 6 (opzionale)
Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente i numeri da 1 a 5. Stampare l'array sulla console. */

let numeri = [1, 2, 3, 4, 5];
console.log(numeri);

/* Esercizio 7 (opzionale)
Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con valore "Mario") e "età" (con valore 30). Stampare l'oggetto sulla console. */

let persona = {
    nome: 'Mario',
    eta: 30
}

console.log(persona);

// blocco 2

/* Esercizio 1
Dichiarare una variabile chiamata "nome" e assegnarle il tuo nome. Stampare la variabile sulla console. */

let myName = 'Nicole';
console.log(myName);

/* Esercizio 2
Dichiarare una variabile chiamata "età" e assegnarle il tuo numero di anni. Stampare la variabile sulla console. */

let age = 22;
console.log(age);

/* Esercizio 3
Dichiarare una variabile chiamata "verificato" e assegnarle il valore booleano true. Stampare la variabile sulla console. */

let verificato = true;
console.log(verificato);

/* Esercizio 4
Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente una serie di numeri. Stampare l'array sulla console. */

let numbers = [3, 6, 9, 12, 15, 18];
console.log(numbers);

/* Esercizio 5
Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con il tuo nome) e "età" (con il tuo numero di anni). Stampare l'oggetto sulla console. */

let miaPersona = {
    nome: 'Nicole',
    eta: 22
}

console.log(miaPersona);

/* Esercizio 6
Dichiarare una variabile chiamata "nullo" e assegnarle il valore null. Stampare la variabile sulla console. */

let nullo = 'null';

console.log(nullo);

/* Esercizio 7
Dichiarare una variabile chiamata "nonDefinito" senza assegnarle un valore. Stampare la variabile sulla console. */

let nonDefinito;

console.log(nonDefinito);

/* Esercizio 8
Eseguire un'operazione matematica non valida, ad esempio dividere una stringa per un numero. Stampare il risultato sulla console. */

let a = 'stringa';
let b = 10;
somma = a + b;

console.log(somma);

/* Esercizio 9
Dichiarare una variabile chiamata "simbolo" e assegnarle un valore di tipo Symbol. Stampare la variabile sulla console. */

let simbolo = Symbol();

console.log(simbolo);

// blocco 3

// Esercizio 6
let num1 = 5;

num1++;
console.log('Il numero incrementato è: ' + num1);

// Esercizio 7
let num2 = 9;

num2--;
console.log('Il numero decrementato è: ' + num2);

// Esercizio 10
let numeroDecimale = 2.5;

numeroIntero = Math.round(numeroDecimale);
console.log(numeroIntero);

// Esercizio 11
numeroRandom = Math.floor(Math.random() * 10);
console.log(numeroRandom);
// come scritto sul sito:
const minimo = 1;
const massimo = 10;
const numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
console.log("Il numero casuale è: " + numeroCasuale);

// Esercizio 12
let string = '1';

let number = parseInt(string);
console.log(number);

// Altro blocco
// Operatore NOT:
const condizione = true;
console.log('Risultato operatore NOT: ' + !condizione);

// Scrivi un programma che utilizzi un template literal per creare una stringa che includa il valore di una variabile e stampi il risultato sulla console.
let valore = 'macumba';

console.log(`stringa con valore della variabile: ${valore}`);

//Scrivi un programma che utilizzi un template literal per calcolare e stampare il risultato di una somma tra due variabili sulla console.
const variabile1 = 15;
const variabile2 = 5;

console.log(`la sottrazione tra ${variabile1} e ${variabile2} è ${variabile1 - variabile2}`);

// Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.
function areaRettangolo (base, altezza) {
    risultato = base * altezza;
}

const base = 5;
const altezza = 16;
const area = areaRettangolo(base, altezza);
console.log(area);