import './index.css';

import {Card} from '../components/Card.js';
import { 
  initialCards,
  validationOptions,
  profileEditPopup,
  cardAddPopup,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  nameLabelSelector,
  jobLabelSelector,
  profileEditButton,
  elementAddButton,
  elementSelector,
  elementNameSelector,
  elementPhotoSelector,
  elementLikeSelector,
  elementDeleteSelector,
  elementListSelector,
  elementDefaultTemplate
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCardElement(item);
    cardList.addItem(cardElement);
  }
},
  elementListSelector
)

const imagePopup = new PopupWithImage(imagePopupSelector);

const addCardPopupValidator = new FormValidator(validationOptions, cardAddPopup);

const addCardPopup = new PopupWithForm(
  cardPopupSelector, addCard, addCardPopupValidator
)

const editProfilePopupValidator = new FormValidator(validationOptions, profileEditPopup);

const editProfilePopup = new PopupWithForm(
  profilePopupSelector, handleProfileEdit, editProfilePopupValidator
)

const userInfo = new UserInfo(nameLabelSelector, jobLabelSelector);

cardList.renderItems();

imagePopup.setEventListeners();

addCardPopup.setEventListeners();
addCardPopup.enableValidation();

editProfilePopup.setEventListeners();
editProfilePopup.enableValidation();



function createCardElement(cardData) {
  const card = new Card(cardData, 
    {
    elementSelector: elementSelector,
    elementNameSelector: elementNameSelector,
    cardSelector: elementDefaultTemplate,
    elementLikeSelector: elementLikeSelector,
    elementPhotoSelector: elementPhotoSelector,
    elementDeleteSelector: elementDeleteSelector
    }, 
    (name, link) => {
      imagePopup.open({
        name: name, link: link
      });
    });
  return card.createCardElement();
}

function handleProfileEdit(evt, data) {
  evt.preventDefault();

  userInfo.setUserInfo(
    {
      name: data['profile-name'],
      about: data['profile-about']
    }
  )

  editProfilePopup.close();
}

function addCard(evt, data) {
  evt.preventDefault();
  
  const newElement = createCardElement({
    name: data['element-name'],
    link: data['element-image']
  });

  cardList.prependItem(newElement);
  addCardPopup.close();
}

profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();

  editProfilePopup.setInputValues({
    'profile-name': info.name,
    'profile-about': info.about
  });

  editProfilePopup.open();
})

elementAddButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addCardPopup.open();
});