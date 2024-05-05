
const questions = [
    {
        question: "Missä maassa on eniten Buddhalaisuutta?",
        options: ["Turkki", "Kiina", "Korea", "Suomi"],
        answerIndex: 1 
    },
    {
        question: "Mitä uskontoa Suomessa harjoitetaan eniten?",
        options: ["Kristinusko", "Islam", "Hindulaisuus", "Buddhalaisuus"],
        answerIndex: 0 
    },
    {
        question: "Mitä uskontoa symboli kuvaa?",
        image: "./kuvat/buddha.jpg",
        options: ["Kristinusko", "Islam", "Hindulaisuus", "Buddhalaisuus"],
        answerIndex: 3 
    },
    {
        question: "Missä maassa Islam uskonto on syntynyt?",
        options: ["Thaimaa", "Kreikka","Venäjä", "Lähi-itä"],
        answerIndex: 3 
    },
    {
        question: "Mikä on islamin pyhä kirja?",
        options: ["Raamattu", "Koraani", "Tanak", "Bhagavad Gita"],
        answerIndex: 1 
    },
    {
        question: "Mikä on hindulaisuuden tärkein jumala?",
        options: ["Jumala", "Krishna", "Buddha", "Ganesha"],
        answerIndex: 2 
    },
    {
        question: "Kuka oli Jeesus Kristus?",
        options: ["Profeetta", "Opettaja", "Jumalan poika", "Kuningas"],
        answerIndex: 2 
    },
    {
        question: "Mikä on kristinuskon pyhä kirja?",
        options: ["Raamattu", "Koraani", "Tanak", "Talmud"],
        answerIndex: 0 
    },
    {
        question: "Missä maassa sijaitsee Vatikaani, katolisen kirkon keskus?",
        options: ["Italia", "Ranska", "Saksa", "Espanja"],
        answerIndex: 0 
    },
    {
        question: "Mikä on kristinuskon symboli?",
        options: ["Puolikuu ja tähti", "Risti", "Ohm-merkki", "Davidin tähti"],
        answerIndex: 1 
    },
];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    if (currentQuestion.image) {
        const image = document.createElement('img');
        image.src = currentQuestion.image;
        image.classList.add('question-image');
        questionElement.appendChild(image);
    }

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answerIndex) {
        alert('Oikein!');
        score++;
    } else {
        alert('Väärin! Oikea vastaus oli: ' + currentQuestion.options[currentQuestion.answerIndex]);
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Peli päättyi! Pisteesi: ' + score);
        scoreElement.textContent = 'Pisteesi: ' + score;
    }
}

showQuestion();