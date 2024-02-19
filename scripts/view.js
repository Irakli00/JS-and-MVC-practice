class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;

  render(data) {
    /*     this.data = data;
    console.log(this._data);
    console.log(data); */
    const markup = `
    <article>
      <h2>${data.question}</h2>
      <p>${data.incorrect_answers[0]}</p>
      <p>${data.incorrect_answers[1]}</p>
      <p>${data.incorrect_answers[2]}</p>
      <p>${data.correct_answer}</p>
      <button>prev</button>
      <button>next</button>
    </article>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    //console.log(markup);
    //console.log(this._data);
  }
}

export default new QuestionsView();
