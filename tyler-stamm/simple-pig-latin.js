function pigIt(str){
// Move first letter of str to the end of the string
  // AND add "ay" to the end of each word
  // How do we move items within a string to a new location?
  // use .split to turn inti an array of substrings
  // use .push to add letters at the end to add "ay" ath the end of an each word in the string
  // for loop to loop through array
  // use .join to bring it all back together
       let arr = str.split(" ");
       let newArr = [];
       for ( let i = 0 ; i < arr.length ; i++ ) {
          if ( arr[i] === "!" || arr[i] === "?" ){
             newArr.push(arr[i]);
          } else { 
             let s = arr[i].slice(1)+arr[i].charAt(0)+"ay"
             newArr.push(s)
          }
        }
      return newArr.join(" ")

}
