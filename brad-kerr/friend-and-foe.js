// Return: Names with 4 letters
// Parameters: A list of names as strings
// Loop through the friends list
// Needs a variable to hold the individual names
// IF statement to check if the length of the individual names are equal to 4 
// Store the names that are equal to 4 in the answer variable 
// Return the answer

function friend(friends){
let answer = []

for(let i=0; i < friends.length; i++) {
  let name = friends[i]
  if(name.length === 4){
    answer.push(name)
  }
  }
  return answer
}
