var maxSequence = function(arr){
  let maxSum = 0
  let currentSum = 0
  
  if (arr.length === 0) {
        return 0;
  }
  
  for(let i = 0; i < arr.length; i++){
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);

  }
  return maxSum
}
