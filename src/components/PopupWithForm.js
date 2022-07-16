import { Popup } from './Popup';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, validator) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
    this._validator = validator;
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {    
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  open() {
    super.open();
    this._validator.toggleFormButton();
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  enableValidation() {
    this._validator.enableValidation();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => this._submitCallback(evt, this._getInputValues()));
   }

  close() {
    super.close();
    this._form.reset();
  }
}