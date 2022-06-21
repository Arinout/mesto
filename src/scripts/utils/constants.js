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

export const validateObj = {
  formSelector: '.popup__form',
  inputElement: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_error',
  error: 'popup__error_visible'
};

// DOM элементы для profile-popup
export const profileOpenButton = document.querySelector('.profile__edit');
export const nameInput = document.querySelector('.popup__input_element_name');
export const professionInput = document.querySelector('.popup__input_element_profession');
export const nameOutput = document.querySelector('.profile__name');
export const professionOutput = document.querySelector('.profile__profession');

//DOM элементы для card-popup

export const popupAddCardButton = document.querySelector('.profile__add-button');
export const cardsContainer = document.querySelector('.photo-grid__elements');

