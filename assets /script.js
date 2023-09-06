// Assignment code here



// Pseudocode:
  //1. Understand problem: generate a random password that is at least 8 characters and no more than 128 characters and includes lower or upper case characters, numeric characters, and/or special characters. 

  //2. When user clicks button, a series of prompts displays for password criteria: length and type of characters.

  //3. When prompted for length of password, user chooses at least 8 characters for length for password, and no more than 128.

  //4. When prompted for character type, user confirms whether or not to use lowercase, uppercase, numeric, and/or special characters.

  //5. Computer randomly chooses character criteria for user when user answers yes or no to the type of characters. 

  //6. Once user answers all prompts, computer randomly generates a password that matches the criteria selected by the user.

  //7. Random password is displayed in an alert or written on the page. 

  // one variable for numbers, upper/lower case, special characters

  // empty array or string

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


  var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var num = '0123456789';
  var specialChar = '!@#$%^&*()_+';

  var userChoice = Math.random('upperCase'+ 'lowerCase' + 'num' + 'specialChar')

  function generatePassword() {
    var passwordLength = prompt('How long would you like your password to be? Enter a number between 8 and 128.')
    console.log(passwordLength)

    if(passwordLength >= 8 && passwordLength <= 128) {
      console.log('true') 
    } else if(passwordLength < 8 || passwordLength > 128) {
      console.log('false')
        alert("Password must be more than 8 characters and less than 128 characters.")
    } 

    var upperCaseChar = confirm('Would you like uppercase letters in your password?')
    console.log(upperCaseChar)

    var lowerCaseChar = confirm('Would you like lowercase letters in your password?')
    console.log(lowerCaseChar)

    var specialChar = confirm('Would you like special characters in your password?')
    console.log(specialChar)

    return " ";

    // for(let i = 0; passwordLength > i; i++) {
    //   console.log(`Pick a character ${userChoice[i]}`)
    // }
  }

  

  // const userInput = alert('Pick the length of your passowrd. Remember it must be at least 8 characters!');

  

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //define this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //line that displays it on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
  


  

