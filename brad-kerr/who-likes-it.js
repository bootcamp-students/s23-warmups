// Return: The display as shown in the example 
// Parameters: An array of names 

function likes(names) {
let array = names.length 

if (array === 0) {
  return "no one likes this"
} else if (array === 1) {
  return names[0] + ' likes this'
} else if (array === 2) {
  return names[0] + ' and ' + names[1] + ' like this'
} else if (array === 3) {
  return names[0] + ', ' + names[1] + ' and '+ names[2] + ' like this'
} else {
  return names[0] + ', ' + names[1] + ' and ' + (array - 2) + ' others like this'
}
}
