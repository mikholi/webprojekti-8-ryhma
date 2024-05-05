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
  const scoreElement = document.getElementById("score");
  highScoresList = document.getElementById("high-scores-listt");
  
  let currentQuestion = 0;
  let score = 0;
  let parastulos = JSON.parse(localStorage.getItem("parastulos")) || [];
  updateScoreboard();
  
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
          selectedButton.classList.add("correct");
          score++;
      } else {
          selectedButton.classList.add("incorrect");
      }
  
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
          showQuestion();
      } else {
          setTimeout(showResult, 1000); // Delay the result display to allow the player to see their final score before the alert
      }
  
      scoreElement.textContent = `Pisteet: ${score} | Paras tulos: ${parastulos[0] ? parastulos[0].score : 0}`;
  }
  
  function showResult() {
      const playerName = prompt("Peli loppui! Syötä nimesi:");
      if (playerName) {
          const playerScore = { name: playerName, score: score };
          parastulos.push(playerScore);
          parastulos.sort((a, b) => b.score - a.score);
          localStorage.setItem("parastulos", JSON.stringify(parastulos));
          updateScoreboard();
          alert(`Sait ${score}/${quizData.length} oikein! Paras tulos: ${score}`);
      }
  }
  
  function updateScoreboard() {
    localStorage.setItem("parastulos", JSON.stringify(parastulos));
    if (currentQuestion >= quizData.length) {
        window.location.href = "kooste.html"; // Redirect to the high scores page only if the game is finished
    }
}


  
  showQuestion();