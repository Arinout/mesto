const openPopupButton = document.querySelector ('.profile__edit');
const popup = document.querySelector ('.popup');
const popupCloseButton = popup.querySelector ('.popup__close-button');

const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_element_name');
const professionInput = popup.querySelector('.popup__input_element_profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

function popupOpenAdd(evt) {
    popup.classList.add('popup_active');
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent
}

function popupOpenRemove(evt) {
    popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    const nameInputValue = nameInput.value;
    const jobInputValue = professionInput.value;
    nameOutput.textContent = nameInputValue;
    professionOutput.textContent = jobInputValue;
    popupOpenRemove();
}

openPopupButton.addEventListener('click', popupOpenAdd);

popupCloseButton.addEventListener('click', popupOpenRemove);

formElement.addEventListener('submit', formSubmitHandler); 