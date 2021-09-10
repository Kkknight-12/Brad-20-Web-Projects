const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, message){
    const formControl = input.parentElement;

    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess( input ){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(input.value).toLowerCase());
    if( re.test( input.value.trim() )){
        showSuccess(input); 
    }else{
        showError(input, 'Email is not valid')
    }
}

//check required fields
function checkRequired(...inputArr){
 
    inputArr.forEach( (input) => {
        if( input.value.trim() === '' )
            showError( input, `${getFieldName(input)} is required`);
        else
            showSuccess(input);
 })
}

// Check input length
function checkLength(input, min, max){
    if( input.value.length < min){
        showError( 
            input, 
            `${getFieldName(input)} must be atleast ${min} characters`
            )
    }else if(input.value.length > max){
        showError( 
            input, 
            `${getFieldName(input)} must be less than ${max} characters`
            )
    }else{
        showSuccess(input);
    }
}

// Get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords
function checkPasswordMatch( input1, input2){
    if( input1.value !== input2.value ){
        showError(input2, 'Password don\'t match')
    }
}

// Event Listner
form.addEventListener('submit', function(e){
    e.preventDefault();

    // check length
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);

    // if the fields are empty
    checkRequired(username, email, password, password2)

    // check email
    checkEmail(email);

    // check password
    checkPasswordMatch( password, password2)
})
