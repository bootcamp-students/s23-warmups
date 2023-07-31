// BEGIN
// value decreaeses by 1.5 % every month
// the rate of decrease increases by .5 % every 2 months
// INPUT - numbers
// RETURN - list of 2 numbers first number is how many months it will take to save the money and the 2nd number is how much money he will have remaining
// if number in indice of 0 is greater than the number in indice of 1 return can buy car
// END

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let month = 0;
  let total = startPriceOld;
    while (total < startPriceNew) {
    total += savingperMonth;
    total -= startPriceOld * percentLossByMonth / 100;
    startPriceNew -= percentLossByMonth / 100 * startPriceNew
    startPriceOld -= percentLossByMonth / 100 * startPriceOld
    month ++;
      if (month % 2 !== 0) {
        percentLossByMonth += 0.5;
      } else {
        percentLossByMonth
      }
    }
  return [month, Math.round(total - startPriceNew)];
}