class ProgressionView {
  _parentElement = document.querySelector(".quiz_progression");

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderProgression(data, curr) {
    this._clear();
    data.forEach(
      function (_, i) {
        const markup = `<div class="" class="index--${i}" ><p>${
          i + 1
        }</p></div>`;
        //data-question-num="${i}"
        this._parentElement.insertAdjacentHTML("beforeend", markup);
      }.bind(this)
    );
  }

  /*  focusStart() {
    const all = this._parentElement.querySelectorAll(`div`);
    //console.log(all);
    all[0].classList.add("current_question");
  } */

  focusNext(i) {
    //console.log(i);
    const all = this._parentElement.querySelectorAll(`div`);
    const arr = Array.from(all);

    arr[i]?.classList.add("current_question");
    arr[i - 1].classList.remove("current_question");
  }

  focusPrev(i) {
    //console.log(i);
    const all = this._parentElement.querySelectorAll(`div`);
    const arr = Array.from(all);

    arr[i].classList.add("current_question");
    arr[i + 1].classList.remove("current_question");
  }
}

export default new ProgressionView();
