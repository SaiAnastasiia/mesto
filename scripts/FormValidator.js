export class FormValidator {
    constructor(config, popupSelector) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._buttonInvalidClass = config.buttonInvalidClass;
        this._inputInvalidClass = config.inputInvalidClass;
        this._errorMessage = config.errorMessage;
        this._element = document.querySelector(popupSelector);
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector)); 
    }
    
    _showError(input) {
        const error = this._element.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._inputInvalidClass); 
        error.classList.add(this._errorMessage);        
    }

    _hideError(input) {
        const error = this._element.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputInvalidClass);
        error.textContent = '';
        error.classList.remove(this._errorMessage);        
    } 
    
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }

    _getInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        });
    }

    _setButtonState() {
        if (this._getInvalidInput()) {
            this._button.classList.add(this._buttonInvalidClass);
            this._button.disabled = true;            
        } else {
            this._button.classList.remove(this._buttonInvalidClass);
            this._button.disabled = false;
        }    
    }
    
    _setEventListeners() {
        
        this._button = this._element.querySelector(this._submitButtonSelector);
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(this._inputList);
            });            
        });     
    }

    removeErrorMessage() {
        this._inputList.forEach((input) => this._hideError(input));
    }

    enableValidation() {
        this._setEventListeners();
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._setButtonState();
        });
    }
}