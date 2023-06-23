function likes(names) {
    //if no likes
    let thumbsUp = names.length;
    if (thumbsUp === 0) {
      return 'no one likes this';
    }
    //if one like
    else if (thumbsUp === 1) {
      return names[0] + ' likes this';
    }
    //if two likes
    else if (thumbsUp === 2) {
      return names[0] + ' and ' + names[1] + ' like this';
    }
    //if three likes
    else if (thumbsUp === 3) {
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    }
    //if four or more likes
    else if (thumbsUp >= 4) {
      return names[0] + ', ' + names[1] + ' and ' + (thumbsUp -2) + ' others like this'
    }
  }
  
  /*
  PSEUDOCODE
  //check for names in array
  //tell who has liked the post
  
  FUNC:
  var thumbsUp = names.length
  if (thumbsUp === # of likes) {
    return string that correlates
  }
  
  */