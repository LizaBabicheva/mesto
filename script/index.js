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