function solution(number){

    let roman = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
  },
      output = ''
  for (let i in roman) {
    while(number >= roman[i]) {
      output += i
      number -= roman[i]
    }
  }
  return output
}

//find/create key value pairs
//check if each number is greater than or equal to current numeral and subtract it to get rid of extra numeral

//basically subtract largest roman numberal symbols from number entered and appending them to the output until the number is represented
