function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  const initialValue = 0;
  const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
  return sumWithInitial;
}
//Begin
//INIT
  //intialvalue-set to 0 to add values of arr without interruption
  //sumWithInitial to hold function and output
//FNCTN
  //arr.reduce
  //return sum
//END
