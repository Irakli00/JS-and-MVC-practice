import * as helper from "./helpers";

class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;
  answer = {};

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderQuestion(data, questionNum) {
    this._data = data[questionNum];
    this._parentElement.innerHTML = ``;

    if (!this._data) return; //this for now, thow errors next

    const generatedMarkup = function () {
      const randomisedAnswers = helper.randomise([
        this._data.correct_answer,
        ...this._data.incorrect_answers,
      ]);

      const markup = `
      <article class="question--area_question">
        <h2>${this._data.question}</h2>
        <div class="options--area">
          <p data-option="${randomisedAnswers[0]}">${randomisedAnswers[0]}</p>
          <p data-option="${randomisedAnswers[1]}">${randomisedAnswers[1]}</p>
          <p data-option="${randomisedAnswers[2]}">${randomisedAnswers[2]}</p>
          <p data-option="${randomisedAnswers[3]}">${randomisedAnswers[3]}</p>
        </div>
        <div>
          <button class="question--previous-btn">prev</button>
          <button class="question--next-btn" >next</button>
        </div>
      </article>
    `;
      return markup;
    }.bind(this);

    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      generatedMarkup(this._data)
    );
  }

  addHandlerRenderFirst(handler) {
    document.querySelector(".startBtn").addEventListener("click", handler);
  }

  addHandlerNext(handler) {
    this._clear();
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("question--next-btn")) {
        handler();
      }
    });
  }

  addHandlerPrev(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("question--previous-btn")) {
        handler();
      }
    });
  }

  addHandlerAnswer(handler) {
    this._parentElement.addEventListener("click", (e) => {
      this.answer.answer = helper.decode(e.target?.dataset.option);

      console.log(`your answer: ${this.answer.answer}`);
      handler();
    });
  }
}

export default new QuestionsView();
