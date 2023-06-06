function isDivisible(n, x, y) {
  return (n%x == 0 && n%y ==0) ? true : false;
}


//PSUEDOCODE
// % checks if there is a remainder, if there is none, that means it is perfectly divisible.
// the () ? true : false is a if else statement. the condition is that if it is zero, that means it is, else it is not divisible which would be false
// (3 is divisible by 3, but not by 4, therefore it is false)
// (12 is divisible by 3 and 4, making it true)
