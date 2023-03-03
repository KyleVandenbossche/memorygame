
(() => {

let started = false; // timer starts at off -- Maggie 

const cards = document.querySelectorAll(".memory-card"); // calling the memory card html 
const startButton = document.getElementById("start-button"); // calling the start button 
const timer = document.querySelector("#timer");

let hasFlippedCard = false;
let firstCard, secondCard; // defining flipped first card + second card for matching
let timeSeconds = 0;
let timeMinutes = 0;


// THIS START BUTTON STARTS THE GAME

startButton.addEventListener("click", (e) => { // this starts the game, cannot flip cards without pressing the start button 
  started = true;
  startButton.style.backgroundColor = "white";
  startButton.style.color = "green";
  timer.style.backgroundColor = "white";
  timer.style.color = "green";



// THIS IS THE FLIP CARD FUNCTION 

  function flipCard(e) { // this function simply flips the card
    console.log(e.target.dataset.animal);
    this.classList.add("flip"); // the classlist.add only flips one way -- toggle flips multiple
    //push card into array called open cards, if array > 1 length then check for match flipped card [0] 
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));



  if (!hasFlippedCard) { // if nothing happens nothing is assigned
    hasFlippedCard = true;  // if this happens, continue
    firstCard = this; // the first card is -- this variable represents the card clicked
    console.log('hello');
   return;
  } 

secondCard = this;
hasFlippedCard = false;

function checkForMatch() {
if (firstCard.dataset.animal === secondCard.dataset.animal) {
  // disableCards();
  console.log("hello");
  return;
}
}

checkForMatch(firstCard, secondCard);







});
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  window.location.reload();
});


const timerFunction = () => {
  if (started) {
    timer.textContent = `Timer: ${timeMinutes}:${timeSeconds}`;
    timeSeconds++;
    if (timeSeconds === 60) {
      timeSeconds = 0;
      timeMinutes++;
    }
  }
};
const myTimeout = setInterval(timerFunction, 1000);




    
  //   if (!hasFlippedCard) {
  //     hasFlippedCard = true;
  //     firstCard = this;
  //    return;
  //   }
  // }
    //  cards.forEach((card) => card.addEventListener("click", flipCard));

// secondCard = this;
// hasFlippedCard = false;

// function checkForMatch() {
// if (firstCard.data.animal === secondCard.data.animal) {
//   disableCards();
//   console.log(`checkForMatch`)
//   return;
// }

// unflipCards();
// }

// checkForMatch();

// function disableCards() {
// firstCard.removeEventListener('click', flipCard);
// secondCard.removeEventListener('click', flipCard);
// }

// function unflipCards() {
// setTimeout(() => {
//   firstCard.classList.remove('flip');
//   secondCard.classList.remove('flip');
// }, 1500);
// }
// });
function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  })}


resetButton.addEventListener("click", (e) => {
 shuffle();
});


// const myTimeout = setInterval(timerFunction, 500); // Needs to be finished, duration of flip time -- if it matches it keeps it on the screen for a certain time -- Jessica 

//shuffle function
// function shuffle() {
//   cards.forEach(card => {
//     let shuffledCards = Math.floor(Math.random() * array.length); //what array to use with our code?
//     card.style.order = shuffledCards;
//   });
// }

})();