function highAndLow(numbers){
    let numList = numbers.split(" ");
    let high = Math.max(...numList);
    let low = Math.min(...numList);
    return high + " " + low;
}
  
  /*
  PSEUDOCODE
  //turn string into integers
  //use math max and min to find hightest and lowest
  //turn back to string
  //show answer
  
  let numList = array of numbers
  let high = highest number
  let low = lowest number
  return high and low numbers
  */