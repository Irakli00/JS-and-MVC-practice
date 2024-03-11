class SettingsView {
  _parentElement = document.querySelector(".settings--area");

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSettings() {
    const markup = `
    <div class="settings">
      <form class="settings--form" action="" method="post">
        <label for="amount">Select the number of questions:</label>
        <input id="number" type="number" required/>
        <br /><br />

        <label for="difficulty">Select the difficulty:</label>
        <select name="trivia_difficulty" class="form-control">
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br /><br />

        <label for="category">Select the category:</label>
        <select id="category" name="category">
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <br /><br />

        <label for="type">Select the type:</label>
        <select name="trivia_type" class="question_type">
          &gt;
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>

        <br /><br />

        <button class="settings--submit">Submit</button>
      </form>
    </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerSettings(handler) {
    document.querySelector(".settingsBtn").addEventListener(
      "click",
      function () {
        handler();
      }.bind(this)
    );
  }

  addHandlerSubmit(handler) {
    this._parentElement.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        const data = {
          numOfQuestions: +document.getElementById("number").value,
          difficulty: document.querySelector(".form-control").value,
          category: document.getElementById("category").value,
          type: document.querySelector(".question_type").value,
        };
        this._clear();
        handler(data);
      }.bind(this)
    );
  }
}

export default new SettingsView();
