function findUniq(arr) {
  arr.sort(); // Sort the array in ascending order
  
  // Check if the first two elements are unique
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  
  // Iterate through the sorted array starting from the third element
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[1]) {
      return arr[i];
    }
  }
  
  // If no unique number is found, return null or handle the case as needed
  return null;
}
