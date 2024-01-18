/*
ES 1
una classe prende come parametro opzionale un array di numeri
devo controllare che mi arrivi l'array o meno
se mi arriva voglio che succeda questo:
se un num è divisibile x 3 stamp pippo
se un num è divisibile x 5 stampo pluto
se un num è divisibile sia x 3 che x 5 stampo paperino
se un num non è divisibile per nessuno dei due stamp il numero in formato stringa


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

class Numbers {
    constructor(el) {
        if (numeri.hasOwnProperty(el)) {
            if (el % 3 === 0 && el % 5 === 0) {
                console.log('Paperino');
            } else if (el % 5 === 0) {
                console.log('Pluto');
            } else if (el % 3 === 0) {
                console.log('Pippo');
            } else {
                console.log(String(el));
            }
        } else {
            console.log(el + " non è contenuto nell'array di oggetti");
        }
    }
}

new Numbers(6);

*/

// ES 2
const main = document.getElementById("main");
const uno = document.getElementById("uno");
const due = document.getElementById("due");
const tre = document.getElementById("tre");

main.addEventListener("click", function (event) {
  main.style.backgroundColor = "blue";
});

uno.addEventListener("click", function (event) {
  uno.style.backgroundColor = "green";
});

due.addEventListener("click", function (event) {
  due.style.backgroundColor = "green";
});

tre.addEventListener("click", function (event) {
  tre.style.backgroundColor = "green";
});
