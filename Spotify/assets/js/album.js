const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/';

const urlTrack = 'https://striveschool-api.herokuapp.com/api/deezer/track/';

window.onload = () => {
    const getData = new URLSearchParams(location.search);

    const id = getData.get('id');

    console.log(id);
    if (id===null){
        console.log(id)
        let body=document.querySelector('.main')
        let vuoto = document.createElement('div')
        vuoto.innerHTML= `<h2 class="text-white">Non fare il furbo passa dalla <a href="./index.html">HOME</a></h2>`
        vuoto.style.width= "100vw"
        vuoto.style.height="100vh"
        vuoto.style.backgroundColor= "black"
        vuoto.style.zIndex="999"
        body.appendChild(vuoto)
    } else{

    getAlbumData(id);
    getTracklistData(id);
    }
}

function getAlbumData(id){
    fetch(urlAlbum + id)
    .then(response => response.json())
    .then(data => {
         console.log(data);
         populateAlbumBanner(data);
    })
}

function getTracklistData(id){
    fetch(urlAlbum + id)
   .then(response => response.json())
   .then(data => {
    console.log(data.tracks.data);
    populateAlbumTracklist(data.tracks.data);
   })
}



function populateAlbumBanner(data) {
    let albumImage = document.getElementById('albumImage');
    let albumTitle = document.getElementById('albumTitle');
    let artistImage = document.getElementById('artistImage');
    let artistName = document.getElementById('artistName');
    let albumYear = document.getElementById('albumYear');
    let tracksNum = document.getElementById('tracksNum');
    let albumTime = document.getElementById('albumTime');
    let albumGradient = document.getElementById('albumGradient');

    albumImage.innerHTML = `<img class="shadow" src="${data.cover_medium}" alt="" style="width: 180px; height: 180px;">`;
    albumTitle.innerHTML = `${data.title}`;
    artistImage.innerHTML = `<a href="artist-page.html?id=${data.artist.id}"><img class="rounded-circle" src="${data.artist.picture_small}" alt="" style="width: 20px; height: 20px;"></a>`;
    artistName.innerHTML = `<a href="artist-page.html?id=${data.artist.id}">${data.artist.name}</a>`;
    albumYear.innerHTML = `${data.release_date}`;
    tracksNum.innerHTML = `${data.nb_tracks}`;
    albumTime.innerHTML = `${data.duration}`;
    albumGradient.style.backgroundImage = 'url(' + data.cover_xl + ')';

}
     

function populateAlbumTracklist(el) {
    let i = 1;
    el.forEach((element)=> {
        let myRow = document.createElement('div');
        myRow.classList.add('row');
        let trackRow = document.getElementById('trackRow');
        myRow.innerHTML = `
        

        <div class="row d-flex align-items-center fw-bold" id="tracciaPointer" onclick="populatePlayer(${element.id})">

        <div class="col-1 text-end">
        <small class="text-light" id="trackNum">${i}</small>
    </div>
    <div class="col-6">
        <small id="trackTitle">${element.title}</small>
        <br>

        <small style="font-size:12px;" class="fw-bold text-light" id="trackArtist">${element.artist.name}</small>

    </div>
    <div class="col-3 ms-3">
        <small class="text-light" id="trackReprod">${element.id}</small>
    </div>
    <div class="col-1">
        <small class="text-light" id="trackTime">${element.duration}
        </small>
    </div>
        </div>


        `;

        trackRow.appendChild(myRow);
       i++
    })

    
}

function populatePlayer (element) {
    fetch(urlTrack + element)
    .then(response => response.json())
    .then(data => {console.log(data)
    
     let image = document.getElementById("playerImage");
    let title = document.getElementById("playerTitle");
    let artist = document.getElementById("playerArtist");

    image.setAttribute("src", `${data.album.cover_small}`);
    title.innerHTML = `${data.title}`;
    artist.innerHTML = `${data.artist.name}`;

    title.classList.add("titleFont");
    artist.classList.add("artistFont");
    image.classList.add("imageFont");
    
    
    })

    console.log(element)
}