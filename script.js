//PASSWORD//
var myInput = document.getElementById("psw");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var special = document.getElementById("special");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

//button jQuery//
$('form[name="pswForm"]').submit(function (event) {
  // This will prevent form being submitted. 
  event.preventDefault();
  // Call your function.
  myfunction();      
});

myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
}
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
  } else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
  }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate special
  var specialSign = /[!@#$%^&*]/g;
  if(myInput.value.match(specialSign)) {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  } console(myInput);
}
