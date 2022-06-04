//const formElement = document.querySelector('.popup__form');
// const formInput = formElement.querySelector('.popup__input');
//const formError = formElement.querySelector('.popup__error');

function showInputError(formElement, inputElement, errorMessage, options) {
  const errorElement = formElement.querySelector('.popup__error');
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);

};

function hideInputError(formElement, inputElement, options) {
    const errorElement = formElement.querySelector('.popup__error');
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

function setEventListener(formElement, options) {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.closest('.popup__form').querySelector(options.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, options);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, options);
            toggleButtonState(inputList, buttonElement, options);
        });
    });
}

function enebleValidation(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formElement, options);
    })
}

enebleValidation({
    formSelector: '.popup__input-label',
    inputSelector: '.popup__input',

    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',

    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
});


function hasInputValid(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

function toggleButtonState(inputList, buttonElement, options) {
    if (hasInputValid(inputList)) {
        buttonElement.classList.add(options.inactiveButtonClass);
        buttonElement.setAttribute('disabled', '');
    } else {
        buttonElement.classList.remove(options.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}