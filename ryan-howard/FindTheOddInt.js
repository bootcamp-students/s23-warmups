function findOdd(A) {
    for (let i = 0; i <A.length; i++) {
      const oddNumber = A.filter((element) => element === A[i]).length %2 !==0;
      if (oddNumber) {
      return A[i];
        }
    }; 
}

//filter out integers in array by divisibility by 2 so see if theyre odd or even
//Thank you Matt and Keith!
