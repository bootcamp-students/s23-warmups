function absentVowel(x){
const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels[i];
    if (!x.includes(vowel)) {
      return i;
    }
  }
}
//create array with vowels
//for loop to run through all of the vowels 
//if str is missing vowel, return index of array
