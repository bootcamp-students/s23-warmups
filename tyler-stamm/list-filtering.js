function filter_list(l) {
  // create new varialbe called noStrings
  // Return a new array with the strings filtered out
  // use. filter method to eliminate strings and only keep numbered integers
  
  var noStrings = l.filter(item => typeof item === "number");
  console.log(noStrings);
  return noStrings;
}
