const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump 
};

//if your mpg multiplied by your fuelLeft variable is greater than or equal to the distanceToPump, 
//the function should return true that you will make it to the pump, otherwise it will be false.
