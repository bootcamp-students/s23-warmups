//return: an integer that is the sum of intengers in an array up until 0 
//parameter: an array of integer
//create a variable that stores the answer
//loop through the array 
//add each index of the array to the answer
// if array content is zero then stop adding

function houseNumbersSum(inputArray) {
let answer = 0
for(let i = 0; i < inputArray.length; i++){
  answer += inputArray[i]
  
  if(inputArray[i] === 0){
    break;
  }
}
return answer;
}
