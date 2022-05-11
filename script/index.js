let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#input-profile-name');
let jobInput = formElement.querySelector('#input-profile-about');
let nameLabel = document.querySelector('.profile__name');
let jobLabel = document.querySelector('.profile__about');
let popup = document.querySelector('.popup');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
}

function closePopup() {
  document.querySelector('.popup').classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameLabel.textContent = nameInput.value;
  jobLabel.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

document.querySelector('.profile__edit-button').addEventListener('click', openPopup);
document.querySelector('.popup__close-button').addEventListener('click', closePopup);