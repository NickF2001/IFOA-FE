const url = 'https://api.pexels.com/v1/search?query='
const token = 'BS6BwpbJatWeHkxdzUsKS6PupFQFOPOUZelBBTUXus60YLnzOLC3qUsy'
const header = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json",
}

function getImg(query) {
    fetch(url + query, {
        headers: header
    })
    .then(response => response.json())
    .then(data => {
        createCards(data.photos)
    })
}

function createCards(photos) {
    let myRow = document.getElementById('photo-row')
    myRow.innerHTML = '';
    photos.forEach(el => {
        let card = ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" src="${el.src.small}" alt="${el.alt}" style="width:100%";/>

            <div class="card-body">
                <h5 class="card-title">${el.alt}</h5>
                <div class="d-flex justify-content-between align-items-center">
                <p class="card-text">This is a ${el.photographer}'s photo</p>
                <p class="card-text">Go check their <a href="${el.photographer_url}>website</a></p>
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-success">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
          </div>
          <small class="text-muted">${el.id}</small>
        </div>
      </div>
    </div>
    </div>
          `
          myRow.innerHTML += card;  
    })
}

function searchImg(query) {
    let keyword = document.getElementById('searchImg').value;
    getImg(keyword);

}