// BEGIN
// X is a string that is case sensitive
// we want to turn X into all CAPs
// if letter after X is already caps it should stay that way
// swapping occurs considering modified string

// INIT - variables, functions

// creating function
var makeEveryLetterAfterXCaps = function (str, letter) {
    // enter solution here
    // need to change every letter after user input "str" to be caps
    // using 2nd argument as the letter to reference
    let modifiedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === letter) {
            modifiedStr = str[i].toUpperCase;
            return modifiedStr;
        }
    }
      return modifiedStr;
    // END
}