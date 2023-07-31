function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  //sets months and savings to 0
  var months = 0;
  var savings = 0;

  //while loop will go on until startPriceOld and savings are greater than or equal to startPriceNew
  while (startPriceOld + savings < startPriceNew) {
    //each time it runs it adds 1 to months to show how many months have passed
    months += 1;
    //each time this runs it adds the savingperMonth to savings
    savings += savingperMonth;

    //checks if months is divisable by 2
    if (months % 2 === 0) {
      //everytime this if statement runs it adds 0.5 to precentLossByMonth
      percentLossByMonth += 0.5;
    }

    //checks the prices
    //multiplies both prices by (100 - perecentLossByMonth) / 100
    startPriceOld *= (100 - percentLossByMonth) / 100;
    startPriceNew *= (100 - percentLossByMonth) / 100;
  }
  
  //after while loop breaks it returns the months
  //also rounds startPriceOld + savings - startPriceNew to return the extra money after the purchase
  return [months, Math.round(startPriceOld + savings - startPriceNew)];
}
