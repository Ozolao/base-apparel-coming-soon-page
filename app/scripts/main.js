// Select email input, error image and error message
var email = document.getElementById("email");
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
email.addEventListener("focus", showError);
email.addEventListener("blur", hideError);



function validateForm() {
  var x = document.forms["form"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
