// DECLARE a `generateBtn`
var generateBtn = document.querySelector("#generate");

// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

// PASTE `password` to `passwordText`
function writePassword() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

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

function generatePassword() {

// PROMPT the user for a `passwordLength`
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  console.log(passwordLength);

  // IF password is out of length boundary of 8-128 characters
  if ( !(passwordLength >=8 || passwordLength <= 128) ) {
    // THEN ALERT to the user that they need to provide a correct length
    alert("Please use a password length between 8 and 128 characters.")
    // EXIT function
    return;
  }

  // DECLARE a new list of `charactersToUse`
  var charactersToUse = [];
  console.log(specialCharacters);

  // DECLARE new `password` string 
  var password = "";

  // CONFIRM if the password generator `includesNumbers`
  var includesNumbers = confirm("Do you want to include numbers? If yes, click 'Okay.'");
  console.log(includesNumbers);

  // IF 'okay', THEN add numbers to `charactersToUse`
  if ( includesNumbers == true ) {
    charactersToUse = charactersToUse.concat(numbers);
  }
  console.log(charactersToUse);

  // CONFIRM if the password generator `includesLowercase`
  var includesLowercase = confirm("Do you want to include lowercase characters? If yes, click 'Okay.'");
  console.log(includesLowercase);

  // IF 'okay', THEN add lowercase letters to `charactersToUse`
  if ( includesLowercase == true ) {
    charactersToUse = charactersToUse.concat(lowercaseLetters);
  }
  console.log(charactersToUse);


  // CONFIRM if the password generator `includesUppercase`
  var includesUppercase = confirm("Do you want to include uppercase characters? If yes, click 'Okay.'");
  console.log(includesUppercase);

    // IF 'okay', THEN add uppercase letters to `charactersToUse`
  if ( includesUppercase == true ) {
    charactersToUse = charactersToUse.concat(uppercaseLetters);
  }
  console.log(charactersToUse);

  // CONFIRM if the password generator `includesSpecialCharacters`
  var includesSpecialCharacters = confirm("Do you want to include special characters? If yes, click 'Okay.'");
  console.log(includesSpecialCharacters);

  // IF 'okay', THEN add special characters to `charactersToUse`
  if ( includesSpecialCharacters == true ) {
    charactersToUse = charactersToUse.concat(specialCharacters);
  }
  console.log(charactersToUse);

  // IF user selected no characters
  if ( charactersToUse.length = 0 ) {
    // THEN ALERT to the user that they need to select character
    alert("Please select one or more types of characters.")
    // EXIT function
    return;
  }


  // WHILE the `password.length` < `passwordLength`
  while( password.Length < passwordLength ) {
    // SELECT `randomCharacter` from `charactersToUse`
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    // APPEND `randomCharacter` to `password`
    var newCharacter = charactersToUse[randomCharacter];
    password.push(newCharacter);
  }
  console.log(password);
  console.log(charactersToUse);
  return password;
}