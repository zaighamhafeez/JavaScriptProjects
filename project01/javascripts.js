const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// All Functions
// #1 Function to show error
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error'
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

// #2 Function to show success
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

// #3 Function to check if required field have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input){
        if (input.value === ''){
            showError(input, `${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


// this is an event listener >>>> form on submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkEmail(email);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkPasswordsMatch(password,password2);
})