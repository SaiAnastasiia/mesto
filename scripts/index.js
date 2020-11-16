
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


//функции открытия и закрытия Add
function showAddPopup() {
    popupAdd.classList.add('popup_is-opened-add');
}
function closeAddPopup() {
    popupAdd.classList.remove('popup_is-opened-add');
}
function popupAddClickHandler(event) {
    if (event.target.classList.contains('popup_type_add')) {
        closeAddPopup();}       
}

addButton.addEventListener('click', showAddPopup);
popupAddCloseButton.addEventListener('click', closeAddPopup);
popupAdd.addEventListener('mousedown', popupAddClickHandler);



//функции открытия и закрытия Edit
function showEditPopup() {
    popupEdit.classList.add('popup_is-opened');
}
function closeEditPopup() {
    popupEdit.classList.remove('popup_is-opened');
}
function popupEditClickHandler(event) {
    if (event.target.classList.contains('popup')) {
        closeEditPopup();
    }       
}

editButton.addEventListener('click', showEditPopup);
popupEditCloseButton.addEventListener('click', closeEditPopup);
popupEdit.addEventListener('mousedown', popupEditClickHandler);



//функции открытия и закрытия Image
function imagePreview() {
    popupImage.classList.add('popup_is-opened-image');
};

function closeImagePreview() {
    popupImage.classList.remove('popup_is-opened-image');
};

popupImage.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_type_image')) {
        closeImagePreview();
    };
});

popupImageCloseButton.addEventListener('click', closeImagePreview);


// отправка Edit
const formEditElement = document.querySelector('.popup__input-buttom_type_edit');
function formEditSubmitHandler (evt) {
    evt.preventDefault(); 

    const nameInput = popupEdit.querySelector('.popup__form-name');
    const jobInput = popupEdit.querySelector('.popup__form-profession');
     
    const name = nameInput.value;
    const job = jobInput.value; 
    
    const profile = document.querySelector('.profile');
    const changeNameInput = profile.querySelector('.profile__name');
    const changeJobInput = profile.querySelector('.profile__profession');
    
    changeNameInput.textContent = name;
    changeJobInput.textContent = job;
}

formEditElement.addEventListener('click', formEditSubmitHandler); 

const buttonSaveEditPopup = popupEdit.querySelector('.popup__input-buttom_type_edit');
buttonSaveEditPopup.addEventListener("click", closeEditPopup);



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
  
        imagePreview();
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
inputButton.addEventListener('click', closeAddPopup);

initialCards.forEach(addCard);











