import * as helper from "./helpers";

class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;
  answer = {};
  markupArr = [];

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderQuestion(data, questionNum) {
    this._data = data[questionNum];
    this._parentElement.innerHTML = ``;

    if (!this._data) return; //this for now, thow errors next

    (function () {
      const randomisedAnswers = helper.randomise([
        this._data.correct_answer,
        ...this._data.incorrect_answers,
      ]);

      const markup = `
      <article class="question--area_question">
        <h2>${this._data.question}</h2>
        <div class="options--area">
          <p class="answer--option" data-option="${randomisedAnswers[0]}">${randomisedAnswers[0]}</p>
          <p class="answer--option" data-option="${randomisedAnswers[1]}">${randomisedAnswers[1]}</p>
          <p class="answer--option" data-option="${randomisedAnswers[2]}">${randomisedAnswers[2]}</p>
          <p class="answer--option" data-option="${randomisedAnswers[3]}">${randomisedAnswers[3]}</p>
        </div>
        <div class ="buttons--area">
          <button class="question--previous-btn">prev</button>
          <button class="question--next-btn" >next</button>
        </div>
      </article>
    `;

      let key = questionNum;
      this.markupArr[key] = markup;

      return markup;
    }).bind(this)();

    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this.markupArr[questionNum]
    );
  }

  addHandlerRenderFirst(handler) {
    document.querySelector(".startBtn").addEventListener("click", handler);
  }

  addHandlerNext(handler) {
    this._clear();
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target;
      if (
        target.classList.contains("question--next-btn") &&
        target.innerHTML !== ""
      ) {
        handler();
      }
    });
  }

  addHandlerPrev(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target;
      if (
        target.classList.contains("question--previous-btn") &&
        target.innerHTML !== ""
      ) {
        handler();
      }
    });
  }

  addHandlerAnswer(handler, target) {
    this._parentElement.addEventListener("click", (e) => {
      /*     console.log(e.target);

      this.answer.answer = helper.decode(e.target?.dataset.option);
      handler(); */

      target = e.target;

      if (
        target.classList.contains("answer--option") &&
        target.innerHTML !== ""
      ) {
        this.answer.answer = helper.decode(target.dataset.option);
        //console.log(target);
        handler(target);
      }
    });
  }
}

export default new QuestionsView();
