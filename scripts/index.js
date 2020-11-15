
//открытие и закрытие
const popupAdd = document.querySelector('.popup_type_add');
const popupEdit = document.querySelector('.popup');

const popupAddCloseButton = document.querySelector('.popup__close');
const popupEditCloseButton = document.querySelector('.popup__close-image');

const addButton = document.querySelector('.add-button');
const editButton = document.querySelector('.edit-button');


function showAddPopup() {
    popupAdd.classList.add('popup_is-opened-add');
}
function showEditPopup() {
    popupEdit.classList.add('popup_is-opened');
}

function closeAddPopup() {
    popupAdd.classList.remove('popup_is-opened-add');
}
function closeEditPopup() {
    popupEdit.classList.remove('popup_is-opened');
}

addButton.addEventListener('click', showAddPopup);
editButton.addEventListener('click', showEditPopup);

popupAddCloseButton.addEventListener('click', closeAddPopup);
popupEditCloseButton.addEventListener('click', closeEditPopup);

// закрытие при нажатии на пустое пространство
function popupAddClickHandler(event) {
    if (event.target.classList.contains('popup_type_add')) {
        closeAddPopup();
    }       
}

function popupEditClickHandler(event) {
    if (event.target.classList.contains('popup')) {
        closeEditPopup();
    }       
}

popupAdd.addEventListener('mousedown', popupAddClickHandler);
popupEdit.addEventListener('mousedown', popupEditClickHandler); 



// отправка первый попап

let formEditElement = document.querySelector('.popup__input-buttom_type_edit');


function formEditSubmitHandler (evt) {
    evt.preventDefault(); 
                      
    // Находим поля формы в DOM
    let nameInput = popupEdit.querySelector('.popup__form-name');
    let jobInput = popupEdit.querySelector('.popup__form-profession');
    
   


    let name = nameInput.value;
    let job = jobInput.value; 

    
    let profile = document.querySelector('.profile');
    let changeNameInput = profile.querySelector('.profile__name');
    let changeJobInput = profile.querySelector('.profile__profession');

    
    changeNameInput.textContent = name;
    changeJobInput.textContent = job;
}




formEditElement.addEventListener('click', formEditSubmitHandler); 

const buttonSaveEditPopup = popupEdit.querySelector('.popup__input-buttom_type_edit');
buttonSaveEditPopup.addEventListener("click", closeEditPopup);




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
    

   cards.append(templateCard);


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

