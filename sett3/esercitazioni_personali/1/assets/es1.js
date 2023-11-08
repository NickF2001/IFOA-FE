/* Esercizio 1:
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore */

a = 2;
b = 5;
c = 10;
d = 9;

console.log(Math.max(a, b, c, d));
console.log(Math.min(a, b, c, d));

/* Esercizio 2:
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona
quanti anni sono necessari per raggiungere i 100
Esempio:
Input: anno corrente = 2021, anno di nascita = 1996
Output: età = 25, anni mancanti = 75 */

annoCorrente = 2023;
annoNascita = 2001;
eta = annoCorrente - annoNascita;
cento = 100 - eta;

console.log(eta);
console.log(cento);

/* Esercizio 3:
Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

Esempio
Input: numero 7
Output: 
- 0-7
- 1-6
- 2-5
- 3-4
- 4-3
- 5-2
- 6-1
- 7-0 */

let somma = 10;
let decr = somma;
for (let i = 0; i <= somma; i++) {
  console.log(decr, i);
  decr--;
}

/* Esercizio 4:
Scrivi un programma che dato un numero conti da quante cifre è formato.

Esempio
Input: numero: 245
Output: numero cifre: 3 */

const number = 10283957943;
const numberToString = numero.ToString();
console.log(numberToString.length);