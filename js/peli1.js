const quizData = [
    {
      question: "Minkä maan lippu?",
      flag: "./img/ranska.png",
      options: ["Ranska", "Espanja", "Italia", "Alankomaat"],
      answer: "Ranska"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/argentiina.png",
      options: ["Uruguay", "Guatemala", "Honduras", "Argentiina"],
      answer: "Argentiina"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/saksa.png",
      options: ["Belgia", "Kiina", "Liettua", "Saksa"],
      answer: "Saksa"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const flagElement = document.getElementById("flag");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  
  let currentQuestion = 0;
  let score = 0;
  let highScore = localStorage.getItem("Paras tulos") || 0;
  scoreElement.textContent = `Pisteet: ${score} | Paras tulos: ${highScore}`;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    flagElement.src = question.flag;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      selectedButton.style.backgroundColor = "green";
      score++;
    } else {
      selectedButton.style.backgroundColor = "red";
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
    
    scoreElement.textContent = `Pisteet: ${score} | Paras tulos: ${highScore}`;
  }
  
  function showResult() {
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("Paras tulos", highScore);
    }

    quiz.innerHTML = `
      <h1>Peli loppui!</h1>
      <p>pisteet: ${score}/${quizData.length}</p>
      <p>Paras tulos: ${highScore}</p>
    `;
  }
  
  function startQuizAgain() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
  }
  
  showQuestion();
  