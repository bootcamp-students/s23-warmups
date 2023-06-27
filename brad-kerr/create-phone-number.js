//return: the numbers in a phone number format
//paramter: an array of 10 integers
//break the array into three different strings based off the index slice needed
//string concat them with the other symbols to display the phone number

function createPhoneNumber(numbers){
let one = numbers.slice(0,3).join('')
let two = numbers.slice(3,6).join('')
let three = numbers.slice(6,10).join('')

return `(${one}) ${two}-${three}`;
}
