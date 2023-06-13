function absentVowel(x) {
  if (!x.match(/a/)) return 0;  // each one checks with a /regular expression/ to see if the !string does not match
  else if (!x.match(/e/)) return 1;  //runs through each vowel
  else if (!x.match(/i/)) return 2;
  else if (!x.match(/o/)) return 3;
  else if (!x.match(/u/)) return 4;
}


ALSO


function absentVowel(x){
2
//what is str?
3
//what value is str?
4
//str is a string and it equals the string provided from the test
5
//not being given an empty string
6
//str with infinite set of characters > infinity and beyond
7
//one vowel per str
8
  
9
//BEGIN
10
//INIT - define variables, givens, assumptions
11
//define the vowels as an array
12
let vowels = ["a","e","i","o","u"]
13
let vowelIndex = null; //if given unexpected result, return null
14
//vowels are 
15
//return the index corresponding to the vowel array
16
//check for empty string
17
​
18
if(str.length === 0){
19
  return vowelIndex;
20
}
21
​
22
//return declared variable
23
//how do we check the string for each vowel
24
for(let i = 0; i < vowels.length; i++){
25
  //loop through each vowel in each array
26
  //see if the string contains each vowel
27
  if(str.indexOf(vowels[i]) == -1){
28
  //if it doesnt contain one of the vowels
29
  //set the vowelIndex to the iterator's  current value
30
     vowelIndex=i;
31
  //return the vowelIndex
32
     return vowelIndex;
33
  }
34
}
35
//END
36
}
