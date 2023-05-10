// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('action works');
// propt user criteria.pass8.L or U.
var Length = (prompt("How many characters would you like your password to have? It must be between 9-128"));

while(Length <= 8 || Length >= 128) {
  alert("Password length must be between 9-128 characters ");
  var Length = (prompt("How many characters would you like your password to have?"));

  alert(`Your password will have ${Length} characters`);
}


// validate input



// gen password

//display on page

  return"gen password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
