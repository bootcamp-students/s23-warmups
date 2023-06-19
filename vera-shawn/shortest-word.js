// BEGIN
// given string
// find shortest word in string
// return shortest word
// END

function findShort(s){
  let array1 = s.split(" ");
 let shortest = array1.reduce((a, b) => a.length <= b.length ? a : b);
let shortestNumber = shortest.length;
  return shortestNumber;
}