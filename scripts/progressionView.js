class ProgressionView {
  _parentElement = document.querySelector(".quiz_progression");

  renderProgression(data, i) {
    data.forEach(
      function (_, i) {
        const markup = `<div data-question-num="${i}"><p>${i + 1}</p></div>`;
        //class="current_question"

        this._parentElement.insertAdjacentHTML("beforeend", markup);
        //console.log(data, i);
      }.bind(this)
    );
  }

  focusCurrent(i) {
    const toConvert = this._parentElement.innerHTML;

    const newDOM = document.createRange().createContextualFragment(toConvert); //converts string to DOM element (cool)

    console.log(newDOM.childNodes[i]);
    newDOM.childNodes[i].classList.toggle("current_question"); //adds to el in arr not in dom
    console.log(newDOM.childNodes[i].attributes);
  }
}

export default new ProgressionView();
