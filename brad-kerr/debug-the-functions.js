function multi(arr) {
  let answer = [1]
  for(let i = 0; i < arr.length; i++){
  answer *= arr[i]
  }        
  return answer
}

function add(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
  sum += arr[i]
  }        
  return sum
}

function reverse(str) {
  return str.split('').reverse().join('');
}
