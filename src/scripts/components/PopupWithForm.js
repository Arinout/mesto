import {
  Popup
} from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll('.popup__input')
    this._sumbitButton = this._form.querySelector('.popup__submit-button')
    this._sumbitButtonValue = this._sumbitButton.getAttribute('value')
  }

  _getInputValues() {
    this._values = {}
    this._inputs.forEach(input => {
      this._values[input.name] = input.value
    })
    return this._values
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleSubmit(this._getInputValues())
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._sumbitButton.setAttribute('value', 'Сохранение...');
    } else {
      this._sumbitButton.setAttribute('value', this._sumbitButtonValue);
    }
  }
}