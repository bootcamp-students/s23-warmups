function humanReadable (seconds) {
  // take seconds as input and outputting seconds in a new format of HH: MM: SS
  // define variables for hour, min, and sec
  // need string literals
  // create while loop for if sec > 60, min goes up by 1
  // create loop for if min > 60, hour goes up by 1
  
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor(seconds % 3600 / 60);
  var newSeconds = Math.floor(seconds % 60)
  
  if (hours < 10) {
    hours = "0" + hours;
  };
  
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  
  if (newSeconds < 10) {
    newSeconds = "0" + newSeconds;
  }
  
  
  return hours + ":" + minutes + ":" + newSeconds;
  }
