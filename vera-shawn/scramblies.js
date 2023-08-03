// BEGIN
// INPUT - two arguments that are strings
// all letters are lower case
// no punctuations will be included
// unscramble string in argument 1
// compare unscrambled arguments 1 to argument 2
// if the same RETURN true ELSE RETURN false
// END

function scramble(str1, str2) {
  // Initialize an empty object to hold the count of each character in str1
  const charCount = {};

  // Iterate through each character in str1
  for (let i = 0; i < str1.length; i++) {
    // Get the current character
    const char = str1[i];

    // If the character is already a key in charCount, increment its value by 1.
    // If the character is not yet a key in charCount, add it with a value of 1.
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through each character in str2
  for (let i = 0; i < str2.length; i++) {
    // Get the current character
    const char = str2[i];

    // If the character is not a key in charCount, or its value in charCount is 0,
    // that means str2 contains a character that's not in str1, or str2 contains more 
    // instances of a character than str1. In either case, return false.
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    } else {
      // If the character is a key in charCount and its value is greater than 0, 
      // decrement its value by 1. This is to account for the current character in str2.
      charCount[char] -= 1;
    }
  }

  // If we've made it through all characters in str2 without returning false, 
  // that means str2 can be made from str1. Return true.
  return true;
}