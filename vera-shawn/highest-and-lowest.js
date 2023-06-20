//BEGIN
//We are given the numbers as a STRING
//SPLIT at the " "
//Use Math.min and Math.max 
//RETURN the highest and lowest number
//END

function highAndLow(numbers){
    // ...
    let num = numbers.split(" ");
    return Math.max(...num) + " " + Math.min(...num);
  }