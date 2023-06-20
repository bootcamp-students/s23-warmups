// Returns an integer from the multidimensional array based off the index
// Parameters are the array and the index
// Inside the for loop a variable named index is assigned which is current index value
// The answer variable is updated with the current index within the nested array

function getElement(array, indexes) {
 let answer = array
 for(let i=0; i <indexes.length; i++){
   let index = indexes[i]
   answer = answer[index]
 }
   return answer  
  }

