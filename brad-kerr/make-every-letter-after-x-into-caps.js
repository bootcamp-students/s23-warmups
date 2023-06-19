
// What does it return? 
// A string that makes the letter after a given letter capital

// What are the parameters?  
// The first is the string that will be manipulated
// The second is the letter that will trigger the next letter to be caps

// What do we need to do? 
// Make a loop through the string. 
// Loop through the string
// If the loop === letter 
// Then loop iterator + 1
// Capitalize 

// It passes all the tests but isn't able to submit

var makeEveryLetterAfterXCaps = function (str, letter) {
let answer = ''
let track = false

for (let i = 0; i < str.length; i++){
  if (track){
    answer += str[i].toUpperCase()
    track = false
  } else if (str[i] === letter) {
     answer += str[i];
     track = true
    }  else {
    answer += str[i];
}
  }
  return answer
}
