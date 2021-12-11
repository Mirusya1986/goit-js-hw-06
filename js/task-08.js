const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event){
event.preventDefault();

// console.dir(formElements);

const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;



if(mail === '' || password === '') {
return alert(`Attention! All fields must be field`);

}


const formData = {
    mail,
    password,
};


console.log(formData);
form.reset();

}