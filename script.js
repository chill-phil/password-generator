// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function() {
  // prompts for criteria
  window.alert("include lower case letters?");
  window.alert("include upper case letters?");
  window.alert("include numbers?");
  window.alert("include special characters? (eg. '!', '$', '@')");
  window.prompt("password length? (between 8-128 characters, input whole number with no commas!)")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
