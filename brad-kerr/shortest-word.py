# Return the shortest word from a string as an integer 
# Split the string into an array
# Compare the length of each word
# Return the smallest word

def find_short(s):
    shortest = min(s.split(), key=len)
    getLength = len(shortest)
    return getLength
