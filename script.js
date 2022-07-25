 // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', " \ ", ']', '^', '_', '`', '{', '|', '}', '`']

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function generatePassword() {
  // - prompt user for password specs:
  //    a. password length 8-128 
  //    b. prompt user for uppercase, lowercase, numbers, and special characters

  var userDecision = window.prompt('How long would you like your password to be? (Choose between 8-128 characters)');
 
  var userDecisionLength = parseInt(userDecision);

  console.log(userDecisionLength);
  
  if (userDecision <  8 || userDecision > 128){
    window.alert('Oops! Got to be between 8-128 characters')
    return
  }

  var userIncludeUC = window.confirm('Would you like to include uppercase letters?');
  var userIncludeLC = window.confirm ('Would you like to include lowercase letters?');
  var userIncludeNum = window.confirm('Would you like to include numbers?');
  var userIncludeSym = window.confirm('Would you like to include symbols?');

  var userSpecs = []
 
  // - validate the input
  if (userIncludeUC){
    userSpecs.push(upperCase);
  }

  if (userIncludeLC){
    userSpecs.push(lowerCase);
  }

  if(userIncludeNum){
    userSpecs.push(numbers);
  }

  if (userIncludeSym){
    userSpecs.push(symbols); 
  }
  console.log(userSpecs);  
  
  if (userSpecs == 0) {
    window.alert ('Oops! you must choose at least one character type.')
  };

  // - generate password
  var userPassword = [];
  for (var i = 0; i < userDecisionLength.length; i++) {
    var randomIndex = Math.floor(Math.random() * userSpecs.length);
    userPassword += userSpecs[randomIndex]; 
    console.log(userPassword )
  }


  // display password 
  return userPassword    
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);