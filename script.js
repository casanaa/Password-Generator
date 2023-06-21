

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Password variable values
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharaters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;




    //Password criteria
    var passwordLenght = prompt ("Choose a password length of at least 8 characters and no more than 128 characters.");
    var num = confirm ("Include numbers in your password?");
    var uppercaseAlphabet = confirm ("Include uppercase letters in your password?");
    var lowercaseAlphabet = confirm ("Include lowercase letters in your password?");
    var specialCharacters = confirm ("Include special characters in your password?");

    // Write another function that checks if it's between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
    else if (lowercaseLett === false && uppercaseLett === false && numbers === false && specialCharaters === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialCharacters = confirm("Do you want your password to contain special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lowercaseLett) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLett) {
       optionsVariable += uppercaseAlphabet;
    }

    if (num) {
       optionsVariable += numbers;
    }

    if (specialCharaters) {
       optionsVariable += specialCharacters;
  }

    // Generates a random password based on the criteria that have been selected
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;
}