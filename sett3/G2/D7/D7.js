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
 
       const changePcontent = function () {
        document.querySelectorAll('div p').innerHTML = 'paragrafi modificati';
       }

       changePcontent();
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

       /*
        
       const changeUrls = function () {
        let cambio = document.querySelectorAll('a:not(footer a)');
        cambio.forEach((el) => {
            el.setAttribute(('href', 'https://www.google.com'));
        });
       }

       changeUrls();
       
       */
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

       const addToTheSecond = function () {
        let secondList = document.getElementById('secondList');
        let nuovoElemento = document.createElement('li');
        let nuovaLista = secondList.appendChild(nuovoElemento);
        nuovoElemento.innerText = 'Nuovo elemento lista';
       }

       addToTheSecond();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        document.querySelector('div').innerHTML += '<p>Paragrafo</p>';
       }

       addParagraph();
 
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
 
    /* const paintItGreen = function () {
        document.querySelectorAll('ul').style.backgroundColor = 'green';
       }

       paintItGreen(); */
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

       const makeItClickable = function () {
        let h1Element = document.querySelector('h1');

        if (h1Element) {
          let testoH1 = h1Element.textContent;
          testoH1 = testoH1.slice(0, -1);
          h1Element.textContent = testoH1;
        }
      }
    
      makeItClickable();
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 /*
       const revealFooterLink = function () {
        
       }

       revealFooterLink();
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
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}