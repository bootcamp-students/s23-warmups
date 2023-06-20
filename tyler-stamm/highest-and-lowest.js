function highAndLow(numbers){
  // ...
  // use .split to split into substrings
  // sort string from highest to lowest
  // use length -1 to get last number
  //use bracket notation to get first number

  var orderedNumbers = numbers.split(" ").sort(function(a, b) {return a -b});
  console.log(orderedNumbers);
  orderedNumbers = orderedNumbers[orderedNumbers.length - 1] + " " + orderedNumbers[0];
  return orderedNumbers;
}
