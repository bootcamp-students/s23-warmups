def sq_in_rect(lng, wdth):
    # your code
    if lng == wdth:
        return None
    
    output = []
    while lng != wdth:
        if lng > wdth:
            lng -= wdth
            output.append(wdth)
        elif wdth > lng:
            wdth -= lng
            output.append(lng)
            
    output.append(lng)
    return output
            
            
    
#begin
#given a str of numbers that equate to a rectangle (length, width)
#must re evaluate the numbers to be equal to that of a square
#return new square values
