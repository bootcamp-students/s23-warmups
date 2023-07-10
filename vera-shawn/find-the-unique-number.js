// begin
// given an array of numbers
// there are at least 3 numbers in each array
// all numbers are equal except for 1
// some arrays are very large
// end


function findUniq(arr) {
    // do magic
    return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
  
  }
  