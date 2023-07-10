function findUniq(arr) {
  // BEGIN
// INIT
  
  // loop through an array and check for a number that is different from all others
  // if that number is different from all other, return it

  // start with for loop
  // loop through the array
  // Which array methods identify a unique number within a set? Finding the one number that is different
  // use .find
  // END
  
    return arr.find(
    (item) => arr.indexOf(item) === arr.lastIndexOf(item) //
  );








}
