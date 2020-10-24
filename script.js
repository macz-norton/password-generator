// // CONFIRM if the passworkd genereator `isUsingNumbers`
// // CONFIRM if the password genreator `isUsingLowercaseLetters`
// // CONFIRM if the password generator `isUsingUppercase Letters`
// // CONFIRM if the password generator `isUsingSpecialCharactersLetters`

// // DECLARE a new `password` string
// var password = ""
// //WHILE passowrd.length < passwordLength
// while( password.Length < passworkdLEngth ) {}






// ${password}


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

// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

// PASTE password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

// PROMPT the user for a `passwordLength`
  const passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  console.log(passwordLength);

  if (!(passwordLength >=8 || passwordLength <= 128)) {
  // THEN ALERT to the user that they need to provide a correct length
    alert("Please use a password length between 8 and 128 characters.")
  // EXIT function
  return;
  }

  const includeNumbers = confirm("Do you want to include numbers? If yes, click 'Okay.'");
  console.log(includeNumbers);

  if (includeNumbers == true) {
    password.concat(numbers);
  }

  else {
    return;
  }

  const includeLowercase = confirm("Do you want to include lowercase characters? If yes, click 'Okay.'");
  console.log(includeLowercase);

  if (includeLowercase == true) {
    password.concat(lowercaseLetters);
  }

  else {
    return;
  }

  const includeUppercase = confirm("Do you want to include uppercase characters? If yes, click 'Okay.'");
  console.log(includeUppercase);

  if (includeUppercase == true) {
    password.concat(uppercaseLetters);
  }

  else {
    return;
  }

  const includeSpecialCharacters = confirm("Do you want to include special characters? If yes, click 'Okay.'");
  console.log(includeSpecialCharacters);

  if (includeSpecialCharacters == true) {
    password.concat(specialCharacters);
  }

  else {
    return;
  }

}
