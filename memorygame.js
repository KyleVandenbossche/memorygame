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
  let hintButton = document.querySelector('#hint-button');
  const popup = document.querySelector(".popup");
  let youWin = 0;


  // mute button 

  const muteButton = document.querySelector(`#mute-button`);

  muteButton.addEventListener(`click`, (e) => {
      muteButton.style.backgroundColor = "red";
       matchSound = false;
    });




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

        youWin++; // increments each match 
        
        if (youWin === 8){ // in the event all 8 matches happen, we enter a YOU WIN screen
          // console.log("YOU WIN!");
          // alert("You win!");
          popup.style.display = "block";
          popup.textContent = "NICE JOB"
          started = false;
          



        }

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
      startButton.disabled = true; // disables start button 

      function hint(){
        cards.forEach(card => {
          card.classList.add('flip');
          setTimeout(() => card.classList.remove('flip'), 1000);
          let disableHintButton = document.getElementById("hint-button");
          disableHintButton.disabled = true;
        })
      }
    
      hintButton.addEventListener("click", hint);




    }))
  });

  resetButton.addEventListener("click", (e) => {
    window.location.reload(e);
    shuffle();
  });


  const myTimeout = setInterval(timerFunction, 1000); // Needs to be finished, duration of flip time -- if it matches it keeps it on the screen for a certain time -- Jessica




  // HINT FUNCTION BUTTON
  // HINT FUNCTION BUTTON

  // function hint(){
  //   cards.forEach(card => {
  //     card.classList.add('flip');
  //     setTimeout(() => card.classList.remove('flip'), 1000);
  //     let disableHintButton = document.getElementById("hint-button");
  //     disableHintButton.disabled = true;
  //   })
  // }

  // hintButton.addEventListener("click", hint);

  

 // HINT FUNCTION BUTTON
 // HINT FUNCTION BUTTON


 // MATCH ANIMATION
 // MATCH ANIMATION

//  setTimeout(function() {
//   document.getElementById("match").style.display = "none";
// }, 1000);

})();


//   // HINT FUNCTION BUTTON
//   // HINT FUNCTION BUTTON

//   hintButton.addEventListener("click", hint); // When the hint button is clicked, it calls the hint function


//   function hint(){ // hint function flips all cards for 1 second as a hint to the user
//     cards.forEach(card => {
//       card.classList.add('flip');
//       setTimeout(() => card.classList.remove('flip'), 1000);

//       let disableHintButton = document.getElementById("hint-button"); // Setting the limit to 1 hint per game, disable the hint button
//       disableHintButton.disabled = true;
//     })
//   }

//  // HINT FUNCTION BUTTON
//  // HINT FUNCTION BUTTON


//  // MATCH ANIMATION
//  // MATCH ANIMATION

//  setTimeout(function() {
//   document.getElementById("match").style.display = "none";
// }, 1000);

