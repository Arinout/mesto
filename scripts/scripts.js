const openPopupButton = document.querySelector ('.profile__edit');
const popup = document.querySelector ('.popup');
const popupCloseButton = popup.querySelector ('.popup__close-button');

function popupOpenToggle(evt) {
    popup.classList.toggle('popup__active');
}

openPopupButton.addEventListener('click', popupOpenToggle);

popupCloseButton.addEventListener('click', popupOpenToggle);

const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__name');
const jobInput = popup.querySelector('.popup__profession');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;
    const nameOutput = document.querySelector('.profile__name');
    const professionOutput = document.querySelector('.profile__profession');
    nameOutput.textContent = nameInputValue;
    professionOutput.textContent = jobInputValue;
    popup.classList.toggle('popup__active');
}

formElement.addEventListener('submit', formSubmitHandler); 