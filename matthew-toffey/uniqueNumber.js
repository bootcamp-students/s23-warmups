function findUniq(array) {
  return array.find((item) => array.indexOf(item) === array.lastIndexOf(item))    
}
//BEGIN
//INIT
  //new value to hold output
  //
//FNCTN
  //arr.find to move through arr and locate proper index
  //arr.indexof/lastindexof to check through arr and determine unique value
  //return fnctn output
//END
