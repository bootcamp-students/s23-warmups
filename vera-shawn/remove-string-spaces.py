# BEGIN
# INPUT string with spaces
# OUTPUT string without spaces
# RETURN result
# END

def no_space(x):
    new_x = ""
    for space in range(len(x)):
        if x[space] == " ":
            continue
        else: 
            new_x = new_x + x[space] 
    return new_x