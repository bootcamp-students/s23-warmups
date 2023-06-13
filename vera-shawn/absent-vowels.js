//BEGIN
// what is x?
// what value is x?
// x is a string and it equals the string provided from the test
// not being given an empty string
// str with infinite characters > infinity and beyond
// one vowel per string
//INIT - define variables - we want to define variables, given, assumptions, known-knowns
// define vowels as an array    
let vowels = ["a", "e", "i", "o", "u"];

// declare a vowel index.

let vowelIndex = null; // if given something unexpected, return null

// check for empty string
if (x.length === 0) {
    return vowelIndex;
}

// does the string contain every vowel in the array?
// how do we check the string (x) for each vowel?

// for of loop to find vowels of x
for (vowel of x) {
    // see if the string contains each vowel

    for (let i = 0; i < vowels.length; i++) {
        if (str.indeOf(vowels[i]) == -1) {
            // if it doesn't contain one of the vowels
            // set the vowelIndex to the interator's current value
            vowelIndex = i;
            // return the vowelIndex
            return vowelIndex;
        }
    }
}

// return index corresponding to the vowel array.
return vowelIndex;
      //END
    }