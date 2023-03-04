(() => {
  let started = false; // timer starts at off -- Maggie

  // HTML CALLS
  const cards = document.querySelectorAll(".memory-card"); // calling the memory card html
  const startButton = document.getElementById("start-button"); // calling the start button
  const timer = document.querySelector("#timer");
  const resetButton = document.querySelector("#reset-button");

  // DECLARED VARS
  //let hasFlippedCard = false;
  let timeSeconds = 0;
  let timeMinutes = 0;
  let firstCard = null;
  let secondCard = null;
  let flippedCards = 0;



  //FUNCTIONS (moved to the top so that we can call when needed)
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
    console.log(firstCard, secondCard) //don't need line 46 in finished
    setTimeout(() => {
      firstCard.parentNode.classList.remove('flip');
      secondCard.parentNode.classList.remove('flip');
    }, 1000);
  }

  function flipCard(event) {
    // this function simply flips the card

    //CHANGE EVENT TARGETS TO TARGET EVENTS PARENT NODE
    //event.target.classList.add("flip"); // the classlist.add only flips one way -- toggle flips multiple ways
    event.target.parentNode.classList.add('flip');
    console.log(event.target.dataset.animal);

    if (firstCard === null) {
      firstCard = event.target; // assigns firstCard as the variable if a div/img is clicked
    } else {
      secondCard = event.target; // assigns secondCard as the variable if a div/img is clicked

      if (firstCard.dataset.animal === secondCard.dataset.animal) {
        // compares the 2 clicks img dataset, if they are the same a MATCH is returned
        console.log("match");

        firstCard.parentNode.style.opacity = 0;
        secondCard.parentNode.style.opacity = 0;


        //CARD OPACITY SPEED TOO FAST  -- OPACITY VS VISIBILITY?
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
    // this starts the game, cannot flip cards without pressing the start button
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