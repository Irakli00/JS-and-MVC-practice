class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;

  renderQuestion(data, questionNum) {
    this._data = data[questionNum];
    this._parentElement.innerHTML = ``;
    if (!this._data) return; //this for now, thow errors next

    const generatedMarkup = function () {
      const allAnswers = [
        this._data.correct_answer,
        ...this._data.incorrect_answers,
      ];
      //console.log(allAnswers);
      const randomisedAnswers = [];

      const randomise = function (arr) {
        arr.slice().forEach(() => {
          let index = Math.floor(Math.random() * arr.length);
          randomisedAnswers.push(arr[index]);
          arr.splice(arr.indexOf(arr[index]), 1);
        });
      };

      randomise(allAnswers);
      const markup = `
        <article class="question--area_question">
        <h2>${this._data.question}</h2>
        <div>
        <p>${randomisedAnswers[0]}</p>
            <p>${randomisedAnswers[1]}</p>
            <p>${randomisedAnswers[2]}</p>
            <p>${randomisedAnswers[3]}</p>
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
    document
      .querySelector(".start-page_btn")
      .addEventListener("click", handler);
  }

  addHandlerNext(handler) {
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
}

export default new QuestionsView();
