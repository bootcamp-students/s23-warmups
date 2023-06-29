//Return a string of words, the words with five or more letters should be reversed. 
//Split the string into an array of words
//Loop through each word in the array
//If word.length is 5 or more then reverse. 

function spinWords(string){
const answer = string.split(' ')

for (let i = 0; i < answer.length; i++){
  const word = answer[i]
  
  if(word.length >= 5){
    answer[i] = word.split('').reverse().join('')
  }
}
  return answer.join(' ')
}
