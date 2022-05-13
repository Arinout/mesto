// DOM элементы для profile-popup
const closeButtons = document.querySelectorAll('.popup__close-button');
const profileOpenButton = document.querySelector ('.profile__edit');
const profilePopup = document.querySelector ('.profile-popup')
const profileForm = document.querySelector('.profile-popup__form');
const nameInput = profilePopup.querySelector('.popup__input_element_name');
const professionInput = profilePopup.querySelector('.popup__input_element_profession');
const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');
const popup = document.querySelector ('.popup');

//DOM элементы для card-popup
const cardPopup = document.querySelector('.card-popup');
const addCardButton = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('.popup__input_element_title');
const cardLink = document.querySelector('.popup__input_element_link');
const cardsContainer = document.querySelector ('.photo-grid__elements');
const cardForm = document.querySelector ('.card-popup__form');
const likeButton = document.querySelector('.photo-grid__button-like');
const submitCardButton = document.querySelector('.card-popup__submit-button')

//DOM элементы для image popup
const imagePopup = document.querySelector ('.image-popup');
const openImage = document.querySelector ('.image-popup__image');
const openCaption = document.querySelector ('.image-popup__caption');


//Функция открыть/закрыть popup
function openPopup (popup) {
    popup.classList.add('popup_active');
    closeOverlayPopup(popup);
    addCloseEscapePopup(popup);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_active');
    removeCloseEscapePopup(popup);
}

//Обработчик кнопоки 'закрыть popup'
closeButtons.forEach((button) => { 
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Template 
const cardTemplate = document
    .querySelector('#template')
    .content.querySelector('.photo-grid__element');

// Откыть/закрыть profile popup
const openProfilePopup = (evt) => {
    openPopup(profilePopup);
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    const nameInputValue = nameInput.value;
    const jobInputValue = professionInput.value;
    nameOutput.textContent = nameInputValue;
    professionOutput.textContent = jobInputValue;
    closePopup(profilePopup);
}


// Закрытие попапа кликом на оверлей
function closeOverlayPopup (popup) {
    popup.addEventListener ('click', (evt) =>{
        if(evt.target === evt.currentTarget){
            closePopup(popup);
        }
    });
}

// добавление/удаление закрытия попапа через Escape
function addCloseEscapePopup (popup){
    document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
            closePopup(popup);
        }
    });
}

function removeCloseEscapePopup (popup){
    document.removeEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
            closePopup(popup);
        }
    });    
}

// Открыть/закрыть card popup
const openCardPopup = (evt) => {
    disableSumbitButton(submitCardButton,validateObj);
    openPopup(cardPopup);
}

//Открыть/закрыть image popup
const openImagePopup = (evt) => {
    openPopup(imagePopup);
    openImage.setAttribute('src', evt.target.src);
    openImage.setAttribute('alt', evt.target.alt);
    openCaption.textContent = evt.target.alt;
};


//Добавление карточки
const addNewCard = (evt) => {
    evt.preventDefault();
    renderCard({ title: cardTitle.value ,link: cardLink.value});
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
    imageCard.setAttribute ('src', cardData.link);
    imageCard.setAttribute ('alt', cardData.title);

    const deleteButton = newCard.querySelector ('.photo-grid__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    const likeButton = newCard.querySelector ('.photo-grid__button-like');
    likeButton.addEventListener('click', likeButtonActive);
        
    const openImagePopupButton = newCard.querySelector ('.photo-grid__image-button');
    openImagePopupButton.addEventListener('click', openImagePopup);

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

addCardButton.addEventListener ('click', openCardPopup);

cardForm.addEventListener('submit', addNewCard);
