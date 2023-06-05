function arrayPlusArray(arr1, arr2) {
    //combines both arrays
    const arrOneTwo = arr1.concat(arr2);
    let sum = 0;
    //goes through all numbers in array and adds them
    for (let i = 0; i < arrOneTwo.length; i++) {
      // puts the sum of both arrays into a var
      sum += arrOneTwo[i];
    }
    // the function now returns sum
    return sum
    console.log(sum);
  }
  
  /*Puesdocode
  VARS
  sum = both arrays added
  arrOneTwo = both arrays combine
  
  FUNC:
  START
  combine both arrays
  add all numbers together
  return sum
  END
  */

/* 
SNIPPIT I WANT TO LOOK AT
what does the '...' do?

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
*/