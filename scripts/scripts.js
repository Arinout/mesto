import {
    Card,
    initialCards
} from './card.js'
import {
    formValidator,
    validateObj
} from './validate.js';

// DOM элементы для profile-popup
const popupcloseButtons = document.querySelectorAll('.popup__close-button');
const profileOpenButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.profile-popup')
const profileForm = document.querySelector('.profile-popup__form');
const nameInput = profilePopup.querySelector('.popup__input_element_name');
const professionInput = profilePopup.querySelector('.popup__input_element_profession');
const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');
const popup = document.querySelector('.popup');

//DOM элементы для card-popup
const cardPopup = document.querySelector('.card-popup');
const popupAddCardButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.popup__input_element_title');
const cardLink = document.querySelector('.popup__input_element_link');
const cardsContainer = document.querySelector('.photo-grid__elements');
const cardForm = document.querySelector('.card-popup__form');

//DOM элементы для image popup
export const imagePopup = document.querySelector('.image-popup');
export const photoImagePopup = document.querySelector('.image-popup__image');
export const captionImagePopup = document.querySelector('.image-popup__caption');



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

const renderCard = (cardData) => {
    const card = new Card(cardData, '#template');
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
};

initialCards.forEach((cardData) => {
    renderCard(cardData);
});

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
    const validation = new formValidator(validateObj, formElement);
    validation.enableValidation();
})

//Функция открыть/закрыть popup
export function openPopup(popup) {
    popup.classList.add('popup_active');
    closeOverlayPopup(popup);
    document.addEventListener('keydown', handleCloseOnEsc);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', handleCloseOnEsc);
}

//Обработчик кнопоки 'закрыть popup'
popupcloseButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});


// Откыть/закрыть profile popup
const openProfilePopup = (evt) => {
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
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


// Закрытие попапа кликом на оверлей
function closeOverlayPopup(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    });
}


// добавление/удаление закрытия попапа через Escape
function handleCloseOnEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(profilePopup);
        closePopup(cardPopup);
        closePopup(imagePopup);
    }
}

// Открыть/закрыть card popup
const openCardPopup = () => {
    cardTitle.value = '';
    cardLink.value = '';
    openPopup(cardPopup);
}

profileOpenButton.addEventListener('click', openProfilePopup);

profileForm.addEventListener('submit', handleProfileFormSubmit);

popupAddCardButton.addEventListener('click', openCardPopup);

cardForm.addEventListener('submit', addNewCard);