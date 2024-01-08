let points = 0;
let speed = 40;
let lost = 0;
let clicked = false;
const audio = new Audio("boom.wav");


function gestPoints() {
    points ++;
    document.getElementById('number').innerHTML = points;
    console.log(points);
    let palla = document.getElementById('palla');
    let img = document.getElementById('img');
    palla.style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
    if (points === 3) {
      img.src = 'gentle-doggo.png';
    }
    clicked = true;
    audio.play();
  }

/*
function gestPoints() {
  points ++;
  document.getElementById('number').innerHTML = points;
  console.log(points);
  document.getElementById('palla').style = ('transition-duration:700ms; transform: scale(1.7); opacity:0%;');
  clicked = true;
  audio.play();
}
*/
function myMove() {
    const elem = document.getElementById("palla");
    let posY = -10;
    let posX = 150;
    let interval = setInterval(frame, speed);

    function frame() {
        if (posY === 100 && lost === 5) { 
          clearInterval(interval);
          alert ('GAMEOVER! Il tuo punteggio è ' + points);
        } else if (posY == 100 && clicked == true) { 
            clicked = false; // 
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
            setInterval(frame, (speed+0.1))
          } else if (posY == 100 && clicked == false) { 
            lost += 1;
            posY = -10;
            posX = Math.floor(Math.random() * 1000); 
            document.getElementById('palla').style = ('opacity:100%;');
          } else {
            elem.style.left = posX + 'px';
            elem.style.top = posY + '%';
            posY++; 
        }}}
myMove();
