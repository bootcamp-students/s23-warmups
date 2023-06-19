//string is s
//put the words into a array as individual properties/strings
//loop through, and count the letters in each word
//take the integer of the lowest number and push it out as the answer


function findShort(s){
 let shortWord = s.split(" ");
  let shortestWord = Infinity;
  
  for (let i = 0; i < shortWord.length; i++) {
    const wordLength = shortWord[i].length;
    shortestWord = Math.min(shortestWord, wordLength);
    }
  return shortestWord;

}

//infinity was needed to stop the increment? Shoutout to clayton
//this is because it is 'initializes the shortestWord variable as infinity, setting a starting point for shortest word length
//any word length will be shorter than infinity instead of incrementing indefinitely?
