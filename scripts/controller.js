import * as model from "./model.js";
import questionsView from "./view.js";

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();
    console.log(model.state.data);

    questionsView.render(model.state.data[0]);
  } catch {}
};
controlQuizzData();
