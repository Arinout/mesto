const validateObj = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_error',
  error: 'popup__error_visible'
};

//Показать сообщение об ошибке
const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.error);
  inputElement.classList.add(obj.inputError);
};

//Спрятать сообщение об ошибке
const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(obj.error);
  inputElement.classList.remove(obj.inputError);
  errorElement.textContent.reset;
};

const isValid = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputElement));
  const buttonElement = formElement.querySelector(obj.submitButton);
  toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, obj)
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, obj);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    disableSumbitButton(buttonElement, obj);
  } else {
    enableSumbitButton(buttonElement, obj);
  }
};

const disableSumbitButton = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButton);
  buttonElement.setAttribute('disabled', true);
}

const enableSumbitButton = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButton);
  buttonElement.removeAttribute('disabled');
}

enableValidation(validateObj);