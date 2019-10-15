const squares = [...document.getElementsByClassName('square')];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', place);
}

let counter = 0;
let turnText = document.getElementById('turn-text');

function place() {
  this.removeEventListener('click', place);
  if (counter % 2 === 0) {
    this.innerText = 'X';
    this.classList.add('cross');
    turnText.innerText = 'Place a nought!';
  } else {
    this.innerText = 'O';
    this.classList.add('nought');
    turnText.innerText = 'Place a cross!';
  }
  counter++;
}
