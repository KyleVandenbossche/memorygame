(() => {
  let started = false; // timer starts at off -- Maggie

  // HTML CALLS
  const cards = document.querySelectorAll(".memory-card"); // calling the memory card html
  const startButton = document.getElementById("start-button"); // calling the start button
  const timer = document.querySelector("#timer");
  const resetButton = document.querySelector("#reset-button");

  // DECLARED VARS
  let hasFlippedCard = false;
  let timeSeconds = 0;
  let timeMinutes = 0;

  //FUNCTIONS (moved to the top so that we can call when needed)
  function shuffle() {
    cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    });
  }

  // THIS START BUTTON STARTS THE GAME
  startButton.addEventListener("click", (e) => {
    // this starts the game, cannot flip cards without pressing the start button
    started = true;
    shuffle(); //shuffles the cards when you click start so they don't start in the same order.
    startButton.style.backgroundColor = "white";
    startButton.style.color = "green";
    timer.style.backgroundColor = "white";
    timer.style.color = "green";

    let firstCard = null;
    let secondCard = null;

    // THIS IS THE FLIP CARD FUNCTION
    function flipCard(event) {
      // this function simply flips the card
      this.classList.add("flip"); // the classlist.add only flips one way -- toggle flips multiple ways
      console.log(event.target.dataset.animal);

      if (firstCard === null) {
        firstCard = event.target; // assigns firstCard as the variable if a div/img is clicked
      } else {
        secondCard = event.target; // assigns secondCard as the variable if a div/img is clicked

        if (firstCard.dataset.animal === secondCard.dataset.animal) {
          // compares the 2 clicks img dataset, if they are the same a MATCH is returned
          console.log("match");

          firstCard.style.visibility = "hidden";
          secondCard.style.visibility = "hidden";
        }

        if (firstCard.dataset.animal != secondCard.dataset.animal) {
          // compares the 2 clicks img dataset, if they are not the same a NO MATCH is returned
          console.log("no match");

          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");

          //
          // IF THEY DO NOT MATCH, WE NEED TO FLIP THEM OVER AGAIN, AND LOOP THROUGH THE FLIP FUNCTION UNTIL THEY MATCH
          //
        }

        firstCard = null;
        secondCard = null;
      }
    }
    cards.forEach((card) => card.addEventListener("click", flipCard));

    // checkForMatch();

    // function checkForMatch(){

    //   firstCard = null; // assigning no value to firstCard
    //   secondCard = null; // assigning no value to secondCard

    //   const cards = document.querySelectorAll(".memory-card");
    //   cards.addEventListener("click", (event) => {

    //     if (firstCard === null){
    //      firstCard = event.target; // event.target (if the event happens of clicking) -- it assigns the click as firstCard
    //      } else {
    //      secondCard = event.target; // event.target (if the event happens of clicking) -- it assigns the click as secondCard

    //      if (firstCard.target.dataset.animal === secondCard.target.dataset.animal){
    //       console.log('MATCH');
    //      }

    // }})

    // }

    //   if (!hasFlippedCard) { // if nothing happens nothing is assigned
    //     hasFlippedCard = true;  // if this happens, continue
    //     firstCard = this; // the first card is -- this variable represents the card clicked
    //     console.log('hello');
    //    return;
    //   }

    // secondCard = this;
    // hasFlippedCard = false;

    // function checkForMatch() {
    // if (firstCard.dataset.animal === secondCard.dataset.animal) {
    //   alert("MATCH");
    //   return;
    // }
    // }

    // checkForMatch(firstCard, secondCard);
  });

  resetButton.addEventListener("click", (e) => {
    window.location.reload();
    shuffle();
  });

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
  const myTimeout = setInterval(timerFunction, 500); // Needs to be finished, duration of flip time -- if it matches it keeps it on the screen for a certain time -- Jessica
})();
