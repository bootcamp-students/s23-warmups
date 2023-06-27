function houseNumbersSum(inputArray) {
  // counting the sum of the inputArray
  // after he sees the number 0, break and stop counting
  // need to create a variable to host the sum
  // if inputArray === 0; then break the count and return the sum
  // for loop to loop through all numbers
  var sumOfAddress = 0;
  for(let i = 0; i < inputArray.length; i++) {
    sumOfAddress= sumOfAddress + inputArray[i];
    if (inputArray[i] === 0) {
      break;
    }
  } return sumOfAddress;
  
}
