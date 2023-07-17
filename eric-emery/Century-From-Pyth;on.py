def century(year):
    # Finish this :)
    century = 0
    while year > 0: # The loop will add 1 to the century every time it subtracts 100, the loop will stop when the year hits 0
        year = year - 100 # 
        century = century + 1
    return century


# PSEUDOCODE

# Need an empty variable for century
# some type of loop?
# given a number we could add 1 to the century variable for every time the year is divisible by 100.
