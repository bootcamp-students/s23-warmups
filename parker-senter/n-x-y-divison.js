function isDivisible(n, x, y) {
    //% is named modulo, checks if a number is evenly divisible by another
    //&& is the 'and' operator which checks if both statements are true before continuing 
    if (n % x === 0 && n % y === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  /*
  PUESODCODE
  VARS:
  n
  x
  y
  
  FUNC:
  if (n/x && n/y === 0) {
    return true;
  }
  else {
    return false;
  }
  */