const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const msgContainer = document.querySelector('.msg-container');
const msg = document.getElementById('msg');

let isValid = false;
let passwordsMatch = false;
// Form Validation
function validateForm(){
    // Using constraint API 
    isValid = form.checkValidity();
    // Style main error msg
    if(!isValid){
        msg.textContent = 'Please fill out all fields';
        msg.style.color = 'red';
        msgContainer.style.borderColor = 'red';
    }
    if(password1El.value ===password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }else{
        passwordsMatch = false ;
        password1El.style.borderColor ='red';
        password2El.style.borderColor ='red';
        msg.textContent='Make sure passwords match';
        msg.style.color = 'red';
        msg.style.borderColor = 'red';
    }
    // Checkthe validation of Form
    if(isValid && passwordsMatch){
        msg.textContent = 'Succesfuly Registered';
        msg.style.borderColor = 'green';
        msg.style.color = 'green';
    }
}

// Store data 
function storeData(){
    const user = {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    // Do sth with Data
    console.table(user);
}

// Process From
function processFormData(event){
    event.preventDefault();
    validateForm();
    // Check if valid then store
    if(isValid && passwordsMatch){
        storeData();
    }
}
// Event Listener
form.addEventListener('submit',processFormData);