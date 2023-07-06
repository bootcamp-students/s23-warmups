// begin
// given an array of integers
// use reduce() to return sum of these integers
// end


function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  