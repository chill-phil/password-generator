// create arrays for lower, upper, special and numbers
var finalPassword = [];
var askedChar = [];
var possibleChar = [];
var specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
    var passLength = parseInt(window.prompt("password length? (between 8-128 characters, input whole number with no commas!)"));
  
    if (passLength < 8 || passLength > 128) {
    window.alert ("password must be between 8 - 128")
    return;
    }

    var lowercase = window.confirm("include lower case letters?");
    var uppercase = window.confirm("include upper case letters?");
    var number = window.confirm("include numbers?");
    var specialChar = window.confirm("include special characters? (eg. '!', '$', '@')");

    if (lowercase === false && uppercase === false && number === false && specialChar === false) {
      window.alert ("must select at least 1 character type.")
      return;
    }

    if (lowercase === true) {
      possibleChar = possibleChar.concat(lowerCasedArray)
      askedChar.push(random(lowerCasedArray))
    }

    if (uppercase === true) {
      possibleChar = possibleChar.concat(upperCasedArray)
      askedChar.push(random(upperCasedArray))
    }

    if (number === true) {
      possibleChar = possibleChar.concat(numericArray)
      askedChar.push(random(numericArray))
    }

    if (specialChar === true) {
      possibleChar = possibleChar.concat(specialArray)
      askedChar.push(random(specialArray))
    }

    for (let index = 0; index < passLength; index++) {
      var addedChar = random(possibleChar)
      finalPassword.push(addedChar)
    }
    return finalPassword.join("")
}


var random = function(array) {
  var randomIndex = Math.floor(Math.random() *array.length)
  var element = array[randomIndex]
  return element;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);