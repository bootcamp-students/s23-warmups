function pigIt(str){
  //splits the string into an array
  let strArr = str.split(' ');
  //creates empty array
  let pigLatin = [];
  for(let word of strArr){
    //checks to see if the word starts with an alphabetical character
    if((/([a-zA-Z])/).test(word)){
      //starts with the second letter, adds the first, then "ay"
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }else{
      pigLatin.push(word);
    }
  }
  //adds it to the pig latin array
  return pigLatin.join(" ");
}

/*
PSEUDOCODE
take in string
seperate string into words
take first letter of each word and move it to the back
add "ay" to the end of each word
return the new word
*/
