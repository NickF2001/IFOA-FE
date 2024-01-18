url = 'https://striveschool-api.herokuapp.com/books';
        
        fetch(url)
        .then(response => response.json())
        .then(info => booksData(info))
        

        function booksData(info) {
            info.forEach(book => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem';
                card.style.margin = '10px';
                card.style.display = 'inline-block';

                let cardImage = document.createElement('cardImage');
                cardImage.src = book.img;
                cardImage.classList.add('card-img-top');
                cardImage.alt = '...';

                let bodyCard = document.createElement('div');
                bodyCard.classList.add('card-body');

                let cardTitle = document.createElement('h4');
                cardTitle.textContent = book.title;

                let cardPrice = document.createElement('p');
                cardPrice.textContent = book.price;

                let scarta = document.createElement('button');
                scarta.classList.add('btn', 'btn-danger', 'delete');
                scarta.innerText = 'Remove';

                bodyCard.appendChild(cardTitle);
                bodyCard.appendChild(cardPrice);
                bodyCard.appendChild(scarta);

                card.appendChild(cardImage);
                card.appendChild(bodyCard);
                
                document.querySelector('#prova').appendChild(card);
            }
            )
        }

const scarta = document.getElementsByClassName('delete');

    scarta.forEach((btn) => {
        btn.addEventListener('click', () => {
            hideCard(this.closest('.card'));
        });
    });



function hideCard(card) {
    card.style.display = 'none';
    // card.parentNode.removeChild(card);
}

let datas = [];

const saveData = () => {
    datas.push(url.value);
    localStorage.setItem('datas', JSON.stringify(datas));
}


// oppure
/*
function populateCard(data) {
    data.forEach((book, data) => {
        let card = createCard(book);
        document.querySelector("#root").appendChild(card);

        let deleteButton = card.querySelector(".btn-danger");
        deleteButton.addEventListener("click", () => deleteCard(card));
    });
}
*/