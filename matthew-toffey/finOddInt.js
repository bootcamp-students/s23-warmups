function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
    let result =  (A.filter(function(item) { return item === A[i];}).length%2 !== 0);
      if (result){
      return A[i];
       };
  }
}

//BEGIN
//INIT result var to hold function
//FNCTN for loop to evaluate arr
  //filter method to look through arr
//end
