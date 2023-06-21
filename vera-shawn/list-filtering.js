//BEGIN
//given non-negative integers and strings
//return new list with strings filtered out
//END


function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(list => typeof list !== 'string');
  }