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

    

  // const cards = document.querySelector('.memory-card');
  // for(let i = 0; i < cards.length; i++){
  //   cards[i].addEventListener( 'click', function() {
  //   cards[i].classList.toggle('is-flipped');
  // });
  // }
  

  //  const card = document.querySelector('.memory-card');
  //   card.addEventListener('click', function() {
  //     card.classList.toggle('flip');
  //   });
  

  const cardContainer = document.querySelector(".grid-container");
  const cardArray = [
  {
    animal: "Cat-English",
    image: "images/cat1.jpg",
    id: 1,
  },
  {
    animal: "Cat-Espanol",
    image: "images/cat1.jpg",
    id: 2,
  },
  {
    animal: "Dog-English",
    image: "",
    id: 3,
  },
  {
    animal: "Dog-Espanol",
    image: "",
    id: 4,
  },
  {
    animal: "Horse-English",
    image: "",
    id: 5,
  },
  {
    animal: "Horse-Espanol",
    image: "",
    id: 6,
  },
  {
    animal: "Cow-English",
    image: "",
    id: 7,
  },
  {
    animal: "Cow-Espanol",
    image: "",
    id: 8,
  },
  {
    animal: "Mouse-English",
    image: "",
    id: 9,
  },
  {
    animal: "Mouse-Espanol",
    image: "",
    id: 10,
  },
  {
    animal: "Pig-English",
    image: "",
    id: 11,
  },
  {
    animal: "Pig-Espanol",
    image: "assets/hippo.jpg",
    id: 12,
  },
];

const cardImage = document.createElement("img");
  flipCardBack.append(cardImage);
  cardImage.src = shuffledCards[i].image;
  cardImage.alt = shuffledCards[i].animal;
  cardImage.classList.add("card-img");


function shuffle(cardArray) {
  let m = cardArray.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cardArray[m];
    cardArray[m] = cardArray[i];
    cardArray[i] = t;
  }
  return cardArray;
}

  for (let i = 0; i < cardArray.length; i++) {
    const flipCard = document.createElement("img");
    cardContainer.append(flipCard);
    flipCard.classList.add("flip-card");
    const flipCardInner = document.createElement("img");
    flipCard.append(flipCardInner);
    flipCardInner.classList.add("flip-card-inner");
    const flipCardFront = document.createElement("img");
    flipCardInner.append(flipCardFront);
    flipCardFront.classList.add("flip-card-front");
    flipCardFront.setAttribute("data-animal", shuffledCards[i].animal);
    flipCardFront.style.backgroundImage = shuffledCards[i].image;
    const flipCardBack = document.createElement("img");
    flipCardInner.append(flipCardBack);
    flipCardBack.classList.add("flip-card-back");
  };



