import { elementSelector,
         elementNameSelector,
         elementPhotoSelector,
         elementLikeSelector,
         elementDeleteSelector
        } from '../utils/constants.js';

export class Card {
  constructor(data, cardSelector, handleCardClickCallback) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClickCallback = handleCardClickCallback;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(elementSelector)
    .cloneNode(true);

    return cardElement;
  }

  createCardElement() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(elementNameSelector).textContent = this._name;
    const elementPhoto = this._element.querySelector(elementPhotoSelector);
    elementPhoto.src = this._link;
    elementPhoto.setAttribute('alt', this._name);
    
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(elementLikeSelector).addEventListener('click', () => {
      this._toggleLike();
    });
  
    this._element.querySelector(elementDeleteSelector).addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector(elementPhotoSelector).addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _toggleLike() {
    this._element.querySelector(elementLikeSelector).classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }
  
  _handleCardClick() {
    this._handleCardClickCallback(this._name, this._link);
  }
}