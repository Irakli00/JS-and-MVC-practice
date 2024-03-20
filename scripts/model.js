import { API_URL } from "./config";

export const state = {
  data: {},
  currentQuestion: 0,
  correctQuestions: 0,
  settings: {
    numOfQuestions: 5,
    difficulty: "easy",
    category: "9",
    type: "multiple",
  },

  fullAnswers: {},
};

export const loadQuizz = async function () {
  try {
    const questionNum =
      state.settings.numOfQuestions < 50 ? state.settings.numOfQuestions : 50;

    const difficulty =
      state.settings.difficulty !== "any" ? state.settings.difficulty : "easy";

    const category =
      state.settings.category !== "any" ? state.settings.category : "9";

    const data = await fetch(
      `${API_URL}?amount=${questionNum}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    const res = await data.json();
    const questions = res.results;

    state.data = questions;
  } catch {}
};
