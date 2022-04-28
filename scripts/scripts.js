const openPopupButton = document.querySelector ('.profile__edit');
const popup = document.querySelector ('.popup');
const popupCloseButton = popup.querySelector ('.popup__close-button');

const containerPopupElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__input_element_name');
const professionInput = popup.querySelector('.popup__input_element_profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

//Дом элементы формы
const form = document.querySelector('.form');
const addCardButton = document.querySelector('.profile__add-button');
const cardTitle = form.querySelector('.form__input_element_title');
const cardLink = form.querySelector('.form__input_element_link');
const formCloseButton = form.querySelector ('.form__close-button');
const cardsContainer = document.querySelector ('.photo-grid__elements');
const containerFormElement = document.querySelector ('.form__container');

const likeButton = document.querySelector('.photo-grid__button-like');

const popupPicture = document.querySelector ('.opened-picture');
const pictureCloseButton = document.querySelector ('.opened-picture__close-button');
const openImage = document.querySelector ('.opened-picture__image');
const openCaption = document.querySelector ('.opened-picture__caption');
// Template 

const cardTemplate = document
    .querySelector('#template')
    .content.querySelector('.photo-grid__element');

//popup

function popupOpenAdd(evt) {
    popup.classList.add('popup_active');
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
}

function popupOpenRemove(evt) {
    popup.classList.remove('popup_active');
}

function popupSubmitHandler (evt) {
    evt.preventDefault(); 
    const nameInputValue = nameInput.value;
    const jobInputValue = professionInput.value;
    nameOutput.textContent = nameInputValue;
    professionOutput.textContent = jobInputValue;
    popupOpenRemove();
}

const formAddOpen = (evt) => {
    form.classList.add('form_active');
}

const formAddRemove = (evt) => {
    form.classList.remove('form_active');
}

//Добавление карточки
const formSumbitHandler = (evt) => {
    evt.preventDefault();
  
    renderCard({ title: cardTitle.value ,link: cardLink.value});
  
    cardLink.value = "";
    cardTitle.value = "";
    
    formAddRemove();
  };

const deleteCard = (evt) => {
    evt.target.closest('.photo-grid__element').remove();
}

const likeButtonActive = (evt) => {
    evt.target.closest(".photo-grid__button-like").classList.toggle('photo-grid__button-like_acive');
    evt.target.closest(".photo-grid__button-like").classList.toggle('photo-grid__button-like_disabled');
}

const openPicture = (evt) => {
    popupPicture.classList.add('opened-picture_active');
    openImage.setAttribute('src', evt.target.closest('.photo-grid__image').getAttribute('src'));
    openCaption.textContent = evt.target.closest('.photo-grid__element').textContent;
    openImage.setAttribute('alt', openCaption.textContent);
}

const closePicture = (evt) => {
    popupPicture.classList.remove('opened-picture_active');
}
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

    const openPictureButton = newCard.querySelector ('.photo-grid__image-button');
    openPictureButton.addEventListener('click', openPicture);


    return newCard;
  }

const renderCard = (cardData) => {
    cardsContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
   renderCard(cardData);
});

pictureCloseButton.addEventListener ('click', closePicture);

addCardButton.addEventListener ('click', formAddOpen);

formCloseButton.addEventListener ('click', formAddRemove);

openPopupButton.addEventListener('click', popupOpenAdd);

popupCloseButton.addEventListener('click', popupOpenRemove);

containerPopupElement.addEventListener('submit', popupSubmitHandler); 

containerFormElement.addEventListener('submit', formSumbitHandler);


