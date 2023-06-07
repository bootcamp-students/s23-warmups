const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let milesLeft = mpg * fuelLeft;
    if (distanceToPump <= milesLeft) {
      return true;
    }
    else {
      return false;
    }
};
  
/*
PESUDOCODE
VARS:
distance to pump = x miles away
mpg = x miles left in tank
fuel left = x amount of gallons in tank
  
FUNC:
milesLeft = mpg * fuelLeft;
if (distanceToPump <= milesLeft) {
    return true
}
else {
    return false
}
*/