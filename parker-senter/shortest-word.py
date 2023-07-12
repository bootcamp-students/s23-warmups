def find_short(s):
    #finds the shortest word
    shortest = min(s.split(), key=len)
    #gets the number of letters in the shortest word
    getLength = len(shortest)
    return getLength

"""
PSEUDOCODE
take in string of word(s)
find the shortest word
get the amount of letters in that word
return the number of letters
"""
