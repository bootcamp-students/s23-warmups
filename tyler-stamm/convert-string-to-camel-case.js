function toCamelCase(str){
// changing format
  // if you see a - or a _, change the next letter to a capital
  // create new array variable
  // for each iteration, item loops through each letter looking for - or _
  //if found, return next letter as capital and continue looping through the rest of array
  // BEGIN
  // INIT
  // declare new array using .split
  // .map
  // if(str[i] === "-" || "_") {
  // return  str[i] = str[i] + 1.toUpperCase
  // use .splice
  // use .join
  str = str.split(''); // splits it into an array
   return str.map(function(newArray, i) {
    if(newArray == "-" || newArray == "_"){
      newArray = str[i + 1].toUpperCase();
      str.splice(i+1, 1); // changes contents of array
    } return newArray;
   }
  ).join('')  
}
