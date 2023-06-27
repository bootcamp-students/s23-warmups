// BEGIN
// accept an array of 10 integers
// returns string of numbers given in the array
// has to return in phone number format (000) 000-0000
// .toString ?? convert but do we need to loop through?
// END


function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx"
    for (let i = 0; i < numbers.length; i++) {
      format = format.replace("x", numbers[i]);
      console.log(format);
    }
    return format;
  }