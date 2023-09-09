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

//Below I defined my variables in order to create an algorithm to randomly select numbers and characters to generate the password.
  var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var num = '0123456789';
  var specialChar = '!@#$%^&*()_+';


  function generatePassword() { 
    
    let result = ''; //defined result in order to generate messages for the user in case they did not follow the criteria, like password length.

    let passwordChar = ''; //created the variable passwordChar to handle user choices

    let password = ''; //created the variable password to return the final password 

    var passwordLength = parseInt(prompt('How long would you like your password to be? Enter a number between 8 and 128.'))

    //All of the conditional statements below are designed to handle the user's preferences for their randomly generated password, like password length, whether or not they want upper or lower case characters, numbers, and/or special characters.
    if(passwordLength >= 8 && passwordLength <= 128) {
      result = 'awesome'
    } else if(passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
        result = alert("Password must be more than 8 characters and less than 128 characters. Your password must also be a number value.")
        return 'Click Generate Password again and pick a new password length.';
    }

    var includeupperCaseChar = confirm('Would you like uppercase letters in your password?')
    console.log(upperCaseChar)

      
    if(includeupperCaseChar === true) {
         passwordChar += upperCaseChar;
      }


    var includelowerCaseChar = confirm('Would you like lowercase letters in your password?')
    console.log(lowerCaseChar)

    if (includelowerCaseChar === true) {
      passwordChar += lowerCaseChar;
    } 

    var includenum = confirm('Would you like numbers in your password?') 
        console.log(num)
    if (includenum === true) {
       passwordChar += num;
    } 

    var includespecialChar = confirm('Would you like special characters in your password?')
    console.log(specialChar)

    if (includespecialChar === true) {
       passwordChar += specialChar;
    } 

      if(!includeupperCaseChar && 
        !includelowerCaseChar && 
        !includenum && 
        !includespecialChar) {
        alert('Must confirm at least 1 choice.')
        return "Click Generate Password again."
      }

      //The purpose of the for loop below is to loop through the user choices, and Math.random is used to generate a random password based off of user preferences.
    for(let i = 0; i < passwordLength; i++) {
      let computerPick = Math.floor(Math.random() * passwordChar.length)
      password += passwordChar.charAt(computerPick)
    } 
    return password
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //define this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //line that displays it on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
  


  

