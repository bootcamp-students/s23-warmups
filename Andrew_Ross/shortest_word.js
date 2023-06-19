function findShort(s){
  // have a string of whatever
  //for loop this mofo i believe to look at the whole thing
  //check to see if the index of the string is a character
  // if there is a blank space before and after the word, then we know the length of the word
  //(allegedly)
  var spl = s.split(" "); // this is how split words up in the string
  let shortest = 100; //it just needs to be a large number
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length < shortest) {
      shortest = spl[i].length;
    }
  }
  
  return shortest;
}
