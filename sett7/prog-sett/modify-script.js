document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if (!productId) {
        console.error('ID del prodotto non specificato nella query string dell\'URL.');
        // Puoi gestire questo caso di errore come preferisci
        return;
    }

    const url = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk3YWMwNTgzNTAwMTg1MjJkMGMiLCJpYXQiOjE3MDIzNzM3NTUsImV4cCI6MTcwMzU4MzM1NX0.dD-W5LON02eM3JlhOSkL2WOuQV1UqtqAEbcf2wMJuqs'; // Sostituisci con il tuo token di autorizzazione

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Non autorizzato');
            } else {
                throw new Error(`Errore durante la richiesta API: ${response.statusText}`);
            }
        }
        return response.json();
    })
    .then(product => {
        populateModifyForm(product);
    })
    .catch(error => {
        console.error('Errore durante la richiesta API:', error);
        // Gestisci l'errore in base alle tue esigenze
    });

    function populateModifyForm(product) {
        const productFormRow = document.getElementById('productFormRow');
        const form = document.createElement('form');
        form.id = 'modifyProductForm';

        // Aggiungi qui i campi del form in base ai dati del prodotto
        const nameInput = createFormInput('name', 'text', 'Nome:', product.name);
        const descriptionInput = createFormInput('description', 'text', 'Descrizione:', product.description);
        const priceInput = createFormInput('price', 'number', 'Prezzo:', product.price);

        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.className = 'btn btn-primary';
        submitButton.innerText = 'Salva Modifiche';
        submitButton.addEventListener('click', saveChanges);

        // Aggiungi i campi al form
        form.appendChild(nameInput);
        form.appendChild(descriptionInput);
        form.appendChild(priceInput);
        form.appendChild(submitButton);

        // Aggiungi il form alla pagina
        productFormRow.appendChild(form);
    }

    function createFormInput(name, type, label, value) {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'mb-3';

        const labelElement = document.createElement('label');
        labelElement.htmlFor = name;
        labelElement.innerText = label;

        const inputElement = document.createElement('input');
        inputElement.type = type;
        inputElement.className = 'form-control';
        inputElement.id = name;
        inputElement.name = name;
        inputElement.value = value;

        inputDiv.appendChild(labelElement);
        inputDiv.appendChild(inputElement);

        return inputDiv;
    }

    function saveChanges() {
        const form = document.getElementById('modifyProductForm');

        // Esegui qui la logica per salvare le modifiche
        const formData = new FormData(form);

        const updatedProduct = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: formData.get('price'),
            // Aggiungi altri campi se necessario
        };

        // Esegui una richiesta PUT o PATCH per salvare le modifiche
        fetch(url, {
            method: 'PUT', // o 'PATCH' a seconda della tua API
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(updatedProduct),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore durante la richiesta API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Modifiche salvate con successo:', data);
            // Puoi aggiungere azioni aggiuntive qui in base alla tua logica
        })
        .catch(error => {
            console.error('Errore durante il salvataggio delle modifiche:', error);
            // Gestisci l'errore in base alle tue esigenze
        });
    }
});