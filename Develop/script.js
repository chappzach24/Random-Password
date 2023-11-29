// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lower;
var upper;
var special;
var number;
var length;
var bowl = [];

var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
var length = question();
  
}

function question() {
  var length = window.prompt("Pick a number from 8-128.");
  var lengthNumber = parseInt(length);
  console.log(lengthNumber);
  console.log(typeof lengthNumber);

  // if (length >= 8 && length <= 128){
  //   console.log("great you picked " + length);
  // }
  if (Number.isNaN(lengthNumber)) {
    alert("You have to enter a number");
    return;
  }
  if (lengthNumber < 8 && lengthNumber > 128) {
    alert("that is not a good number");
    return;
  }

  //picks if user wants upper case
  var isUpper = window.confirm("Would you like upper case letters?");

  var isLower = window.confirm("Would you like lower case letters?");

  //picks if user wants special case
  var isSpecial = window.confirm("Would you like special letters?");

  //picks if user wants numbers
  var isNumber = window.confirm("Would you like numbers?");
 
  if(isUpper){
    bowl = bowl.concat(upper)
  }
  if(isLower){
    bowl = bowl.concat(lower)
  }
  if(isSpecial){
    bowl = bowl.concat(special)
  }
  if(isNumber){
    bowl = bowl.concat(number)
  }
  console.log(bowl);
  return lengthNumber;
}
//picks number 8-128

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
