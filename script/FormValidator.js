class FormValidator {
  constructor(data, formElement) {
    this._formLabelSelector = data.formLabelSelector;
    this._inputSelector = data.inputSelector;
    this._inputErrorSelector = data.inputErrorSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inactiveButtonClass = data.inactiveButtonClass;

    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    }
  
  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.closest(this._formLabelSelector).querySelector(this._inputErrorSelector);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }
  
  _hideInputError(inputElement) {
    const errorElement = inputElement.closest(this._formLabelSelector).querySelector(this._inputErrorSelector);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  
  _hasInputInvalid(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
   toggleFormButton() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
  }
  
  _toggleButtonState() {
    if (this._hasInputInvalid(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }
  
  _setEventListener() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this._setEventListener();
  }

  isSameForm(form) {
      return this._formElement == form;
  }
}

export {FormValidator};