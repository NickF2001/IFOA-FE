const url = 'https://api.pexels.com/v1/search?query='
const token = 'BS6BwpbJatWeHkxdzUsKS6PupFQFOPOUZelBBTUXus60YLnzOLC3qUsy'
const header = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json",
}

function getImg(query) {
    fetch(url+query, {
        headers: header
    })
    .then(response => response.json())
    .then(data =>
        createCard(data.photos))
}

function createCard(photos) {
    let myRow = document.getElementById('myRow')
    photos.forEach(el => {
        let myCard = `
        <div class="col-md-4" id="myCard">
            <div class="card mb-4 shadow-sm">
                <div class="card" style="width: 18rem;">
                        <img src="${el.src.small}" class="card-img-top" alt="${el.alt}" style="width:100%"; />
                    <div class="card-body">
                        <h5 class="card-title">${el.photographer}'s picture</h5>
                        <p class="card-text">Go check their <a href="${el.photographer_url}">website</a></p>
                        <button class="btn btn-secondary py-0 px-3" id="delete" onclick="hideCard(this)">Hide</button>
                        <button class="btn btn-primary py-0 px-3" id="view" data-bs-toggle="modal" data-bs-target="#myModal">View</button>
                        <small class="float-right">${el.id}</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body d-flex justify-content-center">
            <img src="${el.src.medium}" alt="${el.alt}">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
        `
       myRow.innerHTML += myCard; 
    })
}

function searchImg() {
    let parolaChiave = document.getElementById('searchImg').value;
    getImg(parolaChiave);
}

function hideCard() {
    let card = document.getElementById('myCard');

    card.style.display = 'none';
}