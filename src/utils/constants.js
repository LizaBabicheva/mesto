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
  
  const validationOptions = {
    formLabelSelector: '.popup__input-label',
    inputSelector: '.popup__input',
    inputErrorSelector:'.popup__error',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    inactiveButtonClass: 'popup__save-button_disabled',
  };
  
  const profilePopup = document.querySelector('.popup_type_edit');
  const cardPopup = document.querySelector('.popup_type_add');
  const imagePopup = document.querySelector('.popup_type_photo');
  
  const containerEdit = document.querySelector('.popup__container_type_edit');
  const containerAdd = document.querySelector('.popup__container_type_add');
  
  const formEdit = containerEdit.querySelector('.popup__form');
  const formAdd = containerAdd.querySelector('.popup__form');
  
  const nameInput = containerEdit.querySelector('.popup__input_type_profilename');
  const jobInput = containerEdit.querySelector('.popup__input_type_profileabout');
  const nameLabel = document.querySelector('.profile__name');
  const jobLabel = document.querySelector('.profile__about');
  
  const profileEditButton = document.querySelector('.profile__edit-button');
  const elementAddButton = document.querySelector('.profile__add-button');
  
//   const cardPopupSaveButton = cardPopup.querySelector('.popup__save-button');
  
  const popupPlacePhoto = document.querySelector('.popup__photo-image');
  const popupPlaceName = document.querySelector('.popup__photo-caption');
  
  const placeNameInput = containerAdd.querySelector('.popup__input_type_placename');
  const placePhotoInput = containerAdd.querySelector('.popup__input_type_placephoto');
  
  const elementList = document.querySelector('.elements');
  
  const validators = [];

export { 
    initialCards,
    validationOptions,
    profilePopup,
    cardPopup,
    imagePopup,
    // containerEdit,
    // containerAdd,
    formEdit,
    formAdd,
    nameInput,
    jobInput,
    nameLabel,
    jobLabel,
    profileEditButton,
    elementAddButton,
    // cardPopupSaveButton,
    popupPlacePhoto,
    popupPlaceName,
    placeNameInput,
    placePhotoInput,
    elementList,
    validators
 }