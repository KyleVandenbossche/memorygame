(() => {

    const cards = document.querySelectorAll(".memory-card"); 
    const startButton = document.getElementById("start-button"); 
    const timer = document.querySelector("#timer");
    const resetButton = document.querySelector("#reset-button");
    const myTimeout = setInterval(timerFunction, 1500);

    // function startTheTimer(event) {
    //   event.preventDefault();
    //   startButton.addEventListener("click", startTheTimer);     

    // const timerFunction = () => {
    //     if (started) {
    //       timer.textContent = `Timer: ${timeMinutes}:${timeSeconds}`;
    //       timeSeconds++;
    //       if (timeSeconds === 60) {
    //         timeSeconds = 0;
    //         timeMinutes++;
    //       }
    //     }
    //   };

    // function shuffle() {
    //     cards.forEach((card) => {
    //       let randomPos = Math.floor(Math.random() * 16);
    //       card.style.order = randomPos;
    //     });
    //   }
    //   startButton.addEventListener("click", (e) => {
    //     started = true;
    //     shuffle(); 
    //     startButton.style.backgroundColor = "white";
    //     startButton.style.color = "green";
    //     timer.style.backgroundColor = "white";
    //     timer.style.color = "green"; 
})();  
