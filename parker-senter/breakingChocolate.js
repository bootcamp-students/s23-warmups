function breakChocolate(n,m) {
    if (n > 0 && m > 0) {
      let breaks = m*n - 1;
      return breaks;
    }
    else {
      return 0;
    }
  }
  
  /*
  PSEUDOCODE
  if (n > 1 || m > 1) {
    breaks = m*n - 1
    return breaks
  }
  else {
    return 0 
  }
  */