 // Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~' 

function generatePassword(length, includeUC,includeLC,includeNum,includeSym) {
  //  prompt user for password specs:
  //  password length between 8-128 characters 
  var userChoiceLength = window.prompt('How long would you like your password to be? (Choose between 8-128 characters)');
 
  length = parseInt(userChoiceLength);
  
  if (length <  8 || length > 128){
    window.alert('Oops! Got to be between 8-128 characters')
    return
  }

  //  prompt user for uppercase, lowercase, numbers, and special characters
  var includeUC = window.confirm('Would you like to include uppercase letters?');
  var includeLC = window.confirm ('Would you like to include lowercase letters?');
  var includeNum = window.confirm('Would you like to include numbers?');
  var includeSym = window.confirm('Would you like to include symbols?');

  // - validate the input
  var userSpecs = ''

  if (includeUC){
    userSpecs+=(upperCase);
  }

  if (includeLC){
    userSpecs+=(lowerCase);
  }

  if(includeNum){
    userSpecs+=(numbers);
  }

  if (includeSym){
    userSpecs+=(symbols); 
  } 
  if (userSpecs == 0) {
    window.alert ('Oops! you must choose at least one character type.')
  };

  console.log(userSpecs)

  // - generate password
  var userPassword = [];
  for (var i = 0; i <length; i++) { 
    var randomPw = Math.floor(Math.random() * userSpecs.length);
    console.log(userSpecs[randomPw]) 
    userPassword += userSpecs[randomPw]; 

    // console.log(randomPw)
  }


  // display password 
  return userPassword;  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);