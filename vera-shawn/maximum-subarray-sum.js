// BEGIN
// INPUT - array of numbers
// numbers can be positive or negative
// if array is empty return 0
// if array is all negative numbers return 0 
// RETURN maximum sum of contiguous subsequence

var maxSequence = function(arr){
    let currentMax = 0; // setting current Max number
    let currentSum = 0; // variable to hold the current sum start at 0
    
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i]; // the current iteration of the loops is added to the current sum
      if (currentSum > currentMax) { // if statement to see if the current is greater than the current max
        currentMax = currentSum; // if true current sum is current max
      }
      if (currentSum < 0) { // if statement if current sum is negative
        currentSum = 0; // then current sum is 0
      }
      }
    return currentMax;
    }