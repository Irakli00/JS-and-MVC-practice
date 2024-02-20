export const state = {
  data: {},
  currentQuestion: 0,
};

export const loadQuizz = async function () {
  try {
    const data = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    );
    const res = await data.json();
    const questions = res.results;

    state.data = questions;
  } catch {}
};
