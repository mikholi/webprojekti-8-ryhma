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
      options: ["Belgia", "Saksa", "Liettua", "Moldova"],
      answer: "Saksa"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/ruotsi.png",
      options: ["Tanska", "englanti", "Ruotsi", "Suomi"],
      answer: "Ruotsi"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/latvia.png",
      options: ["Puola", "Venäjä", "Liettua", "Latvia"],
      answer: "Latvia"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/saudi.arabia.png",
      options: ["Sudan", "Saudi-arabia", "Pakistan", "Kuwait"],
      answer: "Saudi-arabia"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/norja.png",
      options: ["Norja", "Tanska", "Färsaaret", "Georgia"],
      answer: "Norja"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/liberia.png",
      options: ["Yhdysvallat", "Liberia", "Malesia", "Puerto rico"],
      answer: "Liberia"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/monaco.png",
      options: ["Puola", "Singapore", "Monaco", "Tunisia"],
      answer: "Monaco"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/kanada.png",
      options: ["Turkki", "tsekki", "sveitsi", "Kanada"],
      answer: "Kanada"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/meksiko.png",
      options: ["Italia", "Meksiko", "Venezuela", "Kamerun"],
      answer: "Meksiko"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/somalia.png",
      options: ["Guatemala", "Palau", "San marino", "Somalia"],
      answer: "Somalia"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/puola.png",
      options: ["Puola", "Peru", "Malta", "Monaco"],
      answer: "Puola"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/venäjä.png",
      options: ["Slovakia", "Slovenia", "Venäjä", "Unkari"],
      answer: "Venäjä"
    },
    {
      question: "Minkä maan lippu?",
      flag: "./img/hongkong.png",
      options: ["Vietnam", "Kiina", "Tunisia", "Hongkong"],
      answer: "Hongkong"
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
  