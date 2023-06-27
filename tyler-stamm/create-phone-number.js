function createPhoneNumber(numbers){
  // return ten digits the same, but in format of ""(000) 000-0000"
  // return as string
  // create new variable for format of numbers
  // use for loop to loop[ through it]
  // use .replace to replace x with the array
  // use .toString to convert to string
  var format = "(xxx) xxx-xxxx"
  for( let i = 0; i <numbers.length; i++) {
    format = format.replace("x", numbers[i])  

  }
  return format.toString();
}
