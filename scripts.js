const grid = document.querySelector('div.grid');
const cell = document.querySelector('div.cell');
const reset = document.querySelector('a.reset');
const colorise = document.querySelector('a.colorise');
const blackWhite = document.querySelector('a.blackWhite');
colorise.addEventListener('click', color);
blackWhite.addEventListener('click', black);
const input = document.querySelector('input');
let mode = "";
let number = 16;

function creatGrid(num){
  for (let i = 0; i < num; i++) {
    grid.innerHTML += '<div class="row"></div>';
  }
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    for (let j = 0; j < num; j++) {
  			row.innerHTML += '<div class="cell"></div>';
        row.addEventListener("mouseover", draw);
  		}
  });
}

function color(){
  mode = 'color';
}
function black(){
  mode = 'black';
}

function draw(event){
  if(mode === 'black'){
    event.target.style.backgroundColor = "#000";
  }
  else if(mode === 'color'){
   event.target.style.backgroundColor = "rgb(" + randomColor() + ","  + randomColor() + "," + randomColor() + ")";
  }
}

reset.addEventListener('click', function(e){
  grid.innerHTML = '';

  number = input.value;
  if(number == null){
    number = 16;
  }else{
  creatGrid(number);
  }
});

function randomColor() {
    let randomColor = Math.floor(Math.random() * 257);
    return randomColor;
}

creatGrid(number);
