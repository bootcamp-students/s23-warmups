function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  //your code here
  let months = 0;
  let savings = 0;
  
  while (savings + startPriceOld < startPriceNew) {
    months++;
    if (months % 2 === 0 ) {
      percentLossByMonth += .5;
    }
    startPriceOld *= (100 -percentLossByMonth ) /100;
    startPriceNew *= (100 -percentLossByMonth ) /100;
    savings += savingperMonth
  }
  
  const leftover = Math.round(savings +startPriceOld - startPriceNew);
  return [months,leftover]
}

// set month or time to 0 as a starting point, as well as savings


//savings + oldCarPrice < newCarPrice
// IF it's an even month THEN percentLossByMonth increases by 0.5
// oldCarPrice decreases by percentLossByMonth percent
// newCarPrice decreases by percentLossByMonth percent
//savings increases by savingPerMonth
//months increases by 1
