import { Popup } from './Popup';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector('.popup__photo-image');
    this._popupCaption = this._popup.querySelector('.popup__photo-caption');

  }
  open(data){
    super.open();
    this._popupPhoto.src = data.link;
    this._popupCaption.textContent = data.name;
    this._popupPhoto.alt = data.name;
  }
}