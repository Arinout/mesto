export class Card {
  constructor({
    data,
    cardSelector,
    userId,
    openImagePopup,
    deleteCardIcon,
    setLike,
    removeLike
  }) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._deleteCardIcon = deleteCardIcon;
    this._likes = data.likes;
    this._setLike = setLike;
    this._removeLike = removeLike;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector)
      .content.querySelector('.photo-grid__element')
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector('.photo-grid__delete-button');
    this._likeButton = this._element.querySelector('.photo-grid__button-like');
    this._imageButton = this._element.querySelector('.photo-grid__image-button');
    this._likesCounter = this._element.querySelector('.photo-grid__likes-counter');
    this._likesCounter.textContent = this._likes.length;
    this._element.querySelector('.photo-grid__title').textContent = this._title;
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._title);
    this._hasDeleteButton();
    this._isCardLiked();
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._deleteCardIcon(this._cardId);
    });

    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('photo-grid__button-like_acive')) {
        this._removeLike(this._cardId);
      } else {
        this._setLike(this._cardId);
      }
    })

    this._imageButton.addEventListener('click', () => {
      this._openImagePopup();
    });
  }

  deleteCard() {
    this._deleteButton.closest('.photo-grid__element').remove();
  }

  _hasDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }

  _isCardLiked() {
    if (this._likes.some((user) => {
        return this._userId === user._id;
      })) {
      this._likeButton.classList.add('photo-grid__button-like_acive');
    }
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle('photo-grid__button-like_acive');
  }

}