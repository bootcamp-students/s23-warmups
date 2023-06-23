//Iterates through array and multiplies all numbers together
function multi(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
       sum = sum * arr[i];
    }
    return sum;
  }
  
  //Iterates through array and adds all the numbers together
  function add(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  
  //splits string into an array, reverses the split string array, joins all the letters in the array together
  function reverse(str) {
    return str.split('').reverse().join('')
  }