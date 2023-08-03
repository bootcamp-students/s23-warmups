function scramble(str1, str2) {
  const charCount = {};
  //checks how many times a letter shows up in the string
  for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  //checks if all letters in str2 are shown in str1 (even duplicates)
  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}

/*
PSEUDOCODE
take in two strings
check if the first string has the same letters as the second one
if the letters are the same then return true
if the first string doesnt have all the same letters as the second return false
*/
