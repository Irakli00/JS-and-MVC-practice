class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;

  renderQuestion(data, questionNum) {
    this._data = data[questionNum];
    console.log(this._data);

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
            <button>prev</button>
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

  addHandlerRender(handler) {
    document
      .querySelector(".start-page_btn")
      .addEventListener("click", handler);
  }
  /* 
  addHandlerNext(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("question--next-btn")) {
        console.log("io");
        handler();
      }
    });
  } */
}

export default new QuestionsView();
