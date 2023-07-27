def sq_in_rect(lng, wdth):
    #checks if length and width are equal
    if lng == wdth:
        #returns nothing if they are
        return None
    #creates empty list
    squares = []
    #makes a loop that will continue as long as length is not equal to width
    while lng != wdth:
        #checks if length is greater
        if lng > wdth:
            #appends the width to the list
            squares.append(wdth)
            #subtracts width from the length
            lng -= wdth
        #if width is greater or something else happens
        else:
            #appends the length to the list
            squares.append(lng)
            #subtracts the length from the width
            wdth -= lng
    #the remaining squares with equal sides get appended after the loop ends
    squares.append(lng)
    #returns the list
    return squares
