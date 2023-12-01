// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>/?";
var numbers = "1234567890";
var wholeString = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generatePassword() {
  var length = lengthQuestion();
  var characters = characterQuestion();
  pwString = []
  
  for(var i=0; i < length; i++){
    pwString.push(characters[getRandomNum(0,(characters.length)-1)])
  }
  return pwString.join("")
}

function lengthQuestion() {
  //picks number 8-128
  var length = window.prompt("Pick a number from 8-128.");
  var lengthNumber = parseInt(length);
  console.log(lengthNumber);

  //checks to see if user put in a somthing thats not a number
  if (Number.isNaN(lengthNumber)) {
    alert("You have to enter a number");
    return;
  }
  //checks if number is a good value
  if (lengthNumber < 8 && lengthNumber > 128) {
    alert("that is not a good number");
    return;
  }
  return lengthNumber
}

function characterQuestion() {
  //picks if user wants upper case
  var isUpper = window.confirm("Would you like upper case letters?");

  //picks if user wants lower case
  var isLower = window.confirm("Would you like lower case letters?");

  //picks if user wants special case
  var isSpecial = window.confirm("Would you like special letters?");

  //picks if user wants numbers
  var isNumber = window.confirm("Would you like numbers?");

  //if user said yes to the above it will push into new string
  if (isUpper) {
    wholeString.push(upperCase);
  }
  if (isLower) {
    wholeString.push(lowerCase);
  }
  if (isSpecial) {
    wholeString.push(specialChars);
  }
  if (isNumber) {
    wholeString.push(numbers);
  }

  var wholePasswordString = wholeString.join("").split("")
  console.log(wholePasswordString)

  return wholePasswordString
}