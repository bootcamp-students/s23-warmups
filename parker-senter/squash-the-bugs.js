function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
        
      }
      
    }
    return longest
  }

  //missing curly braces (this {})
  //Added ; to var longest
  //Changed spl(i) to spl[i]
  //changed > in the for loop to <