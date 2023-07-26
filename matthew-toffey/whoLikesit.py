def likes(names):
    output = ""
    if (len(names) == 0):
        output = "no one likes this"
    elif (len(names) == 1):
        output = str(names[0]) + " likes this"
    elif (len(names) == 2):
        output = str(names[0]) + " and " + str(names[1]) + " like this"
    elif (len(names) == 3):
        output = str(names[0]) + ", " + str(names[1]) + " and " + str(names[2]) + " like this"
    elif (len(names) >= 4):
        output = str(names[0]) + ", " + str(names[1]) + " and " + str(len(names) - 2) + " others like this"
    return output
    #begin
    #given a list of names based on liks
    #based on the names arr return name + "likes this" or "no one likes this"
    #if there are 4 or more names return the first 2 and "and # others like this"
    #end
