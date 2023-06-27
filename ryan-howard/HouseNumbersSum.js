function houseNumbersSum(inputArray) {
  //coding and coding..
  let sum = 0
  for (var i = 0; i <inputArray.length; i++) {
    if (inputArray[i]===0) {
    break;
  }
    sum += inputArray [i];
}
    return sum;
}
//add items in array until there is a zero at which the count stops
