function checkCountry(){
    const phoneInput = document.getElementsByClassName('full-phone');
    const message = document.getElementsByClassName('message');
    if (!phoneInput.value.startsWith('+55')) {
        phoneInput.value = 'Não atendemos está região.';
    } else {
        if (phoneInput.disabled) {
        phoneInput.disabled = false;
        phoneInput.value = '+55 ';
        }
    }
    message.textContent = '';
}