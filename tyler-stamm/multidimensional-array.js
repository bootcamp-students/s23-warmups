function getElement(array, indexes) {
  // return element by its index
  // create new variable to store new element
  let calledIndex = array;
  // loop through the original indexes
  for(let i = 0; i < indexes.length; i ++) {
  const index = indexes[i];
    calledIndex = calledIndex[index]
  }
  return calledIndex;
}
