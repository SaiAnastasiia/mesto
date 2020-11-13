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

const list = document.querySelector('.cards');
initialCards.forEach(element => {
    const templateList = `
        <div class="element">
            <img class="element__image" src=${element.link}>
            <div class="element__content">
                <h2 class="element__title">${element.name}</h2>
                <button class="element__like" type="button"></button>
            </div>
        </div>
    `

    list.insertAdjacentHTML('afterbegin', templateList);
}); 



/* в JS элемент внутри тега можно получить методом querySelector:
const userTemplate = document.querySelector('#user');  
Чтобы получить содержимое template, нужно обратиться к его свойству content:
const userTemplate = document.querySelector('#user').content; */
/* const cardTemplate = document.querySelector('template').content; */


/* Теперь этот элемент можно клонировать, наполнить содержимым и, где понадобится, вставить в DOM.
const userTemplate = document.querySelector('#user').content;
const usersOnline = document.querySelector('.users-online'); */
/* const cards = document.querySelector('.cards'); */

/* клонируем содержимое тега template 
const userElement = userTemplate.cloneNode(true); */
/* const element = cardTemplate.cloneNode(true);
 */
// наполняем содержимым
/* element.querySelector('.place__image').src = 'element.link';
element.querySelector('.place__title').textContent = 'element.name'; */

// отображаем на странице
//usersOnline.append(cardElement); 
/* cards.append(element);  */





/* const list = document.querySelector('.cards');
const addList = initialCards.reduce () => {
    const items = initialCards.map(element => {
        return `<div class="element">
                    <img class="element__image" src=${element.link}>
                    <div class="element__content">
                       <h2 class="element__title">${element.name}</h2>
                       <button class="element__like" type="button"></button>
                   </div>
                </div>`;
    }).join('');
    list.insertAdjacentHTML('afterbegin', items);
};
renderList(); 
 */




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





// отправка второй попап

/* let formAddElement = document.querySelector('.popup__input-buttom_type_add');

function formAddSubmitHandler (evt) {
    evt.preventDefault(); 
    let placeInput = popupAdd.querySelector('.popup__form-place');
    let imageInput = popupAdd.querySelector('.popup__form-image');
    
    let place = placeInput.value;
    let image = imageInput.value; 

    let element = document.querySelector('.element');
    let changePlaceInput = element.querySelector('.element__title');
    let changeImageInput = element.querySelector('.element__image');
 
    changePlaceInput.textContent = place;
    changeImageInput.textContent = image;
}

formAddElement.addEventListener('click', formAddSubmitHandler); 

const buttonSaveAddPopup = popupAdd.querySelector('.popup__input-buttom_type_add');
buttonSaveAddPopup.addEventListener("click", closeAddPopup);  */