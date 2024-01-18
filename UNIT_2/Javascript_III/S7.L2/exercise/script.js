// imposto le mie variabili
const data = document.getElementById('studentName');
const btnSave = document.getElementById('inLocal');
const btnClear = document.getElementById('clearForm');


// inizio scrivendo la funzione per salvare nel localStorage i dati inseriti nel form
btnSave.addEventListener('click', () => {
    localStorage.setItem('studentName', data.value);

    showMe();
})


// successivamente passo a scrivere la funzione di cancellazione dei dati predecentemente salvati nel localStorage
btnClear.addEventListener('click', () => {
    if (localStorage.setItem('studentName', data.value)) {
        localStorage.removeItem('studentName');
        data.value = '';
    }
})

// infine, scrivo la funzione precedentemente chiamata showMe() per visualizzare i dati salvati nel localStorage
function showMe() {
    if (localStorage.getItem('studentName')) {
        document.getElementById('studentName').innerText = localStorage.getItem('studentName');
    }
}


// dichiaro la mia variabile e utilizzo il comparatore per far scrivere una cosa (true) piuttosto che un'altra (false) �� più grande di un'altra persona.
let i = sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0;
// scrivo la funzione che creerà il timer
const count = function () {
    i = i + 1;
    document.getElementById('timer').innerText = i;
    sessionStorage.setItem('count', i);
}

setinterval(count, 1000)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const save = function () {
    let studentName = document.getElementById('studentName').value;
    localStorage.setItem('studentName', studentName);
}

const clear = function () {
    localStorage.removeItem('studentName');
}

const check = function () {
    if (localStorage.getItem('studentName')) {
        text = 'Ciao ' + localStorage.getItem('studentName');
    } else {
        text = 'Empty';
    }
    document.getElementById('studentName').innerText = text;
}

window.onload = check()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Per creare un contatore che tenga conto del tempo che passa utilizzando `sessionStorage` in JavaScript, puoi seguire questi passaggi:

1. **Creazione di un HTML base:**

   Inizia creando un file HTML con una struttura base che includa un elemento per visualizzare il valore del contatore. Ad esempio:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Contatore di Tempo</title>
   </head>
   <body>
       <h1>Contatore: <span id="counter">0</span></h1>
       <script src="app.js"></script>
   </body>
   </html>
   ```

2. **Creazione di un file JavaScript (`app.js`):**

   Ora, crea un file JavaScript per gestire il contatore. In questo esempio, useremo `sessionStorage` per memorizzare il valore del contatore:
*/

   document.addEventListener("DOMContentLoaded", function () {
       // Verifica se c'è un valore salvato in sessionStorage
       let counterValue = sessionStorage.getItem("counter") || 0;

       // Aggiorna il valore del contatore sulla pagina
       document.getElementById("counter").textContent = counterValue;

       // Aggiorna il contatore ogni secondo
       setInterval(function () {
           counterValue++;
           document.getElementById("counter").textContent = counterValue;

           // Salva il valore del contatore in sessionStorage
           sessionStorage.setItem("counter", counterValue);
       }, 1000);
   });

/*
   - L'evento `"DOMContentLoaded"` assicura che lo script venga eseguito dopo che il documento è stato completamente caricato.
   - `sessionStorage.getItem("counter") || 0` ottiene il valore del contatore salvato in `sessionStorage`. Se non c'è alcun valore, imposta il contatore a 0.
   - `setInterval` viene utilizzato per eseguire una funzione ogni secondo.
   - All'interno della funzione, incrementiamo il contatore, aggiorniamo l'elemento sulla pagina e salviamo il nuovo valore in `sessionStorage`.

3. **Test:**

   Salva il file HTML e il file JavaScript nella stessa cartella. Apri il file HTML con un browser e dovresti vedere il contatore che si incrementa ogni secondo. Chiudendo e riaprendo la pagina, il contatore dovrebbe ricominciare da dove si era interrotto grazie all'utilizzo di `sessionStorage`.

Questo è un esempio di base, e puoi personalizzare ulteriormente il codice in base alle tue esigenze.
*/