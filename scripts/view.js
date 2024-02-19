class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;

  render(data) {
    /*     this.data = data;
    console.log(this._data);
    console.log(data); */
    const allAnswers = [data.correct_answer, ...data.incorrect_answers];
    const randomisedAnswers = [];
    console.log(allAnswers);

    const randomise = function (arr) {
      arr.slice().forEach(() => {
        let index = Math.floor(Math.random() * arr.length);
        randomisedAnswers.push(arr[index]);
        arr.splice(arr.indexOf(arr[index]), 1);
      });
    };

    randomise(allAnswers);
    const markup = `
      <article>
        <h2>${data.question}</h2>
        <p>${randomisedAnswers[0]}</p>
        <p>${randomisedAnswers[1]}</p>
        <p>${randomisedAnswers[2]}</p>
        <p>${randomisedAnswers[3]}</p>
        <button>prev</button>
        <button>next</button>
      </article>
      `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    randomise();
    //console.log(markup);
    //console.log(this._data);
  }
}

export default new QuestionsView();

/*     const allAnswers = [data.correct_answer, ...data.incorrect_answers];
    const randomisedAnswers = [];
    console.log(allAnswers);

    allAnswers.slice().forEach(() => {
      let index = Math.floor(Math.random() * allAnswers.length);
      randomisedAnswers.push(allAnswers[index]);
      allAnswers.splice(allAnswers.indexOf(allAnswers[index]), 1);
    }); */
