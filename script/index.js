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

const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_add');
const imagePopup = document.querySelector('.popup_type_photo');

const containerEdit = document.querySelector('.popup__container_type_edit');
const containerAdd = document.querySelector('.popup__container_type_add');

const formAdd = containerAdd.querySelector('.popup__form');

const nameInput = containerEdit.querySelector('.popup__input_type_profilename');
const jobInput = containerEdit.querySelector('.popup__input_type_profileabout');
const nameLabel = document.querySelector('.profile__name');
const jobLabel = document.querySelector('.profile__about');

const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButton = document.querySelector('.profile__add-button');

const popupPlacePhoto = document.querySelector('.popup__photo-image');
const popupPlaceName = document.querySelector('.popup__photo-caption');

const placeNameInput = containerAdd.querySelector('.popup__input_type_placename');
const placePhotoInput = containerAdd.querySelector('.popup__input_type_placephoto');

const elementTemplate = document.querySelector('.element-template').content;
const elementList = document.querySelector('.elements');

function createCardElement(name, link) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementPhoto = newElement.querySelector('.element__photo');
  newElement.querySelector('.element__name').textContent = name;
  elementPhoto.src = link;
  elementPhoto.setAttribute('alt', name);

  const likeButton = newElement.querySelector('.element__like');
  likeButton.addEventListener('click', () => toggleLike(likeButton));

  elementPhoto.addEventListener('click', openImagePopup);

  const elementDeleteButton = newElement.querySelector('.element__delete');
  elementDeleteButton.addEventListener('click', deleteCard);

  return newElement;
}

initialCards.forEach(card => {
  const newElement = createCardElement(card.name, card.link);
  elementList.append(newElement);
});

function toggleLike(likeButton) {
  likeButton.classList.toggle('element__like_active');
};

function deleteCard(clickEvent) {
  const element = clickEvent.currentTarget.closest('.element');
  element.remove();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openProfilePopup() {
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
  openPopup(profilePopup);
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
  const newElement = createCardElement(name, link);
  elementList.prepend(newElement);
  closePopup(cardPopup);
  formAdd.reset();
}

function openImagePopup(clickEvent) {
  const sourceElement = clickEvent.currentTarget.closest('.element');
  popupPlacePhoto.src = sourceElement.querySelector('.element__photo').src;
  popupPlaceName.textContent = sourceElement.querySelector('.element__name').textContent;
  popupPlacePhoto.alt = popupPlaceName.textContent;
  openPopup(imagePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupEscButton(evt) {
  if (evt.key === 'Escape') { 
    closePopup(document.querySelector('.popup_opened'));
  }
}

function closePopupClick(evt){
  if (evt.target === evt.currentTarget) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

document.querySelectorAll('.popup__close-button').forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', closePopupClick);
});

profileEditButton.addEventListener('click', openProfilePopup);
elementAddButton.addEventListener('click', () => openPopup(cardPopup));
cardPopup.addEventListener('submit', addCard);
containerEdit.addEventListener('submit', handleProfileEdit);
document.addEventListener('keydown', closePopupEscButton);