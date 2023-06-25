// Split the string into an array of words
// Compare the length of each word in the array 
// Return the smallest word

function findShort(s) {
  const words = s.split(" ");
  
  return words.reduce((shortestLength, currentWord) => {
    const wordLength = currentWord.length;
    return Math.min(shortestLength, wordLength);
  }, Infinity );
}
