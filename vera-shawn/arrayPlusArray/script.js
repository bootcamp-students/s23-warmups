// arrayPlusArray kata solution

function arrayPlusArray(arr1, arr2) {
    //combines both arrays
    let arrOneTwo = arr1.concat(arr2);
    let sum = 0;
    //goes through all numbers in array and adds them
    for (let i = 0; i < arrOneTwo.length; i++) {
      // puts the sum of both arrays into a var
      sum += arrOneTwo[i];
    }
   return sum;
  }