/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let areaRettangolo = l1 * l2;
    console.log(areaRettangolo);
    return;
}

console.log('Es1');
area(2, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    let somma = Number(num1) + Number(num2);
if (num1 !== num2) {
    return somma;
} else if (num1 === num2) {
    let moltiplicazione = somma * 3;
    return moltiplicazione;
}
return;
}

console.log('Es2');
console.log(crazySum(4, 4));

// funzione fatta col prof:
/*
function crazySum(numero1, numero2) {
    let somma = numero1 + numero2;
    if (numero1 === numero2) {
        somma *= 3;
    }
    return somma;
}

console.log('Es2');
console.log(crazySum(5,6));
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
    let differenza = Math.abs(x - 19);
    if (x < 19) {
        return differenza;
    } else if (x > 19) {
        differenza * 3;
        return;
    }
}

console.log('Es3');
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log('Es4');
console.log(boundary(2));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// strcpy("");

function epify(stringa) {
    if (stringa.startsWith('EPICODE')) {
        return stringa;
    } else {
        return 'EPICODE' + stringa;
    }
}

console.log('Es5');
console.log(epify ('EPICODE corso front end developer'));
console.log(epify ('corso front end developer'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
    numero = Math.abs(numero);
    if (numero % 3 === 0 && numero % 7 === 0) {
        console.log('Multiplo sia di 3 che di 7');
    } else if (numero % 3 === 0) {
            console.log('Multiplo di 3');
        } else if (numero % 7 === 0) {
            console.log('Multiplo di 7');
        } else {
            console.log('Non multiplo di 3 o di 7');
        }
}

console.log('Es6');
check3and7(9);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(pippo) {
    let lista = pippo.split('');
    let reverseArray = lista.reverse(lista);
    let joinArray = reverseArray.join(''); // join = inverso di split
    console.log(joinArray);
    return;
}

console.log('Es7');
reverseString('epicode');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function upperFirst(words) {
    let upper = words.charAt(0).toUpperCase() + words.slice(1);
    console.log(upper);
    return;
}

upperFirst('ciao a tutti!');
*/

function upperFirst(stringa) {
    let arrayFrase = stringa.split(' ');
    let risultato = [];
    for (let i = 0; i < arrayFrase.length; i++) {
        let prima = arrayFrase[i].charAt(0);
        let parolaTagliata = arrayFrase[i].slice(1);
        let parolaFinale = prima.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    }
    return risultato.join(' ');
}

console.log('Es8');
console.log(upperFirst('ciao a tutti'));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(text) {
    let cutting = text.slice(1, text.length -1)
    console.log(cutting);
    return;
}

cutString('Ciao');

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(y) {
    random = Math.floor(Math.random() * y);
    console.log(random);
    return;
}

giveMeRandom(6);

/*
function giveMeRandom(num) {
    let arrayNumeri = [];
    for (let i = 0; i < num; i++) {
        arrayNumeri.push(Math.floor(Math.random() * num));
    }
    return;
}

console.log('Es10');
console.log(giveMeRandom(10));
*/