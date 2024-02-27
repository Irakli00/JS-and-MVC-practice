class QuestionsView {
  _parentElement = document.querySelector(".question--area");
  _data;

  render(data) {
    this._data = data;
    console.log(this._data);
    console.log(data);

    const generatedMarkup = function () {
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
        <article class="question--area_question">
        <h2>${data.question}</h2>
        <div>
        <p>${randomisedAnswers[0]}</p>
            <p>${randomisedAnswers[1]}</p>
            <p>${randomisedAnswers[2]}</p>
            <p>${randomisedAnswers[3]}</p>
          </div>
          <div>
            <button>prev</button>
            <button>next</button>
          </div>
        </article>
    `;
      return markup;
    };

    this._parentElement.insertAdjacentHTML("afterbegin", generatedMarkup(data));
  }

  renderAllQuestions(dataArr = this._data) {
    dataArr.forEach((el) => {
      this.render(el);
    });
  }

  addHandlerRender(handler) {
    document
      .querySelector(".start-page_btn")
      .addEventListener("click", handler);
  }
}

export default new QuestionsView();
