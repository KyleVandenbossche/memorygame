
(() => {
let started = false;
const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", (e) => {
  started = true;
  function flipCard() {
    this.classList.add("flip");
    
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     return;
    }
  }
     cards.forEach((card) => card.addEventListener("click", flipCard));

secondCard = this;
hasFlippedCard = false;

function checkForMatch() {
if (firstCard.data.animal === secondCard.data.animal) {
  disableCards();
  console.log(`checkForMatch`)
  return;
}

unflipCards();
}

checkForMatch();

function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
}, 1500);
}
});
function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
    
  });
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
 shuffle();
});

const timer = document.querySelector("#timer");


let timeSeconds = 0;
let timeMinutes = 0;

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

const myTimeout = setInterval(timerFunction, 500);

//shuffle function
// function shuffle() {
//   cards.forEach(card => {
//     let shuffledCards = Math.floor(Math.random() * array.length); //what array to use with our code?
//     card.style.order = shuffledCards;
//   });
// }

})();