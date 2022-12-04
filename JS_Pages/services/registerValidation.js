const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#emailID");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirmPassword");

function validName() {
  const firstName = nameElement.value.trim();
  const formEl = nameElement.closest(".formContent");
  const messageElement = formEl.querySelector(".message");
  let error = "";
  if (firstName.length === 0) {
    error += `<div> Name cannot be empty</div>`;
  }
  messageElement.innerHTML = error;

  return error === "";
}

function validEmail() {
  const emailValue = emailElement.value.trim();
  const formEl = emailElement.closest(".formContent");
  const messageElement = formEl.querySelector(".message");
    
  
  let error = "";
  /*
  let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email == emailValue) {
    error += `<div>Please provide valid email</div>`;
  }
  messageElement.innerHTML = error;
  */
  return error === "";
}

function validPassword() {
  const passwordValue = passwordElement.value.trim();
  const formEl = passwordElement.closest(".formContent");
  const messageElement = formEl.querySelector(".message");

  let error = "";

  if (passwordValue.length <= 8) {
    // empty string is considered as false
    error += `<div>Minimum password length should be 8</div>`;
  }

  // uppercase
  const uppercasePat = /[A-Z]/;
  if (!uppercasePat.test(passwordValue)) {
    error += `<div>Uppercase character missing</div>`;
  }

  // lowercase
  const lowercasePat = /[a-z]/;
  if (!lowercasePat.test(passwordValue)) {
    error += `<div>lowercase character missing</div>`;
  }
  const numberPat = /[0-9]/;
  if (!numberPat.test(passwordValue)) {
    error += `<div>Number missing</div>`;
  }
  const specialCharPat = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/;
  if (!specialCharPat.test(passwordValue)) {
    error += `<div>Special Character missing</div>`;
  }

  messageElement.innerHTML = error;

  return error === "";
}
function validConfirmPassword() {
  const password = passwordElement.value;
  const confirmPassword = confirmPasswordElement.value;

  const formEl = confirmPasswordElement.closest(".formContent");
  const messageElement = formEl.querySelector(".message");

  let error = "";

  if (password != confirmPassword) {
    error += `<div>Password should match</div>`;
  }

  messageElement.innerHTML = error;

  return error === "";
}

function validate() {
  let isValid = true;

  isValid = validName() && isValid;
  isValid = validPassword() && isValid;
  isValid = validConfirmPassword() && isValid;

  return isValid;
}

nameElement.addEventListener("blur", validName);
nameElement.addEventListener("input", validName);

passwordElement.addEventListener("blur", validPassword);
passwordElement.addEventListener("input", validPassword);

confirmPasswordElement.addEventListener("blur", validConfirmPassword);
confirmPasswordElement.addEventListener("input", validConfirmPassword);

const form = document.querySelector("#resFormContent");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validate()) {
    this.submit();
    // this.reset();
  } else {
    alert("please provide valid data!!!");
  }
});
