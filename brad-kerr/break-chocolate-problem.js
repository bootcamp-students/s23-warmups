// Returns the number of break required to make them 1x1
// Paremeters are the dimensions of the chocolate bar
// If n * m is 0 then return 0 
// The number of breaks will be n * m - 1 because thats the number of times it would have to be broken.

function breakChocolate(n,m) {
  if(n * m === 0){
  return 0
    } else {
      return n * m - 1
    }
}
