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
