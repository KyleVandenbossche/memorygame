//code that runs the count up timer

//timer needs to start (event listener) when user clicks their first card
// const minutesLabel = document.getElementById("minutes");
// const secondsLabel = document.getElementById("seconds");
// let totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   const valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }
let started = false;

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", (e) => {
  started = true;
  startButton.style.backgroundColor = "white";
  startButton.style.color = "green";
  timer.style.backgroundColor = "white";
  timer.style.color = "green";
});
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  window.location.reload();
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
const myTimeout = setInterval(timerFunction, 1000);

//look at Matt's random name code for random cards?



// Select all cards to assign a flip function on click

(() => {
    

  const card = document.querySelector('.memory-card');
  card.addEventListener('click', function() {
    card.classList.toggle('flip');
  });


  
} )();


