//BEGIN
//Given strings
//FILTER names with only 4 letters
//RETURN 4 letter names
//END


function friend(friends){
    //your code here
    let fourLetterFriends = friends.filter(friends => friends.length === 4);
    return fourLetterFriends;
  }