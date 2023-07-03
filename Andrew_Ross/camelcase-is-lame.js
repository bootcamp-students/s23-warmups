function toCamelCase(str){
// we assume there is a string with dashes and underscores
// you read through the string to find any dashes or underscores or both
// chop it into pieces based on the dashes or underscores into an array 
// uppercase the first letter of the word after the first one
    let words = str.split(/[-_]/);
  let camelCaseString = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return camelCaseString;
}
