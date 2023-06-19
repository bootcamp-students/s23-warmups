//

let answer = ['a', 'e', 'i', 'o', 'u'];

function absentVowel(x) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let answer = -1;
  for (let i = 0; i < vowels.length; i++) {
    if (x.indexOf(vowels[i]) === -1) {
      answer = i;
      break;
    }
  }
  return answer;
}
