//const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupElement = document.querySelector('.popup_type_photo');

const formElement = document.querySelector('.popup__container');

const nameInput = formElement.querySelector('#input-profile-name');
const jobInput = formElement.querySelector('#input-profile-about');
const nameLabel = document.querySelector('.profile__name');
const jobLabel = document.querySelector('.profile__about');

const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const popupPlacePhoto = document.querySelector('.popup__photo-image');
const popupPlaceName = document.querySelector('.popup__photo-caption');


// const placeNameInput = formAdd.querySelector('.popup__input_type_placename');
// const placePhotoInput = formAdd.querySelector('.popup__input_type_image');

//const placeNameLabel = document.querySelector('.element__name');
//const placePhoto = document.querySelector('.element__photo');

//Profile popup
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
}

profileEditButton.addEventListener('click', openPopupEdit);


//Add popup
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

elementAddButton.addEventListener('click', openPopupAdd);




//elementPhoto.addEventListener('click', openPopupElement);



function closePopup() {
  popupEdit.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);


popupCloseButton.addEventListener('click', closePopup);


//Нов
// const formAdd = document.querySelector('.popup__container_type_add');


//Template
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

const elementTemplate = document.querySelector('.elements-template').content;
const elementList = document.querySelector('.elements');

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

function addCardDeleteHandlers(card) {
  const elementDeleteButton = card.querySelector('.element__delete');
  elementDeleteButton.addEventListener('click', deleteCard);
}

function deleteCard(clickEvent) {
  const element = clickEvent.currentTarget.closest('.element');
  element.remove();
}

//Photo popup
function openPopupElement(clickEvent) {
  popupElement.classList.add('popup_opened');

  const sourceElement = clickEvent.currentTarget.closest('.element');
  popupPlacePhoto.src = sourceElement.querySelector('.element__photo').src;
  popupPlaceName.textContent = sourceElement.querySelector('.element__name').textContent;
}

initialCards.forEach(card => {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  newElement.querySelector('.element__name').textContent = card.name;
  newElement.querySelector('.element__photo').src = card.link;
  addCardLikeHandlers(newElement);
  addCardPhotoHandlers(newElement);
  addCardDeleteHandlers(newElement);
  elementList.append(newElement);
});

//DeleteElement

// elementDeleteButton.addEventListener('click', function() {
//   const element = deleteButton.closest('.element');
//   element.remove();
// })