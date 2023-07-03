//BEGIN
// given morse code as input
// return English 


//END


decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    var words = (morseCode).split('  ');
    var letters = words.map((w) => w.split(' '));
    var decoded = [];
  
    for(var i = 0; i < letters.length; i++){
      decoded[i] = [];
      for(var x = 0; x < letters[i].length; x++){
          if(MORSE_CODE[letters[i][x]]){
              decoded[i].push( MORSE_CODE[letters[i][x]] );
          }
      }
    }
  
    return decoded.map(arr => arr.join('')).join(' ').trim();
  }