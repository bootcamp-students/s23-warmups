function absentVowel(x){
    //vowel arr
    const vowels = ['a', 'e', 'i', 'o', 'u'];
      //loops through arr index
      for (let i = 0; i < vowels.length; i++) {
        const vowel = vowels[i];
        //if the string includes one of the vowels
        //return vowel
        if (!x.includes(vowel)) {
          return i;
        }
      }
  }
  
  /*
  PSEUDOCODE
  //create array with vowels
  //for loop to run through all of the vowels 
  //if string is missing vowel, return index of array
  */