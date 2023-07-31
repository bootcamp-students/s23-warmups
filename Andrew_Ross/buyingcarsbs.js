function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
	while (startPriceNew > startPriceOld + moneySaved){
		moneySaved += savingperMonth;
		startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
		startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
		months++;
		if (months % 2 == 1){
			percentLossByMonth += .5;
		}
	}
	return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}
