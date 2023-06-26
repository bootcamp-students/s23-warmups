function findOdd(A) {
    //loops through all numbers in A
    for (var i = 0; i < A.length; i++) {
      //filters through each number checking them
      let result = (A.filter(function(item) { return item === A[i]; }).length % 2 !== 0);
      if (result) {
        return A[i];
      }
    }
  }
  
  /*
  PSEUDOCODE
  //get array of number(s)
  //go through the array and figure out what number appears an odd amount of times
  //return the number that shows up odd amount of times
  */