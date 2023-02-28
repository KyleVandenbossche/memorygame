//code that runs the count up timer

//timer needs to start (event listener) when user clicks their first card
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//shuffle function
// function shuffle() {
//   cards.forEach(card => {
//     let shuffledCards = Math.floor(Math.random() * array.length); //what array to use with our code?
//     card.style.order = shuffledCards;
//   });
// }

//jessica's shuffle function
// function shuffle(cardArray) {
//   let m = cardArray.length,
//     t,
//     i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = cardArray[m];
//     cardArray[m] = cardArray[i];
//     cardArray[i] = t;
//   }
//   return cardArray;
// }


//look at Matt's random name code for random cards?
