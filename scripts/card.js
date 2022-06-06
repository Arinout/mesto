export class Card {
  constructor(data, cardSelector, openImagePopup) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector)
      .content.querySelector('.photo-grid__element')
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.photo-grid__title').textContent = this._title;
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._setEventListeners();
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._title);

    return this._element;
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector('.photo-grid__delete-button');
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._likeButton = this._element.querySelector('.photo-grid__button-like');
    this._likeButton.addEventListener('click', () => {
      this._likeButtonActive();
    });

    this._imageButton = this._element.querySelector('.photo-grid__image-button');
    this._imageButton.addEventListener('click', () => {
      this._openImagePopup(this._title, this._link);
    });
  }

  _deleteCard() {
    this._deleteButton.closest('.photo-grid__element').remove();
  }

  _likeButtonActive() {
    this._likeButton.classList.toggle('photo-grid__button-like_acive');
  }

}