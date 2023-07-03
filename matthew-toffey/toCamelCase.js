function toCamelCase(str){
 let newStr = "";
  if(str){
    let wordArr = str.split(/[-_]/g);//replaces dashes
    for (let i in wordArr){//loop through
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);//apply changes to str
      }else{
        newStr += wordArr[i]
      }
    }
  }else{
    return newStr
  }
  return newStr;
}
//BEGIN - use replace method to change string
//INIT 
  //ver to hold new str values/provide feasability to function
//FNCTN
  // loop through string/replace symbols/convert to upper case
//END
