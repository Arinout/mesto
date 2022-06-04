export const validateObj = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_error',
  error: 'popup__error_visible'
};

export class formValidator {
  constructor(obj, formElement) {
    this._formElement = formElement;
    this._inputElement = obj.inputElement;
    this._submitButton = obj.submitButton;
    this._inactiveButton = obj.inactiveButton;
    this._inputError = obj.inputError;
    this._error = obj.error;
  }

  _showInputError(inputElement) {
    this._formElement.querySelector(`.${inputElement.id}-error`).textContent = inputElement.validationMessage;
    this._formElement.querySelector(`.${inputElement.id}-error`).classList.add(this._error);
    inputElement.classList.add(this._inputError);
  }

  _hideInputError(inputElement) {
    this._formElement.querySelector(`.${inputElement.id}-error`).classList.remove(this._error);
    inputElement.classList.remove(this._inputError);
    this._formElement.querySelector(`.${inputElement.id}-error`).textContent.reset;
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputElement));
    this._buttonElement = this._formElement.querySelector(this._submitButton);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  };


  _hasInvalidInput() {

    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSumbitButton();
    } else {
      this._enableSumbitButton();
    }
  }

  _disableSumbitButton() {
    this._buttonElement = this._formElement.querySelector(this._submitButton);
    this._buttonElement.classList.add(this._inactiveButton);
    this._buttonElement.setAttribute('disabled', true);
  }

  _enableSumbitButton() {
    this._buttonElement.classList.remove(this._inactiveButton);
    this._buttonElement.removeAttribute('disabled');
  }
}