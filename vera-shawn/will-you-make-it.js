const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // set variables for fuel remaining in tank
    let milesLeft = mpg * fuelLeft
    
    // if statement to test if there is enough gas left in tank
    if (distanceToPump <= milesLeft) {
      return true
  } else {
    return false;
    }
   } 