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
  questionsView.renderQuestion(currentQ, model.state.currentQuestion);
};

const init = function () {
  questionsView.addHandlerRender(controlQuizzData);
  //temporary
  questionsView.addHandlerNext(controlNextQuestion);
};
init();
