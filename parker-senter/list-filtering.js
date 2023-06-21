function filter_list(l) {
    //typeof checks if the element in the array is a number
    //typeof shows the data type of an element
    const noStrings = l.filter(item => typeof item === 'number');
    return noStrings;
  }
  
  /*
  PSEUDOCODE
  //gets array
  //filters out strings in array
  //returns array with no strings
  */