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

const editForm = document.querySelector('.popup__container_type_edit');
const formAdd = document.querySelector('.popup__container_type_add');

const nameInput = editForm.querySelector('.popup__input_type_profilename');
const jobInput = editForm.querySelector('.popup__input_type_profileabout');
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

  const likeButton = newElement.querySelector('.element__like');
  likeButton.addEventListener('click', () => toggleLike(likeButton));

  const elementPhoto = newElement.querySelector('.element__photo');
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
  openPopup(profilePopup);
  nameInput.value = nameLabel.textContent;
  jobInput.value = jobLabel.textContent;
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
  evt.target.reset();
  closePopup(cardPopup);
}

function openImagePopup(clickEvent) {
  const sourceElement = clickEvent.currentTarget.closest('.element');
  popupPlacePhoto.src = sourceElement.querySelector('.element__photo').src;
  popupPlaceName.textContent = sourceElement.querySelector('.element__name').textContent;
  openPopup(imagePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

document.querySelectorAll('.popup__close-button').forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

profileEditButton.addEventListener('click', openProfilePopup);
elementAddButton.addEventListener('click', () => openPopup(cardPopup));
cardPopup.addEventListener('submit', addCard);
editForm.addEventListener('submit', handleProfileEdit);

//закрыть popup esc
function closePopupEscButton(evt) {
 if (evt.keyCode === 27) { 
  closePopup(document.querySelector('.popup_opened'));
 };
};

// cardPopup.addEventListener('keydown', closePopupEscButton);

window.addEventListener('keydown', closePopupEscButton);


//закрыть popup кликом