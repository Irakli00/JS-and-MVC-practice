import { API_URL } from "./config";

export const state = {
  data: {},
  currentQuestion: 0,
  correctQuestions: 0,
};

export const loadQuizz = async function () {
  try {
    const data = await fetch(
      `${API_URL}?amount=25&category=9&difficulty=easy&type=multiple`
    );
    const res = await data.json();
    const questions = res.results;

    state.data = questions;
  } catch {}
};
