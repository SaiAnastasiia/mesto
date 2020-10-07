console.log("Hello world");

let buttonOpenPopup = document.querySelector('.edit-button');
let buttonClosePopup = document.querySelector('.popup__close-image');
let popup = document.querySelector('.popup');

let popupToggle = () => {
    popup.classList.toggle("popup_is-opened");
};

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);

console.log("buttonOpenPopup");

// Находим форму в DOM
let formElement = document.querySelector('.popup__input-buttom');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__form-name');// Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__form-profession');// Воспользуйтесь инструментом .querySelector()
    
    // Получите значение полей из свойства value


    let name = nameInput.value;
    let job = jobInput.value; 

    // Выберите элементы, куда должны быть вставлены значения полей
    let changeNameInput= document.querySelector('.profile__name');
    let changeJobInput = document.querySelector('.profile__proffesion');

    // Вставьте новые значения с помощью textContent
    changeNameInput.textContent = name;
changeJobInput.textContent = job;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler); 

let buttonSavePopup = document.querySelector('.popup__input-buttom');
buttonSavePopup.addEventListener("click", popupToggle);



