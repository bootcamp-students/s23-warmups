# Return: A list of integers that corrispond to the dimensions of the squares you can fit inside 
# the rectangle given it's dimensions. |
# Parameters: Integers corrisponding to the length and width of the rectangle. 
# First number is equal to the smallest parameter 
# Second is the difference between the parameters 
# Divide the first number by the second number and that's how many of the second number there is.

def sq_in_rect(lng, wdth):
    answer = []
    if lng == wdth:
        return None
    while lng != wdth:
        if lng > wdth:
            answer.append(wdth)
            lng -= wdth
        else:
            answer.append(lng)
            wdth -= lng
    answer.append(lng)
    return answer
