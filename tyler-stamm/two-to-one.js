function longest(s1, s2) {
  // your code
  // strings include only letter a-z
  // combine both strings and put them in order from a-z
  // each letter only once
  // use + to merge arrays together
  // use Set object to get rid of duplicates
  // use .sort and .join to organize letters and bring them together
  var newArray = s1 + s2;
  var destroyDuplicates = Array.from(new Set(newArray));
  var orderedList = destroyDuplicates.sort().join("");
  return orderedList;
}
