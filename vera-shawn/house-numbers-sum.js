// BEGIN
// given non-negative number
// sum input array
// break at 0
// return sum
// END



function houseNumbersSum(inputArray) {
  //coding and coding..
  let sumOfAddress = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sumOfAddress = sumOfAddress + inputArray[i];
  if (inputArray[i] === 0) {
    break;
  }
  } return sumOfAddress;
} 