import './index.css';

import {Card} from '../components/Card.js';
import { 
  initialCards,
  profilePopupSelector,
  cardPopupSelector,
  imagePopupSelector,
  profileNameInputSelector,
  profileAboutInputSelector,
  nameLabelSelector,
  jobLabelSelector,
  profileEditButton,
  elementAddButton,
  placeNameInput,
  placePhotoInput,
  elementList,
  elementListSelector,
  elementDefaultTemplate,
  elementLikeSelector,
  elementPhotoSelector,
  elementDeleteSelector,
  elementSelector,
  elementNameSelector
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
  elementListSelector
)

const imagePopup = new PopupWithImage(imagePopupSelector);

const addCardPopup = new PopupWithForm(
  cardPopupSelector, addCard
)

const editProfilePopup = new PopupWithForm(
  profilePopupSelector, handleProfileEdit
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
}

profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  editProfilePopup.setInputValue(profileNameInputSelector, info.name);
  editProfilePopup.setInputValue(profileAboutInputSelector, info.about);

  editProfilePopup.open();
})

elementAddButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addCardPopup.open();
});