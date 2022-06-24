class FormValidator {
  constructor(data, formElement) {
    // this._formSelector = data.formSelector;
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
  
   _toggleFormButton() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => _hideInputError(inputElement));
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
    // const formList = Array.from(document.querySelectorAll(this._formSelector));
    // formList.forEach((formElement) => {
    //   _setEventListener(formElement, options);
    // })
  }
}


export {FormValidator};

// function showInputError(formElement, inputElement, errorMessage, options) {
//     const errorElement = inputElement.closest(options.formLabelSelector).querySelector(options.inputErrorSelector);
//     inputElement.classList.add(options.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(options.errorClass);
//   };
  
//   function hideInputError(formElement, inputElement, options) {
//     const errorElement = inputElement.closest(options.formLabelSelector).querySelector(options.inputErrorSelector);
//     inputElement.classList.remove(options.inputErrorClass);
//     errorElement.classList.remove(options.errorClass);
//     errorElement.textContent = '';
//   };
  
//   function isValid(formElement, inputElement, options) {
//     if(!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage, options);
//     } else {
//       hideInputError(formElement, inputElement, options);
//     }
//   }

  
//   function hasInputInvalid(inputList) {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }
  
//   function toggleFormButton(formElement, options) {
//     const buttonElement = formElement.querySelector(options.submitButtonSelector);
//     const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
//     toggleButtonState(inputList, buttonElement, options);
//     inputList.forEach((inputElement) => hideInputError(formElement, inputElement, options));
//   }
  
//   function toggleButtonState(inputList, buttonElement, options) {
//     if (hasInputInvalid(inputList)) {
//       buttonElement.classList.add(options.inactiveButtonClass);
//       buttonElement.setAttribute('disabled', '');
//     } else {
//       buttonElement.classList.remove(options.inactiveButtonClass);
//       buttonElement.removeAttribute('disabled');
//     }
//   }
  
//   function setEventListener(formElement, options) {
//     const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
//     const buttonElement = formElement.querySelector(options.submitButtonSelector);
//     toggleButtonState(inputList, buttonElement, options);
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         isValid(formElement, inputElement, options);
//         toggleButtonState(inputList, buttonElement, options);
//       });
//     });
//   }
  
//   function enableValidation(options) {
//     const formList = Array.from(document.querySelectorAll(options.formSelector));
//     formList.forEach((formElement) => {
//       setEventListener(formElement, options);
//     })
//   }