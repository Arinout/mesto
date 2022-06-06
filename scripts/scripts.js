import {
    Card
} from './asdasdsadasd.js'
import {
    FormValidator
} from './FormValidator.js';
import {
    initialCards,
    validateObj
} from '../utils/constants.js';


// DOM элементы для profile-popup
const profileOpenButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.profile-popup')
const profileForm = document.querySelector('.profile-popup__form');
const nameInput = profilePopup.querySelector('.popup__input_element_name');
const professionInput = profilePopup.querySelector('.popup__input_element_profession');
const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');
const popups = document.querySelectorAll('.popup');

//DOM элементы для card-popup
const cardPopup = document.querySelector('.card-popup');
const popupAddCardButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.popup__input_element_title');
const cardLink = document.querySelector('.popup__input_element_link');
const cardsContainer = document.querySelector('.photo-grid__elements');
const cardForm = document.querySelector('.card-popup__form');

//DOM элементы для image popup
const imagePopup = document.querySelector('.image-popup');
const photoImagePopup = document.querySelector('.image-popup__image');
const captionImagePopup = document.querySelector('.image-popup__caption');



//Добавление карточки
const addNewCard = (evt) => {
    evt.preventDefault();
    renderCard({
        title: cardTitle.value,
        link: cardLink.value
    });
    evt.target.reset();
    closePopup(cardPopup);
};

const createCard = (item) => {
    const card = new Card(item, '#template', openImagePopup);
    const cardElement = card.generateCard();
    return cardElement;
};

const renderCard = (item) => {
    cardsContainer.prepend(createCard(item));
};

initialCards.forEach((item) => {
    renderCard(item);
});


const formValidators = {}

const enableValidation = (validateObj) => {
    const formList = Array.from(document.querySelectorAll(validateObj.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(validateObj, formElement)

        const formName = formElement.getAttribute('name')

        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

enableValidation(validateObj);

//Функция открыть/закрыть popup
export function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', handleCloseOnEsc);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', handleCloseOnEsc);
}

//Закрываем попап через оверлей и крестик
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_active')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup)
        }
    })
});

// Откыть/закрыть profile popup
const openProfilePopup = (evt) => {
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
    formValidators['profile-form'].resetValidation();
    formValidators['profile-form'].disableSumbitButton();
    openPopup(profilePopup);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInputValue = nameInput.value;
    const jobInputValue = professionInput.value;
    nameOutput.textContent = nameInputValue;
    professionOutput.textContent = jobInputValue;
    closePopup(profilePopup);
}

// добавление/удаление закрытия попапа через Escape
function handleCloseOnEsc(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_active');
        closePopup(activePopup);
    }
}

// Открыть/закрыть card popup
function openCardPopup() {
    cardForm.reset();
    openPopup(cardPopup);
    formValidators['card-form'].resetValidation();
}

function openImagePopup(title, link) {
    photoImagePopup.setAttribute('src', link);
    photoImagePopup.setAttribute('alt', title);
    captionImagePopup.textContent = title;
    openPopup(imagePopup);
}

profileOpenButton.addEventListener('click', openProfilePopup);

profileForm.addEventListener('submit', handleProfileFormSubmit);

popupAddCardButton.addEventListener('click', openCardPopup);

cardForm.addEventListener('submit', addNewCard);