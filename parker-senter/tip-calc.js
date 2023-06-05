function calculateTip(amount, rating) {
  //each statement returns the tip amount based on the service
  let rate = rating.toLowerCase();
  if (rate === "excellent") {
    //Math.ceil always rounds the number up
    return Math.ceil((amount * 20) / 100);
  }
  else if (rate === "great") {
    return Math.ceil((amount * 15) / 100);
  } 
  else if (rate === "good") {
    return Math.ceil((amount * 10) / 100);
  } 
  else if (rate === "poor") {
    return Math.ceil((amount * 5) / 100);
  } 
  else if (rate === "terrible") {
    return Math.ceil((amount * 0) / 100);
  } 
  else {
    return "Rating not recognised";
  }
}

/* 
PUESDOCODE
  
VARS:
amount = bill price
rating = how good service was

FUNC:
if (rating === 'one of the ratings') {
return Math.ceil(ceil means round up)(amount*the amount that goes with the rating/100);
}
*/

//What does Math.ceil do??
//Figured it out, Math.ceil always rounds up
