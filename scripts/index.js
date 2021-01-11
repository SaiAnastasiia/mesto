import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//переменные Add
const popupAdd = document.querySelector('.popup_type_add');
const popupAddCloseButton = popupAdd.querySelector('.popup__close-image');
const addButton = document.querySelector('.add-button');
const inputPlace = document.querySelector('.popup__form-place');
const inputLink = document.querySelector('.popup__form-image');

//переменные Edit
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-image');
const editButton = document.querySelector('.edit-button');

const formEditElement = document.querySelector('.popup__input-buttom_type_edit');
const nameInput = popupEdit.querySelector('.popup__form-name');
const jobInput = popupEdit.querySelector('.popup__form-profession');
const profile = document.querySelector('.profile');
const changeNameInput = profile.querySelector('.profile__name');
const changeJobInput = profile.querySelector('.profile__profession');

//переменные Image
const popupImage = document.querySelector('.popup_type_image');
const popupImageCloseButton = popupImage.querySelector('.popup__close-image');

const popupSelectorAdd = '#popup-form-add';
const popupSelectorEdit = '#popup-form-edit';

//функции открытия и закрытия
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydown);
    document.addEventListener('click', closePopupOverlay);    
} 

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydown);
    document.addEventListener('click', closePopupOverlay);
} 

function closePopupOverlay (event) {
    const popupOpened = document.querySelector('.popup_is-opened');

    if (event.target.classList.contains('popup_is-opened')) {    
        closePopup(popupOpened);
    }
}

function closePopupKeydown (evt) {
    const popupOpened = document.querySelector('.popup_is-opened');

    if (evt.key === 'Escape') {
        closePopup(popupOpened);
    }
}

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector:  '.popup__input',
    submitButtonSelector: '.popup__input-buttom',
    buttonInvalidClass: 'popup__input-buttom_invalid',
    inputInvalidClass: 'popup__input-invalid',
    errorMessage: '.error',
};

function removeErrorMessage(popup) {
    const errors = popup.querySelectorAll(validationConfig.errorMessage);
    Array.from(errors).forEach((error) => {
        error.textContent = " ";
    });
    const inputs = popup.querySelectorAll(validationConfig.inputSelector);
    Array.from(inputs).forEach((input) => {
        input.classList.remove(validationConfig.inputInvalidClass);
    });
  }

addButton.addEventListener('click', function() {    
    openPopup(popupAdd);
    const addFormValidation = new FormValidator(validationConfig, popupSelectorAdd);
    addFormValidation.enableValidation();
    removeErrorMessage(popupAdd);
    const formInput = popupAdd.querySelector('.popup__form');
    formInput.reset();
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

//открытие и закрытие Edit
editButton.addEventListener('click', function() {
    openPopup(popupEdit);
    const editFormValidation = new FormValidator(validationConfig, popupSelectorEdit);
    editFormValidation.enableValidation();
    const formInput = popupEdit.querySelector('.popup__form');
    formInput.reset();
    nameInput.value = changeNameInput.textContent;
    jobInput.value = changeJobInput.textContent;
});

popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
});

// отправка Edit
function formEditSubmitHandler (evt) {
    evt.preventDefault(); 
         
    const name = nameInput.value;
    const job = jobInput.value; 
        
    changeNameInput.textContent = name;
    changeJobInput.textContent = job;
}

formEditElement.addEventListener('click', formEditSubmitHandler); 

const buttonSaveEditPopup = popupEdit.querySelector('.popup__input-buttom_type_edit');
buttonSaveEditPopup.addEventListener('click', function() {
    closePopup(popupEdit);
});

// отправка Add
 
const addForm = document.querySelector('.popup__form_type_add');
addForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const element = addElement( {
        name: inputPlace.value,
        link: inputLink.value
    });
    addForm.reset();
}); 

 const inputButton = document.querySelector('.popup__input-buttom_type_add');
inputButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    }
]; 

const cards = document.querySelector('.cards');

const cardTemplateSelector = '#template';

const addElement = element => {
    const card = new Card(element, cardTemplateSelector);
    card.render(cards);
    document.querySelector('.element__image').addEventListener('click', function() {
        openPopup(popupImage);
    });
    popupImageCloseButton.addEventListener('click', function() {
        closePopup(popupImage);
    });
};

initialCards.forEach(addElement);

