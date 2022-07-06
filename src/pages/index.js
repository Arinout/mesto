import "./index.css";

import {
  Api
} from "../scripts/components/Api.js"

import {
  Card
} from '../scripts/components/Card.js'
import {
  FormValidator
} from '../scripts/components/FormValidator.js'
import {
  validateObj,
  profileOpenButton,
  nameInput,
  professionInput,
  popupAddCardButton,
  cardsContainer,
  avatarEditButton
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

import {
  PopupConfirm
} from "../scripts/components/PopupConfirm.js";

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: 'f4349342-e78d-4d82-b5cb-b5888acdc182',
    'Content-Type': 'application/json',
  },
};
const api = new Api(apiConfig);
// Информация пользователя
let userId

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userId = userData._id;
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// Информация пользователя      
const userInfo = new UserInfo({
  username: '.profile__name',
  profession: '.profile__profession',
  avatar: '.profile__image'
});
// Profile popup
const profilePopup = new PopupWithForm('.profile-popup', ((data) => {
  profilePopup.savе(true);
  api.editUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data)
      profilePopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      profilePopup.savе(false);
    });
}));
profilePopup.setEventListeners();

// Card popup
const addCardPopup = new PopupWithForm('.card-popup', ((data) => {
  addCardPopup.savе(true);
  api.addNewCard(data)
    .then((data) => {
      cardList.addItem(createCard(data));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      addCardPopup.savе(false);
    });
}));

addCardPopup.setEventListeners();

// Image popup
const imagePopup = new PopupWithImage('.popup_type_image');

imagePopup.setEventListeners();

// Avatar popup

const avatarPopup = new PopupWithForm('.popup_type_avatar', ((data) => {
  avatarPopup.savе(true);
  api.editAvatar(data)
    .then((data) => {
      userInfo.setUserAvatar(data)
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      avatarPopup.savе(false);
    });
}));

avatarPopup.setEventListeners();

// Delete popup
const deleteCardPopup = new PopupConfirm('.popup_type_delete-card');
deleteCardPopup.setEventListeners();

//Создать карточку
const createCard = (item) => {
  const card = new Card({
    data: item,
    cardSelector: '#template',
    userId: userId,
    openImagePopup: () => {
      imagePopup.open(item);
    },
    deleteCardIcon: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.callBackSubmit(() => {
        api.deleteCard(cardId)
          .then((cardId) => {
            deleteCardPopup.close();
            card.deleteCard(cardId);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      })
    },
    setLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    removeLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  })
  return card.generateCard();
}
//Заполнить контейнер карточками
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsContainer);

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

// Открыть/закрыть AvatarPopup

const openAvatarPopup = () => {
  avatarPopup.open();
  formValidators['avatar-form'].resetValidation();
}

// Валидация
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

avatarEditButton.addEventListener('click', openAvatarPopup)

profileOpenButton.addEventListener('click', openProfilePopup);

popupAddCardButton.addEventListener('click', openCardPopup);