export class Card {
    constructor(element, templateSelector) {
        this._link = element.link;
        this._text = element.name;
        this._like = element.like;
        this._delete = element.delete;
        this._template = document.querySelector(templateSelector).content;
    }

    _deleteCard() {
        const cardDelete = event.target.closest('.element');
        if (cardDelete) {
            cardDelete.remove();
        }
    }

    _likeCard() {
        const elementLike = event.target;
        if (elementLike) {
            elementLike.classList.toggle('element__like_type_active');
        }
    }
    
    render(cards) {
        this._content = this._template.cloneNode(true);
        this._content.querySelector('.element__title').textContent = this._text;
        const image = this._content.querySelector('.element__image');
        image.src = this._link;
        image.addEventListener('click', () => this._openPopupImage());
        this._content
            .querySelector('.element__delete')
            .addEventListener('click', () => this._deleteCard());
        this._content
            .querySelector('.element__like')
            .addEventListener('click', () => this._likeCard());
        cards.prepend(this._content);
    }

    _openPopupImage() {
        const popupImage = document.querySelector('.popup_type_image');
        const popupImagePhoto = popupImage.querySelector('.popup__place-photo');
        const popupImageTitle = popupImage.querySelector('.popup__place-title');
            popupImagePhoto.src = this._link; 
            popupImageTitle.textContent = this._text; 
            popupImagePhoto.alt = this._text;          
    }   
}







