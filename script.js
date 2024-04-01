"use strict";

const userGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const secretNumber = document.querySelector(".number");
const highscore = document.querySelector(".highscore");

let score = 20;
let randomNumber = Math.round(Math.random() * 20);
const againBtn = document.querySelector(".again");
const background = document.querySelector("body");

clearAndFocusGuess()

function guessNumber() {
    if (!userGuess.value) {
        message.textContent = "🚨 No number";
    } else if (score > 1 && userGuess.value) {
        userGuess.value;
        if (userGuess.value > randomNumber) {
            message.textContent = "📈 Too High!";
            changeScore();
            clearAndFocusGuess();
        } else if (userGuess.value < randomNumber) {
            message.textContent = "📉 Too Low!";
            changeScore();
            clearAndFocusGuess();
        } else {
            correctNumber();
        }
    } else {
        message.textContent = "🧨 You lose the game!";
        changeScore();
        disableInput();
    }
}

// When player wins 
function correctNumber() {
    message.textContent = "🎉 Correct number!";
    background.style.backgroundColor = "#60b347";
    secretNumber.textContent = randomNumber;
    secretNumber.style.width = "300px"
    saveHighscore();
    disableInput();
}

// Restart game
function again() {

    enableInput()
    score = 20;
    background.style.backgroundColor = "#222";
    message.textContent = "Start guessing...";
    secretNumber.textContent = "?";
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 20);
    clearAndFocusGuess();
}

function clearAndFocusGuess() {
    userGuess.value = "";
    userGuess.focus();
}

function saveHighscore() {
    let scoreValue = score;
    let highscoreValue = Number(highscore.textContent);
    if (scoreValue > highscoreValue) {
        highscore.textContent = scoreValue;
    }
}

function changeScore() {
    score--;
    document.querySelector(".score").textContent = score;
}

function disableInput() {
    checkBtn.disabled = true;
    checkBtn.style.backgroundColor = "#ccc"
    checkBtn.style.cursor = "default"
    userGuess.disabled = true;

}

function enableInput() {
    checkBtn.disabled = false;
    checkBtn.style.backgroundColor = "#eee"
    checkBtn.style.cursor = "pointer"
    userGuess.disabled = false;
}

checkBtn.addEventListener("click", guessNumber);
userGuess.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        guessNumber();
    }
});

againBtn.addEventListener("click", again);
