function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
console.log("heloo");
/*
var iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("yeah there is a  chocolate");
} else {
  alert("Aww, but there is the favone left");
}*/
/*
function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
function mul(x) {
  return function mul(y) {
    return x * y;
  };
}*/
/*
var myVariable = document.querySelector("h1");

var myImage = document.querySelector("img");
myImage.onclick = function() {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/ff2.png");
  } else {
    myImage.setAttribute("src", "images/ff.png");
  }
};*/
//add functionality using buttons;
/*
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function() {
  setUserName();
};
*/
//event listner to update the name automatically;
/*
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter the name ");
  para.textContent = "Player 1: " + name;
}*/
document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }
});

//random number game

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessFeild = document.querySelector(".guessFeild");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessFeild.Value);
  if (guessCount === 1) {
    guesses.textContent = "previous guesses: ";
  }
  guesses.textContent += userGuess + "";
  if (userGuess === randomNumber) {
    lastRestult.textContent = "Congratulations !you got it right!";
    lastResult.style.backgroundColor = "green";
    loworHi.textContent = " ";
    setGameOver();
  } else if (guesscount === 10) {
    lastResult.textContent = "!!!Gameover!!!";
    setGameOver();
  } else {
    lastResult.textContent = "!Worng";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      loworHi.textContent = "last guess was too low!";
    } else if (userGuess > randomNumber) {
      loworHi.textContent = "last guess was too high!";
    }
  }
  guessSubmit.addEventListener("click", checkGuess);

  guessCount++;
  guessFeild.value = "";
  guessFelid.focus();
}

function setGameOver() {
  guessFeild.disabled = true;
  guessSubmit.disabled = true;
  resetbutton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetbutton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  guessFeild.disabled = false;
  guessSubmit.disabled = false;
  guessFeild.value = "";
  guessFeild.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = math.floor(Math.random() * 100) + 1;
}

//dfgzdfvzdfv
