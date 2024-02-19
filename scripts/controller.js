import * as model from "./model.js";

const controlQuizzData = async function () {
  try {
    await model.loadQuizz();
    console.log(model.state.data);
  } catch {}
};
controlQuizzData();
