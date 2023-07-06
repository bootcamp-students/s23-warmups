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



function sum(array) {
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
  return array.reduce((acc, curr) => acc + curr, 0);
  }
