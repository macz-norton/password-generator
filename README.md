# Password Generator

![Last Commit](https://img.shields.io/github/last-commit/macz-norton/password-generator)

## Description

This respository fixes a password generator to ensure that a user can choose the length of and the type characters in the generated password.

For this password generator:
* Clicking the button presents the user with a series of prompts for password criteria.
* The password must have a length at least 8 characters and no more than 128 characters.
* The user can choose lowercase, uppercase, numeric, and/or special characters to include in their generated password.
* The user must choose at least one character type to include in their password.
* Once the user has completed all of the prompts and confirmations, a password is displayed in the "Your Secure Password" text area. 

## Installation

This project requires no installations.

## Usage

The password generator can be run from a web browser: [https://macz-norton.github.io/password-generator/](https://macz-norton.github.io/password-generator/)

![Password Generator at work](https://share.getcloudapp.com/QwukdEqB)

## Tests

1. When you click "Generate Password," then a prompt asking about password length pops-up.
2. When you type a desired password length, then the final password is the same length.
3. When you select "OK for including numbers, lowercase letters, uppercase letters, and special characters, respectively, that means that the password can use those options to generate the password.
4. When you select "Cancel" for including numbers, lowercase letters, uppercase letters, and special characters, respectively, that means that the password will not use those options to generate the password.

## Credits

Guidance on JavaScript: [JavaScript, MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
