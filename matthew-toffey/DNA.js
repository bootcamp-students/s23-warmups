function DNAStrand(dna){
  let newVal = '';
    for(i=0; i<dna.length; i++){    
        switch (dna[i]) {
            case 'A':
                newVal = newVal + 'T';
                break;
            case 'T':
                newVal = newVal + 'A';
                break;
            case 'C':
                newVal = newVal + 'G';
                break;
            case 'G':
                newVal = newVal + 'C';
                break;
        }
    }
    return newVal
};

//BEGIN
//INIT create empty string to 
  //use for loop to iterate through string 
  //use switch statement to assign new value
  //move through string, replacing appropriate variables
//FNCTN switch
  //return new value
//END
