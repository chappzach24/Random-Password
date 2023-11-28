
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lower;
var upper;
var special;
var number;
var length;

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//picks number 8-128
var length = window.prompt("Pick a number from 8-128.");
console.log(length);

if (length >= 8 && length <= 128);{
  console.log("great you picked " + length);
}else{(length <= 8 && length >=128);
  alert("that is not a good number")
}

//picks if user wants upper case
var upper = window.prompt("Would you like upper case letters?")
console.log(upper);

//picks if user wants special case
var special = window.prompt("Would you like special letters?")
console.log(upper);

//picks if user wants numbers
var number = window.prompt("Would you like numbers?")
console.log(upper);


