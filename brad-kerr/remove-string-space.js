// Create a for loop to loop over x 
// If the loop case is not equal to "space" 
// Then it will be added to the result variable 

function noSpace(x){
let result = "";
for (let i=0; i < x.length; i++){
  if (x[i] != " " ){
    result += x[i];
  }
}
  return result;
}
