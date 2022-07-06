export class UserInfo {
  constructor({
    username,
    profession,
    avatar
  }) {
    this._nameElement = document.querySelector(username)
    this._professionElement = document.querySelector(profession)
    this._avatarElement = document.querySelector(avatar)
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      profession: this._professionElement.textContent,
      avatar: this._avatarElement.src
    }
  }
  setUserInfo(user) {
    this._nameElement.textContent = user.name;
    this._professionElement.textContent = user.about;
  }

  setUserAvatar(user) {
    this._avatarElement.src = user.avatar;
  }
}