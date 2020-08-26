
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirmpassword');

//All functions 
// Function to show error.
function showError(input,message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

// Function to show success.
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}


// Function to check required input fields
function checkRequired(inputArray) {
    inputArray.forEach(function(input){
        if (input.value === ''){
            showError(input, `${getFieldId(input)} is required`);

        } else {
            showSuccess(input);
        }
    });
}

// Function to get the id of the input field with proper case.
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to check lenght of input field
function checkLenght(input,min,max) {
    if(input.value !=""){
        if (input.value.lenght < min){
            showError(input, `${gerFeildId(input)} need to at least ${min} characters `)
        } else if (input.value.lenght > max) {
            showError(input,`${getFieldId(input)} need to less than ${max} characters`)
        } else {
            showSuccess(input);
        }
    }
}

// Function to check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input,` Please provide a valid email`)
    }
}

//Function to check password and confirm password is same.
function checkPasswordsMatch(input1,input2) {
    if (input1.value !== input2.value) {
        showSuccess(input2, "Password don't same")
    }
}


// this is an event listener for form submit botton.
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,email,password,cpassword]);
    checkEmail(email);
    checkLenght(username,3,10);
    checkLenght(password,6,10);
    checkPasswordsMatch(password,cpassword);



})
