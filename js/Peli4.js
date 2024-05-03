const problemElement = document.querySelector(".problem")
const myForm = document.querySelector(".my-form")
const myField = document.querySelector(".my-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")
const progressBar = document.querySelector(".progress-inner")
const endMessage = document.querySelector(".end-message")
const resetButton = document.querySelector(".reset-button")

let state ={
    score: 0,
    wrongAnswers: 0
}

function updateProblem() {
    state.currentProblem = generateProblem()
    problemElement.innerHTML =`${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    myField.value = ""
    myField.focus()
}

updateProblem()

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem() {
    return {
        numberOne: generateNumber(10),
        numberTwo: generateNumber(10),
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
}

myForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    let correctAnswer
    if (state.currentProblem.operator == "+") correctAnswer = state.currentProblem.numberOne + state.currentProblem.numberTwo
    if (state.currentProblem.operator == "-") correctAnswer = state.currentProblem.numberOne - state.currentProblem.numberTwo
    if (state.currentProblem.operator == "x") correctAnswer = state.currentProblem.numberOne * state.currentProblem.numberTwo

    if (parseInt (myField.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updateProblem()
        renderProgressBar()
    } else {
        state.wrongAnswers++
        mistakesAllowed.textContent = 2 - state.wrongAnswers
        problemElement.classList.add("animate-wrong")
        setTimeout(() => problemElement.classList.remove("animate-wrong") , 450)

    }
    checkLogic()
}

function checkLogic() {
    // if you won
    if (state.score === 10) {
        endMessage.textContent = "Congrats! You won."
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }


    //if you lost
    if(state.wrongAnswers === 3) {
        endMessage.textContent = "Sorry! You lost."
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }
}

resetButton.addEventListener("click", resetGame)

function resetGame() {
    document.body.classList.remove("overlay-is-open")
    updateProblem()
    state.score = 0
    state.wrongAnswers = 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()
}

function renderProgressBar() {
    progressBar.style.transform = `scaleX(${state.score / 10})`
}