











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

// Находим форму в DOM
let formEditElement = document.querySelector('.popup__input-buttom_type_edit');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formEditSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.
                      
    // Находим поля формы в DOM
    let nameInput = popupEdit.querySelector('.popup__form-name');// Воспользуйтесь инструментом .querySelector()
    let jobInput = popupEdit.querySelector('.popup__form-profession');// Воспользуйтесь инструментом .querySelector()
    
    // Получите значение полей из свойства value


    let name = nameInput.value;
    let job = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let profile = document.querySelector('.profile');
    let changeNameInput = profile.querySelector('.profile__name');
    let changeJobInput = profile.querySelector('.profile__profession');

    // Вставьте новые значения с помощью textContent
    changeNameInput.textContent = name;
    changeJobInput.textContent = job;
}



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
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


/* const inputButton = document.querySelector('.popup__input-buttom_type_add');
const inputPlace = document.querySelector('.popup__form-place');
const inputLink = document.querySelector('.popup__form-image');
 */
/*
const inputButton = document.querySelector('.popup__input-buttom_type_add');
const inputPlace = document.querySelector('.popup__form-place');
const inputLink = document.querySelector('.popup__form-image');


const getItems = (data) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.element__title').innerText = data.name;
    card.querySelector('.element__image').src = data.link;
    return card;
};

const renderCards = () => {
    const items = initialCards.map(element => getItems(element));
    cards.prepend(...items);
};



renderCards();


function FormAddSubmitHandler (evt) {
    evt.preventDefault(); 
    const item = getItems( {
        name: inputPlace.value,
        link: inputLink.value
    });

    cards.prepend(item);
        inputPlace.value = '';
        inputLink.value = '';
}

inputButton.addEventListener('click', FormAddSubmitHandler); 
inputButton.addEventListener('click', closeAddPopup);
 */


/* const elementLike = document.querySelectorAll('.element__like');

function elementLikeActive(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('.element__like_type_active');
}

elementLike.addEventListener('click', elementLikeActive); */








