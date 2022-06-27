export class FormValidator {
  constructor(obj, formSelector) {
    this._formSelector = formSelector;
    this._inputElement = obj.inputElement;
    this._submitButton = obj.submitButton;
    this._inactiveButton = obj.inactiveButton;
    this._inputError = obj.inputError;
    this._error = obj.error;
  }

  _showInputError(inputElement) {
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._error);
    inputElement.classList.add(this._inputError);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._error);
    inputElement.classList.remove(this._inputError);
    this._errorElement.textContent.reset;
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputElement));
    this._buttonElement = this._formSelector.querySelector(this._submitButton);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  };


  _hasInvalidInput() {

    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    });
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSumbitButton();
    } else {
      this._enableSumbitButton();
    }
  }

  disableSumbitButton() {
    this._buttonElement.classList.add(this._inactiveButton);
    this._buttonElement.setAttribute('disabled', true);
  }

  _enableSumbitButton() {
    this._buttonElement.classList.remove(this._inactiveButton);
    this._buttonElement.removeAttribute('disabled');
  }
}