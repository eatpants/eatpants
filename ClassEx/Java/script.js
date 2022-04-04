

function buttonClicked(){
  document.getElementById('button1').classList.toggle('is-red');
  console.log('button clicked');
}
function buttonHover(){
  document.getElementById('button2').classList.toggle('is-blue');
  console.log('button hovered');
}


function windowLoaded(){
  document.getElementById('button1').addEventListener('click', buttonClicked);
    console.log('become red');
  document.getElementById('button2').addEventListener('mouseover', buttonHover);
    console.log('become blue');
}
window.onload = windowLoaded;
