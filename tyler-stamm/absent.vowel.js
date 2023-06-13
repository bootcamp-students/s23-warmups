function absentVowel(x){
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels[i];
    if (!x.includes(vowel)) {
      return i;
    }
  }
}
