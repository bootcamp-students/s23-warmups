function pigIt(str){
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


//Move the first letter to the end of each word in the string 
//After, add an ay to the end

//.split to turn into an array of substrings
//use .push to add letters 'ay' at the end
//if it has punctuation, push it to the end following the first push
//slice em and add the ay to the end of each first letter
//join em together after
