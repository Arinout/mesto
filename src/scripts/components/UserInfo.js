export class UserInfo {
  constructor({
    profileNameSelector,
    profileProfessionSelector
  }) {
    this._nameElement = document.querySelector(profileNameSelector)
    this._professionElement = document.querySelector(profileProfessionSelector)
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      profession: this._professionElement.textContent
    }
  }
  setUserInfo(user) {
    this._nameElement.textContent = user.name;
    this._professionElement.textContent = user.profession;
  }
}