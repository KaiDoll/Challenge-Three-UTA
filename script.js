// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var chosenArr = []; When put as a global var this variable does not refresh and continues to hold the value. Why?
// var finalArr = [];
// var charLength = 8; Why would you need this var?
var uppCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var speciCase = ['@', '%', '+', '!', '#', '$', '?', ':', '&', '/'];


function generatePassword() {
  var chosenArr = []; //Works when it is put as a local var. 
  var finalArr = [];
  var charLength = prompt("How many characters would you like in your password? (8-128)");
  if (!charLength) {
    return null;
  }
  if (charLength < 8 || charLength > 128) {
    alert("Please choose a password length of 8-128");
    return null;
  } else if (isNaN(charLength)) {
    alert("Please type in a numerical number betweeen 8-128");
    return null;
} 
var lowercases = confirm ("Any lowercase letters?");
var uppercases = confirm ("Any uppercase letters?");
var numbers = confirm ("Any numbers?");
var characters = confirm ("Any special characters?");

  if (lowercases) {
    chosenArr = chosenArr.concat(lowCaseArr);
  }
  if (uppercases) {
    chosenArr = chosenArr.concat(uppCaseArr);
  }
  if (numbers) {
    chosenArr = chosenArr.concat(numArr);
  }
  if (characters) {
    chosenArr = chosenArr.concat(speciCase);
  }
  console.log(chosenArr);

  var password = "";
  
  for(var i = 0; i < charLength; i++) {
    finalArr = Math.floor(Math.random() * chosenArr.length);
    password = password + chosenArr[finalArr];
    }
 
  return password;
}



//Random password works but doesn't take into the account of the user choices. Why? 
// if (confirm("Any lowercase letters?")) {
//   options = options.concat(lowCaseArr);
// }
// if (confirm("Any uppercase letters?")) {
//   options = options.concat(uppCaseArr);
// }
// if (confirm("Any numbers?")) {
//   options = options.concat(numArr);
// }
// if (confirm("Any special characters?")) {
//   options = options.concat(speciCase);
// }