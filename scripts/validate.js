function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.buttonInvalidClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.buttonInvalidClass);
}

function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config);    
    }
}

function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.inputInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inputInvalidClass);
        button.disabled = true;
    }
}

function setEventListeners(form, config) {
    const inputsForm = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsForm.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config);
        });
    });
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, config);
        
        form.addEventListener('submit', (evt) => {
           evt.preventDefault();
        });
        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState(submitButton, form.checkValidity(), config);
    });
}

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector:  '.popup__input',
    submitButtonSelector: '.popup__input-buttom',
    buttonInvalidClass:'popup__input-buttom_invalid',
    inputInvalidClass: 'popup__input-invalid',
    errorMessage: '.error',

};

enableValidation(validationConfig);

