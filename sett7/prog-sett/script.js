const url = 'https://striveschool-api.herokuapp.com/api/product/'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk3YWMwNTgzNTAwMTg1MjJkMGMiLCJpYXQiOjE3MDIzNzM3NTUsImV4cCI6MTcwMzU4MzM1NX0.dD-W5LON02eM3JlhOSkL2WOuQV1UqtqAEbcf2wMJuqs'
const header = {
    'Content-Type': 'application/json',
    'Authorization': token,
    'Accept': 'application/json'
}
/*
const newProduct = {
    "name": "Nokia 3310",
    "description": "Indestructible cellphone",
    "brand": "Nokia",
    "imageUrl": "https://example.com/3310.jpg",
    "price": 99
}
*/

let products = [];

function getProducts() {
    fetch(url, {
        method: 'GET',
        headers: header
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        products = data;
        populatePage(data);
    })
}

window.onload = () => {
    getProducts();
};

function populatePage(data) {
    let myRow = document.getElementById('productsRow');
    myRow.innerHTML = '';
    data.forEach(el => {
        let card = `
        <div class="col-md-4">
        <div class="card mb-4" style="width: 18rem;">
            <img class="card-img-top" src="${el.imageUrl}" alt="${el.name}" style="width:100%"; onclick="goToDetails(${el.id})"/>
            <div class="card-body">
        <h5 class="card-title" onclick="goToDetails(${el.id})" style="cursor: pointer">${el.name}</h5>
        <p class="card-text">${el.description}</p>
        <button
        type="button"
        class="btn btn-sm btn-warning"
        onclick="goToEdit(${el.id})">
        Edit
        </button>
        <button type="button" class="btn btn-primary" onclick="goToDetails('${el._id}')">See details</button>
    </div>
        </div>
        </div>
        `
        myRow.innerHTML += card;
    })
}


const goToDetails = id => {
    window.location.assign("./details.html?productId=" + id);
};

const goToEdit = id => {
    window.location.assign("./back.html?productId="+ id);
}

document.addEventListener('DOMContentLoaded', function() {
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ottieni l'ID del prodotto dalla data dell'attributo
            const productId = button.getAttribute('data-product-id');

            // Reindirizza l'utente alla pagina dei dettagli con l'ID del prodotto
            window.location.href = `details.html?id=${productId}`;
        });
    });
});