// Return: A string that manipulates the string in the parameter
// Parameter: A string 

function pigIt(str){
  let strArr = str.split(' ');
  let pigLatin = [];
  for(let word of strArr){
    if((/([a-zA-Z])/).test(word)){
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }else{
      pigLatin.push(word);
    }
  }
  return pigLatin.join(" ");
}
