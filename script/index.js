let formEdit = document.querySelector('.popup__container_type_edit');
let nameInput = formEdit.querySelector('#input-profile-name');
let jobInput = formEdit.querySelector('#input-profile-about');
let nameLabel = document.querySelector('.profile__name');
let jobLabel = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_type_edit');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');


function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function handleFormEditSubmit (evt) {
  evt.preventDefault();
  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopupEdit();
}

formEdit.addEventListener('submit', handleFormEditSubmit);
profileEditButton.addEventListener('click', openPopupEdit);
popupCloseButton.addEventListener('click', closePopupEdit);


//Нов popup

const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.popup__container_type_add');
const placeNameInput = formAdd.querySelector('.popup__input_type_placename');
const placeImageInput = formAdd.querySelector('.popup__input_type_image');
const placeNameLabel = document.querySelector('.element__name');
const placePhoto = document.querySelector('.element__photo');
const elementAddButton = document.querySelector('.profile__add-button');

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}


elementAddButton.addEventListener('click', openPopupAdd);
popupCloseButton.addEventListener('click', closePopupAdd);


//Like

const elementCards = document.querySelectorAll('.element');

elementCards.forEach(elementCard => {
  const likeButton = elementCard.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
});