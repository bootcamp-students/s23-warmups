function getElement(array, indexes) {
 
  let calledIndex = array;
  
  for (let i = 0; i < indexes.length; i ++) {
    const index = indexes[i];
      calledIndex = calledIndex[index] 
  }
  return calledIndex;
}
// return objects by index
//store index
//create loop through index
//statement reevalutes array with correct index
