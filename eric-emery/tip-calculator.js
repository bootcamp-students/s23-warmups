function calculateTip(amount, rating) {

var rate = rating.toLowerCase();

if(rate === "excellent"){
  return Math.ceil(amount*20/100);
}
else if(rate === "great"){
  return Math.ceil(amount*15/100);
}

else if(rate === "good"){
  return Math.ceil(amount*10/100);
}

else if(rate === "poor"){
  return Math.ceil(amount*5/100);
}

else if(rate === "terrible"){
  return Math.ceil(amount*0/100);
}

else{
return("Rating not recognised");
}
  
}

/* PSUEDOCODE

Project needs to define whether not the tip is good or bad
-All decisions are based of of percentages
-Low percentage tips are terrible-poor
-Medium-High percentage tips are good-excellent

  Coding :(
  
  -We need to define functions that will print different strings
  depending on the tip percentage.
  -POSSIBLY USE IF ELSE STATEMENTS?
