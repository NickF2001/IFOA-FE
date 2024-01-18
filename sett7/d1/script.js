/*
1. Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
- firstName
- lastName
- age
- location
Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.
*/

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(user1, user2) {
        if (user1.age > user2.age) {
            console.log(user1.firstName + " è più grande di " + user2.firstName);
        } else if (user1.age < user2.age) {
            console.log(user1.firstName + " è più giovane di " + user2.firstName);
        } else {
            console.log(user1.firstName + " ha la stessa età di " + user2.firstName);
        }
    }
}

const user1 = new User("Jack", "Sparrow", 49, "Santo Domingo");
const user2 = new User("Wiliam", "Turner", 35, "Port Royal");
user1.compareAge(user2, user1);

/*

2. Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:
- petName
- ownerName
- species // (cane, gatto, coniglio etc.)
- breed // (labrador, soriano, nano etc.)

Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone.

Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.
*/

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

const petList = [];

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    petList.push(newPet);

    myPetList();
    clearForm();
}

function myPetList() {
    const petListContainer = document.getElementById('petList');
    petListContainer.innerHTML = '';

    petList.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `${pet.petName} is ${pet.ownerName}'s animal. Its species is ${pet.species} and its breed is ${pet.breed}`;
        petListContainer.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}

// correzione col prof
/*
Definizione delle variabili:
const petName = document.getElementById('petName').value;
const ownerName = document.getElementById('ownerName').value;
const species = document.getElementById('species').value;
const breed = document.getElementById('breed').value;

let list = document.getElementById('petList');
const button = document.getElementById('button');

const pets = [];

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    checkSameOwner(pet) {
        if (this.ownerName === pet.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

button.onlick = function () {
    let newAnimal = new Pet(
        document.getElementById('petName').value,
        document.getElementById('ownerName').value,
        document.getElementById('species').value,
        document.getElementById('breed').value
    )

    petList.push(newAnimal);
    myLista();
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';

    function myLista() {
        petList.innerHTML = '';
        petList.forEach(animal => {
            let newLi = document.createElement('li');
            newLi.textContent = `${animal.petName} is ${animal.ownerName}'s animal. Its species is ${animal.species} and its breed is ${animal.breed}`;
            petList.appendChild(listItem);
        });
    }
}
*/