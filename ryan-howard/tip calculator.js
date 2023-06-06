// BEGIN
// INIT 
    // Init(calculate percentage of given input)
        //Bill inputs

//VARIABLES
        //terribleTip
        //poorTip
        //goodTip
        //greatTip
        //excellentTip
    //
        //roundTip
        //totalBill
        //serviceQuality
            //terribleService
            //poorService
            //goodService
            //greatService
            //excellentService

//FUNCTIONS
        // totalBill(number) {
            // if (serviceQuality < goodService) {
                //return poorTip(number)
            // else (serviceQuality >= goodService) {
                //return (goodTip, greatTip, excellentTip)
            //}
            //}
        //}
//END

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
    }
    
    // the rating.toLowerCase() acts as a string calling the string in question to lower case.
    // rate = rating.tolowercase is just saying the variable rate is rating, but lower case
    // the first statement is if rate === excellent, return math.ceil (rounding up) to the 20% of the amount you spent.
    // the else ifs are the same with the numbers designated from great(15) to terrible(0)
    // 