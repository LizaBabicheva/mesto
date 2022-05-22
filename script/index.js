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
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupElement = document.querySelector('.popup_type_photo');

const formElement = document.querySelector('.popup__container_type_edit');
const formAdd = document.querySelector('.popup__container_type_add');

const nameInput = formElement.querySelector('.popup__input_type_profilename');
const jobInput = formElement.querySelector('.popup__input_type_profileabout');
const nameLabel = document.querySelector('.profile__name');
const jobLabel = document.querySelector('.profile__about');

const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButton = document.querySelector('.profile__add-button');

const popupPlacePhoto = document.querySelector('.popup__photo-image');
const popupPlaceName = document.querySelector('.popup__photo-caption');

const placeNameInput = formAdd.querySelector('.popup__input_type_placename');
const placePhotoInput = formAdd.querySelector('.popup__input_type_placephoto');

const elementTemplate = document.querySelector('.element-template').content;
const elementList = document.querySelector('.elements');

function createCardElement(name, link) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  newElement.querySelector('.element__name').textContent = name;
  newElement.querySelector('.element__photo').src = link;
  addCardLikeHandlers(newElement);
  addCardPhotoHandlers(newElement);
  addCardDeleteHandlers(newElement);
  return newElement;
}

initialCards.forEach(card => {
  const newElement = createCardElement(card.name, card.link);
  elementList.append(newElement);
});

function addCardLikeHandlers(card) {
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
}

function addCardPhotoHandlers(card) {
  const elementPhoto = card.querySelector('.element__photo');
  elementPhoto.addEventListener('click', openPopupElement);
}

function deleteCard(clickEvent) {
  const element = clickEvent.currentTarget.closest('.element');
  element.remove();
}

function addCardDeleteHandlers(card) {
  const elementDeleteButton = card.querySelector('.element__delete');
  elementDeleteButton.addEventListener('click', deleteCard);
}



function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopup(evt);
}



function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function addCard (evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = placePhotoInput.value;
  const newElement = createCardElement(name, link);
  elementList.prepend(newElement);
  closePopup(evt);
}

function openPopupElement(clickEvent) {
  popupElement.classList.add('popup_opened');
  const sourceElement = clickEvent.currentTarget.closest('.element');
  popupPlacePhoto.src = sourceElement.querySelector('.element__photo').src;
  popupPlaceName.textContent = sourceElement.querySelector('.element__name').textContent;
}



function closePopup(evt) {
  let closeButton = evt.target;
  let popup = closeButton.closest('.popup');
  popup.classList.remove('popup_opened');
}


profileEditButton.addEventListener('click', openPopupEdit);
elementAddButton.addEventListener('click', openPopupAdd);
popupAdd.addEventListener('submit', addCard);
formElement.addEventListener('submit', handleFormSubmit);


document.querySelectorAll('.popup__close-button').forEach((button) => {
  button.addEventListener('click', closePopup);
})