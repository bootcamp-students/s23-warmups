function coinCombo (cents) {
let answer = [0, 0, 0, 0]
  
answer[3] = Math.floor(cents/25)
cents = cents % 25
    
answer[2] = Math.floor(cents/10)
cents = cents % 10
    
answer[1] = Math.floor(cents/5)
cents = cents % 5
    
answer[0] = cents
  
return answer;

}
