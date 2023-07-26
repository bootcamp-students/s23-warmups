def likes(names):
    # if empty, return "no one like this"
    # if names.length == 1, return names[0] + "like this"
    # if names.length == 2, return name[0] + "and" + name[1] + "like this"
    # elif names.length == 3, return name[0] + "," + "name[1]" + "and" + "name[2] + "like this
    # else return 
    
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return names[0] + " likes this"
    elif len(names) == 2:
        return names[0] + " and " + names[1] + " like this"
    elif len(names) == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(len(names)-2) + " others like this"
