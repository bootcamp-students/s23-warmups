function houseNumbersSum(inputArray) {
  let sum;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return sum; 
    } else if (inputArray[i] !== 0) {
      sum += inputArray[i];
    }
  }
  return sum;
}
