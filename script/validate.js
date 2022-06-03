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
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, options);
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
    formSelector: '.popup__input-lable',
    inputSelector: '.popup__input',

    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
});
