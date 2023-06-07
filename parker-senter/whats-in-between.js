function between(a, b) {
    const arr = [];
    //sets i = to value of a and adds 1 each time till its = to b
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  /*
  PESUDOCODE
  VARS:
  a = one number
  b = another number
  arr = the array containing all numbers
  
  FUNC:
  function lessThan(a, b) {
    if (a < b) {
      [a, b];
    }
    else {
      'a is not less than b.'
    }
  }
  */