function scramble(str1, str2) {
  // loop
  // if any collection of letters can match all of str2, return True
  // have to count characters in str1

  const charCount = {};
  // Count occurrences of characters in str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Check if all characters in str2 are present in str1 with equal or greater counts
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    } else {
      charCount[char] -= 1;
    }
  } return true;
  }
