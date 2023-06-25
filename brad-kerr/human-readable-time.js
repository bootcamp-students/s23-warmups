// Return: A conversion from seconds to human time in hours, minutes, seconds
// Paramter: Seconds
// Store the hours, minutes and seconds in their own variables
// Concat the variables into a string with padded 00 integers 

function humanReadable (seconds) { 
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor(seconds % 3600 / 60)
  let secondz = seconds % 60

  let readHours = String(hours).padStart(2, '0')
  let readMinutes = String(minutes).padStart(2,'0')
  let readSeconds = String(secondz).padStart(2, '0')
  return `${readHours}:${readMinutes}:${readSeconds}` 
} 

