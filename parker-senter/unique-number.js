function findUniq(arr) {
  // Create an object to store the counts of each number
  const counts = {};

  // Count the occurrences of each number in the array
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Find the number with a count of 1 (unique number)
  for (let num in counts) {
    if (counts[num] === 1) {
      return parseFloat(num);
    }
  }
}

/*
PSEUDOCODE
create a count for each number
look through the array given
each time the number is shown in the array add one to the count
look at all the counts of each number
if a count is equal to 1 return that number as the unique number
*/
