//import { quizz } from "./model.js";
//console.log(quizz);
import { loadQuizz } from "./model.js";
const gu = async function () {
  try {
    const huh = await loadQuizz();
    console.log(huh);
  } catch {}
};
gu();

/* const doUKnow = async function () {
  try {
    const askMe = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    );
    const data = await askMe.json();
    const questions = data.results;
    console.log(questions);

    const renderQuestion = function () {
      const allOptions = [
        questions[currentQuestion].incorrect_answers[0],
        questions[currentQuestion].incorrect_answers[1],
        questions[currentQuestion].incorrect_answers[2],
        questions[currentQuestion].correct_answer,
      ];

      let quetionToInsert = `  
      <div>
      <h1>${questions[currentQuestion].question}</h1>
      </div>`;

      questionArea.insertAdjacentHTML("afterbegin", quetionToInsert);

      for (let i = 0; i <= 3; i++) {
        //console.log(allOptions);
        const index = Math.floor(Math.random() * allOptions.length);
        //console.log(`i = ${index}`);
        let optionNext = allOptions.splice(index, 1);
        let optionToInsert = `<div><p>${optionNext}</p></div>`;
        huh.insertAdjacentHTML("beforeend", optionToInsert);
      }
    };
    renderQuestion();

    nextButton.addEventListener("click", () => {
      currentQuestion++;
      huh.innerHTML = ``;
      questionArea.innerHTML = ``;
      renderQuestion();
    });
  } catch {}
}; */
