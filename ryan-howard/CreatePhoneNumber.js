function createPhoneNumber(numbers){
  let output = '(xxx) xxx-xxxx';
  numbers.forEach (item =>{
    output = output.replace('x', item);
  });
  return output;
}
//forEach to replace in a string





// function createPhoneNumber(numbers){
//   var numberArray = numbers.map(String);
//   var concat = numberArray.join('');
//   var phoneNumber = parseInt(concat, 10);
//   return phoneNumber;
// }
