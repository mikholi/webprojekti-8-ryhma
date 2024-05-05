const questions = [
    {
        question: "Mikä oli ensimmäinen maailmanlaajuinen konflikti, johon osallistui useita suuria valtioita?",
        answers: [
            { text: "Ranskan vallankumous", correct: false},
            { text: "Napoleoniaika", correct: false},
            { text: "Kolmikymmenvuotinen sota", correct: false},
            { text: "Ensimmäinen maailmansota", correct: true},
        ]
    },
    {
        question: "Kuka oli Rooman keisari, joka oli vallassa, kun Rooman valtakunta hajosi länsimaiseen ja itämaiseen osaan?",
        answers: [
            {text: "Julius Caesar", correct: false},
            {text: "Augustus", correct: false},
            {text: "Diocletianus", correct: true},
            {text: "Constantinus Suuri", correct: false},
        ] 
    },
    {
        question: "Missä maanosassa sijaitsee Machu Picchu, Inkojen muinainen kaupunki?",
        answers: [
            {text: "Afrikka", correct: false},
            {text: "Eurooppa", correct: false},
            {text: "Etelä-Amerikka", correct: true},
            {text: "Aasia", correct: false},
        ]
    },
    {
        question: "Mikä tapahtuma aloitti ensimmäisen maailmansodan?",
        answers: [
            {text: "Sarajevon murha", correct: true},
            {text: "Berlinin muuri rakennettiin", correct: false},
            {text: "Napoleonin hyökkäys Venäjälle", correct: false},
            {text: "Rooman valtakunnan hajoaminen", correct: false},
        ]
    },
    {
        question: "Kuka oli Amerikan ensimmäinen presidentti?",
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "Abraham Lincoln", correct: false},
            {text: "George Washington", correct: true},
            {text: "John Adams", correct: false},
        ]
    },
    {
        question: "Mitkä kaksi valtiota olivat ensimmäisen maailmansodan päävastustajia?",
        answers: [
            {text: "Saksa ja Venäjä", correct: false},
            {text: "Saksa ja Ranska", correct: true},
            {text: "Iso-Britannia ja Ranska", correct: false},
            {text: "Yhdysvallat ja Japani", correct: false},
        ]
    },
    {
        question: "Mikä oli Kreikan tunnetuin antiikin ajan kaupunkivaltio?",
        answers: [
            {text: "Rooma", correct: false},
            {text: "Ateena", correct: true},
            {text: "Sparta", correct: false},
            {text: "Troija", correct: false},
        ]
    },
    {
        question: "Mikä valtio oli ensimmäinen lähetystyömaa Aasiassa?",
        answers: [
            {text: "Portugali", correct: true},
            {text: "Espanja", correct: false},
            {text: "Hollanti", correct: false},
            {text: "Englanti", correct: false},
        ]
    },
    {
        question: "Mikä valtio oli ensimmäinen, joka tunnusti Yhdysvallat itsenäiseksi valtioksi?",
        answers: [
            {text: "Ranska", correct: true},
            {text: "Iso-Britannia", correct: false},
            {text: "Espanja", correct: false},
            {text: "Venäjä", correct: false},
        ]
    },
    {
        question: "Missä vuosisadalla Black Death (musta surma) riehui Euroopassa?",
        answers: [
            {text: "15. vuosisadalla", correct: false},
            {text: "16. vuosisadalla", correct: false},
            {text: "14. vuosisadalla", correct: true},
            {text: "13. vuosisadalla", correct: false},
        ]
    },
    {
        question: "Mikä oli Kylmän sodan aikana tunnetuin toimintatapa, jossa Yhdysvallat ja Neuvostoliitto kilpailivat ylivoimaisesta asemasta maailmassa?",
        answers: [
            {text: "Maailmanlaajuiset sotilasliitot", correct: false},
            {text: "Avaruuskilpailu", correct: true},
            {text: "Taloudellinen kilpailu", correct: false},
            {text: "Kulttuurivallan laajentaminen", correct: false},
        ]
    },
    {
        question: "Mikä oli aikakausi, jolloin ihmiset siirtyivät metsästäjä-keräilijöistä maanviljelyyn ja pysyvään asutukseen?",
        answers: [
            {text: "Mesoliittinen aikakausi", correct: false},
            {text: "Neoliittinen aikakausi", correct: true},
            {text: "Paleoliittinen aikakausi", correct: false},
            {text: "Mesopotamian aikakausi", correct: false},
        ]
    },
];



const questionelement = document.getElementById("question");
const vastauslaatikkot = document.getElementById("vastauslaatikot");
const seuraavanappii = document.getElementById("seuraavanappi");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    seuraavanappii.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionelement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("butt");
        vastauslaatikkot.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    seuraavanappii.style.display = "none";
    while(vastauslaatikkot.firstChild){
        vastauslaatikkot.removeChild(vastauslaatikkot.firstChild);
    }

}

function selectAnswer(e){
    const selectedbutt = e.target;
    const isCorrect = selectedbutt.dataset.correct=== "true";
    if(isCorrect){
        selectedbutt.classList.add("correct");
        score++;
    }else{
        selectedbutt.classList.add("incorrect");
    }
    Array.from(vastauslaatikkot.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    seuraavanappii.style.display ="block";
}

function showScore(){
    resetState();
    questionelement.innerHTML = "You scored "+score+ " out of " + questions.length+"!";
    seuraavanappii.innerHTML = "Play Again"
    seuraavanappii.style.display = "block";
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

seuraavanappii.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();