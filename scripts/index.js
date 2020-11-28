
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


//функции открытия и закрытия

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
} 

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
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


document.addEventListener('keydown', closePopupKeydown);

//открытие и закрытие Add
addButton.addEventListener('click', function() {
    openPopup(popupAdd);
    
});


popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

popupAdd.addEventListener('click', closePopupOverlay);


//открытие и закрытие Edit
editButton.addEventListener('click', function() {
    openPopup(popupEdit);
});

popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
});

popupEdit.addEventListener('click', closePopupOverlay);


//открытие и закрытие Image
popupImageCloseButton.addEventListener('click', function() {
    closePopup(popupImage);
});

popupImage.addEventListener('click', closePopupOverlay);






// отправка Edit
const formEditElement = document.querySelector('.popup__input-buttom_type_edit');
const nameInput = popupEdit.querySelector('.popup__form-name');
const jobInput = popupEdit.querySelector('.popup__form-profession');
const profile = document.querySelector('.profile');
const changeNameInput = profile.querySelector('.profile__name');
const changeJobInput = profile.querySelector('.profile__profession');

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


const cards = document.querySelector('.cards');
const addForm = document.querySelector('.popup__form_type_add');

function addCard(element) {
const templateCard = document.querySelector ('.template').content.cloneNode(true);
const elementImage = templateCard.querySelector('.element__image');

    templateCard.querySelector('.element__title').textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;
    templateCard.querySelector('.element__trash').addEventListener('click', event => { 
        const cardDelete = event.target.closest('.element'); 
 
        if(cardDelete) { 
            cardDelete.remove(); 
        } 
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
    
    const element = addCard( {
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
    const card = addCard(info);
    cards.append(card);
  });


  document.addEventListener('keydown', closePopupKeydown);