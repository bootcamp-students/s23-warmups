function coinCombo (cents) {
    let pennies = 0;
    let nickles = 0;
    let dimes = 0;
    let quarters = 0;
    
    for (let i = 0; i < 99; i++)
    if (cents >= 25) {
      cents = cents - 25;
      quarters ++;
    }
    else if (cents >= 10) {
      cents = cents - 10;
      dimes++;
    }
    else if (cents >= 5) {
      cents = cents - 5;
      nickles++;
    }
    else if (cents >= 1) {
      cents = cents - 1;
      pennies++;
    }
    
      return [pennies, nickles, dimes, quarters];
  }
  
  /*
  PESUDOCODE
  coins = [
  pennies = 0
  nickles = 0
  dimes = 0
  quarters = 0
  ]
  IF (cents >= quarters) {
    SUBTRACT 25
    Add 1 quarter
  }
  DO SAME THING FOR PENNIES, NICKLES, DIMES
  */