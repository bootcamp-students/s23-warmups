// BEGIN
// given a string change letters A to T and C to G
// maybe use .map method array?



// END


function DNAStrand(dna){
    //your code here
    let newArr = [];
     for (let i = 0; i < dna.length; i++) {
       if(dna[i] === "A"){
         newArr.push("T");
        }
       if(dna[i] === "T"){
         newArr.push("A");
        }
         
       if(dna[i] === "C"){
         newArr.push("G");
        }
       
           if(dna[i] === "G"){
         newArr.push("C");
        } }
           return newArr.join("");
      }
  