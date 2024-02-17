function hiddenElementId(elementID){
  const element = document.getElementById(elementID);
  element.classList.add('hidden');
}
function showElementId(elementID){
  const element = document.getElementById(elementID);
  element.classList.remove('hidden');
}
function setBackgroundColor(elementID){
  const element = document.getElementById(elementID);
  element.classList.add('bg-orange-500');
}
function removeBackgroundColor(elementID){
  const element = document.getElementById(elementID);
  element.classList.remove('bg-orange-500');
}
function setElementTextById(elementID,value){
  const element = document.getElementById(elementID);
  element.innerText = value;
}
function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText.toLowerCase();
  return text;
  }


// create randomly alphabet
function alphabetString(){
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabets.split('');
  // console.log(alphabet);

  const letter = Math.round(Math.random() * 25);
  let indexOfLetter = alphabet[letter];
  return indexOfLetter
}