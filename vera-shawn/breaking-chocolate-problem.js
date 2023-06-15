// BEGIN
// INIT   
  // each square is 1x1
  // return 0 if a break can't be made

  function breakChocolate(n,m) {
    if (n > 0 && m > 0) {
      return n * m - 1;
    } else {
     
      // return minimum number of breaks
    return 0;
     } 
  // END  
  }s