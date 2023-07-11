function pigIt(str){
  //Code here
  let strArr = str.split(' ');
  let pigLatin = [];
  
  for (let word of strArr) {
    if((/([a-zA-Z])/).test(word)){
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }else{
      pigLatin.push(word);
    }
  }
  return pigLatin.join(" ");
}
//BEGIN
//goal, take first letter in str and move it too the end with 'ay'
//FNCTN 
  //remove first letter
  //add first letter and 'ay' to end
  //return new joined string
//END
