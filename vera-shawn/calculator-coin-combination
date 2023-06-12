function coinCombo (cents) {
    // creating variables
    let pennies = 0;
    let nickels = 0;
    let dimes = 0;
    let quarters = 0;
    
    // if/while statements to sort variables
    for (let i = 0; i < 99; i++)
    if (cents >= 25) {
      cents -= 25;
      quarters++;
    }
    else if (cents >= 10) {
      cents -= 10;
      dimes++;
    }
     else if (cents >= 5) {
      cents -= 5;
      nickels++;
    }
     else if (cents >= 1) {
      cents = cents - 1;
      pennies++;
    }
    // setting array to equal coin value
      return [pennies, nickels, dimes, quarters];
  }