// DOM элементы для profile-popup
const popupcloseButtons = document.querySelectorAll('.popup__close-button');
const profileOpenButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_type_profile')
const profileForm = document.querySelector('.profile-popup__form');
const nameInput = profilePopup.querySelector('.popup__input_element_name');
const professionInput = profilePopup.querySelector('.popup__input_element_profession');
const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');
const popup = document.querySelector('.popup');

//DOM элементы для card-popup
const cardPopup = document.querySelector('.popup_type_card');
const popupAddCardButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.popup__input_element_title');
const cardLink = document.querySelector('.popup__input_element_link');
const cardsContainer = document.querySelector('.photo-grid__elements');
const cardForm = document.querySelector('.card-popup__form');
const cardLikeButton = document.querySelector('.photo-grid__button-like');
const cardSubmitButton = document.querySelector('.card-popup__submit-button')

//DOM элементы для image popup
const imagePopup = document.querySelector('.popup_type_image');
const photoImagePopup = document.querySelector('.image-popup__image');
const captionImagePopup = document.querySelector('.image-popup__caption');


//Функция открыть/закрыть popup
function openPopup(popup) {
    popup.classList.add('popup_active');
    closeOverlayPopup(popup);
    addCloseEscapePopup();
}

const closePopup = (popup) => {
    popup.classList.remove('popup_active');
}

//Обработчик кнопоки 'закрыть popup'
popupcloseButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

// Template 
const cardTemplate = document
    .querySelector('#template')
    .content.querySelector('.photo-grid__element');

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

function handleCloseOnEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(profilePopup);
        closePopup(cardPopup);
        closePopup(imagePopup);
    }
}

// добавление/удаление закрытия попапа через Escape
function addCloseEscapePopup() {
    document.addEventListener('keydown', handleCloseOnEsc);
}

function removeCloseEscapePopup() {
    document.removeEventListener('keydown', handleCloseOnEsc);
}

// Открыть/закрыть card popup
const openCardPopup = (evt) => {
    disableSumbitButton(cardSubmitButton, validateObj);
    openPopup(cardPopup);
}

//Открыть/закрыть image popup
const openImagePopup = (evt) => {
    photoImagePopup.setAttribute('src', evt.target.src);
    photoImagePopup.setAttribute('alt', evt.target.alt);
    captionImagePopup.textContent = evt.target.alt;
    openPopup(imagePopup);
};


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

// Удаление карточки
const deleteCard = (evt) => {
    evt.target.closest('.photo-grid__element').remove();
}

// Поставить/убрать like
const likeButtonActive = (evt) => {
    evt.target.classList.toggle('photo-grid__button-like_acive');
}

//Генерация карточки
const generateCard = (cardData) => {
    const newCard = cardTemplate.cloneNode(true);

    const titleCard = newCard.querySelector('.photo-grid__title');
    titleCard.textContent = cardData.title;

    const imageCard = newCard.querySelector('.photo-grid__image');
    imageCard.setAttribute('src', cardData.link);
    imageCard.setAttribute('alt', cardData.title);

    const cardDeleteButton = newCard.querySelector('.photo-grid__delete-button');
    cardDeleteButton.addEventListener('click', deleteCard);

    const cardLikeButton = newCard.querySelector('.photo-grid__button-like');
    cardLikeButton.addEventListener('click', likeButtonActive);

    const imagePopupButton = newCard.querySelector('.photo-grid__image-button');
    imagePopupButton.addEventListener('click', openImagePopup);

    return newCard;
}

const renderCard = (cardData) => {
    cardsContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
    renderCard(cardData);
});


profileOpenButton.addEventListener('click', openProfilePopup);

profileForm.addEventListener('submit', handleProfileFormSubmit);

popupAddCardButton.addEventListener('click', openCardPopup);

cardForm.addEventListener('submit', addNewCard);