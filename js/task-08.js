const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

let message = '';

function onFormSubmit(event){
event.preventDefault();

// console.dir(formElements);

const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;


const formData = {
    mail,
    password,
};

if(mail === '' || password === '') {
message = alert(`Attention! All fields must be field`);



}
console.log(formData);
form.reset();

}