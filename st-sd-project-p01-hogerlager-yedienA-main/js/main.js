console.log('Main loaded');

let counter = 0;
let credits = 0;
let dice = -1;
let gameActive = false;

const gooiButton = document.querySelector(".gooi");
const resetButton = document.querySelector(".reset");
const higherButton = document.querySelector(".higherButton");
const lowerButton = document.querySelector(".lowerButton");
const resultElement = document.querySelector(".result");
const playerCreditsView = document.querySelector(".player-credits");
const computerCreditsView = document.querySelector(".computer-credits");

// Button to roll the dice
gooiButton.addEventListener("click", function() {
    if (!gameActive) {
        counter++;
        dice = Math.ceil(Math.random() * 6);
        resultElement.textContent = dice;
        gameActive = true; // Mark game as active
    }
});

// Reset button
resetButton.addEventListener("click", function() {
    counter = 0;
    credits = 0;
    gameActive = false; // Mark game as inactive
    playerCreditsView.textContent = "0";
    computerCreditsView.textContent = "0";
    resultElement.textContent = "0";
});

// Function to show credits
function showCredits() {
    computerCreditsView.textContent = credits;
    playerCreditsView.textContent = credits;
}

// Higher button logic
higherButton.addEventListener("click", function() {
    if (gameActive) {
        const newRandomNumber = Math.ceil(Math.random() * 6);
        
        if (dice < newRandomNumber) {
            credits++;
        } else {
            credits--;
        }
        
        if (credits >= 5) {
            alert("You won!");
        }
        
        showCredits();
        gameActive = false; // End the game round
    }
});

// Lower button logic
lowerButton.addEventListener("click", function() {
    if (gameActive) {
        const newRandomNumber = Math.ceil(Math.random() * 6);
        
        if (dice > newRandomNumber) {
            credits++;
        } else {
            credits--;
        }
        
        showCredits();
        gameActive = false; // End the game round
    }
});


