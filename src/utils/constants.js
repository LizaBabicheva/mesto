export const initialCards = [
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
  
  //export const popupInputSelector = '.popup__input';

  export const validationOptions = {
    formLabelSelector: '.popup__input-label',
    inputSelector: '.popup__input',
    inputErrorSelector:'.popup__error',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    inactiveButtonClass: 'popup__save-button_disabled',
  };
  
  export const profileEditPopup = document.querySelector('.popup_type_edit');
  export const cardAddPopup = document.querySelector('.popup_type_add');

  export const profilePopupSelector = '.popup_type_edit';
  export const cardPopupSelector = '.popup_type_add';
  export const imagePopupSelector = '.popup_type_photo';
  
  const containerAdd = document.querySelector('.popup__container_type_add');
  
  //export const formSelector = '.popup__form';
  
  export const profileNameInputSelector = '.popup__input_type_profilename';
  export const profileAboutInputSelector = '.popup__input_type_profileabout';
  export const nameLabelSelector = '.profile__name';
  export const jobLabelSelector = '.profile__about';
  
  export const profileEditButton = document.querySelector('.profile__edit-button');
  export const elementAddButton = document.querySelector('.profile__add-button');
  
  //export const popupCloseButtonSelector = '.popup__close-button';
  
  // export const popupPlacePhotoSelector = '.popup__photo-image';
  // export const popupPlaceNameSelector = '.popup__photo-caption';
  
  export const placeNameInput = containerAdd.querySelector('.popup__input_type_placename');
  export const placePhotoInput = containerAdd.querySelector('.popup__input_type_placephoto');
  
  export const elementSelector = '.element';
  export const elementNameSelector = '.element__name';
  export const elementPhotoSelector = '.element__photo';
  export const elementLikeSelector = '.element__like';
  export const elementDeleteSelector = '.element__delete';
  export const elementListSelector = '.elements';
  export const elementList = document.querySelector('.elements');
  
  export const elementDefaultTemplate = '.element-template_type_default';