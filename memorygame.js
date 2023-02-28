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

//look at Matt's random name code for random cards?



// Select all cards to assign a flip function on click

(() => {
    

  const card = document.querySelector('.memory-card');
  card.addEventListener('click', function() {
    card.classList.toggle('flip');
  });


  
} )();

