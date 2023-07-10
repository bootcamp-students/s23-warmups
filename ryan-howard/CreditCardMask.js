// return masked string
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    return '#'.repeat(cc.length - 4) + cc.slice(-4);
  }
}


//BEGIN
//INIT
//somehow identify the last four characters of an array
// if there is 4 or less characters in the array, just return the characters
// replace everything before those four characters identified earlier
// concatenate the replaced string with the 4 numbers pulled
//END
