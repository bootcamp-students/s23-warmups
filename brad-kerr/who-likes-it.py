# Return: The display as shown in the example 
# Parameters: An array of names 
# A bunch of if else statements corrisponding to the names index, and strings.

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
