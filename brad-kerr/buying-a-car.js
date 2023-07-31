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

    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    startPriceOld *= (100 - percentLossByMonth) / 100;
    startPriceNew *= (100 - percentLossByMonth) / 100;
  }

  return [months, Math.round(startPriceOld + savings - startPriceNew)];
}
