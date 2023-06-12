function coinCombo (cents) {
  let coins = [0,0,0,0];
  for(let i = 0; i < 99; i++) {
    if (cents >= 25) {
      coins[3]++;
      cents = cents - 25;
    } else if (cents >= 10) {
      coins[2]++;
      cents = cents - 10;
    } else if (cents >= 5) {
      coins[1]++;
      cents = cents - 5;
    } else if (cents >= 1) {
      coins[0]++;
      cents = cents - 1;
    } else {
      break; // Break out of the loop if there are no more cents remaining
    }
  }

  return coins;
}
