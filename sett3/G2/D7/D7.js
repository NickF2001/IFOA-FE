/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
       document.querySelector('h1').innerHTML = 'Modificato';
       }

       changeTitle();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector('h1').className = 'myHeading';
       }

       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
    /* const changePcontent = function () {
        document.querySelectorAll('div p').innerHTML = 'paragrafi modificati';
       }

       changePcontent(); */

       const changePcontent = function () {
        const paragrafi = document.querySelectorAll('div p');
        paragrafi.forEach((element) => {
            element.innerText = 'Testo cambiato';
        });
       };

       changePcontent();
       
       
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
        
       const changeUrls = function () {
        let cambio = document.querySelectorAll('a:not(footer a)');
        cambio.forEach((element) => {
            element.setAttribute('href', 'https://www.google.it/');
        });
       };

       changeUrls();
       
       
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

       const addToTheSecond = function () {
        let secondList = document.getElementById('secondList');
        let nuovoElemento = document.createElement('li');
        nuovoElemento.innerText = 'Nuovo elemento lista';
        secondList.appendChild(nuovoElemento);
       }

       addToTheSecond();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        document.querySelector('div').innerHTML += '<p>Paragrafo</p>';
       }

       addParagraph();

      // .querySelectorAll('div')[0/1/2/3/etc...]; -> modifica il div alla prima(0)/seconda(1)/... posizione.
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
     /* const hideFirstUl = function () {
        document.querySelector('ul').style.display = 'none';
       }

       hideFirstUl(); */
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const liste = document.querySelectorAll('ul');
        liste.forEach((element) => {
            element.style.backgroundColor = 'green';
        });
       };

       paintItGreen(); 
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

       /*
       const makeItClickable = function () {
        let h1Element = document.querySelector('h1');

        if (h1Element) {
          let testoH1 = h1Element.textContent;
          testoH1 = testoH1.slice(0, -1);
          h1Element.textContent = testoH1;
        }
      }
    
      makeItClickable();
      */

      const makeItClickable = function() {
        const titolo = document.querySelector('h1');
        titolo.onlick = function () {  // in modo che non tolga lettere senza l'arrivo del click
            titolo.innerText = titolo.innerText.slice(0, -1);
        }
      };

      makeItClickable();
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

       const revealFooterLink = function() {
        // Seleziona l'elemento 'a' all'interno del footer
        let linkInterno = document.querySelector('footer a');

        // Ottieni l'URL dell'elemento 'a'
        let url = linkInterno.href;

        // Mostra l'URL in un alert
        alert('URL del link interno: ' + url);
    }

    // Aggiungi un gestore di eventi al footer per il clic
    document.querySelector('footer').addEventListener('click', revealFooterLink);
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
        const prodotti = [
            {
                id: 1,
                immagine: 'immagine1',
                nomeProd: 'prodotto 1',
                quantita: 25,
                prezzo: 57
            },
            {
                id: 2,
                immagine: 'immagine2',
                nomeProd: 'prodotto 2',
                quantita: 31,
                prezzo: 18
            },
            {
                id: 3,
                immagine: 'immagine3',
                nomeProd: 'prodotto 3',
                quantita: 12,
                prezzo: 93
            },
            {
                id: 4,
                immagine: 'immagine4',
                nomeProd: 'prodotto 4',
                quantita: 38,
                prezzo: 25
            },
            {
                id: 5,
                immagine: 'immagine5',
                nomeProd: 'prodotto 5',
                quantita: 64,
                prezzo: 37
            }
        ]

        const contenitore = document.getElementById('tableArea');
        const tabella = document.createElement('table');
        tabella.style.width = '50vw';

        const primaRiga = document.createElement('tr');

        const intImmagine = document.createElement('th');
        intImmagine.innerText = 'Immagine';
        const intNome = document.createElement('th');
        intNome.innerText = 'Nome Prodotto';
        const intQty = document.createElement('th');
        intQty.innerText = 'Quantità';
        const intPrezzo = document.createElement('th');
        intPrezzo.innerText = 'Prezzo';
        
        primaRiga.appendChild(intImmagine); // dalle celle alla tabella, da + piccolo al + grande
        primaRiga.appendChild(intNome);
        primaRiga.appendChild(intQty);
        primaRiga.appendChild(intPrezzo);
        tabella.appendChild(primaRiga);

        for (let i = 0; i < prodotti.length; i++) {
            const nuovaRiga = document.createElement('tr');

            const cellaImmagine = document.createElement('td');
            cellaImmagine.innerText = `${prodotti[i].immagine}`;
            const cellaNome = document.createElement('td');
            cellaNome.innerText = `${prodotti[i].nomeProd}`;
            const cellaQty = document.createElement('td');
            cellaQty.innerText = `${prodotti[i].quantita}`;
            const cellaPrezzo = document.createElement('td');
            cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

            nuovaRiga.appendChild(cellaImmagine);
            nuovaRiga.appendChild(cellaNome);
            nuovaRiga.appendChild(cellaQty);
            nuovaRiga.appendChild(cellaPrezzo);
            tabella.appendChild(nuovaRiga);
        }

        contenitore.appendChild(tabella);
       }

       generateTable();
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {
        const tabella = document.querySelector('table'); // seleziono la tabella

        const nuovaRiga = document.createElement('tr');

        const cellaImmagine = document.createElement('td');
            cellaImmagine.innerText = `immagine6`;
            const cellaNome = document.createElement('td');
            cellaNome.innerText = `prodotto 6`;
            const cellaQty = document.createElement('td');
            cellaQty.innerText = `18`;
            const cellaPrezzo = document.createElement('td');
            cellaPrezzo.innerText = `25`;

            nuovaRiga.appendChild(cellaImmagine);
            nuovaRiga.appendChild(cellaNome);
            nuovaRiga.appendChild(cellaQty);
            nuovaRiga.appendChild(cellaPrezzo);
            tabella.appendChild(nuovaRiga);
       };

       addRow();
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {
        const immagini = document.querySelectorAll('td img');
        immagini.forEach(element => element.style.display = 'none');
       }

      // hideAllImages()
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {
        const cambiaColore = document.getElementById('changeMyColor');
        cambiaColore.onclick = function () {
          let red = Math.floor(Math.random() * 256);  // uso il metodo rgb perché con math.random posso solo dare valori numerici randomici
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);

          let coloreRandom = `rgb(${red}, ${green}, ${blue})`;

          cambiaColore.style.color = coloreRandom;
         }
        };
       

       changeColorWithRandom();
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () { // scrivere la stringa che c'è già ma filtrata
        document.querySelectorAll('h1, h2, li, a, p, h3, th, td').forEach((element) => { // descrizione di una stringa di testo come array con lo spread operator
          element.innerText = [...element.innerText].filter((carattere) => {
            carattere = carattere.toLowerCase();
            return ( // restituzione di elementi filtrati a condizione
              carattere !== 'a' &&
              carattere !== 'e' &&
              carattere !== 'i' &&
              carattere !== 'o' &&
              carattere !== 'u'
            );
          }).join('') // fusione degli elementi nell'array filtrato in parola unica
        });
       };

       deleteVowels();