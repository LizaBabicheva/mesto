import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import { 
  initialCards,
  validationOptions,
  profilePopup,
  cardPopup,
  imagePopup,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  nameLabel,
  jobLabel,
  profileEditButton,
  elementAddButton,
  popupPlacePhoto,
  popupPlaceName,
  placeNameInput,
  placePhotoInput,
  elementList,
  validators
} from '../utils/constants.js';

import { Section } from '../components/Section';

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCardElement(item);
    cardList.addItem(cardElement);
  }
},
  '.elements'
)

cardList.renderItems();

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