function longest(s1, s2) {
    //concats both strings
    let longStr = s1 + s2;
    //splits letters into array
    let letterArr = longStr.split('');
    //sorts array in alphabtical order
    letterArr.sort();
    //checks position of item in array
    //if item is at a different position in array it filters it out
    const filteredArray = letterArr.filter(function(item, pos) {
      return letterArr.indexOf(item) === pos;
    });
    //returns the array joined into one string
    return filteredArray.join(''); // join the array back to a string
  }
  
  /*
  PSEUDOCODE
  //take 2 strings
  //split string into array
  //filter out dup letters
  //sort letters a-z
  //display new string
  */