function DNAStrand(dna){
  // return T for A
  // return A for T
  // C for G and c for G
  // use .map to go through each letter
  // use .replaceAll to replace letters
  let newArray = [];
  for(let i = 0; i < dna.length; i ++) {
    if (dna[i] === "A") {
      newArray.push("T");
    }
        if (dna[i] === "T") {
      newArray.push("A");
    }
        if (dna[i] === "G") {
      newArray.push("C");
    }
        if (dna[i] === "C") {
      newArray.push("G");
    }
    
    } return newArray.join("");
  }
