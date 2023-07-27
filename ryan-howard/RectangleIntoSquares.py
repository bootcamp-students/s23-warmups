def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None
    squares = []

    while lng != wdth:
        if lng > wdth:
            squares.append(wdth)
            lng -= wdth
        else:
            squares.append(lng)
            wdth -= lng

    squares.append(lng) 

    return squares


#INIT
#If length equals width, then it's already a square, and returns none
#Create an empty array for the collection of integers
#If length is greater than width, means it isnt a square yet so cut the square from width
#then update new length by subtracting what you took out
#then append what you tookj out
