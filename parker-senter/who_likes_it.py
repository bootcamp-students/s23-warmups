def likes(names):
    #checks if theres no likes
    if len(names) == 0:
        return 'no one likes this'
    #checks if theres one like
    elif len(names) == 1:
        return names[0] + ' likes this'
    #checks if theres 2 likes
    elif len(names) == 2:
        return names[0] + ' and ' + names[1] + ' like this'
    #checks if theres 3 likes
    elif len(names) == 3:
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    #checks if theres 4 or more likes
    elif len(names) >= 4:
        return names[0] + ', ' + names[1] + ' and ' + str(len(names) - 2) + ' others like this'
    pass

"""
PSEUDOCODE
take in names list
check the length of names
if there is 0 return no likes
if 1 name return that one person likes it
if 2 names return 2 people like it
if 3 names return 3 people like it 
if 4 or more return first 2 names and how ever many others like it
"""
