// Assignment code here

// Pseudocode:
  //1. Understand problem: generate a random password that is at least 8 characters and no more than 128 characters and includes lower or upper case characters, numeric characters, and/or special characters. 

  //2. When user clicks button, a series of prompts displays for password criteria: length and type of characters.

  //3. When prompted for length of password, user chooses at least 8 characters for length for password, and no more than 128.

  //4. When prompted for character type, user confirms whether or not to use lowercase, uppercase, numeric, and/or special characters.

  //5. Computer randomly chooses character criteria for user when user answers yes or no to the type of characters. 

  //6. Once user answers all prompts, computer randomly generates a password that matches the criteria selected by the user.

  //7. Random password is displayed in an alert or written on the page. 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
