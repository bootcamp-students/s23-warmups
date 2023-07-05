// Return: String of Roman Numeral
// Parameter: A Number 

// Declare answer variable 
// Store value and corrisponding symbols in an object
// Loop through the object
// If number is equal to value in the loop then add symbol to the answer
// Return answer 

function solution(number) {

let answer = "";

  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      answer += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  return answer;
}
