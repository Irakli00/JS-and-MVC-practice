//import { quizz } from "./model.js";
//console.log(quizz);
import { loadQuizz } from "./model.js";
export const controlQuizzData = async function () {
  try {
    const huh = await loadQuizz();
    console.log(huh);
  } catch {}
};
controlQuizzData();
