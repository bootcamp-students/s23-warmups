function spinWords(string) {
    //splits the string apart
    let newArr = string.split(' ');
    //creates blank string
    let output = '';
    //maps through array
    newArr.map((str, i) => {
      //if length is >= 5
      if (str.length >= 5){
        //reverses the word
        newArr[i] = str.split('').reverse().join('');
      } 
      else {
        newArr[i] = str;
      }
      //adds word to output
      output = newArr.join(' ');
      });
    return output
  }
  
  /*
  PSEUDOCODE
  //get a sentence
  //separate sentence into single words
  //check length of words
  //IF length => 5 reverse the string
  //ELSE return as normal
  //concat sentence back together
  //return sentence
  */