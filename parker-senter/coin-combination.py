import math
def coin_combo(cents):
    answer = [0, 0, 0, 0]
    answer[3] = math.floor(cents / 25)
    cents = cents % 25
    answer[2] = math.floor(cents / 10)
    cents = cents % 10
    answer[1] = math.floor(cents / 5)
    cents = cents % 5
    answer[0] = cents
    return answer

"""
PSEUDOCODE
take in array of numbers (cents)
make an empty array
check how many quaters, then dimes, then nickles, then pennies
take the number of each and add to the array
return the array
"""
