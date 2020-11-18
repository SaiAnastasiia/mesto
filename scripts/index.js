
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

function popupClickHandler() {
    // Используйте один css класс для обозначения элемента модального окна
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
} 

//открытие и закрытие Add
addButton.addEventListener('click', function() {
    openPopup(popupAdd);
});

popupAddCloseButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

popupAdd.addEventListener('click', function() {
    popupClickHandler(popupAdd);
});



//открытие и закрытие Edit
editButton.addEventListener('click', function() {
    openPopup(popupEdit);
});

popupEditCloseButton.addEventListener('click', function() {
    closePopup(popupEdit);
});

popupEdit.addEventListener('click', function() {
    popupClickHandler(popupEdit);
});


//открытие и закрытие Image
popupImageCloseButton.addEventListener('click', function() {
    closePopup(popupImage);
});

popupImage.addEventListener('click', function() {
    popupClickHandler(popupImage);
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
const addForm = document.querySelector('.popup__form_type_add');

function addCard(element) {
    const templateCard = document.querySelector ('.template').content.cloneNode(true);

    templateCard.querySelector('.element__title').textContent = element.name;
    templateCard.querySelector('.element__image').src = element.link;
    templateCard.querySelector('.element__image').alt = element.name;
    
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

    cards.prepend(templateCard);
}



addForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const inputPlace = document.querySelector('.popup__form-place');
    const inputLink = document.querySelector('.popup__form-image');
    

    const element = addCard( {
        name: inputPlace.value,
        link: inputLink.value
    });
    
    addForm.reset();
});
const inputButton = document.querySelector('.popup__input-buttom_type_add');
inputButton.addEventListener('click', function() {
    closePopup(popupAdd);
});

initialCards.forEach(addCard);











