//filter out  strings but not the integers

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item == 'number');
}
