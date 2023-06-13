// BEGIN
// INIT functions

function multi(arr) {
  let sum = 1;

  //Iterates through array and multiplies all numbers together

  for (let i = 0; i < arr.length; i++) {
     sum = sum * arr[i];
  }
  return sum;
}

function add(arr) {
  let sum = 0;

  //Iterates through array and adds all the numbers together

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

//splits string into an array, reverses the split string array, joins all the letters in the array together
function reverse(str) {
  return str.split('').reverse().join('')
  
// END
}