// Return: The list with the strings taken out
// Paramter: The list which is an array
// Create a loop that goes through the list
// Checks if each index of the array is an integer 
// Pushes the integers to an answer variable
// Return that answer

function filter_list(l) {
  const answer = []
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      answer.push(l[i])
    }
  }
  return answer;
}
