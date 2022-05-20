let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#input-profile-name');
let jobInput = formElement.querySelector('#input-profile-about');
let nameLabel = document.querySelector('.profile__name');
let jobLabel = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


//Нов popup
// const popupAdd = document.querySelector('.popup_type_add');
// const formAdd = document.querySelector('.popup__container_type_add');
// const placeNameInput = formAdd.querySelector('.popup__input_type_placename');
// const placeImageInput = formAdd.querySelector('.popup__input_type_image');
// const placeNameLabel = document.querySelector('.element__name');
// const placePhoto = document.querySelector('.element__photo');
// const elementAddButton = document.querySelector('.profile__add-button');

// function openPopupAdd() {
//   popupAdd.classList.add('popup_opened');
// }

// function closePopupAdd() {
//   popupAdd.classList.remove('popup_opened');
// }


// elementAddButton.addEventListener('click', openPopupAdd);
// popupCloseButton.addEventListener('click', closePopupAdd);



//Like
const elementCards = document.querySelectorAll('.element');

elementCards.forEach(elementCard => {
  const likeButton = elementCard.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
});