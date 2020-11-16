const popupTypeImage = document.querySelector('.popup_type_image');


const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageTitle = popupTypeImage.querySelector('.popup__image-title');
const imagePreviewCloseButton = popupTypeImage.querySelector('.popup__close');

function imagePreview() {
    popupTypeImage.classList.add('popup_opened');
};

function closeImagePreview() {
    popupTypeImage.classList.remove('popup_opened');
};

imagePreviewCloseButton.addEventListener('click', closeImagePreview);



popupTypeImage.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closeImagePreview();
    };
});

function addCards(item) {

    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLike = cardElement.querySelector('.card__like');
    const deleteButton = cardElement.querySelector('.card__trash');

    cardImage.src = item.link;
    cardTitle.textContent = item.name;
    cardImage.alt = item.alt;


    cardImage.addEventListener('click', function (evt) {
        imagePreview();
        popupImage.src = evt.target.src;
        popupImageTitle.textContent = item.name;
    });

    
};

    <div class="popup popup_type_image">   
        <div class="popup__container popup__container_type_image">
            <button class="button popup__close popup__close_type_image" type="button"
                aria-label="кнопка: закрыть"></button>
            <img class="popup__image" src=" ">
            <h3 class="popup__image-title"></h3>
         </div>
    </div>





    <section class="popup_type_image">
        <button class="popup__close-popup_type_image" type="button"></button>
        <div class="popup__content_type_image">
          <img class="popup_type_image_photo">

          <h2 class="popup__title_type_image"></h2>  
        </div>
      
    </section>