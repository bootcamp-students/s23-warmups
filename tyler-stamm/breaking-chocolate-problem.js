function breakChocolate(n,m) {
  // each square is 1 * 1
  // return min number of breaks
  // negative number?
  // if negative number, return 0
  // both n and m negative (or)
  if (n <= 0 || m <= 0) {
    return 0;
  } else {
  return (n * m - 1);
    }
}
