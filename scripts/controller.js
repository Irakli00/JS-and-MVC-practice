import * as model from "./model.js";
import * as helper from "./helpers";
import questionsView from "./view.js";
import settingsView from "./settingsView.js";
import progressionView from "./progressionView.js";

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();

    console.log(model.state.data);
    //console.log(model.state.currentQuestion);

    document.querySelector(".start-page").innerHTML = "";

    questionsView.renderQuestion(model.state.data, 0);

    /////////
    progressionView.renderProgression(
      model.state.data,
      model.state.currentQuestion
    );

    progressionView.focusNext(model.state.currentQuestion);
    ///////

    return model.state.data;
  } catch {}
};

const controlNextQuestion = function () {
  model.state.currentQuestion++;

  questionsView.renderQuestion(model.state.data, model.state.currentQuestion);

  ////
  progressionView.focusNext(model.state.currentQuestion);
  ////
};

const controlPreviousQuestion = function () {
  model.state.currentQuestion--;

  questionsView.renderQuestion(model.state.data, model.state.currentQuestion);
  console.log(`current question: ${model.state.currentQuestion}`);

  //
  progressionView.focusPrev(model.state.currentQuestion);
  //
};

const controlAnswers = function () {
  //recieving answers
  let key = `question-${model.state.currentQuestion}`;
  const answerValue = questionsView.answer.answer;

  if (answerValue.trim() !== "") {
    model.state.fullAnswers[key] = answerValue;
  } // Check if answerValue is not an empty string before adding it to fullAnswers

  console.log(model.state.fullAnswers);

  //check if correct
  console.log(`correct: ${helper.decode(questionsView._data.correct_answer)}`);

  questionsView._data.correct_answer = helper.decode(
    questionsView._data.correct_answer
  );

  if (questionsView.answer.answer === questionsView._data.correct_answer) {
    model.state.correctQuestions++;
    console.log(`correct answers: ${model.state.correctQuestions}`);
    controlNextQuestion();
  } else if (questionsView.answer.answer !== "") {
    console.log(`correct answers: ${model.state.correctQuestions}`);
    controlNextQuestion();
  }

  //highlingh chosen one
  console.log(model.state.fullAnswers[key]);
  const huh = document.querySelector(".options--area");
  const arr = Array.from(huh.children);
  const gs = arr.find((el) => el.innerHTML === model.state.fullAnswers[key]);

  console.log(gs);
  gs.classList.add("you--chose--it");
};

const displaySettings = function () {
  settingsView.renderSettings();
};

const controlSubmit = function (data) {
  model.state.settings = data;
  console.log(model.state.settings);
};

const init = function () {
  questionsView.addHandlerRenderFirst(controlQuizzData);
  questionsView.addHandlerNext(controlNextQuestion);
  questionsView.addHandlerPrev(controlPreviousQuestion);
  questionsView.addHandlerAnswer(controlAnswers);
  //
  settingsView.addHandlerSettings(displaySettings);
  settingsView.addHandlerSubmit(controlSubmit);
};
init();
