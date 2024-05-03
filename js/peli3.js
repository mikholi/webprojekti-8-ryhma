const questions = [
    {
        question: "What animal is in the picture?",
        image:"./img/polar bear.jpg" ,
        answers: [
            { text: "Brown bear", correct: false},
            { text: "Polar bear", correct: true},
            { text: "Black bear", correct: false},
            { text: "Panda", correct: false},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/cat.jpg",
        answers: [
            { text: "Cat", correct: true},
            { text: "Lion", correct: false},
            { text: "Tiger", correct: false},
            { text: "Cheetah", correct: false},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/dog.jpg",
        answers: [
            { text: "Hyena", correct: false},
            { text: "Wolf", correct: false},
            { text: "Coyote", correct: false},
            { text: "Dog", correct: true},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/horse.jpg",
        answers: [
            { text: "Elephant", correct: false},
            { text: "Horse", correct: true},
            { text: "Pony", correct: false},
            { text: "Zebra", correct: false},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/shark.jpg",
        answers: [
            { text: "Whale", correct: false},
            { text: "Orca", correct: false},
            { text: "Dolphin", correct: false},
            { text: "Shark", correct: true},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/capybara.jpg",
        answers: [
            { text: "Guinea pig", correct: false},
            { text: "Squirrel", correct: false},
            { text: "Beaver", correct: false},
            { text: "Capybara", correct: true},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/owl.jpg",
        answers: [
            { text: "Falcon", correct: false},
            { text: "Pigeon", correct: false},
            { text: "Owl", correct: true},
            { text: "Crow", correct: false},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/chimpanzee.jpg",
        answers: [
            { text: "Chimpanzee", correct: true},
            { text: "Gorilla", correct: false},
            { text: "Orangutan", correct: false},
            { text: "Human", correct: false},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/lion.jpg",
        answers: [
            { text: "Jaguar", correct: false},
            { text: "Tiger", correct: false},
            { text: "Leopard", correct: false},
            { text: "Lion", correct: true},
        ]
    },
    {
        question: "What animal is in the picture?",
        image:"./img/sloth.jpg",
        answers: [
            { text: "Armadillo", correct: false},
            { text: "Anteater", correct: false},
            { text: "Sloth", correct: true},
            { text: "Koala", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if(currentQuestion.image){
        const imageElement=document.createElement("img");
        imageElement.src=currentQuestion.image;
        questionElement.appendChild(imageElement);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();