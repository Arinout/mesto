import {
  Popup
} from './Popup.js'

export class PopupWithImage extends Popup {
  open(item) {
    this._image = this._popup.querySelector('.image-popup__image');
    this._caption = this._popup.querySelector('.image-popup__caption');

    this._image.src = item.link
    this._image.alt = item.title
    this._caption.textContent = item.title

    super.open()
  }
}