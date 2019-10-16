const squares = [...document.getElementsByClassName('square')];
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', place);
}

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

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
  console.log(this.id);
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
  if (counter === 8) {
    turnText.innerText = 'Draw!';
  }
  if (
    [...squareOne.classList].includes(piece) &&
    [...squareTwo.classList].includes(piece) &&
    [...squareThree.classList].includes(piece)
  ) {
    [squareOne, squareTwo, squareThree].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareFour.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareSix.classList].includes(piece)
  ) {
    [squareFour, squareFive, squareSix].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareSeven.classList].includes(piece) &&
    [...squareEight.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    [squareSeven, squareEight, squareNine].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareOne.classList].includes(piece) &&
    [...squareFour.classList].includes(piece) &&
    [...squareSeven.classList].includes(piece)
  ) {
    [squareOne, squareFour, squareSeven].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareTwo.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareEight.classList].includes(piece)
  ) {
    [squareTwo, squareFive, squareEight].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareThree.classList].includes(piece) &&
    [...squareSix.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    [squareThree, squareSix, squareNine].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareOne.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareNine.classList].includes(piece)
  ) {
    [squareOne, squareFive, squareNine].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  } else if (
    [...squareThree.classList].includes(piece) &&
    [...squareFive.classList].includes(piece) &&
    [...squareSeven.classList].includes(piece)
  ) {
    [squareThree, squareFive, squareSeven].forEach(square =>
      square.classList.add('winning')
    );
    turnText.innerText = piece === 'nought' ? 'Noughts win!' : 'Crosses win!';
    stopPlace();
  }
}

function resetGame() {
  counter = 0;
  turnText.innerText = 'Place a cross!';
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', place);
    squares[i].innerText = '';
    squares[i].classList.remove('winning');
    squares[i].classList.remove('cross');
    squares[i].classList.remove('nought');
  }
}
