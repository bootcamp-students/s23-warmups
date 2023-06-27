// Return the integer if it appears in the array an odd ammount of times
// Parameter: An array of integers
// Loop through the array of inegers 
// Use the XOR operation ! <- this is still kinda confusing

function findOdd(A) {
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer ^= A[i];
  }
  return answer;
}
