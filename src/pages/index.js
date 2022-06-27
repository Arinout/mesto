import "./index.css";

import {
    Card
} from '../scripts/components/Card'
import {
    FormValidator
} from '../scripts/components/FormValidator.js'
import {
    initialCards,
    validateObj,
    profileOpenButton,
    nameInput,
    professionInput,
    nameOutput,
    professionOutput,
    popupAddCardButton,
    cardsContainer
} from '../scripts/utils/constants'

import {
    Section
} from "../scripts/components/Section.js"

import {
    PopupWithImage
} from '../scripts/components/PopupWithImage.js'

import {
    PopupWithForm
} from '../scripts/components/PopupWithForm.js'

import {
    UserInfo
} from "../scripts/components/UserInfo.js";


//Создать карточку
const createCard = (item) => {
    const card = new Card(item, '#template', () => {
        imagePopup.open(item)
    });
    return card.generateCard();
};

//Заполнить контейнер карточками
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, cardsContainer);

cardList.renderItems();

//Создать попапы
const imagePopup = new PopupWithImage('.popup_type_image');
const addCardPopup = new PopupWithForm('.card-popup', ((data) => {
    const card = createCard({
        title: data.title,
        link: data.link
    });
    cardList.addItem(card);
    addCardPopup.close();
}));
const profilePopup = new PopupWithForm('.profile-popup', ((data) => {
    userInfo.setUserInfo(data)
    profilePopup.close();
}));

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
profilePopup.setEventListeners();


const userInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileProfessionSelector: '.profile__profession'
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

// Откыть/закрыть profile popup
const openProfilePopup = () => {
    const {
        name,
        profession
    } = userInfo.getUserInfo()
    nameInput.value = name;
    professionInput.value = profession;
    formValidators['profile-form'].resetValidation();
    formValidators['profile-form'].disableSumbitButton();
    profilePopup.open();
}

// Открыть/закрыть card popup
function openCardPopup() {
    addCardPopup.open();
    formValidators['card-form'].resetValidation();
}


profileOpenButton.addEventListener('click', openProfilePopup);

popupAddCardButton.addEventListener('click', openCardPopup);