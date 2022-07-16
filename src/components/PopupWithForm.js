import { Popup } from './Popup';

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, validator) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
    this._validator = validator;
  }

  _getInputValues() {
    const values = [];
    
    this._inputList = this._popup.querySelectorAll('.popup__input');

    //this._popup.querySelectorAll(popupInputSelector).forEach((input) => {
    this._inputList.forEach((input) => {
      input.push(input.value);
    })

    return values;
  }

  open() {
    super.open();
    this._validator.toggleFormButton();
  }

  setInputValue(inputSelector, value) {
    this._popup.querySelector(inputSelector).value = value;
  }

  enableValidation() {
    this._validator.enableValidation();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', this._submitCallback);
   }

  close() {
    super.close();
    this._form.reset();
  }
}