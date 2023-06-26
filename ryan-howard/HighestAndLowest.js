function highAndLow(numbers) {
  var numArray = numbers.split(" ").map(Number);
  var highest = Math.max(...numArray);
  var lowest = Math.min(...numArray);
  return highest + " " + lowest;
}


//split strings into array into separate integers
//go through the array, to find max and min
//return variables separated by single space with highest first
