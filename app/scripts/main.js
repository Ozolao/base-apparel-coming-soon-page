// Select email input, error image and error message
var emailInput = document.getElementById("email-input");
var errorImg = document.getElementsByClassName("error-img");
var errorText = document.getElementsByClassName("error-text");

// Function to show error message and and error image on input focus
function showError() {
  errorImg[0].classList.add("open");
  errorText[0].classList.add("open");
}

// Function to hide error message and and error image on input focus
function hideError() {
  errorImg[0].classList.remove("open");
  errorText[0].classList.remove("open");
}

// Add focus/blur event listeners to the email imput
emailInput.addEventListener("focus", showError);
emailInput.addEventListener("blur", hideError);
