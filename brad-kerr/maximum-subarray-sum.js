// Return: largest integer that is the sum of part of the array 
// Parameter: An array of integers 
// Loop through the array 
// Find the max sum within the array 
// Compare the two

var maxSequence = function(arr){
  let maxSeq = 0;
  let currSeq = 0;
  for (const x of arr) {
    currSeq = Math.max(0, currSeq + x);
    maxSeq = Math.max(currSeq, maxSeq);
  }
  return maxSeq;
}
