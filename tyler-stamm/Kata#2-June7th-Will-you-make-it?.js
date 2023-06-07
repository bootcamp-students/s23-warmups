const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  // mpg times remaining fuel will determine how far you can go
  //if distance is greater, not making it
  //declare if else statement
  if(distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
};
