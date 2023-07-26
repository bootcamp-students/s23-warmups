# BEGIN
# INPUT - an array of names of people that like an item
# IF - array is empty RETURN "no one likes this"
# ELIF 2 or 3 ppl like it list both names "so, so and so like this"
# ELIF if more than 3 like it RETURN "so, so and # others like this"
# END

def likes(names):
    
    array = len(names)
    
    if array == 0:
        return "no one likes this"
    elif array == 1:
        return names[0] + ' likes this'
    elif array == 2:
        return names[0] + ' and ' + names[1] + ' like this'
    elif array == 3:
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    else:
        return names[0] + ', ' + names[1] + ' and ' + str(array - 2) + ' others like this'