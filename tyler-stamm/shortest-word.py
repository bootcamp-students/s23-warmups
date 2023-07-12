def find_short(s):
    # s is a string
    # return length of the shortest word in the string
    # loop through the string to find shortest word
    # return the length of that word
    # create new varialbe for shortest word
    # use .split and then key
    #return length
    shortest = min(s.split(), key=len)
    return len(shortest)
