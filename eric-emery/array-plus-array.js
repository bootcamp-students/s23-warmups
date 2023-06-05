function arrayPlusArray(arr1, arr2) {
    //return arr1 + arr2; //something went wrong
    let newArr = arr1.concat(arr2);
    //console.log(arr1)
    //console.log(arr2)
      let val = newArr.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });
      return val;
  }
  /*PsuedoCode
  Function For concatenate arrays together
  
  Sum off all the numbers inside of array. */
