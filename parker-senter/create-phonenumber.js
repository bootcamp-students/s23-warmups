function createPhoneNumber(numbers){
    //creates string to look like a phone number
    let output = '(xxx) xxx-xxxx';
    //for each loop to replace each x with the number from the array
    numbers.forEach (item =>{
      output = output.replace('x', item);
    });
    return output;
  }
  
  /*
  PSEUDOCODE
  //get array of numbers
  //for each through the array
  //put the numbers into a string so it looks like a phone number
  //return
  */

//i really liked this solution
/*
createPhoneNumber([0,1,2,3,4,5,6,7,8,9]);

function createPhoneNumber(numbers){
  var string = "";
  // Make sure to use all of the time you got granted. Never waste time which is entitled to you!!!!
  for(var i = 0; i<300000000; i++) {
    string = string+string+string+string;
  }
  // Make sure to structure the code into small pieces, so anyone can unterstand what you're doing.
  // Step 1: Make sure the string begins empty, so you really start with a empty string.
  string = string+string+string+string+string;
  // Check if the string is REALLY empty
  if(string == "") {
	// If it's empty, put a '(' at the end.
	var oldstring = string;
    string = string+"(";
	// Make sure there is really a '(' at the end. If not, repeat!
	if(string == oldstring+"(") {
		// If everything is fine, add the first number.
		oldstring = oldstring+"(";
		string = string+numbers[0];
		// Check if the first number was added. If not, repeat!
		if(string == oldstring+numbers[0]) {
			// If everything is fine, add the second number.
			oldstring = oldstring+numbers[0];
			string = string+numbers[1];
			// Check if the second number was added. If not, repeat!
			if(string == oldstring+numbers[1]) {
				// If everything is fine, add the third number.
				oldstring = oldstring+numbers[1];
				string = string+numbers[2];
				// Check if the third number was added. If not, repeat!
				if(string == oldstring+numbers[2]) {
					// If everything is fine, add the ')'.
					oldstring=oldstring+numbers[2];
					string = string+")";
					// Check if the ')' was added. If not, repeat!
					if(string == oldstring+")") {
						// If everything is fine, add the ' '.
						oldstring=oldstring+")";
						string = string+" ";
						// Check if the ' ' was added. If not, repeat!
						if(string == oldstring+" ") {
							// If everything is fine, add the fourth number.
							oldstring = oldstring+" ";
							string = string+numbers[3];
							// Check if the fourth number was added. If not, repeat!
							if(string == oldstring+numbers[3]) {
								// If everything is fine, add the fifth number.
								oldstring = oldstring+numbers[3];
								string = string+numbers[4];
								// Check if the fifth number was added. If not, repeat!
								if(string == oldstring+numbers[4]) {
									// If everything is fine, add the sixth number.
									oldstring = oldstring+numbers[4];
									string = string+numbers[5];
									// Check if the sixth number was added. If not, repeat!
									if(string == oldstring+numbers[5]) {
										// If everything is fine, add the "-".
										oldstring = oldstring+numbers[5];
										string = string+"-";
										// Check if the "-" was added. If not, repeat!
										if(string == oldstring+"-") {
											// If everything is fine, add the seventh number.
											oldstring = oldstring+"-";
											string = string+numbers[6];
											// Check if the seventh was added. If not, repeat!
											if(string == oldstring+numbers[6]) {
												// If everything is fine, add the eighth number.
												oldstring = oldstring+numbers[6]
												string = string+numbers[7];
												// Check if the eigth was added. If not, repeat!
												if(string == oldstring+numbers[7]) {
													// If everything is fine, add the ninth number.
													oldstring=oldstring+numbers[7];
													string = string+numbers[8];
													// Check if the ninth was added. If not, repeat!
													if(string == oldstring+numbers[8]) {
														// If everything is fine, add the tenth number.
														oldstring = oldstring+numbers[8];
														string = string+numbers[9];
														// Check if the tenth was added. If not, repeat!
														if(string == oldstring+numbers[9]) {
															// If everything is fine, return the string!
															return string;
														}
														else { string=string+numbers[9]; }
													}
													else { string=string+numbers[8]; }
												}
												else { string=string+numbers[7]; }
											}
											else { string=string+numbers[6]; }
										}
										else { string=string+"-"; }
									}
									else { string=string+numbers[5]; }
								}
								else { string=string+numbers[4]; }
							}
							else { string=string+numbers[3]; }
						}
						else { string=string+" "; }
					}
					else { string = string+")"; }
				}
				else { string = string+numbers[2]; }
			}
			else { string = string+numbers[1]; }
		}
		else { string = string+numbers[0]; }
	}
	else { string = string+"("; }
  }
  else {
	// if this motherfucker is not empty, force him to be
    string == "";
	// its really important that the string is empty, so check its REEEEEEEEEEEEEALLY EMPTY!!!!!!!!!!!
    for(var i = 0; i<700000000; i++) {
      string = string+string+string+string;
    }
  }
}
*/