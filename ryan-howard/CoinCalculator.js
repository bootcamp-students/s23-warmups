
var coinCombo = function(cents) {
  
  return [cents % 5, Math.trunc(cents % 25 % 10 / 5), Math.trunc(cents % 25 / 10), Math.trunc(cents/25)]
  
}

//cents % 5 is the remainder when cents is divided by  5, number of cents that cant  be evenly divided by 5
//(cents % 25 % 10 / 5) remainder when quarters are removed, then dimes, then counts nickels by division. truncates the first two answers off to get a single integer
//same deal with Math.trunc(cents % 25 / 10)
//Same for the last line with quarters. Gives you the whole integer, then removes the decimals following to give you the actual number of how many quarters would be divisible
