// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*[]{}\/+-";
var chosenCharacters = "";

var numCharacter = prompt ("Password must be between 8 and 128 Characters");
var numbers = confirm ("Confirm you want numbers in your password");
var uppercase = confirm ("Cornfirm you want uppercase letters in your password");
var lowercase = confirm ("Confirm you want lowercase letters in your password");
var characters = confirm ("Confirm you want characters in your password");
















































// Write password to the #password input
function writePassword() {
  var password = generator;
  var passWordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
