// Return: A string that removes dashes and underscores and the subsequent words in the string as capitals.
// Parameter: A string 
// Create an answer variable that is an empty array
// Split the string by their dashes or underscores 
// Remove the dashes and underscores
// Loop through the array and captitalize the subsequent words. 
// Store result in answer variable 
// Return answer 

function toCamelCase(str){
answer = ''
words = str.split(/[-_]/)
for (let i = 0; i < words.length; i++){
  let word = words[i]
  
  if(i === 0) {
    answer += word
  } else {
  answer += word.charAt(0).toUpperCase() + word.slice(1);
  }
}
return answer
}
