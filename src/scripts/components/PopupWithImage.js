import {
  Popup
} from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector){
    super((popupSelector));
    this._image = this._popup.querySelector('.image-popup__image');
    this._caption = this._popup.querySelector('.image-popup__caption');
  }
  open(item) {
    this._image.src = item.link
    this._image.alt = item.name
    this._caption.textContent = item.name

    super.open()
  }
}