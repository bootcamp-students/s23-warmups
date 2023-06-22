// Return: A string using letters from the two strings to recreate the alphabet as near as possible
// Paramters: Two strings containing letters 
// A letter should not be used more than once
// Only letters included in one the strings can be used

// concat the two strings 
// turn that string into an array 
// only use one of each letter 
// put it in alphabetical order
// revert it back to a string
// return the answer


function longest(s1, s2) {
  let combinedString = s1 + s2 
  let singleLetters = Array.from(new Set(combinedString))
  let sortToAlphabet = singleLetters.sort()
  let answer = sortToAlphabet.join('')
  return answer
}
