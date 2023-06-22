function longest(s1, s2) {
const s3 = s1.concat(s2);
const s4 = Array.from(new Set(s3));
const newString = s4.sort().join("");
return newString;
  
};
/*START
 Two strings, return a new sorted string
  Return each letter only once
  Return them alphabetically
END*/
