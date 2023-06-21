function humanReadable (seconds) {
  
  let hours = Math.floor(seconds / 3600);
 
  if (hours < 10) {
    hours = '0' + hours;
  }

  let minutes = Math.floor(seconds % 3600 / 60);
  
  let uSec = Math.floor(seconds % 60)
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
 
  if (uSec < 10) {
    uSec = '0' + uSec
  }
  return hours + ':' + minutes + ':' + uSec;
}

//BEGIN
//INITIALIZE - allow function to filter through seconds and return appropriate time in minutes/hours
    //should take seconds and preform calculation to return new values
    //display newValue
//FUNCTION - minutes to seconds, hours to minutes
    //place new time object into newValue and display readable time information
//END
