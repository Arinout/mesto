import {
  imagePopup,
  photoImagePopup,
  captionImagePopup,
  openPopup
} from './scripts.js'
export const initialCards = [{
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector)
      .content.querySelector('.photo-grid__element')
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.photo-grid__title').textContent = this._title;

    this._element.querySelector('.photo-grid__image').setAttribute('src', this._link);

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.photo-grid__button-like').addEventListener('click', () => {
      this._likeButtonActive();
    });

    this._element.querySelector('.photo-grid__image-button').addEventListener('click', () => {
      this._openImagePopup();
    });
  }

  _deleteCard() {
    this._element.querySelector('.photo-grid__delete-button').closest('.photo-grid__element').remove();
  }

  _likeButtonActive() {
    this._element.querySelector('.photo-grid__button-like').classList.toggle('photo-grid__button-like_acive');
  }

  _openImagePopup() {
    photoImagePopup.setAttribute('src', this._link);
    photoImagePopup.setAttribute('alt', this._title);
    captionImagePopup.textContent = this._title;
    openPopup(imagePopup);
  }
}