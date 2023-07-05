function solution(number) {
  // BEGIN
  // INIT
  // take number 1-3999
  // return string with roman numeral symbol
  // we want computer to see number and replace number with given symbol
  // no more than 3 identical symbols 
  // create an array with a key for the Roman numeral symbols
  // create an array for the number value of each symbol
  // loop through each item in the array to check if it matches the condition of the key
  // while true, number will assign value to new array and then subtract that value from the original number
  
  var symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Create an empty string to store the Roman numeral representation
  var romanNumeral = "";

  // Loop through the values array
  for (var i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      romanNumeral = romanNumeral + symbols[i];
      number = number - values[i];
    }
  }

  return romanNumeral;
}
