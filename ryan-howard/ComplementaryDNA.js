function DNAStrand(dna){
  function splitLetters(str) {
    return str.split('');
  }
  
  const dnaArray = splitLetters(dna);
  const dnaPair = dnaArray.map(function(letter) {
    if (letter === 'A') {
      return 'T';
    } else if (letter === 'T') {
      return 'A';
    } else if (letter === 'G') {
      return 'C';
    } else if (letter === 'C') {
      return 'G';
    }
  });
  
  return dnaPair.join('');
  
}



//split string letters into individual letters in an array
//function to replace letters with correspondind DNA letters in a new array
//join the letters afterwards back into a string
