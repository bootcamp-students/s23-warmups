function scramble(str1, str2) {
    const charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

//INIT
//if any collection olf letters can match all of str2, return true0

//create object to store character counts
//count the amount of times each character appears in str1\
//check to see if str2 can be made from characters in str1
//reduce the char count by 1 each time a letter is used
//return false if the character is not in str1
// if all characters in str2 are there, return true


// function scramble(str1, str2) {
//   const charCount = {};
//   // Count occurrences of characters in str1
//   for (let i = 0; i < str1.length; i++) {
//     const char = str1[i];
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   // Check if all characters in str2 are present in str1 with equal or greater counts
//   for (let i = 0; i < str2.length; i++) {
//     const char = str2[i];
//     if (!charCount[char] || charCount[char] === 0) {
//       return false;
//     } else {
//       charCount[char] -= 1;
//     }
//   }
//   return true;
// }
