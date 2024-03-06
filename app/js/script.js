/* For responsive hero image  */

function changeImageSrc() {
  var image = document.getElementById("responsiveImage");
  if (window.matchMedia("(min-width: 43.75em)").matches) {
    image.src = "/assets/images/illustration-sign-up-desktop.svg";
  } else {
    image.src = "/assets/images/illustration-sign-up-mobile.svg";
  }
}
changeImageSrc();
window.addEventListener("resize", changeImageSrc);

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const userInput = document.querySelector("#emailInput");
const submitBtn = document.querySelector("#submitBtn");
const dismissBtn = document.querySelector("#dismissBtn");
const emailInput = document.querySelector("#emailInput");
const signUpCard = document.querySelector("#signUpCard");
const successCard = document.querySelector("#successCard");

function validateEmailInputs() {
  const errorMessage = document.querySelector("#errorMsg");
  const inputValue = emailInput.value;

  if (inputValue === "") {
    errorMessage.innerText = "Email must not be empty";
    errorMessage.classList.add("errorMessageTrue");
  } else if (!emailRegex.test(inputValue)) {
    errorMessage.innerText = "Valid email is required";
    errorMessage.classList.add("errorMessageTrue");
  } else {
    errorMessage.innerText = "";
    errorMessage.classList.remove("errorMessageTrue");
    signUpCard.style.display = "none";
    successCard.style.display = "grid";
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateEmailInputs();
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  successCard.style.display = "none";
  signUpCard.style.display = "grid";
});
