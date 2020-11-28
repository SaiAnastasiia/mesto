//переменные Add
const popupAdd = document.querySelector('.popup_type_add');
const popupAddCloseButton = popupAdd.querySelector('.popup__close-image');
const addButton = document.querySelector('.add-button');

//переменные Edit
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-image');
const editButton = document.querySelector('.edit-button');

//переменные Image
const popupImage = document.querySelector('.popup_type_image');
const popupImagePhoto = popupImage.querySelector('.popup__place-photo');
const popupImageTitle = popupImage.querySelector('.popup__place-title');
const popupImageCloseButton = popupImage.querySelector('.popup__close-image');

function deleteErrorMessage(popup) {
    const errors = popup.querySelectorAll(validationConfig.errorMessage);
    Array.from(errors).forEach((error) => {
        error.textContent = " ";
    });
    const inputs = popup.querySelectorAll(validationConfig.inputSelector);
    Array.from(inputs).forEach((input) => {
        input.classList.remove(validationConfig.inputInvalidClass);
    });
}

//функции открытия и закрытия
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydown);
    document.addEventListener('click', closePopupOverlay);
} 

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.addEventListener('keydown', closePopupKeydown);
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

//открытие и закрытие Add
addButton.addEventListener('click', function() {
    openPopup(popupAdd);
    const form = document.querySelector(validationConfig.formSelector);
    const saveButton = form.querySelector(validationConfig.submitButtonSelector);
    setButtonState(saveButton, form.checkValidity(), validationConfig);
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

//открытие и закрытие Edit
editButton.addEventListener('click', function() {
    openPopup(popupEdit);
    const form = document.querySelector(validationConfig.formSelector);
    const saveButton = form.querySelector(validationConfig.submitButtonSelector);
    setButtonState(saveButton, form.checkValidity(), validationConfig);
});

popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
    const form = document.querySelector(validationConfig.formSelector)
    form.reset();
    deleteErrorMessage(popupEdit);
});

//открытие и закрытие Image
popupImageCloseButton.addEventListener('click', function() {
    closePopup(popupImage);
});

// отправка Edit
const formEditElement = document.querySelector('.popup__input-buttom_type_edit');
const nameInput = popupEdit.querySelector('.popup__form-name');
const jobInput = popupEdit.querySelector('.popup__form-profession');
const profile = document.querySelector('.profile');
const changeNameInput = profile.querySelector('.profile__name');
const changeJobInput = profile.querySelector('.profile__profession');

function formEditSubmitHandler (evt) {
    evt.preventDefault(); 
    changeNameInput.textContent = nameInput.value;
    changeJobInput.textContent = jobInput.value;
}
formEditElement.addEventListener('click', formEditSubmitHandler); 

const buttonSaveEditPopup = popupEdit.querySelector('.popup__input-buttom_type_edit');
buttonSaveEditPopup.addEventListener('click', function() {
    closePopup(popupEdit);
});

// создание карточек
const cards = document.querySelector('.cards');
const addForm = document.querySelector('.popup__form_type_add');

function createCard(element) {
const templateCard = document.querySelector ('.template').content.cloneNode(true);
const elementImage = templateCard.querySelector('.element__image');
    templateCard.querySelector('.element__title').textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;
    templateCard.querySelector('.element__trash').addEventListener('click', event => { 
        const cardDelete = event.target.closest('.element'); 
        cardDelete.remove(); 
    }); 
 
    templateCard.querySelector('.element__like').addEventListener('click', event => { 
        const elementLike = event.target; 
        if(elementLike) { 
            elementLike.classList.toggle('element__like_type_active'); 
        } 
    }); 
 
    templateCard.querySelector('.element__image-button').addEventListener('click', event => { 
        openPopup(popupImage); 
        popupImagePhoto.src = event.target.src; 
        popupImageTitle.textContent = element.name; 
    }); 
    
    return templateCard;
}
  
addForm.addEventListener('submit', event => {
    event.preventDefault();
    const inputPlace = document.querySelector('.popup__form-place');
    const inputLink = document.querySelector('.popup__form-image');
    const element = createCard( {
        name: inputPlace.value,
        link: inputLink.value
    });
    cards.prepend(element);
    addForm.reset();
});
const inputButton = document.querySelector('.popup__input-buttom_type_add');
inputButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

initialCards.forEach(info => {  
    const card = createCard(info);
    cards.append(card);
});




/*
Если я просто закрыл попап и открыл его снова, то я вижу значения и ошибки с прошлого ввода, этого быть не должно.


Попап добавления карточки всегда должен открываться в обновленном состоянии, сейчас это нет.*/