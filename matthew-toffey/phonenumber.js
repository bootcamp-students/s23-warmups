function createPhoneNumber(numbers){
  let output = '(xxx) xxx-xxxx';
  
  numbers.forEach (item =>{
    output = output.replace('x', item);
  });
  return output;
}

//BEGIN
//INIT set desired output method
  //set output var to return updated output method
//FNCTN use forEach method to evalute whole arr
  //use .replace method to swap 'x' for the appropriate index item
//END
