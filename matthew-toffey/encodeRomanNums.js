function solution(number){
  // convert the number to a roman numeral
    let roman = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,//object to store information
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
//BEGIN
//INIT-store data in object to access
  //new var to hold output of functions
//FNCTNS
  //loop through obj
//END
