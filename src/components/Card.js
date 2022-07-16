export class Card {
    constructor(data, selectors, handleCardClickCallback) {
      this._name = data.name;
      this._link = data.link;
      this._handleCardClickCallback = handleCardClickCallback;
      this._selectors = selectors;

    }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._selectors.cardSelector)
    .content
    .querySelector(this._selectors.elementSelector)
    .cloneNode(true);

    return cardElement;
  }

  createCardElement() {
    this._element = this._getTemplate();

    this._element.querySelector(this._selectors.elementNameSelector).textContent = this._name;

    this._elementPhoto = this._element.querySelector(this._selectors.elementPhotoSelector)
    this._elementPhoto.src = this._link;
    this._elementPhoto.setAttribute('alt', this._name);

    this._likeElement = this._element.querySelector(this._selectors.elementLikeSelector);
    
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeElement.addEventListener('click', () => {
      this._toggleLike();
    });
  
    this._element.querySelector(this._selectors.elementDeleteSelector).addEventListener('click', () => {
      this._deleteCard();
    });

    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _toggleLike() {
    this._likeElement.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }
  
  _handleCardClick() {
    this._handleCardClickCallback(this._name, this._link);
  }
}