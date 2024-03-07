import * as model from "./model.js";
import * as helper from "./helpers";
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
  console.log(`current question: ${model.state.currentQuestion}`);

  questionsView.renderQuestion(currentQ, model.state.currentQuestion);
};

const controlPreviousQuestion = function () {
  model.state.currentQuestion--;
  questionsView.renderQuestion(currentQ, model.state.currentQuestion);
  console.log(`current question: ${model.state.currentQuestion}`);
};

const controlAnswers = function () {
  questionsView._data.correct_answer = helper.decode(
    questionsView._data.correct_answer
  );

  if (questionsView.answers.answer === questionsView._data.correct_answer) {
    model.state.correctQuestions++;
    console.log(`correct answers: ${model.state.correctQuestions}`);
    controlNextQuestion();
  }
};

const init = function () {
  questionsView.addHandlerRenderFirst(controlQuizzData);
  questionsView.addHandlerNext(controlNextQuestion);
  questionsView.addHandlerPrev(controlPreviousQuestion);
  questionsView.addHandlerAnswer(controlAnswers);
};
init();
