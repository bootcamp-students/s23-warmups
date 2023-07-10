// return masked string
function maskify(cc) {
  if (cc.length > 4) {
    for (let i = 0; i < cc.length - 4; i++) {
      cc = cc.substring(0, i) + "#" + cc.substring(i + 1);
    }
  }
  return cc;
}
