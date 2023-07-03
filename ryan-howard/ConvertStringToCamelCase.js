function toCamelCase(str){
  str = str.split('');
  return str.map(function(el,i) {
    if(el == '-' || el == "_") {
      el = str[i+1].toUpperCase();
      str.splice(i+1, 1);
    }
    return el;
  }).join('');
}

//take string, split it into an array of characters 
// make an if else to change the text or get rid of dashes/underscores
// put a map in the if else to change if it has a - or _ and then later join
// make it so the next letter following a dash or underscore is converted toUpperCase

// had to look up the splice (i+1, 1) the comma one was missing
