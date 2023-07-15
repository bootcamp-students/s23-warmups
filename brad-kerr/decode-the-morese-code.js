// Return: A string of the decoded morses code
// Parameter: Morse Code dots and spaces
// Split the code into words
// Split the words into letters
// Decode the letters
// Rejoin the letters to a word
// Rejoin the words to a string

const decodeMorse = function(morseCode) {
  const words = morseCode.trim().split('   '); 
  const decodedWords = words.map(word => {
    const letters = word.split(' '); 
    const decodedLetters = letters.map(letter => MORSE_CODE[letter]); 
    return decodedLetters.join(''); 
  });
  return decodedWords.join(' '); 
};
