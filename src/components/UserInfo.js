export class UserInfo {
  constructor(profileNameSelector, profileAboutSelector) {
    this._nameInput = document.querySelector(profileNameSelector);
    this._aboutInput = document.querySelector(profileAboutSelector);
  }

  getUserInfo() {
    const data = {
      name: this._nameInput.textContent,
      about: this._aboutInput.textContent
    }

    return data;
  }

  setUserInfo({ name, about }) {
    this._nameInput.textContent = name;
    this._aboutInput.textContent= about;
  }
}