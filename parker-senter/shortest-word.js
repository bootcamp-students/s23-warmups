function findShort(s){
    //splits string into spereate words
    var spl = s.split(" ");
    var shortest = 100;
    //loops through array of words
    for (let i = 0; i < spl.length; i++) {
      //if the word is shorter than 100 sets the length of the word to the shortest var
      if (spl[i].length < shortest) {
        shortest = spl[i].length;
      }
    }
    return shortest;
  }
  
  /*
  PSEUDOCODE
  //get string input
  //find shortest word
  //return length of shortest word
  
  let singleWords = s.split(" ");
  let wordLength = 100;
  for (let i = 0; i < singleWords.length; i++) {
    if (singleWords[i] < wordLength) {
      wordLength = singleWords[i];
    }
  }
  return wordLength;
  */