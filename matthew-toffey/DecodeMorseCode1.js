decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  var decodeString = '';
  var morseCodeWords = morseCode.split('   ');
  for (var i in morseCodeWords) {
    var morseCodeArray = morseCodeWords[i].split(' ');
    for (var j in morseCodeArray) {
      if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
        decodeString += MORSE_CODE[morseCodeArray[j]];
      }
    }
    decodeString += ' ';
  }
  decodeString = decodeString.trim();  
  return decodeString;
}
//Begin
//init new vars for morse code output
//FNCTN loop through and reformat output
//END
