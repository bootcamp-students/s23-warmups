//BEGIN
//non-negative integer is given in seconds
//maximum time never exceeds 359999
//add a 0 in front of any number below 10
//END


function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let userSeconds = seconds % 60;
   
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (userSeconds < 10) {
      userSeconds = "0" + userSeconds;
    }
    
    return hours + ":" + minutes + ":" + userSeconds;
  }