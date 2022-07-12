import '../pages/index.css';

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationOptions = {
  formLabelSelector: '.popup__input-label',
  inputSelector: '.popup__input',
  inputErrorSelector:'.popup__error',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inactiveButtonClass: 'popup__save-button_disabled',
};

const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_add');
const imagePopup = document.querySelector('.popup_type_photo');

const containerEdit = document.querySelector('.popup__container_type_edit');
const containerAdd = document.querySelector('.popup__container_type_add');

const formEdit = containerEdit.querySelector('.popup__form');
const formAdd = containerAdd.querySelector('.popup__form');

const nameInput = containerEdit.querySelector('.popup__input_type_profilename');
const jobInput = containerEdit.querySelector('.popup__input_type_profileabout');
const nameLabel = document.querySelector('.profile__name');
const jobLabel = document.querySelector('.profile__about');

const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButton = document.querySelector('.profile__add-button');

const cardPopupSaveButton = cardPopup.querySelector('.popup__save-button');

const popupPlacePhoto = document.querySelector('.popup__photo-image');
const popupPlaceName = document.querySelector('.popup__photo-caption');

const placeNameInput = containerAdd.querySelector('.popup__input_type_placename');
const placePhotoInput = containerAdd.querySelector('.popup__input_type_placephoto');

const elementList = document.querySelector('.elements');

const validators = [];

initialCards.forEach(item => {
  const cardElement = createCardElement(item);
  elementList.append(cardElement);
});

document.querySelectorAll('.popup__form').forEach(formElement => {
  const validator = new FormValidator(validationOptions, formElement);
  validators.push(validator);
  validator.enableValidation();
});

function createCardElement(cardData) {
  const card = new Card(cardData, '.element-template_type_default', openImagePopup);
  return card.createCardElement();
}

function findValidator(form) {
  for (const idx in validators) {
    const validator = validators[idx];
    if (validators[idx].isSameForm(form)) {
      return validator;
    }
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscButton);
}

function openProfilePopup() {
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
  openPopup(profilePopup);
  
  findValidator(formEdit).toggleFormButton();
}

function handleProfileEdit(evt) {
  evt.preventDefault();

  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopup(profilePopup);
}

function addCard(evt) {
  evt.preventDefault();
  
  const name = placeNameInput.value;
  const link = placePhotoInput.value;
  
  const newElement = createCardElement({name: name, link: link});

  elementList.prepend(newElement);
  closePopup(cardPopup);
  formAdd.reset();
}

function openImagePopup(name, link) {
  popupPlacePhoto.src = link;
  popupPlaceName.textContent = name;
  popupPlacePhoto.alt = popupPlaceName.textContent;
  openPopup(imagePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscButton);
}

function closePopupEscButton(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupClick(evt){
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

document.querySelectorAll('.popup__close-button').forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', closePopupClick);
});

profileEditButton.addEventListener('click', openProfilePopup);

elementAddButton.addEventListener('click', () => {
  openPopup(cardPopup);
  findValidator(formAdd).toggleFormButton();
});

formAdd.addEventListener('submit', addCard);
formEdit.addEventListener('submit', handleProfileEdit);