function createPhoneNumber(numbers){
  let phoneNumber = "(aaa) aaa-aaaa" //Set phone number format
  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace("a", numbers [i]) // Replace each "a" with an array digit
}
return phoneNumber //Returns comleted number
}
