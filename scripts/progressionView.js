class ProgressionView {
  _parentElement = document.querySelector(".quiz_progression");

  renderProgression(data, i) {
    data.forEach(
      function (el, i) {
        const markup = `<div data-question-num="${i}"><p>${i + 1}</p></div>`;
        //class="current_question"

        this._parentElement.insertAdjacentHTML("beforeend", markup);
        //console.log(data, i);
      }.bind(this)
    );
    console.log(this._parentElement.innerHTML);
  }
}

export default new ProgressionView();
