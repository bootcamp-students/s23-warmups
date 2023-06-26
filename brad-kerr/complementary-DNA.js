// If A return T 
// If T return A
// If C return G
// If G return C
// Paramter: A string 
// Loop through DNA
// Write a switch statement to change and store letters in an answer variable

function DNAStrand(dna){
let answer = ''
for(let i = 0; i < dna.length; i++){
  switch (dna[i]) {
      case 'A': 
      answer += 'T'
      break;
      case 'T':
      answer += 'A'
      break;
      case 'C':
      answer += 'G'
      break;
      case 'G': 
      answer += 'C'
      break; 
      default: 
  }
}
  return answer 
}
