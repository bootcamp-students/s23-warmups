function likes(names) {
  var upvotes = names.length;
  
  if (upvotes === 0) {
    return "no one likes this";
  } 
  if (upvotes === 1) {
    return names[0] + " likes this";
  }
  if (upvotes === 2){
    return names[0] + " and " + names[1] + " like this";
  }
  if (upvotes ===3){
    return names[0] + ", " + names[1] + " and " + names[2]+ " like this";
  }
  if (upvotes >= 4){
    return names[0] + ", " + names[1] + " and " + (upvotes -2) + " others like this";
  }
    
}
