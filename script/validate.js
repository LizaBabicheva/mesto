function showInputError(formElement, inputElement, errorMessage, options) {
  const errorElement = inputElement.closest(options.formLabelSelector).querySelector(options.inputErrorSelector);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

function hideInputError(formElement, inputElement, options) {
  const errorElement = inputElement.closest(options.formLabelSelector).querySelector(options.inputErrorSelector);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
};

function isValid(formElement, inputElement, options) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function isFormHasInvalidInput(formElement, options) {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  return hasInputInvalid(inputList);
}

function hasInputInvalid(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleFormButton(formElement, options) {
  const buttonElement = formElement.closest(options.formSelector).querySelector(options.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  toggleButtonState(inputList, buttonElement, options);
}

function toggleButtonState(inputList, buttonElement, options) {
  if (hasInputInvalid(inputList)) {
    buttonElement.classList.add(options.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass);
  }
}

function setEventListener(formElement, options) {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, options);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, options);
      toggleButtonState(inputList, buttonElement, options);
    });
  });
}

function enableValidation(options) {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    setEventListener(formElement, options);
  })
}