// Return: A boolean true or false if part of str1 rearranged can match str2
// Parameters: Two strings, both lower case. 
// Count up the ammount of times each character appears
// Compare the letters from str2 to str1
// If the letters in str2 are in str1 then return true, else false

function scramble(str1, str2) {
  const count = {}
  
  for (const letter of str1) {
    count[letter] = (count[letter] || 0) + 1
  }
  for (const letter of str2) {
    if (!count[letter]) {
      return false
    }
    count[letter]--
  }
  return true
}
