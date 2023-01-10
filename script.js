// Assignment code here
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!\"#$%&%\'()*+,-./:;<=>?@[]^_`}|}~";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt user for length of password
  var numberCheck = prompt("Please enter a number between 8 - 128", "8 - 128");

  // Validating each input from user
  if (numberCheck === null) {
    alert("Sorry to see you go");
    return;
    // Ensure user enters a valid number
  } else if(isNaN(numberCheck)) {
    alert("Please enter numbers only");
     return passwordCriteria();
  } else if(numberCheck < 8 || numberCheck > 128) {
    alert("Please select a number between 8 and 128");
    return passwordCriteria();
  } else {
    var upperCase = confirm("Do you want the password to include UPPERCASE?");
    var lowerCase = confirm("Do you want the password to include LOWERCASE?");
    var numeric = confirm("Do you want the password to include NUMBERS?");
    var specialChar = confirm("Do you want the password to include SPECIAL CHARACTERS?");

    // Ensure user selects at least one criteria for password
    if (!upperCase && !lowerCase && !numeric && !specialChar) {
      alert("You must choose at least one of the criteria! Try again.");
      } 
    } 
    
    // Creating an empty array to push criteria user selects into array
    var acceptedCriteria = [];

    if (upperCase === true) {
      upperCase = acceptedCriteria.push(alphaUpper);
    }
    if (lowerCase === true) {
      lowerCase = acceptedCriteria.push(alphaLower);
    }
    if (numeric === true) {
      numeric = acceptedCriteria.push(numbers);
    } 
    if (specialChar === true) {
      specialChar = acceptedCriteria.push(symbols);
    }
    
    // Using join method to turn the pushed arrays into strings 
    var joinedCriteria = acceptedCriteria.join("");
  
    // Iterate through length of users password using alphas/numbers/special characters the user selected and randomize it
    var generatedPassword = "";
    for (var i = 0; i < numberCheck; i++) {
        generatedPassword += joinedCriteria.charAt(Math.floor(Math.random() * joinedCriteria.length));
      }
      return generatedPassword;
}
   





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


