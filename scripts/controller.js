import * as model from "./model.js";
import questionsView from "./view.js";

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();
    console.log(model.state.data);
    questionsView.renderQuestion(model.state.data, model.state.currentQuestion);
    model.state.currentQuestion++;
    console.log(model.state.currentQuestion);
  } catch {}
};
/* 
const controlNextQuestion= function(){

} */

const init = function () {
  questionsView.addHandlerRender(controlQuizzData);
  //temporary
  questionsView.addHandlerNext();
  /*   document
    .querySelector(".question--next-btn")
    .addEventListener(
      "click",
      questionsView.renderQuestion(
        model.state.data,
        model.state.currentQuestion
      )
    ); */
};
init();
