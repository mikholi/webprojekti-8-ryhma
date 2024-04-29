const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");


let correctWord, timer, guessesLeft, correctWordCount = 0;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Aika loppui! ${correctWord.toUpperCase()} oli oikea sana!`);
        initGame();
    }, 1000);
}

const initGame = () => {
    guessesLeft = 10;
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    checkBtn.addEventListener("click", checkWord);
}

const gameStartBtn = document.querySelector(".start-game-btn")

const startGame = () => {
    initGame()
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Anna sana tarkistettavaksi!");
    if(userWord !== correctWord) {
        guessesLeft--; 
        if(guessesLeft === 0) {
            alert("Peli loppui, sinulla ei ole enää arvauksia jäljellä!");
            initGame(); 
        } else {
            alert(`Hups! ${userWord} ei ole oikea sana! Sinulla on jäljellä ${guessesLeft} yritystä.`);
        }
    } else {
        correctWordCount++
        if(correctWordCount === 25) {
            alert("Onneksi olkoon! Olet arvannut 25 sanaa oikein!")
            return
        }
        initGame()
    }
    
}
refreshBtn.addEventListener("click", initGame);
gameStartBtn.addEventListener("click", startGame)