// Return masked string
// A string of characters
// Loop through cc, stop within 4 characters of the full length
// Convert all iterations of the loop to '#'

function maskify(cc) {
    for (let i = 0; i < cc.length - 4; i++) {
      cc = cc.substring(0, i) + "#" + cc.substring(i + 1);
    }
  return cc;
}
