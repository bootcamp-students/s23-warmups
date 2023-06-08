function century(year) {
  // Finish this :)
  let currentCentury = 0; //declares variable
  while (year > 0) {
    year = year - 100; //loops through and deletes 100 years each time 
    currentCentury = currentCentury + 1; // adds one to century count each time it erases 100
  }
  return currentCentury; // returns count of how many times it erased 100
}
