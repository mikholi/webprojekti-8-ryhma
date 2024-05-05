// SANASEKOITUS HIGHSCORE
document.addEventListener("DOMContentLoaded", () => {
    const highScoresList = document.getElementById("high-scores-list");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScoresList.innerHTML = "";
    highScores.slice(0, 10).forEach((score, index) => {
        const li = document.createElement("li");
        li.textContent = `${score.name}: ${score.score} pistettä`;
        highScoresList.appendChild(li);
    });
});
// ARVAA OIKEA MAA HIGHSCORE
document.addEventListener("DOMContentLoaded", () => {
    const highScoresList = document.getElementById("high-scores-listt");
    const parastulos = JSON.parse(localStorage.getItem("parastulos")) || [];

    highScoresList.innerHTML = "";
    parastulos.slice(0, 10).forEach((score, index) => {
        const li = document.createElement("li");
        li.textContent = `${score.name}: ${score.score} pistettä`;
        highScoresList.appendChild(li);
    });
});


