function isDivisible(n, x, y) {
  //define n, x, and y
  
  // are x and y greater than 0? if so, run function
  if (x/y > 0)
    {
    if(n === (x/y))
      {
        console.log("true");
      }
      else
        {
         console.log("false");
        }
}
  
    
}
console.log(isDivisible(1,1,2));
