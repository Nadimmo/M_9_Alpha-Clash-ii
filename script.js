function keyboardEventHandler(event){
  const playerPressValue = event.key;
  // console.log(playerPressValue);
  // close the game
  if(playerPressValue === 'Escape'){
    GameOver();
  }
  // current alphabet;
  const currentAlphabet = document.getElementById('current-alphabet');
  const letter = currentAlphabet.innerText.toLowerCase();
  // condition
  if(playerPressValue === letter){
    console.log('you are get point');
    // current score
    const currentScore  = document.getElementById('current-score');
    const Score = parseInt(currentScore.innerText);
    // new score;
    const NewScore = Score + 1;
    currentScore.innerText = NewScore;
    // remove text color
    removeBackgroundColor(letter);
    // continue game
    randomAlphabet();
  }
  else{
    console.log('you are lost your life');
    const currentLife = document.getElementById("current-life");
    const life = parseInt(currentLife.innerText);
    // new life
    const Newlife = life - 1;
    currentLife.innerText = Newlife;
    if(life === 0){
      GameOver();
    }
  }
}


// key board Handler
document.addEventListener('keyup', keyboardEventHandler);

// main function
function jumpTheNextpage(){
  hiddenElementId('hom-screen');
  showElementId('playGround')
  randomAlphabet()
  hiddenElementId('ShowScore');
}

// random alphabet show in current letter
function randomAlphabet(){
  const alphabet = alphabetString();

  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet.toUpperCase();
  // set background color in keyboard;
  setBackgroundColor(alphabet);

}

// game over function
function GameOver(){
  hiddenElementId('playGround');
  showElementId('ShowScore');

  // current score
  const currentScore = document.getElementById('current-score');
  const score = currentScore.innerText;
  setElementTextById('finalScore', score);
  // reset all
  setElementTextById('current-life', 5);
  setElementTextById('current-score', 0);

  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  // remove background color in keyboard;
  removeBackgroundColor(currentAlphabet);
}