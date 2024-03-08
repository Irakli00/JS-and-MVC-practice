class SettingsView {
  /*   renderSettings() {
    document.querySelector(".settings").classList.toggle("settings-display");
  } */

  addHandlerSettings(handler) {
    document
      .querySelector(".settingsBtn")
      .addEventListener("click", function () {
        handler();
      });
  }
}

export default new SettingsView();
