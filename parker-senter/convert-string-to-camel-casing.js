function toCamelCase(str){
    //splits the string into an array
    str = str.split('');
    //.maps through checking for "-" "_"
    return str.map(function(el, i){
      if(el == '-' || el == '_'){
        //sets the letter after the special character to upper case
        el = str[i+1].toUpperCase();
        //splices the element and replaces it
        str.splice(i+1, 1);
      }
      return el;
      //concats everything together
    }).join('');
}
  
  /*
  PSEUDOCODE
  take in string (ex: the-stealth-warrior)
  .split the string into an array
  .map through the array and check for any "-" or "_" getting rid of them
  every word BUT the first word becomes capitilized 
  concat all the words back together with no spaces
  return the string
  */