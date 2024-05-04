const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
highScoresList = document.getElementById("high-scores-list");

let correctWord, timer, guessesLeft, correctWordCount = 0;
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let timerInitValue = 30;
let maxCorrectWordCount = 5;

const updateHighScores = () => {
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "kooste.html";
};


const initTimer = maxTime => {
    clearInterval(timer);
    timeText.innerText = maxTime;
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Aika loppui! ${correctWord.toUpperCase()} oli oikea sana!`);
        initGame();
    }, 1000);
    
};

const initGame = () => {
    initTimer(timerInitValue);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    checkBtn.addEventListener("click", checkWord);
};

const gameStartBtn = document.querySelector(".start-game-btn");

const startGame = () => {
    correctWordCount = 0; 
    guessesLeft = 5;
    initGame();
};

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Anna sana tarkistettavaksi!");

    guessesLeft--;

    if (userWord !== correctWord) {
        correctWordCount = (correctWordCount < 0) ? correctWordCount - 1 : correctWordCount;
        alert(`Hups! ${userWord} ei ole oikea sana! Sinulla on jäljellä ${guessesLeft} yritystä.`);
    } else {
        correctWordCount++;
        initGame();
    }

    if (guessesLeft === 0) {
        if (correctWordCount === maxCorrectWordCount) {
            alert(`Läpäisit pelin! Pisteesi: ${correctWordCount}/${maxCorrectWordCount}`);
        } else {
            alert(`Peli loppui, sinulla ei ole enää arvauksia jäljellä! Pisteesi: ${correctWordCount}/${maxCorrectWordCount}`);
        }
        clearInterval(timer);

        if (correctWordCount > 0) {
            const playerName = prompt("Anna nimesi High Score-taulukkoon:");

            if (playerName) {
                highScores.push({ name: playerName, score: correctWordCount });
                localStorage.setItem("highScores", JSON.stringify(highScores));
                updateHighScores();
            }
        }

        return;
    }
};




refreshBtn.addEventListener("click", initGame);
gameStartBtn.addEventListener("click", startGame);

