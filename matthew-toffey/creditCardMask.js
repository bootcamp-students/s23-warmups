// return masked string
function maskify(cc) {
  let masked = '';
  let lastFour = cc.substr(-4);

  for (var i = 0; i < cc.length - 4; i++) {
    masked += '#';
  }

  return masked + lastFour;

}
// BEGIN
//given, string
//return given string w/ all but last 4 numbers/letters changed to '#'
//END
