import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import { 
  initialCards,
  validationOptions,
  profilePopup,
  cardPopup,
  //imagePopup,
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

import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

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

const imagePopup = new PopupWithImage('.popup_type_photo');

imagePopup.setEventListeners();


const addCardPopup = new PopupWithForm(
  '.popup_type_add', addCard
)

addCardPopup.setEventListeners();


const editProfilePopup = new PopupWithForm(
  '.popup_type_edit', handleProfileEdit
)

editProfilePopup.setEventListeners();
editProfilePopup.enableValidation();

const userInfo = new UserInfo('.profile__name', '.profile__about');

// userInfo.setUserInfo({
//   name: document.querySelector('.profile__name').textContent,
//   about: document.querySelector('.profile__about').textContent
// });




document.querySelectorAll('.popup__form').forEach(formElement => {
  const validator = new FormValidator(validationOptions, formElement);
  validators.push(validator);
  validator.enableValidation();
});



function createCardElement(cardData) {
  const card = new Card(cardData, '.element-template_type_default', (name, link) => {
    imagePopup.open({
      name: name, link: link
    });
  });
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

// function openProfilePopup() {
//   nameInput.value = nameLabel.textContent;
//   jobInput.value = jobLabel.textContent;
//   openPopup(profilePopup);
  
//   findValidator(formEdit).toggleFormButton();
// }

function handleProfileEdit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  userInfo.setUserInfo(
    {
      name: formData.get('profile-name'),
      about: formData.get('profile-about')
    }
  )

  editProfilePopup.close();
}

function addCard(evt) {
  evt.preventDefault();
  
  const name = placeNameInput.value;
  const link = placePhotoInput.value;
  
  const newElement = createCardElement({name: name, link: link});

  elementList.prepend(newElement);
  addCardPopup.close();
  formAdd.reset();
}

profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  editProfilePopup.setInputValue('.popup__input_type_profilename', info.name);
  editProfilePopup.setInputValue('.popup__input_type_profileabout', info.about);

  editProfilePopup.open();
})

elementAddButton.addEventListener('click', (e) => {
  e.preventDefault();
  addCardPopup.open();
  findValidator(formAdd).toggleFormButton();
});

// formAdd.addEventListener('submit', addCard);
// formEdit.addEventListener('submit', handleProfileEdit);