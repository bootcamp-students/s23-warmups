var maxSequence = function(arr){
  if(arr === [] || arr <= 0){
    return 0
  }
  
  var maxSum = 0
  var currSum = 0
  for(let i = 0; i < arr.length; i ++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum)
  }
  
  if (maxSum < 0){
    return 0
  }
  return maxSum
}
