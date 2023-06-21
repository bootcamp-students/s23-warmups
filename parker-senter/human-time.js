function humanReadable (seconds) {
    //figures out how many hours, mins, and left over seconds there are
    let numHours = Math.floor(seconds / 3600);
    let numMins = Math.floor((seconds % 3600) / 60);
    let numSec = seconds % 60
    
    //if any of the times are less than 10 it adds a 0 to the front
    //it makes the time look like 00:00:00
    if (numHours < 10) {
      numHours = "0" + numHours;
    }
    if (numMins < 10) {
      numMins = "0" + numMins;
    }
    if (numSec < 10) {
      numSec = "0" + numSec;
    }
    
    //returns the hours, mins, and seconds as readable time
    return numHours + ":" + numMins + ":" + numSec;
  }
  
  /*
  PSEUDOCODE
  //take amount of seconds
  //take away how many hours are in the amount
  //take away how amny minutes are in the amount
  //put left over in var
  //return human readable time
  */