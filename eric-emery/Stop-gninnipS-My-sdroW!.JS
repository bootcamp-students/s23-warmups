function spinWords(string) {
  var words = string.split(" ");
  var newArr = [];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      var reversedWord = words[i].split("").reverse().join("");
      newArr.push(reversedWord);
    } else {
      newArr.push(words[i]);
    }
  }

  return newArr.join(" ");
}
