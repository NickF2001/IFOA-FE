/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

const detenuto = {
    ruolo: 'detenuto',
    id: '',
    nome: '',
    data_incarcerazione: '',
    data_scarcerazione: '',
    crimine: '',
    // evasione: true/false,
    // deceduto_in_struttura: true/false
}

const guardia = {
    ruolo: 'guardia',
    id: '',
    nome: '',
    cognome: '',
    anni_servizio: '',
}

let guardie = [];
let detenuti = [];
let fascicoli = [];

function checkRole(n) {
    if (n.ruolo === 'guardia') {
        guardie.push(n);
        console.log('è una guardia');
    } else {
        detenuti.push(n);
        console.log('è un detenuto');
    }
}

checkRole();

function guardieTot() {
    console.log(guardie.length);
}