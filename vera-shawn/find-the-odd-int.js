// BEGIN
// given an array of integers
// find the integer that appears and odd number of times
// there will only be 1
// the return should be based on the number of occurences of the integer
//END


function findOdd(A) {
  //happy coding!
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j])
        count++;
    }
    if (count % 2 != 0)
      return A[i];
  }
  
  return A;
}