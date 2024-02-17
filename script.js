// function keyHabalar(e){
//     const playerPressValue = e.key;
//     // Game to outside
//     if(playerPressValue === "Escape"){
//       GameOver()
//     }
  
//     const currentAlphabet = document.getElementById('current-alphabet');
//     const expectAlphabet = currentAlphabet.innerText.toLowerCase();
//     // console.log(alphabets, expectAlphabet)
//     if(playerPressValue === expectAlphabet){
//       console.log('you are get point');
//       // update score
//       const currentScoreElement = document.getElementById('current-score');
//       const currentScore = parseInt(currentScoreElement.innerText);
  
//       let newScore = currentScore + 1;
//       currentScoreElement.innerText = newScore;
//       // start new round
//       removeTextColor(expectAlphabet)
//       GameContinue()
//     }
//     else{
//       console.log('you are lost your life');
//       const currentLifeElement = document.getElementById('current-life');
//       const currentLife = parseInt(currentLifeElement.innerText);
  
//       let newLife = currentLife - 1;
//       currentLifeElement.innerText = newLife;
  
//       // game over
//       if(currentLife === 0){
//         GameOver();
    
//       }
//     }
//   }
  
//   document.addEventListener('keyup', keyHabalar)
//   // show array function
//   function GameContinue(){
//     let letters = alphabetString()
//     // console.log('your random letter', letters)
//     let current = document.getElementById('current-alphabet');
//     current.innerText = letters.toUpperCase();
  
//     // set background function
//     setBackgroundColor(letters)
//   }
  
//   // main function
//   function jumpTheNextpage(){
//     hiddenElementId('play');
//     showElementId('playGround');
//     GameContinue()
//     hiddenElementId('ShowScore');
//     showElementId('playGround');
//     // reset all
//     setElementByID('current-life',5);
//     setElementByID('current-score',0);
//   }
  
//   function GameOver(){
//     hiddenElementId('playGround');
//     showElementId('ShowScore')
//     // show current score in final score page
//     let Score = getTextElementValueById('current-score');
//     setElementByID('finalScore', Score);
  
//     // remove the current text background color;
//     const letter = getElementTextById("current-alphabet");
//     console.log(letter);
//     removeTextColor(letter);
  
    
//   }
  



