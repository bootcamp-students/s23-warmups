function spinWords(string){
 let newArr = string.split(' ');
  let output = '';
  newArr.map((str, i) => {
    if (str.length >= 5){
      newArr[i] = str.split('').reverse().join('');
    } else {
      newArr[i] = str;
    }
  output = newArr.join(' ');
  });
  return output
  }

//BEGIN
//INIT 
  //new arr to hold str value
  //output/result var to hold new str value after evaluation
//FNCTN
  //split to move str to arr
  //loop through arr and evaluate which words should be reversed 
    //>= 5 should return reversed
  //if word >= 5 reverse
  //else no change
