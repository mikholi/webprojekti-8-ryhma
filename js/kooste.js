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
