function houseNumbersSum(inputArray) {
    //set sum to 0
    let sum = 0
    //for loop to go through array
    for (var i = 0; i <inputArray.length; i++) {
      //if i = 0 break the loop
      if (inputArray[i]===0) {
        break;
      }
      sum += inputArray [i];
    }
      return sum;
  }
  
  /*
  PSEUDOCODE
  //take array of numbers
  //add up array
  //IF item = 0 return array
  //ElSE continue adding
  //output is as mant numbers added UNTIL 0
  */