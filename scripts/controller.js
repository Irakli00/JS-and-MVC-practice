import * as model from "./model.js";
import questionsView from "./view.js";

let currentQ;

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();
    console.log(model.state.data);
    questionsView.renderQuestion(model.state.data, 0);
    currentQ = [...model.state.data];
    return model.state.data;
  } catch {}
};

const controlNextQuestion = function () {
  model.state.currentQuestion++;
  console.log(model.state.currentQuestion);

  questionsView.renderQuestion(currentQ, model.state.currentQuestion);
};

const controlPreviousQuestion = function () {
  model.state.currentQuestion--;
  questionsView.renderQuestion(currentQ, model.state.currentQuestion);
  console.log(model.state.currentQuestion);
};

const controlAnswers = function () {
  const answer = questionsView.answers;
  const correctAnswer = questionsView._data.correct_answer;

  const optionsData = Array.from(
    questionsView._parentElement.querySelectorAll("p")
  );

  console.log(answer);
  console.log(correctAnswer);
};

const init = function () {
  questionsView.addHandlerRenderFirst(controlQuizzData);
  questionsView.addHandlerNext(controlNextQuestion);
  questionsView.addHandlerPrev(controlPreviousQuestion);
  questionsView.addHandlerAnswer(controlAnswers);
};
init();
