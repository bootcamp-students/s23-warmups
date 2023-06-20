function highAndLow(numbers){
  let num = numbers.split(' ');
  return Math.max(...num) + " " + Math.min(...num);
}

//Create an array to cycle through and evaluate
//using split to take the string and convert
//use math functions(max and min) to evaluate largest and smallest value within given arr
//return as appropriate string by adding space
