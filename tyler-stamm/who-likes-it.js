function likes(names) {
  // use names given
  // if else statements
  // if this amount of likes, then return specific statements
  //concat names 
  var count = names.length;

  if (count === 0) {
    return "no one likes this";
  } else if (count === 1) {
    return names[0] + " likes this";
  } else if (count === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (count === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (count - 2) + " others like this";
  }
}
