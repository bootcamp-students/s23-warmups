// Return: The highest and lowest integers from the numbers parameter 
// Parameter: The numbers 
// Turn the numbers into an array 
// Make a variable that will be equal to the highest number of that array
// Make a variable that will be the lowest number of that array
// Return the answer with string concatenation. 

function highAndLow(numbers) {
  const array = numbers.split(' ')
  const highest = Math.max(...array);
  const lowest = Math.min(...array);
  return highest + ' ' + lowest;
}
