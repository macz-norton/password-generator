// // CONFIRM if the passworkd genereator `isUsingNumbers`
// // CONFIRM if the password genreator `isUsingLowercaseLetters`
// // CONFIRM if the password generator `isUsingUppercase Letters`
// // CONFIRM if the password generator `isUsingSpecialCharactersLetters`

// // DECLARE a new `password` string
// var password = ""
// //WHILE passowrd.length < passwordLength
// while( password.Length < passworkdLEngth ) {}


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// ${password}

// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password
// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// DECLARE a `generateBtn`
var generateBtn = document.querySelector("#generate");

// DECLARE a list of `numbers`
var numbers = "0123456789".split("");
console.log(numbers);
// DECLARE a list of `lowercaseLetters`
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowercaseLetters);
// DECLARE a list of `uppercaseLetters`
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(uppercaseLetters);
// // DECLARE a list of `specialCharaters`
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
console.log(specialCharacters);

// STORE variables as you are prompting the user for information.
var password = "";
console.log(password);

var writePassword = [];

function generatePassword() {
// PROMPT the user for a `passwordLength`
  const passwordLength = parseInt(prompt("How many characters would you like your password to have?"));
  console.log(passwordLength);

  if (!(passwordLength >=8 && passwordLength <= 128)) {
  // THEN ALERT to the user that they need to provide a correct length
  alert("Please use a password length between 8 and 128 characters.")
  // EXIT function
  return;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);