import { Popup } from './Popup';
import { popupPlacePhotoSelector,
         popupPlaceNameSelector
        } from '../utils/constants.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector(popupPlacePhotoSelector);
    this._popupCaption = this._popup.querySelector(popupPlaceNameSelector);

  }
  open(data){
    super.open();
    this._popupPhoto.src = data.link;
    this._popupCaption.textContent = data.name;
    this._popupPhoto.alt = data.name;
  }
}