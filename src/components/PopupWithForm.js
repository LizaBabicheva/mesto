import { Popup } from './Popup';
import { validationOptions,
         popupInputSelector,
         formSelector
        } from '../utils/constants.js';
import { FormValidator } from './FormValidator.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._validator = new FormValidator(validationOptions, this._popup);
  }

  _getInputValues() {
    const values = [];
    this._popup.querySelectorAll(popupInputSelector).forEach((input) => {
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

    this._popup.querySelector(formSelector).addEventListener('submit', this._submitCallback);
   }

  close() {
    super.close();
    this._popup.querySelector(formSelector).reset();
  }
}