function findShort(s){
  //split to arr so each str can be evaluated
  let arr = s.split(' ');
  //reduce to evaluate the length of each string and hold shortest value
  let shortest = arr.reduce((a, b) => a.length <= b.length ? a : b);
  //length to evaluate string numeric value
  let shortestNumber = shortest.length;
  return shortestNumber
}
