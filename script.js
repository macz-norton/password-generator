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
// DECLARE a list of `lowercaseLetters`
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
// DECLARE a list of `uppercaseLetters`
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// // DECLARE a list of `specialCharacters`
var specialCharacters = "!#%&*+-.<>?@^_~".split("");

function generatePassword() {

// PROMPT the user for a `passwordLength`
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));

  // IF password is out of length boundary of 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    // THEN ALERT to the user that they need to provide a correct length
    alert("Please use a password length between 8 and 128 characters.")
    // EXIT function
    return;
  }

  // DECLARE a new list of `charactersToUse`
  var charactersToUse = "";

  // DECLARE new `password` string 
  var password = "";

  // CONFIRM if the password generator `includesNumbers`
  var includesNumbers = confirm("Do you want to include numbers? If yes, click 'OK.'");

  // IF 'okay', THEN add numbers to `charactersToUse`
  if ( includesNumbers == true ) {
    charactersToUse = charactersToUse.concat(numbers);
  }

  // CONFIRM if the password generator `includesLowercase`
  var includesLowercase = confirm("Do you want to include lowercase characters? If yes, click 'OK.'");

  // IF 'okay', THEN add lowercase letters to `charactersToUse`
  if ( includesLowercase == true ) {
    charactersToUse = charactersToUse.concat(lowercaseLetters);
  }

  // CONFIRM if the password generator `includesUppercase`
  var includesUppercase = confirm("Do you want to include uppercase characters? If yes, click 'OK.'");

    // IF 'okay', THEN add uppercase letters to `charactersToUse`
  if ( includesUppercase == true ) {
    charactersToUse = charactersToUse.concat(uppercaseLetters);
  }

  // CONFIRM if the password generator `includesSpecialCharacters`
  var includesSpecialCharacters = confirm("Do you want to include special characters? If yes, click 'OK.'");

  // IF 'okay', THEN add special characters to `charactersToUse`
  if ( includesSpecialCharacters == true ) {
    charactersToUse = charactersToUse.concat(specialCharacters);
  }
  
  // IF user selected no characters
  if ( includesNumbers == false && includesLowercase == false && includesUppercase == false && includesSpecialCharacters == false) {
    // THEN ALERT to the user that they need to select character
    alert("To generate a pasword successfully, select one or more types of characters. Please try again.")
    // EXIT function
    return;
  }

  var randomIndex;
  var newCharacter;
  var charactersNoCommas = charactersToUse.split(",");
  for (var i = 0; i < passwordLength; i++) {
    // SELECT `randomCharacter` from `charactersToUse`
    randomIndex = Math.floor(Math.random() * charactersNoCommas.length);
    newCharacter = charactersNoCommas[randomIndex];
    password += newCharacter;

    console.log(charactersToUse);
    console.log(randomIndex);
    console.log(newCharacter);
    console.log(password);
  }

    return password;
}