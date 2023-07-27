# BEGIN
# INPUT - a positive integer for length and a positive integer for width
# CALCULATE - the size of each square from the rectangle
# first number output to the result is the MIN(lng, wdth)
# RETURN - either none of a list with the size of each square
# END
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
            