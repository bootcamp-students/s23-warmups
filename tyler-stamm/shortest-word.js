function findShort(s){
  // return shortest word within a string
  // find shortest word in string
  // return its length
  // split string into substrings
  // then .sort to sort them by smallest to largest
  // arrow function?
  let smallestWord = s.split(" ").sort((a, b) => a.length - b.length);
  // return first one in an array and use .length 
  return smallestWord[0].length;
  // need to find length of the shortest word within string, NOT length of string itself
}
