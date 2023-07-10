// return masked string
function maskify(cc) {
  // BEGIN
  //INIT
  // change everything except last 4 items into a #
  // Q: How does it know its the last 4 items of a string?
  // use .slice to create a new string
  // use .replace to replace everything with #
  // use .slice again to create last four on string
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

  
  //END
  
  
  
  
  
  
}
