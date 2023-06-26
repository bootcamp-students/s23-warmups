function findOdd(A) {
  // return the integer from A that appears an odd number of times
  // occurs once, three times, five, seven, eleven, etc.
  //Q: How do you check if something appears in an array an odd amount of times?
  // check the number of times an integer occurs within the array
  // if displayed odd nunber of times, return it
  // if displayed an off number of times
  for (let i = 0; i < A.length; i ++) {
    var countOfNumbers = 0;
    
    for( let j = 0; j < A.length; j ++) {
    if (A[i] == A[j])
        countOfNumbers ++;
  }
    if (countOfNumbers % 2 != 0)
      return A[i];

}
  }
