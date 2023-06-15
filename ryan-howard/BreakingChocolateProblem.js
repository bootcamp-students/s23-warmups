function breakChocolate(n,m) {
 if (n===0 || m===0){
  return 0;}
  return n * m -1;
}

//5 * 5 =25 -1=24
//1*1 = 1 -1= 0
//basically you just multiply to receive the total number of squares, 5 by 5 would be 25. keep breaking til you get one left.
//a 1x1 doesnt need to break. so just zero would be the result

// if (n===0 || m===0){
//return 0;}
//for some reason, this wasnt needed for the test, but was for the attempt
//if there was no chocolate at all... then calc wouldnt be needed which is why the first part is required
