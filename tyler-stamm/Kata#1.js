function arrayPlusArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let val = newArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  });
  return val;
}
