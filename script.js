// Assignment Code
var generateBtn = document.querySelector("#generate");

// DELCARE a list of `numbers`
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//DECLARE a list of `lowercaseLetters`
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// DECLARE a list of `uppercaseLetters`
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// DECLARE a list of `specialCharaters`
var specialCharacters = []

// Could put the above into one object, rather than in an array

//Store variables as you are prompting the user for information.

function generatePassword {
// PROMPT the user for a `passwordLength`
  const passwordLength = prompt("How many characters would you like your password to have?")

if (!(passworkdLength >=8 && passwordLEngth <= 128)) {
  // THEN ALERT to the user that they need to provide a correct length
  alert("Please use a password length between 8 and 128 characters.")
  // AND EXIT FUNCTION 
  return;

}
// CONFIRM if the passworkd genereator `isUsingNumbers`
// CONFIRM if the password genreator `isUsingLowercaseLetters`
// CONFIRM if the password generator `isUsingUppercase Letters`
// CONFIRM if the password generator `isUsingSpecialCharactersLetters`

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page