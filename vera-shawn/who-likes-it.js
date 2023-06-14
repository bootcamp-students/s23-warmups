// BEGIN
// INIT - variables and functions
// implement a function that takes an array and returns formatted text
// if 4 or more names are entered the number in the "and 2 others" increases
function likes(names) {
    // TODO
    let likes = names.length;
   
    // if statements to determine output
    if (likes === 0) {
      return "no one likes this"
    } else if (likes = 1) {
      return likes;
    } else if (likes = 2) {
        return likes;
      } else if (likes = 3) {
          return likes + "1 other likes this"
        } else if (likes => 4) {
      return likes + "2 others like this"
    } 
     
    //END
  }