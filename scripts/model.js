export const loadQuizz = async function () {
  try {
    const loadData = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    );
    const data = await loadData.json();
    const questions = data.results;
    const quizz = Object.assign({}, questions);

    return quizz;
  } catch {}
};
