console.log("Hello world");


let buttonOpenPopup = document.querySelector('.edit-button');
let buttonClosePopup = document.querySelector('.popup__close-image');
let popup = document.querySelector('.popup');


let popupToggle = () => {
    popup.classList.toggle("popup_is-opened");
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);


console.log("buttonOpenPopup")