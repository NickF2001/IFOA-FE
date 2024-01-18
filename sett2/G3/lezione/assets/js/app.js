// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CONTROLLARE LA VALIDITA' DEL FORM
4. CALCOLARE L'ETA'
5. VERIFICARE LA MAGGIORE/MINORE ETA'
6. SCRIVERE NELL'HTML
7. CANCELLARE IL FORM

EVENTO SCATENANTE (capire se ci sono eventi scatenanti , quello che da avvio a tutto il resto)
click

VARIABILI GLOBALI (quali variabili devono esserlo) che mi servono in più posti
cost btn (button) sennò si usa 'onclick' nell'html
nome
anno nascita
stato
*/

let nome = document.getElementById('nome'); //utilizzata per leggere campo input e per stampare a video (2)
let anno = document.getElementById('anno'); //utilizzata per leggere campo input, calcolare età, verificare l'età, stampare a video (4)
let eta;
let stato; //utilizzata per verificare età e stampare a video (2)
let error = document.getElementById('error');

// la function eventHandler decide le altre funzioni in che ordine devono partire

/*
function eventHandler() {
    leggiForm();
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
}
*/

function eventHandler() {
    leggiForm();
    controlla();
    if (esegui) {
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        error.innerHTML = 'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
        return;
    }
}

function controlla () {
    esegui = false;
    if (anno >= 1900 && anno <= 2023 && nome != '') {
        error.innerHTML = '&nbsp';
        return true;
    }
    if (nome != '') {
        error.innerHTML= '';
        esegui = true;
    }
    return esegui;
}

/*
function leggiForm() {
    nome = nome.value;
    anno = anno.value;
    console.log(nome, anno); // strumento di debug, poi lo tolgo una volta verificato
}
*/

function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta() {
    eta = 2023 - Number(anno);
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';
}