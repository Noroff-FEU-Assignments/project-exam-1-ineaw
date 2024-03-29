const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const cMessage = document.querySelector("#contactMessage");
const sent = document.querySelector(".submit-button");

const fullNameError = document.querySelector("#fullNameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const cMessageError = document.querySelector("#contactMessageError");

function validateForm(e) {
  var isValidated = true;
  e.preventDefault();

  if (validateLength(fullName.value, 5) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    isValidated = false;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    isValidated = false;
  }
  if (validateLength(cMessage.value, 25) === true) {
    cMessageError.style.display = "none";
  } else {
    cMessageError.style.display = "block";
    isValidated = false;
  }

  if (isValidated) {
    sent.innerHTML = "Message sent!";
  }
}

function validateEmail(email) {
  const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

contactForm.addEventListener("submit", validateForm);
