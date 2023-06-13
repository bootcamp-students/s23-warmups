function absentVowel(x) {
  if (!x.match(/a/)) return 0;  // each one checks with a /regular expression/ to see if the !string does not match
  else if (!x.match(/e/)) return 1;  //runs through each vowel
  else if (!x.match(/i/)) return 2;
  else if (!x.match(/o/)) return 3;
  else if (!x.match(/u/)) return 4;
}
