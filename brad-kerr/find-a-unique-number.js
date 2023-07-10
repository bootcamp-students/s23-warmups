// Return: A single unique integer from an array
// An array of numbers
// Store, the answer in an object
// Count the occurances of each number in the array
// Find the number that occurs only once
// Return that number

function findUniq(arr) {
  const counts = {};

  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  for (let num in counts) {
    if (counts[num] === 1) {
      return parseFloat(num);
    }
  }
}
