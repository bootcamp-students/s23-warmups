//BEGIN
// given 2 strings of only letter a - z
// use SORT to RETURN the longest possible string containing distinct letters
// each letter should only appear once
//END



//function longest(s1, s2) {
  // your code
  let longest = (s1, s2) =>
  [...new Set(s1 + s2)].sort().join('')
//   let newString = s1.concat(s2);
//   console.log(newString);
//   let newArr = new Set(newString);
//   let updatedArr = newArr.sort();
//   let mySet = new Set(updatedArr);
//   return newArr;
 //}