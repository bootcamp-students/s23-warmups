function multi(arr) {
  return arr.reduce( (a,b) => a * b, 1);
}
function add(arr) {
  return arr.reduce( (a,b) => a + b, 0);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
//use reduce function to multiply values within array, use value of 1 to add an "empty multiplyer"
//use reduce to add numbers within second array, use int of 0 as to not add additional integer
//give true process to reverse.  split, flip and join to reevaluate the str
