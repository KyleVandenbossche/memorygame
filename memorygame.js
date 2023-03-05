(() => {

  // DECLARED VARS
  let started = false; //timer starts when true
  let timeSeconds = 0;
  let timeMinutes = 0;

  let firstCard = null; //allows user to choose first/second cards
  let secondCard = null;


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
      startButton.style.color = "green";
      timer.style.backgroundColor = "white";
      timer.style.color = "green";

      if (timeSeconds === 60) {
        timeSeconds = 0;
        timeMinutes++;
      }
    }
  };

  function unFlipCards(firstCard, secondCard) {
    setTimeout(() => {
      firstCard.parentNode.classList.remove('flip'); //removing class, not card
      secondCard.parentNode.classList.remove('flip');
    }, 3000);
  }

  function gotMatch(firstCard, secondCard) {
    firstCard.parentNode.style.opacity = 0.5; //instead of adding class, we have applied style here
    secondCard.parentNode.style.opacity = 0.5;
  }

  function flipCard(event) {
    event.target.parentNode.classList.add('flip');
    console.log(event.target.dataset.animal);

    if (firstCard === null) {
      firstCard = event.target; // assigns firstCard as the variable if a div/img is clicked
    } else {
      secondCard = event.target; // assigns secondCard as the variable if a div/img is clicked

      if (firstCard.dataset.animal === secondCard.dataset.animal) {
        // compares the 2 clicks img dataset, if they are the same a MATCH is returned
        //console.log("match");
        gotMatch(firstCard, secondCard);

      } else {
        console.log("no match");
        unFlipCards(firstCard, secondCard);
      }

      firstCard = null;
      secondCard = null;
    }
  }




  // THIS START BUTTON STARTS THE GAME
  startButton.addEventListener("click", (event) => {
    //cannot flip cards until start button pressed
    started = true;
    timerFunction();
    shuffle(); //shuffles the cards when you click start so they don't start in the same order.
    cards.forEach((card) => card.addEventListener("click", (cardClick) => {
      flipCard(cardClick);
    }))
  });

  resetButton.addEventListener("click", (e) => {
    window.location.reload(e);
    shuffle();
  });


  const myTimeout = setInterval(timerFunction, 500); // Needs to be finished, duration of flip time -- if it matches it keeps it on the screen for a certain time -- Jessica


})();