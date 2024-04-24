const inputs = document.querySelector(".inputs")
hintTag = document.querySelector(".hint span")
guessLeft = document.querySelector(".guess-left span")
wrongLetter = document.querySelector(".wrong-letter span")
resetBtn = document.querySelector(".reset-btn")
const nextLevelBtn = document.querySelector(".next-level")
typingInput = document.querySelector(".typing-input")

let currentLevel = 0; 
let totalGuesses = 10;
let currentWordIndex = 0; 
let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    const levelWords = wordList[currentLevel];
    const ranItem = levelWords[currentWordIndex];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = [];
    incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = totalGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

function startNextLevel() {
    currentLevel++; 
    currentWordIndex = 0; 
    totalGuesses = 10; 
    nextLevelBtn.style.display = "none"; 
    resetBtn.style.display = "block"; 
    randomWord(); 
}


function checkLevelCompletion() {
    if (currentWordIndex === 5) { 
        currentWordIndex = 0; 
        currentLevel++; 
        resetBtn.style.display = "none"; 
        nextLevelBtn.style.display = "block";
        alert("Onnea! Pääset seuraavalle tasolle!");
    }
}



function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) &&
        !correctLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            totalGuesses--;
            guessLeft.innerText = totalGuesses;
            incorrectLetters.push(` ${key}`);
            wrongLetter.innerText = incorrectLetters;
        }
       
    }
    typingInput.value = "";

    setTimeout(() => {
        if (correctLetters.length === word.length) {
            currentWordIndex++; 
            checkLevelCompletion(); 
            randomWord(); 
        } else if (totalGuesses < 1) {
            alert("Peli loppui! Sinulla ei ole arvauksia jäljellä!");
            
        }
    }, 100);
}

function startNextLevel() {
    currentLevel++; 
    currentWordIndex = 0; 
    nextLevelBtn.style.display = "none"; 
    resetBtn.style.display = "block"; 
    randomWord(); 
}


resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
nextLevelBtn.addEventListener("click", startNextLevel);


randomWord();