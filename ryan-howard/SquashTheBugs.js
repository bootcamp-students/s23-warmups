function findLongest(str) { //moustache goes here
  
  var spl = str.split(" "); //splits into arrays of strings
  var longest = 0; //initial number to keep track?
  
  for (var i = 0; i < spl.length; i++) { 
    if (spl[i].length > longest) { // parenthese to brackets since its arrays, checks to see if current word is greater than the longest value
      longest = spl[i].length; //if it is longer, becomes new length
    }
    }
    return longest;
}

//lots of parentheses instead of moustaches
