import * as model from "./model.js";
import * as helper from "./helpers";
import questionsView from "./view.js";
import settingsView from "./settingsView.js";
import progressionView from "./progressionView.js";
import resultsView from "./resultsView.js";

const finishGame = function () {
  console.log("vsio");
  resultsView.renderResults(
    model.state.correctQuestions,
    model.state.data.length
  );
};

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();

    console.log(model.state.data);

    document.querySelector(".start-page").innerHTML = "";

    questionsView.renderQuestion(model.state.data, 0);
    //console.log(questionsView.markupArr);
    // console.log(questionsView.markupArr[model.state.currentQuestion]);

    /////////
    progressionView.renderProgression(
      model.state.data,
      model.state.currentQuestion
    );

    progressionView.focusNext(model.state.currentQuestion);
    ///////

    document.querySelector(".results--area").innerHTML = ``; //for now

    return model.state.data;
  } catch {}
};

const controlAnswers = function (target) {
  if (model.state.data.length === model.state.currentQuestion + 1) finishGame();

  //recieving answers
  let key = `question-${model.state.currentQuestion}`;
  const answerValue = questionsView.answer.answer;

  const prev = model.state.fullAnswers[key]; //remembering previous answer to not repeat

  if (answerValue.trim() !== "") {
    console.log(prev);
    model.state.fullAnswers[key] = answerValue;
  } // Check if answerValue is not an empty string before adding it to fullAnswers

  console.log(model.state.fullAnswers);

  //check if correct
  console.log(`correct: ${helper.decode(questionsView._data.correct_answer)}`);

  questionsView._data.correct_answer = helper.decode(
    questionsView._data.correct_answer
  );

  if (
    questionsView.answer.answer === questionsView._data.correct_answer &&
    questionsView.answer.answer != prev
  ) {
    model.state.correctQuestions++;
    console.log(`correct answers: ${model.state.correctQuestions}`);
    controlNextQuestion();
  } else if (questionsView.answer.answer !== "") {
    console.log(`correct answers: ${model.state.correctQuestions}`);
    controlNextQuestion();
  }

  //highlingh chosen one

  //console.log(model.state.fullAnswers[key]);

  //var target = target;
  //console.log(target);

  //target.classList.add("you--chose--it");
  //console.log(target.attributes);

  //now get its innnerhtml and store it?
  //console.log(target.parentNode.innerHTML);
};

const controlPreviousQuestion = function () {
  if (model.state.currentQuestion === 0) return; //finishGame()
  model.state.currentQuestion--;

  questionsView.renderQuestion(model.state.data, model.state.currentQuestion);
  // document.querySelector(".question--area").innerHTML = "kk";
  //console.log(questionsView.markupArr[model.state.currentQuestion]);

  //
  progressionView.focusPrev(model.state.currentQuestion);
  //
};

const controlNextQuestion = function () {
  if (model.state.data.length === model.state.currentQuestion + 1) finishGame();

  model.state.currentQuestion++;

  questionsView.renderQuestion(model.state.data, model.state.currentQuestion);

  //console.log(questionsView.markupArr[model.state.currentQuestion]);

  ////
  progressionView.focusNext(model.state.currentQuestion);
  ////
};

const displaySettings = function () {
  settingsView.renderSettings();
};

const controlSubmit = function (data) {
  model.state.settings = data;
  console.log(model.state.settings);
};

const controlPlayAgain = function () {
  console.log("kk");

  model.state.currentQuestion = 0;
  model.state.correctQuestions = 0;
  // console.log(model.state.currentQuestion, model.state.correctQuestions);
  controlQuizzData();
};

const init = function () {
  questionsView.addHandlerRenderFirst(controlQuizzData);
  questionsView.addHandlerNext(controlNextQuestion);
  questionsView.addHandlerPrev(controlPreviousQuestion);
  questionsView.addHandlerAnswer(controlAnswers);
  //
  settingsView.addHandlerSettings(displaySettings);
  settingsView.addHandlerSubmit(controlSubmit);
  //
  resultsView.addHandlerPlayAgain(controlPlayAgain);
};
init();
