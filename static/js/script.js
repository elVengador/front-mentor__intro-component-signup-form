// variables
const inputFirsthName = document.querySelector('#firsth-name');
const inputLastName = document.querySelector('#last-name');
const inputEmailAddress = document.querySelector('#email-address');
const inputPassword = document.querySelector('#password');
const buttonFreeTrial = document.querySelector('#submit-free-trial');
const errorMessage = document.querySelector('#error-message');

// methods
const showErrorMessage = (msg) => {
  errorMessage.innerHTML = msg;
  errorMessage.classList.remove('hide');
  setTimeout(() => {
    errorMessage.classList.add('hide');
  }, 2000);
};
const validateEmail = (email) =>
  /[a-zA-Z][a-zA-Z0-9]*@[a-z]+.[a-z]+/.test(email);

const handleClaimTrial = (event) => {
  console.log('submit');
  event.preventDefault();
  if (!inputFirsthName.value) {
    return showErrorMessage('Firsth Name cannot be empty');
  }
  if (!inputLastName.value) {
    return showErrorMessage('Last Name cannot be empty');
  }
  if (!inputEmailAddress.value) {
    return showErrorMessage('Email Address cannot be empty');
  }
  if (!validateEmail(inputEmailAddress.value)) {
    return showErrorMessage('Looks like this is not an email');
  }
  if (!inputPassword.value) {
    return showErrorMessage('Password cannot be empty');
  }
};

window.onload = () => {
  buttonFreeTrial.addEventListener('click', handleClaimTrial);
};
