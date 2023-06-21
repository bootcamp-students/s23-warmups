//cant go over 359999, cant go negative
//

function humanReadable (seconds) {
  if (seconds < 0 || seconds > 359999) {
  return null;
  }

  let HH = Math.floor(seconds/3600);           //divides by number of seconds in an hour, math.floor rounds it
  let MM = Math.floor(seconds % 3600/60);     //gives the remainder when the total of seconds divided by seconds in an hour. It then divides the remainder by 60 to get number of seconds in a minute and rounds doin math.floor
  let SS = seconds % 60; // The % gives us the remainder when the full number is divided by 60
    
    if (HH < 10) {
      HH = "0" + HH;
    }
    
   if (MM < 10) {
    MM = "0" + MM;
    }
    
    if (SS < 10) {
      SS = "0" + SS;
    }
    
  
  return HH + ":" + MM + ":" + SS;
    
}

//Thanks Shawn!
