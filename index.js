const squares = [...document.getElementsByClassName('square')];
const reset = document.getElementById('reset');

reset.addEventListener('click', resetGame);

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', place);
}

let counter = 0;
let turnText = document.getElementById('turn-text');

let squareOne = document.getElementById('1');
let squareTwo = document.getElementById('2');
let squareThree = document.getElementById('3');
let squareFour = document.getElementById('4');
let squareFive = document.getElementById('5');
let squareSix = document.getElementById('6');
let squareSeven = document.getElementById('7');
let squareEight = document.getElementById('8');
let squareNine = document.getElementById('9');

function place() {
  this.removeEventListener('click', place);
  if (counter % 2 === 0) {
    this.innerText = 'X';
    this.classList.add('cross');
    turnText.innerText = 'Place a nought!';
    checkWin('cross');
  } else {
    this.innerText = 'O';
    this.classList.add('nought');
    turnText.innerText = 'Place a cross!';
    checkWin('nought');
  }
  counter++;
}

function stopPlace() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener('click', place);
  }
}

function checkWin(piece) {
  if (
    [...squareOne.classList].includes(piece) &&
    [...squareTwo.classList].includes(piece) &&
    [...squareThree.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareFour.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareSix.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareSeven.classList].includes(piece) &&
    [...squareEight.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareOne.classList].includes(piece) &&
    [...squareFour.classList].includes(piece) &&
    [...squareSeven.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareTwo.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareEight.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareThree.classList].includes(piece) &&
    [...squareSix.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareOne.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareThree.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareSeven.classList].includes(piece)
  ) {
    turnText.innerText = piece === 'Nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  }
}

function resetGame() {
  counter = 0;
  turnText.innerText = 'Place a cross!';
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', place);
    squares[i].innerText = '';
    squares[i].classList.remove('cross');
    squares[i].classList.remove('nought');
  }
}
