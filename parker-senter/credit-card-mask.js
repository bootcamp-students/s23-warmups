// return masked string
function maskify(cc) {
  // checks if the string is longer than 4
   if (cc.length > 4) {
     // loops through each item in the string
    for (let i = 0; i < cc.length - 4; i++) {
      //sets items to hashtags
      cc = cc.substring(0, i) + "#" + cc.substring(i + 1);
    }
  }
  return cc;
}

/*
PSEUDOCODE
take in a string as the argument
if the string is longer than 4 digits, turn the rest into '#'
return the string
*/
