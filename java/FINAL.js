console.log('yoyohyo');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


var x = 0;
var y = 0;
var distance = 0;
let soundID =0;
var toggleSound = 0;

let clickCount = 0;
let counterDisplayElem  = document.querySelector('.counter-display');
updateDisplay();
document.onmousemove = showCoords;
function showCoords(event) {
  x = event.clientX;
  y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  distance=Math.sqrt((x-sealX)*(x-sealX) + (y-sealY) * (y-sealY));
  // document.getElementById("box1").innerHTML = coords;
  // console.log(coords, x, y);
  setSound();
  playSound();

  // console.log(distance);
}

// function setSeal(){
//   var sealPosX = getRandomNumber(0, winWidth);
//   var sealPosY = getRandomNumber(0, winHeight);
// }

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var sealX = 0;
var sealY = 0;

function sealPos(x_pos, y_pos) {
  var d = document.getElementById('seal');

  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
  sealX = x_pos+70;
  sealY = y_pos+40;
}
function setSound(){
  if (distance > 500){
    soundID = 1;
    console.log('distance>500');

  }
  if (distance < 500 && distance >300){
    soundID = 2;
    console.log('distance>300');
  }
  if (distance < 300 && distance >100){
    soundID = 3;
    console.log('distance>100');
  }
  if (distance < 100){
    soundID = 4;
    console.log('distance<100');
  }
}
function playSound(x){
  if (toggleSound == 0){
    console.log('soundstops');
  }
  if (toggleSound == 1){
    if (soundID == 1){
      document.getElementById('bark1').play();
      console.log(soundID);
      console.log('playssound1');
    }
    if (soundID == 2){
      document.getElementById('bark2').play();
      console.log(soundID);
      console.log('playssound2');
    }
    if (soundID == 3){
      document.getElementById('bark3').play();
      console.log(soundID);
      console.log('playssound3');
    }
    if (soundID == 4){
      document.getElementById('bark4').play();
      console.log(soundID);
      console.log('playssound4');
    }
  }
}

function buttonClicked(){
  sealPos(getRandomNumber(0, winWidth-100),getRandomNumber(60, winHeight-50));
  // document.getElementById('seal').classList.toggle('isDefault');
  toggleSound = 1;
  document.getElementById('seal2').style.opacity=0;

}
function sealClicked(){
    var d = document.getElementById('seal2');
    var f = document.getElementById('seal');
    d.style.opacity= 100;
    if (toggleSound == 1){
      clickCount ++;
    }
    toggleSound = 0;

    updateDisplay();
    // f.classList.toggle('isBig');
    console.log('bark');
}


function updateDisplay(){
    counterDisplayElem.innerHTML = clickCount;
};

function windowLoaded(){
  document.getElementById('start').addEventListener('click', buttonClicked);
  document.getElementById('seal').addEventListener('click', sealClicked);

    console.log('become red');
}
window.onload = windowLoaded;
  // var distance = (x+y-(x_pos+y_pos));
