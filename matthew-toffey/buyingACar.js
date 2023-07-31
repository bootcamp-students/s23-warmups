function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let month = 0;
  let total = startPriceOld;
    while (total < startPriceNew) {
    total += savingperMonth;
    total -= startPriceOld * percentLossByMonth / 100;
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
    month ++;
      if (month % 2 !== 0) {
        percentLossByMonth += 0.5;
      } else {
        percentLossByMonth
      }
    }
  return [month, Math.round(total - startPriceNew)];
}
//BEGIN
//GIVEN
  //old car price, new car price, monthly loss as % and savings per month
//SHOULD 
  //return month reached to purchase car, and savings left
