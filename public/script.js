// Getting the email input 
const email = document.querySelector('.email-input');
// Getting the submit btn
const submitBtn = document.getElementById('submit-btn');
// Getting the error message
const errorMsg = document.querySelector('.error-msg')
// Setting the email format
const RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    if (email.value.match(RegExp)) {
        submitBtn.setAttribute('href', 'success-page.html');
    }
    else {
        errorMsg.textContent = "Valid Email Required!";
        email.classList.add('bg-red-200');
        email.classList.remove('border-maingrey');
        email.classList.add('border-red-400');
        email.addEventListener('input', () => {
            email.classList.add('border-maingrey');
            email.classList.remove('bg-red-200');
            email.classList.remove('border-red-400');
            errorMsg.textContent = "";
        });
    }
});