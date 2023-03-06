(() => {

  // DECLARED VARS
  let started = false; //timer starts when true
  let timeSeconds = 0;
  let timeMinutes = 0;

  let firstCard = null; //allows user to choose first/second cards
  let secondCard = null;
  let matchSound = new Audio('./match.wav') //audio plays when match is found


  // HTML CALLS

  const cards = document.querySelectorAll(".memory-card"); // calling the memory card html
  const startButton = document.getElementById("start-button"); // calling the start button
  const timer = document.querySelector("#timer");
  const resetButton = document.querySelector("#reset-button");



  //FUNCTIONS

  function shuffle() {
    cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    });
  }

  const timerFunction = () => {
    if (started) {
      timer.textContent = `Timer: ${timeMinutes}:${timeSeconds}`;
      timeSeconds++;

      startButton.style.backgroundColor = "white";
      startButton.style.color = "#5D4996";
      timer.style.backgroundColor = "white";
      timer.style.color = "#5D4996";

      if (timeSeconds === 60) {
        timeSeconds = 0;
        timeMinutes++;
      }
    }
  };

  function unFlipCards() {
    setTimeout(() => {
      firstCard.parentNode.classList.remove('flip'); //removing class, not card
      secondCard.parentNode.classList.remove('flip');

      firstCard = null;  //null allows for future card1/2 choices to be made by user if NOT match
      secondCard = null;
    }, 1000); //1 second before flipping back over
  }

  function gotMatch() {
    firstCard.parentNode.classList.add('dim');
    secondCard.parentNode.classList.add('dim');

    firstCard = null; //null allows for future card1/2 choices to be made by user IF match
    secondCard = null;

  }

  function flipCard(event) {
    if (firstCard != null && secondCard != null) {
      console.log(firstCard, secondCard);
      return; //exits loop, disabling additional flips until previous flip pair has gone through code below
    }

    event.target.parentNode.classList.add('flip');
    console.log(event.target.dataset.animal);

    if (firstCard === null) {
      firstCard = event.target; // assigns firstCard as the variable if a div/img is clicked
    } else {
      secondCard = event.target; // assigns secondCard as the variable if a div/img is clicked

      if (firstCard.dataset.animal === secondCard.dataset.animal) {
        // compares the 2 clicks img dataset, if they are the same a MATCH is returned
        //console.log("match");
        gotMatch(); //calls function to change css display for match
        matchSound.play(); //sound plays if match


      } else {
        console.log("no match");
        unFlipCards(); //calls function to flip cards facedown again
      }
    }
  }




  // THIS START BUTTON STARTS THE GAME
  startButton.addEventListener("click", (event) => {
    //cannot flip cards until start button pressed
    started = true; //false -> true only once start button is clicked
    timerFunction(); //timerFunction called to begin
    shuffle(); //shuffles the cards when you click start so they don't start in the same order.
    cards.forEach((card) => card.addEventListener("click", (cardClick) => {
      flipCard(cardClick);
    }))
  });

  resetButton.addEventListener("click", (e) => {
    window.location.reload(e);
    shuffle();
  });


  const myTimeout = setInterval(timerFunction, 1000); // Needs to be finished, duration of flip time -- if it matches it keeps it on the screen for a certain time -- Jessica


})();