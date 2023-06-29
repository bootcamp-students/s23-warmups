function spinWords(string){
// return original array BUT IF word is longer than five letter, reverse it
  // loop through string
  // if statement for .length > 5
  // return reverse
  // else return normal array
   string = string.split(" ");
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if(string[i].length >= 5) {
      string[i] = string[i].split("").reverse().join(""); // use .split to turn it into an array
    }            newString.push(string[i]);


  }     return newString.join(" ");
  }
