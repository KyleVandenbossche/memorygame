//code that runs the count up timer

//timer needs to start (event listener) when user clicks their first card
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  const valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", (e) => {
  started = true;
  startButton.style.backgroundColor = "white";
  startButton.style.color = "green";
  timer.style.backgroundColor = "white";
  timer.style.color = "green";
});
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", (e) => {
  window.location.reload();
});

//look at Matt's random name code for random cards?
