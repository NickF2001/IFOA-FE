/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

let str1 = 'pippo';
let str2 = 'pluto';
/*
const myConcat = function (str1, str2) {
  let modifica1 = str1.slice(0, 2);
  let modifica2 = str2.slice(0, str2.length - 3);
  somma = modifica1.concat(modifica2);
  return somma;
}
*/

const mod1 = str1.slice(0, 2);
const mod2 = str2.slice(str2.length - 3);
const mod3 = mod1.concat(mod2);

console.log(mod3);
console.log(mod3.toUpperCase());

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let myRandom = [];

const numeriRandom = () => {
  for (i=0; i < 10; i++) {
    let numbers = Math.floor(Math.random() * 101);
    myRandom.push(numbers);
  }
  return myRandom;
}

console.log(numeriRandom());


// creare funzione
// all'interno creare array vuoto
// per 10 volte...
// generi un numero casuale
// e lo pushi
// torni l'array
/*
const numeriRandom = () => {
  const casuali = [];
  for (let i = 0; i < 10; i++) {
    casuali.push(Math.floor(Math.random() * 101))
  }
  return casuali;
}

console.log(numeriRandom());
*/

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

numbers = [13, 28, 45, 90, 88, 64, 53];

const result = numbers.filter((number) => number % 2 === 0);
console.log(result);

const pareNumbers = myRandom.filter((element) => element % 2 === 0);
console.log(pareNumbers);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaNumeri() {
  let somma = 0;
  myRandom.forEach((el) => {
    somma += el;
  });
  return somma;
}

console.log(sommaNumeri());

/*
function sommaNumeri(arrayNumeri) {
  let somma = 0;
  arrayNumeri.forEach(function(numero) {
    if (typeof numero === 'number') {
      somma += numero;
    }
  });
  return somma;
}

const numeri = [6, 44, 9, 37, 21, 10, 50];
const risultato = sommaNumeri(numeri);
console.log("La somma dei numeri nell'array è:", risultato);
*/

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray () {
  let somma = 0;
  myRandom.reduce((el) => {
    somma += el;
  });
}

/*
const addNumbers = [1, 2, 3, 4, 5];

const sum = addNumbers.reduce( function(total, amount){
  return total + amount;
});

console.log(sum);
*/

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const arr = [1, 2, 3]

const n = 5


const arrayMap = arr.map((el) => {
  return el + n;
});

console.log(arrayMap);


// [6, 7, 8]


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let frutta = ['fragola', 'melone', 'ciliegia', 'lampone'];

const lunghezza = frutta.map((el) => {
    return el.length;
  });

console.log(lunghezza);

/*
const arrayEpicode = ["EPICODE", "is", "great"];

const lunghezzaStringa = arrayEpicode.map(function(el) {
  return el.length;
})
console.log(lunghezzaStringa);
*/

// con arrow
const arrayEpicode = ["EPICODE", "is", "great"];

const lunghezzaStringa = arrayEpicode.map((el) => {
  return el.length;
})
console.log(lunghezzaStringa);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
let numeriDispari = [];


  for (i=0; i<100; i++) {
    if (i % 2 !== 0) {
      numeriDispari.push(i);
    }
  }

console.log(numeriDispari);

/*
const dispari = [];
for (let i = 0; i <= 99; i++) {
  if (i % 2 !== 0) {
    dispari.push(i);
  }
}

console.log(dispari);
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldFilm = (array) => {
  let esito = {Year: 3000};
  array.forEach((film) => {
    let anno = parseInt(film.Year);
    if (anno < esito.Year) {
    esito = film;
    }
  });
  return esito;
}

console.log(oldFilm(movies));


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function contaFilm() {
  return movies.length;
}

console.log(contaFilm());


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const titoli = (array) => {
  return array.map((el) => el.Title);
}
console.log(titoli(movies));


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const myMillennial = movies.filter((movie) => movie.Year > 2000);
console.log(myMillennial);

const millennio = (array) => {
  return array.filter((film) => {
    return parseInt(film.year) > 2000;
  });
}


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const ages = movies.reduce( function(valore, element){
  return valore + element;
});

console.log(ages);

// Correzione prof: 
const sommaAnni = (array) => {
  return array.reduce((valore, element) => valore + parseInt(element.Year), 0);
}

console.log(sommaAnni(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

let el = 'tt4154796';
const found = movies.find((el) => el.imdbID);
console.log(found);

const cercaFilm = (array, id) => {
  return array.find((film) => film.imdbID === id);
}

console.log(cercaFilm(movies, 'tt4154756'));


/* ESERCIZIO 14b: ricerca su selezione*/

movies.forEach((film) => {
  document.getElementById('imdbID').innerHTML += `<option value="${film.imdbID}">${film.Title} - Anno${film.Year} </option>`;
});

function cerca() {
  let imdbID = document.getElementById('imdbID').value;
  /* console.log(imdbID); verifica passo passo se funziona */
  mioFilm = movies.find((element) => element.imdbID === imdbID);
  // console.log(mioFilm);
  document.getElementById('titolo').innerHTML = mioFilm.Title;
  document.getElementById('anno').innerHTML = mioFilm.Year;
  document.getElementById('poster').setAttribute('src', mioFilm.Poster);
}

/* in css #divcontenentetitoloeanno {
  display: none;
}
poi in html mettere nel #div:
document.getElementById('film').style.display = 'block';
in questo modo lo sfondo colorato si vedrà solo una volta cliccato per cercare i film
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const searchYear = (array, anno) => {
  return array.findIndex((el)=> {
    el.Year === anno
  });
}

console.log(searchYear(movies, 1978));

/*
const cercaAnno = (array, anno) => {
  return array.findIndex((element) => parseInt(element.Year) === anno);
}

console.log(cercaAnno(movies, 1978));
*/