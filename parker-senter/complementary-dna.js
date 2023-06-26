function DNAStrand(dna) {
  //splits the DNA string
  const dnaArr = dna.split("");
  //goes through each item in dnaArr and changes the letter
  const dnaPair = dnaArr.map(function (letter) {
    if (letter === "A") {
      return "T";
    } else if (letter === "T") {
      return "A";
    } else if (letter === "G") {
      return "C";
    } else if (letter === "C") {
      return "G";
    }
  });
  //returns dnaPair and adds all the letters together
  return dnaPair.join("");
}

/*
PSEUDOCODE
//split DNA strand into array
//foreach method check the letters
//IF letter = A { replace A with T }
//ELSE IF letter = T { replace T with A }
//ELSE IF letter = C { replace C with G }
//ELSE IF letter = G { replace G with C }
//concat new string together
//return new string
*/
