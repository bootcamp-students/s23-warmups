# Return an integer that is the number of litres the cyclist drank given a time period. 
# Round number DOWN 
# Parameters: The time taken. 

import math

def litres(time):
    answer = math.floor(time / 2)
    return answer
