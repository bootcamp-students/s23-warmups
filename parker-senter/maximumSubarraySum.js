var maxSequence = function(arr){
  //sets max and curr to 0 since only returning postive numbers
  let maxSeq = 0;
  let currSeq = 0;
  //for loop to check through all numbers in the array
  for (const x of arr) {
    //checks if the number is less than or greater than 0
    //if number is less than 0 it returns 0
    currSeq = Math.max(0, currSeq + x);
    //if currSeq is greater than max, sets max equal to curr
    maxSeq = Math.max(currSeq, maxSeq);
  }
  //returns the max sequence
  return maxSeq;
}

/*
PSEUDOCODE
take in an array
find the largest possible positive number from a subsequence in the array
if empty return 0
if all negative return 0
if all positive numbers return all array numbers added together
else, check all numbers in the array
*/
