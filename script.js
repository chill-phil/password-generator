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
  
  var criteriaSelect = function() {
    window.confirm("include lower case letters?");
    window.confirm("include upper case letters?");
    window.confirm("include numbers?");
    window.confirm("include special characters? (eg. '!', '$', '@')");
    window.prompt("password length? (between 8-128 characters, input whole number with no commas!)");
  }

  criteriaSelect();
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
