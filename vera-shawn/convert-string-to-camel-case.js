//BEGIN
// given a string
// if given an empty string return "an empty string was provided but not returned"
// first word within the output should be CAPS only if original string was CAPS for the first word
// Each following word should be CAPS
// RETURN string
//END

function toCamelCase(str){
  
    let newArr = "";
    str = str.split('');
    return str.map(function (newArr, i) {
      if(newArr == "-" || newArr == "_") {
        newArr = str[i + 1].toUpperCase();
        str.splice(i + 1,1);
        console.log(newArr);
      } return newArr;
    }) .join('');
    } 