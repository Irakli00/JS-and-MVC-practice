class ResultsView {
  _parentElement = document.querySelector(".results--area");

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderResults(correct, total) {
    this._clear();

    const markup = `
    <article class="results--area-content_wrapper">
      <div>
        <div>
          <h2>Your result is:</h2>
        </div>
        <p>${correct}/${total}</p>
      </div>
      <div>
        <button class="play-again_btn">Play Again</button>
      </div>
    </article>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerPlayAgain(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target.classList.contains("play-again_btn")) handler();
    });
  }
  /* 
  addHandlerResults(handler) {
    document.querySelector("class").addEventListener(
      "click",
      function () {
        handler();
      }.bind(this)
    );
  } */
}

export default new ResultsView();
