// Begin
// receive string
// reverse order of letters in the string
// return new string

// End

function spinWords(string){
    //TODO Have fun :)
    string = string.split(" "); 
  let newString = [];
   
    
    for (let i = 0; i < string.length; i++) {
      if(string[i].length >= 5) {
        string[i] = string[i].split("").reverse().join("");
        }
        newString.push(string[i]);
  }  return newString.join(" ");
    }
    