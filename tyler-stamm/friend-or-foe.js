function friend(friends){
  //your code here
  // if name is divisible by 4
  // filter method
  // filter by length of array
  // return new array
  var newFriends = friends.filter(item => item.length === 4);
  return newFriends;
}
